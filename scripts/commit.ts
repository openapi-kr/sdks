import execa from 'execa'
import path from 'path'

async function getSpecificationsCommitMessage() {
  const commitMessage = await execa('git', ['log', '-1', '--format=%B'], {
    cwd: path.join(__dirname, '..', 'specifications'),
  })
  return commitMessage.stdout
}

async function commit() {
  const commitMessage = await getSpecificationsCommitMessage()
  await execa('git', ['add', '-A'])
  await execa('git', ['commit', '-m', commitMessage])
  await execa('git', ['push', 'origin', 'main'])
}

commit()
