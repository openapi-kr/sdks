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
  InterestResponseInner,
} from '../models';
import {
    InterestResponseInnerFromJSON,
    InterestResponseInnerToJSON,
} from '../models';

export interface InterestRequest {
    /**
     * 데이터코드, 고정값 AP02
     */
    data: InterestDataEnum;
    /**
     * 검색요청날짜
     */
    searchdate?: Date;
}

/**
 * 
 */
export class InterestApi extends runtime.BaseAPI {

    /**
     * 한국수출입은행이 제공하는 대출금리정보입니다.
     * 
     * 각 대출기간에 대한 고정기준금리를 일 기준으로 제공합니다. 
     * 
     */
    async interestRaw(requestParameters: InterestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<InterestResponseInner>>> {
        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling interest.');
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
            path: `/site/program/financial/interestJSON`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(InterestResponseInnerFromJSON));
    }

    /**
     * 한국수출입은행이 제공하는 대출금리정보입니다.
     * 
     * 각 대출기간에 대한 고정기준금리를 일 기준으로 제공합니다. 
     * 
     */
    async interest(requestParameters: InterestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<InterestResponseInner>> {
        const response = await this.interestRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const InterestDataEnum = {
    Ap02: 'AP02'
} as const;
export type InterestDataEnum = typeof InterestDataEnum[keyof typeof InterestDataEnum];
