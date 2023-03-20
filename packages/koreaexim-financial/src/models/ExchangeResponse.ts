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

import {
    ExchangeFailed,
    instanceOfExchangeFailed,
    ExchangeFailedFromJSON,
    ExchangeFailedFromJSONTyped,
    ExchangeFailedToJSON,
} from './ExchangeFailed';
import {
    ExchangeSuccess,
    instanceOfExchangeSuccess,
    ExchangeSuccessFromJSON,
    ExchangeSuccessFromJSONTyped,
    ExchangeSuccessToJSON,
} from './ExchangeSuccess';

/**
 * @type ExchangeResponse
 * 
 * @export
 */
export type ExchangeResponse = ExchangeFailed | ExchangeSuccess;

export function ExchangeResponseFromJSON(json: any): ExchangeResponse {
    return ExchangeResponseFromJSONTyped(json, false);
}

export function ExchangeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExchangeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return { ...ExchangeFailedFromJSONTyped(json, true), ...ExchangeSuccessFromJSONTyped(json, true) };
}

export function ExchangeResponseToJSON(value?: ExchangeResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }

    if (instanceOfExchangeFailed(value)) {
        return ExchangeFailedToJSON(value as ExchangeFailed);
    }
    if (instanceOfExchangeSuccess(value)) {
        return ExchangeSuccessToJSON(value as ExchangeSuccess);
    }

    return {};
}

