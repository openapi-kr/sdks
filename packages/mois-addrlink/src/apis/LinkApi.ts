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
  AddrLinkResponse,
  AddrLinkResults,
} from '../models';
import {
    AddrLinkResponseFromJSON,
    AddrLinkResponseToJSON,
    AddrLinkResultsFromJSON,
    AddrLinkResultsToJSON,
} from '../models';

export interface AddrLinkApiGetRequest {
    /**
     * 주소 검색어
     */
    keyword: string;
    /**
     * 현재 페이지 번호
     */
    currentPage?: number;
    /**
     * 페이지당 출력할 결과 Row 수
     */
    countPerPage?: number;
    /**
     * 검색결과형식 설정
     */
    resultType?: AddrLinkApiGetResultTypeEnum;
    /**
     * 변동된 주소정보 포함 여부 (\* 2020년12월8일 추가된 항목)
     */
    hstryYn?: AddrLinkApiGetHstryYnEnum;
    /**
     * 정렬 (\* 2020년12월8일 추가된 항목)
     * 
     * - 정확도순 정렬
     *   * `none` - Ascending, from A to Z
     * - 우선정렬: keyword(검색어)가 우선정렬 항목에 포함된 결과 우선 표출 
     *   * `road` - 도로명 포함
     *   * `location` - 지번 포함
     */
    firstSort?: AddrLinkApiGetFirstSortEnum;
    /**
     * 출력결과에 추가된 항목(hstryYn, relJibun, hemdNm) 제공여부
     * 
     * (\* 2020년12월8일 추가된 항목)
     * 
     * (※ 해당 옵션으로 추가제공되는 항목의 경우, 추후 특정항목이 제거되거나 추가될 수 있으니 적용 시 고려해주시기 바랍니다.)
     */
    addInfoYn?: AddrLinkApiGetAddInfoYnEnum;
}

export interface AddrLinkApiPostRequest {
    /**
     * 주소 검색어
     */
    keyword: string;
    /**
     * 현재 페이지 번호
     */
    currentPage?: number;
    /**
     * 페이지당 출력할 결과 Row 수
     */
    countPerPage?: number;
    /**
     * 검색결과형식 설정
     */
    resultType?: AddrLinkApiPostResultTypeEnum;
    /**
     * 변동된 주소정보 포함 여부 (\* 2020년12월8일 추가된 항목)
     */
    hstryYn?: AddrLinkApiPostHstryYnEnum;
    /**
     * 정렬 (\* 2020년12월8일 추가된 항목)
     * 
     * - 정확도순 정렬
     *   * `none` - Ascending, from A to Z
     * - 우선정렬: keyword(검색어)가 우선정렬 항목에 포함된 결과 우선 표출 
     *   * `road` - 도로명 포함
     *   * `location` - 지번 포함
     */
    firstSort?: AddrLinkApiPostFirstSortEnum;
    /**
     * 출력결과에 추가된 항목(hstryYn, relJibun, hemdNm) 제공여부
     * 
     * (\* 2020년12월8일 추가된 항목)
     * 
     * (※ 해당 옵션으로 추가제공되는 항목의 경우, 추후 특정항목이 제거되거나 추가될 수 있으니 적용 시 고려해주시기 바랍니다.)
     */
    addInfoYn?: AddrLinkApiPostAddInfoYnEnum;
}

/**
 * 
 */
export class LinkApi extends runtime.BaseAPI {

    /**
     * 도로명주소 검색
     * 
     */
    async addrLinkApiGetRaw(requestParameters: AddrLinkApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddrLinkResponse>> {
        if (requestParameters.keyword === null || requestParameters.keyword === undefined) {
            throw new runtime.RequiredError('keyword','Required parameter requestParameters.keyword was null or undefined when calling addrLinkApiGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.keyword !== undefined) {
            queryParameters['keyword'] = requestParameters.keyword;
        }

        if (requestParameters.currentPage !== undefined) {
            queryParameters['currentPage'] = requestParameters.currentPage;
        }

        if (requestParameters.countPerPage !== undefined) {
            queryParameters['countPerPage'] = requestParameters.countPerPage;
        }

        if (requestParameters.resultType !== undefined) {
            queryParameters['resultType'] = requestParameters.resultType;
        }

        if (requestParameters.hstryYn !== undefined) {
            queryParameters['hstryYn'] = requestParameters.hstryYn;
        }

        if (requestParameters.firstSort !== undefined) {
            queryParameters['firstSort'] = requestParameters.firstSort;
        }

        if (requestParameters.addInfoYn !== undefined) {
            queryParameters['addInfoYn'] = requestParameters.addInfoYn;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["confmKey"] = this.configuration.apiKey("confmKey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/addrlink/addrLinkApi.do`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddrLinkResponseFromJSON(jsonValue));
    }

    /**
     * 도로명주소 검색
     * 
     */
    async addrLinkApiGet(requestParameters: AddrLinkApiGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddrLinkResponse> {
        const response = await this.addrLinkApiGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 도로명주소 검색
     * 
     */
    async addrLinkApiPostRaw(requestParameters: AddrLinkApiPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddrLinkResponse>> {
        if (requestParameters.keyword === null || requestParameters.keyword === undefined) {
            throw new runtime.RequiredError('keyword','Required parameter requestParameters.keyword was null or undefined when calling addrLinkApiPost.');
        }

        const queryParameters: any = {};

        if (requestParameters.keyword !== undefined) {
            queryParameters['keyword'] = requestParameters.keyword;
        }

        if (requestParameters.currentPage !== undefined) {
            queryParameters['currentPage'] = requestParameters.currentPage;
        }

        if (requestParameters.countPerPage !== undefined) {
            queryParameters['countPerPage'] = requestParameters.countPerPage;
        }

        if (requestParameters.resultType !== undefined) {
            queryParameters['resultType'] = requestParameters.resultType;
        }

        if (requestParameters.hstryYn !== undefined) {
            queryParameters['hstryYn'] = requestParameters.hstryYn;
        }

        if (requestParameters.firstSort !== undefined) {
            queryParameters['firstSort'] = requestParameters.firstSort;
        }

        if (requestParameters.addInfoYn !== undefined) {
            queryParameters['addInfoYn'] = requestParameters.addInfoYn;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["confmKey"] = this.configuration.apiKey("confmKey"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/addrlink/addrLinkApi.do`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddrLinkResponseFromJSON(jsonValue));
    }

    /**
     * 도로명주소 검색
     * 
     */
    async addrLinkApiPost(requestParameters: AddrLinkApiPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddrLinkResponse> {
        const response = await this.addrLinkApiPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AddrLinkApiGetResultTypeEnum = {
    Xml: 'xml',
    Json: 'json'
} as const;
export type AddrLinkApiGetResultTypeEnum = typeof AddrLinkApiGetResultTypeEnum[keyof typeof AddrLinkApiGetResultTypeEnum];
/**
 * @export
 */
export const AddrLinkApiGetHstryYnEnum = {
    Y: 'Y',
    N: 'N'
} as const;
export type AddrLinkApiGetHstryYnEnum = typeof AddrLinkApiGetHstryYnEnum[keyof typeof AddrLinkApiGetHstryYnEnum];
/**
 * @export
 */
export const AddrLinkApiGetFirstSortEnum = {
    None: 'none',
    Road: 'road',
    Location: 'location'
} as const;
export type AddrLinkApiGetFirstSortEnum = typeof AddrLinkApiGetFirstSortEnum[keyof typeof AddrLinkApiGetFirstSortEnum];
/**
 * @export
 */
export const AddrLinkApiGetAddInfoYnEnum = {
    Y: 'Y',
    N: 'N'
} as const;
export type AddrLinkApiGetAddInfoYnEnum = typeof AddrLinkApiGetAddInfoYnEnum[keyof typeof AddrLinkApiGetAddInfoYnEnum];
/**
 * @export
 */
export const AddrLinkApiPostResultTypeEnum = {
    Xml: 'xml',
    Json: 'json'
} as const;
export type AddrLinkApiPostResultTypeEnum = typeof AddrLinkApiPostResultTypeEnum[keyof typeof AddrLinkApiPostResultTypeEnum];
/**
 * @export
 */
export const AddrLinkApiPostHstryYnEnum = {
    Y: 'Y',
    N: 'N'
} as const;
export type AddrLinkApiPostHstryYnEnum = typeof AddrLinkApiPostHstryYnEnum[keyof typeof AddrLinkApiPostHstryYnEnum];
/**
 * @export
 */
export const AddrLinkApiPostFirstSortEnum = {
    None: 'none',
    Road: 'road',
    Location: 'location'
} as const;
export type AddrLinkApiPostFirstSortEnum = typeof AddrLinkApiPostFirstSortEnum[keyof typeof AddrLinkApiPostFirstSortEnum];
/**
 * @export
 */
export const AddrLinkApiPostAddInfoYnEnum = {
    Y: 'Y',
    N: 'N'
} as const;
export type AddrLinkApiPostAddInfoYnEnum = typeof AddrLinkApiPostAddInfoYnEnum[keyof typeof AddrLinkApiPostAddInfoYnEnum];
