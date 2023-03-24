/* tslint:disable */
/* eslint-disable */
/**
 * 주소기반산업서비스
 * 행정안전부  [주소기반산업서비스](https://business.juso.go.kr/addrlink/main.do) 에서 제공하는 도로명주소 Open API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AddrEngResults } from './AddrEngResults';
import {
    AddrEngResultsFromJSON,
    AddrEngResultsFromJSONTyped,
    AddrEngResultsToJSON,
} from './AddrEngResults';

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
 * Check if a given object implements the AddrEngResponse interface.
 */
export function instanceOfAddrEngResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "results" in value;

    return isInstance;
}

export function AddrEngResponseFromJSON(json: any): AddrEngResponse {
    return AddrEngResponseFromJSONTyped(json, false);
}

export function AddrEngResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddrEngResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'results': AddrEngResultsFromJSON(json['results']),
    };
}

export function AddrEngResponseToJSON(value?: AddrEngResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'results': AddrEngResultsToJSON(value.results),
    };
}

