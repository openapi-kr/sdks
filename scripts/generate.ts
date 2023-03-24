import execa from 'execa'
import path from 'path'
import fs from 'fs'

async function getUpdatedSpecifications() {
  const { stdout } = await execa(
    'git',
    ['-c', 'core.quotepath=false', 'diff', '--name-only', 'HEAD~1'],
    {
      cwd: path.join(__dirname, '..', 'specifications'),
      stdout: 'pipe',
    }
  )

  return stdout
    .split('\n')
    .filter(
      (file) => file.startsWith('specifications') && file.endsWith('.yaml')
    )
}

export async function getLocalPackageVersion(packageName: string) {
  const packagePath = path.join(__dirname, '..', 'packages', packageName)
  if (!fs.existsSync(packagePath)) {
    return '0.0.0-alpha.0'
  }

  const file = await fs.promises.readFile(
    path.join(packagePath, 'package.json'),
    'utf-8'
  )

  const { version } = JSON.parse(file)
  return version
}

async function cleanPreviousPackage(packageName: string) {
  if (!fs.existsSync(path.join(__dirname, '..', 'packages', packageName))) {
    return
  }

  await fs.promises.rm(
    path.join(__dirname, '..', 'packages', packageName, 'src'),
    {
      recursive: true,
    }
  )
}

export async function generatePackage(specification: string) {
  const packageName = specification
    .split('/')
    .filter((name) => name !== 'specifications')
    .map((name) => name.replace('.yaml', ''))
    .join('-')

  await cleanPreviousPackage(packageName)

  const npmVersion = await getLocalPackageVersion(packageName)

  const input = path.join(__dirname, '..', 'specifications', specification)
  const output = path.join(__dirname, '..', 'packages', packageName)

  await execa('pnpm', [
    'openapi-generator-cli',
    'generate',
    '-i',
    input,
    '-g',
    'typescript-fetch',
    '-o',
    output,
    '-t',
    path.join(__dirname, '..', 'template'),
    `--additional-properties=npmName=@openapi-kr/${packageName}`,
    `--additional-properties=npmVersion=${npmVersion}`,
    '--additional-properties=supportsES6=true',
    '--additional-properties=allowUnicodeIdentifiers=true',
  ])
}

async function pnpmInstall() {
  await execa('pnpm', ['install', '--no-frozen-lockfile'], {
    cwd: path.join(__dirname, '..'),
  })
}

async function generate() {
  const specifications = await getUpdatedSpecifications()
  for (const specification of specifications) {
    await generatePackage(specification)
  }
  await pnpmInstall()
}

generate()
