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
  CommonError,
  CompanyResponse,
  ListResponse,
} from '../models';

export interface CompanyRequest {
    /**
     * 공시대상회사의 고유번호(8자리)
     * **※ 개발가이드 > 공시정보 > 고유번호 참고**
     */
    corpCode: string;
}

export interface DocumentRequest {
    /**
     * 공시문서의 접수번호(14자리)
     * **※ 개발가이드 > 공시정보 > 접수번호 참고**
     */
    rceptNo: string;
}

export interface ListRequest {
    /**
     * 공시대상회사의 고유번호(8자리)
     * **※ 개발가이드 > 공시정보 > 고유번호 참고**
     */
    corpCode?: string;
    /**
     * 검색시작 접수일자(YYYYMMDD)
     * 1) 기본값 : 종료일(end_de)
     * 2) 고유번호(corp_code)가 없는 경우 검색기간은 3개월로 제한
     */
    bgnDe?: string;
    /**
     * 검색종료 접수일자(YYYYMMDD)
     * 1) 기본값 : 당일
     */
    endDe?: string;
    /**
     * 최종보고서만 검색여부(Y or N)
     * 1) 기본값 : N(정정이 있는 경우 최종정정만 검색)
     */
    lastReprtAt?: ListLastReprtAtEnum;
    /**
     * 공시유형
     * | 코드 | 설명 |
     * | --- | --- |
     * | A | 정기공시 |
     * | B | 주요사항보고 |
     * | C | 발행공시 |
     * | D | 지분공시 |
     * | E | 기타공시 |
     * | F | 외부감사관련 |
     * | G | 펀드공시 |
     * | H | 자산유동화 |
     * | I | 거래소공시 |
     * | j | 공정위공시 |
     */
    pblntfTy?: ListPblntfTyEnum;
    /**
     * 공시상세유형
     */
    pblntfDetailTy?: string;
    /**
     * 법인구분 : Y(유가), K(코스닥), N(코넥스), E(기타)
     * 
     * ※ 없으면 전체조회, **복수조건 불가**
     */
    corpCls?: ListCorpClsEnum;
    /**
     * 정렬순서
     * - 접수일자: date
     * - 회사명 : crp
     * - 보고서명 : rpt
     * ※ 기본값 : date
     */
    sort?: ListSortEnum;
    /**
     * 정렬방법
     * - 오름차순 : asc
     * - 내림차순 : desc
     * ※ 기본값 : desc
     */
    sortMth?: ListSortMthEnum;
    /**
     * 페이지 번호
     */
    pageNo?: number;
    /**
     * 페이지 별 건수
     */
    pageCount?: number;
}

/**
 * 
 */
export class DisclosureInformationApi extends runtime.BaseAPI {

    /**
     * DART에 등록되어있는 기업의 개황정보를 제공합니다.
     * 
     */
    async companyRaw(requestParameters: CompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompanyResponse>> {
        if (requestParameters.corpCode === null || requestParameters.corpCode === undefined) {
            throw new runtime.RequiredError('corpCode','Required parameter requestParameters.corpCode was null or undefined when calling company.');
        }

        const queryParameters: any = {};

        if (requestParameters.corpCode !== undefined) {
            queryParameters['corp_code'] = requestParameters.corpCode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["crtfc_key"] = this.configuration.apiKey("crtfc_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/company.json`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * DART에 등록되어있는 기업의 개황정보를 제공합니다.
     * 
     */
    async company(requestParameters: CompanyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompanyResponse> {
        const response = await this.companyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * DART에 등록되어있는 공시대상회사의 고유번호,회사명,종목코드, 최근변경일자를 파일로 제공합니다.
     * 
     */
    async corpCodeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommonError>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["crtfc_key"] = this.configuration.apiKey("crtfc_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/corpCode.xml`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * DART에 등록되어있는 공시대상회사의 고유번호,회사명,종목코드, 최근변경일자를 파일로 제공합니다.
     * 
     */
    async corpCode(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommonError> {
        const response = await this.corpCodeRaw(initOverrides);
        return await response.value();
    }

    /**
     * DART에 공시된 문서를 제공합니다.
     * 
     */
    async documentRaw(requestParameters: DocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CommonError>> {
        if (requestParameters.rceptNo === null || requestParameters.rceptNo === undefined) {
            throw new runtime.RequiredError('rceptNo','Required parameter requestParameters.rceptNo was null or undefined when calling document.');
        }

        const queryParameters: any = {};

        if (requestParameters.rceptNo !== undefined) {
            queryParameters['rcept_no'] = requestParameters.rceptNo;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["crtfc_key"] = this.configuration.apiKey("crtfc_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/document.xml`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * DART에 공시된 문서를 제공합니다.
     * 
     */
    async document(requestParameters: DocumentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CommonError> {
        const response = await this.documentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 공시 유형별, 회사별, 날짜별 등 여러가지 조건으로 공시보고서 검색기능을 제공합니다.
     * 
     */
    async listRaw(requestParameters: ListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListResponse>> {
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

        if (requestParameters.lastReprtAt !== undefined) {
            queryParameters['last_reprt_at'] = requestParameters.lastReprtAt;
        }

        if (requestParameters.pblntfTy !== undefined) {
            queryParameters['pblntf_ty'] = requestParameters.pblntfTy;
        }

        if (requestParameters.pblntfDetailTy !== undefined) {
            queryParameters['pblntf_detail_ty'] = requestParameters.pblntfDetailTy;
        }

        if (requestParameters.corpCls !== undefined) {
            queryParameters['corp_cls'] = requestParameters.corpCls;
        }

        if (requestParameters.sort !== undefined) {
            queryParameters['sort'] = requestParameters.sort;
        }

        if (requestParameters.sortMth !== undefined) {
            queryParameters['sort_mth'] = requestParameters.sortMth;
        }

        if (requestParameters.pageNo !== undefined) {
            queryParameters['page_no'] = requestParameters.pageNo;
        }

        if (requestParameters.pageCount !== undefined) {
            queryParameters['page_count'] = requestParameters.pageCount;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["crtfc_key"] = this.configuration.apiKey("crtfc_key"); // ApiKeyAuth authentication
        }

        const response = await this.request({
            path: `/api/list.json`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * 공시 유형별, 회사별, 날짜별 등 여러가지 조건으로 공시보고서 검색기능을 제공합니다.
     * 
     */
    async list(requestParameters: ListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListResponse> {
        const response = await this.listRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * 최종보고서만 검색여부(Y or N)
 * 1) 기본값 : N(정정이 있는 경우 최종정정만 검색)
 */
export type ListLastReprtAtEnum =
    'Y'|
    'N'
/**
 * 공시유형
 * | 코드 | 설명 |
 * | --- | --- |
 * | A | 정기공시 |
 * | B | 주요사항보고 |
 * | C | 발행공시 |
 * | D | 지분공시 |
 * | E | 기타공시 |
 * | F | 외부감사관련 |
 * | G | 펀드공시 |
 * | H | 자산유동화 |
 * | I | 거래소공시 |
 * | j | 공정위공시 |
 */
export type ListPblntfTyEnum =
    'A'|
    'B'|
    'C'|
    'D'|
    'E'|
    'F'|
    'G'|
    'H'|
    'I'|
    'j'
/**
 * 법인구분 : Y(유가), K(코스닥), N(코넥스), E(기타)
 * 
 * ※ 없으면 전체조회, **복수조건 불가**
 */
export type ListCorpClsEnum =
    'Y'|
    'K'|
    'N'|
    'E'
/**
 * 정렬순서
 * - 접수일자: date
 * - 회사명 : crp
 * - 보고서명 : rpt
 * ※ 기본값 : date
 */
export type ListSortEnum =
    'date'|
    'crp'|
    'rpt'
/**
 * 정렬방법
 * - 오름차순 : asc
 * - 내림차순 : desc
 * ※ 기본값 : desc
 */
export type ListSortMthEnum =
    'asc'|
    'desc'
