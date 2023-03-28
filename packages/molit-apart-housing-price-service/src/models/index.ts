/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface ApartHousingPriceAttr
 */
export interface ApartHousingPriceAttr {
    /**
     * 고유번호
     * 
     * 각 필지를 서로 구별하기 위하여 필지마다 붙이는 고유한 번호
     * @type {string}
     * @memberof ApartHousingPriceAttr
     */
    pnu: string;
    /**
     * 법정동코드
     * 
     * 토지가 소재한 행정구역코드(법정동코드) 10자리
     * @type {string}
     * @memberof ApartHousingPriceAttr
     */
    ldCode?: string;
    /**
     * 법정동명
     * 
     * 토지가 소재한 소재지의 행정구역 명칭(법정동명)
     * @type {string}
     * @memberof ApartHousingPriceAttr
     */
    ldCodeNm?: string;
    /**
     * 특수지구분코드
     * @type {string}
     * @memberof ApartHousingPriceAttr
     */
    regstrSeCode?: string;
    /**
     * 특수지구분명
     * 
     * 토지가 위치한 토지의 대장 구분 (토지(임야)대장구분)
     * @type {string}
     * @memberof ApartHousingPriceAttr
     */
    regstrSeCodeNm?: string;
    /**
     * 지번
     * 
     * 필지에 부여하여 지적공부에 등록한 번호
     * @type {string}
     * @memberof ApartHousingPriceAttr
     */
    mnnmSlno?: string;
    /**
     * 기준년도
     * 
     * 공동주택가격의 기준년도
     * @type {string}
     * @memberof ApartHousingPriceAttr
     */
    stdrYear: string;
    /**
     * 기준월
     * 
     * 공동주택가격의 기준월
     * @type {string}
     * @memberof ApartHousingPriceAttr
     */
    stdrMt: string;
    /**
     * 공동주택코드
     * @type {string}
     * @memberof ApartHousingPriceAttr
     */
    aphusCode?: string;
    /**
     * 공동주택구분코드
     * @type {string}
     * @memberof ApartHousingPriceAttr
     */
    aphusSeCode?: string;
    /**
     * 공동주택구분명
     * @type {string}
     * @memberof ApartHousingPriceAttr
     */
    aphusSeCodeNm?: string;
    /**
     * 특수지명
     * @type {string}
     * @memberof ApartHousingPriceAttr
     */
    spclLandNm?: string;
    /**
     * 공동주택명
     * @type {string}
     * @memberof ApartHousingPriceAttr
     */
    aphusNm?: string;
    /**
     * 동명
     * @type {string}
     * @memberof ApartHousingPriceAttr
     */
    dongNm?: string;
    /**
     * 층명
     * @type {string}
     * @memberof ApartHousingPriceAttr
     */
    floorNm?: string;
    /**
     * 호명
     * @type {string}
     * @memberof ApartHousingPriceAttr
     */
    hoNm?: string;
    /**
     * 전용면적(㎡)
     * @type {string}
     * @memberof ApartHousingPriceAttr
     */
    prvuseAr?: string;
    /**
     * 공시가격(원)
     * @type {string}
     * @memberof ApartHousingPriceAttr
     */
    pblntfPc?: string;
    /**
     * 데이터기준일자
     * @type {string}
     * @memberof ApartHousingPriceAttr
     */
    lastUpdtDt?: string;
}
/**
 * 
 * @export
 * @interface ApartHousingPriceAttrResponse
 */
export interface ApartHousingPriceAttrResponse {
    /**
     * 
     * @type {ApartHousingPriceAttrResponseApartHousingPrices}
     * @memberof ApartHousingPriceAttrResponse
     */
    apartHousingPrices?: ApartHousingPriceAttrResponseApartHousingPrices;
}
/**
 * 
 * @export
 * @interface ApartHousingPriceAttrResponseApartHousingPrices
 */
export interface ApartHousingPriceAttrResponseApartHousingPrices {
    /**
     * 결과코드
     * @type {string}
     * @memberof ApartHousingPriceAttrResponseApartHousingPrices
     */
    resultCode: string | null;
    /**
     * 결과메시지
     * @type {string}
     * @memberof ApartHousingPriceAttrResponseApartHousingPrices
     */
    resultMsg: string | null;
    /**
     * 한 페이지 결과 수
     * @type {string}
     * @memberof ApartHousingPriceAttrResponseApartHousingPrices
     */
    numOfRows: string;
    /**
     * 페이지 번호
     * @type {string}
     * @memberof ApartHousingPriceAttrResponseApartHousingPrices
     */
    pageNo: string;
    /**
     * 전체 결과 수
     * @type {string}
     * @memberof ApartHousingPriceAttrResponseApartHousingPrices
     */
    totalCount: string;
    /**
     * 
     * @type {Array<ApartHousingPriceAttr>}
     * @memberof ApartHousingPriceAttrResponseApartHousingPrices
     */
    field: Array<ApartHousingPriceAttr>;
}
/**
 * 
 * @export
 * @interface ApartHousingPriceAttrResponseApartHousingPricesAllOf
 */
export interface ApartHousingPriceAttrResponseApartHousingPricesAllOf {
    /**
     * 
     * @type {Array<ApartHousingPriceAttr>}
     * @memberof ApartHousingPriceAttrResponseApartHousingPricesAllOf
     */
    field: Array<ApartHousingPriceAttr>;
}
/**
 * 
 * @export
 * @interface Pagination
 */
export interface Pagination {
    /**
     * 한 페이지 결과 수
     * @type {string}
     * @memberof Pagination
     */
    numOfRows: string;
    /**
     * 페이지 번호
     * @type {string}
     * @memberof Pagination
     */
    pageNo: string;
    /**
     * 전체 결과 수
     * @type {string}
     * @memberof Pagination
     */
    totalCount: string;
}
/**
 * 
 * @export
 * @interface Response
 */
export interface Response {
    /**
     * 결과코드
     * @type {string}
     * @memberof Response
     */
    resultCode: string | null;
    /**
     * 결과메시지
     * @type {string}
     * @memberof Response
     */
    resultMsg: string | null;
}
