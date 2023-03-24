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

import { exists, mapValues } from '../runtime';
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
 * Check if a given object implements the ResponseHeader interface.
 */
export function instanceOfResponseHeader(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "resultCode" in value;
    isInstance = isInstance && "resultMsg" in value;

    return isInstance;
}

export function ResponseHeaderFromJSON(json: any): ResponseHeader {
    return ResponseHeaderFromJSONTyped(json, false);
}

export function ResponseHeaderFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseHeader {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resultCode': json['resultCode'],
        'resultMsg': json['resultMsg'],
    };
}

export function ResponseHeaderToJSON(value?: ResponseHeader | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resultCode': value.resultCode,
        'resultMsg': value.resultMsg,
    };
}

