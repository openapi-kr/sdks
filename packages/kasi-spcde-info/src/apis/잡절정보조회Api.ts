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


import * as runtime from '../runtime';
import type {
  Response,
  ResponseXML,
} from '../models';
import {
    ResponseFromJSON,
    ResponseToJSON,
    ResponseXMLFromJSON,
    ResponseXMLToJSON,
} from '../models';

export interface GetSundryDayInfoRequest {
    solYear: number;
    solMonth: string;
    type?: GetSundryDayInfoTypeEnum;
    numOfRows?: number;
    pageNo?: number;
}

/**
 * 
 */
export class 잡절정보조회Api extends runtime.BaseAPI {

    /**
     * 월별로 구분(잡절), 요일, 공휴일 여부 등의 정보를 제공한다.
     * 
     */
    async getSundryDayInfoRaw(requestParameters: GetSundryDayInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Response>> {
        if (requestParameters.solYear === null || requestParameters.solYear === undefined) {
            throw new runtime.RequiredError('solYear','Required parameter requestParameters.solYear was null or undefined when calling getSundryDayInfo.');
        }

        if (requestParameters.solMonth === null || requestParameters.solMonth === undefined) {
            throw new runtime.RequiredError('solMonth','Required parameter requestParameters.solMonth was null or undefined when calling getSundryDayInfo.');
        }

        const queryParameters: any = {};

        if (requestParameters.solYear !== undefined) {
            queryParameters['solYear'] = requestParameters.solYear;
        }

        if (requestParameters.solMonth !== undefined) {
            queryParameters['solMonth'] = requestParameters.solMonth;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['_type'] = requestParameters.type;
        }

        if (requestParameters.numOfRows !== undefined) {
            queryParameters['numOfRows'] = requestParameters.numOfRows;
        }

        if (requestParameters.pageNo !== undefined) {
            queryParameters['pageNo'] = requestParameters.pageNo;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["ServiceKey"] = this.configuration.apiKey("ServiceKey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/B090041/openapi/service/SpcdeInfoService/getSundryDayInfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseFromJSON(jsonValue));
    }

    /**
     * 월별로 구분(잡절), 요일, 공휴일 여부 등의 정보를 제공한다.
     * 
     */
    async getSundryDayInfo(requestParameters: GetSundryDayInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Response> {
        const response = await this.getSundryDayInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetSundryDayInfoTypeEnum = {
    Json: 'json',
    Xml: 'xml'
} as const;
export type GetSundryDayInfoTypeEnum = typeof GetSundryDayInfoTypeEnum[keyof typeof GetSundryDayInfoTypeEnum];
