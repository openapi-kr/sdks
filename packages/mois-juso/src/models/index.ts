/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AddrCoordResponse
 */
export interface AddrCoordResponse {
    /**
     * 
     * @type {AddrCoordResults}
     * @memberof AddrCoordResponse
     */
    results: AddrCoordResults;
}
/**
 * 
 * @export
 * @interface AddrCoordResults
 */
export interface AddrCoordResults {
    /**
     * 
     * @type {Common}
     * @memberof AddrCoordResults
     */
    common: Common;
    /**
     * 
     * @type {Array<Coord>}
     * @memberof AddrCoordResults
     */
    juso: Array<Coord> | null;
}
/**
 * 
 * @export
 * @interface AddrDetailResponse
 */
export interface AddrDetailResponse {
    /**
     * 
     * @type {AddrDetailResults}
     * @memberof AddrDetailResponse
     */
    results: AddrDetailResults;
}
/**
 * 
 * @export
 * @interface AddrDetailResults
 */
export interface AddrDetailResults {
    /**
     * 
     * @type {Common}
     * @memberof AddrDetailResults
     */
    common: Common;
    /**
     * 
     * @type {Array<DetailAddress>}
     * @memberof AddrDetailResults
     */
    juso: Array<DetailAddress> | null;
}
/**
 * 
 * @export
 * @interface AddrEngResponse
 */
export interface AddrEngResponse {
    /**
     * 
     * @type {AddrEngResults}
     * @memberof AddrEngResponse
     */
    results: AddrEngResults;
}
/**
 * 
 * @export
 * @interface AddrEngResults
 */
export interface AddrEngResults {
    /**
     * 
     * @type {Common}
     * @memberof AddrEngResults
     */
    common: Common;
    /**
     * 
     * @type {Array<EnglishAddress>}
     * @memberof AddrEngResults
     */
    juso: Array<EnglishAddress> | null;
}
/**
 * 
 * @export
 * @interface AddrLinkResponse
 */
export interface AddrLinkResponse {
    /**
     * 
     * @type {AddrLinkResults}
     * @memberof AddrLinkResponse
     */
    results: AddrLinkResults;
}
/**
 * 
 * @export
 * @interface AddrLinkResults
 */
export interface AddrLinkResults {
    /**
     * 
     * @type {Common}
     * @memberof AddrLinkResults
     */
    common: Common;
    /**
     * 
     * @type {Array<Address>}
     * @memberof AddrLinkResults
     */
    juso: Array<Address> | null;
}
/**
 * 
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * 전체 도로명주소
     * @type {string}
     * @memberof Address
     */
    roadAddr: string;
    /**
     * 도로명주소(참고항목 제외)
     * @type {string}
     * @memberof Address
     */
    roadAddrPart1: string;
    /**
     * 도로명주소 참고항목
     * @type {string}
     * @memberof Address
     */
    roadAddrPart2?: string;
    /**
     * 지번주소
     * @type {string}
     * @memberof Address
     */
    jibunAddr: string;
    /**
     * 도로명주소(영문)
     * @type {string}
     * @memberof Address
     */
    engAddr: string;
    /**
     * 우편번호
     * @type {string}
     * @memberof Address
     */
    zipNo: string;
    /**
     * 행정구역코드
     * @type {string}
     * @memberof Address
     */
    admCd: string;
    /**
     * 도로명코드
     * @type {string}
     * @memberof Address
     */
    rnMgtSn: string;
    /**
     * 건물관리번호
     * @type {string}
     * @memberof Address
     */
    bdMgtSn: string;
    /**
     * 상세건물명
     * @type {string}
     * @memberof Address
     */
    detBdNmList?: string;
    /**
     * 건물명
     * @type {string}
     * @memberof Address
     */
    bdNm?: string;
    /**
     * 공동주택여부
     * * `1` : 공동주택
     * * `0` : 비공동주택
     * @type {string}
     * @memberof Address
     */
    bdKdcd: AddressBdKdcdEnum;
    /**
     * 시도명
     * @type {string}
     * @memberof Address
     */
    siNm: string;
    /**
     * 시군구명
     * @type {string}
     * @memberof Address
     */
    sggNm: string;
    /**
     * 읍면동명
     * @type {string}
     * @memberof Address
     */
    emdNm: string;
    /**
     * 법정리명
     * @type {string}
     * @memberof Address
     */
    liNm?: string;
    /**
     * 도로명
     * @type {string}
     * @memberof Address
     */
    rn: string;
    /**
     * 지하여부
     * * `0` : 지상
     * * `1` : 지하)
     * @type {string}
     * @memberof Address
     */
    udrtYn: AddressUdrtYnEnum;
    /**
     * 건물본번
     * @type {string}
     * @memberof Address
     */
    buldMnnm: string;
    /**
     * 건물부번
     * @type {string}
     * @memberof Address
     */
    buldSlno: string;
    /**
     * 산여부
     * * `0` : 대지
     * * `1` : 산
     * @type {string}
     * @memberof Address
     */
    mtYn: AddressMtYnEnum;
    /**
     * 지번본번(번지)
     * @type {string}
     * @memberof Address
     */
    lnbrMnnm: string;
    /**
     * 지번부번(호)
     * @type {string}
     * @memberof Address
     */
    lnbrSlno: string;
    /**
     * 읍면동일련번호
     * @type {string}
     * @memberof Address
     */
    emdNo: string;
    /**
     * 변동이력여부 (\* 2020년12월8일 추가된 항목)
     * * `0`: 현행 주소정보
     * * `1`: 요청변수의 keyword(검색어)가 변동된 주소정보에서 검색된 정보)
     * @type {string}
     * @memberof Address
     */
    hstryYn?: AddressHstryYnEnum;
    /**
     * 관련지번 (\* 2020년12월8일 추가된 항목)
     * @type {string}
     * @memberof Address
     */
    relJibun?: string;
    /**
     * 관할주민센터 (\* 2020년12월8일 추가된 항목)
     * 
     * ※ 참고정보이며, 실제와 다를 수 있습니다.
     * @type {string}
     * @memberof Address
     */
    hemdNm?: string;
}

/**
 * 공동주택여부
 * * `1` : 공동주택
 * * `0` : 비공동주택
 */
export type AddressBdKdcdEnum =
    '0'|
    '1'

const AddressBdKdcdEnumValues = [
    '0',
    '1',
]

export function isAddressBdKdcdEnum(value: any): value is AddressBdKdcdEnum {
    return AddressBdKdcdEnumValues.indexOf(value as unknown as AddressBdKdcdEnum) !== -1
}

/**
 * 지하여부
 * * `0` : 지상
 * * `1` : 지하)
 */
export type AddressUdrtYnEnum =
    '0'|
    '1'

const AddressUdrtYnEnumValues = [
    '0',
    '1',
]

export function isAddressUdrtYnEnum(value: any): value is AddressUdrtYnEnum {
    return AddressUdrtYnEnumValues.indexOf(value as unknown as AddressUdrtYnEnum) !== -1
}

/**
 * 산여부
 * * `0` : 대지
 * * `1` : 산
 */
export type AddressMtYnEnum =
    '0'|
    '1'

const AddressMtYnEnumValues = [
    '0',
    '1',
]

export function isAddressMtYnEnum(value: any): value is AddressMtYnEnum {
    return AddressMtYnEnumValues.indexOf(value as unknown as AddressMtYnEnum) !== -1
}

/**
 * 변동이력여부 (\* 2020년12월8일 추가된 항목)
 * * `0`: 현행 주소정보
 * * `1`: 요청변수의 keyword(검색어)가 변동된 주소정보에서 검색된 정보)
 */
export type AddressHstryYnEnum =
    '0'|
    '1'

const AddressHstryYnEnumValues = [
    '0',
    '1',
]

export function isAddressHstryYnEnum(value: any): value is AddressHstryYnEnum {
    return AddressHstryYnEnumValues.indexOf(value as unknown as AddressHstryYnEnum) !== -1
}


/**
 * 
 * @export
 * @interface Common
 */
export interface Common {
    /**
     * 총 검색 데이터수
     * @type {string}
     * @memberof Common
     */
    totalCount: string;
    /**
     * 페이지 번호
     * @type {string}
     * @memberof Common
     */
    currentPage: string;
    /**
     * 페이지당 출력할 결과 Row 수
     * @type {string}
     * @memberof Common
     */
    countPerPage: string;
    /**
     * 에러 코드
     * @type {string}
     * @memberof Common
     */
    errorCode: CommonErrorCodeEnum;
    /**
     * 에러 메시지
     * @type {string}
     * @memberof Common
     */
    errorMessage: string;
}

/**
 * 에러 코드
 */
export type CommonErrorCodeEnum =
    '0'|
    '400'|
    '-999'|
    'E0001'|
    'E0005'|
    'E0006'|
    'E0008'|
    'E0009'|
    'E0010'|
    'E0011'|
    'E0012'|
    'E0013'|
    'E0014'|
    'E0015'

const CommonErrorCodeEnumValues = [
    '0',
    '400',
    '-999',
    'E0001',
    'E0005',
    'E0006',
    'E0008',
    'E0009',
    'E0010',
    'E0011',
    'E0012',
    'E0013',
    'E0014',
    'E0015',
]

export function isCommonErrorCodeEnum(value: any): value is CommonErrorCodeEnum {
    return CommonErrorCodeEnumValues.indexOf(value as unknown as CommonErrorCodeEnum) !== -1
}


/**
 * 
 * @export
 * @interface Coord
 */
export interface Coord {
    /**
     * 행정구역코드
     * @type {string}
     * @memberof Coord
     */
    admCd: string;
    /**
     * 도로명코드
     * @type {string}
     * @memberof Coord
     */
    rnMgtSn: string;
    /**
     * 건물관리번호
     * @type {string}
     * @memberof Coord
     */
    bdMgtSn: string;
    /**
     * 지하여부
     * * `0` : 지상
     * - `1` : 지하
     * @type {string}
     * @memberof Coord
     */
    udrtYn: CoordUdrtYnEnum;
    /**
     * 건물본번
     * @type {string}
     * @memberof Coord
     */
    buldMnnm: string;
    /**
     * 건물부번
     * @type {string}
     * @memberof Coord
     */
    buldSlno: string;
    /**
     * X좌표
     * @type {string}
     * @memberof Coord
     */
    entX: string;
    /**
     * Y좌표
     * @type {string}
     * @memberof Coord
     */
    entY: string;
    /**
     * 건물명
     * @type {string}
     * @memberof Coord
     */
    bdNm?: string;
}

/**
 * 지하여부
 * * `0` : 지상
 * - `1` : 지하
 */
export type CoordUdrtYnEnum =
    '0'|
    '1'

const CoordUdrtYnEnumValues = [
    '0',
    '1',
]

export function isCoordUdrtYnEnum(value: any): value is CoordUdrtYnEnum {
    return CoordUdrtYnEnumValues.indexOf(value as unknown as CoordUdrtYnEnum) !== -1
}


/**
 * 
 * @export
 * @interface DetailAddress
 */
export interface DetailAddress {
    /**
     * 행정구역코드
     * @type {string}
     * @memberof DetailAddress
     */
    admCd: string;
    /**
     * 도로명코드
     * @type {string}
     * @memberof DetailAddress
     */
    rnMgtSn: string;
    /**
     * 지하여부
     * * `0` : 지상
     * * `1` : 지하
     * @type {string}
     * @memberof DetailAddress
     */
    udrtYn: DetailAddressUdrtYnEnum;
    /**
     * 건물본번
     * @type {string}
     * @memberof DetailAddress
     */
    buldMnnm: string;
    /**
     * 건물부번
     * @type {string}
     * @memberof DetailAddress
     */
    buldSlno: string;
    /**
     * 동 정보
     * @type {string}
     * @memberof DetailAddress
     */
    dongNm?: string;
    /**
     * 층 정보
     * @type {string}
     * @memberof DetailAddress
     */
    floorNm?: string;
    /**
     * 호 정보
     * @type {string}
     * @memberof DetailAddress
     */
    hoNm?: string;
}

/**
 * 지하여부
 * * `0` : 지상
 * * `1` : 지하
 */
export type DetailAddressUdrtYnEnum =
    '0'|
    '1'

const DetailAddressUdrtYnEnumValues = [
    '0',
    '1',
]

export function isDetailAddressUdrtYnEnum(value: any): value is DetailAddressUdrtYnEnum {
    return DetailAddressUdrtYnEnumValues.indexOf(value as unknown as DetailAddressUdrtYnEnum) !== -1
}


/**
 * 
 * @export
 * @interface EnglishAddress
 */
export interface EnglishAddress {
    /**
     * 영문 도로명주소
     * @type {string}
     * @memberof EnglishAddress
     */
    roadAddr: string;
    /**
     * 영문 지번주소
     * @type {string}
     * @memberof EnglishAddress
     */
    jiBunAddr: string;
    /**
     * 우편번호
     * @type {string}
     * @memberof EnglishAddress
     */
    zipNo: string;
    /**
     * 행정구역코드
     * @type {string}
     * @memberof EnglishAddress
     */
    admCd: string;
    /**
     * 도로명코드
     * @type {string}
     * @memberof EnglishAddress
     */
    rnMgtSn: string;
    /**
     * 공동주택여부
     * * `1` : 공동주택
     * * `0` : 비공동주택
     * @type {string}
     * @memberof EnglishAddress
     */
    bdKdcd: EnglishAddressBdKdcdEnum;
    /**
     * 영문 시도명
     * @type {string}
     * @memberof EnglishAddress
     */
    siNm: string;
    /**
     * 영문 시군구명
     * @type {string}
     * @memberof EnglishAddress
     */
    sggNm: string;
    /**
     * 영문 읍면동명
     * @type {string}
     * @memberof EnglishAddress
     */
    emdNm: string;
    /**
     * 영문 법정리명
     * @type {string}
     * @memberof EnglishAddress
     */
    liNm?: string;
    /**
     * 영문 도로명
     * @type {string}
     * @memberof EnglishAddress
     */
    rn: string;
    /**
     * 지하여부
     * * `0` : 지상
     * * `1` : 지하
     * @type {string}
     * @memberof EnglishAddress
     */
    udrtYn: EnglishAddressUdrtYnEnum;
    /**
     * 건물본번
     * @type {string}
     * @memberof EnglishAddress
     */
    buldMnnm: string;
    /**
     * 건물부번
     * @type {string}
     * @memberof EnglishAddress
     */
    buldSlno: string;
    /**
     * 산여부
     * * `0` : 대지
     * * `1` : 산
     * @type {string}
     * @memberof EnglishAddress
     */
    mtYn: EnglishAddressMtYnEnum;
    /**
     * 지번본번(번지)
     * @type {string}
     * @memberof EnglishAddress
     */
    lnbrMnnm: string;
    /**
     * 지번부번(호)
     * @type {string}
     * @memberof EnglishAddress
     */
    lnbrSlno: string;
    /**
     * 도로명주소(한글)
     * @type {string}
     * @memberof EnglishAddress
     */
    korAddr: string;
}

/**
 * 공동주택여부
 * * `1` : 공동주택
 * * `0` : 비공동주택
 */
export type EnglishAddressBdKdcdEnum =
    '1'|
    '0'

const EnglishAddressBdKdcdEnumValues = [
    '1',
    '0',
]

export function isEnglishAddressBdKdcdEnum(value: any): value is EnglishAddressBdKdcdEnum {
    return EnglishAddressBdKdcdEnumValues.indexOf(value as unknown as EnglishAddressBdKdcdEnum) !== -1
}

/**
 * 지하여부
 * * `0` : 지상
 * * `1` : 지하
 */
export type EnglishAddressUdrtYnEnum =
    '0'|
    '1'

const EnglishAddressUdrtYnEnumValues = [
    '0',
    '1',
]

export function isEnglishAddressUdrtYnEnum(value: any): value is EnglishAddressUdrtYnEnum {
    return EnglishAddressUdrtYnEnumValues.indexOf(value as unknown as EnglishAddressUdrtYnEnum) !== -1
}

/**
 * 산여부
 * * `0` : 대지
 * * `1` : 산
 */
export type EnglishAddressMtYnEnum =
    '0'|
    '1'

const EnglishAddressMtYnEnumValues = [
    '0',
    '1',
]

export function isEnglishAddressMtYnEnum(value: any): value is EnglishAddressMtYnEnum {
    return EnglishAddressMtYnEnumValues.indexOf(value as unknown as EnglishAddressMtYnEnum) !== -1
}


