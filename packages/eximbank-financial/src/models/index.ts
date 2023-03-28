/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface ExchangeFailed
 */
export interface ExchangeFailed {
    /**
     * 조회 결과
     * | 결과코드 | 설명 |
     * | --- | --- |
     * | 2 | DATA코드 오류 |
     * | 3 | 인증코드 오류 |
     * | 4 | 일일제한횟수 마감 |
     * @type {number}
     * @memberof ExchangeFailed
     */
    result: ExchangeFailedResultEnum;
    /**
     * 통화코드
     * @type {string}
     * @memberof ExchangeFailed
     */
    cur_unit: string | null;
    /**
     * 국가/통화명
     * @type {string}
     * @memberof ExchangeFailed
     */
    cur_nm: string | null;
    /**
     * 전신환(송금) 받으실때
     * @type {string}
     * @memberof ExchangeFailed
     */
    ttb: string | null;
    /**
     * 전신환(송금) 보내실때
     * @type {string}
     * @memberof ExchangeFailed
     */
    tts: string | null;
    /**
     * 매매 기준율
     * @type {string}
     * @memberof ExchangeFailed
     */
    deal_bas_r: string | null;
    /**
     * 장부가격
     * @type {string}
     * @memberof ExchangeFailed
     */
    bkpr: string | null;
    /**
     * 년환가료율
     * @type {string}
     * @memberof ExchangeFailed
     */
    yy_efee_r: string | null;
    /**
     * 10일환가료율
     * @type {string}
     * @memberof ExchangeFailed
     */
    ten_dd_efee_r: string | null;
    /**
     * 서울외국환중개 매매기준율
     * @type {string}
     * @memberof ExchangeFailed
     */
    kftc_deal_bas_r: string | null;
    /**
     * 서울외국환중개 장부가격
     * @type {string}
     * @memberof ExchangeFailed
     */
    kftc_bkpr: string | null;
}

/**
 * 조회 결과
 * | 결과코드 | 설명 |
 * | --- | --- |
 * | 2 | DATA코드 오류 |
 * | 3 | 인증코드 오류 |
 * | 4 | 일일제한횟수 마감 |
 */
export type ExchangeFailedResultEnum =
    2|
    3|
    4

const ExchangeFailedResultEnumValues = [
    2,
    3,
    4,
]

export function isExchangeFailedResultEnum(value: any): value is ExchangeFailedResultEnum {
    return ExchangeFailedResultEnumValues.indexOf(value as unknown as ExchangeFailedResultEnum) !== -1
}


/**
 * @type ExchangeResponse
 * 
 * @export
 */
export type ExchangeResponse = ExchangeFailed | ExchangeSuccess;
/**
 * 
 * @export
 * @interface ExchangeSuccess
 */
export interface ExchangeSuccess {
    /**
     * 조회 결과
     * @type {number}
     * @memberof ExchangeSuccess
     */
    result: ExchangeSuccessResultEnum;
    /**
     * 통화코드
     * @type {string}
     * @memberof ExchangeSuccess
     */
    cur_unit: string;
    /**
     * 국가/통화명
     * @type {string}
     * @memberof ExchangeSuccess
     */
    cur_nm: string;
    /**
     * 전신환(송금) 받으실때
     * @type {string}
     * @memberof ExchangeSuccess
     */
    ttb: string;
    /**
     * 전신환(송금) 보내실때
     * @type {string}
     * @memberof ExchangeSuccess
     */
    tts: string;
    /**
     * 매매 기준율
     * @type {string}
     * @memberof ExchangeSuccess
     */
    deal_bas_r: string;
    /**
     * 장부가격
     * @type {string}
     * @memberof ExchangeSuccess
     */
    bkpr: string;
    /**
     * 년환가료율
     * @type {string}
     * @memberof ExchangeSuccess
     */
    yy_efee_r: string;
    /**
     * 10일환가료율
     * @type {string}
     * @memberof ExchangeSuccess
     */
    ten_dd_efee_r: string;
    /**
     * 서울외국환중개 매매기준율
     * @type {string}
     * @memberof ExchangeSuccess
     */
    kftc_deal_bas_r: string;
    /**
     * 서울외국환중개 장부가격
     * @type {string}
     * @memberof ExchangeSuccess
     */
    kftc_bkpr: string;
}

/**
 * 조회 결과
 */
export type ExchangeSuccessResultEnum =
    1

const ExchangeSuccessResultEnumValues = [
    1,
]

export function isExchangeSuccessResultEnum(value: any): value is ExchangeSuccessResultEnum {
    return ExchangeSuccessResultEnumValues.indexOf(value as unknown as ExchangeSuccessResultEnum) !== -1
}


/**
 * 
 * @export
 * @interface InterestFailed
 */
export interface InterestFailed {
    /**
     * 조회 결과
     * | 결과코드 | 설명 |
     * | --- | --- |
     * | 2 | DATA코드 오류 |
     * | 3 | 인증코드 오류 |
     * | 4 | 일일제한횟수 마감 |
     * @type {number}
     * @memberof InterestFailed
     */
    result: InterestFailedResultEnum;
    /**
     * 대출기간
     * @type {string}
     * @memberof InterestFailed
     */
    sfln_intrc_nm: string | null;
    /**
     * 고정기준금리
     * @type {string}
     * @memberof InterestFailed
     */
    int_r: string | null;
}

/**
 * 조회 결과
 * | 결과코드 | 설명 |
 * | --- | --- |
 * | 2 | DATA코드 오류 |
 * | 3 | 인증코드 오류 |
 * | 4 | 일일제한횟수 마감 |
 */
export type InterestFailedResultEnum =
    2|
    3|
    4

const InterestFailedResultEnumValues = [
    2,
    3,
    4,
]

export function isInterestFailedResultEnum(value: any): value is InterestFailedResultEnum {
    return InterestFailedResultEnumValues.indexOf(value as unknown as InterestFailedResultEnum) !== -1
}


/**
 * @type InterestResponseInner
 * 
 * @export
 */
export type InterestResponseInner = InterestFailed | InterestSuccess;
/**
 * 
 * @export
 * @interface InterestSuccess
 */
export interface InterestSuccess {
    /**
     * 조회 결과
     * @type {number}
     * @memberof InterestSuccess
     */
    result: InterestSuccessResultEnum;
    /**
     * 대출기간
     * @type {string}
     * @memberof InterestSuccess
     */
    sfln_intrc_nm: string;
    /**
     * 고정기준금리
     * @type {string}
     * @memberof InterestSuccess
     */
    int_r: string;
}

/**
 * 조회 결과
 */
export type InterestSuccessResultEnum =
    1

const InterestSuccessResultEnumValues = [
    1,
]

export function isInterestSuccessResultEnum(value: any): value is InterestSuccessResultEnum {
    return InterestSuccessResultEnumValues.indexOf(value as unknown as InterestSuccessResultEnum) !== -1
}


/**
 * 
 * @export
 * @interface InternationalFailed
 */
export interface InternationalFailed {
    /**
     * 조회 결과
     * | 결과코드 | 설명 |
     * | --- | --- |
     * | 2 | DATA코드 오류 |
     * | 3 | 인증코드 오류 |
     * | 4 | 일일제한횟수 마감 |
     * @type {number}
     * @memberof InternationalFailed
     */
    result: InternationalFailedResultEnum;
    /**
     * 금리 통화 정보
     * @type {string}
     * @memberof InternationalFailed
     */
    cur_fund: string | null;
    /**
     * 금리 기간 정보
     * @type {string}
     * @memberof InternationalFailed
     */
    sfln_intrc_nm: string | null;
    /**
     * 금리 정보
     * @type {string}
     * @memberof InternationalFailed
     */
    int_r: string | null;
}

/**
 * 조회 결과
 * | 결과코드 | 설명 |
 * | --- | --- |
 * | 2 | DATA코드 오류 |
 * | 3 | 인증코드 오류 |
 * | 4 | 일일제한횟수 마감 |
 */
export type InternationalFailedResultEnum =
    2|
    3|
    4

const InternationalFailedResultEnumValues = [
    2,
    3,
    4,
]

export function isInternationalFailedResultEnum(value: any): value is InternationalFailedResultEnum {
    return InternationalFailedResultEnumValues.indexOf(value as unknown as InternationalFailedResultEnum) !== -1
}


/**
 * @type InternationalResponse
 * 
 * @export
 */
export type InternationalResponse = InternationalFailed | InternationalSuccess;
/**
 * 
 * @export
 * @interface InternationalSuccess
 */
export interface InternationalSuccess {
    /**
     * 조회 결과
     * @type {number}
     * @memberof InternationalSuccess
     */
    result: InternationalSuccessResultEnum;
    /**
     * 
     * @type {Array<InternationalSuccessItem>}
     * @memberof InternationalSuccess
     */
    sofr_list: Array<InternationalSuccessItem>;
    /**
     * 
     * @type {Array<InternationalSuccessItem>}
     * @memberof InternationalSuccess
     */
    estr_list: Array<InternationalSuccessItem>;
    /**
     * 
     * @type {Array<InternationalSuccessItem>}
     * @memberof InternationalSuccess
     */
    euribor_list: Array<InternationalSuccessItem>;
    /**
     * 
     * @type {Array<InternationalSuccessItem>}
     * @memberof InternationalSuccess
     */
    tona_list: Array<InternationalSuccessItem>;
    /**
     * 
     * @type {Array<InternationalSuccessItem>}
     * @memberof InternationalSuccess
     */
    tibor_list: Array<InternationalSuccessItem>;
    /**
     * 
     * @type {Array<InternationalSuccessItem>}
     * @memberof InternationalSuccess
     */
    swapRfr_list: Array<InternationalSuccessItem>;
    /**
     * 
     * @type {Array<InternationalSuccessItem>}
     * @memberof InternationalSuccess
     */
    libor_list: Array<InternationalSuccessItem>;
    /**
     * 
     * @type {Array<InternationalSuccessItem>}
     * @memberof InternationalSuccess
     */
    swap_list: Array<InternationalSuccessItem>;
    /**
     * 
     * @type {Array<InternationalSuccessItem>}
     * @memberof InternationalSuccess
     */
    cirr_list: Array<InternationalSuccessItem>;
}

/**
 * 조회 결과
 */
export type InternationalSuccessResultEnum =
    1

const InternationalSuccessResultEnumValues = [
    1,
]

export function isInternationalSuccessResultEnum(value: any): value is InternationalSuccessResultEnum {
    return InternationalSuccessResultEnumValues.indexOf(value as unknown as InternationalSuccessResultEnum) !== -1
}


/**
 * 
 * @export
 * @interface InternationalSuccessItem
 */
export interface InternationalSuccessItem {
    /**
     * 조회 결과
     * @type {number}
     * @memberof InternationalSuccessItem
     */
    result: InternationalSuccessItemResultEnum;
    /**
     * 금리 통화 정보
     * @type {string}
     * @memberof InternationalSuccessItem
     */
    cur_fund: string;
    /**
     * 금리 기간 정보
     * @type {string}
     * @memberof InternationalSuccessItem
     */
    sfln_intrc_nm: string;
    /**
     * 금리 정보
     * @type {string}
     * @memberof InternationalSuccessItem
     */
    int_r: string;
}

/**
 * 조회 결과
 */
export type InternationalSuccessItemResultEnum =
    1

const InternationalSuccessItemResultEnumValues = [
    1,
]

export function isInternationalSuccessItemResultEnum(value: any): value is InternationalSuccessItemResultEnum {
    return InternationalSuccessItemResultEnumValues.indexOf(value as unknown as InternationalSuccessItemResultEnum) !== -1
}


