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
import type { ResponseBodyItems } from './ResponseBodyItems';
import {
    ResponseBodyItemsFromJSON,
    ResponseBodyItemsFromJSONTyped,
    ResponseBodyItemsToJSON,
} from './ResponseBodyItems';

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
 * Check if a given object implements the ResponseBody interface.
 */
export function instanceOfResponseBody(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "numOfRows" in value;
    isInstance = isInstance && "pageNo" in value;
    isInstance = isInstance && "totalCount" in value;

    return isInstance;
}

export function ResponseBodyFromJSON(json: any): ResponseBody {
    return ResponseBodyFromJSONTyped(json, false);
}

export function ResponseBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseBody {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': ResponseBodyItemsFromJSON(json['items']),
        'numOfRows': json['numOfRows'],
        'pageNo': json['pageNo'],
        'totalCount': json['totalCount'],
    };
}

export function ResponseBodyToJSON(value?: ResponseBody | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': ResponseBodyItemsToJSON(value.items),
        'numOfRows': value.numOfRows,
        'pageNo': value.pageNo,
        'totalCount': value.totalCount,
    };
}
