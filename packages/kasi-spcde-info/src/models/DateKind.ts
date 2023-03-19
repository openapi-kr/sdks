/* tslint:disable */
/* eslint-disable */
/**
 * 한국천문연구원 특일 정보
 * (천문우주정보)국경일정보, 공휴일정보, 기념일정보, 24절기정보, 잡절정보를 조회하는 서비스 입니다.  활용시 날짜, 순번, 특일정보의 분류, 공공기관 휴일 여부, 명칭을 확인할 수 있습니다.
 *
 * The version of the OpenAPI document: 1.4.0
 * Contact: sol0993@kasi.re.kr
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 종류
 * |값|항목명|예시|
 * |---|:---:|--:|
 * |`01`|국경일|어린이 날, 광복절, 개천절|
 * |`02`|기념일|의병의 날, 정보보호의 날, 4·19 혁명 기념일|
 * |`03`|24절기|청명, 경칩, 하지|
 * |`04`|잡절|단오, 한식|
 * @export
 */
export const DateKind = {
    _01: '01',
    _02: '02',
    _03: '03',
    _04: '04'
} as const;
export type DateKind = typeof DateKind[keyof typeof DateKind];


export function DateKindFromJSON(json: any): DateKind {
    return DateKindFromJSONTyped(json, false);
}

export function DateKindFromJSONTyped(json: any, ignoreDiscriminator: boolean): DateKind {
    return json as DateKind;
}

export function DateKindToJSON(value?: DateKind | null): any {
    return value as any;
}
