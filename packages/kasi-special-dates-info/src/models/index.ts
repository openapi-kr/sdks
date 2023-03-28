/* tslint:disable */
/* eslint-disable */
/**
 * 종류
 * |값|항목명|예시|
 * |---|:---:|--:|
 * |`01`|국경일|어린이 날, 광복절, 개천절|
 * |`02`|기념일|의병의 날, 정보보호의 날, 4·19 혁명 기념일|
 * |`03`|24절기|청명, 경칩, 하지|
 * |`04`|잡절|단오, 한식|
 */
export type DateKind =
    '01'|
    '02'|
    '03'|
    '04'

/**
 * 
 * @export
 * @interface Response
 */
export interface Response {
    /**
     * 
     * @type {ResponseResponse}
     * @memberof Response
     */
    response: ResponseResponse;
}
/**
 * 
 * @export
 * @interface ResponseBody
 */
export interface ResponseBody {
    /**
     * 
     * @type {ResponseBodyItems}
     * @memberof ResponseBody
     */
    items: ResponseBodyItems;
    /**
     * 페이지당항목수
     * @type {number}
     * @memberof ResponseBody
     */
    numOfRows: number;
    /**
     * 페이지
     * @type {number}
     * @memberof ResponseBody
     */
    pageNo: number;
    /**
     * 모든항목수
     * @type {number}
     * @memberof ResponseBody
     */
    totalCount: number;
}
/**
 * 
 * @export
 * @interface ResponseBodyItems
 */
export interface ResponseBodyItems {
    /**
     * 
     * @type {Array<SpcdeInfo>}
     * @memberof ResponseBodyItems
     */
    item?: Array<SpcdeInfo>;
}
/**
 * 
 * @export
 * @interface ResponseHeader
 */
export interface ResponseHeader {
    /**
     * 결과코드
     * |값|항목명|
     * |---|:---:|
     * |`00`|성공|
     * @type {string}
     * @memberof ResponseHeader
     */
    resultCode: string;
    /**
     * 결과메세지
     * |값|항목명|
     * |---|:---:|
     * |`NORMAL SERVICE.`|성공|
     * @type {string}
     * @memberof ResponseHeader
     */
    resultMsg: string;
}
/**
 * 
 * @export
 * @interface ResponseResponse
 */
export interface ResponseResponse {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof ResponseResponse
     */
    header: ResponseHeader;
    /**
     * 
     * @type {ResponseBody}
     * @memberof ResponseResponse
     */
    body?: ResponseBody;
}
/**
 * 
 * @export
 * @interface ResponseXML
 */
export interface ResponseXML {
    /**
     * 
     * @type {ResponseHeader}
     * @memberof ResponseXML
     */
    header: ResponseHeader;
    /**
     * 
     * @type {ResponseBody}
     * @memberof ResponseXML
     */
    body?: ResponseBody;
}
/**
 * 
 * @export
 * @interface SpcdeInfo
 */
export interface SpcdeInfo {
    /**
     * 
     * @type {DateKind}
     * @memberof SpcdeInfo
     */
    dateKind: DateKind;
    /**
     * 명칭
     * @type {string}
     * @memberof SpcdeInfo
     */
    dateName: string;
    /**
     * 공휴일여부
     * @type {string}
     * @memberof SpcdeInfo
     */
    isHoliday: SpcdeInfoIsHolidayEnum;
    /**
     * 날짜
     * @type {number}
     * @memberof SpcdeInfo
     */
    locdate: number;
    /**
     * 순번
     * @type {number}
     * @memberof SpcdeInfo
     */
    seq: number;
}

/**
 * 공휴일여부
 */
export type SpcdeInfoIsHolidayEnum =
    'Y'|
    'N'

const SpcdeInfoIsHolidayEnumValues = [
    'Y',
    'N',
]

export function isSpcdeInfoIsHolidayEnum(value: any): value is SpcdeInfoIsHolidayEnum {
    return SpcdeInfoIsHolidayEnumValues.indexOf(value as unknown as SpcdeInfoIsHolidayEnum) !== -1
}


