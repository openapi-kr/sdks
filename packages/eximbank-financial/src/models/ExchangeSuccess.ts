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
    curUnit: string;
    /**
     * 국가/통화명
     * @type {string}
     * @memberof ExchangeSuccess
     */
    curNm: string;
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
    dealBasR: string;
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
    yyEfeeR: string;
    /**
     * 10일환가료율
     * @type {string}
     * @memberof ExchangeSuccess
     */
    tenDdEfeeR: string;
    /**
     * 서울외국환중개 매매기준율
     * @type {string}
     * @memberof ExchangeSuccess
     */
    kftcDealBasR: string;
    /**
     * 서울외국환중개 장부가격
     * @type {string}
     * @memberof ExchangeSuccess
     */
    kftcBkpr: string;
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
 * Check if a given object implements the ExchangeSuccess interface.
 */
export function instanceOfExchangeSuccess(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "curUnit" in value;
    isInstance = isInstance && "curNm" in value;
    isInstance = isInstance && "ttb" in value;
    isInstance = isInstance && "tts" in value;
    isInstance = isInstance && "dealBasR" in value;
    isInstance = isInstance && "bkpr" in value;
    isInstance = isInstance && "yyEfeeR" in value;
    isInstance = isInstance && "tenDdEfeeR" in value;
    isInstance = isInstance && "kftcDealBasR" in value;
    isInstance = isInstance && "kftcBkpr" in value;

    return isInstance;
}

export function ExchangeSuccessFromJSON(json: any): ExchangeSuccess {
    return ExchangeSuccessFromJSONTyped(json, false);
}

export function ExchangeSuccessFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExchangeSuccess {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    if (!exists(json, 'result')) {
        return json;
    }
    if (
        !isExchangeSuccessResultEnum(json['result'])
        && json['result'] !== undefined
    ) {
        return json;
    }
    return {
        
        'result': json['result'],
        'curUnit': json['cur_unit'],
        'curNm': json['cur_nm'],
        'ttb': json['ttb'],
        'tts': json['tts'],
        'dealBasR': json['deal_bas_r'],
        'bkpr': json['bkpr'],
        'yyEfeeR': json['yy_efee_r'],
        'tenDdEfeeR': json['ten_dd_efee_r'],
        'kftcDealBasR': json['kftc_deal_bas_r'],
        'kftcBkpr': json['kftc_bkpr'],
    };
}

export function ExchangeSuccessToJSON(value?: ExchangeSuccess | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'result': value.result,
        'cur_unit': value.curUnit,
        'cur_nm': value.curNm,
        'ttb': value.ttb,
        'tts': value.tts,
        'deal_bas_r': value.dealBasR,
        'bkpr': value.bkpr,
        'yy_efee_r': value.yyEfeeR,
        'ten_dd_efee_r': value.tenDdEfeeR,
        'kftc_deal_bas_r': value.kftcDealBasR,
        'kftc_bkpr': value.kftcBkpr,
    };
}
