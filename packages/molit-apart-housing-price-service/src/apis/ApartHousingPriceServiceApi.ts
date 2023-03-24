/* tslint:disable */
/* eslint-disable */
/**
 * 공동주택가격정보서비스
 * 공동주택에 대해 매년 공시기준일(1월1일)에 공시한 공동주택 가격정보의 지리데이터에서 생성된 맵 이미지와 도형 및 속성 값을 포함한 피처 집합을 제공하는 공동주택가격정보서비스
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
  ApartHousingPriceAttrResponse,
} from '../models';
import {
    ApartHousingPriceAttrResponseFromJSON,
    ApartHousingPriceAttrResponseToJSON,
} from '../models';

export interface GetApartHousingPriceAttrRequest {
    /**
     * 고유번호
     * 
     * 각 필지를 서로 구별하기 위하여 필지마다 붙이는 고유한 번호
     */
    pnu: string;
    /**
     * 기준일자
     * 
     * 기준년도(YYYY: 4자리)
     */
    stdrYear?: string;
    /**
     * 응답결과 형식
     */
    format?: GetApartHousingPriceAttrFormatEnum;
    /**
     * 한 페이지 결과 수
     */
    numOfRows?: number;
    /**
     * 페이지 번호
     */
    pageNo?: number;
}

export interface WmsGetApartHousingPriceWMSGetRequest {
    /**
     * 좌표체계
     * 
     * 좌표 체계를 나타냅니다. 현재   Modified Korea Central Belt(EPSG:5174) 좌표계를 지원합니다.
     */
    crs: string;
    /**
     * 크기 범위
     * 
     * 크기(extent)를 정의하는 범위(bounding box). 값은 crs 파라미터 형식에 맞춰 miny,minx,maxy,maxx 를 입력
     */
    bbox: string;
    /**
     * 너비
     * 
     * 반환 이미지의 너비(픽셀)
     */
    width: number;
    /**
     * 높이
     * 
     * 반환 이미지의 높이(픽셀)
     */
    height: number;
    /**
     * 산출물 형식
     * 
     * 반환 이미지 형식. png나   jpeg(jpg), gif 이미지 포맷을 지원
     */
    format: WmsGetApartHousingPriceWMSGetFormatEnum;
    /**
     * 레이어 목록
     * 화면에 표출할 레이어명의 나열, 값은 쉼표로 구분
     */
    layers?: string;
    /**
     * 투명도
     * 
     * 반환 이미지 배경의 투명 여부
     */
    transparent?: boolean;
    /**
     * 배경색
     * 
     * 반환 이미지의 배경색(0xRRGGBB)
     */
    bgcolor?: string;
    /**
     * 예외 보고
     * 
     * 예외 발생 시 처리 방법.
     * 1. blank : 빈 이미지
     * 2. xml : utf8 인코딩형식으로 에러 코드, 이름, 설명 정보를 담은   xml 파일
     * 3. inimage : 에러 정보가 포함된 이미지
     */
    exceptions?: WmsGetApartHousingPriceWMSGetExceptionsEnum;
}

/**
 * 
 */
export class ApartHousingPriceServiceApi extends runtime.BaseAPI {

    /**
     * 고유번호, 기준일자를 통해 공동주택가격에 대한 속성정보를 조회하는 공동주택가격속성조회 기능
     * 
     */
    async getApartHousingPriceAttrRaw(requestParameters: GetApartHousingPriceAttrRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ApartHousingPriceAttrResponse>> {
        if (requestParameters.pnu === null || requestParameters.pnu === undefined) {
            throw new runtime.RequiredError('pnu','Required parameter requestParameters.pnu was null or undefined when calling getApartHousingPriceAttr.');
        }

        const queryParameters: any = {};

        if (requestParameters.pnu !== undefined) {
            queryParameters['pnu'] = requestParameters.pnu;
        }

        if (requestParameters.stdrYear !== undefined) {
            queryParameters['stdrYear'] = requestParameters.stdrYear;
        }

        if (requestParameters.format !== undefined) {
            queryParameters['format'] = requestParameters.format;
        }

        if (requestParameters.numOfRows !== undefined) {
            queryParameters['numOfRows'] = requestParameters.numOfRows;
        }

        if (requestParameters.pageNo !== undefined) {
            queryParameters['pageNo'] = requestParameters.pageNo;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["ServiceKey"] = this.configuration.apiKey("ServiceKey"); // apiKey authentication
        }

        const response = await this.request({
            path: `/attr/getApartHousingPriceAttr`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ApartHousingPriceAttrResponseFromJSON(jsonValue));
    }

    /**
     * 고유번호, 기준일자를 통해 공동주택가격에 대한 속성정보를 조회하는 공동주택가격속성조회 기능
     * 
     */
    async getApartHousingPriceAttr(requestParameters: GetApartHousingPriceAttrRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ApartHousingPriceAttrResponse> {
        const response = await this.getApartHousingPriceAttrRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 좌표정보를 통해 공동주택가격에 대한 지리데이터에서 생성된 맵 이미지를 조회하는 공동주택가격WMS조회 기능
     * 
     */
    async wmsGetApartHousingPriceWMSGetRaw(requestParameters: WmsGetApartHousingPriceWMSGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters.crs === null || requestParameters.crs === undefined) {
            throw new runtime.RequiredError('crs','Required parameter requestParameters.crs was null or undefined when calling wmsGetApartHousingPriceWMSGet.');
        }

        if (requestParameters.bbox === null || requestParameters.bbox === undefined) {
            throw new runtime.RequiredError('bbox','Required parameter requestParameters.bbox was null or undefined when calling wmsGetApartHousingPriceWMSGet.');
        }

        if (requestParameters.width === null || requestParameters.width === undefined) {
            throw new runtime.RequiredError('width','Required parameter requestParameters.width was null or undefined when calling wmsGetApartHousingPriceWMSGet.');
        }

        if (requestParameters.height === null || requestParameters.height === undefined) {
            throw new runtime.RequiredError('height','Required parameter requestParameters.height was null or undefined when calling wmsGetApartHousingPriceWMSGet.');
        }

        if (requestParameters.format === null || requestParameters.format === undefined) {
            throw new runtime.RequiredError('format','Required parameter requestParameters.format was null or undefined when calling wmsGetApartHousingPriceWMSGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.layers !== undefined) {
            queryParameters['layers'] = requestParameters.layers;
        }

        if (requestParameters.crs !== undefined) {
            queryParameters['crs'] = requestParameters.crs;
        }

        if (requestParameters.bbox !== undefined) {
            queryParameters['bbox'] = requestParameters.bbox;
        }

        if (requestParameters.width !== undefined) {
            queryParameters['width'] = requestParameters.width;
        }

        if (requestParameters.height !== undefined) {
            queryParameters['height'] = requestParameters.height;
        }

        if (requestParameters.format !== undefined) {
            queryParameters['format'] = requestParameters.format;
        }

        if (requestParameters.transparent !== undefined) {
            queryParameters['transparent'] = requestParameters.transparent;
        }

        if (requestParameters.bgcolor !== undefined) {
            queryParameters['bgcolor'] = requestParameters.bgcolor;
        }

        if (requestParameters.exceptions !== undefined) {
            queryParameters['exceptions'] = requestParameters.exceptions;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            queryParameters["ServiceKey"] = this.configuration.apiKey("ServiceKey"); // apiKey authentication
        }

        const response = await this.request({
            path: `/wms/getApartHousingPriceWMS`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.BlobApiResponse(response);
    }

    /**
     * 좌표정보를 통해 공동주택가격에 대한 지리데이터에서 생성된 맵 이미지를 조회하는 공동주택가격WMS조회 기능
     * 
     */
    async wmsGetApartHousingPriceWMSGet(requestParameters: WmsGetApartHousingPriceWMSGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.wmsGetApartHousingPriceWMSGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GetApartHousingPriceAttrFormatEnum = {
    Json: 'json',
    Xml: 'xml'
} as const;
export type GetApartHousingPriceAttrFormatEnum = typeof GetApartHousingPriceAttrFormatEnum[keyof typeof GetApartHousingPriceAttrFormatEnum];
/**
 * @export
 */
export const WmsGetApartHousingPriceWMSGetFormatEnum = {
    Png: 'image/png',
    Jpeg: 'image/jpeg',
    Gif: 'image/gif'
} as const;
export type WmsGetApartHousingPriceWMSGetFormatEnum = typeof WmsGetApartHousingPriceWMSGetFormatEnum[keyof typeof WmsGetApartHousingPriceWMSGetFormatEnum];
/**
 * @export
 */
export const WmsGetApartHousingPriceWMSGetExceptionsEnum = {
    Blank: 'blank',
    Xml: 'xml',
    Inimage: 'inimage'
} as const;
export type WmsGetApartHousingPriceWMSGetExceptionsEnum = typeof WmsGetApartHousingPriceWMSGetExceptionsEnum[keyof typeof WmsGetApartHousingPriceWMSGetExceptionsEnum];
