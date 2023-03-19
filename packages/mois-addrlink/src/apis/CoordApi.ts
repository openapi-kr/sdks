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


import * as runtime from '../runtime';
import type {
  AddrCoordResponse,
  AddrCoordResults,
} from '../models';
import {
    AddrCoordResponseFromJSON,
    AddrCoordResponseToJSON,
    AddrCoordResultsFromJSON,
    AddrCoordResultsToJSON,
} from '../models';

export interface AddrCoordApiGetRequest {
    admCd: string;
    rnMgtSn: string;
    buldMnnm: number;
    buldSlno: number;
    resultType?: AddrCoordApiGetResultTypeEnum;
}

export interface AddrCoordApiPostRequest {
    admCd: string;
    rnMgtSn: string;
    buldMnnm: number;
    buldSlno: number;
    resultType?: AddrCoordApiPostResultTypeEnum;
}

/**
 * 
 */
export class CoordApi extends runtime.BaseAPI {

    /**
     * 좌표제공
     * 
     */
    async addrCoordApiGetRaw(requestParameters: AddrCoordApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddrCoordResponse>> {
        if (requestParameters.admCd === null || requestParameters.admCd === undefined) {
            throw new runtime.RequiredError('admCd','Required parameter requestParameters.admCd was null or undefined when calling addrCoordApiGet.');
        }

        if (requestParameters.rnMgtSn === null || requestParameters.rnMgtSn === undefined) {
            throw new runtime.RequiredError('rnMgtSn','Required parameter requestParameters.rnMgtSn was null or undefined when calling addrCoordApiGet.');
        }

        if (requestParameters.buldMnnm === null || requestParameters.buldMnnm === undefined) {
            throw new runtime.RequiredError('buldMnnm','Required parameter requestParameters.buldMnnm was null or undefined when calling addrCoordApiGet.');
        }

        if (requestParameters.buldSlno === null || requestParameters.buldSlno === undefined) {
            throw new runtime.RequiredError('buldSlno','Required parameter requestParameters.buldSlno was null or undefined when calling addrCoordApiGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.admCd !== undefined) {
            queryParameters['admCd'] = requestParameters.admCd;
        }

        if (requestParameters.rnMgtSn !== undefined) {
            queryParameters['rnMgtSn'] = requestParameters.rnMgtSn;
        }

        if (requestParameters.buldMnnm !== undefined) {
            queryParameters['buldMnnm'] = requestParameters.buldMnnm;
        }

        if (requestParameters.buldSlno !== undefined) {
            queryParameters['buldSlno'] = requestParameters.buldSlno;
        }

        if (requestParameters.resultType !== undefined) {
            queryParameters['resultType'] = requestParameters.resultType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["confmKey"] = this.configuration.apiKey("confmKey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/addrlink/addrCoordApi.do`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddrCoordResponseFromJSON(jsonValue));
    }

    /**
     * 좌표제공
     * 
     */
    async addrCoordApiGet(requestParameters: AddrCoordApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddrCoordResponse> {
        const response = await this.addrCoordApiGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 좌표제공
     * 
     */
    async addrCoordApiPostRaw(requestParameters: AddrCoordApiPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddrCoordResponse>> {
        if (requestParameters.admCd === null || requestParameters.admCd === undefined) {
            throw new runtime.RequiredError('admCd','Required parameter requestParameters.admCd was null or undefined when calling addrCoordApiPost.');
        }

        if (requestParameters.rnMgtSn === null || requestParameters.rnMgtSn === undefined) {
            throw new runtime.RequiredError('rnMgtSn','Required parameter requestParameters.rnMgtSn was null or undefined when calling addrCoordApiPost.');
        }

        if (requestParameters.buldMnnm === null || requestParameters.buldMnnm === undefined) {
            throw new runtime.RequiredError('buldMnnm','Required parameter requestParameters.buldMnnm was null or undefined when calling addrCoordApiPost.');
        }

        if (requestParameters.buldSlno === null || requestParameters.buldSlno === undefined) {
            throw new runtime.RequiredError('buldSlno','Required parameter requestParameters.buldSlno was null or undefined when calling addrCoordApiPost.');
        }

        const queryParameters: any = {};

        if (requestParameters.admCd !== undefined) {
            queryParameters['admCd'] = requestParameters.admCd;
        }

        if (requestParameters.rnMgtSn !== undefined) {
            queryParameters['rnMgtSn'] = requestParameters.rnMgtSn;
        }

        if (requestParameters.buldMnnm !== undefined) {
            queryParameters['buldMnnm'] = requestParameters.buldMnnm;
        }

        if (requestParameters.buldSlno !== undefined) {
            queryParameters['buldSlno'] = requestParameters.buldSlno;
        }

        if (requestParameters.resultType !== undefined) {
            queryParameters['resultType'] = requestParameters.resultType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["confmKey"] = this.configuration.apiKey("confmKey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/addrlink/addrCoordApi.do`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddrCoordResponseFromJSON(jsonValue));
    }

    /**
     * 좌표제공
     * 
     */
    async addrCoordApiPost(requestParameters: AddrCoordApiPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddrCoordResponse> {
        const response = await this.addrCoordApiPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AddrCoordApiGetResultTypeEnum = {
    Xml: 'xml',
    Json: 'json'
} as const;
export type AddrCoordApiGetResultTypeEnum = typeof AddrCoordApiGetResultTypeEnum[keyof typeof AddrCoordApiGetResultTypeEnum];
/**
 * @export
 */
export const AddrCoordApiPostResultTypeEnum = {
    Xml: 'xml',
    Json: 'json'
} as const;
export type AddrCoordApiPostResultTypeEnum = typeof AddrCoordApiPostResultTypeEnum[keyof typeof AddrCoordApiPostResultTypeEnum];