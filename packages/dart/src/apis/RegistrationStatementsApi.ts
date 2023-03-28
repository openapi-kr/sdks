/* tslint:disable */
/* eslint-disable */
/**
 * DART
 * DART에 공시되고있는 공시보고서 원문 등을 오픈API를 통해 활용할 수 있습니다. 활용을 원하시는 누구든지(개인, 기업, 기관 등) 이용하실 수 있습니다.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: opendart@fss.or.kr
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BdRsResponse,
  DvRsResponse,
  EstkRsResponse,
  ExtrRsResponse,
  MgRsResponse,
  StkdpRsResponse,
} from '../models';

export interface BdRsRequest {
    /**
     * 공시대상회사의 고유번호(8자리)
     * **※ 개발가이드 > 공시정보 > 고유번호 참고**
     */
    corpCode: string;
    /**
     * 검색시작 접수일자(YYYYMMDD) **※ 2015년 이후 부터 정보제공**
     */
    bgnDe: string;
    /**
     * 검색종료 접수일자(YYYYMMDD) **※ 2015년 이후 부터 정보제공**
     */
    endDe: string;
}

export interface DvRsRequest {
    /**
     * 공시대상회사의 고유번호(8자리)
     * **※ 개발가이드 > 공시정보 > 고유번호 참고**
     */
    corpCode: string;
    /**
     * 검색시작 접수일자(YYYYMMDD) **※ 2015년 이후 부터 정보제공**
     */
    bgnDe: string;
    /**
     * 검색종료 접수일자(YYYYMMDD) **※ 2015년 이후 부터 정보제공**
     */
    endDe: string;
}

export interface EstkRsRequest {
    /**
     * 공시대상회사의 고유번호(8자리)
     * **※ 개발가이드 > 공시정보 > 고유번호 참고**
     */
    corpCode: string;
    /**
     * 검색시작 접수일자(YYYYMMDD) **※ 2015년 이후 부터 정보제공**
     */
    bgnDe: string;
    /**
     * 검색종료 접수일자(YYYYMMDD) **※ 2015년 이후 부터 정보제공**
     */
    endDe: string;
}

export interface ExtrRsRequest {
    /**
     * 공시대상회사의 고유번호(8자리)
     * **※ 개발가이드 > 공시정보 > 고유번호 참고**
     */
    corpCode: string;
    /**
     * 검색시작 접수일자(YYYYMMDD) **※ 2015년 이후 부터 정보제공**
     */
    bgnDe: string;
    /**
     * 검색종료 접수일자(YYYYMMDD) **※ 2015년 이후 부터 정보제공**
     */
    endDe: string;
}

export interface MgRsRequest {
    /**
     * 공시대상회사의 고유번호(8자리)
     * **※ 개발가이드 > 공시정보 > 고유번호 참고**
     */
    corpCode: string;
    /**
     * 검색시작 접수일자(YYYYMMDD) **※ 2015년 이후 부터 정보제공**
     */
    bgnDe: string;
    /**
     * 검색종료 접수일자(YYYYMMDD) **※ 2015년 이후 부터 정보제공**
     */
    endDe: string;
}

export interface StkdpRsRequest {
    /**
     * 공시대상회사의 고유번호(8자리)
     * **※ 개발가이드 > 공시정보 > 고유번호 참고**
     */
    corpCode: string;
    /**
     * 검색시작 접수일자(YYYYMMDD) **※ 2015년 이후 부터 정보제공**
     */
    bgnDe: string;
    /**
     * 검색종료 접수일자(YYYYMMDD) **※ 2015년 이후 부터 정보제공**
     */
    endDe: string;
}

/**
 * 
 */
export class RegistrationStatementsApi extends runtime.BaseAPI {

    /**
     * 채무증권 내에 주요 정보를 제공합니다.
     * 
     */
    async bdRsRaw(requestParameters: BdRsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BdRsResponse>> {
        if (requestParameters.corpCode === null || requestParameters.corpCode === undefined) {
            throw new runtime.RequiredError('corpCode','Required parameter requestParameters.corpCode was null or undefined when calling bdRs.');
        }

        if (requestParameters.bgnDe === null || requestParameters.bgnDe === undefined) {
            throw new runtime.RequiredError('bgnDe','Required parameter requestParameters.bgnDe was null or undefined when calling bdRs.');
        }

        if (requestParameters.endDe === null || requestParameters.endDe === undefined) {
            throw new runtime.RequiredError('endDe','Required parameter requestParameters.endDe was null or undefined when calling bdRs.');
        }

        const queryParameters: any = {};

        if (requestParameters.corpCode !== undefined) {
            queryParameters['corp_code'] = requestParameters.corpCode;
        }

        if (requestParameters.bgnDe !== undefined) {
            queryParameters['bgn_de'] = requestParameters.bgnDe;
        }

        if (requestParameters.endDe !== undefined) {
            queryParameters['end_de'] = requestParameters.endDe;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["crtfc_key"] = this.configuration.apiKey("crtfc_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/bdRs.json`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 채무증권 내에 주요 정보를 제공합니다.
     * 
     */
    async bdRs(requestParameters: BdRsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BdRsResponse> {
        const response = await this.bdRsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 분할 내에 주요 정보를 제공합니다.
     * 
     */
    async dvRsRaw(requestParameters: DvRsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DvRsResponse>> {
        if (requestParameters.corpCode === null || requestParameters.corpCode === undefined) {
            throw new runtime.RequiredError('corpCode','Required parameter requestParameters.corpCode was null or undefined when calling dvRs.');
        }

        if (requestParameters.bgnDe === null || requestParameters.bgnDe === undefined) {
            throw new runtime.RequiredError('bgnDe','Required parameter requestParameters.bgnDe was null or undefined when calling dvRs.');
        }

        if (requestParameters.endDe === null || requestParameters.endDe === undefined) {
            throw new runtime.RequiredError('endDe','Required parameter requestParameters.endDe was null or undefined when calling dvRs.');
        }

        const queryParameters: any = {};

        if (requestParameters.corpCode !== undefined) {
            queryParameters['corp_code'] = requestParameters.corpCode;
        }

        if (requestParameters.bgnDe !== undefined) {
            queryParameters['bgn_de'] = requestParameters.bgnDe;
        }

        if (requestParameters.endDe !== undefined) {
            queryParameters['end_de'] = requestParameters.endDe;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["crtfc_key"] = this.configuration.apiKey("crtfc_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/dvRs.json`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 분할 내에 주요 정보를 제공합니다.
     * 
     */
    async dvRs(requestParameters: DvRsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DvRsResponse> {
        const response = await this.dvRsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 지분증권 내에 주요 정보를 제공합니다.
     * 
     */
    async estkRsRaw(requestParameters: EstkRsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EstkRsResponse>> {
        if (requestParameters.corpCode === null || requestParameters.corpCode === undefined) {
            throw new runtime.RequiredError('corpCode','Required parameter requestParameters.corpCode was null or undefined when calling estkRs.');
        }

        if (requestParameters.bgnDe === null || requestParameters.bgnDe === undefined) {
            throw new runtime.RequiredError('bgnDe','Required parameter requestParameters.bgnDe was null or undefined when calling estkRs.');
        }

        if (requestParameters.endDe === null || requestParameters.endDe === undefined) {
            throw new runtime.RequiredError('endDe','Required parameter requestParameters.endDe was null or undefined when calling estkRs.');
        }

        const queryParameters: any = {};

        if (requestParameters.corpCode !== undefined) {
            queryParameters['corp_code'] = requestParameters.corpCode;
        }

        if (requestParameters.bgnDe !== undefined) {
            queryParameters['bgn_de'] = requestParameters.bgnDe;
        }

        if (requestParameters.endDe !== undefined) {
            queryParameters['end_de'] = requestParameters.endDe;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["crtfc_key"] = this.configuration.apiKey("crtfc_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/estkRs.json`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 지분증권 내에 주요 정보를 제공합니다.
     * 
     */
    async estkRs(requestParameters: EstkRsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EstkRsResponse> {
        const response = await this.estkRsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 주식의포괄적교환·이전 내에 주요 정보를 제공합니다.
     * 
     */
    async extrRsRaw(requestParameters: ExtrRsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExtrRsResponse>> {
        if (requestParameters.corpCode === null || requestParameters.corpCode === undefined) {
            throw new runtime.RequiredError('corpCode','Required parameter requestParameters.corpCode was null or undefined when calling extrRs.');
        }

        if (requestParameters.bgnDe === null || requestParameters.bgnDe === undefined) {
            throw new runtime.RequiredError('bgnDe','Required parameter requestParameters.bgnDe was null or undefined when calling extrRs.');
        }

        if (requestParameters.endDe === null || requestParameters.endDe === undefined) {
            throw new runtime.RequiredError('endDe','Required parameter requestParameters.endDe was null or undefined when calling extrRs.');
        }

        const queryParameters: any = {};

        if (requestParameters.corpCode !== undefined) {
            queryParameters['corp_code'] = requestParameters.corpCode;
        }

        if (requestParameters.bgnDe !== undefined) {
            queryParameters['bgn_de'] = requestParameters.bgnDe;
        }

        if (requestParameters.endDe !== undefined) {
            queryParameters['end_de'] = requestParameters.endDe;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["crtfc_key"] = this.configuration.apiKey("crtfc_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/extrRs.json`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 주식의포괄적교환·이전 내에 주요 정보를 제공합니다.
     * 
     */
    async extrRs(requestParameters: ExtrRsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExtrRsResponse> {
        const response = await this.extrRsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 합병 내에 주요 정보를 제공합니다.
     * 
     */
    async mgRsRaw(requestParameters: MgRsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MgRsResponse>> {
        if (requestParameters.corpCode === null || requestParameters.corpCode === undefined) {
            throw new runtime.RequiredError('corpCode','Required parameter requestParameters.corpCode was null or undefined when calling mgRs.');
        }

        if (requestParameters.bgnDe === null || requestParameters.bgnDe === undefined) {
            throw new runtime.RequiredError('bgnDe','Required parameter requestParameters.bgnDe was null or undefined when calling mgRs.');
        }

        if (requestParameters.endDe === null || requestParameters.endDe === undefined) {
            throw new runtime.RequiredError('endDe','Required parameter requestParameters.endDe was null or undefined when calling mgRs.');
        }

        const queryParameters: any = {};

        if (requestParameters.corpCode !== undefined) {
            queryParameters['corp_code'] = requestParameters.corpCode;
        }

        if (requestParameters.bgnDe !== undefined) {
            queryParameters['bgn_de'] = requestParameters.bgnDe;
        }

        if (requestParameters.endDe !== undefined) {
            queryParameters['end_de'] = requestParameters.endDe;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["crtfc_key"] = this.configuration.apiKey("crtfc_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/mgRs.json`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 합병 내에 주요 정보를 제공합니다.
     * 
     */
    async mgRs(requestParameters: MgRsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MgRsResponse> {
        const response = await this.mgRsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 증권예탁증권 내에 주요 정보를 제공합니다.
     * 
     */
    async stkdpRsRaw(requestParameters: StkdpRsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StkdpRsResponse>> {
        if (requestParameters.corpCode === null || requestParameters.corpCode === undefined) {
            throw new runtime.RequiredError('corpCode','Required parameter requestParameters.corpCode was null or undefined when calling stkdpRs.');
        }

        if (requestParameters.bgnDe === null || requestParameters.bgnDe === undefined) {
            throw new runtime.RequiredError('bgnDe','Required parameter requestParameters.bgnDe was null or undefined when calling stkdpRs.');
        }

        if (requestParameters.endDe === null || requestParameters.endDe === undefined) {
            throw new runtime.RequiredError('endDe','Required parameter requestParameters.endDe was null or undefined when calling stkdpRs.');
        }

        const queryParameters: any = {};

        if (requestParameters.corpCode !== undefined) {
            queryParameters['corp_code'] = requestParameters.corpCode;
        }

        if (requestParameters.bgnDe !== undefined) {
            queryParameters['bgn_de'] = requestParameters.bgnDe;
        }

        if (requestParameters.endDe !== undefined) {
            queryParameters['end_de'] = requestParameters.endDe;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["crtfc_key"] = this.configuration.apiKey("crtfc_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/stkdpRs.json`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 증권예탁증권 내에 주요 정보를 제공합니다.
     * 
     */
    async stkdpRs(requestParameters: StkdpRsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StkdpRsResponse> {
        const response = await this.stkdpRsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
