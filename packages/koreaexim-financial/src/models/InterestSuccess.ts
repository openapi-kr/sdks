/* tslint:disable */
/* eslint-disable */
/**
 * 한국수출입은행 오픈 API
 * 한국수출입은행이 보유한 공공데이터를 제공받아 누구나 직접 응용프로그램과 서비스개발 등에 활용할 수 있습니다.
 *
 * The version of the OpenAPI document: 2022.08.10
 * Contact: h.lee@koreaexim.go.kr
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
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
    sflnIntrcNm: string;
    /**
     * 고정기준금리
     * @type {string}
     * @memberof InterestSuccess
     */
    intR: string;
}


/**
 * @export
 */
export const InterestSuccessResultEnum = {
    NUMBER_1: 1
} as const;
export type InterestSuccessResultEnum = typeof InterestSuccessResultEnum[keyof typeof InterestSuccessResultEnum];


/**
 * Check if a given object implements the InterestSuccess interface.
 */
export function instanceOfInterestSuccess(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "sflnIntrcNm" in value;
    isInstance = isInstance && "intR" in value;

    return isInstance;
}

export function InterestSuccessFromJSON(json: any): InterestSuccess {
    return InterestSuccessFromJSONTyped(json, false);
}

export function InterestSuccessFromJSONTyped(json: any, ignoreDiscriminator: boolean): InterestSuccess {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'result': json['result'],
        'sflnIntrcNm': json['sfln_intrc_nm'],
        'intR': json['int_r'],
    };
}

export function InterestSuccessToJSON(value?: InterestSuccess | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': value.result,
        'sfln_intrc_nm': value.sflnIntrcNm,
        'int_r': value.intR,
    };
}
