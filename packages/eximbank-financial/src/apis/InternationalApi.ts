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


import * as runtime from '../runtime';
import type {
  InternationalResponse,
} from '../models';
import {
    InternationalResponseFromJSON,
    InternationalResponseToJSON,
} from '../models';

export interface InternationalRequest {
    /**
     * 데이터코드, 고정값 AP03
     */
    data: InternationalDataEnum;
    /**
     * 검색요청날짜
     */
    searchdate?: Date;
}

/**
 * 
 */
export class InternationalApi extends runtime.BaseAPI {

    /**
     * 한국수출입은행이 제공하는 국제금리정보입니다.
     * 
     * SOFR 등 국제금리를 일 기준으로 제공합니다.
     * 
     */
    async internationalRaw(requestParameters: InternationalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InternationalResponse>> {
        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling international.');
        }

        const queryParameters: any = {};

        if (requestParameters.searchdate !== undefined) {
            queryParameters['searchdate'] = (requestParameters.searchdate as any).toISOString().substr(0,10);
        }

        if (requestParameters.data !== undefined) {
            queryParameters['data'] = requestParameters.data;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["authkey"] = this.configuration.apiKey("authkey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/site/program/financial/internationalJSON`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InternationalResponseFromJSON(jsonValue));
    }

    /**
     * 한국수출입은행이 제공하는 국제금리정보입니다.
     * 
     * SOFR 등 국제금리를 일 기준으로 제공합니다.
     * 
     */
    async international(requestParameters: InternationalRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InternationalResponse> {
        const response = await this.internationalRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const InternationalDataEnum = {
    Ap03: 'AP03'
} as const;
export type InternationalDataEnum = typeof InternationalDataEnum[keyof typeof InternationalDataEnum];
