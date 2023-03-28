/* tslint:disable */
/* eslint-disable */
/**
 * 
 * @export
 * @interface AccnutAdtorNmNdAdtOpinionItem
 */
export interface AccnutAdtorNmNdAdtOpinionItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof AccnutAdtorNmNdAdtOpinionItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof AccnutAdtorNmNdAdtOpinionItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof AccnutAdtorNmNdAdtOpinionItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof AccnutAdtorNmNdAdtOpinionItem
     */
    corp_name: string;
    /**
     * 사업연도(당기, 전기, 전전기)
     * @type {string}
     * @memberof AccnutAdtorNmNdAdtOpinionItem
     */
    bsns_year: string;
    /**
     * 감사인
     * @type {string}
     * @memberof AccnutAdtorNmNdAdtOpinionItem
     */
    adtor: string;
    /**
     * 감사의견
     * @type {string}
     * @memberof AccnutAdtorNmNdAdtOpinionItem
     */
    adt_opinion: string;
    /**
     * 감사보고서 특이사항
     * *① 2019년 12월 8일까지 사용됨*
     * @type {string}
     * @memberof AccnutAdtorNmNdAdtOpinionItem
     */
    adt_reprt_spcmnt_matter: string;
    /**
     * 강조사항 등
     * *② 2019년 12월 9일부터 추가됨*
     * @type {string}
     * @memberof AccnutAdtorNmNdAdtOpinionItem
     */
    emphs_matter: string;
    /**
     * 핵심감사사항
     * *③ 2019년 12월 9일부터 추가됨*
     * @type {string}
     * @memberof AccnutAdtorNmNdAdtOpinionItem
     */
    core_adt_matter: string;
}
/**
 * @type AccnutAdtorNmNdAdtOpinionResponse
 * 
 * @export
 */
export type AccnutAdtorNmNdAdtOpinionResponse = AccnutAdtorNmNdAdtOpinionResponseSuccess | CommonError;
/**
 * 
 * @export
 * @interface AccnutAdtorNmNdAdtOpinionResponseSuccess
 */
export interface AccnutAdtorNmNdAdtOpinionResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof AccnutAdtorNmNdAdtOpinionResponseSuccess
     */
    status: AccnutAdtorNmNdAdtOpinionResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof AccnutAdtorNmNdAdtOpinionResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<AccnutAdtorNmNdAdtOpinionItem>}
     * @memberof AccnutAdtorNmNdAdtOpinionResponseSuccess
     */
    list: Array<AccnutAdtorNmNdAdtOpinionItem>;
}

/**
 * 에러 및 정보 코드
 */
export type AccnutAdtorNmNdAdtOpinionResponseSuccessStatusEnum =
    '000'

const AccnutAdtorNmNdAdtOpinionResponseSuccessStatusEnumValues = [
    '000',
]

export function isAccnutAdtorNmNdAdtOpinionResponseSuccessStatusEnum(value: any): value is AccnutAdtorNmNdAdtOpinionResponseSuccessStatusEnum {
    return AccnutAdtorNmNdAdtOpinionResponseSuccessStatusEnumValues.indexOf(value as unknown as AccnutAdtorNmNdAdtOpinionResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface AccnutAdtorNmNdAdtOpinionResponseSuccessAllOf
 */
export interface AccnutAdtorNmNdAdtOpinionResponseSuccessAllOf {
    /**
     * 
     * @type {Array<AccnutAdtorNmNdAdtOpinionItem>}
     * @memberof AccnutAdtorNmNdAdtOpinionResponseSuccessAllOf
     */
    list: Array<AccnutAdtorNmNdAdtOpinionItem>;
}
/**
 * 
 * @export
 * @interface AccnutAdtorNonAdtServcCnclsSttusItem
 */
export interface AccnutAdtorNonAdtServcCnclsSttusItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof AccnutAdtorNonAdtServcCnclsSttusItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof AccnutAdtorNonAdtServcCnclsSttusItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof AccnutAdtorNonAdtServcCnclsSttusItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof AccnutAdtorNonAdtServcCnclsSttusItem
     */
    corp_name: string;
    /**
     * 사업연도(당기, 전기, 전전기)
     * @type {string}
     * @memberof AccnutAdtorNonAdtServcCnclsSttusItem
     */
    bsns_year: string;
    /**
     * 계약체결일
     * @type {string}
     * @memberof AccnutAdtorNonAdtServcCnclsSttusItem
     */
    cntrct_cncls_de: string;
    /**
     * 용역내용
     * @type {string}
     * @memberof AccnutAdtorNonAdtServcCnclsSttusItem
     */
    servc_cn: string;
    /**
     * 용역수행기간
     * @type {string}
     * @memberof AccnutAdtorNonAdtServcCnclsSttusItem
     */
    servc_exc_pd: string;
    /**
     * 용역보수
     * @type {string}
     * @memberof AccnutAdtorNonAdtServcCnclsSttusItem
     */
    servc_mendng: string;
    /**
     * 비고
     * @type {string}
     * @memberof AccnutAdtorNonAdtServcCnclsSttusItem
     */
    rm: string;
}
/**
 * @type AccnutAdtorNonAdtServcCnclsSttusResponse
 * 
 * @export
 */
export type AccnutAdtorNonAdtServcCnclsSttusResponse = AccnutAdtorNonAdtServcCnclsSttusResponseSuccess | CommonError;
/**
 * 
 * @export
 * @interface AccnutAdtorNonAdtServcCnclsSttusResponseSuccess
 */
export interface AccnutAdtorNonAdtServcCnclsSttusResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof AccnutAdtorNonAdtServcCnclsSttusResponseSuccess
     */
    status: AccnutAdtorNonAdtServcCnclsSttusResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof AccnutAdtorNonAdtServcCnclsSttusResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<AccnutAdtorNonAdtServcCnclsSttusItem>}
     * @memberof AccnutAdtorNonAdtServcCnclsSttusResponseSuccess
     */
    list: Array<AccnutAdtorNonAdtServcCnclsSttusItem>;
}

/**
 * 에러 및 정보 코드
 */
export type AccnutAdtorNonAdtServcCnclsSttusResponseSuccessStatusEnum =
    '000'

const AccnutAdtorNonAdtServcCnclsSttusResponseSuccessStatusEnumValues = [
    '000',
]

export function isAccnutAdtorNonAdtServcCnclsSttusResponseSuccessStatusEnum(value: any): value is AccnutAdtorNonAdtServcCnclsSttusResponseSuccessStatusEnum {
    return AccnutAdtorNonAdtServcCnclsSttusResponseSuccessStatusEnumValues.indexOf(value as unknown as AccnutAdtorNonAdtServcCnclsSttusResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface AccnutAdtorNonAdtServcCnclsSttusResponseSuccessAllOf
 */
export interface AccnutAdtorNonAdtServcCnclsSttusResponseSuccessAllOf {
    /**
     * 
     * @type {Array<AccnutAdtorNonAdtServcCnclsSttusItem>}
     * @memberof AccnutAdtorNonAdtServcCnclsSttusResponseSuccessAllOf
     */
    list: Array<AccnutAdtorNonAdtServcCnclsSttusItem>;
}
/**
 * 
 * @export
 * @interface AdtServcCnclsSttusItem
 */
export interface AdtServcCnclsSttusItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof AdtServcCnclsSttusItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof AdtServcCnclsSttusItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof AdtServcCnclsSttusItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof AdtServcCnclsSttusItem
     */
    corp_name: string;
    /**
     * 사업연도(당기, 전기, 전전기)
     * @type {string}
     * @memberof AdtServcCnclsSttusItem
     */
    bsns_year: string;
    /**
     * 감사인
     * @type {string}
     * @memberof AdtServcCnclsSttusItem
     */
    adtor: string;
    /**
     * 내용
     * @type {string}
     * @memberof AdtServcCnclsSttusItem
     */
    cn: string;
    /**
     * 보수
     * *① 2020년 7월 5일까지 사용됨*
     * @type {string}
     * @memberof AdtServcCnclsSttusItem
     */
    mendng: string;
    /**
     * 총소요시간
     * *① 2020년 7월 5일까지 사용됨*
     * @type {string}
     * @memberof AdtServcCnclsSttusItem
     */
    tot_reqre_time: string;
    /**
     * 감사계약내역(보수)
     * *② 2020년 7월 6일부터 추가됨*
     * @type {string}
     * @memberof AdtServcCnclsSttusItem
     */
    adt_cntrct_dtls_mendng: string;
    /**
     * 감사계약내역(시간)
     * *② 2020년 7월 6일부터 추가됨*
     * @type {string}
     * @memberof AdtServcCnclsSttusItem
     */
    adt_cntrct_dtls_time: string;
    /**
     * 실제수행내역(보수)
     * *② 2020년 7월 6일부터 추가됨*
     * @type {string}
     * @memberof AdtServcCnclsSttusItem
     */
    real_exc_dtls_mendng: string;
    /**
     * 실제수행내역(시간)
     * *② 2020년 7월 6일부터 추가됨*
     * @type {string}
     * @memberof AdtServcCnclsSttusItem
     */
    real_exc_dtls_time: string;
}
/**
 * @type AdtServcCnclsSttusResponse
 * 
 * @export
 */
export type AdtServcCnclsSttusResponse = AdtServcCnclsSttusResponseSuccess | CommonError;
/**
 * 
 * @export
 * @interface AdtServcCnclsSttusResponseSuccess
 */
export interface AdtServcCnclsSttusResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof AdtServcCnclsSttusResponseSuccess
     */
    status: AdtServcCnclsSttusResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof AdtServcCnclsSttusResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<AdtServcCnclsSttusItem>}
     * @memberof AdtServcCnclsSttusResponseSuccess
     */
    list: Array<AdtServcCnclsSttusItem>;
}

/**
 * 에러 및 정보 코드
 */
export type AdtServcCnclsSttusResponseSuccessStatusEnum =
    '000'

const AdtServcCnclsSttusResponseSuccessStatusEnumValues = [
    '000',
]

export function isAdtServcCnclsSttusResponseSuccessStatusEnum(value: any): value is AdtServcCnclsSttusResponseSuccessStatusEnum {
    return AdtServcCnclsSttusResponseSuccessStatusEnumValues.indexOf(value as unknown as AdtServcCnclsSttusResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface AdtServcCnclsSttusResponseSuccessAllOf
 */
export interface AdtServcCnclsSttusResponseSuccessAllOf {
    /**
     * 
     * @type {Array<AdtServcCnclsSttusItem>}
     * @memberof AdtServcCnclsSttusResponseSuccessAllOf
     */
    list: Array<AdtServcCnclsSttusItem>;
}
/**
 * 
 * @export
 * @interface AlotMatterItem
 */
export interface AlotMatterItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof AlotMatterItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof AlotMatterItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof AlotMatterItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof AlotMatterItem
     */
    corp_name: string;
    /**
     * 구분
     * @type {string}
     * @memberof AlotMatterItem
     */
    se: string;
    /**
     * 주식종류 (보통주 등)
     * @type {string}
     * @memberof AlotMatterItem
     */
    stock_knd: string;
    /**
     * 당기
     * @type {string}
     * @memberof AlotMatterItem
     */
    thstrm: string;
    /**
     * 전기
     * @type {string}
     * @memberof AlotMatterItem
     */
    frmtrm: string;
    /**
     * 전전기
     * @type {string}
     * @memberof AlotMatterItem
     */
    lwfr: string;
}
/**
 * @type AlotMatterResponse
 * 
 * @export
 */
export type AlotMatterResponse = AlotMatterResponseSuccess | CommonError;
/**
 * 
 * @export
 * @interface AlotMatterResponseSuccess
 */
export interface AlotMatterResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof AlotMatterResponseSuccess
     */
    status: AlotMatterResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof AlotMatterResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<AlotMatterItem>}
     * @memberof AlotMatterResponseSuccess
     */
    list: Array<AlotMatterItem>;
}

/**
 * 에러 및 정보 코드
 */
export type AlotMatterResponseSuccessStatusEnum =
    '000'

const AlotMatterResponseSuccessStatusEnumValues = [
    '000',
]

export function isAlotMatterResponseSuccessStatusEnum(value: any): value is AlotMatterResponseSuccessStatusEnum {
    return AlotMatterResponseSuccessStatusEnumValues.indexOf(value as unknown as AlotMatterResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface AlotMatterResponseSuccessAllOf
 */
export interface AlotMatterResponseSuccessAllOf {
    /**
     * 
     * @type {Array<AlotMatterItem>}
     * @memberof AlotMatterResponseSuccessAllOf
     */
    list: Array<AlotMatterItem>;
}
/**
 * 
 * @export
 * @interface AstInhtrfEtcPtbkOptItem
 */
export interface AstInhtrfEtcPtbkOptItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof AstInhtrfEtcPtbkOptItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof AstInhtrfEtcPtbkOptItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof AstInhtrfEtcPtbkOptItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof AstInhtrfEtcPtbkOptItem
     */
    corp_name: string;
    /**
     * 보고 사유
     * @type {string}
     * @memberof AstInhtrfEtcPtbkOptItem
     */
    rp_rsn: string;
    /**
     * 자산양수ㆍ도 가액
     * @type {string}
     * @memberof AstInhtrfEtcPtbkOptItem
     */
    ast_inhtrf_prc: string;
}
/**
 * @type AstInhtrfEtcPtbkOptResponse
 * 
 * @export
 */
export type AstInhtrfEtcPtbkOptResponse = AstInhtrfEtcPtbkOptResponseSuccess | CommonError;
/**
 * 
 * @export
 * @interface AstInhtrfEtcPtbkOptResponseSuccess
 */
export interface AstInhtrfEtcPtbkOptResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof AstInhtrfEtcPtbkOptResponseSuccess
     */
    status: AstInhtrfEtcPtbkOptResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof AstInhtrfEtcPtbkOptResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<AstInhtrfEtcPtbkOptItem>}
     * @memberof AstInhtrfEtcPtbkOptResponseSuccess
     */
    list: Array<AstInhtrfEtcPtbkOptItem>;
}

/**
 * 에러 및 정보 코드
 */
export type AstInhtrfEtcPtbkOptResponseSuccessStatusEnum =
    '000'

const AstInhtrfEtcPtbkOptResponseSuccessStatusEnumValues = [
    '000',
]

export function isAstInhtrfEtcPtbkOptResponseSuccessStatusEnum(value: any): value is AstInhtrfEtcPtbkOptResponseSuccessStatusEnum {
    return AstInhtrfEtcPtbkOptResponseSuccessStatusEnumValues.indexOf(value as unknown as AstInhtrfEtcPtbkOptResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface AstInhtrfEtcPtbkOptResponseSuccessAllOf
 */
export interface AstInhtrfEtcPtbkOptResponseSuccessAllOf {
    /**
     * 
     * @type {Array<AstInhtrfEtcPtbkOptItem>}
     * @memberof AstInhtrfEtcPtbkOptResponseSuccessAllOf
     */
    list: Array<AstInhtrfEtcPtbkOptItem>;
}
/**
 * @type BdRsResponse
 * 
 * @export
 */
export type BdRsResponse = BdRsResponseSuccess | CommonError;
/**
 * @type BdRsResponseItem
 * 
 * @export
 */
export type BdRsResponseItem = BdRsResponseItemGeneral | BdRsResponseItemPurpose | BdRsResponseItemSeller | BdRsResponseItemUnderwriter;
/**
 * 
 * @export
 * @interface BdRsResponseItemGeneral
 */
export interface BdRsResponseItemGeneral {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof BdRsResponseItemGeneral
     */
    title: BdRsResponseItemGeneralTitleEnum;
    /**
     * 
     * @type {Array<BdRsResponseItemGeneralItem>}
     * @memberof BdRsResponseItemGeneral
     */
    list: Array<BdRsResponseItemGeneralItem>;
}

/**
 * 그룹명칭
 */
export type BdRsResponseItemGeneralTitleEnum =
    '일반사항'

const BdRsResponseItemGeneralTitleEnumValues = [
    '일반사항',
]

export function isBdRsResponseItemGeneralTitleEnum(value: any): value is BdRsResponseItemGeneralTitleEnum {
    return BdRsResponseItemGeneralTitleEnumValues.indexOf(value as unknown as BdRsResponseItemGeneralTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface BdRsResponseItemGeneralItem
 */
export interface BdRsResponseItemGeneralItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof BdRsResponseItemGeneralItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    corp_name: string;
    /**
     * 회차
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    tm: string;
    /**
     * 채무증권 명칭
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    bdnmn: string;
    /**
     * 모집(매출)방법
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    slmth: string;
    /**
     * 권면(전자등록)총액
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    fta: string;
    /**
     * 모집(매출)총액
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    slta: string;
    /**
     * 발행가액
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    isprc: string;
    /**
     * 이자율
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    intr: string;
    /**
     * 발행수익률
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    isrr: string;
    /**
     * 상환기일
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    rpd: string;
    /**
     * 원리금지급대행기관
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    print_pymint: string;
    /**
     * (사채)관리회사
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    mngt_cmp: string;
    /**
     * 신용등급(신용평가기관)
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    cdrt_int: string;
    /**
     * 청약기일
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    sbd: string;
    /**
     * 납입기일
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    pymd: string;
    /**
     * 청약공고일
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    sband: string;
    /**
     * 배정공고일
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    asand: string;
    /**
     * 배정기준일
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    asstd: string;
    /**
     * 표시통화
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    dpcrn: string;
    /**
     * 표시통화기준발행규모
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    dpcr_amt: string;
    /**
     * 사용지역
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    usarn: string;
    /**
     * 사용국가
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    usntn: string;
    /**
     * 원화 교환 예정 여부
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    wnexpl_at: string;
    /**
     * 인수기관명
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    udtintnm: string;
    /**
     * 보증을 받은 경우(보증기관)
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    grt_int: string;
    /**
     * 보증을 받은 경우(보증금액)
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    grt_amt: string;
    /**
     * 담보 제공의 경우(담보의 종류)
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    icmg_mgknd: string;
    /**
     * 담보 제공의 경우(담보금액)
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    icmg_mgamt: string;
    /**
     * 지분증권과 연계된 경우(행사대상증권)
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    estk_exstk: string;
    /**
     * 지분증권과 연계된 경우(권리행사비율)
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    estk_exrt: string;
    /**
     * 지분증권과 연계된 경우(권리행사가격)
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    estk_exprc: string;
    /**
     * 지분증권과 연계된 경우(권리행사기간)
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    estk_expd: string;
    /**
     * 주요사항보고서(접수번호)
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    rpt_rcpn: string;
    /**
     * 파생결합사채해당여부
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    drcb_at: string;
    /**
     * 파생결합사채(기초자산)
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    drcb_uast: string;
    /**
     * 파생결합사채(옵션종류)
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    drcb_optknd: string;
    /**
     * 파생결합사채(만기일)
     * @type {string}
     * @memberof BdRsResponseItemGeneralItem
     */
    drcb_mtd: string;
}
/**
 * 
 * @export
 * @interface BdRsResponseItemPurpose
 */
export interface BdRsResponseItemPurpose {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof BdRsResponseItemPurpose
     */
    title: BdRsResponseItemPurposeTitleEnum;
    /**
     * 
     * @type {Array<BdRsResponseItemPurposeItem>}
     * @memberof BdRsResponseItemPurpose
     */
    list: Array<BdRsResponseItemPurposeItem>;
}

/**
 * 그룹명칭
 */
export type BdRsResponseItemPurposeTitleEnum =
    '자금의사용목적'

const BdRsResponseItemPurposeTitleEnumValues = [
    '자금의사용목적',
]

export function isBdRsResponseItemPurposeTitleEnum(value: any): value is BdRsResponseItemPurposeTitleEnum {
    return BdRsResponseItemPurposeTitleEnumValues.indexOf(value as unknown as BdRsResponseItemPurposeTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface BdRsResponseItemPurposeItem
 */
export interface BdRsResponseItemPurposeItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof BdRsResponseItemPurposeItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof BdRsResponseItemPurposeItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof BdRsResponseItemPurposeItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof BdRsResponseItemPurposeItem
     */
    corp_name: string;
    /**
     * 회차
     * @type {string}
     * @memberof BdRsResponseItemPurposeItem
     */
    tm: string;
    /**
     * 구분
     * @type {string}
     * @memberof BdRsResponseItemPurposeItem
     */
    se: string;
    /**
     * 금액
     * @type {string}
     * @memberof BdRsResponseItemPurposeItem
     */
    amt: string;
}
/**
 * 
 * @export
 * @interface BdRsResponseItemSeller
 */
export interface BdRsResponseItemSeller {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof BdRsResponseItemSeller
     */
    title: BdRsResponseItemSellerTitleEnum;
    /**
     * 
     * @type {Array<BdRsResponseItemSellerItem>}
     * @memberof BdRsResponseItemSeller
     */
    list: Array<BdRsResponseItemSellerItem>;
}

/**
 * 그룹명칭
 */
export type BdRsResponseItemSellerTitleEnum =
    '매출인에관한사항'

const BdRsResponseItemSellerTitleEnumValues = [
    '매출인에관한사항',
]

export function isBdRsResponseItemSellerTitleEnum(value: any): value is BdRsResponseItemSellerTitleEnum {
    return BdRsResponseItemSellerTitleEnumValues.indexOf(value as unknown as BdRsResponseItemSellerTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface BdRsResponseItemSellerItem
 */
export interface BdRsResponseItemSellerItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof BdRsResponseItemSellerItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof BdRsResponseItemSellerItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof BdRsResponseItemSellerItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof BdRsResponseItemSellerItem
     */
    corp_name: string;
    /**
     * 회차
     * @type {string}
     * @memberof BdRsResponseItemSellerItem
     */
    tm: string;
    /**
     * 보유자
     * @type {string}
     * @memberof BdRsResponseItemSellerItem
     */
    hdr: string;
    /**
     * 회사와의관계
     * @type {string}
     * @memberof BdRsResponseItemSellerItem
     */
    rl_cmp: string;
    /**
     * 매출전보유주식수
     * @type {string}
     * @memberof BdRsResponseItemSellerItem
     */
    bfsl_hdstk: string;
    /**
     * 매출증권수
     * @type {string}
     * @memberof BdRsResponseItemSellerItem
     */
    slstk: string;
    /**
     * 매출후보유주식수
     * @type {string}
     * @memberof BdRsResponseItemSellerItem
     */
    atsl_hdstk: string;
}
/**
 * 
 * @export
 * @interface BdRsResponseItemUnderwriter
 */
export interface BdRsResponseItemUnderwriter {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof BdRsResponseItemUnderwriter
     */
    title: BdRsResponseItemUnderwriterTitleEnum;
    /**
     * 
     * @type {Array<BdRsResponseItemUnderwriterItem>}
     * @memberof BdRsResponseItemUnderwriter
     */
    list: Array<BdRsResponseItemUnderwriterItem>;
}

/**
 * 그룹명칭
 */
export type BdRsResponseItemUnderwriterTitleEnum =
    '인수인정보'

const BdRsResponseItemUnderwriterTitleEnumValues = [
    '인수인정보',
]

export function isBdRsResponseItemUnderwriterTitleEnum(value: any): value is BdRsResponseItemUnderwriterTitleEnum {
    return BdRsResponseItemUnderwriterTitleEnumValues.indexOf(value as unknown as BdRsResponseItemUnderwriterTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface BdRsResponseItemUnderwriterItem
 */
export interface BdRsResponseItemUnderwriterItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof BdRsResponseItemUnderwriterItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof BdRsResponseItemUnderwriterItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof BdRsResponseItemUnderwriterItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof BdRsResponseItemUnderwriterItem
     */
    corp_name: string;
    /**
     * 회차
     * @type {string}
     * @memberof BdRsResponseItemUnderwriterItem
     */
    tm: string;
    /**
     * 인수인구분
     * @type {string}
     * @memberof BdRsResponseItemUnderwriterItem
     */
    actsen: string;
    /**
     * 인수인명
     * @type {string}
     * @memberof BdRsResponseItemUnderwriterItem
     */
    actnmn: string;
    /**
     * 증권의종류
     * @type {string}
     * @memberof BdRsResponseItemUnderwriterItem
     */
    stksen: string;
    /**
     * 인수수량
     * @type {string}
     * @memberof BdRsResponseItemUnderwriterItem
     */
    udtcnt: string;
    /**
     * 9,999,999,999
     * @type {string}
     * @memberof BdRsResponseItemUnderwriterItem
     */
    udtamt: string;
    /**
     * 인수대가
     * @type {string}
     * @memberof BdRsResponseItemUnderwriterItem
     */
    udtprc: string;
    /**
     * 인수방법
     * @type {string}
     * @memberof BdRsResponseItemUnderwriterItem
     */
    udtmth: string;
}
/**
 * 
 * @export
 * @interface BdRsResponseSuccess
 */
export interface BdRsResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof BdRsResponseSuccess
     */
    status: BdRsResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof BdRsResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<BdRsResponseItem>}
     * @memberof BdRsResponseSuccess
     */
    group: Array<BdRsResponseItem>;
}

/**
 * 에러 및 정보 코드
 */
export type BdRsResponseSuccessStatusEnum =
    '000'

const BdRsResponseSuccessStatusEnumValues = [
    '000',
]

export function isBdRsResponseSuccessStatusEnum(value: any): value is BdRsResponseSuccessStatusEnum {
    return BdRsResponseSuccessStatusEnumValues.indexOf(value as unknown as BdRsResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface BdRsResponseSuccessAllOf
 */
export interface BdRsResponseSuccessAllOf {
    /**
     * 
     * @type {Array<BdRsResponseItem>}
     * @memberof BdRsResponseSuccessAllOf
     */
    group: Array<BdRsResponseItem>;
}
/**
 * 
 * @export
 * @interface BdwtIsDecsnItem
 */
export interface BdwtIsDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof BdwtIsDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    corp_name: string;
    /**
     * 사채의 종류(회차)
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    bd_tm: string;
    /**
     * 사채의 종류(종류)
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    bd_knd: string;
    /**
     * 사채의 권면(전자등록)총액 (원)
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    bd_fta: string;
    /**
     * 정관상 잔여 발행한도 (원)
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    atcsc_rmislmt: string;
    /**
     * 해외발행(권면(전자등록)총액)
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    ovis_fta: string;
    /**
     * 해외발행(권면(전자등록)총액(통화단위))
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    ovis_fta_crn: string;
    /**
     * 해외발행(기준환율등)
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    ovis_ster: string;
    /**
     * 해외발행(발행지역)
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    ovis_isar: string;
    /**
     * 해외발행(해외상장시 시장의 명칭)
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    ovis_mktnm: string;
    /**
     * 자금조달의 목적(시설자금 (원))
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    fdpp_fclt: string;
    /**
     * 자금조달의 목적(영업양수자금 (원))
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    fdpp_bsninh: string;
    /**
     * 자금조달의 목적(운영자금 (원))
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    fdpp_op: string;
    /**
     * 자금조달의 목적(채무상환자금 (원))
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    fdpp_dtrp: string;
    /**
     * 자금조달의 목적(타법인 증권 취득자금 (원))
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    fdpp_ocsa: string;
    /**
     * 자금조달의 목적(기타자금 (원))
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    fdpp_etc: string;
    /**
     * 사채의 이율(표면이자율 (%))
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    bd_intr_ex: string;
    /**
     * 사채의 이율(만기이자율 (%))
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    bd_intr_sf: string;
    /**
     * 사채만기일
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    bd_mtd: string;
    /**
     * 사채발행방법
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    bdis_mthn: string;
    /**
     * 신주인수권에 관한 사항(행사비율 (%))
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    ex_rt: string;
    /**
     * 신주인수권에 관한 사항(행사가액 (원/주))
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    ex_prc: string;
    /**
     * 신주인수권에 관한 사항(행사가액 결정방법)
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    ex_prc_dmth: string;
    /**
     * 신주인수권에 관한 사항(사채와 인수권의 분리여부)
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    bdwt_div_atn: string;
    /**
     * 신주인수권에 관한 사항(신주대금 납입방법)
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    nstk_pym_mth: string;
    /**
     * 신주인수권에 관한 사항(신주인수권 행사에 따라 발행할 주식(종류))
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    nstk_isstk_knd: string;
    /**
     * 신주인수권에 관한 사항(신주인수권 행사에 따라 발행할 주식(주식수))
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    nstk_isstk_cnt: string;
    /**
     * 신주인수권에 관한 사항(신주인수권 행사에 따라 발행할 주식(주식총수 대비 비율(%)))
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    nstk_isstk_tisstk_vs: string;
    /**
     * 신주인수권에 관한 사항(권리행사기간(시작일))
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    expd_bgd: string;
    /**
     * 신주인수권에 관한 사항(권리행사기간(종료일))
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    expd_edd: string;
    /**
     * 신주인수권에 관한 사항(시가하락에 따른 행사가액 조정(최저 조정가액 (원)))
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    act_mktprcfl_cvprc_lwtrsprc: string;
    /**
     * 신주인수권에 관한 사항(시가하락에 따른 행사가액 조정(최저 조정가액 근거))
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    act_mktprcfl_cvprc_lwtrsprc_bs: string;
    /**
     * 신주인수권에 관한 사항(시가하락에 따른 행사가액 조정(발행당시 행사가액의 70% 미만으로 조정가능한 잔여 발행한도 (원)))
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    rmislmt_lt70p: string;
    /**
     * 합병 관련 사항
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    abmg: string;
    /**
     * 청약일
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    sbd: string;
    /**
     * 납입일
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    pymd: string;
    /**
     * 대표주관회사
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    rpmcmp: string;
    /**
     * 보증기관
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    grint: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    bddd: string;
    /**
     * 사외이사 참석여부(참석 (명))
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사 참석여부(불참 (명))
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(감사위원) 참석여부
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    adt_a_atn: string;
    /**
     * 증권신고서 제출대상 여부
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    rs_sm_atn: string;
    /**
     * 제출을 면제받은 경우 그 사유
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    ex_sm_r: string;
    /**
     * 당해 사채의 해외발행과 연계된 대차거래 내역
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    ovis_ltdtl: string;
    /**
     * 공정거래위원회 신고대상 여부
     * @type {string}
     * @memberof BdwtIsDecsnItem
     */
    ftc_stt_atn: string;
}
/**
 * @type BdwtIsDecsnResponse
 * 
 * @export
 */
export type BdwtIsDecsnResponse = BdwtIsDecsnResponseSuccess | CommonError;
/**
 * 
 * @export
 * @interface BdwtIsDecsnResponseSuccess
 */
export interface BdwtIsDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof BdwtIsDecsnResponseSuccess
     */
    status: BdwtIsDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof BdwtIsDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<BdwtIsDecsnItem>}
     * @memberof BdwtIsDecsnResponseSuccess
     */
    list: Array<BdwtIsDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type BdwtIsDecsnResponseSuccessStatusEnum =
    '000'

const BdwtIsDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isBdwtIsDecsnResponseSuccessStatusEnum(value: any): value is BdwtIsDecsnResponseSuccessStatusEnum {
    return BdwtIsDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as BdwtIsDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface BdwtIsDecsnResponseSuccessAllOf
 */
export interface BdwtIsDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<BdwtIsDecsnItem>}
     * @memberof BdwtIsDecsnResponseSuccessAllOf
     */
    list: Array<BdwtIsDecsnItem>;
}
/**
 * 
 * @export
 * @interface BnkMngtPcbgItem
 */
export interface BnkMngtPcbgItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof BnkMngtPcbgItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof BnkMngtPcbgItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof BnkMngtPcbgItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof BnkMngtPcbgItem
     */
    corp_name: string;
    /**
     * 관리절차개시 결정일자
     * @type {string}
     * @memberof BnkMngtPcbgItem
     */
    mngt_pcbg_dd: string;
    /**
     * 관리기관
     * @type {string}
     * @memberof BnkMngtPcbgItem
     */
    mngt_int: string;
    /**
     * 관리기간
     * @type {string}
     * @memberof BnkMngtPcbgItem
     */
    mngt_pd: string;
    /**
     * 관리사유
     * @type {string}
     * @memberof BnkMngtPcbgItem
     */
    mngt_rs: string;
    /**
     * 확인일자
     * @type {string}
     * @memberof BnkMngtPcbgItem
     */
    cfd: string;
}
/**
 * @type BnkMngtPcbgResponse
 * 
 * @export
 */
export type BnkMngtPcbgResponse = BnkMngtPcbgResponseSuccess | CommonError;
/**
 * 
 * @export
 * @interface BnkMngtPcbgResponseSuccess
 */
export interface BnkMngtPcbgResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof BnkMngtPcbgResponseSuccess
     */
    status: BnkMngtPcbgResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof BnkMngtPcbgResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<BnkMngtPcbgItem>}
     * @memberof BnkMngtPcbgResponseSuccess
     */
    list: Array<BnkMngtPcbgItem>;
}

/**
 * 에러 및 정보 코드
 */
export type BnkMngtPcbgResponseSuccessStatusEnum =
    '000'

const BnkMngtPcbgResponseSuccessStatusEnumValues = [
    '000',
]

export function isBnkMngtPcbgResponseSuccessStatusEnum(value: any): value is BnkMngtPcbgResponseSuccessStatusEnum {
    return BnkMngtPcbgResponseSuccessStatusEnumValues.indexOf(value as unknown as BnkMngtPcbgResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface BnkMngtPcbgResponseSuccessAllOf
 */
export interface BnkMngtPcbgResponseSuccessAllOf {
    /**
     * 
     * @type {Array<BnkMngtPcbgItem>}
     * @memberof BnkMngtPcbgResponseSuccessAllOf
     */
    list: Array<BnkMngtPcbgItem>;
}
/**
 * 
 * @export
 * @interface BnkMngtPcspItem
 */
export interface BnkMngtPcspItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof BnkMngtPcspItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof BnkMngtPcspItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof BnkMngtPcspItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof BnkMngtPcspItem
     */
    corp_name: string;
    /**
     * 관리절차중단 결정일자
     * @type {string}
     * @memberof BnkMngtPcspItem
     */
    mngt_pcsp_dd: string;
    /**
     * 관리기관
     * @type {string}
     * @memberof BnkMngtPcspItem
     */
    mngt_int: string;
    /**
     * 중단사유
     * @type {string}
     * @memberof BnkMngtPcspItem
     */
    sp_rs: string;
    /**
     * 향후대책
     * @type {string}
     * @memberof BnkMngtPcspItem
     */
    ft_ctp: string;
    /**
     * 확인일자
     * @type {string}
     * @memberof BnkMngtPcspItem
     */
    cfd: string;
}
/**
 * @type BnkMngtPcspResponse
 * 
 * @export
 */
export type BnkMngtPcspResponse = BnkMngtPcspResponseSuccess | CommonError;
/**
 * 
 * @export
 * @interface BnkMngtPcspResponseSuccess
 */
export interface BnkMngtPcspResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof BnkMngtPcspResponseSuccess
     */
    status: BnkMngtPcspResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof BnkMngtPcspResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<BnkMngtPcspItem>}
     * @memberof BnkMngtPcspResponseSuccess
     */
    list: Array<BnkMngtPcspItem>;
}

/**
 * 에러 및 정보 코드
 */
export type BnkMngtPcspResponseSuccessStatusEnum =
    '000'

const BnkMngtPcspResponseSuccessStatusEnumValues = [
    '000',
]

export function isBnkMngtPcspResponseSuccessStatusEnum(value: any): value is BnkMngtPcspResponseSuccessStatusEnum {
    return BnkMngtPcspResponseSuccessStatusEnumValues.indexOf(value as unknown as BnkMngtPcspResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface BnkMngtPcspResponseSuccessAllOf
 */
export interface BnkMngtPcspResponseSuccessAllOf {
    /**
     * 
     * @type {Array<BnkMngtPcspItem>}
     * @memberof BnkMngtPcspResponseSuccessAllOf
     */
    list: Array<BnkMngtPcspItem>;
}
/**
 * 
 * @export
 * @interface BsnInhDecsnItem
 */
export interface BsnInhDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof BsnInhDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    corp_name: string;
    /**
     * 양수영업
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    inh_bsn: string;
    /**
     * 양수영업 주요내용
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    inh_bsn_mc: string;
    /**
     * 양수가액(원)
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    inh_prc: string;
    /**
     * 영업전부의 양수 여부
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    absn_inh_atn: string;
    /**
     * 재무내용(원)(자산액(양수대상 영업부문(A)))
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    ast_inh_bsn: string;
    /**
     * 재무내용(원)(자산액(당사전체(B)))
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    ast_cmp_all: string;
    /**
     * 재무내용(원)(자산액(비중(%)(A/B)))
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    ast_rt: string;
    /**
     * 재무내용(원)(매출액(양수대상 영업부문(A)))
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    sl_inh_bsn: string;
    /**
     * 재무내용(원)(매출액(당사전체(B)))
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    sl_cmp_all: string;
    /**
     * 재무내용(원)(매출액(비중(%)(A/B)))
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    sl_rt: string;
    /**
     * 재무내용(원)(부채액(양수대상 영업부문(A)))
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    dbt_inh_bsn: string;
    /**
     * 재무내용(원)(부채액(당사전체(B)))
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    dbt_cmp_all: string;
    /**
     * 재무내용(원)(부채액(비중(%)(A/B)))
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    dbt_rt: string;
    /**
     * 양수목적
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    inh_pp: string;
    /**
     * 양수영향
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    inh_af: string;
    /**
     * 양수예정일자(계약체결일)
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    inh_prd_ctr_cnsd: string;
    /**
     * 양수예정일자(양수기준일)
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    inh_prd_inh_std: string;
    /**
     * 거래상대방(회사명(성명))
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    dlptn_cmpnm: string;
    /**
     * 거래상대방(자본금(원))
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    dlptn_cpt: string;
    /**
     * 거래상대방(주요사업)
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    dlptn_mbsn: string;
    /**
     * 거래상대방(본점소재지(주소))
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    dlptn_hoadd: string;
    /**
     * 거래상대방(회사와의 관계)
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    dlptn_rl_cmpn: string;
    /**
     * 양수대금지급
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    inh_pym: string;
    /**
     * 외부평가에 관한 사항(외부평가 여부)
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    exevl_atn: string;
    /**
     * 외부평가에 관한 사항(근거 및 사유)
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    exevl_bs_rs: string;
    /**
     * 외부평가에 관한 사항(외부평가기관의 명칭)
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    exevl_intn: string;
    /**
     * 외부평가에 관한 사항(외부평가 기간)
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    exevl_pd: string;
    /**
     * 외부평가에 관한 사항(외부평가 의견)
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    exevl_op: string;
    /**
     * 주주총회 특별결의 여부
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    gmtsck_spd_atn: string;
    /**
     * 주주총회 예정일자
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    gmtsck_prd: string;
    /**
     * 주식매수청구권에 관한 사항(매수예정가격)
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    aprskh_plnprc: string;
    /**
     * 주식매수청구권에 관한 사항(지급예정시기, 지급방법)
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    aprskh_pym_plpd_mth: string;
    /**
     * 주식매수청구권에 관한 사항(주식매수청구권 제한 관련 내용)
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    aprskh_lmt: string;
    /**
     * 주식매수청구권에 관한 사항(계약에 미치는 효력)
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    aprskh_ctref: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    bddd: string;
    /**
     * 사외이사참석여부(참석(명))
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사참석여부(불참(명))
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(사외이사가 아닌 감사위원) 참석여부
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    adt_a_atn: string;
    /**
     * 우회상장 해당 여부
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    bdlst_atn: string;
    /**
     * 향후 6월이내 제3자배정 증자 등 계획
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    n6m_tpai_plann: string;
    /**
     * 타법인의 우회상장 요건 충족여부
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    otcpr_bdlst_sf_atn: string;
    /**
     * 공정거래위원회 신고대상 여부
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    ftc_stt_atn: string;
    /**
     * 풋옵션 등 계약 체결여부
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    popt_ctr_atn: string;
    /**
     * 계약내용
     * @type {string}
     * @memberof BsnInhDecsnItem
     */
    popt_ctr_cn: string;
}
/**
 * @type BsnInhDecsnResponse
 * 
 * @export
 */
export type BsnInhDecsnResponse = BsnInhDecsnResponseSuccess | CommonError;
/**
 * 
 * @export
 * @interface BsnInhDecsnResponseSuccess
 */
export interface BsnInhDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof BsnInhDecsnResponseSuccess
     */
    status: BsnInhDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof BsnInhDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<BsnInhDecsnItem>}
     * @memberof BsnInhDecsnResponseSuccess
     */
    list: Array<BsnInhDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type BsnInhDecsnResponseSuccessStatusEnum =
    '000'

const BsnInhDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isBsnInhDecsnResponseSuccessStatusEnum(value: any): value is BsnInhDecsnResponseSuccessStatusEnum {
    return BsnInhDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as BsnInhDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface BsnInhDecsnResponseSuccessAllOf
 */
export interface BsnInhDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<BsnInhDecsnItem>}
     * @memberof BsnInhDecsnResponseSuccessAllOf
     */
    list: Array<BsnInhDecsnItem>;
}
/**
 * 
 * @export
 * @interface BsnSpItem
 */
export interface BsnSpItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof BsnSpItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof BsnSpItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof BsnSpItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof BsnSpItem
     */
    corp_name: string;
    /**
     * 영업정지 분야
     * @type {string}
     * @memberof BsnSpItem
     */
    bsnsp_rm: string;
    /**
     * 영업정지 내역(영업정지금액)
     * @type {string}
     * @memberof BsnSpItem
     */
    bsnsp_amt: string;
    /**
     * 영업정지 내역(최근매출총액)
     * @type {string}
     * @memberof BsnSpItem
     */
    rsl: string;
    /**
     * 영업정지 내역(매출액 대비)
     * @type {string}
     * @memberof BsnSpItem
     */
    sl_vs: string;
    /**
     * 영업정지 내역(대규모법인여부)
     * @type {string}
     * @memberof BsnSpItem
     */
    ls_atn: string;
    /**
     * 영업정지 내역(거래소 의무공시 해당 여부)
     * @type {string}
     * @memberof BsnSpItem
     */
    krx_stt_atn: string;
    /**
     * 영업정지 내용
     * @type {string}
     * @memberof BsnSpItem
     */
    bsnsp_cn: string;
    /**
     * 영업정지사유
     * @type {string}
     * @memberof BsnSpItem
     */
    bsnsp_rs: string;
    /**
     * 향후대책
     * @type {string}
     * @memberof BsnSpItem
     */
    ft_ctp: string;
    /**
     * 영업정지영향
     * @type {string}
     * @memberof BsnSpItem
     */
    bsnsp_af: string;
    /**
     * 영업정지일자
     * @type {string}
     * @memberof BsnSpItem
     */
    bsnspd: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof BsnSpItem
     */
    bddd: string;
    /**
     * 사외이사 참석여부(참석)
     * @type {string}
     * @memberof BsnSpItem
     */
    od_a_at_t: string;
    /**
     * 사외이사 참석여부(불참)
     * @type {string}
     * @memberof BsnSpItem
     */
    od_a_at_b: string;
    /**
     * 감사(감사위원) 참석여부
     * @type {string}
     * @memberof BsnSpItem
     */
    adt_a_atn: string;
}
/**
 * @type BsnSpResponse
 * 
 * @export
 */
export type BsnSpResponse = BsnSpResponseSuccess | CommonError;
/**
 * 
 * @export
 * @interface BsnSpResponseSuccess
 */
export interface BsnSpResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof BsnSpResponseSuccess
     */
    status: BsnSpResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof BsnSpResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<BsnSpItem>}
     * @memberof BsnSpResponseSuccess
     */
    list: Array<BsnSpItem>;
}

/**
 * 에러 및 정보 코드
 */
export type BsnSpResponseSuccessStatusEnum =
    '000'

const BsnSpResponseSuccessStatusEnumValues = [
    '000',
]

export function isBsnSpResponseSuccessStatusEnum(value: any): value is BsnSpResponseSuccessStatusEnum {
    return BsnSpResponseSuccessStatusEnumValues.indexOf(value as unknown as BsnSpResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface BsnSpResponseSuccessAllOf
 */
export interface BsnSpResponseSuccessAllOf {
    /**
     * 
     * @type {Array<BsnSpItem>}
     * @memberof BsnSpResponseSuccessAllOf
     */
    list: Array<BsnSpItem>;
}
/**
 * 
 * @export
 * @interface BsnTrfDecsnItem
 */
export interface BsnTrfDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof BsnTrfDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    corp_name: string;
    /**
     * 양도영업
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    trf_bsn: string;
    /**
     * 양도영업 주요내용
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    trf_bsn_mc: string;
    /**
     * 양도가액(원)
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    trf_prc: string;
    /**
     * 재무내용(원)(자산액(양도대상 영업부문(A)))
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    ast_trf_bsn: string;
    /**
     * 재무내용(원)(자산액(당사전체(B)))
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    ast_cmp_all: string;
    /**
     * 재무내용(원)(자산액(비중(%)(A/B)))
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    ast_rt: string;
    /**
     * 재무내용(원)(매출액(양도대상 영업부문(A)))
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    sl_trf_bsn: string;
    /**
     * 재무내용(원)(매출액(당사전체(B)))
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    sl_cmp_all: string;
    /**
     * 재무내용(원)(매출액(비중(%)(A/B)))
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    sl_rt: string;
    /**
     * 양도목적
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    trf_pp: string;
    /**
     * 양도영향
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    trf_af: string;
    /**
     * 양도예정일자(계약체결일)
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    trf_prd_ctr_cnsd: string;
    /**
     * 양도예정일자(양도기준일)
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    trf_prd_trf_std: string;
    /**
     * 거래상대방(회사명(성명))
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    dlptn_cmpnm: string;
    /**
     * 거래상대방(자본금(원))
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    dlptn_cpt: string;
    /**
     * 거래상대방(주요사업)
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    dlptn_mbsn: string;
    /**
     * 거래상대방(본점소재지(주소))
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    dlptn_hoadd: string;
    /**
     * 거래상대방(회사와의 관계)
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    dlptn_rl_cmpn: string;
    /**
     * 양도대금지급
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    trf_pym: string;
    /**
     * 외부평가에 관한 사항(외부평가 여부)
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    exevl_atn: string;
    /**
     * 외부평가에 관한 사항(근거 및 사유)
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    exevl_bs_rs: string;
    /**
     * 외부평가에 관한 사항(외부평가기관의 명칭)
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    exevl_intn: string;
    /**
     * 외부평가에 관한 사항(외부평가 기간)
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    exevl_pd: string;
    /**
     * 외부평가에 관한 사항(외부평가 의견)
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    exevl_op: string;
    /**
     * 주주총회 특별결의 여부
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    gmtsck_spd_atn: string;
    /**
     * 주주총회 예정일자
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    gmtsck_prd: string;
    /**
     * 주식매수청구권에 관한 사항(매수예정가격)
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    aprskh_plnprc: string;
    /**
     * 주식매수청구권에 관한 사항(지급예정시기, 지급방법)
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    aprskh_pym_plpd_mth: string;
    /**
     * 주식매수청구권에 관한 사항(주식매수청구권 제한 관련 내용)
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    aprskh_lmt: string;
    /**
     * 주식매수청구권에 관한 사항(계약에 미치는 효력)
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    aprskh_ctref: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    bddd: string;
    /**
     * 사외이사참석여부(참석(명))
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사참석여부(불참(명))
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(사외이사가 아닌 감사위원) 참석여부
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    adt_a_atn: string;
    /**
     * 공정거래위원회 신고대상 여부
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    ftc_stt_atn: string;
    /**
     * 풋옵션 등 계약 체결여부
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    popt_ctr_atn: string;
    /**
     * 계약내용
     * @type {string}
     * @memberof BsnTrfDecsnItem
     */
    popt_ctr_cn: string;
}
/**
 * @type BsnTrfDecsnResponse
 * 
 * @export
 */
export type BsnTrfDecsnResponse = BsnTrfDecsnResponseSuccess | CommonError;
/**
 * 
 * @export
 * @interface BsnTrfDecsnResponseSuccess
 */
export interface BsnTrfDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof BsnTrfDecsnResponseSuccess
     */
    status: BsnTrfDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof BsnTrfDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<BsnTrfDecsnItem>}
     * @memberof BsnTrfDecsnResponseSuccess
     */
    list: Array<BsnTrfDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type BsnTrfDecsnResponseSuccessStatusEnum =
    '000'

const BsnTrfDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isBsnTrfDecsnResponseSuccessStatusEnum(value: any): value is BsnTrfDecsnResponseSuccessStatusEnum {
    return BsnTrfDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as BsnTrfDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface BsnTrfDecsnResponseSuccessAllOf
 */
export interface BsnTrfDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<BsnTrfDecsnItem>}
     * @memberof BsnTrfDecsnResponseSuccessAllOf
     */
    list: Array<BsnTrfDecsnItem>;
}
/**
 * 
 * @export
 * @interface CmpDvDecsnItem
 */
export interface CmpDvDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof CmpDvDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    corp_name: string;
    /**
     * 분할방법
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    dv_mth: string;
    /**
     * 분할의 중요영향 및 효과
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    dv_impef: string;
    /**
     * 분할비율
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    dv_rt: string;
    /**
     * 분할로 이전할 사업 및 재산의 내용
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    dv_trfbsnprt_cn: string;
    /**
     * 분할 후 존속회사(회사명)
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    atdv_excmp_cmpnm: string;
    /**
     * 분할 후 존속회사(분할후 재무내용(원)(자산총계))
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    atdvfdtl_tast: string;
    /**
     * 분할 후 존속회사(분할후 재무내용(원)(부채총계))
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    atdvfdtl_tdbt: string;
    /**
     * 분할 후 존속회사(분할후 재무내용(원)(자본총계))
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    atdvfdtl_teqt: string;
    /**
     * 분할 후 존속회사(분할후 재무내용(원)(자본금))
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    atdvfdtl_cpt: string;
    /**
     * 분할 후 존속회사(분할후 재무내용(원)(현재기준))
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    atdvfdtl_std: string;
    /**
     * 분할 후 존속회사(존속사업부문 최근 사업연도매출액(원))
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    atdv_excmp_exbsn_rsl: string;
    /**
     * 분할 후 존속회사(주요사업)
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    atdv_excmp_mbsn: string;
    /**
     * 분할 후 존속회사(분할 후 상장유지 여부)
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    atdv_excmp_atdv_lstmn_atn: string;
    /**
     * 분할설립회사(회사명)
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    dvfcmp_cmpnm: string;
    /**
     * 분할설립회사(설립시 재무내용(원)(자산총계))
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    ffdtl_tast: string;
    /**
     * 분할설립회사(설립시 재무내용(원)(부채총계))
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    ffdtl_tdbt: string;
    /**
     * 분할설립회사(설립시 재무내용(원)(자본총계))
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    ffdtl_teqt: string;
    /**
     * 분할설립회사(설립시 재무내용(원)(자본금))
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    ffdtl_cpt: string;
    /**
     * 분할설립회사(설립시 재무내용(원)(현재기준))
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    ffdtl_std: string;
    /**
     * 분할설립회사(신설사업부문 최근 사업연도 매출액(원))
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    dvfcmp_nbsn_rsl: string;
    /**
     * 분할설립회사(주요사업)
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    dvfcmp_mbsn: string;
    /**
     * 분할설립회사(재상장신청 여부)
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    dvfcmp_rlst_atn: string;
    /**
     * 감자에 관한 사항(감자비율(%))
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    abcr_crrt: string;
    /**
     * 감자에 관한 사항(구주권 제출기간(시작일))
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    abcr_osprpd_bgd: string;
    /**
     * 감자에 관한 사항(구주권 제출기간(종료일))
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    abcr_osprpd_edd: string;
    /**
     * 감자에 관한 사항(매매거래정지 예정기간(시작일))
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    abcr_trspprpd_bgd: string;
    /**
     * 감자에 관한 사항(매매거래정지 예정기간(종료일))
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    abcr_trspprpd_edd: string;
    /**
     * 감자에 관한 사항(신주배정조건)
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    abcr_nstkascnd: string;
    /**
     * 감자에 관한 사항(주주 주식수 비례여부 및 사유)
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    abcr_shstkcnt_rt_at_rs: string;
    /**
     * 감자에 관한 사항(신주배정기준일)
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    abcr_nstkasstd: string;
    /**
     * 감자에 관한 사항(신주권교부예정일)
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    abcr_nstkdlprd: string;
    /**
     * 감자에 관한 사항(신주의 상장예정일)
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    abcr_nstklstprd: string;
    /**
     * 주주총회 예정일
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    gmtsck_prd: string;
    /**
     * 채권자 이의제출기간(시작일)
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    cdobprpd_bgd: string;
    /**
     * 채권자 이의제출기간(종료일)
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    cdobprpd_edd: string;
    /**
     * 분할기일
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    dvdt: string;
    /**
     * 분할등기 예정일
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    dvrgsprd: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    bddd: string;
    /**
     * 사외이사참석여부(참석(명))
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사참석여부(불참(명))
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(사외이사가 아닌 감사위원) 참석여부
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    adt_a_atn: string;
    /**
     * 풋옵션 등 계약 체결여부
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    popt_ctr_atn: string;
    /**
     * 계약내용
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    popt_ctr_cn: string;
    /**
     * 증권신고서 제출대상 여부
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    rs_sm_atn: string;
    /**
     * 제출을 면제받은 경우 그 사유
     * @type {string}
     * @memberof CmpDvDecsnItem
     */
    ex_sm_r: string;
}
/**
 * @type CmpDvDecsnResponse
 * 
 * @export
 */
export type CmpDvDecsnResponse = CmpDvDecsnResponseSuccess | CommonError;
/**
 * 
 * @export
 * @interface CmpDvDecsnResponseSuccess
 */
export interface CmpDvDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof CmpDvDecsnResponseSuccess
     */
    status: CmpDvDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof CmpDvDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<CmpDvDecsnItem>}
     * @memberof CmpDvDecsnResponseSuccess
     */
    list: Array<CmpDvDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type CmpDvDecsnResponseSuccessStatusEnum =
    '000'

const CmpDvDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isCmpDvDecsnResponseSuccessStatusEnum(value: any): value is CmpDvDecsnResponseSuccessStatusEnum {
    return CmpDvDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as CmpDvDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface CmpDvDecsnResponseSuccessAllOf
 */
export interface CmpDvDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<CmpDvDecsnItem>}
     * @memberof CmpDvDecsnResponseSuccessAllOf
     */
    list: Array<CmpDvDecsnItem>;
}
/**
 * 
 * @export
 * @interface CmpDvmgDecsnItem
 */
export interface CmpDvmgDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof CmpDvmgDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    corp_name: string;
    /**
     * 분할합병 방법
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvmg_mth: string;
    /**
     * 분할합병의 중요영향 및 효과
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvmg_impef: string;
    /**
     * 분할에 관한 사항(분할로 이전할 사업 및 재산의 내용)
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dv_trfbsnprt_cn: string;
    /**
     * 분할에 관한 사항(분할 후 존속회사(회사명))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    atdv_excmp_cmpnm: string;
    /**
     * 분할에 관한 사항(분할 후 존속회사(분할후 재무내용(원)(자산총계)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    atdvfdtl_tast: string;
    /**
     * 분할에 관한 사항(분할 후 존속회사(분할후 재무내용(원)(부채총계)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    atdvfdtl_tdbt: string;
    /**
     * 분할에 관한 사항(분할 후 존속회사(분할후 재무내용(원)(자본총계)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    atdvfdtl_teqt: string;
    /**
     * 분할에 관한 사항(분할 후 존속회사(분할후 재무내용(원)(자본금)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    atdvfdtl_cpt: string;
    /**
     * 분할에 관한 사항(분할 후 존속회사(분할후 재무내용(원)(현재기준)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    atdvfdtl_std: string;
    /**
     * 분할에 관한 사항(분할 후 존속회사(존속사업부문 최근 사업연도매출액(원)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    atdv_excmp_exbsn_rsl: string;
    /**
     * 분할에 관한 사항(분할 후 존속회사(주요사업))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    atdv_excmp_mbsn: string;
    /**
     * 분할에 관한 사항(분할 후 존속회사(분할 후 상장유지 여부))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    atdv_excmp_atdv_lstmn_atn: string;
    /**
     * 분할에 관한 사항(분할설립 회사(회사명))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvfcmp_cmpnm: string;
    /**
     * 분할에 관한 사항(분할설립 회사(설립시 재무내용(원)(자산총계)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    ffdtl_tast: string;
    /**
     * 분할에 관한 사항(분할설립 회사(설립시 재무내용(원)(부채총계)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    ffdtl_tdbt: string;
    /**
     * 분할에 관한 사항(분할설립 회사(설립시 재무내용(원)(자본총계)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    ffdtl_teqt: string;
    /**
     * 분할에 관한 사항(분할설립 회사(설립시 재무내용(원)(자본금)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    ffdtl_cpt: string;
    /**
     * 분할에 관한 사항(분할설립 회사(설립시 재무내용(원)(현재기준)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    ffdtl_std: string;
    /**
     * 분할에 관한 사항(분할설립 회사(신설사업부문 최근 사업연도 매출액(원)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvfcmp_nbsn_rsl: string;
    /**
     * 분할에 관한 사항(분할설립 회사(주요사업))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvfcmp_mbsn: string;
    /**
     * 분할에 관한 사항(분할설립 회사(분할후 상장유지여부))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvfcmp_atdv_lstmn_at: string;
    /**
     * 분할에 관한 사항(감자에 관한 사항(감자비율(%)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    abcr_crrt: string;
    /**
     * 분할에 관한 사항(감자에 관한 사항(구주권 제출기간(시작일)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    abcr_osprpd_bgd: string;
    /**
     * 분할에 관한 사항(감자에 관한 사항(구주권 제출기간(종료일)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    abcr_osprpd_edd: string;
    /**
     * 분할에 관한 사항(감자에 관한 사항(매매거래정지 예정기간(시작일)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    abcr_trspprpd_bgd: string;
    /**
     * 분할에 관한 사항(감자에 관한 사항(매매거래정지 예정기간(종료일)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    abcr_trspprpd_edd: string;
    /**
     * 분할에 관한 사항(감자에 관한 사항(신주배정조건))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    abcr_nstkascnd: string;
    /**
     * 분할에 관한 사항(감자에 관한 사항(주주 주식수 비례여부 및 사유))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    abcr_shstkcnt_rt_at_rs: string;
    /**
     * 분할에 관한 사항(감자에 관한 사항(신주배정기준일))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    abcr_nstkasstd: string;
    /**
     * 분할에 관한 사항(감자에 관한 사항(신주권교부예정일))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    abcr_nstkdlprd: string;
    /**
     * 분할에 관한 사항(감자에 관한 사항(신주의 상장예정일))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    abcr_nstklstprd: string;
    /**
     * 합병에 관한 사항(합병형태)
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    mg_stn: string;
    /**
     * 합병에 관한 사항(합병상대 회사(회사명))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    mgptncmp_cmpnm: string;
    /**
     * 합병에 관한 사항(합병상대 회사(주요사업))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    mgptncmp_mbsn: string;
    /**
     * 합병에 관한 사항(합병상대 회사(회사와의 관계))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    mgptncmp_rl_cmpn: string;
    /**
     * 합병에 관한 사항(합병상대 회사(최근 사업연도 재무내용(원)(자산총계)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    rbsnfdtl_tast: string;
    /**
     * 합병에 관한 사항(합병상대 회사(최근 사업연도 재무내용(원)(부채총계)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    rbsnfdtl_tdbt: string;
    /**
     * 합병에 관한 사항(합병상대 회사(최근 사업연도 재무내용(원)(자본총계)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    rbsnfdtl_teqt: string;
    /**
     * 합병에 관한 사항(합병상대 회사(최근 사업연도 재무내용(원)(자본금)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    rbsnfdtl_cpt: string;
    /**
     * 합병에 관한 사항(합병상대 회사(최근 사업연도 재무내용(원)(매출액)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    rbsnfdtl_sl: string;
    /**
     * 합병에 관한 사항(합병상대 회사(최근 사업연도 재무내용(원)(당기순이익)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    rbsnfdtl_nic: string;
    /**
     * 합병에 관한 사항(합병상대 회사(외부감사 여부(기관명)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    eadtat_intn: string;
    /**
     * 합병에 관한 사항(합병상대 회사(외부감사 여부(감사의견)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    eadtat_op: string;
    /**
     * 합병에 관한 사항(분할합병신주의 종류와 수(주)(보통주식))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvmgnstk_ostk_cnt: string;
    /**
     * 합병에 관한 사항(분할합병신주의 종류와 수(주)(종류주식))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvmgnstk_cstk_cnt: string;
    /**
     * 합병에 관한 사항(합병신설 회사(회사명))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    nmgcmp_cmpnm: string;
    /**
     * 합병에 관한 사항(합병신설 회사(자본금(원)))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    nmgcmp_cpt: string;
    /**
     * 합병에 관한 사항(합병신설 회사(주요사업))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    nmgcmp_mbsn: string;
    /**
     * 합병에 관한 사항(합병신설 회사(재상장신청 여부))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    nmgcmp_rlst_atn: string;
    /**
     * 분할합병비율
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvmg_rt: string;
    /**
     * 분할합병비율 산출근거
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvmg_rt_bs: string;
    /**
     * 외부평가에 관한 사항(외부평가 여부)
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    exevl_atn: string;
    /**
     * 외부평가에 관한 사항(근거 및 사유)
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    exevl_bs_rs: string;
    /**
     * 외부평가에 관한 사항(외부평가기관의 명칭)
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    exevl_intn: string;
    /**
     * 외부평가에 관한 사항(외부평가 기간)
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    exevl_pd: string;
    /**
     * 외부평가에 관한 사항(외부평가 의견)
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    exevl_op: string;
    /**
     * 분할합병일정(분할합병계약일)
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvmgsc_dvmgctrd: string;
    /**
     * 분할합병일정(주주확정기준일)
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvmgsc_shddstd: string;
    /**
     * 분할합병일정(주주명부 폐쇄기간(시작일))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvmgsc_shclspd_bgd: string;
    /**
     * 분할합병일정(주주명부 폐쇄기간(종료일))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvmgsc_shclspd_edd: string;
    /**
     * 분할합병일정(분할합병반대의사통지 접수기간(시작일))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvmgsc_dvmgop_rcpd_bgd: string;
    /**
     * 분할합병일정(분할합병반대의사통지 접수기간(종료일))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvmgsc_dvmgop_rcpd_edd: string;
    /**
     * 분할합병일정(주주총회예정일자)
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvmgsc_gmtsck_prd: string;
    /**
     * 분할합병일정(주식매수청구권 행사기간(시작일))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvmgsc_aprskh_expd_bgd: string;
    /**
     * 분할합병일정(주식매수청구권 행사기간(종료일))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvmgsc_aprskh_expd_edd: string;
    /**
     * 분할합병일정(채권자 이의 제출기간(시작일))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvmgsc_cdobprpd_bgd: string;
    /**
     * 분할합병일정(채권자 이의 제출기간(종료일))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvmgsc_cdobprpd_edd: string;
    /**
     * 분할합병일정(분할합병기일)
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvmgsc_dvmgdt: string;
    /**
     * 분할합병일정(종료보고 총회일)
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvmgsc_ergmd: string;
    /**
     * 분할합병일정(분할합병등기예정일)
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    dvmgsc_dvmgrgsprd: string;
    /**
     * 우회상장 해당 여부
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    bdlst_atn: string;
    /**
     * 타법인의 우회상장 요건 충족여부
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    otcpr_bdlst_sf_atn: string;
    /**
     * 주식매수청구권에 관한 사항(행사요건)
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    aprskh_exrq: string;
    /**
     * 주식매수청구권에 관한 사항(매수예정가격)
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    aprskh_plnprc: string;
    /**
     * 주식매수청구권에 관한 사항(행사절차, 방법, 기간, 장소)
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    aprskh_ex_pc_mth_pd_pl: string;
    /**
     * 주식매수청구권에 관한 사항(지급예정시기, 지급방법)
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    aprskh_pym_plpd_mth: string;
    /**
     * 주식매수청구권에 관한 사항(주식매수청구권 제한 관련 내용)
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    aprskh_lmt: string;
    /**
     * 주식매수청구권에 관한 사항(계약에 미치는 효력)
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    aprskh_ctref: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    bddd: string;
    /**
     * 사외이사참석여부(참석(명))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사참석여부(불참(명))
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(사외이사가 아닌 감사위원) 참석여부
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    adt_a_atn: string;
    /**
     * 풋옵션 등 계약 체결여부
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    popt_ctr_atn: string;
    /**
     * 계약내용
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    popt_ctr_cn: string;
    /**
     * 증권신고서 제출대상 여부
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    rs_sm_atn: string;
    /**
     * 제출을 면제받은 경우 그 사유
     * @type {string}
     * @memberof CmpDvmgDecsnItem
     */
    ex_sm_r: string;
}
/**
 * @type CmpDvmgDecsnResponse
 * 
 * @export
 */
export type CmpDvmgDecsnResponse = CmpDvmgDecsnResponseSuccess | CommonError;
/**
 * 
 * @export
 * @interface CmpDvmgDecsnResponseSuccess
 */
export interface CmpDvmgDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof CmpDvmgDecsnResponseSuccess
     */
    status: CmpDvmgDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof CmpDvmgDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<CmpDvmgDecsnItem>}
     * @memberof CmpDvmgDecsnResponseSuccess
     */
    list: Array<CmpDvmgDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type CmpDvmgDecsnResponseSuccessStatusEnum =
    '000'

const CmpDvmgDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isCmpDvmgDecsnResponseSuccessStatusEnum(value: any): value is CmpDvmgDecsnResponseSuccessStatusEnum {
    return CmpDvmgDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as CmpDvmgDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface CmpDvmgDecsnResponseSuccessAllOf
 */
export interface CmpDvmgDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<CmpDvmgDecsnItem>}
     * @memberof CmpDvmgDecsnResponseSuccessAllOf
     */
    list: Array<CmpDvmgDecsnItem>;
}
/**
 * 
 * @export
 * @interface CmpMgDecsnItem
 */
export interface CmpMgDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof CmpMgDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    corp_name: string;
    /**
     * 합병방법
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mg_mth: string;
    /**
     * 합병형태
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mg_stn: string;
    /**
     * 합병목적
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mg_pp: string;
    /**
     * 합병비율
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mg_rt: string;
    /**
     * 합병비율 산출근거
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mg_rt_bs: string;
    /**
     * 외부평가에 관한 사항(외부평가 여부)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    exevl_atn: string;
    /**
     * 외부평가에 관한 사항(근거 및 사유)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    exevl_bs_rs: string;
    /**
     * 외부평가에 관한 사항(외부평가기관의 명칭)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    exevl_intn: string;
    /**
     * 외부평가에 관한 사항(외부평가 기간)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    exevl_pd: string;
    /**
     * 외부평가에 관한 사항(외부평가 의견)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    exevl_op: string;
    /**
     * 합병신주의 종류와 수(주)(보통주식)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgnstk_ostk_cnt: string;
    /**
     * 합병신주의 종류와 수(주)(종류주식)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgnstk_cstk_cnt: string;
    /**
     * 합병상대회사(회사명)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgptncmp_cmpnm: string;
    /**
     * 합병상대회사(주요사업)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgptncmp_mbsn: string;
    /**
     * 합병상대회사(회사와의 관계)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgptncmp_rl_cmpn: string;
    /**
     * 합병상대회사(최근 사업연도 재무내용(원)(자산총계))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    rbsnfdtl_tast: string;
    /**
     * 합병상대회사(최근 사업연도 재무내용(원)(부채총계))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    rbsnfdtl_tdbt: string;
    /**
     * 합병상대회사(최근 사업연도 재무내용(원)(자본총계))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    rbsnfdtl_teqt: string;
    /**
     * 합병상대회사(최근 사업연도 재무내용(원)(자본금))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    rbsnfdtl_cpt: string;
    /**
     * 합병상대회사(최근 사업연도 재무내용(원)(매출액))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    rbsnfdtl_sl: string;
    /**
     * 합병상대회사(최근 사업연도 재무내용(원)(당기순이익))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    rbsnfdtl_nic: string;
    /**
     * 합병상대회사(외부감사 여부(기관명))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    eadtat_intn: string;
    /**
     * 합병상대회사(외부감사 여부(감사의견))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    eadtat_op: string;
    /**
     * 신설합병회사(회사명)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    nmgcmp_cmpnm: string;
    /**
     * 신설합병회사(설립시 재무내용(원)(자산총계))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    ffdtl_tast: string;
    /**
     * 신설합병회사(설립시 재무내용(원)(부채총계))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    ffdtl_tdbt: string;
    /**
     * 신설합병회사(설립시 재무내용(원)(자본총계))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    ffdtl_teqt: string;
    /**
     * 신설합병회사(설립시 재무내용(원)(자본금))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    ffdtl_cpt: string;
    /**
     * 신설합병회사(설립시 재무내용(원)(현재기준))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    ffdtl_std: string;
    /**
     * 신설합병회사(신설사업부문 최근 사업연도 매출액(원))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    nmgcmp_nbsn_rsl: string;
    /**
     * 신설합병회사(주요사업)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    nmgcmp_mbsn: string;
    /**
     * 신설합병회사(재상장신청 여부)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    nmgcmp_rlst_atn: string;
    /**
     * 합병일정(합병계약일)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgsc_mgctrd: string;
    /**
     * 합병일정(주주확정기준일)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgsc_shddstd: string;
    /**
     * 합병일정(주주명부 폐쇄기간(시작일))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgsc_shclspd_bgd: string;
    /**
     * 합병일정(주주명부 폐쇄기간(종료일))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgsc_shclspd_edd: string;
    /**
     * 합병일정(합병반대의사통지 접수기간(시작일))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgsc_mgop_rcpd_bgd: string;
    /**
     * 합병일정(합병반대의사통지 접수기간(종료일))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgsc_mgop_rcpd_edd: string;
    /**
     * 합병일정(주주총회예정일자)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgsc_gmtsck_prd: string;
    /**
     * 합병일정(주식매수청구권 행사기간(시작일))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgsc_aprskh_expd_bgd: string;
    /**
     * 합병일정(주식매수청구권 행사기간(종료일))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgsc_aprskh_expd_edd: string;
    /**
     * 합병일정(구주권 제출기간(시작일))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgsc_osprpd_bgd: string;
    /**
     * 합병일정(구주권 제출기간(종료일))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgsc_osprpd_edd: string;
    /**
     * 합병일정(매매거래 정지예정기간(시작일))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgsc_trspprpd_bgd: string;
    /**
     * 합병일정(매매거래 정지예정기간(종료일))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgsc_trspprpd_edd: string;
    /**
     * 합병일정(채권자이의 제출기간(시작일))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgsc_cdobprpd_bgd: string;
    /**
     * 합병일정(채권자이의 제출기간(종료일))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgsc_cdobprpd_edd: string;
    /**
     * 합병일정(합병기일)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgsc_mgdt: string;
    /**
     * 합병일정(종료보고 총회일)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgsc_ergmd: string;
    /**
     * 합병일정(합병등기예정일자)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgsc_mgrgsprd: string;
    /**
     * 합병일정(신주권교부예정일)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgsc_nstkdlprd: string;
    /**
     * 합병일정(신주의 상장예정일)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    mgsc_nstklstprd: string;
    /**
     * 우회상장 해당 여부
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    bdlst_atn: string;
    /**
     * 타법인의 우회상장 요건 충족여부
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    otcpr_bdlst_sf_atn: string;
    /**
     * 주식매수청구권에 관한 사항(매수예정가격)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    aprskh_plnprc: string;
    /**
     * 주식매수청구권에 관한 사항(지급예정시기, 지급방법)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    aprskh_pym_plpd_mth: string;
    /**
     * 주식매수청구권에 관한 사항(계약에 미치는 효력)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    aprskh_ctref: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    bddd: string;
    /**
     * 사외이사참석여부(참석(명))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사참석여부(불참(명))
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(사외이사가 아닌 감사위원) 참석여부
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    adt_a_atn: string;
    /**
     * 풋옵션 등 계약 체결여부
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    popt_ctr_atn: string;
    /**
     * 계약내용
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    popt_ctr_cn: string;
    /**
     * 증권신고서 제출대상 여부
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    rs_sm_atn: string;
    /**
     * 제출을 면제받은 경우 그 사유
     * @type {string}
     * @memberof CmpMgDecsnItem
     */
    ex_sm_r: string;
}
/**
 * @type CmpMgDecsnResponse
 * 
 * @export
 */
export type CmpMgDecsnResponse = CmpMgDecsnResponseSuccess | CommonError;
/**
 * 
 * @export
 * @interface CmpMgDecsnResponseSuccess
 */
export interface CmpMgDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof CmpMgDecsnResponseSuccess
     */
    status: CmpMgDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof CmpMgDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<CmpMgDecsnItem>}
     * @memberof CmpMgDecsnResponseSuccess
     */
    list: Array<CmpMgDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type CmpMgDecsnResponseSuccessStatusEnum =
    '000'

const CmpMgDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isCmpMgDecsnResponseSuccessStatusEnum(value: any): value is CmpMgDecsnResponseSuccessStatusEnum {
    return CmpMgDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as CmpMgDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface CmpMgDecsnResponseSuccessAllOf
 */
export interface CmpMgDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<CmpMgDecsnItem>}
     * @memberof CmpMgDecsnResponseSuccessAllOf
     */
    list: Array<CmpMgDecsnItem>;
}
/**
 * 
 * @export
 * @interface CndlCaplScritsNrdmpBlceItem
 */
export interface CndlCaplScritsNrdmpBlceItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof CndlCaplScritsNrdmpBlceItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof CndlCaplScritsNrdmpBlceItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof CndlCaplScritsNrdmpBlceItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof CndlCaplScritsNrdmpBlceItem
     */
    corp_name: string;
    /**
     * 잔여만기
     * @type {string}
     * @memberof CndlCaplScritsNrdmpBlceItem
     */
    remndr_exprtn1: string;
    /**
     * 잔여만기
     * @type {string}
     * @memberof CndlCaplScritsNrdmpBlceItem
     */
    remndr_exprtn2: string;
    /**
     * 1년 이하
     * @type {string}
     * @memberof CndlCaplScritsNrdmpBlceItem
     */
    yy1_below: string;
    /**
     * 1년 초과 2년 이하
     * @type {string}
     * @memberof CndlCaplScritsNrdmpBlceItem
     */
    yy1_excess_yy2_below: string;
    /**
     * 2년 초과 3년 이하
     * @type {string}
     * @memberof CndlCaplScritsNrdmpBlceItem
     */
    yy2_excess_yy3_below: string;
    /**
     * 3년 초과 4년 이하
     * @type {string}
     * @memberof CndlCaplScritsNrdmpBlceItem
     */
    yy3_excess_yy4_below: string;
    /**
     * 4년 초과 5년 이하
     * @type {string}
     * @memberof CndlCaplScritsNrdmpBlceItem
     */
    yy4_excess_yy5_below: string;
    /**
     * 5년 초과 10년 이하
     * @type {string}
     * @memberof CndlCaplScritsNrdmpBlceItem
     */
    yy5_excess_yy10_below: string;
    /**
     * 10년 초과 20년 이하
     * @type {string}
     * @memberof CndlCaplScritsNrdmpBlceItem
     */
    yy10_excess_yy20_below: string;
    /**
     * 20년 초과 30년 이하
     * @type {string}
     * @memberof CndlCaplScritsNrdmpBlceItem
     */
    yy20_excess_yy30_below: string;
    /**
     * 30년 초과
     * @type {string}
     * @memberof CndlCaplScritsNrdmpBlceItem
     */
    yy30_excess: string;
    /**
     * 합계
     * @type {string}
     * @memberof CndlCaplScritsNrdmpBlceItem
     */
    sm: string;
}
/**
 * @type CndlCaplScritsNrdmpBlceResponse
 * 
 * @export
 */
export type CndlCaplScritsNrdmpBlceResponse = CndlCaplScritsNrdmpBlceResponseSuccess | CommonError;
/**
 * 
 * @export
 * @interface CndlCaplScritsNrdmpBlceResponseSuccess
 */
export interface CndlCaplScritsNrdmpBlceResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof CndlCaplScritsNrdmpBlceResponseSuccess
     */
    status: CndlCaplScritsNrdmpBlceResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof CndlCaplScritsNrdmpBlceResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<CndlCaplScritsNrdmpBlceItem>}
     * @memberof CndlCaplScritsNrdmpBlceResponseSuccess
     */
    list: Array<CndlCaplScritsNrdmpBlceItem>;
}

/**
 * 에러 및 정보 코드
 */
export type CndlCaplScritsNrdmpBlceResponseSuccessStatusEnum =
    '000'

const CndlCaplScritsNrdmpBlceResponseSuccessStatusEnumValues = [
    '000',
]

export function isCndlCaplScritsNrdmpBlceResponseSuccessStatusEnum(value: any): value is CndlCaplScritsNrdmpBlceResponseSuccessStatusEnum {
    return CndlCaplScritsNrdmpBlceResponseSuccessStatusEnumValues.indexOf(value as unknown as CndlCaplScritsNrdmpBlceResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface CndlCaplScritsNrdmpBlceResponseSuccessAllOf
 */
export interface CndlCaplScritsNrdmpBlceResponseSuccessAllOf {
    /**
     * 
     * @type {Array<CndlCaplScritsNrdmpBlceItem>}
     * @memberof CndlCaplScritsNrdmpBlceResponseSuccessAllOf
     */
    list: Array<CndlCaplScritsNrdmpBlceItem>;
}
/**
 * 
 * @export
 * @interface CommonError
 */
export interface CommonError {
    /**
     * 에러 및 정보 코드
     * | 코드 | 설명 |
     * | --- | --- |
     * | 010 | 등록되지 않은 키입니다. |
     * | 011 | 사용할 수 없는 키입니다. 오픈API에 등록되었으나, 일시적으로 사용 중지된 키를 통하여 검색하는 경우 발생합니다. |
     * | 012 | 접근할 수 없는 IP입니다. |
     * | 013 | 조회된 데이타가 없습니다. |
     * | 014 | 파일이 존재하지 않습니다. |
     * | 020 | 요청 제한을 초과하였습니다. 일반적으로는 10,000건 이상의 요청에 대하여 이 에러 메시지가 발생되나, 요청 제한이 다르게 설정된 경우에는 이에 준하여 발생됩니다. |
     * | 021 | 조회 가능한 회사 개수가 초과하였습니다.(최대 100건) |
     * | 100 | 필드의 부적절한 값입니다. 필드 설명에 없는 값을 사용한 경우에 발생하는 메시지입니다. |
     * | 101 | 부적절한 접근입니다. |
     * | 800 | 시스템 점검으로 인한 서비스가 중지 중입니다. |
     * | 900 | 정의되지 않은 오류가 발생하였습니다. |
     * | 901 | 사용자 계정의 개인정보 보유기간이 만료되어 사용할 수 없는 키입니다. 관리자 이메일(opendart@fss.or.kr)로 문의하시기 바랍니다. |
     * @type {string}
     * @memberof CommonError
     */
    status: CommonErrorStatusEnum;
    /**
     * 에러 및 정보 메시지
     * @type {string}
     * @memberof CommonError
     */
    message: string;
}

/**
 * 에러 및 정보 코드
 * | 코드 | 설명 |
 * | --- | --- |
 * | 010 | 등록되지 않은 키입니다. |
 * | 011 | 사용할 수 없는 키입니다. 오픈API에 등록되었으나, 일시적으로 사용 중지된 키를 통하여 검색하는 경우 발생합니다. |
 * | 012 | 접근할 수 없는 IP입니다. |
 * | 013 | 조회된 데이타가 없습니다. |
 * | 014 | 파일이 존재하지 않습니다. |
 * | 020 | 요청 제한을 초과하였습니다. 일반적으로는 10,000건 이상의 요청에 대하여 이 에러 메시지가 발생되나, 요청 제한이 다르게 설정된 경우에는 이에 준하여 발생됩니다. |
 * | 021 | 조회 가능한 회사 개수가 초과하였습니다.(최대 100건) |
 * | 100 | 필드의 부적절한 값입니다. 필드 설명에 없는 값을 사용한 경우에 발생하는 메시지입니다. |
 * | 101 | 부적절한 접근입니다. |
 * | 800 | 시스템 점검으로 인한 서비스가 중지 중입니다. |
 * | 900 | 정의되지 않은 오류가 발생하였습니다. |
 * | 901 | 사용자 계정의 개인정보 보유기간이 만료되어 사용할 수 없는 키입니다. 관리자 이메일(opendart@fss.or.kr)로 문의하시기 바랍니다. |
 */
export type CommonErrorStatusEnum =
    '010'|
    '011'|
    '012'|
    '013'|
    '014'|
    '020'|
    '021'|
    '100'|
    '101'|
    '800'|
    '900'|
    '901'

const CommonErrorStatusEnumValues = [
    '010',
    '011',
    '012',
    '013',
    '014',
    '020',
    '021',
    '100',
    '101',
    '800',
    '900',
    '901',
]

export function isCommonErrorStatusEnum(value: any): value is CommonErrorStatusEnum {
    return CommonErrorStatusEnumValues.indexOf(value as unknown as CommonErrorStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface CommonSuccessHeader
 */
export interface CommonSuccessHeader {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof CommonSuccessHeader
     */
    status: CommonSuccessHeaderStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof CommonSuccessHeader
     */
    message: string;
}

/**
 * 에러 및 정보 코드
 */
export type CommonSuccessHeaderStatusEnum =
    '000'

const CommonSuccessHeaderStatusEnumValues = [
    '000',
]

export function isCommonSuccessHeaderStatusEnum(value: any): value is CommonSuccessHeaderStatusEnum {
    return CommonSuccessHeaderStatusEnumValues.indexOf(value as unknown as CommonSuccessHeaderStatusEnum) !== -1
}


/**
 * @type CompanyResponse
 * 
 * @export
 */
export type CompanyResponse = CommonError | CompanyResponseSuccess;
/**
 * 
 * @export
 * @interface CompanyResponseSuccess
 */
export interface CompanyResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof CompanyResponseSuccess
     */
    status: CompanyResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof CompanyResponseSuccess
     */
    message: string;
    /**
     * 회사명
     * @type {string}
     * @memberof CompanyResponseSuccess
     */
    corp_name: string;
    /**
     * 영문정식회사명칭
     * @type {string}
     * @memberof CompanyResponseSuccess
     */
    corp_name_eng: string;
    /**
     * 종목명(상장사) 또는 약식명칭(기타법인)
     * @type {string}
     * @memberof CompanyResponseSuccess
     */
    stock_name: string;
    /**
     * 상장회사인 경우 주식의 종목코드(6자리)
     * @type {string}
     * @memberof CompanyResponseSuccess
     */
    stock_code: string;
    /**
     * 대표자명
     * @type {string}
     * @memberof CompanyResponseSuccess
     */
    ceo_nm: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof CompanyResponseSuccess
     */
    corp_cls: CorpCls;
    /**
     * 법인등록번호
     * @type {string}
     * @memberof CompanyResponseSuccess
     */
    jurir_no: string;
    /**
     * 사업자등록번호
     * @type {string}
     * @memberof CompanyResponseSuccess
     */
    bizr_no: string;
    /**
     * 주소
     * @type {string}
     * @memberof CompanyResponseSuccess
     */
    adres: string;
    /**
     * 홈페이지주소
     * @type {string}
     * @memberof CompanyResponseSuccess
     */
    hm_url: string;
    /**
     * IR홈페이지
     * @type {string}
     * @memberof CompanyResponseSuccess
     */
    ir_url: string;
    /**
     * 전화번호
     * @type {string}
     * @memberof CompanyResponseSuccess
     */
    phn_no: string;
    /**
     * 팩스번호
     * @type {string}
     * @memberof CompanyResponseSuccess
     */
    fax_no: string;
    /**
     * 업종코드
     * @type {string}
     * @memberof CompanyResponseSuccess
     */
    induty_code: string;
    /**
     * 설립일(YYYYMMDD)
     * @type {string}
     * @memberof CompanyResponseSuccess
     */
    est_dt: string;
    /**
     * 결산월
     * @type {string}
     * @memberof CompanyResponseSuccess
     */
    acc_mt: string;
}

/**
 * 에러 및 정보 코드
 */
export type CompanyResponseSuccessStatusEnum =
    '000'

const CompanyResponseSuccessStatusEnumValues = [
    '000',
]

export function isCompanyResponseSuccessStatusEnum(value: any): value is CompanyResponseSuccessStatusEnum {
    return CompanyResponseSuccessStatusEnumValues.indexOf(value as unknown as CompanyResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface CompanyResponseSuccessAllOf
 */
export interface CompanyResponseSuccessAllOf {
    /**
     * 회사명
     * @type {string}
     * @memberof CompanyResponseSuccessAllOf
     */
    corp_name: string;
    /**
     * 영문정식회사명칭
     * @type {string}
     * @memberof CompanyResponseSuccessAllOf
     */
    corp_name_eng: string;
    /**
     * 종목명(상장사) 또는 약식명칭(기타법인)
     * @type {string}
     * @memberof CompanyResponseSuccessAllOf
     */
    stock_name: string;
    /**
     * 상장회사인 경우 주식의 종목코드(6자리)
     * @type {string}
     * @memberof CompanyResponseSuccessAllOf
     */
    stock_code: string;
    /**
     * 대표자명
     * @type {string}
     * @memberof CompanyResponseSuccessAllOf
     */
    ceo_nm: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof CompanyResponseSuccessAllOf
     */
    corp_cls: CorpCls;
    /**
     * 법인등록번호
     * @type {string}
     * @memberof CompanyResponseSuccessAllOf
     */
    jurir_no: string;
    /**
     * 사업자등록번호
     * @type {string}
     * @memberof CompanyResponseSuccessAllOf
     */
    bizr_no: string;
    /**
     * 주소
     * @type {string}
     * @memberof CompanyResponseSuccessAllOf
     */
    adres: string;
    /**
     * 홈페이지주소
     * @type {string}
     * @memberof CompanyResponseSuccessAllOf
     */
    hm_url: string;
    /**
     * IR홈페이지
     * @type {string}
     * @memberof CompanyResponseSuccessAllOf
     */
    ir_url: string;
    /**
     * 전화번호
     * @type {string}
     * @memberof CompanyResponseSuccessAllOf
     */
    phn_no: string;
    /**
     * 팩스번호
     * @type {string}
     * @memberof CompanyResponseSuccessAllOf
     */
    fax_no: string;
    /**
     * 업종코드
     * @type {string}
     * @memberof CompanyResponseSuccessAllOf
     */
    induty_code: string;
    /**
     * 설립일(YYYYMMDD)
     * @type {string}
     * @memberof CompanyResponseSuccessAllOf
     */
    est_dt: string;
    /**
     * 결산월
     * @type {string}
     * @memberof CompanyResponseSuccessAllOf
     */
    acc_mt: string;
}
/**
 * 법인구분
 * | 코드 | 설명 |
 * | --- | --- |
 * | Y | 유가 |
 * | K | 코스닥 |
 * | N | 코넥스 |
 * | E | 기타|
 */
export type CorpCls =
    'Y'|
    'K'|
    'N'|
    'E'

/**
 * 
 * @export
 * @interface CprndNrdmpBlceItem
 */
export interface CprndNrdmpBlceItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof CprndNrdmpBlceItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof CprndNrdmpBlceItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof CprndNrdmpBlceItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof CprndNrdmpBlceItem
     */
    corp_name: string;
    /**
     * 잔여만기
     * @type {string}
     * @memberof CprndNrdmpBlceItem
     */
    remndr_exprtn1: string;
    /**
     * 잔여만기
     * @type {string}
     * @memberof CprndNrdmpBlceItem
     */
    remndr_exprtn2: string;
    /**
     * 1년 이하
     * @type {string}
     * @memberof CprndNrdmpBlceItem
     */
    yy1_below: string;
    /**
     * 1년 초과 2년 이하
     * @type {string}
     * @memberof CprndNrdmpBlceItem
     */
    yy1_excess_yy2_below: string;
    /**
     * 2년 초과 3년 이하
     * @type {string}
     * @memberof CprndNrdmpBlceItem
     */
    yy2_excess_yy3_below: string;
    /**
     * 3년 초과 4년 이하
     * @type {string}
     * @memberof CprndNrdmpBlceItem
     */
    yy3_excess_yy4_below: string;
    /**
     * 4년 초과 5년 이하
     * @type {string}
     * @memberof CprndNrdmpBlceItem
     */
    yy4_excess_yy5_below: string;
    /**
     * 5년 초과 10년 이하
     * @type {string}
     * @memberof CprndNrdmpBlceItem
     */
    yy5_excess_yy10_below: string;
    /**
     * 10년 초과
     * @type {string}
     * @memberof CprndNrdmpBlceItem
     */
    yy10_excess: string;
    /**
     * 합
     * @type {string}
     * @memberof CprndNrdmpBlceItem
     */
    sm: string;
}
/**
 * @type CprndNrdmpBlceResponse
 * 
 * @export
 */
export type CprndNrdmpBlceResponse = CommonError | CprndNrdmpBlceResponseSuccess;
/**
 * 
 * @export
 * @interface CprndNrdmpBlceResponseSuccess
 */
export interface CprndNrdmpBlceResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof CprndNrdmpBlceResponseSuccess
     */
    status: CprndNrdmpBlceResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof CprndNrdmpBlceResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<CprndNrdmpBlceItem>}
     * @memberof CprndNrdmpBlceResponseSuccess
     */
    list: Array<CprndNrdmpBlceItem>;
}

/**
 * 에러 및 정보 코드
 */
export type CprndNrdmpBlceResponseSuccessStatusEnum =
    '000'

const CprndNrdmpBlceResponseSuccessStatusEnumValues = [
    '000',
]

export function isCprndNrdmpBlceResponseSuccessStatusEnum(value: any): value is CprndNrdmpBlceResponseSuccessStatusEnum {
    return CprndNrdmpBlceResponseSuccessStatusEnumValues.indexOf(value as unknown as CprndNrdmpBlceResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface CprndNrdmpBlceResponseSuccessAllOf
 */
export interface CprndNrdmpBlceResponseSuccessAllOf {
    /**
     * 
     * @type {Array<CprndNrdmpBlceItem>}
     * @memberof CprndNrdmpBlceResponseSuccessAllOf
     */
    list: Array<CprndNrdmpBlceItem>;
}
/**
 * 
 * @export
 * @interface CrDecsnItem
 */
export interface CrDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof CrDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof CrDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof CrDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof CrDecsnItem
     */
    corp_name: string;
    /**
     * 감자주식의 종류와 수(보통주식 (주))
     * @type {string}
     * @memberof CrDecsnItem
     */
    crstk_ostk_cnt: string;
    /**
     * 감자주식의 종류와 수(기타주식 (주))
     * @type {string}
     * @memberof CrDecsnItem
     */
    crstk_estk_cnt: string;
    /**
     * 1주당 액면가액 (원)
     * @type {string}
     * @memberof CrDecsnItem
     */
    fv_ps: string;
    /**
     * 감자전후 자본금(감자전 (원))
     * @type {string}
     * @memberof CrDecsnItem
     */
    bfcr_cpt: string;
    /**
     * 감자전후 자본금(감자후 (원))
     * @type {string}
     * @memberof CrDecsnItem
     */
    atcr_cpt: string;
    /**
     * 감자전후 발행주식수(보통주식 (주)(감자전 (원)))
     * @type {string}
     * @memberof CrDecsnItem
     */
    bfcr_tisstk_ostk: string;
    /**
     * 감자전후 발행주식수(보통주식 (주)(감자후 (원)))
     * @type {string}
     * @memberof CrDecsnItem
     */
    atcr_tisstk_ostk: string;
    /**
     * 감자전후 발행주식수(기타주식 (주)(감자전 (원)))
     * @type {string}
     * @memberof CrDecsnItem
     */
    bfcr_tisstk_estk: string;
    /**
     * 감자전후 발행주식수(기타주식 (주)(감자후 (원)))
     * @type {string}
     * @memberof CrDecsnItem
     */
    atcr_tisstk_estk: string;
    /**
     * 감자비율(보통주식 (%))
     * @type {string}
     * @memberof CrDecsnItem
     */
    cr_rt_ostk: string;
    /**
     * 감자비율(기타주식 (%))
     * @type {string}
     * @memberof CrDecsnItem
     */
    cr_rt_estk: string;
    /**
     * 감자기준일
     * @type {string}
     * @memberof CrDecsnItem
     */
    cr_std: string;
    /**
     * 감자방법
     * @type {string}
     * @memberof CrDecsnItem
     */
    cr_mth: string;
    /**
     * 감자사유
     * @type {string}
     * @memberof CrDecsnItem
     */
    cr_rs: string;
    /**
     * 감자일정(주주총회 예정일)
     * @type {string}
     * @memberof CrDecsnItem
     */
    crsc_gmtsck_prd: string;
    /**
     * 감자일정(명의개서정지기간)
     * @type {string}
     * @memberof CrDecsnItem
     */
    crsc_trnmsppd: string;
    /**
     * 감자일정(구주권 제출기간)
     * @type {string}
     * @memberof CrDecsnItem
     */
    crsc_osprpd: string;
    /**
     * 감자일정(매매거래 정지예정기간)
     * @type {string}
     * @memberof CrDecsnItem
     */
    crsc_trspprpd: string;
    /**
     * 감자일정(구주권 제출기간(시작일))
     * @type {string}
     * @memberof CrDecsnItem
     */
    crsc_osprpd_bgd: string;
    /**
     * 감자일정(구주권 제출기간(종료일))
     * @type {string}
     * @memberof CrDecsnItem
     */
    crsc_osprpd_edd: string;
    /**
     * 감자일정(매매거래 정지예정기간(시작일))
     * @type {string}
     * @memberof CrDecsnItem
     */
    crsc_trspprpd_bgd: string;
    /**
     * 감자일정(매매거래 정지예정기간(종료일))
     * @type {string}
     * @memberof CrDecsnItem
     */
    crsc_trspprpd_edd: string;
    /**
     * 감자일정(신주권교부예정일)
     * @type {string}
     * @memberof CrDecsnItem
     */
    crsc_nstkdlprd: string;
    /**
     * 감자일정(신주상장예정일)
     * @type {string}
     * @memberof CrDecsnItem
     */
    crsc_nstklstprd: string;
    /**
     * 채권자 이의제출기간(시작일)
     * @type {string}
     * @memberof CrDecsnItem
     */
    cdobprpd_bgd: string;
    /**
     * 채권자 이의제출기간(종료일)
     * @type {string}
     * @memberof CrDecsnItem
     */
    cdobprpd_edd: string;
    /**
     * 구주권제출 및 신주권교부장소
     * @type {string}
     * @memberof CrDecsnItem
     */
    ospr_nstkdl_pl: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof CrDecsnItem
     */
    bddd: string;
    /**
     * 사외이사 참석여부(참석(명))
     * @type {string}
     * @memberof CrDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사 참석여부(불참(명))
     * @type {string}
     * @memberof CrDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(감사위원) 참석여부
     * @type {string}
     * @memberof CrDecsnItem
     */
    adt_a_atn: string;
    /**
     * 공정거래위원회 신고대상 여부
     * @type {string}
     * @memberof CrDecsnItem
     */
    ftc_stt_atn: string;
}
/**
 * @type CrDecsnResponse
 * 
 * @export
 */
export type CrDecsnResponse = CommonError | CrDecsnResponseSuccess;
/**
 * 
 * @export
 * @interface CrDecsnResponseSuccess
 */
export interface CrDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof CrDecsnResponseSuccess
     */
    status: CrDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof CrDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<CrDecsnItem>}
     * @memberof CrDecsnResponseSuccess
     */
    list: Array<CrDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type CrDecsnResponseSuccessStatusEnum =
    '000'

const CrDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isCrDecsnResponseSuccessStatusEnum(value: any): value is CrDecsnResponseSuccessStatusEnum {
    return CrDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as CrDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface CrDecsnResponseSuccessAllOf
 */
export interface CrDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<CrDecsnItem>}
     * @memberof CrDecsnResponseSuccessAllOf
     */
    list: Array<CrDecsnItem>;
}
/**
 * 
 * @export
 * @interface CtrcvsBgrqItem
 */
export interface CtrcvsBgrqItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof CtrcvsBgrqItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof CtrcvsBgrqItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof CtrcvsBgrqItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof CtrcvsBgrqItem
     */
    corp_name: string;
    /**
     * 신청인 (회사와의 관계)
     * @type {string}
     * @memberof CtrcvsBgrqItem
     */
    apcnt: string;
    /**
     * 관할법원
     * @type {string}
     * @memberof CtrcvsBgrqItem
     */
    cpct: string;
    /**
     * 신청사유
     * @type {string}
     * @memberof CtrcvsBgrqItem
     */
    rq_rs: string;
    /**
     * 신청일자
     * @type {string}
     * @memberof CtrcvsBgrqItem
     */
    rqd: string;
    /**
     * 향후대책 및 일정
     * @type {string}
     * @memberof CtrcvsBgrqItem
     */
    ft_ctp_sc: string;
}
/**
 * @type CtrcvsBgrqResponse
 * 
 * @export
 */
export type CtrcvsBgrqResponse = CommonError | CtrcvsBgrqResponseSuccess;
/**
 * 
 * @export
 * @interface CtrcvsBgrqResponseSuccess
 */
export interface CtrcvsBgrqResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof CtrcvsBgrqResponseSuccess
     */
    status: CtrcvsBgrqResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof CtrcvsBgrqResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<CtrcvsBgrqItem>}
     * @memberof CtrcvsBgrqResponseSuccess
     */
    list: Array<CtrcvsBgrqItem>;
}

/**
 * 에러 및 정보 코드
 */
export type CtrcvsBgrqResponseSuccessStatusEnum =
    '000'

const CtrcvsBgrqResponseSuccessStatusEnumValues = [
    '000',
]

export function isCtrcvsBgrqResponseSuccessStatusEnum(value: any): value is CtrcvsBgrqResponseSuccessStatusEnum {
    return CtrcvsBgrqResponseSuccessStatusEnumValues.indexOf(value as unknown as CtrcvsBgrqResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface CtrcvsBgrqResponseSuccessAllOf
 */
export interface CtrcvsBgrqResponseSuccessAllOf {
    /**
     * 
     * @type {Array<CtrcvsBgrqItem>}
     * @memberof CtrcvsBgrqResponseSuccessAllOf
     */
    list: Array<CtrcvsBgrqItem>;
}
/**
 * 
 * @export
 * @interface CvbdIsDecsnItem
 */
export interface CvbdIsDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof CvbdIsDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    corp_name: string;
    /**
     * 사채의 종류(회차)
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    bd_tm: string;
    /**
     * 사채의 종류(종류)
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    bd_knd: string;
    /**
     * 사채의 권면(전자등록)총액 (원)
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    bd_fta: string;
    /**
     * 정관상 잔여 발행한도 (원)
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    atcsc_rmislmt: string;
    /**
     * 해외발행(권면(전자등록)총액)
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    ovis_fta: string;
    /**
     * 해외발행(권면(전자등록)총액(통화단위))
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    ovis_fta_crn: string;
    /**
     * 해외발행(기준환율등)
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    ovis_ster: string;
    /**
     * 해외발행(발행지역)
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    ovis_isar: string;
    /**
     * 해외발행(해외상장시 시장의 명칭)
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    ovis_mktnm: string;
    /**
     * 자금조달의 목적(시설자금 (원))
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    fdpp_fclt: string;
    /**
     * 자금조달의 목적(영업양수자금 (원))
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    fdpp_bsninh: string;
    /**
     * 자금조달의 목적(운영자금 (원))
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    fdpp_op: string;
    /**
     * 자금조달의 목적(채무상환자금 (원))
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    fdpp_dtrp: string;
    /**
     * 자금조달의 목적(타법인 증권 취득자금 (원))
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    fdpp_ocsa: string;
    /**
     * 자금조달의 목적(기타자금 (원))
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    fdpp_etc: string;
    /**
     * 사채의 이율(표면이자율 (%))
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    bd_intr_ex: string;
    /**
     * 사채의 이율(만기이자율 (%))
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    bd_intr_sf: string;
    /**
     * 사채만기일
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    bd_mtd: string;
    /**
     * 사채발행방법
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    bdis_mthn: string;
    /**
     * 전환에 관한 사항(전환비율 (%))
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    cv_rt: string;
    /**
     * 전환에 관한 사항(전환가액 (원/주))
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    cv_prc: string;
    /**
     * 전환에 관한 사항(전환에 따라 발행할 주식(종류))
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    cvisstk_knd: string;
    /**
     * 전환에 관한 사항(전환에 따라 발행할 주식(주식수))
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    cvisstk_cnt: string;
    /**
     * 전환에 관한 사항(전환에 따라 발행할 주식(주식총수 대비 비율(%)))
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    cvisstk_tisstk_vs: string;
    /**
     * 전환에 관한 사항(전환청구기간(시작일))
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    cvrqpd_bgd: string;
    /**
     * 전환에 관한 사항(전환청구기간(종료일))
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    cvrqpd_edd: string;
    /**
     * 전환에 관한 사항(시가하락에 따른 전환가액 조정(최저 조정가액 (원)))
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    act_mktprcfl_cvprc_lwtrsprc: string;
    /**
     * 전환에 관한 사항(시가하락에 따른 전환가액 조정(최저 조정가액 근거))
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    act_mktprcfl_cvprc_lwtrsprc_bs: string;
    /**
     * 전환에 관한 사항(시가하락에 따른 전환가액 조정(발행당시 전환가액의 70% 미만으로 조정가능한 잔여 발행한도 (원)))
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    rmislmt_lt70p: string;
    /**
     * 합병 관련 사항
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    abmg: string;
    /**
     * 청약일
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    sbd: string;
    /**
     * 납입일
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    pymd: string;
    /**
     * 대표주관회사
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    rpmcmp: string;
    /**
     * 보증기관
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    grint: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    bddd: string;
    /**
     * 사외이사 참석여부(참석 (명))
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사 참석여부(불참 (명))
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(감사위원) 참석여부
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    adt_a_atn: string;
    /**
     * 증권신고서 제출대상 여부
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    rs_sm_atn: string;
    /**
     * 제출을 면제받은 경우 그 사유
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    ex_sm_r: string;
    /**
     * 당해 사채의 해외발행과 연계된 대차거래 내역
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    ovis_ltdtl: string;
    /**
     * 공정거래위원회 신고대상 여부
     * @type {string}
     * @memberof CvbdIsDecsnItem
     */
    ftc_stt_atn: string;
}
/**
 * @type CvbdIsDecsnResponse
 * 
 * @export
 */
export type CvbdIsDecsnResponse = CommonError | CvbdIsDecsnResponseSuccess;
/**
 * 
 * @export
 * @interface CvbdIsDecsnResponseSuccess
 */
export interface CvbdIsDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof CvbdIsDecsnResponseSuccess
     */
    status: CvbdIsDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof CvbdIsDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<CvbdIsDecsnItem>}
     * @memberof CvbdIsDecsnResponseSuccess
     */
    list: Array<CvbdIsDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type CvbdIsDecsnResponseSuccessStatusEnum =
    '000'

const CvbdIsDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isCvbdIsDecsnResponseSuccessStatusEnum(value: any): value is CvbdIsDecsnResponseSuccessStatusEnum {
    return CvbdIsDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as CvbdIsDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface CvbdIsDecsnResponseSuccessAllOf
 */
export interface CvbdIsDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<CvbdIsDecsnItem>}
     * @memberof CvbdIsDecsnResponseSuccessAllOf
     */
    list: Array<CvbdIsDecsnItem>;
}
/**
 * 
 * @export
 * @interface DetScritsIsuAcmsltItem
 */
export interface DetScritsIsuAcmsltItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof DetScritsIsuAcmsltItem
     */
    rcept_no?: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof DetScritsIsuAcmsltItem
     */
    corp_cls?: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof DetScritsIsuAcmsltItem
     */
    corp_code?: string;
    /**
     * 회사명
     * @type {string}
     * @memberof DetScritsIsuAcmsltItem
     */
    corp_name?: string;
    /**
     * 발행회사
     * @type {string}
     * @memberof DetScritsIsuAcmsltItem
     */
    isu_cmpny?: string;
    /**
     * 증권종류
     * @type {string}
     * @memberof DetScritsIsuAcmsltItem
     */
    scrits_knd_nm?: string;
    /**
     * 발행방법
     * @type {string}
     * @memberof DetScritsIsuAcmsltItem
     */
    isu_mth_nm?: string;
    /**
     * 발행일자
     * @type {string}
     * @memberof DetScritsIsuAcmsltItem
     */
    isu_de?: string;
    /**
     * 권면(전자등록)총액
     * @type {string}
     * @memberof DetScritsIsuAcmsltItem
     */
    facvalu_totamt?: string;
    /**
     * 이자율
     * @type {string}
     * @memberof DetScritsIsuAcmsltItem
     */
    intrt?: string;
    /**
     * 평가등급(평가기관)
     * @type {string}
     * @memberof DetScritsIsuAcmsltItem
     */
    evl_grad_instt?: string;
    /**
     * 만기일
     * @type {string}
     * @memberof DetScritsIsuAcmsltItem
     */
    mtd?: string;
    /**
     * 상환여부
     * @type {string}
     * @memberof DetScritsIsuAcmsltItem
     */
    repy_at?: string;
    /**
     * 주관회사
     * @type {string}
     * @memberof DetScritsIsuAcmsltItem
     */
    mngt_cmpny?: string;
}
/**
 * @type DetScritsIsuAcmsltResponse
 * 
 * @export
 */
export type DetScritsIsuAcmsltResponse = CommonError | DetScritsIsuAcmsltResponseSuccess;
/**
 * 
 * @export
 * @interface DetScritsIsuAcmsltResponseSuccess
 */
export interface DetScritsIsuAcmsltResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof DetScritsIsuAcmsltResponseSuccess
     */
    status: DetScritsIsuAcmsltResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof DetScritsIsuAcmsltResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<DetScritsIsuAcmsltItem>}
     * @memberof DetScritsIsuAcmsltResponseSuccess
     */
    list: Array<DetScritsIsuAcmsltItem>;
}

/**
 * 에러 및 정보 코드
 */
export type DetScritsIsuAcmsltResponseSuccessStatusEnum =
    '000'

const DetScritsIsuAcmsltResponseSuccessStatusEnumValues = [
    '000',
]

export function isDetScritsIsuAcmsltResponseSuccessStatusEnum(value: any): value is DetScritsIsuAcmsltResponseSuccessStatusEnum {
    return DetScritsIsuAcmsltResponseSuccessStatusEnumValues.indexOf(value as unknown as DetScritsIsuAcmsltResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface DetScritsIsuAcmsltResponseSuccessAllOf
 */
export interface DetScritsIsuAcmsltResponseSuccessAllOf {
    /**
     * 
     * @type {Array<DetScritsIsuAcmsltItem>}
     * @memberof DetScritsIsuAcmsltResponseSuccessAllOf
     */
    list: Array<DetScritsIsuAcmsltItem>;
}
/**
 * 
 * @export
 * @interface DfOcrItem
 */
export interface DfOcrItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof DfOcrItem
     */
    rcept_no?: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof DfOcrItem
     */
    corp_cls?: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof DfOcrItem
     */
    corp_code?: string;
    /**
     * 회사명
     * @type {string}
     * @memberof DfOcrItem
     */
    corp_name?: string;
    /**
     * 부도내용
     * @type {string}
     * @memberof DfOcrItem
     */
    df_cn?: string;
    /**
     * 부도금액
     * @type {string}
     * @memberof DfOcrItem
     */
    df_amt?: string;
    /**
     * 부도발생은행
     * @type {string}
     * @memberof DfOcrItem
     */
    df_bnk?: string;
    /**
     * 최종부도(당좌거래정지)일자
     * @type {string}
     * @memberof DfOcrItem
     */
    dfd?: string;
    /**
     * 부도사유 및 경위
     * @type {string}
     * @memberof DfOcrItem
     */
    df_rs?: string;
}
/**
 * @type DfOcrResponse
 * 
 * @export
 */
export type DfOcrResponse = CommonError | DfOcrResponseSuccess;
/**
 * 
 * @export
 * @interface DfOcrResponseSuccess
 */
export interface DfOcrResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof DfOcrResponseSuccess
     */
    status: DfOcrResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof DfOcrResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<DfOcrItem>}
     * @memberof DfOcrResponseSuccess
     */
    list: Array<DfOcrItem>;
}

/**
 * 에러 및 정보 코드
 */
export type DfOcrResponseSuccessStatusEnum =
    '000'

const DfOcrResponseSuccessStatusEnumValues = [
    '000',
]

export function isDfOcrResponseSuccessStatusEnum(value: any): value is DfOcrResponseSuccessStatusEnum {
    return DfOcrResponseSuccessStatusEnumValues.indexOf(value as unknown as DfOcrResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface DfOcrResponseSuccessAllOf
 */
export interface DfOcrResponseSuccessAllOf {
    /**
     * 
     * @type {Array<DfOcrItem>}
     * @memberof DfOcrResponseSuccessAllOf
     */
    list: Array<DfOcrItem>;
}
/**
 * 
 * @export
 * @interface DrctrAdtAllMendngSttusGmtsckConfmAmountItem
 */
export interface DrctrAdtAllMendngSttusGmtsckConfmAmountItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof DrctrAdtAllMendngSttusGmtsckConfmAmountItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof DrctrAdtAllMendngSttusGmtsckConfmAmountItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof DrctrAdtAllMendngSttusGmtsckConfmAmountItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof DrctrAdtAllMendngSttusGmtsckConfmAmountItem
     */
    corp_name: string;
    /**
     * 구분
     * @type {string}
     * @memberof DrctrAdtAllMendngSttusGmtsckConfmAmountItem
     */
    se: string;
    /**
     * 인원수
     * @type {string}
     * @memberof DrctrAdtAllMendngSttusGmtsckConfmAmountItem
     */
    nmpr: string;
    /**
     * 주주총회 승인금액
     * @type {string}
     * @memberof DrctrAdtAllMendngSttusGmtsckConfmAmountItem
     */
    gmtsck_confm_amount: string;
    /**
     * 비고
     * @type {string}
     * @memberof DrctrAdtAllMendngSttusGmtsckConfmAmountItem
     */
    rm: string;
}
/**
 * @type DrctrAdtAllMendngSttusGmtsckConfmAmountResponse
 * 
 * @export
 */
export type DrctrAdtAllMendngSttusGmtsckConfmAmountResponse = CommonError | DrctrAdtAllMendngSttusGmtsckConfmAmountResponseSuccess;
/**
 * 
 * @export
 * @interface DrctrAdtAllMendngSttusGmtsckConfmAmountResponseSuccess
 */
export interface DrctrAdtAllMendngSttusGmtsckConfmAmountResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof DrctrAdtAllMendngSttusGmtsckConfmAmountResponseSuccess
     */
    status: DrctrAdtAllMendngSttusGmtsckConfmAmountResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof DrctrAdtAllMendngSttusGmtsckConfmAmountResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<DrctrAdtAllMendngSttusGmtsckConfmAmountItem>}
     * @memberof DrctrAdtAllMendngSttusGmtsckConfmAmountResponseSuccess
     */
    list: Array<DrctrAdtAllMendngSttusGmtsckConfmAmountItem>;
}

/**
 * 에러 및 정보 코드
 */
export type DrctrAdtAllMendngSttusGmtsckConfmAmountResponseSuccessStatusEnum =
    '000'

const DrctrAdtAllMendngSttusGmtsckConfmAmountResponseSuccessStatusEnumValues = [
    '000',
]

export function isDrctrAdtAllMendngSttusGmtsckConfmAmountResponseSuccessStatusEnum(value: any): value is DrctrAdtAllMendngSttusGmtsckConfmAmountResponseSuccessStatusEnum {
    return DrctrAdtAllMendngSttusGmtsckConfmAmountResponseSuccessStatusEnumValues.indexOf(value as unknown as DrctrAdtAllMendngSttusGmtsckConfmAmountResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface DrctrAdtAllMendngSttusGmtsckConfmAmountResponseSuccessAllOf
 */
export interface DrctrAdtAllMendngSttusGmtsckConfmAmountResponseSuccessAllOf {
    /**
     * 
     * @type {Array<DrctrAdtAllMendngSttusGmtsckConfmAmountItem>}
     * @memberof DrctrAdtAllMendngSttusGmtsckConfmAmountResponseSuccessAllOf
     */
    list: Array<DrctrAdtAllMendngSttusGmtsckConfmAmountItem>;
}
/**
 * 
 * @export
 * @interface DrctrAdtAllMendngSttusMendngPymntamtTyClItem
 */
export interface DrctrAdtAllMendngSttusMendngPymntamtTyClItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof DrctrAdtAllMendngSttusMendngPymntamtTyClItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof DrctrAdtAllMendngSttusMendngPymntamtTyClItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof DrctrAdtAllMendngSttusMendngPymntamtTyClItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof DrctrAdtAllMendngSttusMendngPymntamtTyClItem
     */
    corp_name: string;
    /**
     * 구분
     * @type {string}
     * @memberof DrctrAdtAllMendngSttusMendngPymntamtTyClItem
     */
    se: string;
    /**
     * 인원수
     * @type {string}
     * @memberof DrctrAdtAllMendngSttusMendngPymntamtTyClItem
     */
    nmpr: string;
    /**
     * 보수총액
     * @type {string}
     * @memberof DrctrAdtAllMendngSttusMendngPymntamtTyClItem
     */
    pymnt_totamt: string;
    /**
     * 1인당 평균보수액
     * @type {string}
     * @memberof DrctrAdtAllMendngSttusMendngPymntamtTyClItem
     */
    psn1_avrg_pymntamt: string;
    /**
     * 비고
     * @type {string}
     * @memberof DrctrAdtAllMendngSttusMendngPymntamtTyClItem
     */
    rm: string;
}
/**
 * @type DrctrAdtAllMendngSttusMendngPymntamtTyClResponse
 * 
 * @export
 */
export type DrctrAdtAllMendngSttusMendngPymntamtTyClResponse = CommonError | DrctrAdtAllMendngSttusMendngPymntamtTyClResponseSuccess;
/**
 * 
 * @export
 * @interface DrctrAdtAllMendngSttusMendngPymntamtTyClResponseSuccess
 */
export interface DrctrAdtAllMendngSttusMendngPymntamtTyClResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof DrctrAdtAllMendngSttusMendngPymntamtTyClResponseSuccess
     */
    status: DrctrAdtAllMendngSttusMendngPymntamtTyClResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof DrctrAdtAllMendngSttusMendngPymntamtTyClResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<DrctrAdtAllMendngSttusMendngPymntamtTyClItem>}
     * @memberof DrctrAdtAllMendngSttusMendngPymntamtTyClResponseSuccess
     */
    list: Array<DrctrAdtAllMendngSttusMendngPymntamtTyClItem>;
}

/**
 * 에러 및 정보 코드
 */
export type DrctrAdtAllMendngSttusMendngPymntamtTyClResponseSuccessStatusEnum =
    '000'

const DrctrAdtAllMendngSttusMendngPymntamtTyClResponseSuccessStatusEnumValues = [
    '000',
]

export function isDrctrAdtAllMendngSttusMendngPymntamtTyClResponseSuccessStatusEnum(value: any): value is DrctrAdtAllMendngSttusMendngPymntamtTyClResponseSuccessStatusEnum {
    return DrctrAdtAllMendngSttusMendngPymntamtTyClResponseSuccessStatusEnumValues.indexOf(value as unknown as DrctrAdtAllMendngSttusMendngPymntamtTyClResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface DrctrAdtAllMendngSttusMendngPymntamtTyClResponseSuccessAllOf
 */
export interface DrctrAdtAllMendngSttusMendngPymntamtTyClResponseSuccessAllOf {
    /**
     * 
     * @type {Array<DrctrAdtAllMendngSttusMendngPymntamtTyClItem>}
     * @memberof DrctrAdtAllMendngSttusMendngPymntamtTyClResponseSuccessAllOf
     */
    list: Array<DrctrAdtAllMendngSttusMendngPymntamtTyClItem>;
}
/**
 * 
 * @export
 * @interface DsRsOcrItem
 */
export interface DsRsOcrItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof DsRsOcrItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof DsRsOcrItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof DsRsOcrItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof DsRsOcrItem
     */
    corp_name: string;
    /**
     * 해산사유
     * @type {string}
     * @memberof DsRsOcrItem
     */
    ds_rs: string;
    /**
     * 해산사유발생일(결정일)
     * @type {string}
     * @memberof DsRsOcrItem
     */
    ds_rsd: string;
    /**
     * 사외이사 참석여부(참석)
     * @type {string}
     * @memberof DsRsOcrItem
     */
    od_a_at_t: string;
    /**
     * 사외이사 참석여부(불참)
     * @type {string}
     * @memberof DsRsOcrItem
     */
    od_a_at_b: string;
    /**
     * 감사(감사위원) 참석 여부
     * @type {string}
     * @memberof DsRsOcrItem
     */
    adt_a_atn: string;
}
/**
 * @type DsRsOcrResponse
 * 
 * @export
 */
export type DsRsOcrResponse = CommonError | DsRsOcrResponseSuccess;
/**
 * 
 * @export
 * @interface DsRsOcrResponseSuccess
 */
export interface DsRsOcrResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof DsRsOcrResponseSuccess
     */
    status: DsRsOcrResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof DsRsOcrResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<DsRsOcrItem>}
     * @memberof DsRsOcrResponseSuccess
     */
    list: Array<DsRsOcrItem>;
}

/**
 * 에러 및 정보 코드
 */
export type DsRsOcrResponseSuccessStatusEnum =
    '000'

const DsRsOcrResponseSuccessStatusEnumValues = [
    '000',
]

export function isDsRsOcrResponseSuccessStatusEnum(value: any): value is DsRsOcrResponseSuccessStatusEnum {
    return DsRsOcrResponseSuccessStatusEnumValues.indexOf(value as unknown as DsRsOcrResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface DsRsOcrResponseSuccessAllOf
 */
export interface DsRsOcrResponseSuccessAllOf {
    /**
     * 
     * @type {Array<DsRsOcrItem>}
     * @memberof DsRsOcrResponseSuccessAllOf
     */
    list: Array<DsRsOcrItem>;
}
/**
 * @type DvRsResponse
 * 
 * @export
 */
export type DvRsResponse = CommonError | DvRsResponseSuccess;
/**
 * @type DvRsResponseItem
 * 
 * @export
 */
export type DvRsResponseItem = DvRsResponseItemAbount | DvRsResponseItemGeneral | DvRsResponseItemIssuedSecurities;
/**
 * 
 * @export
 * @interface DvRsResponseItemAbount
 */
export interface DvRsResponseItemAbount {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof DvRsResponseItemAbount
     */
    title: DvRsResponseItemAbountTitleEnum;
    /**
     * 
     * @type {Array<DvRsResponseItemAbountItem>}
     * @memberof DvRsResponseItemAbount
     */
    list: Array<DvRsResponseItemAbountItem>;
}

/**
 * 그룹명칭
 */
export type DvRsResponseItemAbountTitleEnum =
    '당사회사에관한사항'

const DvRsResponseItemAbountTitleEnumValues = [
    '당사회사에관한사항',
]

export function isDvRsResponseItemAbountTitleEnum(value: any): value is DvRsResponseItemAbountTitleEnum {
    return DvRsResponseItemAbountTitleEnumValues.indexOf(value as unknown as DvRsResponseItemAbountTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface DvRsResponseItemAbountItem
 */
export interface DvRsResponseItemAbountItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof DvRsResponseItemAbountItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof DvRsResponseItemAbountItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof DvRsResponseItemAbountItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof DvRsResponseItemAbountItem
     */
    corp_name: string;
    /**
     * 회사명
     * @type {string}
     * @memberof DvRsResponseItemAbountItem
     */
    cmpnm: string;
    /**
     * 구분
     * @type {string}
     * @memberof DvRsResponseItemAbountItem
     */
    sen: string;
    /**
     * 총자산
     * @type {string}
     * @memberof DvRsResponseItemAbountItem
     */
    tast: string;
    /**
     * 자본금
     * @type {string}
     * @memberof DvRsResponseItemAbountItem
     */
    cpt: string;
    /**
     * 발행주식수(주식의종류)
     * @type {string}
     * @memberof DvRsResponseItemAbountItem
     */
    isstk_knd: string;
    /**
     * 발행주식수(주식수)
     * @type {string}
     * @memberof DvRsResponseItemAbountItem
     */
    isstk_cnt: string;
}
/**
 * 
 * @export
 * @interface DvRsResponseItemGeneral
 */
export interface DvRsResponseItemGeneral {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof DvRsResponseItemGeneral
     */
    title: DvRsResponseItemGeneralTitleEnum;
    /**
     * 
     * @type {Array<DvRsResponseItemGeneralItem>}
     * @memberof DvRsResponseItemGeneral
     */
    list: Array<DvRsResponseItemGeneralItem>;
}

/**
 * 그룹명칭
 */
export type DvRsResponseItemGeneralTitleEnum =
    '일반사항'

const DvRsResponseItemGeneralTitleEnumValues = [
    '일반사항',
]

export function isDvRsResponseItemGeneralTitleEnum(value: any): value is DvRsResponseItemGeneralTitleEnum {
    return DvRsResponseItemGeneralTitleEnumValues.indexOf(value as unknown as DvRsResponseItemGeneralTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface DvRsResponseItemGeneralItem
 */
export interface DvRsResponseItemGeneralItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof DvRsResponseItemGeneralItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof DvRsResponseItemGeneralItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof DvRsResponseItemGeneralItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof DvRsResponseItemGeneralItem
     */
    corp_name: string;
    /**
     * 형태
     * @type {string}
     * @memberof DvRsResponseItemGeneralItem
     */
    stn: string;
    /**
     * 이사회 결의일
     * @type {string}
     * @memberof DvRsResponseItemGeneralItem
     */
    bddd: string;
    /**
     * 계약일
     * @type {string}
     * @memberof DvRsResponseItemGeneralItem
     */
    ctrd: string;
    /**
     * 주주총회를 위한 주주확정일
     * @type {string}
     * @memberof DvRsResponseItemGeneralItem
     */
    gmtsck_shddstd: string;
    /**
     * 승인을 위한 주주총회일
     * @type {string}
     * @memberof DvRsResponseItemGeneralItem
     */
    ap_gmtsck: string;
    /**
     * 주식매수청구권 행사 기간 및 가격(시작일)
     * @type {string}
     * @memberof DvRsResponseItemGeneralItem
     */
    aprskh_pd_bgd: string;
    /**
     * 주식매수청구권 행사 기간 및 가격(종료일)
     * @type {string}
     * @memberof DvRsResponseItemGeneralItem
     */
    aprskh_pd_edd: string;
    /**
     * 주식매수청구권 행사 기간 및 가격((주식매수청구가격-회사제시))
     * @type {string}
     * @memberof DvRsResponseItemGeneralItem
     */
    aprskh_prc: string;
    /**
     * 합병기일등
     * @type {string}
     * @memberof DvRsResponseItemGeneralItem
     */
    mgdt_etc: string;
    /**
     * 비율 또는 가액
     * @type {string}
     * @memberof DvRsResponseItemGeneralItem
     */
    rt_vl: string;
    /**
     * 외부평가기관
     * @type {string}
     * @memberof DvRsResponseItemGeneralItem
     */
    exevl_int: string;
    /**
     * 지급 교부금 등
     * @type {string}
     * @memberof DvRsResponseItemGeneralItem
     */
    grtmn_etc: string;
    /**
     * 주요사항보고서(접수번호)
     * @type {string}
     * @memberof DvRsResponseItemGeneralItem
     */
    rpt_rcpn: string;
}
/**
 * 
 * @export
 * @interface DvRsResponseItemIssuedSecurities
 */
export interface DvRsResponseItemIssuedSecurities {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof DvRsResponseItemIssuedSecurities
     */
    title: DvRsResponseItemIssuedSecuritiesTitleEnum;
    /**
     * 
     * @type {Array<DvRsResponseItemIssuedSecuritiesItem>}
     * @memberof DvRsResponseItemIssuedSecurities
     */
    list: Array<DvRsResponseItemIssuedSecuritiesItem>;
}

/**
 * 그룹명칭
 */
export type DvRsResponseItemIssuedSecuritiesTitleEnum =
    '발행증권'

const DvRsResponseItemIssuedSecuritiesTitleEnumValues = [
    '발행증권',
]

export function isDvRsResponseItemIssuedSecuritiesTitleEnum(value: any): value is DvRsResponseItemIssuedSecuritiesTitleEnum {
    return DvRsResponseItemIssuedSecuritiesTitleEnumValues.indexOf(value as unknown as DvRsResponseItemIssuedSecuritiesTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface DvRsResponseItemIssuedSecuritiesItem
 */
export interface DvRsResponseItemIssuedSecuritiesItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof DvRsResponseItemIssuedSecuritiesItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof DvRsResponseItemIssuedSecuritiesItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof DvRsResponseItemIssuedSecuritiesItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof DvRsResponseItemIssuedSecuritiesItem
     */
    corp_name: string;
    /**
     * 종류
     * @type {string}
     * @memberof DvRsResponseItemIssuedSecuritiesItem
     */
    kndn: string;
    /**
     * 수량
     * @type {string}
     * @memberof DvRsResponseItemIssuedSecuritiesItem
     */
    cnt: string;
    /**
     * 액면가액
     * @type {string}
     * @memberof DvRsResponseItemIssuedSecuritiesItem
     */
    fv: string;
    /**
     * 모집(매출)가액
     * @type {string}
     * @memberof DvRsResponseItemIssuedSecuritiesItem
     */
    slprc: string;
    /**
     * 모집(매출)총액
     * @type {string}
     * @memberof DvRsResponseItemIssuedSecuritiesItem
     */
    slta: string;
}
/**
 * 
 * @export
 * @interface DvRsResponseSuccess
 */
export interface DvRsResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof DvRsResponseSuccess
     */
    status: DvRsResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof DvRsResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<DvRsResponseItem>}
     * @memberof DvRsResponseSuccess
     */
    group: Array<DvRsResponseItem>;
}

/**
 * 에러 및 정보 코드
 */
export type DvRsResponseSuccessStatusEnum =
    '000'

const DvRsResponseSuccessStatusEnumValues = [
    '000',
]

export function isDvRsResponseSuccessStatusEnum(value: any): value is DvRsResponseSuccessStatusEnum {
    return DvRsResponseSuccessStatusEnumValues.indexOf(value as unknown as DvRsResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface DvRsResponseSuccessAllOf
 */
export interface DvRsResponseSuccessAllOf {
    /**
     * 
     * @type {Array<DvRsResponseItem>}
     * @memberof DvRsResponseSuccessAllOf
     */
    group: Array<DvRsResponseItem>;
}
/**
 * 
 * @export
 * @interface EleStockItem
 */
export interface EleStockItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof EleStockItem
     */
    rcept_no: string;
    /**
     * 공시 접수일자 (YYYYMMDD)
     * @type {string}
     * @memberof EleStockItem
     */
    rcept_dt: string;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof EleStockItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof EleStockItem
     */
    corp_name: string;
    /**
     * 보고자명
     * @type {string}
     * @memberof EleStockItem
     */
    repror: string;
    /**
     * 발행 회사 관계 임원(등기여부)
     * 
     * 등기임원, 비등기임원 등
     * @type {string}
     * @memberof EleStockItem
     */
    isu_exctv_rgist_at: string;
    /**
     * 발행 회사 관계 임원(직위)
     * 
     * 대표이사, 이사, 전무 등
     * @type {string}
     * @memberof EleStockItem
     */
    isu_exctv_ofcps: string;
    /**
     * 발행 회사 관계 주요 주주
     * 
     * 10%이상주주 등
     * @type {string}
     * @memberof EleStockItem
     */
    isu_main_shrholdr: string;
    /**
     * 특정 증권 등 소유 수
     * @type {string}
     * @memberof EleStockItem
     */
    sp_stock_lmp_cnt: string;
    /**
     * 특정 증권 등 소유 증감 수
     * @type {string}
     * @memberof EleStockItem
     */
    sp_stock_lmp_irds_cnt: string;
    /**
     * 특정 증권 등 소유 비율
     * @type {string}
     * @memberof EleStockItem
     */
    sp_stock_lmp_rate: string;
    /**
     * 특정 증권 등 소유 증감 비율
     * @type {string}
     * @memberof EleStockItem
     */
    sp_stock_lmp_irds_rate: string;
}
/**
 * @type EleStockResponse
 * 
 * @export
 */
export type EleStockResponse = CommonError | EleStockResponseSuccess;
/**
 * 
 * @export
 * @interface EleStockResponseSuccess
 */
export interface EleStockResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof EleStockResponseSuccess
     */
    status: EleStockResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof EleStockResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<EleStockItem>}
     * @memberof EleStockResponseSuccess
     */
    list: Array<EleStockItem>;
}

/**
 * 에러 및 정보 코드
 */
export type EleStockResponseSuccessStatusEnum =
    '000'

const EleStockResponseSuccessStatusEnumValues = [
    '000',
]

export function isEleStockResponseSuccessStatusEnum(value: any): value is EleStockResponseSuccessStatusEnum {
    return EleStockResponseSuccessStatusEnumValues.indexOf(value as unknown as EleStockResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface EleStockResponseSuccessAllOf
 */
export interface EleStockResponseSuccessAllOf {
    /**
     * 
     * @type {Array<EleStockItem>}
     * @memberof EleStockResponseSuccessAllOf
     */
    list: Array<EleStockItem>;
}
/**
 * 
 * @export
 * @interface EmpSttusItem
 */
export interface EmpSttusItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof EmpSttusItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof EmpSttusItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof EmpSttusItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof EmpSttusItem
     */
    corp_name: string;
    /**
     * 사업부분
     * @type {string}
     * @memberof EmpSttusItem
     */
    fo_bbm: string;
    /**
     * 성별
     * @type {string}
     * @memberof EmpSttusItem
     */
    sexdstn: string;
    /**
     * 개정 전 직원 수 정규직
     * @type {string}
     * @memberof EmpSttusItem
     */
    reform_bfe_emp_co_rgllbr: string;
    /**
     * 개정 전 직원 수 계약직
     * @type {string}
     * @memberof EmpSttusItem
     */
    reform_bfe_emp_co_cnttk: string;
    /**
     * 개정 전 직원 수 기타
     * @type {string}
     * @memberof EmpSttusItem
     */
    reform_bfe_emp_co_etc: string;
    /**
     * 정규직 수 (상근, 비상근)
     * @type {string}
     * @memberof EmpSttusItem
     */
    rgllbr_co: string;
    /**
     * 정규직 단시간 근로자 수 (대표이사, 이사, 사외이사 등)
     * @type {string}
     * @memberof EmpSttusItem
     */
    rgllbr_abacpt_labrr_co: string;
    /**
     * 계약직 수
     * @type {string}
     * @memberof EmpSttusItem
     */
    cnttk_co: string;
    /**
     * 계약직 단시간 근로자 수
     * @type {string}
     * @memberof EmpSttusItem
     */
    cnttk_abacpt_labrr_co: string;
    /**
     * 합계
     * @type {string}
     * @memberof EmpSttusItem
     */
    sm: string;
    /**
     * 평균 근속 연수
     * @type {string}
     * @memberof EmpSttusItem
     */
    avrg_cnwk_sdytrn: string;
    /**
     * 연간 급여 총액
     * @type {string}
     * @memberof EmpSttusItem
     */
    fyer_salary_totamt: string;
    /**
     * 1인평균 급여 액
     * @type {string}
     * @memberof EmpSttusItem
     */
    jan_salary_am: string;
    /**
     * 비고
     * @type {string}
     * @memberof EmpSttusItem
     */
    rm: string;
}
/**
 * @type EmpSttusResponse
 * 
 * @export
 */
export type EmpSttusResponse = CommonError | EmpSttusResponseSuccess;
/**
 * 
 * @export
 * @interface EmpSttusResponseSuccess
 */
export interface EmpSttusResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof EmpSttusResponseSuccess
     */
    status: EmpSttusResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof EmpSttusResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<EmpSttusItem>}
     * @memberof EmpSttusResponseSuccess
     */
    list: Array<EmpSttusItem>;
}

/**
 * 에러 및 정보 코드
 */
export type EmpSttusResponseSuccessStatusEnum =
    '000'

const EmpSttusResponseSuccessStatusEnumValues = [
    '000',
]

export function isEmpSttusResponseSuccessStatusEnum(value: any): value is EmpSttusResponseSuccessStatusEnum {
    return EmpSttusResponseSuccessStatusEnumValues.indexOf(value as unknown as EmpSttusResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface EmpSttusResponseSuccessAllOf
 */
export interface EmpSttusResponseSuccessAllOf {
    /**
     * 
     * @type {Array<EmpSttusItem>}
     * @memberof EmpSttusResponseSuccessAllOf
     */
    list: Array<EmpSttusItem>;
}
/**
 * 
 * @export
 * @interface EntrprsBilScritsNrdmpBlceItem
 */
export interface EntrprsBilScritsNrdmpBlceItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof EntrprsBilScritsNrdmpBlceItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof EntrprsBilScritsNrdmpBlceItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof EntrprsBilScritsNrdmpBlceItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof EntrprsBilScritsNrdmpBlceItem
     */
    corp_name: string;
    /**
     * 잔여만기
     * @type {string}
     * @memberof EntrprsBilScritsNrdmpBlceItem
     */
    remndr_exprtn1: string;
    /**
     * 잔여만기
     * @type {string}
     * @memberof EntrprsBilScritsNrdmpBlceItem
     */
    remndr_exprtn2: string;
    /**
     * 10일 이하
     * @type {string}
     * @memberof EntrprsBilScritsNrdmpBlceItem
     */
    de10_below: string;
    /**
     * 10일 초과 30일 이하
     * @type {string}
     * @memberof EntrprsBilScritsNrdmpBlceItem
     */
    de10_excess_de30_below: string;
    /**
     * 30일 초과 90일 이하
     * @type {string}
     * @memberof EntrprsBilScritsNrdmpBlceItem
     */
    de30_excess_de90_below: string;
    /**
     * 90일 초과 180일 이하
     * @type {string}
     * @memberof EntrprsBilScritsNrdmpBlceItem
     */
    de90_excess_de180_below: string;
    /**
     * 180일 초과 1년 이하
     * @type {string}
     * @memberof EntrprsBilScritsNrdmpBlceItem
     */
    de180_excess_yy1_below: string;
    /**
     * 1년 초과 2년 이하
     * @type {string}
     * @memberof EntrprsBilScritsNrdmpBlceItem
     */
    yy1_excess_yy2_below: string;
    /**
     * 2년 초과 3년 이하
     * @type {string}
     * @memberof EntrprsBilScritsNrdmpBlceItem
     */
    yy2_excess_yy3_below: string;
    /**
     * 3년 초과
     * @type {string}
     * @memberof EntrprsBilScritsNrdmpBlceItem
     */
    yy3_excess: string;
    /**
     * 합계
     * @type {string}
     * @memberof EntrprsBilScritsNrdmpBlceItem
     */
    sm: string;
}
/**
 * @type EntrprsBilScritsNrdmpBlceResponse
 * 
 * @export
 */
export type EntrprsBilScritsNrdmpBlceResponse = CommonError | EntrprsBilScritsNrdmpBlceResponseSuccess;
/**
 * 
 * @export
 * @interface EntrprsBilScritsNrdmpBlceResponseSuccess
 */
export interface EntrprsBilScritsNrdmpBlceResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof EntrprsBilScritsNrdmpBlceResponseSuccess
     */
    status: EntrprsBilScritsNrdmpBlceResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof EntrprsBilScritsNrdmpBlceResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<EntrprsBilScritsNrdmpBlceItem>}
     * @memberof EntrprsBilScritsNrdmpBlceResponseSuccess
     */
    list: Array<EntrprsBilScritsNrdmpBlceItem>;
}

/**
 * 에러 및 정보 코드
 */
export type EntrprsBilScritsNrdmpBlceResponseSuccessStatusEnum =
    '000'

const EntrprsBilScritsNrdmpBlceResponseSuccessStatusEnumValues = [
    '000',
]

export function isEntrprsBilScritsNrdmpBlceResponseSuccessStatusEnum(value: any): value is EntrprsBilScritsNrdmpBlceResponseSuccessStatusEnum {
    return EntrprsBilScritsNrdmpBlceResponseSuccessStatusEnumValues.indexOf(value as unknown as EntrprsBilScritsNrdmpBlceResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface EntrprsBilScritsNrdmpBlceResponseSuccessAllOf
 */
export interface EntrprsBilScritsNrdmpBlceResponseSuccessAllOf {
    /**
     * 
     * @type {Array<EntrprsBilScritsNrdmpBlceItem>}
     * @memberof EntrprsBilScritsNrdmpBlceResponseSuccessAllOf
     */
    list: Array<EntrprsBilScritsNrdmpBlceItem>;
}
/**
 * @type EstkRsResponse
 * 
 * @export
 */
export type EstkRsResponse = CommonError | EstkRsResponseSuccess;
/**
 * @type EstkRsResponseItem
 * 
 * @export
 */
export type EstkRsResponseItem = EstkRsResponseItemGeneral | EstkRsResponseItemKind | EstkRsResponseItemPurpose | EstkRsResponseItemPutbackOption | EstkRsResponseItemSeller | EstkRsResponseItemUnderwriter;
/**
 * 
 * @export
 * @interface EstkRsResponseItemGeneral
 */
export interface EstkRsResponseItemGeneral {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof EstkRsResponseItemGeneral
     */
    title: EstkRsResponseItemGeneralTitleEnum;
    /**
     * 
     * @type {Array<EstkRsResponseItemGeneralItem>}
     * @memberof EstkRsResponseItemGeneral
     */
    list: Array<EstkRsResponseItemGeneralItem>;
}

/**
 * 그룹명칭
 */
export type EstkRsResponseItemGeneralTitleEnum =
    '일반사항'

const EstkRsResponseItemGeneralTitleEnumValues = [
    '일반사항',
]

export function isEstkRsResponseItemGeneralTitleEnum(value: any): value is EstkRsResponseItemGeneralTitleEnum {
    return EstkRsResponseItemGeneralTitleEnumValues.indexOf(value as unknown as EstkRsResponseItemGeneralTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface EstkRsResponseItemGeneralItem
 */
export interface EstkRsResponseItemGeneralItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof EstkRsResponseItemGeneralItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof EstkRsResponseItemGeneralItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof EstkRsResponseItemGeneralItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof EstkRsResponseItemGeneralItem
     */
    corp_name: string;
    /**
     * 청약기일
     * @type {string}
     * @memberof EstkRsResponseItemGeneralItem
     */
    sbd: string;
    /**
     * 납입기일
     * @type {string}
     * @memberof EstkRsResponseItemGeneralItem
     */
    pymd: string;
    /**
     * 청약공고일
     * @type {string}
     * @memberof EstkRsResponseItemGeneralItem
     */
    sband: string;
    /**
     * 배정공고일
     * @type {string}
     * @memberof EstkRsResponseItemGeneralItem
     */
    asand: string;
    /**
     * 배정기준일
     * @type {string}
     * @memberof EstkRsResponseItemGeneralItem
     */
    asstd: string;
    /**
     * 신주인수권에 관한 사항(행사대상증권)
     * @type {string}
     * @memberof EstkRsResponseItemGeneralItem
     */
    exstk: string;
    /**
     * 신주인수권에 관한 사항(행사가격)
     * @type {string}
     * @memberof EstkRsResponseItemGeneralItem
     */
    exprc: string;
    /**
     * 신주인수권에 관한 사항(행사기간)
     * @type {string}
     * @memberof EstkRsResponseItemGeneralItem
     */
    expd: string;
    /**
     * 주요사항보고서(접수번호)
     * @type {string}
     * @memberof EstkRsResponseItemGeneralItem
     */
    rpt_rcpn: string;
}
/**
 * 
 * @export
 * @interface EstkRsResponseItemKind
 */
export interface EstkRsResponseItemKind {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof EstkRsResponseItemKind
     */
    title: EstkRsResponseItemKindTitleEnum;
    /**
     * 
     * @type {Array<EstkRsResponseItemKindItem>}
     * @memberof EstkRsResponseItemKind
     */
    list: Array<EstkRsResponseItemKindItem>;
}

/**
 * 그룹명칭
 */
export type EstkRsResponseItemKindTitleEnum =
    '증권의종류'

const EstkRsResponseItemKindTitleEnumValues = [
    '증권의종류',
]

export function isEstkRsResponseItemKindTitleEnum(value: any): value is EstkRsResponseItemKindTitleEnum {
    return EstkRsResponseItemKindTitleEnumValues.indexOf(value as unknown as EstkRsResponseItemKindTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface EstkRsResponseItemKindItem
 */
export interface EstkRsResponseItemKindItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof EstkRsResponseItemKindItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof EstkRsResponseItemKindItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof EstkRsResponseItemKindItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof EstkRsResponseItemKindItem
     */
    corp_name: string;
    /**
     * 증권의종류
     * @type {string}
     * @memberof EstkRsResponseItemKindItem
     */
    stksen: string;
    /**
     * 증권수량
     * @type {string}
     * @memberof EstkRsResponseItemKindItem
     */
    stkcnt: string;
    /**
     * 액면가액
     * @type {string}
     * @memberof EstkRsResponseItemKindItem
     */
    fv: string;
    /**
     * 모집(매출)가액
     * @type {string}
     * @memberof EstkRsResponseItemKindItem
     */
    slprc: string;
    /**
     * 모집(매출)총액
     * @type {string}
     * @memberof EstkRsResponseItemKindItem
     */
    slta: string;
    /**
     * 모집(매출)방법
     * @type {string}
     * @memberof EstkRsResponseItemKindItem
     */
    slmthn: string;
}
/**
 * 
 * @export
 * @interface EstkRsResponseItemPurpose
 */
export interface EstkRsResponseItemPurpose {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof EstkRsResponseItemPurpose
     */
    title: EstkRsResponseItemPurposeTitleEnum;
    /**
     * 
     * @type {Array<EstkRsResponseItemPurposeItem>}
     * @memberof EstkRsResponseItemPurpose
     */
    list: Array<EstkRsResponseItemPurposeItem>;
}

/**
 * 그룹명칭
 */
export type EstkRsResponseItemPurposeTitleEnum =
    '자금의사용목적'

const EstkRsResponseItemPurposeTitleEnumValues = [
    '자금의사용목적',
]

export function isEstkRsResponseItemPurposeTitleEnum(value: any): value is EstkRsResponseItemPurposeTitleEnum {
    return EstkRsResponseItemPurposeTitleEnumValues.indexOf(value as unknown as EstkRsResponseItemPurposeTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface EstkRsResponseItemPurposeItem
 */
export interface EstkRsResponseItemPurposeItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof EstkRsResponseItemPurposeItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof EstkRsResponseItemPurposeItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof EstkRsResponseItemPurposeItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof EstkRsResponseItemPurposeItem
     */
    corp_name: string;
    /**
     * 구분
     * @type {string}
     * @memberof EstkRsResponseItemPurposeItem
     */
    se: string;
    /**
     * 금액
     * @type {string}
     * @memberof EstkRsResponseItemPurposeItem
     */
    amt: string;
}
/**
 * 
 * @export
 * @interface EstkRsResponseItemPutbackOption
 */
export interface EstkRsResponseItemPutbackOption {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof EstkRsResponseItemPutbackOption
     */
    title: EstkRsResponseItemPutbackOptionTitleEnum;
    /**
     * 
     * @type {Array<EstkRsResponseItemPutbackOptionItem>}
     * @memberof EstkRsResponseItemPutbackOption
     */
    list: Array<EstkRsResponseItemPutbackOptionItem>;
}

/**
 * 그룹명칭
 */
export type EstkRsResponseItemPutbackOptionTitleEnum =
    '일반청약자환매청구권'

const EstkRsResponseItemPutbackOptionTitleEnumValues = [
    '일반청약자환매청구권',
]

export function isEstkRsResponseItemPutbackOptionTitleEnum(value: any): value is EstkRsResponseItemPutbackOptionTitleEnum {
    return EstkRsResponseItemPutbackOptionTitleEnumValues.indexOf(value as unknown as EstkRsResponseItemPutbackOptionTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface EstkRsResponseItemPutbackOptionItem
 */
export interface EstkRsResponseItemPutbackOptionItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof EstkRsResponseItemPutbackOptionItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof EstkRsResponseItemPutbackOptionItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof EstkRsResponseItemPutbackOptionItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof EstkRsResponseItemPutbackOptionItem
     */
    corp_name: string;
    /**
     * 부여사유
     * @type {string}
     * @memberof EstkRsResponseItemPutbackOptionItem
     */
    grtrs: string;
    /**
     * 행사가능 투자자
     * @type {string}
     * @memberof EstkRsResponseItemPutbackOptionItem
     */
    exavivr: string;
    /**
     * 부여수량
     * @type {string}
     * @memberof EstkRsResponseItemPutbackOptionItem
     */
    grtcnt: string;
    /**
     * 행사기간
     * @type {string}
     * @memberof EstkRsResponseItemPutbackOptionItem
     */
    expd: string;
    /**
     * 행사가격
     * @type {string}
     * @memberof EstkRsResponseItemPutbackOptionItem
     */
    exprc: string;
}
/**
 * 
 * @export
 * @interface EstkRsResponseItemSeller
 */
export interface EstkRsResponseItemSeller {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof EstkRsResponseItemSeller
     */
    title: EstkRsResponseItemSellerTitleEnum;
    /**
     * 
     * @type {Array<EstkRsResponseItemSellerItem>}
     * @memberof EstkRsResponseItemSeller
     */
    list: Array<EstkRsResponseItemSellerItem>;
}

/**
 * 그룹명칭
 */
export type EstkRsResponseItemSellerTitleEnum =
    '매출인에관한사항'

const EstkRsResponseItemSellerTitleEnumValues = [
    '매출인에관한사항',
]

export function isEstkRsResponseItemSellerTitleEnum(value: any): value is EstkRsResponseItemSellerTitleEnum {
    return EstkRsResponseItemSellerTitleEnumValues.indexOf(value as unknown as EstkRsResponseItemSellerTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface EstkRsResponseItemSellerItem
 */
export interface EstkRsResponseItemSellerItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof EstkRsResponseItemSellerItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof EstkRsResponseItemSellerItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof EstkRsResponseItemSellerItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof EstkRsResponseItemSellerItem
     */
    corp_name: string;
    /**
     * 보유자
     * @type {string}
     * @memberof EstkRsResponseItemSellerItem
     */
    hdr: string;
    /**
     * 회사와의관계
     * @type {string}
     * @memberof EstkRsResponseItemSellerItem
     */
    rl_cmp: string;
    /**
     * 매출전보유증권수
     * @type {string}
     * @memberof EstkRsResponseItemSellerItem
     */
    bfsl_hdstk: string;
    /**
     * 매출증권수
     * @type {string}
     * @memberof EstkRsResponseItemSellerItem
     */
    slstk: string;
    /**
     * 매출후보유증권수
     * @type {string}
     * @memberof EstkRsResponseItemSellerItem
     */
    atsl_hdstk: string;
}
/**
 * 
 * @export
 * @interface EstkRsResponseItemUnderwriter
 */
export interface EstkRsResponseItemUnderwriter {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof EstkRsResponseItemUnderwriter
     */
    title: EstkRsResponseItemUnderwriterTitleEnum;
    /**
     * 
     * @type {Array<EstkRsResponseItemUnderwriterItem>}
     * @memberof EstkRsResponseItemUnderwriter
     */
    list: Array<EstkRsResponseItemUnderwriterItem>;
}

/**
 * 그룹명칭
 */
export type EstkRsResponseItemUnderwriterTitleEnum =
    '인수인정보'

const EstkRsResponseItemUnderwriterTitleEnumValues = [
    '인수인정보',
]

export function isEstkRsResponseItemUnderwriterTitleEnum(value: any): value is EstkRsResponseItemUnderwriterTitleEnum {
    return EstkRsResponseItemUnderwriterTitleEnumValues.indexOf(value as unknown as EstkRsResponseItemUnderwriterTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface EstkRsResponseItemUnderwriterItem
 */
export interface EstkRsResponseItemUnderwriterItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof EstkRsResponseItemUnderwriterItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof EstkRsResponseItemUnderwriterItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof EstkRsResponseItemUnderwriterItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof EstkRsResponseItemUnderwriterItem
     */
    corp_name: string;
    /**
     * 인수인구분
     * @type {string}
     * @memberof EstkRsResponseItemUnderwriterItem
     */
    actsen: string;
    /**
     * 인수인명
     * @type {string}
     * @memberof EstkRsResponseItemUnderwriterItem
     */
    actnmn: string;
    /**
     * 증권의종류
     * @type {string}
     * @memberof EstkRsResponseItemUnderwriterItem
     */
    stksen: string;
    /**
     * 인수수량
     * @type {string}
     * @memberof EstkRsResponseItemUnderwriterItem
     */
    udtcnt: string;
    /**
     * 인수금액
     * @type {string}
     * @memberof EstkRsResponseItemUnderwriterItem
     */
    udtamt: string;
    /**
     * 인수대가
     * @type {string}
     * @memberof EstkRsResponseItemUnderwriterItem
     */
    udtprc: string;
    /**
     * 인수방법
     * @type {string}
     * @memberof EstkRsResponseItemUnderwriterItem
     */
    udtmth: string;
}
/**
 * 
 * @export
 * @interface EstkRsResponseSuccess
 */
export interface EstkRsResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof EstkRsResponseSuccess
     */
    status: EstkRsResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof EstkRsResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<EstkRsResponseItem>}
     * @memberof EstkRsResponseSuccess
     */
    group: Array<EstkRsResponseItem>;
}

/**
 * 에러 및 정보 코드
 */
export type EstkRsResponseSuccessStatusEnum =
    '000'

const EstkRsResponseSuccessStatusEnumValues = [
    '000',
]

export function isEstkRsResponseSuccessStatusEnum(value: any): value is EstkRsResponseSuccessStatusEnum {
    return EstkRsResponseSuccessStatusEnumValues.indexOf(value as unknown as EstkRsResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface EstkRsResponseSuccessAllOf
 */
export interface EstkRsResponseSuccessAllOf {
    /**
     * 
     * @type {Array<EstkRsResponseItem>}
     * @memberof EstkRsResponseSuccessAllOf
     */
    group: Array<EstkRsResponseItem>;
}
/**
 * 
 * @export
 * @interface ExbdIsDecsnItem
 */
export interface ExbdIsDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof ExbdIsDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    corp_name: string;
    /**
     * 사채의 종류(회차)
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    bd_tm: string;
    /**
     * 사채의 종류(종류)
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    bd_knd: string;
    /**
     * 사채의 권면(전자등록)총액 (원)
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    bd_fta: string;
    /**
     * 해외발행(권면(전자등록)총액)
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    ovis_fta: string;
    /**
     * 해외발행(권면(전자등록)총액(통화단위))
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    ovis_fta_crn: string;
    /**
     * 해외발행(기준환율등)
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    ovis_ster: string;
    /**
     * 해외발행(발행지역)
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    ovis_isar: string;
    /**
     * 해외발행(해외상장시 시장의 명칭)
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    ovis_mktnm: string;
    /**
     * 자금조달의 목적(시설자금 (원))
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    fdpp_fclt: string;
    /**
     * 자금조달의 목적(영업양수자금 (원))
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    fdpp_bsninh: string;
    /**
     * 자금조달의 목적(운영자금 (원))
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    fdpp_op: string;
    /**
     * 자금조달의 목적(채무상환자금 (원))
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    fdpp_dtrp: string;
    /**
     * 자금조달의 목적(타법인 증권 취득자금 (원))
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    fdpp_ocsa: string;
    /**
     * 자금조달의 목적(기타자금 (원))
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    fdpp_etc: string;
    /**
     * 사채의 이율(표면이자율 (%))
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    bd_intr_ex: string;
    /**
     * 사채의 이율(만기이자율 (%))
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    bd_intr_sf: string;
    /**
     * 사채만기일
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    bd_mtd: string;
    /**
     * 사채발행방법
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    bdis_mthn: string;
    /**
     * 교환에 관한 사항(교환비율 (%))
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    ex_rt: string;
    /**
     * 교환에 관한 사항(교환가액 (원/주))
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    ex_prc: string;
    /**
     * 교환에 관한 사항(교환가액 결정방법)
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    ex_prc_dmth: string;
    /**
     * 교환에 관한 사항(교환대상(종류))
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    extg: string;
    /**
     * 교환에 관한 사항(교환대상(주식수))
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    extg_stkcnt: string;
    /**
     * 교환에 관한 사항(교환대상(주식총수 대비 비율(%)))
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    extg_tisstk_vs: string;
    /**
     * 교환에 관한 사항(교환청구기간(시작일))
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    exrqpd_bgd: string;
    /**
     * 교환에 관한 사항(교환청구기간(종료일))
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    exrqpd_edd: string;
    /**
     * 청약일
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    sbd: string;
    /**
     * 납입일
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    pymd: string;
    /**
     * 대표주관회사
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    rpmcmp: string;
    /**
     * 보증기관
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    grint: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    bddd: string;
    /**
     * 사외이사 참석여부(참석 (명))
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사 참석여부(불참 (명))
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(감사위원) 참석여부
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    adt_a_atn: string;
    /**
     * 증권신고서 제출대상 여부
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    rs_sm_atn: string;
    /**
     * 제출을 면제받은 경우 그 사유
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    ex_sm_r: string;
    /**
     * 당해 사채의 해외발행과 연계된 대차거래 내역
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    ovis_ltdtl: string;
    /**
     * 공정거래위원회 신고대상 여부
     * @type {string}
     * @memberof ExbdIsDecsnItem
     */
    ftc_stt_atn: string;
}
/**
 * @type ExbdIsDecsnResponse
 * 
 * @export
 */
export type ExbdIsDecsnResponse = CommonError | ExbdIsDecsnResponseSuccess;
/**
 * 
 * @export
 * @interface ExbdIsDecsnResponseSuccess
 */
export interface ExbdIsDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof ExbdIsDecsnResponseSuccess
     */
    status: ExbdIsDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof ExbdIsDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<ExbdIsDecsnItem>}
     * @memberof ExbdIsDecsnResponseSuccess
     */
    list: Array<ExbdIsDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type ExbdIsDecsnResponseSuccessStatusEnum =
    '000'

const ExbdIsDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isExbdIsDecsnResponseSuccessStatusEnum(value: any): value is ExbdIsDecsnResponseSuccessStatusEnum {
    return ExbdIsDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as ExbdIsDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface ExbdIsDecsnResponseSuccessAllOf
 */
export interface ExbdIsDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<ExbdIsDecsnItem>}
     * @memberof ExbdIsDecsnResponseSuccessAllOf
     */
    list: Array<ExbdIsDecsnItem>;
}
/**
 * 
 * @export
 * @interface ExctvSttusItem
 */
export interface ExctvSttusItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof ExctvSttusItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof ExctvSttusItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof ExctvSttusItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof ExctvSttusItem
     */
    corp_name: string;
    /**
     * 성명
     * @type {string}
     * @memberof ExctvSttusItem
     */
    name: string;
    /**
     * 성별
     * @type {string}
     * @memberof ExctvSttusItem
     */
    sexdstn: string;
    /**
     * 출생 년월 (YYYY년 MM월)
     * @type {string}
     * @memberof ExctvSttusItem
     */
    birth_ym: string;
    /**
     * 직위 (회장, 사장, 사외이사 등)
     * @type {string}
     * @memberof ExctvSttusItem
     */
    ofcps: string;
    /**
     * 등기임원 여부 (등기임원, 미등기임원 등)
     * @type {string}
     * @memberof ExctvSttusItem
     */
    rgist_exctv_at: string;
    /**
     * 상근 여부 (상근, 비상근)
     * @type {string}
     * @memberof ExctvSttusItem
     */
    fte_at: string;
    /**
     * 담당 업무 (대표이사, 이사, 사외이사 등)
     * @type {string}
     * @memberof ExctvSttusItem
     */
    chrg_job: string;
    /**
     * 주요 경력
     * @type {string}
     * @memberof ExctvSttusItem
     */
    main_carreer: string;
    /**
     * 최대 주주 관계
     * @type {string}
     * @memberof ExctvSttusItem
     */
    mxmm_shrholdr_relate: string;
    /**
     * 재직 기간
     * @type {string}
     * @memberof ExctvSttusItem
     */
    hffc_pd: string;
    /**
     * 임기 만료 일
     * @type {string}
     * @memberof ExctvSttusItem
     */
    tenure_end_on: string;
}
/**
 * @type ExctvSttusResponse
 * 
 * @export
 */
export type ExctvSttusResponse = CommonError | ExctvSttusResponseSuccess;
/**
 * 
 * @export
 * @interface ExctvSttusResponseSuccess
 */
export interface ExctvSttusResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof ExctvSttusResponseSuccess
     */
    status: ExctvSttusResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof ExctvSttusResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<ExctvSttusItem>}
     * @memberof ExctvSttusResponseSuccess
     */
    list: Array<ExctvSttusItem>;
}

/**
 * 에러 및 정보 코드
 */
export type ExctvSttusResponseSuccessStatusEnum =
    '000'

const ExctvSttusResponseSuccessStatusEnumValues = [
    '000',
]

export function isExctvSttusResponseSuccessStatusEnum(value: any): value is ExctvSttusResponseSuccessStatusEnum {
    return ExctvSttusResponseSuccessStatusEnumValues.indexOf(value as unknown as ExctvSttusResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface ExctvSttusResponseSuccessAllOf
 */
export interface ExctvSttusResponseSuccessAllOf {
    /**
     * 
     * @type {Array<ExctvSttusItem>}
     * @memberof ExctvSttusResponseSuccessAllOf
     */
    list: Array<ExctvSttusItem>;
}
/**
 * @type ExtrRsResponse
 * 
 * @export
 */
export type ExtrRsResponse = CommonError | ExtrRsResponseSuccess;
/**
 * @type ExtrRsResponseItem
 * 
 * @export
 */
export type ExtrRsResponseItem = ExtrRsResponseItemAboutCompany | ExtrRsResponseItemGeneral | ExtrRsResponseItemIssuedSecurities;
/**
 * 
 * @export
 * @interface ExtrRsResponseItemAboutCompany
 */
export interface ExtrRsResponseItemAboutCompany {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof ExtrRsResponseItemAboutCompany
     */
    title: ExtrRsResponseItemAboutCompanyTitleEnum;
    /**
     * 
     * @type {Array<ExtrRsResponseItemAboutCompanyItem>}
     * @memberof ExtrRsResponseItemAboutCompany
     */
    list: Array<ExtrRsResponseItemAboutCompanyItem>;
}

/**
 * 그룹명칭
 */
export type ExtrRsResponseItemAboutCompanyTitleEnum =
    '회사개요'

const ExtrRsResponseItemAboutCompanyTitleEnumValues = [
    '회사개요',
]

export function isExtrRsResponseItemAboutCompanyTitleEnum(value: any): value is ExtrRsResponseItemAboutCompanyTitleEnum {
    return ExtrRsResponseItemAboutCompanyTitleEnumValues.indexOf(value as unknown as ExtrRsResponseItemAboutCompanyTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface ExtrRsResponseItemAboutCompanyItem
 */
export interface ExtrRsResponseItemAboutCompanyItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof ExtrRsResponseItemAboutCompanyItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof ExtrRsResponseItemAboutCompanyItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof ExtrRsResponseItemAboutCompanyItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof ExtrRsResponseItemAboutCompanyItem
     */
    cmpnm: string;
    /**
     * 구분
     * @type {string}
     * @memberof ExtrRsResponseItemAboutCompanyItem
     */
    sen: string;
    /**
     * 총자산
     * @type {string}
     * @memberof ExtrRsResponseItemAboutCompanyItem
     */
    tast: string;
    /**
     * 자본금
     * @type {string}
     * @memberof ExtrRsResponseItemAboutCompanyItem
     */
    cpt: string;
    /**
     * 발행주식수(주식의종류)
     * @type {string}
     * @memberof ExtrRsResponseItemAboutCompanyItem
     */
    isstk_knd: string;
    /**
     * 발행주식수(주식수)
     * @type {string}
     * @memberof ExtrRsResponseItemAboutCompanyItem
     */
    isstk_cnt: string;
}
/**
 * 
 * @export
 * @interface ExtrRsResponseItemGeneral
 */
export interface ExtrRsResponseItemGeneral {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof ExtrRsResponseItemGeneral
     */
    title: ExtrRsResponseItemGeneralTitleEnum;
    /**
     * 
     * @type {Array<ExtrRsResponseItemGeneralItem>}
     * @memberof ExtrRsResponseItemGeneral
     */
    list: Array<ExtrRsResponseItemGeneralItem>;
}

/**
 * 그룹명칭
 */
export type ExtrRsResponseItemGeneralTitleEnum =
    '일반사항'

const ExtrRsResponseItemGeneralTitleEnumValues = [
    '일반사항',
]

export function isExtrRsResponseItemGeneralTitleEnum(value: any): value is ExtrRsResponseItemGeneralTitleEnum {
    return ExtrRsResponseItemGeneralTitleEnumValues.indexOf(value as unknown as ExtrRsResponseItemGeneralTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface ExtrRsResponseItemGeneralItem
 */
export interface ExtrRsResponseItemGeneralItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof ExtrRsResponseItemGeneralItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof ExtrRsResponseItemGeneralItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof ExtrRsResponseItemGeneralItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof ExtrRsResponseItemGeneralItem
     */
    corp_name: string;
    /**
     * 형태
     * @type {string}
     * @memberof ExtrRsResponseItemGeneralItem
     */
    stn: string;
    /**
     * 이사회결의일
     * @type {string}
     * @memberof ExtrRsResponseItemGeneralItem
     */
    bddd: string;
    /**
     * 계약일
     * @type {string}
     * @memberof ExtrRsResponseItemGeneralItem
     */
    ctrd: string;
    /**
     * 주주총회를 위한 주주확정일
     * @type {string}
     * @memberof ExtrRsResponseItemGeneralItem
     */
    gmtsck_shddstd: string;
    /**
     * 승인을 위한 주주총회일
     * @type {string}
     * @memberof ExtrRsResponseItemGeneralItem
     */
    ap_gmtsck: string;
    /**
     * 주식매수청구권 행사 기간 및 가격(시작일)
     * @type {string}
     * @memberof ExtrRsResponseItemGeneralItem
     */
    aprskh_pd_bgd: string;
    /**
     * 주식매수청구권 행사 기간 및 가격(종료일)
     * @type {string}
     * @memberof ExtrRsResponseItemGeneralItem
     */
    aprskh_pd_edd: string;
    /**
     * 주식매수청구권 행사 기간 및 가격((주식매수청구가격-회사제시))
     * @type {string}
     * @memberof ExtrRsResponseItemGeneralItem
     */
    aprskh_prc: string;
    /**
     * 합병기일등
     * @type {string}
     * @memberof ExtrRsResponseItemGeneralItem
     */
    mgdt_etc: string;
    /**
     * 비율 또는 가액
     * @type {string}
     * @memberof ExtrRsResponseItemGeneralItem
     */
    rt_vl: string;
    /**
     * 외부평가기관
     * @type {string}
     * @memberof ExtrRsResponseItemGeneralItem
     */
    exevl_int: string;
    /**
     * 지급 교부금 등
     * @type {string}
     * @memberof ExtrRsResponseItemGeneralItem
     */
    grtmn_etc: string;
    /**
     * 주요사항보고서(접수번호)
     * @type {string}
     * @memberof ExtrRsResponseItemGeneralItem
     */
    rpt_rcpn: string;
}
/**
 * 
 * @export
 * @interface ExtrRsResponseItemIssuedSecurities
 */
export interface ExtrRsResponseItemIssuedSecurities {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof ExtrRsResponseItemIssuedSecurities
     */
    title: ExtrRsResponseItemIssuedSecuritiesTitleEnum;
    /**
     * 
     * @type {Array<ExtrRsResponseItemIssuedSecuritiesItem>}
     * @memberof ExtrRsResponseItemIssuedSecurities
     */
    list: Array<ExtrRsResponseItemIssuedSecuritiesItem>;
}

/**
 * 그룹명칭
 */
export type ExtrRsResponseItemIssuedSecuritiesTitleEnum =
    '발행증권'

const ExtrRsResponseItemIssuedSecuritiesTitleEnumValues = [
    '발행증권',
]

export function isExtrRsResponseItemIssuedSecuritiesTitleEnum(value: any): value is ExtrRsResponseItemIssuedSecuritiesTitleEnum {
    return ExtrRsResponseItemIssuedSecuritiesTitleEnumValues.indexOf(value as unknown as ExtrRsResponseItemIssuedSecuritiesTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface ExtrRsResponseItemIssuedSecuritiesItem
 */
export interface ExtrRsResponseItemIssuedSecuritiesItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof ExtrRsResponseItemIssuedSecuritiesItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof ExtrRsResponseItemIssuedSecuritiesItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof ExtrRsResponseItemIssuedSecuritiesItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof ExtrRsResponseItemIssuedSecuritiesItem
     */
    corp_name: string;
    /**
     * 종류
     * @type {string}
     * @memberof ExtrRsResponseItemIssuedSecuritiesItem
     */
    kndn: string;
    /**
     * 수량
     * @type {string}
     * @memberof ExtrRsResponseItemIssuedSecuritiesItem
     */
    cnt: string;
    /**
     * 액면가액
     * @type {string}
     * @memberof ExtrRsResponseItemIssuedSecuritiesItem
     */
    fv: string;
    /**
     * 모집(매출)가액
     * @type {string}
     * @memberof ExtrRsResponseItemIssuedSecuritiesItem
     */
    slprc: string;
    /**
     * 모집(매출)총액
     * @type {string}
     * @memberof ExtrRsResponseItemIssuedSecuritiesItem
     */
    slta: string;
}
/**
 * 
 * @export
 * @interface ExtrRsResponseSuccess
 */
export interface ExtrRsResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof ExtrRsResponseSuccess
     */
    status: ExtrRsResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof ExtrRsResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<ExtrRsResponseItem>}
     * @memberof ExtrRsResponseSuccess
     */
    group?: Array<ExtrRsResponseItem>;
}

/**
 * 에러 및 정보 코드
 */
export type ExtrRsResponseSuccessStatusEnum =
    '000'

const ExtrRsResponseSuccessStatusEnumValues = [
    '000',
]

export function isExtrRsResponseSuccessStatusEnum(value: any): value is ExtrRsResponseSuccessStatusEnum {
    return ExtrRsResponseSuccessStatusEnumValues.indexOf(value as unknown as ExtrRsResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface ExtrRsResponseSuccessAllOf
 */
export interface ExtrRsResponseSuccessAllOf {
    /**
     * 
     * @type {Array<ExtrRsResponseItem>}
     * @memberof ExtrRsResponseSuccessAllOf
     */
    group?: Array<ExtrRsResponseItem>;
}
/**
 * 
 * @export
 * @interface FnlttMultiAcntItem
 */
export interface FnlttMultiAcntItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof FnlttMultiAcntItem
     */
    rcept_no: string;
    /**
     * 사업연도(4자리)
     * @type {string}
     * @memberof FnlttMultiAcntItem
     */
    bsns_year: string;
    /**
     * 종목코드
     * @type {string}
     * @memberof FnlttMultiAcntItem
     */
    stock_code: string;
    /**
     * 
     * @type {ReportCode}
     * @memberof FnlttMultiAcntItem
     */
    reprt_code: ReportCode;
    /**
     * 계정명
     * @type {string}
     * @memberof FnlttMultiAcntItem
     */
    account_nm: string;
    /**
     * 개별/연결구분
     * - CFS: 연결재무제표
     * - OFS: 재무제표
     * @type {string}
     * @memberof FnlttMultiAcntItem
     */
    fs_div: FnlttMultiAcntItemFsDivEnum;
    /**
     * 개별/연결명
     * ex) 연결재무제표 또는 재무제표 출력
     * @type {string}
     * @memberof FnlttMultiAcntItem
     */
    fs_nm: string;
    /**
     * 재무제표구분
     * - BS: 재무상태표
     * - IS: 손익계산서
     * @type {string}
     * @memberof FnlttMultiAcntItem
     */
    sj_div: FnlttMultiAcntItemSjDivEnum;
    /**
     * 재무제표명
     * ex) 재무상태표 또는 손익계산서 출력
     * @type {string}
     * @memberof FnlttMultiAcntItem
     */
    sj_nm: string;
    /**
     * 당기명
     * @type {string}
     * @memberof FnlttMultiAcntItem
     */
    thstrm_nm: string;
    /**
     * 당기일자
     * @type {string}
     * @memberof FnlttMultiAcntItem
     */
    thstrm_dt: string;
    /**
     * 당기금액
     * @type {string}
     * @memberof FnlttMultiAcntItem
     */
    thstrm_amount: string;
    /**
     * 당기누적금액
     * @type {string}
     * @memberof FnlttMultiAcntItem
     */
    thstrm_add_amount: string;
    /**
     * 전기명
     * @type {string}
     * @memberof FnlttMultiAcntItem
     */
    frmtrm_nm: string;
    /**
     * 전기일자
     * @type {string}
     * @memberof FnlttMultiAcntItem
     */
    frmtrm_dt: string;
    /**
     * 전기금액
     * @type {string}
     * @memberof FnlttMultiAcntItem
     */
    frmtrm_amount: string;
    /**
     * 전기누적금액
     * @type {string}
     * @memberof FnlttMultiAcntItem
     */
    frmtrm_add_amount: string;
    /**
     * 전전기명 (※ 사업보고서의 경우에만 출력)
     * @type {string}
     * @memberof FnlttMultiAcntItem
     */
    bfefrmtrm_nm?: string;
    /**
     * 전전기일자 (※ 사업보고서의 경우에만 출력)
     * @type {string}
     * @memberof FnlttMultiAcntItem
     */
    bfefrmtrm_dt?: string;
    /**
     * 전전기금액 (※ 사업보고서의 경우에만 출력)
     * @type {string}
     * @memberof FnlttMultiAcntItem
     */
    bfefrmtrm_amount?: string;
    /**
     * 계정과목 정렬순서
     * @type {string}
     * @memberof FnlttMultiAcntItem
     */
    ord: string;
    /**
     * 통화 단위
     * @type {string}
     * @memberof FnlttMultiAcntItem
     */
    currency: string;
}

/**
 * 개별/연결구분
 * - CFS: 연결재무제표
 * - OFS: 재무제표
 */
export type FnlttMultiAcntItemFsDivEnum =
    'CFS'|
    'OFS'

const FnlttMultiAcntItemFsDivEnumValues = [
    'CFS',
    'OFS',
]

export function isFnlttMultiAcntItemFsDivEnum(value: any): value is FnlttMultiAcntItemFsDivEnum {
    return FnlttMultiAcntItemFsDivEnumValues.indexOf(value as unknown as FnlttMultiAcntItemFsDivEnum) !== -1
}

/**
 * 재무제표구분
 * - BS: 재무상태표
 * - IS: 손익계산서
 */
export type FnlttMultiAcntItemSjDivEnum =
    'BS'|
    'IS'

const FnlttMultiAcntItemSjDivEnumValues = [
    'BS',
    'IS',
]

export function isFnlttMultiAcntItemSjDivEnum(value: any): value is FnlttMultiAcntItemSjDivEnum {
    return FnlttMultiAcntItemSjDivEnumValues.indexOf(value as unknown as FnlttMultiAcntItemSjDivEnum) !== -1
}


/**
 * @type FnlttMultiAcntResponse
 * 
 * @export
 */
export type FnlttMultiAcntResponse = CommonError | FnlttMultiAcntResponseSuccess;
/**
 * 
 * @export
 * @interface FnlttMultiAcntResponseSuccess
 */
export interface FnlttMultiAcntResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof FnlttMultiAcntResponseSuccess
     */
    status: FnlttMultiAcntResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof FnlttMultiAcntResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<FnlttMultiAcntItem>}
     * @memberof FnlttMultiAcntResponseSuccess
     */
    list: Array<FnlttMultiAcntItem>;
}

/**
 * 에러 및 정보 코드
 */
export type FnlttMultiAcntResponseSuccessStatusEnum =
    '000'

const FnlttMultiAcntResponseSuccessStatusEnumValues = [
    '000',
]

export function isFnlttMultiAcntResponseSuccessStatusEnum(value: any): value is FnlttMultiAcntResponseSuccessStatusEnum {
    return FnlttMultiAcntResponseSuccessStatusEnumValues.indexOf(value as unknown as FnlttMultiAcntResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface FnlttMultiAcntResponseSuccessAllOf
 */
export interface FnlttMultiAcntResponseSuccessAllOf {
    /**
     * 
     * @type {Array<FnlttMultiAcntItem>}
     * @memberof FnlttMultiAcntResponseSuccessAllOf
     */
    list: Array<FnlttMultiAcntItem>;
}
/**
 * 
 * @export
 * @interface FnlttSinglAcntAllItem
 */
export interface FnlttSinglAcntAllItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof FnlttSinglAcntAllItem
     */
    rcept_no: string;
    /**
     * 
     * @type {ReportCode}
     * @memberof FnlttSinglAcntAllItem
     */
    reprt_code: ReportCode;
    /**
     * 사업연도(4자리)
     * @type {string}
     * @memberof FnlttSinglAcntAllItem
     */
    bsns_year: string;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof FnlttSinglAcntAllItem
     */
    corp_code: string;
    /**
     * 재무제표구분
     * - BS: 재무상태표
     * - IS: 손익계산서
     * - CIS: 포괄손익계산서
     * - CF: 현금흐름표
     * - SCE: 자본변동표
     * @type {string}
     * @memberof FnlttSinglAcntAllItem
     */
    sj_div: FnlttSinglAcntAllItemSjDivEnum;
    /**
     * 재무제표명
     * ex) 재무상태표 또는 손익계산서 출력
     * @type {string}
     * @memberof FnlttSinglAcntAllItem
     */
    sj_nm: string;
    /**
     * 계정ID
     * XBRL 표준계정ID ※ 표준계정ID가 아닐경우 ""-표준계정코드 미사용-"" 표시
     * @type {string}
     * @memberof FnlttSinglAcntAllItem
     */
    account_id: string;
    /**
     * 계정명
     * @type {string}
     * @memberof FnlttSinglAcntAllItem
     */
    account_nm: string;
    /**
     * ※ 자본변동표에만 출력
     * ex) 계정 상세명칭 예시 - 자본 [member]|지배기업 소유주지분 - 자본 [member]|지배기업 소유주지분|기타포괄손익누계액 [member]
     * @type {string}
     * @memberof FnlttSinglAcntAllItem
     */
    account_detail: string;
    /**
     * 당기명
     * @type {string}
     * @memberof FnlttSinglAcntAllItem
     */
    thstrm_nm: string;
    /**
     * 당기금액
     * ※ 분/반기 보고서이면서 (포괄)손익계산서 일 경우 [3개월] 금액
     * @type {string}
     * @memberof FnlttSinglAcntAllItem
     */
    thstm_amount?: string;
    /**
     * 당기누적금액
     * @type {string}
     * @memberof FnlttSinglAcntAllItem
     */
    thstrm_add_amount: string;
    /**
     * 전기명
     * @type {string}
     * @memberof FnlttSinglAcntAllItem
     */
    frmtrm_nm: string;
    /**
     * 전기금액
     * @type {string}
     * @memberof FnlttSinglAcntAllItem
     */
    frmtrm_amount: string;
    /**
     * 전기명(분기/반기)
     * @type {string}
     * @memberof FnlttSinglAcntAllItem
     */
    frmtrm_q_nm?: string;
    /**
     * 전기금액(분기/반기) ( 분/반기 보고서이면서 (포괄)손익계산서 일 경우 [3개월] 금액)
     * @type {string}
     * @memberof FnlttSinglAcntAllItem
     */
    frmtrm_q_amount?: string;
    /**
     * 전기누적금액
     * @type {string}
     * @memberof FnlttSinglAcntAllItem
     */
    frmtrm_add_amount: string;
    /**
     * 전전기명 (※ 사업보고서의 경우에만 출력)
     * @type {string}
     * @memberof FnlttSinglAcntAllItem
     */
    bfefrmtrm_nm?: string;
    /**
     * 전전기금액 (※ 사업보고서의 경우에만 출력)
     * @type {string}
     * @memberof FnlttSinglAcntAllItem
     */
    bfefrmtrm_amount?: string;
    /**
     * 계정과목 정렬순서
     * @type {string}
     * @memberof FnlttSinglAcntAllItem
     */
    ord: string;
    /**
     * 통화 단위
     * @type {string}
     * @memberof FnlttSinglAcntAllItem
     */
    currency: string;
}

/**
 * 재무제표구분
 * - BS: 재무상태표
 * - IS: 손익계산서
 * - CIS: 포괄손익계산서
 * - CF: 현금흐름표
 * - SCE: 자본변동표
 */
export type FnlttSinglAcntAllItemSjDivEnum =
    'BS'|
    'IS'|
    'CIS'|
    'CF'|
    'SCE'

const FnlttSinglAcntAllItemSjDivEnumValues = [
    'BS',
    'IS',
    'CIS',
    'CF',
    'SCE',
]

export function isFnlttSinglAcntAllItemSjDivEnum(value: any): value is FnlttSinglAcntAllItemSjDivEnum {
    return FnlttSinglAcntAllItemSjDivEnumValues.indexOf(value as unknown as FnlttSinglAcntAllItemSjDivEnum) !== -1
}


/**
 * @type FnlttSinglAcntAllResponse
 * 
 * @export
 */
export type FnlttSinglAcntAllResponse = CommonError | FnlttSinglAcntAllResponseSuccess;
/**
 * 
 * @export
 * @interface FnlttSinglAcntAllResponseSuccess
 */
export interface FnlttSinglAcntAllResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof FnlttSinglAcntAllResponseSuccess
     */
    status: FnlttSinglAcntAllResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof FnlttSinglAcntAllResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<FnlttSinglAcntAllItem>}
     * @memberof FnlttSinglAcntAllResponseSuccess
     */
    list: Array<FnlttSinglAcntAllItem>;
}

/**
 * 에러 및 정보 코드
 */
export type FnlttSinglAcntAllResponseSuccessStatusEnum =
    '000'

const FnlttSinglAcntAllResponseSuccessStatusEnumValues = [
    '000',
]

export function isFnlttSinglAcntAllResponseSuccessStatusEnum(value: any): value is FnlttSinglAcntAllResponseSuccessStatusEnum {
    return FnlttSinglAcntAllResponseSuccessStatusEnumValues.indexOf(value as unknown as FnlttSinglAcntAllResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface FnlttSinglAcntAllResponseSuccessAllOf
 */
export interface FnlttSinglAcntAllResponseSuccessAllOf {
    /**
     * 
     * @type {Array<FnlttSinglAcntAllItem>}
     * @memberof FnlttSinglAcntAllResponseSuccessAllOf
     */
    list: Array<FnlttSinglAcntAllItem>;
}
/**
 * 
 * @export
 * @interface FnlttSinglAcntItem
 */
export interface FnlttSinglAcntItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof FnlttSinglAcntItem
     */
    rcept_no: string;
    /**
     * 사업연도(4자리)
     * @type {string}
     * @memberof FnlttSinglAcntItem
     */
    bsns_year: string;
    /**
     * 종목코드
     * @type {string}
     * @memberof FnlttSinglAcntItem
     */
    stock_code: string;
    /**
     * 
     * @type {ReportCode}
     * @memberof FnlttSinglAcntItem
     */
    reprt_code: ReportCode;
    /**
     * 계정명
     * @type {string}
     * @memberof FnlttSinglAcntItem
     */
    account_nm: string;
    /**
     * 개별/연결구분
     * - CFS: 연결재무제표
     * - OFS: 재무제표
     * @type {string}
     * @memberof FnlttSinglAcntItem
     */
    fs_div: FnlttSinglAcntItemFsDivEnum;
    /**
     * 개별/연결명
     * ex) 연결재무제표 또는 재무제표 출력
     * @type {string}
     * @memberof FnlttSinglAcntItem
     */
    fs_nm: string;
    /**
     * 재무제표구분
     * - BS: 재무상태표
     * - IS: 손익계산서
     * @type {string}
     * @memberof FnlttSinglAcntItem
     */
    sj_div: FnlttSinglAcntItemSjDivEnum;
    /**
     * 재무제표명
     * ex) 재무상태표 또는 손익계산서 출력
     * @type {string}
     * @memberof FnlttSinglAcntItem
     */
    sj_nm: string;
    /**
     * 당기명
     * @type {string}
     * @memberof FnlttSinglAcntItem
     */
    thstrm_nm: string;
    /**
     * 당기일자
     * @type {string}
     * @memberof FnlttSinglAcntItem
     */
    thstrm_dt: string;
    /**
     * 당기금액
     * @type {string}
     * @memberof FnlttSinglAcntItem
     */
    thstrm_amount: string;
    /**
     * 당기누적금액
     * @type {string}
     * @memberof FnlttSinglAcntItem
     */
    thstrm_add_amount: string;
    /**
     * 전기명
     * @type {string}
     * @memberof FnlttSinglAcntItem
     */
    frmtrm_nm: string;
    /**
     * 전기일자
     * @type {string}
     * @memberof FnlttSinglAcntItem
     */
    frmtrm_dt: string;
    /**
     * 전기금액
     * @type {string}
     * @memberof FnlttSinglAcntItem
     */
    frmtrm_amount: string;
    /**
     * 전기누적금액
     * @type {string}
     * @memberof FnlttSinglAcntItem
     */
    frmtrm_add_amount: string;
    /**
     * 전전기명 (※ 사업보고서의 경우에만 출력)
     * @type {string}
     * @memberof FnlttSinglAcntItem
     */
    bfefrmtrm_nm?: string;
    /**
     * 전전기일자 (※ 사업보고서의 경우에만 출력)
     * @type {string}
     * @memberof FnlttSinglAcntItem
     */
    bfefrmtrm_dt?: string;
    /**
     * 전전기금액 (※ 사업보고서의 경우에만 출력)
     * @type {string}
     * @memberof FnlttSinglAcntItem
     */
    bfefrmtrm_amount?: string;
    /**
     * 계정과목 정렬순서
     * @type {string}
     * @memberof FnlttSinglAcntItem
     */
    ord: string;
    /**
     * 통화 단위
     * @type {string}
     * @memberof FnlttSinglAcntItem
     */
    currency: string;
}

/**
 * 개별/연결구분
 * - CFS: 연결재무제표
 * - OFS: 재무제표
 */
export type FnlttSinglAcntItemFsDivEnum =
    'CFS'|
    'OFS'

const FnlttSinglAcntItemFsDivEnumValues = [
    'CFS',
    'OFS',
]

export function isFnlttSinglAcntItemFsDivEnum(value: any): value is FnlttSinglAcntItemFsDivEnum {
    return FnlttSinglAcntItemFsDivEnumValues.indexOf(value as unknown as FnlttSinglAcntItemFsDivEnum) !== -1
}

/**
 * 재무제표구분
 * - BS: 재무상태표
 * - IS: 손익계산서
 */
export type FnlttSinglAcntItemSjDivEnum =
    'BS'|
    'IS'

const FnlttSinglAcntItemSjDivEnumValues = [
    'BS',
    'IS',
]

export function isFnlttSinglAcntItemSjDivEnum(value: any): value is FnlttSinglAcntItemSjDivEnum {
    return FnlttSinglAcntItemSjDivEnumValues.indexOf(value as unknown as FnlttSinglAcntItemSjDivEnum) !== -1
}


/**
 * @type FnlttSinglAcntResponse
 * 
 * @export
 */
export type FnlttSinglAcntResponse = CommonError | FnlttSinglAcntResponseSuccess;
/**
 * 
 * @export
 * @interface FnlttSinglAcntResponseSuccess
 */
export interface FnlttSinglAcntResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof FnlttSinglAcntResponseSuccess
     */
    status: FnlttSinglAcntResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof FnlttSinglAcntResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<FnlttSinglAcntItem>}
     * @memberof FnlttSinglAcntResponseSuccess
     */
    list: Array<FnlttSinglAcntItem>;
}

/**
 * 에러 및 정보 코드
 */
export type FnlttSinglAcntResponseSuccessStatusEnum =
    '000'

const FnlttSinglAcntResponseSuccessStatusEnumValues = [
    '000',
]

export function isFnlttSinglAcntResponseSuccessStatusEnum(value: any): value is FnlttSinglAcntResponseSuccessStatusEnum {
    return FnlttSinglAcntResponseSuccessStatusEnumValues.indexOf(value as unknown as FnlttSinglAcntResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface FnlttSinglAcntResponseSuccessAllOf
 */
export interface FnlttSinglAcntResponseSuccessAllOf {
    /**
     * 
     * @type {Array<FnlttSinglAcntItem>}
     * @memberof FnlttSinglAcntResponseSuccessAllOf
     */
    list: Array<FnlttSinglAcntItem>;
}
/**
 * 
 * @export
 * @interface FricDecsnItem
 */
export interface FricDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof FricDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof FricDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof FricDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof FricDecsnItem
     */
    corp_name: string;
    /**
     * 신주의 종류와 수(보통주식 (주))
     * @type {string}
     * @memberof FricDecsnItem
     */
    nstk_ostk_cnt: string;
    /**
     * 신주의 종류와 수(기타주식 (주))
     * @type {string}
     * @memberof FricDecsnItem
     */
    nstk_estk_cnt: string;
    /**
     * 1주당 액면가액 (원)
     * @type {string}
     * @memberof FricDecsnItem
     */
    fv_ps: string;
    /**
     * 증자전 발행주식총수 (주)(보통주식 (주))
     * @type {string}
     * @memberof FricDecsnItem
     */
    bfic_tisstk_ostk: string;
    /**
     * 증자전 발행주식총수 (주)(기타주식 (주))
     * @type {string}
     * @memberof FricDecsnItem
     */
    bfic_tisstk_estk: string;
    /**
     * 신주배정기준일
     * @type {string}
     * @memberof FricDecsnItem
     */
    nstk_asstd: string;
    /**
     * 1주당 신주배정 주식수(보통주식 (주))
     * @type {string}
     * @memberof FricDecsnItem
     */
    nstk_ascnt_ps_ostk: string;
    /**
     * 1주당 신주배정 주식수(기타주식 (주))
     * @type {string}
     * @memberof FricDecsnItem
     */
    nstk_ascnt_ps_estk: string;
    /**
     * 신주의 배당기산일
     * @type {string}
     * @memberof FricDecsnItem
     */
    nstk_dividrk: string;
    /**
     * 신주권교부예정일
     * @type {string}
     * @memberof FricDecsnItem
     */
    nstk_dlprd: string;
    /**
     * 신주의 상장 예정일
     * @type {string}
     * @memberof FricDecsnItem
     */
    nstk_lstprd: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof FricDecsnItem
     */
    bddd: string;
    /**
     * 사외이사 참석여부(참석(명))
     * @type {string}
     * @memberof FricDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사 참석여부(불참(명))
     * @type {string}
     * @memberof FricDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(감사위원)참석 여부
     * @type {string}
     * @memberof FricDecsnItem
     */
    adt_a_atn: string;
}
/**
 * @type FricDecsnResponse
 * 
 * @export
 */
export type FricDecsnResponse = CommonError | FricDecsnResponseSuccess;
/**
 * 
 * @export
 * @interface FricDecsnResponseSuccess
 */
export interface FricDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof FricDecsnResponseSuccess
     */
    status: FricDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof FricDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<FricDecsnItem>}
     * @memberof FricDecsnResponseSuccess
     */
    list: Array<FricDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type FricDecsnResponseSuccessStatusEnum =
    '000'

const FricDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isFricDecsnResponseSuccessStatusEnum(value: any): value is FricDecsnResponseSuccessStatusEnum {
    return FricDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as FricDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface FricDecsnResponseSuccessAllOf
 */
export interface FricDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<FricDecsnItem>}
     * @memberof FricDecsnResponseSuccessAllOf
     */
    list: Array<FricDecsnItem>;
}
/**
 * 
 * @export
 * @interface HmvAuditAllSttusItem
 */
export interface HmvAuditAllSttusItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof HmvAuditAllSttusItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof HmvAuditAllSttusItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof HmvAuditAllSttusItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof HmvAuditAllSttusItem
     */
    corp_name: string;
    /**
     * 인원수
     * @type {string}
     * @memberof HmvAuditAllSttusItem
     */
    nmpr: string;
    /**
     * 보수 총액
     * @type {string}
     * @memberof HmvAuditAllSttusItem
     */
    mendng_totamt: string;
    /**
     * 1인 평균 보수액
     * @type {string}
     * @memberof HmvAuditAllSttusItem
     */
    jan_avrg_mendng_am: string;
    /**
     * 비고
     * @type {string}
     * @memberof HmvAuditAllSttusItem
     */
    rm: string;
}
/**
 * @type HmvAuditAllSttusResponse
 * 
 * @export
 */
export type HmvAuditAllSttusResponse = CommonError | HmvAuditAllSttusResponseSuccess;
/**
 * 
 * @export
 * @interface HmvAuditAllSttusResponseSuccess
 */
export interface HmvAuditAllSttusResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof HmvAuditAllSttusResponseSuccess
     */
    status: HmvAuditAllSttusResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof HmvAuditAllSttusResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<HmvAuditAllSttusItem>}
     * @memberof HmvAuditAllSttusResponseSuccess
     */
    list: Array<HmvAuditAllSttusItem>;
}

/**
 * 에러 및 정보 코드
 */
export type HmvAuditAllSttusResponseSuccessStatusEnum =
    '000'

const HmvAuditAllSttusResponseSuccessStatusEnumValues = [
    '000',
]

export function isHmvAuditAllSttusResponseSuccessStatusEnum(value: any): value is HmvAuditAllSttusResponseSuccessStatusEnum {
    return HmvAuditAllSttusResponseSuccessStatusEnumValues.indexOf(value as unknown as HmvAuditAllSttusResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface HmvAuditAllSttusResponseSuccessAllOf
 */
export interface HmvAuditAllSttusResponseSuccessAllOf {
    /**
     * 
     * @type {Array<HmvAuditAllSttusItem>}
     * @memberof HmvAuditAllSttusResponseSuccessAllOf
     */
    list: Array<HmvAuditAllSttusItem>;
}
/**
 * 
 * @export
 * @interface HmvAuditIndvdlBySttusItem
 */
export interface HmvAuditIndvdlBySttusItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof HmvAuditIndvdlBySttusItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof HmvAuditIndvdlBySttusItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof HmvAuditIndvdlBySttusItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof HmvAuditIndvdlBySttusItem
     */
    corp_name: string;
    /**
     * 이름
     * @type {string}
     * @memberof HmvAuditIndvdlBySttusItem
     */
    nm: string;
    /**
     * 직위
     * @type {string}
     * @memberof HmvAuditIndvdlBySttusItem
     */
    ofcps: string;
    /**
     * 보수 총액
     * @type {string}
     * @memberof HmvAuditIndvdlBySttusItem
     */
    mendng_totamt: string;
    /**
     * 보수 총액 비 포함 보수
     * @type {string}
     * @memberof HmvAuditIndvdlBySttusItem
     */
    mendng_totamt_ct_incls_mendng: string;
}
/**
 * @type HmvAuditIndvdlBySttusResponse
 * 
 * @export
 */
export type HmvAuditIndvdlBySttusResponse = CommonError | HmvAuditIndvdlBySttusResponseSuccess;
/**
 * 
 * @export
 * @interface HmvAuditIndvdlBySttusResponseSuccess
 */
export interface HmvAuditIndvdlBySttusResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof HmvAuditIndvdlBySttusResponseSuccess
     */
    status: HmvAuditIndvdlBySttusResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof HmvAuditIndvdlBySttusResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<HmvAuditIndvdlBySttusItem>}
     * @memberof HmvAuditIndvdlBySttusResponseSuccess
     */
    list: Array<HmvAuditIndvdlBySttusItem>;
}

/**
 * 에러 및 정보 코드
 */
export type HmvAuditIndvdlBySttusResponseSuccessStatusEnum =
    '000'

const HmvAuditIndvdlBySttusResponseSuccessStatusEnumValues = [
    '000',
]

export function isHmvAuditIndvdlBySttusResponseSuccessStatusEnum(value: any): value is HmvAuditIndvdlBySttusResponseSuccessStatusEnum {
    return HmvAuditIndvdlBySttusResponseSuccessStatusEnumValues.indexOf(value as unknown as HmvAuditIndvdlBySttusResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface HmvAuditIndvdlBySttusResponseSuccessAllOf
 */
export interface HmvAuditIndvdlBySttusResponseSuccessAllOf {
    /**
     * 
     * @type {Array<HmvAuditIndvdlBySttusItem>}
     * @memberof HmvAuditIndvdlBySttusResponseSuccessAllOf
     */
    list: Array<HmvAuditIndvdlBySttusItem>;
}
/**
 * 
 * @export
 * @interface HyslrChgSttusItem
 */
export interface HyslrChgSttusItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof HyslrChgSttusItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof HyslrChgSttusItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof HyslrChgSttusItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof HyslrChgSttusItem
     */
    corp_name: string;
    /**
     * 변동 일 (YYYY.MM.DD)
     * @type {string}
     * @memberof HyslrChgSttusItem
     */
    change_on: string;
    /**
     * 최대주주 성명
     * @type {string}
     * @memberof HyslrChgSttusItem
     */
    mxmm_shrholdr_nm: string;
    /**
     * 소유 주식수
     * @type {string}
     * @memberof HyslrChgSttusItem
     */
    posesn_stock_co: string;
    /**
     * 지분율
     * @type {string}
     * @memberof HyslrChgSttusItem
     */
    qota_rt: string;
    /**
     * 변동 원인
     * @type {string}
     * @memberof HyslrChgSttusItem
     */
    change_cause: string;
    /**
     * 비고
     * @type {string}
     * @memberof HyslrChgSttusItem
     */
    rm: string;
}
/**
 * @type HyslrChgSttusResponse
 * 
 * @export
 */
export type HyslrChgSttusResponse = CommonError | HyslrChgSttusResponseSuccess;
/**
 * 
 * @export
 * @interface HyslrChgSttusResponseSuccess
 */
export interface HyslrChgSttusResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof HyslrChgSttusResponseSuccess
     */
    status: HyslrChgSttusResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof HyslrChgSttusResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<HyslrChgSttusItem>}
     * @memberof HyslrChgSttusResponseSuccess
     */
    list: Array<HyslrChgSttusItem>;
}

/**
 * 에러 및 정보 코드
 */
export type HyslrChgSttusResponseSuccessStatusEnum =
    '000'

const HyslrChgSttusResponseSuccessStatusEnumValues = [
    '000',
]

export function isHyslrChgSttusResponseSuccessStatusEnum(value: any): value is HyslrChgSttusResponseSuccessStatusEnum {
    return HyslrChgSttusResponseSuccessStatusEnumValues.indexOf(value as unknown as HyslrChgSttusResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface HyslrChgSttusResponseSuccessAllOf
 */
export interface HyslrChgSttusResponseSuccessAllOf {
    /**
     * 
     * @type {Array<HyslrChgSttusItem>}
     * @memberof HyslrChgSttusResponseSuccessAllOf
     */
    list: Array<HyslrChgSttusItem>;
}
/**
 * 
 * @export
 * @interface HyslrSttusItem
 */
export interface HyslrSttusItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof HyslrSttusItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof HyslrSttusItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof HyslrSttusItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof HyslrSttusItem
     */
    corp_name: string;
    /**
     * 성명
     * @type {string}
     * @memberof HyslrSttusItem
     */
    nm: string;
    /**
     * 관계 (본인, 친인척 등)
     * @type {string}
     * @memberof HyslrSttusItem
     */
    relate: string;
    /**
     * 주식종류 (보통주, 우선주 등)
     * @type {string}
     * @memberof HyslrSttusItem
     */
    stock_knd: string;
    /**
     * 기초 보유 주식수
     * @type {string}
     * @memberof HyslrSttusItem
     */
    bsis_posesn_stock_co: string;
    /**
     * 기초 보유 주식비율
     * @type {string}
     * @memberof HyslrSttusItem
     */
    bsis_posesn_stock_qota_rt: string;
    /**
     * 기말 보유 주식수
     * @type {string}
     * @memberof HyslrSttusItem
     */
    trmend_posesn_stock_co: string;
    /**
     * 기말 보유 주식 지분율
     * @type {string}
     * @memberof HyslrSttusItem
     */
    trmend_posesn_stock_qota_rt: string;
    /**
     * 비고
     * @type {string}
     * @memberof HyslrSttusItem
     */
    rm: string;
}
/**
 * @type HyslrSttusResponse
 * 
 * @export
 */
export type HyslrSttusResponse = CommonError | HyslrSttusResponseSuccess;
/**
 * 
 * @export
 * @interface HyslrSttusResponseSuccess
 */
export interface HyslrSttusResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof HyslrSttusResponseSuccess
     */
    status: HyslrSttusResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof HyslrSttusResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<HyslrSttusItem>}
     * @memberof HyslrSttusResponseSuccess
     */
    list: Array<HyslrSttusItem>;
}

/**
 * 에러 및 정보 코드
 */
export type HyslrSttusResponseSuccessStatusEnum =
    '000'

const HyslrSttusResponseSuccessStatusEnumValues = [
    '000',
]

export function isHyslrSttusResponseSuccessStatusEnum(value: any): value is HyslrSttusResponseSuccessStatusEnum {
    return HyslrSttusResponseSuccessStatusEnumValues.indexOf(value as unknown as HyslrSttusResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface HyslrSttusResponseSuccessAllOf
 */
export interface HyslrSttusResponseSuccessAllOf {
    /**
     * 
     * @type {Array<HyslrSttusItem>}
     * @memberof HyslrSttusResponseSuccessAllOf
     */
    list: Array<HyslrSttusItem>;
}
/**
 * 
 * @export
 * @interface IndvdlByPayItem
 */
export interface IndvdlByPayItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof IndvdlByPayItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof IndvdlByPayItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof IndvdlByPayItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof IndvdlByPayItem
     */
    corp_name: string;
    /**
     * 이름
     * @type {string}
     * @memberof IndvdlByPayItem
     */
    nm: string;
    /**
     * 직위
     * @type {string}
     * @memberof IndvdlByPayItem
     */
    ofcps: string;
    /**
     * 보수 총액
     * @type {string}
     * @memberof IndvdlByPayItem
     */
    mendng_totamt: string;
    /**
     * 보수 총액 비 포함 보수
     * @type {string}
     * @memberof IndvdlByPayItem
     */
    mendng_totamt_ct_incls_mendng: string;
}
/**
 * @type IndvdlByPayResponse
 * 
 * @export
 */
export type IndvdlByPayResponse = CommonError | IndvdlByPayResponseSuccess;
/**
 * 
 * @export
 * @interface IndvdlByPayResponseSuccess
 */
export interface IndvdlByPayResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof IndvdlByPayResponseSuccess
     */
    status: IndvdlByPayResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof IndvdlByPayResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<IndvdlByPayItem>}
     * @memberof IndvdlByPayResponseSuccess
     */
    list: Array<IndvdlByPayItem>;
}

/**
 * 에러 및 정보 코드
 */
export type IndvdlByPayResponseSuccessStatusEnum =
    '000'

const IndvdlByPayResponseSuccessStatusEnumValues = [
    '000',
]

export function isIndvdlByPayResponseSuccessStatusEnum(value: any): value is IndvdlByPayResponseSuccessStatusEnum {
    return IndvdlByPayResponseSuccessStatusEnumValues.indexOf(value as unknown as IndvdlByPayResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface IndvdlByPayResponseSuccessAllOf
 */
export interface IndvdlByPayResponseSuccessAllOf {
    /**
     * 
     * @type {Array<IndvdlByPayItem>}
     * @memberof IndvdlByPayResponseSuccessAllOf
     */
    list: Array<IndvdlByPayItem>;
}
/**
 * 
 * @export
 * @interface IrdsSttusItem
 */
export interface IrdsSttusItem {
    /**
     * 사업연도(4자리)
     * @type {string}
     * @memberof IrdsSttusItem
     */
    bsns_year: string;
    /**
     * 
     * @type {ReportCode}
     * @memberof IrdsSttusItem
     */
    reprt_code: ReportCode;
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof IrdsSttusItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof IrdsSttusItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof IrdsSttusItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof IrdsSttusItem
     */
    corp_name: string;
    /**
     * 주식발행 감소일자
     * @type {string}
     * @memberof IrdsSttusItem
     */
    isu_dcrs_de: string;
    /**
     * 주식발행 감소 형태
     * @type {string}
     * @memberof IrdsSttusItem
     */
    isu_dcrs_stle: string;
    /**
     * 주식발행 감소 종류
     * @type {string}
     * @memberof IrdsSttusItem
     */
    isu_dcrs_stock_knd: string;
    /**
     * 주식발행 감소 수량
     * @type {string}
     * @memberof IrdsSttusItem
     */
    isu_dcrs_qy: string;
    /**
     * 발행 감소 주당 액면 가액
     * @type {string}
     * @memberof IrdsSttusItem
     */
    isu_dcrs_mstvdv_fval_amount: string;
    /**
     * 발행 감소 주당 가액
     * @type {string}
     * @memberof IrdsSttusItem
     */
    isu_dcrs_mstvdv_amount: string;
}
/**
 * @type IrdsSttusResponse
 * 
 * @export
 */
export type IrdsSttusResponse = CommonError | IrdsSttusResponseSuccess;
/**
 * 
 * @export
 * @interface IrdsSttusResponseSuccess
 */
export interface IrdsSttusResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof IrdsSttusResponseSuccess
     */
    status: IrdsSttusResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof IrdsSttusResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<IrdsSttusItem>}
     * @memberof IrdsSttusResponseSuccess
     */
    list: Array<IrdsSttusItem>;
}

/**
 * 에러 및 정보 코드
 */
export type IrdsSttusResponseSuccessStatusEnum =
    '000'

const IrdsSttusResponseSuccessStatusEnumValues = [
    '000',
]

export function isIrdsSttusResponseSuccessStatusEnum(value: any): value is IrdsSttusResponseSuccessStatusEnum {
    return IrdsSttusResponseSuccessStatusEnumValues.indexOf(value as unknown as IrdsSttusResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface IrdsSttusResponseSuccessAllOf
 */
export interface IrdsSttusResponseSuccessAllOf {
    /**
     * 
     * @type {Array<IrdsSttusItem>}
     * @memberof IrdsSttusResponseSuccessAllOf
     */
    list: Array<IrdsSttusItem>;
}
/**
 * @type ListResponse
 * 
 * @export
 */
export type ListResponse = CommonError | ListResponseSuccess;
/**
 * 
 * @export
 * @interface ListResponseItem
 */
export interface ListResponseItem {
    /**
     * 
     * @type {CorpCls}
     * @memberof ListResponseItem
     */
    corp_cls: CorpCls;
    /**
     * 회사명
     * @type {string}
     * @memberof ListResponseItem
     */
    corp_name?: string;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof ListResponseItem
     */
    corp_code: string;
    /**
     * 상장회사의 종목코드(6자리)
     * @type {string}
     * @memberof ListResponseItem
     */
    stock_code: string;
    /**
     * 보고서명 (공시구분+보고서명+기타정보)
     * - [기재정정] : 본 보고서명으로 이미 제출된 보고서의 기재내용이 변경되어 제출된 것임
     * - [첨부정정] : 본 보고서명으로 이미 제출된 보고서의 첨부내용이 변경되어 제출된 것임
     * - [첨부추가] : 본 보고서명으로 이미 제출된 보고서의 첨부서류가 추가되어 제출된 것임
     * - [변경등록] : 본 보고서명으로 이미 제출된 보고서의 유동화계획이 변경되어 제출된 것임
     * - [연장결정] : 본 보고서명으로 이미 제출된 보고서의 신탁계약이 연장되어 제출된 것임
     * - [발행조건확정] : 본 보고서명으로 이미 제출된 보고서의 유가증권 발행조건이 확정되어 제출된 것임
     * - [정정명령부과] : 본 보고서에 대하여 금융감독원이 정정명령을 부과한 것임
     * - [정정제출요구] : 본 보고서에 대하여 금융감독원이 정정제출요구을 부과한 것임
     * @type {string}
     * @memberof ListResponseItem
     */
    report_nm: string;
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof ListResponseItem
     */
    rcept_no: string;
    /**
     * 공시 제출인명
     * @type {string}
     * @memberof ListResponseItem
     */
    flr_nm: string;
    /**
     * 공시 접수일자(YYYYMMDD)
     * @type {string}
     * @memberof ListResponseItem
     */
    rcept_dt: string;
    /**
     * 비고
     * 조합된 문자로 각각은 아래와 같은 의미가 있음
     * - 유 : 본 공시사항은 한국거래소 유가증권시장본부 소관임
     * - 코 : 본 공시사항은 한국거래소 코스닥시장본부 소관임
     * - 채 : 본 문서는 한국거래소 채권상장법인 공시사항임
     * - 넥 : 본 문서는 한국거래소 코넥스시장 소관임
     * - 공 : 본 공시사항은 공정거래위원회 소관임
     * - 연 : 본 보고서는 연결부분을 포함한 것임
     * - 정 : 본 보고서 제출 후 정정신고가 있으니 관련 보고서를 참조하시기 바람
     * - 철 : 본 보고서는 철회(간주)되었으니 관련 철회신고서(철회간주안내)를 참고하시기 바람
     * @type {string}
     * @memberof ListResponseItem
     */
    rm: string;
}
/**
 * 
 * @export
 * @interface ListResponseSuccess
 */
export interface ListResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof ListResponseSuccess
     */
    status: ListResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof ListResponseSuccess
     */
    message: string;
    /**
     * 페이지 번호
     * @type {number}
     * @memberof ListResponseSuccess
     */
    page_no: number;
    /**
     * 페이지 별 건수
     * @type {number}
     * @memberof ListResponseSuccess
     */
    page_count: number;
    /**
     * 총 건수
     * @type {number}
     * @memberof ListResponseSuccess
     */
    total_count: number;
    /**
     * 총 페이지 수
     * @type {number}
     * @memberof ListResponseSuccess
     */
    total_page: number;
    /**
     * 
     * @type {Array<ListResponseItem>}
     * @memberof ListResponseSuccess
     */
    list: Array<ListResponseItem>;
}

/**
 * 에러 및 정보 코드
 */
export type ListResponseSuccessStatusEnum =
    '000'

const ListResponseSuccessStatusEnumValues = [
    '000',
]

export function isListResponseSuccessStatusEnum(value: any): value is ListResponseSuccessStatusEnum {
    return ListResponseSuccessStatusEnumValues.indexOf(value as unknown as ListResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface ListResponseSuccessAllOf
 */
export interface ListResponseSuccessAllOf {
    /**
     * 
     * @type {Array<ListResponseItem>}
     * @memberof ListResponseSuccessAllOf
     */
    list: Array<ListResponseItem>;
}
/**
 * 
 * @export
 * @interface LwstLgItem
 */
export interface LwstLgItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof LwstLgItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof LwstLgItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof LwstLgItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof LwstLgItem
     */
    corp_name: string;
    /**
     * 사건의 명칭
     * @type {string}
     * @memberof LwstLgItem
     */
    icnm: string;
    /**
     * 원고ㆍ신청인
     * @type {string}
     * @memberof LwstLgItem
     */
    ac_ap: string;
    /**
     * 청구내용
     * @type {string}
     * @memberof LwstLgItem
     */
    rq_cn: string;
    /**
     * 관할법원
     * @type {string}
     * @memberof LwstLgItem
     */
    cpct: string;
    /**
     * 향후대책
     * @type {string}
     * @memberof LwstLgItem
     */
    ft_ctp: string;
    /**
     * 제기일자
     * @type {string}
     * @memberof LwstLgItem
     */
    lgd: string;
    /**
     * 확인일자
     * @type {string}
     * @memberof LwstLgItem
     */
    cfd: string;
}
/**
 * @type LwstLgResponse
 * 
 * @export
 */
export type LwstLgResponse = CommonError | LwstLgResponseSuccess;
/**
 * 
 * @export
 * @interface LwstLgResponseSuccess
 */
export interface LwstLgResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof LwstLgResponseSuccess
     */
    status: LwstLgResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof LwstLgResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<LwstLgItem>}
     * @memberof LwstLgResponseSuccess
     */
    list: Array<LwstLgItem>;
}

/**
 * 에러 및 정보 코드
 */
export type LwstLgResponseSuccessStatusEnum =
    '000'

const LwstLgResponseSuccessStatusEnumValues = [
    '000',
]

export function isLwstLgResponseSuccessStatusEnum(value: any): value is LwstLgResponseSuccessStatusEnum {
    return LwstLgResponseSuccessStatusEnumValues.indexOf(value as unknown as LwstLgResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface LwstLgResponseSuccessAllOf
 */
export interface LwstLgResponseSuccessAllOf {
    /**
     * 
     * @type {Array<LwstLgItem>}
     * @memberof LwstLgResponseSuccessAllOf
     */
    list: Array<LwstLgItem>;
}
/**
 * 
 * @export
 * @interface MajorStockItem
 */
export interface MajorStockItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof MajorStockItem
     */
    rcept_no: string;
    /**
     * 공시 접수일자 (YYYYMMDD)
     * @type {string}
     * @memberof MajorStockItem
     */
    rcept_dt: string;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof MajorStockItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof MajorStockItem
     */
    corp_name: string;
    /**
     * 주식등의 대량보유상황 보고구분
     * @type {string}
     * @memberof MajorStockItem
     */
    report_tp: string;
    /**
     * 보유주식등의 수
     * @type {string}
     * @memberof MajorStockItem
     */
    stkqy: string;
    /**
     * 보유주식등의 증감
     * @type {string}
     * @memberof MajorStockItem
     */
    stkqy_irds: string;
    /**
     * 보유비율
     * @type {string}
     * @memberof MajorStockItem
     */
    stkrt: string;
    /**
     * 보유비율 증감
     * @type {string}
     * @memberof MajorStockItem
     */
    stkrt_irds: string;
    /**
     * 주요체결 주식등의 수
     * @type {string}
     * @memberof MajorStockItem
     */
    ctr_stkqy: string;
    /**
     * 주요체결 보유비율
     * @type {string}
     * @memberof MajorStockItem
     */
    ctr_stkrt: string;
    /**
     * 보고사유
     * @type {string}
     * @memberof MajorStockItem
     */
    report_resn: string;
}
/**
 * @type MajorStockResponse
 * 
 * @export
 */
export type MajorStockResponse = CommonError | MajorStockResponseSuccess;
/**
 * 
 * @export
 * @interface MajorStockResponseSuccess
 */
export interface MajorStockResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof MajorStockResponseSuccess
     */
    status: MajorStockResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof MajorStockResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<MajorStockItem>}
     * @memberof MajorStockResponseSuccess
     */
    list: Array<MajorStockItem>;
}

/**
 * 에러 및 정보 코드
 */
export type MajorStockResponseSuccessStatusEnum =
    '000'

const MajorStockResponseSuccessStatusEnumValues = [
    '000',
]

export function isMajorStockResponseSuccessStatusEnum(value: any): value is MajorStockResponseSuccessStatusEnum {
    return MajorStockResponseSuccessStatusEnumValues.indexOf(value as unknown as MajorStockResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface MajorStockResponseSuccessAllOf
 */
export interface MajorStockResponseSuccessAllOf {
    /**
     * 
     * @type {Array<MajorStockItem>}
     * @memberof MajorStockResponseSuccessAllOf
     */
    list: Array<MajorStockItem>;
}
/**
 * @type MgRsResponse
 * 
 * @export
 */
export type MgRsResponse = CommonError | MgRsResponseSuccess;
/**
 * @type MgRsResponseItem
 * 
 * @export
 */
export type MgRsResponseItem = MgRsResponseItemAboutCompany | MgRsResponseItemGeneral | MgRsResponseItemIssuedSecurities;
/**
 * 
 * @export
 * @interface MgRsResponseItemAboutCompany
 */
export interface MgRsResponseItemAboutCompany {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof MgRsResponseItemAboutCompany
     */
    title: MgRsResponseItemAboutCompanyTitleEnum;
    /**
     * 
     * @type {Array<MgRsResponseItemAboutCompanyItem>}
     * @memberof MgRsResponseItemAboutCompany
     */
    list: Array<MgRsResponseItemAboutCompanyItem>;
}

/**
 * 그룹명칭
 */
export type MgRsResponseItemAboutCompanyTitleEnum =
    '당사회사에관한사항'

const MgRsResponseItemAboutCompanyTitleEnumValues = [
    '당사회사에관한사항',
]

export function isMgRsResponseItemAboutCompanyTitleEnum(value: any): value is MgRsResponseItemAboutCompanyTitleEnum {
    return MgRsResponseItemAboutCompanyTitleEnumValues.indexOf(value as unknown as MgRsResponseItemAboutCompanyTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface MgRsResponseItemAboutCompanyItem
 */
export interface MgRsResponseItemAboutCompanyItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof MgRsResponseItemAboutCompanyItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof MgRsResponseItemAboutCompanyItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof MgRsResponseItemAboutCompanyItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof MgRsResponseItemAboutCompanyItem
     */
    corp_name: string;
    /**
     * 회사명
     * @type {string}
     * @memberof MgRsResponseItemAboutCompanyItem
     */
    cmpnm: string;
    /**
     * 구분
     * @type {string}
     * @memberof MgRsResponseItemAboutCompanyItem
     */
    sen: string;
    /**
     * 총자산
     * @type {string}
     * @memberof MgRsResponseItemAboutCompanyItem
     */
    tast: string;
    /**
     * 자본금
     * @type {string}
     * @memberof MgRsResponseItemAboutCompanyItem
     */
    cpt: string;
    /**
     * 발행주식수(주식의종류)
     * @type {string}
     * @memberof MgRsResponseItemAboutCompanyItem
     */
    isstk_knd: string;
    /**
     * 발행주식수(주식수)
     * @type {string}
     * @memberof MgRsResponseItemAboutCompanyItem
     */
    isstk_cnt: string;
}
/**
 * 
 * @export
 * @interface MgRsResponseItemGeneral
 */
export interface MgRsResponseItemGeneral {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof MgRsResponseItemGeneral
     */
    title: MgRsResponseItemGeneralTitleEnum;
    /**
     * 
     * @type {Array<MgRsResponseItemGeneralItem>}
     * @memberof MgRsResponseItemGeneral
     */
    list: Array<MgRsResponseItemGeneralItem>;
}

/**
 * 그룹명칭
 */
export type MgRsResponseItemGeneralTitleEnum =
    '일반사항'

const MgRsResponseItemGeneralTitleEnumValues = [
    '일반사항',
]

export function isMgRsResponseItemGeneralTitleEnum(value: any): value is MgRsResponseItemGeneralTitleEnum {
    return MgRsResponseItemGeneralTitleEnumValues.indexOf(value as unknown as MgRsResponseItemGeneralTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface MgRsResponseItemGeneralItem
 */
export interface MgRsResponseItemGeneralItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof MgRsResponseItemGeneralItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof MgRsResponseItemGeneralItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof MgRsResponseItemGeneralItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof MgRsResponseItemGeneralItem
     */
    corp_name: string;
    /**
     * 형태
     * @type {string}
     * @memberof MgRsResponseItemGeneralItem
     */
    stn: string;
    /**
     * 이사회 결의일
     * @type {string}
     * @memberof MgRsResponseItemGeneralItem
     */
    bddd: string;
    /**
     * 계약일
     * @type {string}
     * @memberof MgRsResponseItemGeneralItem
     */
    ctrd: string;
    /**
     * 주주총회를 위한 주주확정일
     * @type {string}
     * @memberof MgRsResponseItemGeneralItem
     */
    gmtsck_shddstd: string;
    /**
     * 승인을 위한 주주총회일
     * @type {string}
     * @memberof MgRsResponseItemGeneralItem
     */
    ap_gmtsck: string;
    /**
     * 주식매수청구권 행사 기간 및 가격(시작일)
     * @type {string}
     * @memberof MgRsResponseItemGeneralItem
     */
    aprskh_pd_bgd: string;
    /**
     * 주식매수청구권 행사 기간 및 가격(종료일)
     * @type {string}
     * @memberof MgRsResponseItemGeneralItem
     */
    aprskh_pd_edd: string;
    /**
     * 주식매수청구권 행사 기간 및 가격((주식매수청구가격-회사제시))
     * @type {string}
     * @memberof MgRsResponseItemGeneralItem
     */
    aprskh_prc: string;
    /**
     * 합병기일등
     * @type {string}
     * @memberof MgRsResponseItemGeneralItem
     */
    mgdt_etc: string;
    /**
     * 비율 또는 가액
     * @type {string}
     * @memberof MgRsResponseItemGeneralItem
     */
    rt_vl: string;
    /**
     * 외부평가기관
     * @type {string}
     * @memberof MgRsResponseItemGeneralItem
     */
    exevl_int: string;
    /**
     * 지급 교부금 등
     * @type {string}
     * @memberof MgRsResponseItemGeneralItem
     */
    grtmn_etc: string;
    /**
     * 주요사항보고서(접수번호)
     * @type {string}
     * @memberof MgRsResponseItemGeneralItem
     */
    rpt_rcpn: string;
}
/**
 * 
 * @export
 * @interface MgRsResponseItemIssuedSecurities
 */
export interface MgRsResponseItemIssuedSecurities {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof MgRsResponseItemIssuedSecurities
     */
    title: MgRsResponseItemIssuedSecuritiesTitleEnum;
    /**
     * 
     * @type {Array<MgRsResponseItemIssuedSecuritiesItem>}
     * @memberof MgRsResponseItemIssuedSecurities
     */
    list: Array<MgRsResponseItemIssuedSecuritiesItem>;
}

/**
 * 그룹명칭
 */
export type MgRsResponseItemIssuedSecuritiesTitleEnum =
    '발행증권'

const MgRsResponseItemIssuedSecuritiesTitleEnumValues = [
    '발행증권',
]

export function isMgRsResponseItemIssuedSecuritiesTitleEnum(value: any): value is MgRsResponseItemIssuedSecuritiesTitleEnum {
    return MgRsResponseItemIssuedSecuritiesTitleEnumValues.indexOf(value as unknown as MgRsResponseItemIssuedSecuritiesTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface MgRsResponseItemIssuedSecuritiesItem
 */
export interface MgRsResponseItemIssuedSecuritiesItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof MgRsResponseItemIssuedSecuritiesItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof MgRsResponseItemIssuedSecuritiesItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof MgRsResponseItemIssuedSecuritiesItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof MgRsResponseItemIssuedSecuritiesItem
     */
    corp_name: string;
    /**
     * 종류
     * @type {string}
     * @memberof MgRsResponseItemIssuedSecuritiesItem
     */
    kndn: string;
    /**
     * 수량
     * @type {string}
     * @memberof MgRsResponseItemIssuedSecuritiesItem
     */
    cnt: string;
    /**
     * 액면가액
     * @type {string}
     * @memberof MgRsResponseItemIssuedSecuritiesItem
     */
    fv: string;
    /**
     * 모집(매출)가액
     * @type {string}
     * @memberof MgRsResponseItemIssuedSecuritiesItem
     */
    slprc: string;
    /**
     * 모집(매출)총액
     * @type {string}
     * @memberof MgRsResponseItemIssuedSecuritiesItem
     */
    slta: string;
}
/**
 * 
 * @export
 * @interface MgRsResponseSuccess
 */
export interface MgRsResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof MgRsResponseSuccess
     */
    status: MgRsResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof MgRsResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<MgRsResponseItem>}
     * @memberof MgRsResponseSuccess
     */
    group: Array<MgRsResponseItem>;
}

/**
 * 에러 및 정보 코드
 */
export type MgRsResponseSuccessStatusEnum =
    '000'

const MgRsResponseSuccessStatusEnumValues = [
    '000',
]

export function isMgRsResponseSuccessStatusEnum(value: any): value is MgRsResponseSuccessStatusEnum {
    return MgRsResponseSuccessStatusEnumValues.indexOf(value as unknown as MgRsResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface MgRsResponseSuccessAllOf
 */
export interface MgRsResponseSuccessAllOf {
    /**
     * 
     * @type {Array<MgRsResponseItem>}
     * @memberof MgRsResponseSuccessAllOf
     */
    group: Array<MgRsResponseItem>;
}
/**
 * 
 * @export
 * @interface MrhlSttusItem
 */
export interface MrhlSttusItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof MrhlSttusItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof MrhlSttusItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof MrhlSttusItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof MrhlSttusItem
     */
    corp_name: string;
    /**
     * 구분
     * @type {string}
     * @memberof MrhlSttusItem
     */
    se: string;
    /**
     * 주주수
     * @type {string}
     * @memberof MrhlSttusItem
     */
    shrholdr_co: string;
    /**
     * 전체 주주수
     * @type {string}
     * @memberof MrhlSttusItem
     */
    shrholdr_tot_co: string;
    /**
     * 주주 비율
     * @type {string}
     * @memberof MrhlSttusItem
     */
    shrholdr_rate: string;
    /**
     * 보유 주식수
     * @type {string}
     * @memberof MrhlSttusItem
     */
    hold_stock_co: string;
    /**
     * 총발행 주식수
     * @type {string}
     * @memberof MrhlSttusItem
     */
    stock_tot_co: string;
    /**
     * 보유 주식 비율
     * @type {string}
     * @memberof MrhlSttusItem
     */
    hold_stock_rate: string;
}
/**
 * @type MrhlSttusResponse
 * 
 * @export
 */
export type MrhlSttusResponse = CommonError | MrhlSttusResponseSuccess;
/**
 * 
 * @export
 * @interface MrhlSttusResponseSuccess
 */
export interface MrhlSttusResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof MrhlSttusResponseSuccess
     */
    status: MrhlSttusResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof MrhlSttusResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<MrhlSttusItem>}
     * @memberof MrhlSttusResponseSuccess
     */
    list: Array<MrhlSttusItem>;
}

/**
 * 에러 및 정보 코드
 */
export type MrhlSttusResponseSuccessStatusEnum =
    '000'

const MrhlSttusResponseSuccessStatusEnumValues = [
    '000',
]

export function isMrhlSttusResponseSuccessStatusEnum(value: any): value is MrhlSttusResponseSuccessStatusEnum {
    return MrhlSttusResponseSuccessStatusEnumValues.indexOf(value as unknown as MrhlSttusResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface MrhlSttusResponseSuccessAllOf
 */
export interface MrhlSttusResponseSuccessAllOf {
    /**
     * 
     * @type {Array<MrhlSttusItem>}
     * @memberof MrhlSttusResponseSuccessAllOf
     */
    list: Array<MrhlSttusItem>;
}
/**
 * 
 * @export
 * @interface NewCaplScritsNrdmpBlceItem
 */
export interface NewCaplScritsNrdmpBlceItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof NewCaplScritsNrdmpBlceItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof NewCaplScritsNrdmpBlceItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof NewCaplScritsNrdmpBlceItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof NewCaplScritsNrdmpBlceItem
     */
    corp_name: string;
    /**
     * 잔여만기
     * @type {string}
     * @memberof NewCaplScritsNrdmpBlceItem
     */
    remndr_exprtn1: string;
    /**
     * 잔여만기
     * @type {string}
     * @memberof NewCaplScritsNrdmpBlceItem
     */
    remndr_exprtn2: string;
    /**
     * 1년이하
     * @type {string}
     * @memberof NewCaplScritsNrdmpBlceItem
     */
    yy1_below: string;
    /**
     * 1년초과 5년이하
     * @type {string}
     * @memberof NewCaplScritsNrdmpBlceItem
     */
    yy1_excess_yy5_below: string;
    /**
     * 5년초과 10년이하
     * @type {string}
     * @memberof NewCaplScritsNrdmpBlceItem
     */
    yy5_excess_yy10_below: string;
    /**
     * 10년초과 15년이하
     * @type {string}
     * @memberof NewCaplScritsNrdmpBlceItem
     */
    yy10_excess_yy15_below: string;
    /**
     * 15년초과 20년이하
     * @type {string}
     * @memberof NewCaplScritsNrdmpBlceItem
     */
    yy15_excess_yy20_below: string;
    /**
     * 20년초과 30년이하
     * @type {string}
     * @memberof NewCaplScritsNrdmpBlceItem
     */
    yy20_excess_yy30_below: string;
    /**
     * 30년초과
     * @type {string}
     * @memberof NewCaplScritsNrdmpBlceItem
     */
    yy30_excess: string;
    /**
     * 합계
     * @type {string}
     * @memberof NewCaplScritsNrdmpBlceItem
     */
    sm: string;
}
/**
 * @type NewCaplScritsNrdmpBlceResponse
 * 
 * @export
 */
export type NewCaplScritsNrdmpBlceResponse = CommonError | NewCaplScritsNrdmpBlceResponseSuccess;
/**
 * 
 * @export
 * @interface NewCaplScritsNrdmpBlceResponseSuccess
 */
export interface NewCaplScritsNrdmpBlceResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof NewCaplScritsNrdmpBlceResponseSuccess
     */
    status: NewCaplScritsNrdmpBlceResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof NewCaplScritsNrdmpBlceResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<NewCaplScritsNrdmpBlceItem>}
     * @memberof NewCaplScritsNrdmpBlceResponseSuccess
     */
    list: Array<NewCaplScritsNrdmpBlceItem>;
}

/**
 * 에러 및 정보 코드
 */
export type NewCaplScritsNrdmpBlceResponseSuccessStatusEnum =
    '000'

const NewCaplScritsNrdmpBlceResponseSuccessStatusEnumValues = [
    '000',
]

export function isNewCaplScritsNrdmpBlceResponseSuccessStatusEnum(value: any): value is NewCaplScritsNrdmpBlceResponseSuccessStatusEnum {
    return NewCaplScritsNrdmpBlceResponseSuccessStatusEnumValues.indexOf(value as unknown as NewCaplScritsNrdmpBlceResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface NewCaplScritsNrdmpBlceResponseSuccessAllOf
 */
export interface NewCaplScritsNrdmpBlceResponseSuccessAllOf {
    /**
     * 
     * @type {Array<NewCaplScritsNrdmpBlceItem>}
     * @memberof NewCaplScritsNrdmpBlceResponseSuccessAllOf
     */
    list: Array<NewCaplScritsNrdmpBlceItem>;
}
/**
 * 
 * @export
 * @interface OtcprStkInvscrInhDecsnItem
 */
export interface OtcprStkInvscrInhDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    corp_name: string;
    /**
     * 발행회사(회사명)
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    iscmp_cmpnm: string;
    /**
     * 발행회사(국적)
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    iscmp_nt: string;
    /**
     * 발행회사(대표자)
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    iscmp_rp: string;
    /**
     * 발행회사(자본금(원))
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    iscmp_cpt: string;
    /**
     * 발행회사(회사와 관계)
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    iscmp_rl_cmpn: string;
    /**
     * 발행회사(발행주식 총수(주))
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    iscmp_tisstk: string;
    /**
     * 발행회사(주요사업)
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    iscmp_mbsn: string;
    /**
     * 최근 6월 이내 제3자 배정에 의한 신주취득 여부
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    l6m_tpa_nstkaq_atn: string;
    /**
     * 양수내역(양수주식수(주))
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    inhdtl_stkcnt: string;
    /**
     * 양수내역(양수금액(원)(A))
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    inhdtl_inhprc: string;
    /**
     * 양수내역(총자산(원)(B))
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    inhdtl_tast: string;
    /**
     * 양수내역(총자산대비(%)(A/B))
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    inhdtl_tast_vs: string;
    /**
     * 양수내역(자기자본(원)(C))
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    inhdtl_ecpt: string;
    /**
     * 양수내역(자기자본대비(%)(A/C))
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    inhdtl_ecpt_vs: string;
    /**
     * 양수후 소유주식수 및 지분비율(소유주식수(주))
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    atinh_owstkcnt: string;
    /**
     * 양수후 소유주식수 및 지분비율(지분비율(%))
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    atinh_eqrt: string;
    /**
     * 양수목적
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    inh_pp: string;
    /**
     * 양수예정일자
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    inh_prd: string;
    /**
     * 거래상대방(회사명(성명))
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    dlptn_cmpnm: string;
    /**
     * 거래상대방(자본금(원))
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    dlptn_cpt: string;
    /**
     * 거래상대방(주요사업)
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    dlptn_mbsn: string;
    /**
     * 거래상대방(본점소재지(주소))
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    dlptn_hoadd: string;
    /**
     * 거래상대방(회사와의 관계)
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    dlptn_rl_cmpn: string;
    /**
     * 거래대금지급
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    dl_pym: string;
    /**
     * 외부평가에 관한 사항(외부평가 여부)
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    exevl_atn: string;
    /**
     * 외부평가에 관한 사항(근거 및 사유)
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    exevl_bs_rs: string;
    /**
     * 외부평가에 관한 사항(외부평가기관의 명칭)
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    exevl_intn: string;
    /**
     * 외부평가에 관한 사항(외부평가 기간)
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    exevl_pd: string;
    /**
     * 외부평가에 관한 사항(외부평가 의견)
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    exevl_op: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    bddd: string;
    /**
     * 사외이사참석여부(참석(명))
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사참석여부(불참(명))
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(사외이사가 아닌 감사위원) 참석여부
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    adt_a_atn: string;
    /**
     * 우회상장 해당 여부
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    bdlst_atn: string;
    /**
     * 향후 6월이내 제3자배정 증자 등 계획
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    n6m_tpai_plann: string;
    /**
     * 발행회사(타법인)의 우회상장 요건 충족여부
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    iscmp_bdlst_sf_atn: string;
    /**
     * 공정거래위원회 신고대상 여부
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    ftc_stt_atn: string;
    /**
     * 풋옵션 등 계약 체결여부
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    popt_ctr_atn: string;
    /**
     * 계약내용
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnItem
     */
    popt_ctr_cn: string;
}
/**
 * @type OtcprStkInvscrInhDecsnResponse
 * 
 * @export
 */
export type OtcprStkInvscrInhDecsnResponse = CommonError | OtcprStkInvscrInhDecsnResponseSuccess;
/**
 * 
 * @export
 * @interface OtcprStkInvscrInhDecsnResponseSuccess
 */
export interface OtcprStkInvscrInhDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnResponseSuccess
     */
    status: OtcprStkInvscrInhDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof OtcprStkInvscrInhDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<OtcprStkInvscrInhDecsnItem>}
     * @memberof OtcprStkInvscrInhDecsnResponseSuccess
     */
    list: Array<OtcprStkInvscrInhDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type OtcprStkInvscrInhDecsnResponseSuccessStatusEnum =
    '000'

const OtcprStkInvscrInhDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isOtcprStkInvscrInhDecsnResponseSuccessStatusEnum(value: any): value is OtcprStkInvscrInhDecsnResponseSuccessStatusEnum {
    return OtcprStkInvscrInhDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as OtcprStkInvscrInhDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface OtcprStkInvscrInhDecsnResponseSuccessAllOf
 */
export interface OtcprStkInvscrInhDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<OtcprStkInvscrInhDecsnItem>}
     * @memberof OtcprStkInvscrInhDecsnResponseSuccessAllOf
     */
    list: Array<OtcprStkInvscrInhDecsnItem>;
}
/**
 * 
 * @export
 * @interface OtcprStkInvscrTrfDecsnItem
 */
export interface OtcprStkInvscrTrfDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    corp_name: string;
    /**
     * 발행회사(회사명)
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    iscmp_cmpnm: string;
    /**
     * 발행회사(국적)
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    iscmp_nt: string;
    /**
     * 발행회사(대표자)
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    iscmp_rp: string;
    /**
     * 발행회사(자본금(원))
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    iscmp_cpt: string;
    /**
     * 발행회사(회사와 관계)
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    iscmp_rl_cmpn: string;
    /**
     * 발행회사(발행주식 총수(주))
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    iscmp_tisstk: string;
    /**
     * 발행회사(주요사업)
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    iscmp_mbsn: string;
    /**
     * 양도내역(양도주식수(주))
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    trfdtl_stkcnt: string;
    /**
     * 양도내역(양도금액(원)(A))
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    trfdtl_trfprc: string;
    /**
     * 양도내역(총자산(원)(B))
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    trfdtl_tast: string;
    /**
     * 양도내역(총자산대비(%)(A/B))
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    trfdtl_tast_vs: string;
    /**
     * 양도내역(자기자본(원)(C))
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    trfdtl_ecpt: string;
    /**
     * 양도내역(자기자본대비(%)(A/C))
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    trfdtl_ecpt_vs: string;
    /**
     * 양도후 소유주식수 및 지분비율(소유주식수(주))
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    attrf_owstkcnt: string;
    /**
     * 양도후 소유주식수 및 지분비율(지분비율(%))
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    attrf_eqrt: string;
    /**
     * 양도목적
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    trf_pp: string;
    /**
     * 양도예정일자
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    trf_prd: string;
    /**
     * 거래상대방(회사명(성명))
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    dlptn_cmpnm: string;
    /**
     * 거래상대방(자본금(원))
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    dlptn_cpt: string;
    /**
     * 거래상대방(주요사업)
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    dlptn_mbsn: string;
    /**
     * 거래상대방(본점소재지(주소))
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    dlptn_hoadd: string;
    /**
     * 거래상대방(회사와의 관계)
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    dlptn_rl_cmpn: string;
    /**
     * 거래대금지급
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    dl_pym: string;
    /**
     * 외부평가에 관한 사항(외부평가 여부)
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    exevl_atn: string;
    /**
     * 외부평가에 관한 사항(근거 및 사유)
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    exevl_bs_rs: string;
    /**
     * 외부평가에 관한 사항(외부평가기관의 명칭)
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    exevl_intn: string;
    /**
     * 외부평가에 관한 사항(외부평가 기간)
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    exevl_pd: string;
    /**
     * 외부평가에 관한 사항(외부평가 의견)
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    exevl_op: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    bddd: string;
    /**
     * 사외이사참석여부(참석(명))
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사참석여부(불참(명))
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(사외이사가 아닌 감사위원) 참석여부
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    adt_a_atn: string;
    /**
     * 공정거래위원회 신고대상 여부
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    ftc_stt_atn: string;
    /**
     * 풋옵션 등 계약 체결여부
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    popt_ctr_atn: string;
    /**
     * 계약내용
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnItem
     */
    popt_ctr_cn: string;
}
/**
 * @type OtcprStkInvscrTrfDecsnResponse
 * 
 * @export
 */
export type OtcprStkInvscrTrfDecsnResponse = CommonError | OtcprStkInvscrTrfDecsnResponseSuccess;
/**
 * 
 * @export
 * @interface OtcprStkInvscrTrfDecsnResponseSuccess
 */
export interface OtcprStkInvscrTrfDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnResponseSuccess
     */
    status: OtcprStkInvscrTrfDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof OtcprStkInvscrTrfDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<OtcprStkInvscrTrfDecsnItem>}
     * @memberof OtcprStkInvscrTrfDecsnResponseSuccess
     */
    list: Array<OtcprStkInvscrTrfDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type OtcprStkInvscrTrfDecsnResponseSuccessStatusEnum =
    '000'

const OtcprStkInvscrTrfDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isOtcprStkInvscrTrfDecsnResponseSuccessStatusEnum(value: any): value is OtcprStkInvscrTrfDecsnResponseSuccessStatusEnum {
    return OtcprStkInvscrTrfDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as OtcprStkInvscrTrfDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface OtcprStkInvscrTrfDecsnResponseSuccessAllOf
 */
export interface OtcprStkInvscrTrfDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<OtcprStkInvscrTrfDecsnItem>}
     * @memberof OtcprStkInvscrTrfDecsnResponseSuccessAllOf
     */
    list: Array<OtcprStkInvscrTrfDecsnItem>;
}
/**
 * 
 * @export
 * @interface OtrCprInvstmntSttusItem
 */
export interface OtrCprInvstmntSttusItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof OtrCprInvstmntSttusItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof OtrCprInvstmntSttusItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof OtrCprInvstmntSttusItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof OtrCprInvstmntSttusItem
     */
    corp_name: string;
    /**
     * 법인명
     * @type {string}
     * @memberof OtrCprInvstmntSttusItem
     */
    inv_prm: string;
    /**
     * 최초 취득일자 (YYYYMMDD)
     * @type {string}
     * @memberof OtrCprInvstmntSttusItem
     */
    frst_acqs_de: string;
    /**
     * 출자목적 (자회사 등)
     * @type {string}
     * @memberof OtrCprInvstmntSttusItem
     */
    invstmnt_purps: string;
    /**
     * 최초 취득금액
     * @type {string}
     * @memberof OtrCprInvstmntSttusItem
     */
    frst_acqs_amount: string;
    /**
     * 기초 잔액 수량
     * @type {string}
     * @memberof OtrCprInvstmntSttusItem
     */
    bsis_blce_qy: string;
    /**
     * 기초 잔액 지분 율
     * @type {string}
     * @memberof OtrCprInvstmntSttusItem
     */
    bsis_blce_qota_rt: string;
    /**
     * 기초 잔액 장부 가액
     * @type {string}
     * @memberof OtrCprInvstmntSttusItem
     */
    bsis_blce_acntbk_amount: string;
    /**
     * 증가 감소 취득 처분 수량
     * @type {string}
     * @memberof OtrCprInvstmntSttusItem
     */
    incrs_dcrs_acqs_dsps_qy: string;
    /**
     * 증가 감소 취득 처분 금액
     * @type {string}
     * @memberof OtrCprInvstmntSttusItem
     */
    incrs_dcrs_acqs_dsps_amount: string;
    /**
     * 증가 감소 평가 손익
     * @type {string}
     * @memberof OtrCprInvstmntSttusItem
     */
    incrs_dcrs_evl_lstmn: string;
    /**
     * 기말 잔액 수량
     * @type {string}
     * @memberof OtrCprInvstmntSttusItem
     */
    trmend_blce_qy: string;
    /**
     * 기말 잔액 지분율
     * @type {string}
     * @memberof OtrCprInvstmntSttusItem
     */
    trmend_blce_qota_rt: string;
    /**
     * 기말 잔액 장부 가액
     * @type {string}
     * @memberof OtrCprInvstmntSttusItem
     */
    trmend_blce_acntbk_amount: string;
    /**
     * 최근 사업 연도 재무 현황 총 자산
     * @type {string}
     * @memberof OtrCprInvstmntSttusItem
     */
    recent_bsns_year_fnnr_sttus_tot_assets: string;
    /**
     * 최근 사업 연도 재무 현황 당기 순이익
     * @type {string}
     * @memberof OtrCprInvstmntSttusItem
     */
    recent_bsns_year_fnnr_sttus_thstrm_ntpf: string;
}
/**
 * @type OtrCprInvstmntSttusResponse
 * 
 * @export
 */
export type OtrCprInvstmntSttusResponse = CommonError | OtrCprInvstmntSttusResponseSuccess;
/**
 * 
 * @export
 * @interface OtrCprInvstmntSttusResponseSuccess
 */
export interface OtrCprInvstmntSttusResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof OtrCprInvstmntSttusResponseSuccess
     */
    status: OtrCprInvstmntSttusResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof OtrCprInvstmntSttusResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<OtrCprInvstmntSttusItem>}
     * @memberof OtrCprInvstmntSttusResponseSuccess
     */
    list: Array<OtrCprInvstmntSttusItem>;
}

/**
 * 에러 및 정보 코드
 */
export type OtrCprInvstmntSttusResponseSuccessStatusEnum =
    '000'

const OtrCprInvstmntSttusResponseSuccessStatusEnumValues = [
    '000',
]

export function isOtrCprInvstmntSttusResponseSuccessStatusEnum(value: any): value is OtrCprInvstmntSttusResponseSuccessStatusEnum {
    return OtrCprInvstmntSttusResponseSuccessStatusEnumValues.indexOf(value as unknown as OtrCprInvstmntSttusResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface OtrCprInvstmntSttusResponseSuccessAllOf
 */
export interface OtrCprInvstmntSttusResponseSuccessAllOf {
    /**
     * 
     * @type {Array<OtrCprInvstmntSttusItem>}
     * @memberof OtrCprInvstmntSttusResponseSuccessAllOf
     */
    list: Array<OtrCprInvstmntSttusItem>;
}
/**
 * 
 * @export
 * @interface OutcmpnyDrctrNdChangeSttusItem
 */
export interface OutcmpnyDrctrNdChangeSttusItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof OutcmpnyDrctrNdChangeSttusItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof OutcmpnyDrctrNdChangeSttusItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof OutcmpnyDrctrNdChangeSttusItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof OutcmpnyDrctrNdChangeSttusItem
     */
    corp_name: string;
    /**
     * 이사의 수
     * @type {string}
     * @memberof OutcmpnyDrctrNdChangeSttusItem
     */
    drctr_co: string;
    /**
     * 사외이사의 수
     * @type {string}
     * @memberof OutcmpnyDrctrNdChangeSttusItem
     */
    otcmp_drctr_co: string;
    /**
     * 사외이사 변동현황(선임)
     * @type {string}
     * @memberof OutcmpnyDrctrNdChangeSttusItem
     */
    apnt: string;
    /**
     * 사외이사 변동현황(해임)
     * @type {string}
     * @memberof OutcmpnyDrctrNdChangeSttusItem
     */
    rlsofc: string;
    /**
     * 사외이사 변동현황(중도해임)
     * @type {string}
     * @memberof OutcmpnyDrctrNdChangeSttusItem
     */
    mdstrm_resig: string;
}
/**
 * @type OutcmpnyDrctrNdChangeSttusResponse
 * 
 * @export
 */
export type OutcmpnyDrctrNdChangeSttusResponse = CommonError | OutcmpnyDrctrNdChangeSttusResponseSuccess;
/**
 * 
 * @export
 * @interface OutcmpnyDrctrNdChangeSttusResponseSuccess
 */
export interface OutcmpnyDrctrNdChangeSttusResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof OutcmpnyDrctrNdChangeSttusResponseSuccess
     */
    status: OutcmpnyDrctrNdChangeSttusResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof OutcmpnyDrctrNdChangeSttusResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<OutcmpnyDrctrNdChangeSttusItem>}
     * @memberof OutcmpnyDrctrNdChangeSttusResponseSuccess
     */
    list: Array<OutcmpnyDrctrNdChangeSttusItem>;
}

/**
 * 에러 및 정보 코드
 */
export type OutcmpnyDrctrNdChangeSttusResponseSuccessStatusEnum =
    '000'

const OutcmpnyDrctrNdChangeSttusResponseSuccessStatusEnumValues = [
    '000',
]

export function isOutcmpnyDrctrNdChangeSttusResponseSuccessStatusEnum(value: any): value is OutcmpnyDrctrNdChangeSttusResponseSuccessStatusEnum {
    return OutcmpnyDrctrNdChangeSttusResponseSuccessStatusEnumValues.indexOf(value as unknown as OutcmpnyDrctrNdChangeSttusResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface OutcmpnyDrctrNdChangeSttusResponseSuccessAllOf
 */
export interface OutcmpnyDrctrNdChangeSttusResponseSuccessAllOf {
    /**
     * 
     * @type {Array<OutcmpnyDrctrNdChangeSttusItem>}
     * @memberof OutcmpnyDrctrNdChangeSttusResponseSuccessAllOf
     */
    list: Array<OutcmpnyDrctrNdChangeSttusItem>;
}
/**
 * 
 * @export
 * @interface OvDlstDecsnItem
 */
export interface OvDlstDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof OvDlstDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof OvDlstDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof OvDlstDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof OvDlstDecsnItem
     */
    corp_name: string;
    /**
     * 상장폐지주식 종류ㆍ수(주)(보통주식)
     * @type {string}
     * @memberof OvDlstDecsnItem
     */
    dlststk_ostk_cnt: string;
    /**
     * 상장폐지주식 종류ㆍ수(주)(기타주식)
     * @type {string}
     * @memberof OvDlstDecsnItem
     */
    dlststk_estk_cnt: string;
    /**
     * 상장거래소(소재국가)
     * @type {string}
     * @memberof OvDlstDecsnItem
     */
    lstex_nt: string;
    /**
     * 폐지신청예정일자
     * @type {string}
     * @memberof OvDlstDecsnItem
     */
    dlstrq_prd: string;
    /**
     * 폐지(예정)일자
     * @type {string}
     * @memberof OvDlstDecsnItem
     */
    dlst_prd: string;
    /**
     * 폐지사유
     * @type {string}
     * @memberof OvDlstDecsnItem
     */
    dlst_rs: string;
    /**
     * 이사회결의일(확인일)
     * @type {string}
     * @memberof OvDlstDecsnItem
     */
    bddd: string;
    /**
     * 사외이사 참석여부(참석(명))
     * @type {string}
     * @memberof OvDlstDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사 참석여부(불참(명))
     * @type {string}
     * @memberof OvDlstDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(감사위원)참석여부
     * @type {string}
     * @memberof OvDlstDecsnItem
     */
    adt_a_atn: string;
}
/**
 * @type OvDlstDecsnResponse
 * 
 * @export
 */
export type OvDlstDecsnResponse = CommonError | OvDlstDecsnResponseSuccess;
/**
 * 
 * @export
 * @interface OvDlstDecsnResponseSuccess
 */
export interface OvDlstDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof OvDlstDecsnResponseSuccess
     */
    status: OvDlstDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof OvDlstDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<OvDlstDecsnItem>}
     * @memberof OvDlstDecsnResponseSuccess
     */
    list: Array<OvDlstDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type OvDlstDecsnResponseSuccessStatusEnum =
    '000'

const OvDlstDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isOvDlstDecsnResponseSuccessStatusEnum(value: any): value is OvDlstDecsnResponseSuccessStatusEnum {
    return OvDlstDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as OvDlstDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface OvDlstDecsnResponseSuccessAllOf
 */
export interface OvDlstDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<OvDlstDecsnItem>}
     * @memberof OvDlstDecsnResponseSuccessAllOf
     */
    list: Array<OvDlstDecsnItem>;
}
/**
 * 
 * @export
 * @interface OvDlstItem
 */
export interface OvDlstItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof OvDlstItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof OvDlstItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof OvDlstItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof OvDlstItem
     */
    corp_name: string;
    /**
     * 상장거래소 및 소재국가
     * @type {string}
     * @memberof OvDlstItem
     */
    lstex_nt: string;
    /**
     * 상장폐지주식의 종류(보통주식(주))
     * @type {string}
     * @memberof OvDlstItem
     */
    dlststk_ostk_cnt: string;
    /**
     * 상장폐지주식의 종류(기타주식(주))
     * @type {string}
     * @memberof OvDlstItem
     */
    dlststk_estk_cnt: string;
    /**
     * 매매거래종료일
     * @type {string}
     * @memberof OvDlstItem
     */
    tredd: string;
    /**
     * 폐지사유
     * @type {string}
     * @memberof OvDlstItem
     */
    dlst_rs: string;
    /**
     * 확인일자
     * @type {string}
     * @memberof OvDlstItem
     */
    cfd: string;
}
/**
 * @type OvDlstResponse
 * 
 * @export
 */
export type OvDlstResponse = CommonError | OvDlstResponseSuccess;
/**
 * 
 * @export
 * @interface OvDlstResponseSuccess
 */
export interface OvDlstResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof OvDlstResponseSuccess
     */
    status: OvDlstResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof OvDlstResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<OvDlstItem>}
     * @memberof OvDlstResponseSuccess
     */
    list: Array<OvDlstItem>;
}

/**
 * 에러 및 정보 코드
 */
export type OvDlstResponseSuccessStatusEnum =
    '000'

const OvDlstResponseSuccessStatusEnumValues = [
    '000',
]

export function isOvDlstResponseSuccessStatusEnum(value: any): value is OvDlstResponseSuccessStatusEnum {
    return OvDlstResponseSuccessStatusEnumValues.indexOf(value as unknown as OvDlstResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface OvDlstResponseSuccessAllOf
 */
export interface OvDlstResponseSuccessAllOf {
    /**
     * 
     * @type {Array<OvDlstItem>}
     * @memberof OvDlstResponseSuccessAllOf
     */
    list: Array<OvDlstItem>;
}
/**
 * 
 * @export
 * @interface OvLstDecsnItem
 */
export interface OvLstDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof OvLstDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof OvLstDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof OvLstDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof OvLstDecsnItem
     */
    corp_name: string;
    /**
     * 상장예정주식 종류ㆍ수(주)(보통주식)
     * @type {string}
     * @memberof OvLstDecsnItem
     */
    lstprstk_ostk_cnt: string;
    /**
     * 상장예정주식 종류ㆍ수(주)(기타주식)
     * @type {string}
     * @memberof OvLstDecsnItem
     */
    lstprstk_estk_cnt: string;
    /**
     * 발행주식 총수(주)(보통주식)
     * @type {string}
     * @memberof OvLstDecsnItem
     */
    tisstk_ostk: string;
    /**
     * 발행주식 총수(주)(기타주식)
     * @type {string}
     * @memberof OvLstDecsnItem
     */
    tisstk_estk: string;
    /**
     * 공모방법(신주발행 (주))
     * @type {string}
     * @memberof OvLstDecsnItem
     */
    psmth_nstk_sl: string;
    /**
     * 공모방법(구주매출 (주))
     * @type {string}
     * @memberof OvLstDecsnItem
     */
    psmth_ostk_sl: string;
    /**
     * 자금조달(신주발행) 목적
     * @type {string}
     * @memberof OvLstDecsnItem
     */
    fdpp: string;
    /**
     * 상장증권(원주상장 (주))
     * @type {string}
     * @memberof OvLstDecsnItem
     */
    lststk_orlst: string;
    /**
     * 상장증권(DR상장 (주))
     * @type {string}
     * @memberof OvLstDecsnItem
     */
    lststk_drlst: string;
    /**
     * 상장거래소(소재국가)
     * @type {string}
     * @memberof OvLstDecsnItem
     */
    lstex_nt: string;
    /**
     * 해외상장목적
     * @type {string}
     * @memberof OvLstDecsnItem
     */
    lstpp: string;
    /**
     * 상장예정일자
     * @type {string}
     * @memberof OvLstDecsnItem
     */
    lstprd: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof OvLstDecsnItem
     */
    bddd: string;
    /**
     * 사외이사 참석여부(참석(명))
     * @type {string}
     * @memberof OvLstDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사 참석여부(불참(명))
     * @type {string}
     * @memberof OvLstDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(감사위원)참석여부
     * @type {string}
     * @memberof OvLstDecsnItem
     */
    adt_a_atn: string;
}
/**
 * @type OvLstDecsnResponse
 * 
 * @export
 */
export type OvLstDecsnResponse = CommonError | OvLstDecsnResponseSuccess;
/**
 * 
 * @export
 * @interface OvLstDecsnResponseSuccess
 */
export interface OvLstDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof OvLstDecsnResponseSuccess
     */
    status: OvLstDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof OvLstDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<OvLstDecsnItem>}
     * @memberof OvLstDecsnResponseSuccess
     */
    list: Array<OvLstDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type OvLstDecsnResponseSuccessStatusEnum =
    '000'

const OvLstDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isOvLstDecsnResponseSuccessStatusEnum(value: any): value is OvLstDecsnResponseSuccessStatusEnum {
    return OvLstDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as OvLstDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface OvLstDecsnResponseSuccessAllOf
 */
export interface OvLstDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<OvLstDecsnItem>}
     * @memberof OvLstDecsnResponseSuccessAllOf
     */
    list: Array<OvLstDecsnItem>;
}
/**
 * 
 * @export
 * @interface OvLstItem
 */
export interface OvLstItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof OvLstItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof OvLstItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof OvLstItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof OvLstItem
     */
    corp_name: string;
    /**
     * 상장주식 종류 및 수(보통주식(주))
     * @type {string}
     * @memberof OvLstItem
     */
    lststk_ostk_cnt: string;
    /**
     * 상장주식 종류 및 수(기타주식(주))
     * @type {string}
     * @memberof OvLstItem
     */
    lststk_estk_cnt: string;
    /**
     * 상장거래소(소재국가)
     * @type {string}
     * @memberof OvLstItem
     */
    lstex_nt: string;
    /**
     * 종목 명 (code)
     * @type {string}
     * @memberof OvLstItem
     */
    stk_cd: string;
    /**
     * 상장일자
     * @type {string}
     * @memberof OvLstItem
     */
    lstd: string;
    /**
     * 확인일자
     * @type {string}
     * @memberof OvLstItem
     */
    cfd: string;
}
/**
 * @type OvLstResponse
 * 
 * @export
 */
export type OvLstResponse = CommonError | OvLstResponseSuccess;
/**
 * 
 * @export
 * @interface OvLstResponseSuccess
 */
export interface OvLstResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof OvLstResponseSuccess
     */
    status: OvLstResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof OvLstResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<OvLstItem>}
     * @memberof OvLstResponseSuccess
     */
    list: Array<OvLstItem>;
}

/**
 * 에러 및 정보 코드
 */
export type OvLstResponseSuccessStatusEnum =
    '000'

const OvLstResponseSuccessStatusEnumValues = [
    '000',
]

export function isOvLstResponseSuccessStatusEnum(value: any): value is OvLstResponseSuccessStatusEnum {
    return OvLstResponseSuccessStatusEnumValues.indexOf(value as unknown as OvLstResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface OvLstResponseSuccessAllOf
 */
export interface OvLstResponseSuccessAllOf {
    /**
     * 
     * @type {Array<OvLstItem>}
     * @memberof OvLstResponseSuccessAllOf
     */
    list: Array<OvLstItem>;
}
/**
 * 
 * @export
 * @interface Pagination
 */
export interface Pagination {
    /**
     * 페이지 번호
     * @type {number}
     * @memberof Pagination
     */
    page_no: number;
    /**
     * 페이지 별 건수
     * @type {number}
     * @memberof Pagination
     */
    page_count: number;
    /**
     * 총 건수
     * @type {number}
     * @memberof Pagination
     */
    total_count: number;
    /**
     * 총 페이지 수
     * @type {number}
     * @memberof Pagination
     */
    total_page: number;
}
/**
 * 
 * @export
 * @interface PifricDecsnItem
 */
export interface PifricDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof PifricDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof PifricDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof PifricDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof PifricDecsnItem
     */
    corp_name: string;
    /**
     * 유상증자(신주의 종류와 수(보통주식 (주)))
     * @type {string}
     * @memberof PifricDecsnItem
     */
    piic_nstk_ostk_cnt: string;
    /**
     * 유상증자(신주의 종류와 수(기타주식 (주)))
     * @type {string}
     * @memberof PifricDecsnItem
     */
    piic_nstk_estk_cnt: string;
    /**
     * 유상증자(1주당 액면가액 (원))
     * @type {string}
     * @memberof PifricDecsnItem
     */
    piic_fv_ps: string;
    /**
     * 유상증자(증자전 발행주식총수 (주)(보통주식 (주)))
     * @type {string}
     * @memberof PifricDecsnItem
     */
    piic_bfic_tisstk_ostk: string;
    /**
     * 유상증자(증자전 발행주식총수 (주)(기타주식 (주)))
     * @type {string}
     * @memberof PifricDecsnItem
     */
    piic_bfic_tisstk_estk: string;
    /**
     * 유상증자(자금조달의 목적(시설자금 (원)))
     * @type {string}
     * @memberof PifricDecsnItem
     */
    piic_fdpp_fclt: string;
    /**
     * 유상증자(자금조달의 목적(영업양수자금 (원)))
     * @type {string}
     * @memberof PifricDecsnItem
     */
    piic_fdpp_bsninh: string;
    /**
     * 유상증자(자금조달의 목적(운영자금 (원)))
     * @type {string}
     * @memberof PifricDecsnItem
     */
    piic_fdpp_op: string;
    /**
     * 유상증자(자금조달의 목적(채무상환자금 (원)))
     * @type {string}
     * @memberof PifricDecsnItem
     */
    piic_fdpp_dtrp: string;
    /**
     * 유상증자(자금조달의 목적(타법인 증권 취득자금 (원)))
     * @type {string}
     * @memberof PifricDecsnItem
     */
    piic_fdpp_ocsa: string;
    /**
     * 유상증자(자금조달의 목적(기타자금 (원)))
     * @type {string}
     * @memberof PifricDecsnItem
     */
    piic_fdpp_etc: string;
    /**
     * 유상증자(증자방식)
     * @type {string}
     * @memberof PifricDecsnItem
     */
    piic_ic_mthn: string;
    /**
     * 무상증자(신주의 종류와 수(보통주식 (주)))
     * @type {string}
     * @memberof PifricDecsnItem
     */
    fric_nstk_ostk_cnt: string;
    /**
     * 무상증자(신주의 종류와 수(기타주식 (주)))
     * @type {string}
     * @memberof PifricDecsnItem
     */
    fric_nstk_estk_cnt: string;
    /**
     * 무상증자(1주당 액면가액 (원))
     * @type {string}
     * @memberof PifricDecsnItem
     */
    fric_fv_ps: string;
    /**
     * 무상증자(증자전 발행주식총수(보통주식 (주)))
     * @type {string}
     * @memberof PifricDecsnItem
     */
    fric_bfic_tisstk_ostk: string;
    /**
     * 무상증자(증자전 발행주식총수(기타주식 (주)))
     * @type {string}
     * @memberof PifricDecsnItem
     */
    fric_bfic_tisstk_estk: string;
    /**
     * 무상증자(신주배정기준일)
     * @type {string}
     * @memberof PifricDecsnItem
     */
    fric_nstk_asstd: string;
    /**
     * 무상증자(1주당 신주배정 주식수(보통주식 (주)))
     * @type {string}
     * @memberof PifricDecsnItem
     */
    fric_nstk_ascnt_ps_ostk: string;
    /**
     * 무상증자(1주당 신주배정 주식수(기타주식 (주)))
     * @type {string}
     * @memberof PifricDecsnItem
     */
    fric_nstk_ascnt_ps_estk: string;
    /**
     * 무상증자(신주의 배당기산일)
     * @type {string}
     * @memberof PifricDecsnItem
     */
    fric_nstk_dividrk: string;
    /**
     * 무상증자(신주권교부예정일)
     * @type {string}
     * @memberof PifricDecsnItem
     */
    fric_nstk_dlprd: string;
    /**
     * 무상증자(신주의 상장 예정일)
     * @type {string}
     * @memberof PifricDecsnItem
     */
    fric_nstk_lstprd: string;
    /**
     * 무상증자(이사회결의일(결정일))
     * @type {string}
     * @memberof PifricDecsnItem
     */
    fric_bddd: string;
    /**
     * 무상증자(사외이사 참석여부(참석(명)))
     * @type {string}
     * @memberof PifricDecsnItem
     */
    fric_od_a_at_t: string;
    /**
     * 무상증자(사외이사 참석여부(불참(명)))
     * @type {string}
     * @memberof PifricDecsnItem
     */
    fric_od_a_at_b: string;
    /**
     * 무상증자(감사(감사위원)참석 여부)
     * @type {string}
     * @memberof PifricDecsnItem
     */
    fric_adt_a_atn: string;
    /**
     * 공매도 해당여부
     * @type {string}
     * @memberof PifricDecsnItem
     */
    ssl_at: string;
    /**
     * 공매도 시작일
     * @type {string}
     * @memberof PifricDecsnItem
     */
    ssl_bgd: string;
    /**
     * 공매도 종료일
     * @type {string}
     * @memberof PifricDecsnItem
     */
    ssl_edd: string;
}
/**
 * @type PifricDecsnResponse
 * 
 * @export
 */
export type PifricDecsnResponse = CommonError | PifricDecsnResponseSuccess;
/**
 * 
 * @export
 * @interface PifricDecsnResponseSuccess
 */
export interface PifricDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof PifricDecsnResponseSuccess
     */
    status: PifricDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof PifricDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<PifricDecsnItem>}
     * @memberof PifricDecsnResponseSuccess
     */
    list: Array<PifricDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type PifricDecsnResponseSuccessStatusEnum =
    '000'

const PifricDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isPifricDecsnResponseSuccessStatusEnum(value: any): value is PifricDecsnResponseSuccessStatusEnum {
    return PifricDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as PifricDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface PifricDecsnResponseSuccessAllOf
 */
export interface PifricDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<PifricDecsnItem>}
     * @memberof PifricDecsnResponseSuccessAllOf
     */
    list: Array<PifricDecsnItem>;
}
/**
 * 
 * @export
 * @interface PiicDecsnItem
 */
export interface PiicDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof PiicDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof PiicDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof PiicDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof PiicDecsnItem
     */
    corp_name: string;
    /**
     * 신주의 종류와 수(보통주식 (주))
     * @type {string}
     * @memberof PiicDecsnItem
     */
    nstk_ostk_cnt: string;
    /**
     * 신주의 종류와 수(기타주식 (주))
     * @type {string}
     * @memberof PiicDecsnItem
     */
    nstk_estk_cnt: string;
    /**
     * 1주당 액면가액 (원)
     * @type {string}
     * @memberof PiicDecsnItem
     */
    fv_ps: string;
    /**
     * 증자전 발행주식총수 (주)(보통주식 (주))
     * @type {string}
     * @memberof PiicDecsnItem
     */
    bfic_tisstk_ostk: string;
    /**
     * 증자전 발행주식총수 (주)(기타주식 (주))
     * @type {string}
     * @memberof PiicDecsnItem
     */
    bfic_tisstk_estk: string;
    /**
     * 자금조달의 목적(시설자금 (원))
     * @type {string}
     * @memberof PiicDecsnItem
     */
    fdpp_fclt: string;
    /**
     * 자금조달의 목적(영업양수자금 (원))
     * @type {string}
     * @memberof PiicDecsnItem
     */
    fdpp_bsninh: string;
    /**
     * 자금조달의 목적(운영자금 (원))
     * @type {string}
     * @memberof PiicDecsnItem
     */
    fdpp_op: string;
    /**
     * 자금조달의 목적(채무상환자금 (원))
     * @type {string}
     * @memberof PiicDecsnItem
     */
    fdpp_dtrp: string;
    /**
     * 자금조달의 목적(타법인 증권 취득자금 (원))
     * @type {string}
     * @memberof PiicDecsnItem
     */
    fdpp_ocsa: string;
    /**
     * 자금조달의 목적(기타자금 (원))
     * @type {string}
     * @memberof PiicDecsnItem
     */
    fdpp_etc: string;
    /**
     * 증자방식
     * @type {string}
     * @memberof PiicDecsnItem
     */
    ic_mthn: string;
    /**
     * 공매도 해당여부
     * @type {string}
     * @memberof PiicDecsnItem
     */
    ssl_at: string;
    /**
     * 공매도 시작일
     * @type {string}
     * @memberof PiicDecsnItem
     */
    ssl_bgd: string;
    /**
     * 공매도 종료일
     * @type {string}
     * @memberof PiicDecsnItem
     */
    ssl_edd: string;
}
/**
 * @type PiicDecsnResponse
 * 
 * @export
 */
export type PiicDecsnResponse = CommonError | PiicDecsnResponseSuccess;
/**
 * 
 * @export
 * @interface PiicDecsnResponseSuccess
 */
export interface PiicDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof PiicDecsnResponseSuccess
     */
    status: PiicDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof PiicDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<PiicDecsnItem>}
     * @memberof PiicDecsnResponseSuccess
     */
    list: Array<PiicDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type PiicDecsnResponseSuccessStatusEnum =
    '000'

const PiicDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isPiicDecsnResponseSuccessStatusEnum(value: any): value is PiicDecsnResponseSuccessStatusEnum {
    return PiicDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as PiicDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface PiicDecsnResponseSuccessAllOf
 */
export interface PiicDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<PiicDecsnItem>}
     * @memberof PiicDecsnResponseSuccessAllOf
     */
    list: Array<PiicDecsnItem>;
}
/**
 * 
 * @export
 * @interface PrvsrpCptalUseDtlItem
 */
export interface PrvsrpCptalUseDtlItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof PrvsrpCptalUseDtlItem
     */
    rcept_no?: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof PrvsrpCptalUseDtlItem
     */
    corp_cls?: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof PrvsrpCptalUseDtlItem
     */
    corp_code?: string;
    /**
     * 회사명
     * @type {string}
     * @memberof PrvsrpCptalUseDtlItem
     */
    corp_name?: string;
    /**
     * 구분
     * @type {string}
     * @memberof PrvsrpCptalUseDtlItem
     */
    se_nm?: string;
    /**
     * 회차
     * *③ 2019년 12월 9일부터 추가됨*
     * @type {string}
     * @memberof PrvsrpCptalUseDtlItem
     */
    tm?: string;
    /**
     * 납입일
     * @type {string}
     * @memberof PrvsrpCptalUseDtlItem
     */
    pay_de?: string;
    /**
     * 납입금액
     * *① 2018년 1월 18일까지 사용됨*
     * @type {string}
     * @memberof PrvsrpCptalUseDtlItem
     */
    pay_amount?: string;
    /**
     * 자금사용 계획
     * *① 2018년 1월 18일까지 사용됨*
     * @type {string}
     * @memberof PrvsrpCptalUseDtlItem
     */
    cptal_use_plan?: string;
    /**
     * 실제 자금사용 현황
     * *① 2018년 1월 18일까지 사용됨*
     * @type {string}
     * @memberof PrvsrpCptalUseDtlItem
     */
    real_cptal_use_sttus?: string;
    /**
     * 주요사항보고서의 자금사용 계획(사용용도)
     * *② 2018년 1월 19일부터 추가됨*
     * @type {string}
     * @memberof PrvsrpCptalUseDtlItem
     */
    mtrpt_cptal_use_plan_useprps?: string;
    /**
     * 주요사항보고서의 자금사용 계획(조달금액)
     * *② 2018년 1월 19일부터 추가됨*
     * @type {string}
     * @memberof PrvsrpCptalUseDtlItem
     */
    mtrpt_cptal_use_plan_prcure_amount?: string;
    /**
     * 실제 자금사용 내역(내용)
     * *② 2018년 1월 19일부터 추가됨*
     * @type {string}
     * @memberof PrvsrpCptalUseDtlItem
     */
    real_cptal_use_dtls_cn?: string;
    /**
     * 실제 자금사용 내역(금액)
     * *② 2018년 1월 19일부터 추가됨*
     * @type {string}
     * @memberof PrvsrpCptalUseDtlItem
     */
    real_cptal_use_dtls_amount?: string;
    /**
     * 차이발생 사유 등
     * @type {string}
     * @memberof PrvsrpCptalUseDtlItem
     */
    dffrnc_occrrnc_resn?: string;
}
/**
 * @type PrvsrpCptalUseDtlsResponse
 * 
 * @export
 */
export type PrvsrpCptalUseDtlsResponse = CommonError | PrvsrpCptalUseDtlsResponseSuccess;
/**
 * 
 * @export
 * @interface PrvsrpCptalUseDtlsResponseSuccess
 */
export interface PrvsrpCptalUseDtlsResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof PrvsrpCptalUseDtlsResponseSuccess
     */
    status: PrvsrpCptalUseDtlsResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof PrvsrpCptalUseDtlsResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<PrvsrpCptalUseDtlItem>}
     * @memberof PrvsrpCptalUseDtlsResponseSuccess
     */
    list: Array<PrvsrpCptalUseDtlItem>;
}

/**
 * 에러 및 정보 코드
 */
export type PrvsrpCptalUseDtlsResponseSuccessStatusEnum =
    '000'

const PrvsrpCptalUseDtlsResponseSuccessStatusEnumValues = [
    '000',
]

export function isPrvsrpCptalUseDtlsResponseSuccessStatusEnum(value: any): value is PrvsrpCptalUseDtlsResponseSuccessStatusEnum {
    return PrvsrpCptalUseDtlsResponseSuccessStatusEnumValues.indexOf(value as unknown as PrvsrpCptalUseDtlsResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface PrvsrpCptalUseDtlsResponseSuccessAllOf
 */
export interface PrvsrpCptalUseDtlsResponseSuccessAllOf {
    /**
     * 
     * @type {Array<PrvsrpCptalUseDtlItem>}
     * @memberof PrvsrpCptalUseDtlsResponseSuccessAllOf
     */
    list: Array<PrvsrpCptalUseDtlItem>;
}
/**
 * 
 * @export
 * @interface PssrpCptalUseDtlItem
 */
export interface PssrpCptalUseDtlItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof PssrpCptalUseDtlItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof PssrpCptalUseDtlItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof PssrpCptalUseDtlItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof PssrpCptalUseDtlItem
     */
    corp_name: string;
    /**
     * 구분
     * @type {string}
     * @memberof PssrpCptalUseDtlItem
     */
    se_nm: string;
    /**
     * 회차
     * *③ 2019년 12월 9일부터 추가됨*
     * @type {string}
     * @memberof PssrpCptalUseDtlItem
     */
    tm?: string;
    /**
     * 납입일
     * @type {string}
     * @memberof PssrpCptalUseDtlItem
     */
    pay_de: string;
    /**
     * 납입금액
     * *① 2018년 1월 18일까지 사용됨*
     * @type {string}
     * @memberof PssrpCptalUseDtlItem
     */
    pay_amount: string;
    /**
     * 신고서상 자금사용 계획
     * *① 2018년 1월 18일까지 사용됨*
     * @type {string}
     * @memberof PssrpCptalUseDtlItem
     */
    on_dclrt_cptal_use_plan: string;
    /**
     * 실제 자금사용 현황
     * *① 2018년 1월 18일까지 사용됨*
     * @type {string}
     * @memberof PssrpCptalUseDtlItem
     */
    real_cptal_use_sttus: string;
    /**
     * 증권신고서 등의 자금사용 계획(사용용도)
     * *② 2018년 1월 19일부터 추가됨*
     * @type {string}
     * @memberof PssrpCptalUseDtlItem
     */
    rs_cptal_use_plan_useprps?: string;
    /**
     * 증권신고서 등의 자금사용 계획(조달금액)
     * *② 2018년 1월 19일부터 추가됨*
     * @type {string}
     * @memberof PssrpCptalUseDtlItem
     */
    rs_cptal_use_plan_prcure_amount?: string;
    /**
     * 실제 자금사용 내역(내용)
     * *② 2018년 1월 19일부터 추가됨*
     * @type {string}
     * @memberof PssrpCptalUseDtlItem
     */
    real_cptal_use_dtls_cn?: string;
    /**
     * 실제 자금사용 내역(금액)
     * *② 2018년 1월 19일부터 추가됨*
     * @type {string}
     * @memberof PssrpCptalUseDtlItem
     */
    real_cptal_use_dtls_amount?: string;
    /**
     * 차이발생 사유 등
     * @type {string}
     * @memberof PssrpCptalUseDtlItem
     */
    dffrnc_occrrnc_resn?: string;
}
/**
 * @type PssrpCptalUseDtlsResponse
 * 
 * @export
 */
export type PssrpCptalUseDtlsResponse = CommonError | PssrpCptalUseDtlsResponseSuccess;
/**
 * 
 * @export
 * @interface PssrpCptalUseDtlsResponseSuccess
 */
export interface PssrpCptalUseDtlsResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof PssrpCptalUseDtlsResponseSuccess
     */
    status: PssrpCptalUseDtlsResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof PssrpCptalUseDtlsResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<PssrpCptalUseDtlItem>}
     * @memberof PssrpCptalUseDtlsResponseSuccess
     */
    list: Array<PssrpCptalUseDtlItem>;
}

/**
 * 에러 및 정보 코드
 */
export type PssrpCptalUseDtlsResponseSuccessStatusEnum =
    '000'

const PssrpCptalUseDtlsResponseSuccessStatusEnumValues = [
    '000',
]

export function isPssrpCptalUseDtlsResponseSuccessStatusEnum(value: any): value is PssrpCptalUseDtlsResponseSuccessStatusEnum {
    return PssrpCptalUseDtlsResponseSuccessStatusEnumValues.indexOf(value as unknown as PssrpCptalUseDtlsResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface PssrpCptalUseDtlsResponseSuccessAllOf
 */
export interface PssrpCptalUseDtlsResponseSuccessAllOf {
    /**
     * 
     * @type {Array<PssrpCptalUseDtlItem>}
     * @memberof PssrpCptalUseDtlsResponseSuccessAllOf
     */
    list: Array<PssrpCptalUseDtlItem>;
}
/**
 * 보고서코드
 * - 사업보고서 : 11011
 * - 반기보고서 : 11012
 * - 1분기보고서 : 11013
 * - 3분기보고서 : 11014
 */
export type ReportCode =
    '11011'|
    '11012'|
    '11013'|
    '11014'

/**
 * 
 * @export
 * @interface SrtpdPsndbtNrdmpBlceItem
 */
export interface SrtpdPsndbtNrdmpBlceItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof SrtpdPsndbtNrdmpBlceItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof SrtpdPsndbtNrdmpBlceItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof SrtpdPsndbtNrdmpBlceItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof SrtpdPsndbtNrdmpBlceItem
     */
    corp_name: string;
    /**
     * 잔여만기
     * @type {string}
     * @memberof SrtpdPsndbtNrdmpBlceItem
     */
    remndr_exprtn1: string;
    /**
     * 잔여만기
     * @type {string}
     * @memberof SrtpdPsndbtNrdmpBlceItem
     */
    remndr_exprtn2: string;
    /**
     * 10일 이하
     * @type {string}
     * @memberof SrtpdPsndbtNrdmpBlceItem
     */
    de10_below: string;
    /**
     * 10일 초과 30일 이하
     * @type {string}
     * @memberof SrtpdPsndbtNrdmpBlceItem
     */
    de10_excess_de30_below: string;
    /**
     * 30일 초과 90일 이하
     * @type {string}
     * @memberof SrtpdPsndbtNrdmpBlceItem
     */
    de30_excess_de90_below: string;
    /**
     * 90일 초과 180일 이하
     * @type {string}
     * @memberof SrtpdPsndbtNrdmpBlceItem
     */
    de90_excess_de180_below: string;
    /**
     * 180일 초과 1년 이하
     * @type {string}
     * @memberof SrtpdPsndbtNrdmpBlceItem
     */
    de180_excess_yy1_below: string;
    /**
     * 합계
     * @type {string}
     * @memberof SrtpdPsndbtNrdmpBlceItem
     */
    sm: string;
    /**
     * 발행 한도
     * @type {string}
     * @memberof SrtpdPsndbtNrdmpBlceItem
     */
    isn_lmt: string;
    /**
     * 잔여 한도
     * @type {string}
     * @memberof SrtpdPsndbtNrdmpBlceItem
     */
    remndr_lmt: string;
}
/**
 * @type SrtpdPsndbtNrdmpBlceResponse
 * 
 * @export
 */
export type SrtpdPsndbtNrdmpBlceResponse = CommonError | SrtpdPsndbtNrdmpBlceResponseSuccess;
/**
 * 
 * @export
 * @interface SrtpdPsndbtNrdmpBlceResponseSuccess
 */
export interface SrtpdPsndbtNrdmpBlceResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof SrtpdPsndbtNrdmpBlceResponseSuccess
     */
    status: SrtpdPsndbtNrdmpBlceResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof SrtpdPsndbtNrdmpBlceResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<SrtpdPsndbtNrdmpBlceItem>}
     * @memberof SrtpdPsndbtNrdmpBlceResponseSuccess
     */
    list: Array<SrtpdPsndbtNrdmpBlceItem>;
}

/**
 * 에러 및 정보 코드
 */
export type SrtpdPsndbtNrdmpBlceResponseSuccessStatusEnum =
    '000'

const SrtpdPsndbtNrdmpBlceResponseSuccessStatusEnumValues = [
    '000',
]

export function isSrtpdPsndbtNrdmpBlceResponseSuccessStatusEnum(value: any): value is SrtpdPsndbtNrdmpBlceResponseSuccessStatusEnum {
    return SrtpdPsndbtNrdmpBlceResponseSuccessStatusEnumValues.indexOf(value as unknown as SrtpdPsndbtNrdmpBlceResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface SrtpdPsndbtNrdmpBlceResponseSuccessAllOf
 */
export interface SrtpdPsndbtNrdmpBlceResponseSuccessAllOf {
    /**
     * 
     * @type {Array<SrtpdPsndbtNrdmpBlceItem>}
     * @memberof SrtpdPsndbtNrdmpBlceResponseSuccessAllOf
     */
    list: Array<SrtpdPsndbtNrdmpBlceItem>;
}
/**
 * 
 * @export
 * @interface StkExtrDecsnItem
 */
export interface StkExtrDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof StkExtrDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    corp_name: string;
    /**
     * 구분
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extr_sen: string;
    /**
     * 교환ㆍ이전 형태
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extr_stn: string;
    /**
     * 교환ㆍ이전 대상법인(회사명)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extr_tgcmp_cmpnm: string;
    /**
     * 교환ㆍ이전 대상법인(대표자)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extr_tgcmp_rp: string;
    /**
     * 교환ㆍ이전 대상법인(주요사업)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extr_tgcmp_mbsn: string;
    /**
     * 교환ㆍ이전 대상법인(회사와의 관계)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extr_tgcmp_rl_cmpn: string;
    /**
     * 교환ㆍ이전 대상법인(발행주식총수(주)(보통주식))
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extr_tgcmp_tisstk_ostk: string;
    /**
     * 교환ㆍ이전 대상법인(발행주식총수(주)(종류주식))
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extr_tgcmp_tisstk_cstk: string;
    /**
     * 교환ㆍ이전 대상법인(최근 사업연도 요약재무내용(원)(자산총계))
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    rbsnfdtl_tast: string;
    /**
     * 교환ㆍ이전 대상법인(최근 사업연도 요약재무내용(원)(부채총계))
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    rbsnfdtl_tdbt: string;
    /**
     * 교환ㆍ이전 대상법인(최근 사업연도 요약재무내용(원)(자본총계))
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    rbsnfdtl_teqt: string;
    /**
     * 교환ㆍ이전 대상법인(최근 사업연도 요약재무내용(원)(자본금))
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    rbsnfdtl_cpt: string;
    /**
     * 교환ㆍ이전 비율
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extr_rt: string;
    /**
     * 교환ㆍ이전 비율 산출근거
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extr_rt_bs: string;
    /**
     * 외부평가에 관한 사항(외부평가 여부)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    exevl_atn: string;
    /**
     * 외부평가에 관한 사항(근거 및 사유)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    exevl_bs_rs: string;
    /**
     * 외부평가에 관한 사항(외부평가기관의 명칭)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    exevl_intn: string;
    /**
     * 외부평가에 관한 사항(외부평가 기간)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    exevl_pd: string;
    /**
     * 외부평가에 관한 사항(외부평가 의견)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    exevl_op: string;
    /**
     * 교환ㆍ이전 목적
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extr_pp: string;
    /**
     * 교환ㆍ이전일정(교환ㆍ이전계약일)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extrsc_extrctrd: string;
    /**
     * 교환ㆍ이전일정(주주확정기준일)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extrsc_shddstd: string;
    /**
     * 교환ㆍ이전일정(주주명부 폐쇄기간(시작일))
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extrsc_shclspd_bgd: string;
    /**
     * 교환ㆍ이전일정(주주명부 폐쇄기간(종료일))
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extrsc_shclspd_edd: string;
    /**
     * 교환ㆍ이전일정(주식교환ㆍ이전 반대의사 통지접수기간(시작일))
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extrsc_extrop_rcpd_bgd: string;
    /**
     * 교환ㆍ이전일정(주식교환ㆍ이전 반대의사 통지접수기간(종료일))
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extrsc_extrop_rcpd_edd: string;
    /**
     * 교환ㆍ이전일정(주주총회 예정일자)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extrsc_gmtsck_prd: string;
    /**
     * 교환ㆍ이전일정(주식매수청구권 행사기간(시작일))
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extrsc_aprskh_expd_bgd: string;
    /**
     * 교환ㆍ이전일정(주식매수청구권 행사기간(종료일))
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extrsc_aprskh_expd_edd: string;
    /**
     * 교환ㆍ이전일정(구주권제출기간(시작일))
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extrsc_osprpd_bgd: string;
    /**
     * 교환ㆍ이전일정(구주권제출기간(종료일))
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extrsc_osprpd_edd: string;
    /**
     * 교환ㆍ이전일정(매매거래정지예정기간)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extrsc_trspprpd: string;
    /**
     * 교환ㆍ이전일정(매매거래정지예정기간(시작일))
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extrsc_trspprpd_bgd: string;
    /**
     * 교환ㆍ이전일정(매매거래정지예정기간(종료일))
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extrsc_trspprpd_edd: string;
    /**
     * 교환ㆍ이전일정(교환ㆍ이전일자)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extrsc_extrdt: string;
    /**
     * 교환ㆍ이전일정(신주권교부예정일)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extrsc_nstkdlprd: string;
    /**
     * 교환ㆍ이전일정(신주의 상장예정일)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    extrsc_nstklstprd: string;
    /**
     * 교환ㆍ이전 후 완전모회사명
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    atextr_cpcmpnm: string;
    /**
     * 주식매수청구권에 관한 사항(매수예정가격)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    aprskh_plnprc: string;
    /**
     * 주식매수청구권에 관한 사항(지급예정시기, 지급방법)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    aprskh_pym_plpd_mth: string;
    /**
     * 주식매수청구권에 관한 사항(주식매수청구권 제한 관련 내용)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    aprskh_lmt: string;
    /**
     * 주식매수청구권에 관한 사항(계약에 미치는 효력)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    aprskh_ctref: string;
    /**
     * 우회상장 해당 여부
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    bdlst_atn: string;
    /**
     * 타법인의 우회상장 요건 충족 여부
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    otcpr_bdlst_sf_atn: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    bddd: string;
    /**
     * 사외이사참석여부(참석(명))
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사참석여부(불참(명))
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(사외이사가 아닌 감사위원) 참석여부
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    adt_a_atn: string;
    /**
     * 풋옵션 등 계약 체결여부
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    popt_ctr_atn: string;
    /**
     * 계약내용
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    popt_ctr_cn: string;
    /**
     * 증권신고서 제출대상 여부
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    rs_sm_atn: string;
    /**
     * 제출을 면제받은 경우 그 사유
     * @type {string}
     * @memberof StkExtrDecsnItem
     */
    ex_sm_r: string;
}
/**
 * @type StkExtrDecsnResponse
 * 
 * @export
 */
export type StkExtrDecsnResponse = CommonError | StkExtrDecsnResponseSuccess;
/**
 * 
 * @export
 * @interface StkExtrDecsnResponseSuccess
 */
export interface StkExtrDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof StkExtrDecsnResponseSuccess
     */
    status: StkExtrDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof StkExtrDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<StkExtrDecsnItem>}
     * @memberof StkExtrDecsnResponseSuccess
     */
    list: Array<StkExtrDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type StkExtrDecsnResponseSuccessStatusEnum =
    '000'

const StkExtrDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isStkExtrDecsnResponseSuccessStatusEnum(value: any): value is StkExtrDecsnResponseSuccessStatusEnum {
    return StkExtrDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as StkExtrDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface StkExtrDecsnResponseSuccessAllOf
 */
export interface StkExtrDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<StkExtrDecsnItem>}
     * @memberof StkExtrDecsnResponseSuccessAllOf
     */
    list: Array<StkExtrDecsnItem>;
}
/**
 * @type StkdpRsResponse
 * 
 * @export
 */
export type StkdpRsResponse = CommonError | StkdpRsResponseSuccess;
/**
 * @type StkdpRsResponseItem
 * 
 * @export
 */
export type StkdpRsResponseItem = StkdpRsResponseItemGeneral | StkdpRsResponseItemKind | StkdpRsResponseItemPurpose | StkdpRsResponseItemSeller | StkdpRsResponseItemUnderwriter;
/**
 * 
 * @export
 * @interface StkdpRsResponseItemGeneral
 */
export interface StkdpRsResponseItemGeneral {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof StkdpRsResponseItemGeneral
     */
    title: StkdpRsResponseItemGeneralTitleEnum;
    /**
     * 
     * @type {Array<StkdpRsResponseItemGeneralItem>}
     * @memberof StkdpRsResponseItemGeneral
     */
    list: Array<StkdpRsResponseItemGeneralItem>;
}

/**
 * 그룹명칭
 */
export type StkdpRsResponseItemGeneralTitleEnum =
    '일반사항'

const StkdpRsResponseItemGeneralTitleEnumValues = [
    '일반사항',
]

export function isStkdpRsResponseItemGeneralTitleEnum(value: any): value is StkdpRsResponseItemGeneralTitleEnum {
    return StkdpRsResponseItemGeneralTitleEnumValues.indexOf(value as unknown as StkdpRsResponseItemGeneralTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface StkdpRsResponseItemGeneralItem
 */
export interface StkdpRsResponseItemGeneralItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof StkdpRsResponseItemGeneralItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof StkdpRsResponseItemGeneralItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof StkdpRsResponseItemGeneralItem
     */
    corp_code: string;
    /**
     * 청약기일
     * @type {string}
     * @memberof StkdpRsResponseItemGeneralItem
     */
    sbd: string;
    /**
     * 납입기일
     * @type {string}
     * @memberof StkdpRsResponseItemGeneralItem
     */
    pymd: string;
    /**
     * 청약공고일
     * @type {string}
     * @memberof StkdpRsResponseItemGeneralItem
     */
    sband: string;
    /**
     * 배정공고일
     * @type {string}
     * @memberof StkdpRsResponseItemGeneralItem
     */
    asand: string;
    /**
     * 배정기준일
     * @type {string}
     * @memberof StkdpRsResponseItemGeneralItem
     */
    asstd: string;
    /**
     * 신주인수권에 관한 사항(행사대상증권)
     * @type {string}
     * @memberof StkdpRsResponseItemGeneralItem
     */
    exstk: string;
    /**
     * 신주인수권에 관한 사항(행사가격)
     * @type {string}
     * @memberof StkdpRsResponseItemGeneralItem
     */
    exprc: string;
    /**
     * 주요사항보고서(접수번호)
     * @type {string}
     * @memberof StkdpRsResponseItemGeneralItem
     */
    rpt_rcpn: string;
}
/**
 * 
 * @export
 * @interface StkdpRsResponseItemKind
 */
export interface StkdpRsResponseItemKind {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof StkdpRsResponseItemKind
     */
    title: StkdpRsResponseItemKindTitleEnum;
    /**
     * 
     * @type {Array<StkdpRsResponseItemKindItem>}
     * @memberof StkdpRsResponseItemKind
     */
    list: Array<StkdpRsResponseItemKindItem>;
}

/**
 * 그룹명칭
 */
export type StkdpRsResponseItemKindTitleEnum =
    '증권의종류'

const StkdpRsResponseItemKindTitleEnumValues = [
    '증권의종류',
]

export function isStkdpRsResponseItemKindTitleEnum(value: any): value is StkdpRsResponseItemKindTitleEnum {
    return StkdpRsResponseItemKindTitleEnumValues.indexOf(value as unknown as StkdpRsResponseItemKindTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface StkdpRsResponseItemKindItem
 */
export interface StkdpRsResponseItemKindItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof StkdpRsResponseItemKindItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof StkdpRsResponseItemKindItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof StkdpRsResponseItemKindItem
     */
    corp_code: string;
    /**
     * 증권의종류
     * @type {string}
     * @memberof StkdpRsResponseItemKindItem
     */
    stksen: string;
    /**
     * 증권수량
     * @type {string}
     * @memberof StkdpRsResponseItemKindItem
     */
    stkcnt: string;
    /**
     * 액면가액
     * @type {string}
     * @memberof StkdpRsResponseItemKindItem
     */
    fv: string;
    /**
     * 모집(매출)가액
     * @type {string}
     * @memberof StkdpRsResponseItemKindItem
     */
    slprc: string;
    /**
     * 모집(매출)총액
     * @type {string}
     * @memberof StkdpRsResponseItemKindItem
     */
    slta: string;
    /**
     * 모집(매출)방법
     * @type {string}
     * @memberof StkdpRsResponseItemKindItem
     */
    slmthn: string;
}
/**
 * 
 * @export
 * @interface StkdpRsResponseItemPurpose
 */
export interface StkdpRsResponseItemPurpose {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof StkdpRsResponseItemPurpose
     */
    title: StkdpRsResponseItemPurposeTitleEnum;
    /**
     * 
     * @type {Array<StkdpRsResponseItemPurposeItem>}
     * @memberof StkdpRsResponseItemPurpose
     */
    list: Array<StkdpRsResponseItemPurposeItem>;
}

/**
 * 그룹명칭
 */
export type StkdpRsResponseItemPurposeTitleEnum =
    '자금의사용목적'

const StkdpRsResponseItemPurposeTitleEnumValues = [
    '자금의사용목적',
]

export function isStkdpRsResponseItemPurposeTitleEnum(value: any): value is StkdpRsResponseItemPurposeTitleEnum {
    return StkdpRsResponseItemPurposeTitleEnumValues.indexOf(value as unknown as StkdpRsResponseItemPurposeTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface StkdpRsResponseItemPurposeItem
 */
export interface StkdpRsResponseItemPurposeItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof StkdpRsResponseItemPurposeItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof StkdpRsResponseItemPurposeItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof StkdpRsResponseItemPurposeItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof StkdpRsResponseItemPurposeItem
     */
    corp_name: string;
    /**
     * 금액
     * @type {string}
     * @memberof StkdpRsResponseItemPurposeItem
     */
    se: string;
    /**
     * 금액
     * @type {string}
     * @memberof StkdpRsResponseItemPurposeItem
     */
    amt: string;
}
/**
 * 
 * @export
 * @interface StkdpRsResponseItemSeller
 */
export interface StkdpRsResponseItemSeller {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof StkdpRsResponseItemSeller
     */
    title: StkdpRsResponseItemSellerTitleEnum;
    /**
     * 
     * @type {Array<StkdpRsResponseItemSellerItem>}
     * @memberof StkdpRsResponseItemSeller
     */
    list: Array<StkdpRsResponseItemSellerItem>;
}

/**
 * 그룹명칭
 */
export type StkdpRsResponseItemSellerTitleEnum =
    '매출인에관한사항'

const StkdpRsResponseItemSellerTitleEnumValues = [
    '매출인에관한사항',
]

export function isStkdpRsResponseItemSellerTitleEnum(value: any): value is StkdpRsResponseItemSellerTitleEnum {
    return StkdpRsResponseItemSellerTitleEnumValues.indexOf(value as unknown as StkdpRsResponseItemSellerTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface StkdpRsResponseItemSellerItem
 */
export interface StkdpRsResponseItemSellerItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof StkdpRsResponseItemSellerItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof StkdpRsResponseItemSellerItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof StkdpRsResponseItemSellerItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof StkdpRsResponseItemSellerItem
     */
    corp_name: string;
    /**
     * 보유자
     * @type {string}
     * @memberof StkdpRsResponseItemSellerItem
     */
    hdr: string;
    /**
     * 회사와의관계
     * @type {string}
     * @memberof StkdpRsResponseItemSellerItem
     */
    rl_cmp: string;
    /**
     * 매출전보유증권수
     * @type {string}
     * @memberof StkdpRsResponseItemSellerItem
     */
    bfsl_hdstk: string;
    /**
     * 매출증권수
     * @type {string}
     * @memberof StkdpRsResponseItemSellerItem
     */
    slstk: string;
    /**
     * 매출후보유증권수
     * @type {string}
     * @memberof StkdpRsResponseItemSellerItem
     */
    atsl_hdstk: string;
}
/**
 * 
 * @export
 * @interface StkdpRsResponseItemUnderwriter
 */
export interface StkdpRsResponseItemUnderwriter {
    /**
     * 그룹명칭
     * @type {string}
     * @memberof StkdpRsResponseItemUnderwriter
     */
    title: StkdpRsResponseItemUnderwriterTitleEnum;
    /**
     * 
     * @type {Array<StkdpRsResponseItemUnderwriterItem>}
     * @memberof StkdpRsResponseItemUnderwriter
     */
    list: Array<StkdpRsResponseItemUnderwriterItem>;
}

/**
 * 그룹명칭
 */
export type StkdpRsResponseItemUnderwriterTitleEnum =
    '인수인정보'

const StkdpRsResponseItemUnderwriterTitleEnumValues = [
    '인수인정보',
]

export function isStkdpRsResponseItemUnderwriterTitleEnum(value: any): value is StkdpRsResponseItemUnderwriterTitleEnum {
    return StkdpRsResponseItemUnderwriterTitleEnumValues.indexOf(value as unknown as StkdpRsResponseItemUnderwriterTitleEnum) !== -1
}


/**
 * 
 * @export
 * @interface StkdpRsResponseItemUnderwriterItem
 */
export interface StkdpRsResponseItemUnderwriterItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof StkdpRsResponseItemUnderwriterItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof StkdpRsResponseItemUnderwriterItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof StkdpRsResponseItemUnderwriterItem
     */
    corp_code: string;
    /**
     * 인수인구분
     * @type {string}
     * @memberof StkdpRsResponseItemUnderwriterItem
     */
    actsen: string;
    /**
     * 인수인명
     * @type {string}
     * @memberof StkdpRsResponseItemUnderwriterItem
     */
    actnmn: string;
    /**
     * 증권의종류
     * @type {string}
     * @memberof StkdpRsResponseItemUnderwriterItem
     */
    stksen: string;
    /**
     * 인수수량
     * @type {string}
     * @memberof StkdpRsResponseItemUnderwriterItem
     */
    udtcnt: string;
    /**
     * 인수금액
     * @type {string}
     * @memberof StkdpRsResponseItemUnderwriterItem
     */
    udtamt: string;
    /**
     * 인수대가
     * @type {string}
     * @memberof StkdpRsResponseItemUnderwriterItem
     */
    udtprc: string;
    /**
     * 인수방법
     * @type {string}
     * @memberof StkdpRsResponseItemUnderwriterItem
     */
    udtmth: string;
}
/**
 * 
 * @export
 * @interface StkdpRsResponseSuccess
 */
export interface StkdpRsResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof StkdpRsResponseSuccess
     */
    status: StkdpRsResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof StkdpRsResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {StkdpRsResponseItem}
     * @memberof StkdpRsResponseSuccess
     */
    group: StkdpRsResponseItem;
}

/**
 * 에러 및 정보 코드
 */
export type StkdpRsResponseSuccessStatusEnum =
    '000'

const StkdpRsResponseSuccessStatusEnumValues = [
    '000',
]

export function isStkdpRsResponseSuccessStatusEnum(value: any): value is StkdpRsResponseSuccessStatusEnum {
    return StkdpRsResponseSuccessStatusEnumValues.indexOf(value as unknown as StkdpRsResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface StkdpRsResponseSuccessAllOf
 */
export interface StkdpRsResponseSuccessAllOf {
    /**
     * 
     * @type {StkdpRsResponseItem}
     * @memberof StkdpRsResponseSuccessAllOf
     */
    group: StkdpRsResponseItem;
}
/**
 * 
 * @export
 * @interface StkrtbdInhDecsnItem
 */
export interface StkrtbdInhDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof StkrtbdInhDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    corp_name: string;
    /**
     * 주권 관련 사채권의 종류
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    stkrtbd_kndn: string;
    /**
     * 주권 관련 사채권의 종류(회차)
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    tm: string;
    /**
     * 주권 관련 사채권의 종류(종류)
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    knd: string;
    /**
     * 사채권 발행회사(회사명)
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    bdiscmp_cmpnm: string;
    /**
     * 사채권 발행회사(국적)
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    bdiscmp_nt: string;
    /**
     * 사채권 발행회사(대표자)
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    bdiscmp_rp: string;
    /**
     * 사채권 발행회사(자본금(원))
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    bdiscmp_cpt: string;
    /**
     * 사채권 발행회사(회사와 관계)
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    bdiscmp_rl_cmpn: string;
    /**
     * 사채권 발행회사(발행주식 총수(주))
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    bdiscmp_tisstk: string;
    /**
     * 사채권 발행회사(주요사업)
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    bdiscmp_mbsn: string;
    /**
     * 최근 6월 이내 제3자 배정에 의한 신주취득 여부
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    l6m_tpa_nstkaq_atn: string;
    /**
     * 양수내역(사채의 권면(전자등록)총액(원))
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    inhdtl_bd_fta: string;
    /**
     * 양수내역(양수금액(원)(A))
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    inhdtl_inhprc: string;
    /**
     * 양수내역(총자산(원)(B))
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    inhdtl_tast: string;
    /**
     * 양수내역(총자산대비(%)(A/B))
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    inhdtl_tast_vs: string;
    /**
     * 양수내역(자기자본(원)(C))
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    inhdtl_ecpt: string;
    /**
     * 양수내역(자기자본대비(%)(A/C))
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    inhdtl_ecpt_vs: string;
    /**
     * 양수목적
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    inh_pp: string;
    /**
     * 양수예정일자
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    inh_prd: string;
    /**
     * 거래상대방(회사명(성명))
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    dlptn_cmpnm: string;
    /**
     * 거래상대방(자본금(원))
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    dlptn_cpt: string;
    /**
     * 거래상대방(주요사업)
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    dlptn_mbsn: string;
    /**
     * 거래상대방(본점소재지(주소))
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    dlptn_hoadd: string;
    /**
     * 거래상대방(회사와의 관계)
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    dlptn_rl_cmpn: string;
    /**
     * 거래대금지급
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    dl_pym: string;
    /**
     * 외부평가에 관한 사항(외부평가 여부)
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    exevl_atn: string;
    /**
     * 외부평가에 관한 사항(근거 및 사유)
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    exevl_bs_rs: string;
    /**
     * 외부평가에 관한 사항(외부평가기관의 명칭)
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    exevl_intn: string;
    /**
     * 외부평가에 관한 사항(외부평가 기간)
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    exevl_pd: string;
    /**
     * 외부평가에 관한 사항(외부평가 의견)
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    exevl_op: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    bddd: string;
    /**
     * 사외이사 참석여부(참석(명))
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사 참석여부(불참(명))
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(사외이사가 아닌 감사위원) 참석여부
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    adt_a_atn: string;
    /**
     * 공정거래위원회 신고대상 여부
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    ftc_stt_atn: string;
    /**
     * 풋옵션 등 계약 체결여부
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    popt_ctr_atn: string;
    /**
     * 계약내용
     * @type {string}
     * @memberof StkrtbdInhDecsnItem
     */
    popt_ctr_cn: string;
}
/**
 * @type StkrtbdInhDecsnResponse
 * 
 * @export
 */
export type StkrtbdInhDecsnResponse = CommonError | StkrtbdInhDecsnResponseSuccess;
/**
 * 
 * @export
 * @interface StkrtbdInhDecsnResponseSuccess
 */
export interface StkrtbdInhDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof StkrtbdInhDecsnResponseSuccess
     */
    status: StkrtbdInhDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof StkrtbdInhDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<StkrtbdInhDecsnItem>}
     * @memberof StkrtbdInhDecsnResponseSuccess
     */
    list: Array<StkrtbdInhDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type StkrtbdInhDecsnResponseSuccessStatusEnum =
    '000'

const StkrtbdInhDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isStkrtbdInhDecsnResponseSuccessStatusEnum(value: any): value is StkrtbdInhDecsnResponseSuccessStatusEnum {
    return StkrtbdInhDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as StkrtbdInhDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface StkrtbdInhDecsnResponseSuccessAllOf
 */
export interface StkrtbdInhDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<StkrtbdInhDecsnItem>}
     * @memberof StkrtbdInhDecsnResponseSuccessAllOf
     */
    list: Array<StkrtbdInhDecsnItem>;
}
/**
 * 
 * @export
 * @interface StkrtbdTrfDecsnItem
 */
export interface StkrtbdTrfDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof StkrtbdTrfDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    corp_name: string;
    /**
     * 주권 관련 사채권의 종류
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    stkrtbd_kndn: string;
    /**
     * 주권 관련 사채권의 종류(회차)
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    tm: string;
    /**
     * 주권 관련 사채권의 종류(종류)
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    knd: string;
    /**
     * 취득일자
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    aqd: string;
    /**
     * 사채권 발행회사(회사명)
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    bdiscmp_cmpnm: string;
    /**
     * 사채권 발행회사(국적)
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    bdiscmp_nt: string;
    /**
     * 사채권 발행회사(대표자)
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    bdiscmp_rp: string;
    /**
     * 사채권 발행회사(자본금(원))
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    bdiscmp_cpt: string;
    /**
     * 사채권 발행회사(회사와 관계)
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    bdiscmp_rl_cmpn: string;
    /**
     * 사채권 발행회사(발행주식 총수(주))
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    bdiscmp_tisstk: string;
    /**
     * 사채권 발행회사(주요사업)
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    bdiscmp_mbsn: string;
    /**
     * 양도내역(사채의 권면(전자등록)총액(원))
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    trfdtl_bd_fta: string;
    /**
     * 양도내역(양도금액(원)(A))
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    trfdtl_trfprc: string;
    /**
     * 양도내역(총자산(원)(B))
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    trfdtl_tast: string;
    /**
     * 양도내역(총자산대비(%)(A/B))
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    trfdtl_tast_vs: string;
    /**
     * 양도내역(자기자본(원)(C))
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    trfdtl_ecpt: string;
    /**
     * 양도내역(자기자본대비(%)(A/C))
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    trfdtl_ecpt_vs: string;
    /**
     * 양도목적
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    trf_pp: string;
    /**
     * 양도예정일자
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    trf_prd: string;
    /**
     * 거래상대방(회사명(성명))
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    dlptn_cmpnm: string;
    /**
     * 거래상대방(자본금(원))
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    dlptn_cpt: string;
    /**
     * 거래상대방(주요사업)
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    dlptn_mbsn: string;
    /**
     * 거래상대방(본점소재지(주소))
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    dlptn_hoadd: string;
    /**
     * 거래상대방(회사와의 관계)
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    dlptn_rl_cmpn: string;
    /**
     * 거래대금지급
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    dl_pym: string;
    /**
     * 외부평가에 관한 사항(외부평가 여부)
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    exevl_atn: string;
    /**
     * 외부평가에 관한 사항(근거 및 사유)
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    exevl_bs_rs: string;
    /**
     * 외부평가에 관한 사항(외부평가기관의 명칭)
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    exevl_intn: string;
    /**
     * 외부평가에 관한 사항(외부평가 기간)
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    exevl_pd: string;
    /**
     * 외부평가에 관한 사항(외부평가 의견)
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    exevl_op: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    bddd: string;
    /**
     * 사외이사 참석여부(참석(명))
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사 참석여부(불참(명))
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(사외이사가 아닌 감사위원) 참석여부
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    adt_a_atn: string;
    /**
     * 공정거래위원회 신고대상 여부
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    ftc_stt_atn: string;
    /**
     * 풋옵션 등 계약 체결여부
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    popt_ctr_atn: string;
    /**
     * 계약내용
     * @type {string}
     * @memberof StkrtbdTrfDecsnItem
     */
    popt_ctr_cn: string;
}
/**
 * @type StkrtbdTrfDecsnResponse
 * 
 * @export
 */
export type StkrtbdTrfDecsnResponse = CommonError | StkrtbdTrfDecsnResponseSuccess;
/**
 * 
 * @export
 * @interface StkrtbdTrfDecsnResponseSuccess
 */
export interface StkrtbdTrfDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof StkrtbdTrfDecsnResponseSuccess
     */
    status: StkrtbdTrfDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof StkrtbdTrfDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<StkrtbdTrfDecsnItem>}
     * @memberof StkrtbdTrfDecsnResponseSuccess
     */
    list: Array<StkrtbdTrfDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type StkrtbdTrfDecsnResponseSuccessStatusEnum =
    '000'

const StkrtbdTrfDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isStkrtbdTrfDecsnResponseSuccessStatusEnum(value: any): value is StkrtbdTrfDecsnResponseSuccessStatusEnum {
    return StkrtbdTrfDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as StkrtbdTrfDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface StkrtbdTrfDecsnResponseSuccessAllOf
 */
export interface StkrtbdTrfDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<StkrtbdTrfDecsnItem>}
     * @memberof StkrtbdTrfDecsnResponseSuccessAllOf
     */
    list: Array<StkrtbdTrfDecsnItem>;
}
/**
 * 
 * @export
 * @interface StockTotqySttusItem
 */
export interface StockTotqySttusItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof StockTotqySttusItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof StockTotqySttusItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof StockTotqySttusItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof StockTotqySttusItem
     */
    corp_name: string;
    /**
     * 구분
     * @type {string}
     * @memberof StockTotqySttusItem
     */
    se: string;
    /**
     * Ⅰ. 발행할 주식의 총수
     * @type {string}
     * @memberof StockTotqySttusItem
     */
    isu_stock_totqy: string;
    /**
     * Ⅱ. 현재까지 발행한 주식의 총수
     * @type {string}
     * @memberof StockTotqySttusItem
     */
    now_to_isu_stock_totqy: string;
    /**
     * Ⅲ. 현재까지 감소한 주식의 총수
     * @type {string}
     * @memberof StockTotqySttusItem
     */
    now_to_dcrs_stock_totqy: string;
    /**
     * Ⅲ. 현재까지 감소한 주식의 총수(1. 감자)
     * @type {string}
     * @memberof StockTotqySttusItem
     */
    redc: string;
    /**
     * Ⅲ. 현재까지 감소한 주식의 총수(2. 이익소각)
     * @type {string}
     * @memberof StockTotqySttusItem
     */
    profit_incnr: string;
    /**
     * Ⅲ. 현재까지 감소한 주식의 총수(3. 상환주식의 상환)
     * @type {string}
     * @memberof StockTotqySttusItem
     */
    rdmstk_repy: string;
    /**
     * Ⅲ. 현재까지 감소한 주식의 총수(4. 기타)
     * @type {string}
     * @memberof StockTotqySttusItem
     */
    etc: string;
    /**
     * Ⅳ. 발행주식의 총수 (Ⅱ-Ⅲ)
     * @type {string}
     * @memberof StockTotqySttusItem
     */
    istc_totqy: string;
    /**
     * Ⅴ. 자기주식수
     * @type {string}
     * @memberof StockTotqySttusItem
     */
    tesstk_co: string;
    /**
     * Ⅵ. 유통주식수
     * @type {string}
     * @memberof StockTotqySttusItem
     */
    distb_stock_co: string;
}
/**
 * @type StockTotqySttusResponse
 * 
 * @export
 */
export type StockTotqySttusResponse = CommonError | StockTotqySttusResponseSuccess;
/**
 * 
 * @export
 * @interface StockTotqySttusResponseSuccess
 */
export interface StockTotqySttusResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof StockTotqySttusResponseSuccess
     */
    status: StockTotqySttusResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof StockTotqySttusResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<StockTotqySttusItem>}
     * @memberof StockTotqySttusResponseSuccess
     */
    list: Array<StockTotqySttusItem>;
}

/**
 * 에러 및 정보 코드
 */
export type StockTotqySttusResponseSuccessStatusEnum =
    '000'

const StockTotqySttusResponseSuccessStatusEnumValues = [
    '000',
]

export function isStockTotqySttusResponseSuccessStatusEnum(value: any): value is StockTotqySttusResponseSuccessStatusEnum {
    return StockTotqySttusResponseSuccessStatusEnumValues.indexOf(value as unknown as StockTotqySttusResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface StockTotqySttusResponseSuccessAllOf
 */
export interface StockTotqySttusResponseSuccessAllOf {
    /**
     * 
     * @type {Array<StockTotqySttusItem>}
     * @memberof StockTotqySttusResponseSuccessAllOf
     */
    list: Array<StockTotqySttusItem>;
}
/**
 * 
 * @export
 * @interface TesstkAcqsDspsSttusItem
 */
export interface TesstkAcqsDspsSttusItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof TesstkAcqsDspsSttusItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof TesstkAcqsDspsSttusItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof TesstkAcqsDspsSttusItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof TesstkAcqsDspsSttusItem
     */
    corp_name: string;
    /**
     * 취득방법 대분류
     * 
     * 배당가능이익범위 이내 취득, 기타취득, 총계 등
     * @type {string}
     * @memberof TesstkAcqsDspsSttusItem
     */
    acqs_mth1: string;
    /**
     * 취득방법 중분류
     * 
     * 직접취득, 신탁계약에 의한취득, 기타취득, 총계 등
     * @type {string}
     * @memberof TesstkAcqsDspsSttusItem
     */
    acqs_mth2: string;
    /**
     * 취득방법 소분류
     * 
     * 장내직접취득, 장외직접취득, 공개매수, 주식매수청구권행사, 수탁자보유물량, 현물보유량, 기타취득, 소계, 총계 등
     * @type {string}
     * @memberof TesstkAcqsDspsSttusItem
     */
    acqs_mth3: string;
    /**
     * 주식종류 (보통주, 우선주 등)
     * @type {string}
     * @memberof TesstkAcqsDspsSttusItem
     */
    stock_knd: string;
    /**
     * 기초 수량
     * @type {string}
     * @memberof TesstkAcqsDspsSttusItem
     */
    bsis_qy: string;
    /**
     * 변동 수량 취득
     * @type {string}
     * @memberof TesstkAcqsDspsSttusItem
     */
    change_qy_acqs: string;
    /**
     * 변동 수량 처분
     * @type {string}
     * @memberof TesstkAcqsDspsSttusItem
     */
    change_qy_dsps: string;
    /**
     * 변동 수량 소각
     * @type {string}
     * @memberof TesstkAcqsDspsSttusItem
     */
    change_qy_incnr: string;
    /**
     * 기말 수량
     * @type {string}
     * @memberof TesstkAcqsDspsSttusItem
     */
    trmend_qy: string;
    /**
     * 비고
     * @type {string}
     * @memberof TesstkAcqsDspsSttusItem
     */
    rm: string;
}
/**
 * @type TesstkAcqsDspsSttusResponse
 * 
 * @export
 */
export type TesstkAcqsDspsSttusResponse = CommonError | TesstkAcqsDspsSttusResponseSuccess;
/**
 * 
 * @export
 * @interface TesstkAcqsDspsSttusResponseSuccess
 */
export interface TesstkAcqsDspsSttusResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof TesstkAcqsDspsSttusResponseSuccess
     */
    status: TesstkAcqsDspsSttusResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof TesstkAcqsDspsSttusResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<TesstkAcqsDspsSttusItem>}
     * @memberof TesstkAcqsDspsSttusResponseSuccess
     */
    list: Array<TesstkAcqsDspsSttusItem>;
}

/**
 * 에러 및 정보 코드
 */
export type TesstkAcqsDspsSttusResponseSuccessStatusEnum =
    '000'

const TesstkAcqsDspsSttusResponseSuccessStatusEnumValues = [
    '000',
]

export function isTesstkAcqsDspsSttusResponseSuccessStatusEnum(value: any): value is TesstkAcqsDspsSttusResponseSuccessStatusEnum {
    return TesstkAcqsDspsSttusResponseSuccessStatusEnumValues.indexOf(value as unknown as TesstkAcqsDspsSttusResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface TesstkAcqsDspsSttusResponseSuccessAllOf
 */
export interface TesstkAcqsDspsSttusResponseSuccessAllOf {
    /**
     * 
     * @type {Array<TesstkAcqsDspsSttusItem>}
     * @memberof TesstkAcqsDspsSttusResponseSuccessAllOf
     */
    list: Array<TesstkAcqsDspsSttusItem>;
}
/**
 * 
 * @export
 * @interface TgastInhDecsnItem
 */
export interface TgastInhDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof TgastInhDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    corp_name: string;
    /**
     * 자산구분
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    ast_sen: string;
    /**
     * 자산명
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    ast_nm: string;
    /**
     * 양수내역(양수금액(원))
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    inhdtl_inhprc: string;
    /**
     * 양수내역(자산총액(원))
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    inhdtl_tast: string;
    /**
     * 양수내역(자산총액대비(%))
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    inhdtl_tast_vs: string;
    /**
     * 양수목적
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    inh_pp: string;
    /**
     * 양수영향
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    inh_af: string;
    /**
     * 양수예정일자(계약체결일)
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    inh_prd_ctr_cnsd: string;
    /**
     * 양수예정일자(양수기준일)
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    inh_prd_inh_std: string;
    /**
     * 양수예정일자(등기예정일)
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    inh_prd_rgs_prd: string;
    /**
     * 거래상대방(회사명(성명))
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    dlptn_cmpnm: string;
    /**
     * 거래상대방(자본금(원))
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    dlptn_cpt: string;
    /**
     * 거래상대방(주요사업)
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    dlptn_mbsn: string;
    /**
     * 거래상대방(본점소재지(주소))
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    dlptn_hoadd: string;
    /**
     * 거래상대방(회사와의 관계)
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    dlptn_rl_cmpn: string;
    /**
     * 거래대금지급
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    dl_pym: string;
    /**
     * 외부평가에 관한 사항(외부평가 여부)
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    exevl_atn: string;
    /**
     * 외부평가에 관한 사항(근거 및 사유)
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    exevl_bs_rs: string;
    /**
     * 외부평가에 관한 사항(외부평가기관의 명칭)
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    exevl_intn: string;
    /**
     * 외부평가에 관한 사항(외부평가 기간)
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    exevl_pd: string;
    /**
     * 외부평가에 관한 사항(외부평가 의견)
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    exevl_op: string;
    /**
     * 주주총회 특별결의 여부
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    gmtsck_spd_atn: string;
    /**
     * 주주총회 예정일자
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    gmtsck_prd: string;
    /**
     * 주식매수청구권에 관한 사항(행사요건)
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    aprskh_exrq: string;
    /**
     * 주식매수청구권에 관한 사항(매수예정가격)
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    aprskh_plnprc: string;
    /**
     * 주식매수청구권에 관한 사항(행사절차, 방법, 기간, 장소)
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    aprskh_ex_pc_mth_pd_pl: string;
    /**
     * 주식매수청구권에 관한 사항(지급예정시기, 지급방법)
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    aprskh_pym_plpd_mth: string;
    /**
     * 주식매수청구권에 관한 사항(주식매수청구권 제한 관련 내용)
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    aprskh_lmt: string;
    /**
     * 주식매수청구권에 관한 사항(계약에 미치는 효력)
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    aprskh_ctref: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    bddd: string;
    /**
     * 사외이사참석여부(참석(명))
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사참석여부(불참(명))
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(사외이사가 아닌 감사위원) 참석여부
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    adt_a_atn: string;
    /**
     * 공정거래위원회 신고대상 여부
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    ftc_stt_atn: string;
    /**
     * 풋옵션 등 계약 체결여부
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    popt_ctr_atn: string;
    /**
     * 계약내용
     * @type {string}
     * @memberof TgastInhDecsnItem
     */
    popt_ctr_cn: string;
}
/**
 * @type TgastInhDecsnResponse
 * 
 * @export
 */
export type TgastInhDecsnResponse = CommonError | TgastInhDecsnResponseSuccess;
/**
 * 
 * @export
 * @interface TgastInhDecsnResponseSuccess
 */
export interface TgastInhDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof TgastInhDecsnResponseSuccess
     */
    status: TgastInhDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof TgastInhDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<TgastInhDecsnItem>}
     * @memberof TgastInhDecsnResponseSuccess
     */
    list: Array<TgastInhDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type TgastInhDecsnResponseSuccessStatusEnum =
    '000'

const TgastInhDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isTgastInhDecsnResponseSuccessStatusEnum(value: any): value is TgastInhDecsnResponseSuccessStatusEnum {
    return TgastInhDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as TgastInhDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface TgastInhDecsnResponseSuccessAllOf
 */
export interface TgastInhDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<TgastInhDecsnItem>}
     * @memberof TgastInhDecsnResponseSuccessAllOf
     */
    list: Array<TgastInhDecsnItem>;
}
/**
 * 
 * @export
 * @interface TgastTrfDecsnItem
 */
export interface TgastTrfDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof TgastTrfDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    corp_name: string;
    /**
     * 자산구분
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    ast_sen: string;
    /**
     * 자산명
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    ast_nm: string;
    /**
     * 양도내역(양도금액(원))
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    trfdtl_trfprc: string;
    /**
     * 양도내역(자산총액(원))
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    trfdtl_tast: string;
    /**
     * 양도내역(자산총액대비(%))
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    trfdtl_tast_vs: string;
    /**
     * 양도목적
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    trf_pp: string;
    /**
     * 양도영향
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    trf_af: string;
    /**
     * 양도예정일자(계약체결일)
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    trf_prd_ctr_cnsd: string;
    /**
     * 양도예정일자(양도기준일)
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    trf_prd_trf_std: string;
    /**
     * 양도예정일자(등기예정일)
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    trf_prd_rgs_prd: string;
    /**
     * 거래상대방(회사명(성명))
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    dlptn_cmpnm: string;
    /**
     * 거래상대방(자본금(원))
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    dlptn_cpt: string;
    /**
     * 거래상대방(주요사업)
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    dlptn_mbsn: string;
    /**
     * 거래상대방(본점소재지(주소))
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    dlptn_hoadd: string;
    /**
     * 거래상대방(회사와의 관계)
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    dlptn_rl_cmpn: string;
    /**
     * 거래대금지급
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    dl_pym: string;
    /**
     * 외부평가에 관한 사항(외부평가 여부)
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    exevl_atn: string;
    /**
     * 외부평가에 관한 사항(근거 및 사유)
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    exevl_bs_rs: string;
    /**
     * 외부평가에 관한 사항(외부평가기관의 명칭)
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    exevl_intn: string;
    /**
     * 외부평가에 관한 사항(외부평가 기간)
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    exevl_pd: string;
    /**
     * 외부평가에 관한 사항(외부평가 의견)
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    exevl_op: string;
    /**
     * 주주총회 특별결의 여부
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    gmtsck_spd_atn: string;
    /**
     * 주주총회 예정일자
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    gmtsck_prd: string;
    /**
     * 주식매수청구권에 관한 사항(행사요건)
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    aprskh_exrq: string;
    /**
     * 주식매수청구권에 관한 사항(매수예정가격)
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    aprskh_plnprc: string;
    /**
     * 주식매수청구권에 관한 사항(행사절차, 방법, 기간, 장소)
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    aprskh_ex_pc_mth_pd_pl: string;
    /**
     * 주식매수청구권에 관한 사항(지급예정시기, 지급방법)
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    aprskh_pym_plpd_mth: string;
    /**
     * 주식매수청구권에 관한 사항(주식매수청구권 제한 관련 내용)
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    aprskh_lmt: string;
    /**
     * 주식매수청구권에 관한 사항(계약에 미치는 효력)
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    aprskh_ctref: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    bddd: string;
    /**
     * 사외이사참석여부(참석(명))
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사참석여부(불참(명))
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(사외이사가 아닌 감사위원) 참석여부
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    adt_a_atn: string;
    /**
     * 공정거래위원회 신고대상 여부
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    ftc_stt_atn: string;
    /**
     * 풋옵션 등 계약 체결여부
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    popt_ctr_atn: string;
    /**
     * 계약내용
     * @type {string}
     * @memberof TgastTrfDecsnItem
     */
    popt_ctr_cn: string;
}
/**
 * @type TgastTrfDecsnResponse
 * 
 * @export
 */
export type TgastTrfDecsnResponse = CommonError | TgastTrfDecsnResponseSuccess;
/**
 * 
 * @export
 * @interface TgastTrfDecsnResponseSuccess
 */
export interface TgastTrfDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof TgastTrfDecsnResponseSuccess
     */
    status: TgastTrfDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof TgastTrfDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<TgastTrfDecsnItem>}
     * @memberof TgastTrfDecsnResponseSuccess
     */
    list: Array<TgastTrfDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type TgastTrfDecsnResponseSuccessStatusEnum =
    '000'

const TgastTrfDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isTgastTrfDecsnResponseSuccessStatusEnum(value: any): value is TgastTrfDecsnResponseSuccessStatusEnum {
    return TgastTrfDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as TgastTrfDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface TgastTrfDecsnResponseSuccessAllOf
 */
export interface TgastTrfDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<TgastTrfDecsnItem>}
     * @memberof TgastTrfDecsnResponseSuccessAllOf
     */
    list: Array<TgastTrfDecsnItem>;
}
/**
 * 
 * @export
 * @interface TsstkAqDecsnItem
 */
export interface TsstkAqDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof TsstkAqDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    corp_name: string;
    /**
     * 취득예정주식(주)(보통주식)
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    aqpln_stk_ostk: string;
    /**
     * 취득예정주식(주)(기타주식)
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    aqpln_stk_estk: string;
    /**
     * 취득예정금액(원)(보통주식)
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    aqpln_prc_ostk: string;
    /**
     * 취득예정금액(원)(기타주식)
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    aqpln_prc_estk: string;
    /**
     * 취득예상기간(시작일)
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    aqexpd_bgd: string;
    /**
     * 취득예상기간(종료일)
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    aqexpd_edd: string;
    /**
     * 보유예상기간(시작일)
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    hdexpd_bgd: string;
    /**
     * 보유예상기간(종료일)
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    hdexpd_edd: string;
    /**
     * 취득목적
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    aq_pp: string;
    /**
     * 취득방법
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    aq_mth: string;
    /**
     * 위탁투자중개업자
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    cs_iv_bk: string;
    /**
     * 취득 전 자기주식 보유현황(배당가능이익 범위 내 취득(주)(보통주식))
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    aq_wtn_div_ostk: string;
    /**
     * 취득 전 자기주식 보유현황(배당가능이익 범위 내 취득(주)(비율(%)))
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    aq_wtn_div_ostk_rt: string;
    /**
     * 취득 전 자기주식 보유현황(배당가능이익 범위 내 취득(주)(기타주식))
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    aq_wtn_div_estk: string;
    /**
     * 취득 전 자기주식 보유현황(배당가능이익 범위 내 취득(주)(비율(%)))
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    aq_wtn_div_estk_rt: string;
    /**
     * 취득 전 자기주식 보유현황(기타취득(주)(보통주식))
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    eaq_ostk: string;
    /**
     * 취득 전 자기주식 보유현황(기타취득(주)(비율(%)))
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    eaq_ostk_rt: string;
    /**
     * 취득 전 자기주식 보유현황(기타취득(주)(기타주식))
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    eaq_estk: string;
    /**
     * 취득 전 자기주식 보유현황(기타취득(주)(비율(%)))
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    eaq_estk_rt: string;
    /**
     * 취득결정일
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    aq_dd: string;
    /**
     * 사외이사참석여부(참석(명))
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사참석여부(불참(명))
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(사외이사가 아닌 감사위원)참석여부
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    adt_a_atn: string;
    /**
     * 1일 매수 주문수량 한도(보통주식)
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    d1_prodlm_ostk: string;
    /**
     * 1일 매수 주문수량 한도(기타주식)
     * @type {string}
     * @memberof TsstkAqDecsnItem
     */
    d1_prodlm_estk: string;
}
/**
 * @type TsstkAqDecsnResponse
 * 
 * @export
 */
export type TsstkAqDecsnResponse = CommonError | TsstkAqDecsnResponseSuccess;
/**
 * 
 * @export
 * @interface TsstkAqDecsnResponseSuccess
 */
export interface TsstkAqDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof TsstkAqDecsnResponseSuccess
     */
    status: TsstkAqDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof TsstkAqDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<TsstkAqDecsnItem>}
     * @memberof TsstkAqDecsnResponseSuccess
     */
    list: Array<TsstkAqDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type TsstkAqDecsnResponseSuccessStatusEnum =
    '000'

const TsstkAqDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isTsstkAqDecsnResponseSuccessStatusEnum(value: any): value is TsstkAqDecsnResponseSuccessStatusEnum {
    return TsstkAqDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as TsstkAqDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface TsstkAqDecsnResponseSuccessAllOf
 */
export interface TsstkAqDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<TsstkAqDecsnItem>}
     * @memberof TsstkAqDecsnResponseSuccessAllOf
     */
    list: Array<TsstkAqDecsnItem>;
}
/**
 * 
 * @export
 * @interface TsstkAqTrctrCcDecsnItem
 */
export interface TsstkAqTrctrCcDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    corp_name: string;
    /**
     * 계약금액(원)(해지 전)
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    ctr_prc_bfcc: string;
    /**
     * 계약금액(원)(해지 후)
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    ctr_prc_atcc: string;
    /**
     * 해지 전 계약기간(시작일)
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    ctr_pd_bfcc_bgd: string;
    /**
     * 해지 전 계약기간(종료일)
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    ctr_pd_bfcc_edd: string;
    /**
     * 해지목적
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    cc_pp: string;
    /**
     * 해지기관
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    cc_int: string;
    /**
     * 해지예정일자
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    cc_prd: string;
    /**
     * 해지후 신탁재산의 반환방법
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    tp_rm_atcc: string;
    /**
     * 해지 전 자기주식 보유현황(배당가능범위 내 취득(주)(보통주식))
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    aq_wtn_div_ostk: string;
    /**
     * 해지 전 자기주식 보유현황(배당가능범위 내 취득(주)(비율(%)))
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    aq_wtn_div_ostk_rt: string;
    /**
     * 해지 전 자기주식 보유현황(배당가능범위 내 취득(주)(기타주식))
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    aq_wtn_div_estk: string;
    /**
     * 해지 전 자기주식 보유현황(배당가능범위 내 취득(주)(비율(%)))
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    aq_wtn_div_estk_rt: string;
    /**
     * 해지 전 자기주식 보유현황(기타취득(주)(보통주식))
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    eaq_ostk: string;
    /**
     * 해지 전 자기주식 보유현황(기타취득(주)(비율(%)))
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    eaq_ostk_rt: string;
    /**
     * 해지 전 자기주식 보유현황(기타취득(주)(기타주식))
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    eaq_estk: string;
    /**
     * 해지 전 자기주식 보유현황(기타취득(주)(비율(%)))
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    eaq_estk_rt: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    bddd: string;
    /**
     * 사외이사참석여부(참석(명))
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사참석여부(불참(명))
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(사외이사가 아닌 감사위원)참석여부
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnItem
     */
    adt_a_atn: string;
}
/**
 * @type TsstkAqTrctrCcDecsnResponse
 * 
 * @export
 */
export type TsstkAqTrctrCcDecsnResponse = CommonError | TsstkAqTrctrCcDecsnResponseSuccess;
/**
 * 
 * @export
 * @interface TsstkAqTrctrCcDecsnResponseSuccess
 */
export interface TsstkAqTrctrCcDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnResponseSuccess
     */
    status: TsstkAqTrctrCcDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof TsstkAqTrctrCcDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<TsstkAqTrctrCcDecsnItem>}
     * @memberof TsstkAqTrctrCcDecsnResponseSuccess
     */
    list: Array<TsstkAqTrctrCcDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type TsstkAqTrctrCcDecsnResponseSuccessStatusEnum =
    '000'

const TsstkAqTrctrCcDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isTsstkAqTrctrCcDecsnResponseSuccessStatusEnum(value: any): value is TsstkAqTrctrCcDecsnResponseSuccessStatusEnum {
    return TsstkAqTrctrCcDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as TsstkAqTrctrCcDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface TsstkAqTrctrCcDecsnResponseSuccessAllOf
 */
export interface TsstkAqTrctrCcDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<TsstkAqTrctrCcDecsnItem>}
     * @memberof TsstkAqTrctrCcDecsnResponseSuccessAllOf
     */
    list: Array<TsstkAqTrctrCcDecsnItem>;
}
/**
 * 
 * @export
 * @interface TsstkAqTrctrCnsDecsnItem
 */
export interface TsstkAqTrctrCnsDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    corp_name: string;
    /**
     * 계약금액(원)
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    ctr_prc: string;
    /**
     * 계약기간(시작일)
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    ctr_pd_bgd: string;
    /**
     * 계약기간(종료일)
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    ctr_pd_edd: string;
    /**
     * 계약목적
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    ctr_pp: string;
    /**
     * 계약체결기관
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    ctr_cns_int: string;
    /**
     * 계약체결 예정일자
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    ctr_cns_prd: string;
    /**
     * 계약 전 자기주식 보유현황(배당가능범위 내 취득(주)(보통주식))
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    aq_wtn_div_ostk: string;
    /**
     * 계약 전 자기주식 보유현황(배당가능범위 내 취득(주)(비율(%)))
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    aq_wtn_div_ostk_rt: string;
    /**
     * 계약 전 자기주식 보유현황(배당가능범위 내 취득(주)(기타주식))
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    aq_wtn_div_estk: string;
    /**
     * 계약 전 자기주식 보유현황(배당가능범위 내 취득(주)(비율(%)))
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    aq_wtn_div_estk_rt: string;
    /**
     * 계약 전 자기주식 보유현황(기타취득(주)(보통주식))
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    eaq_ostk: string;
    /**
     * 계약 전 자기주식 보유현황(기타취득(주)(비율(%)))
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    eaq_ostk_rt: string;
    /**
     * 계약 전 자기주식 보유현황(기타취득(주)(기타주식))
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    eaq_estk: string;
    /**
     * 계약 전 자기주식 보유현황(기타취득(주)(비율(%)))
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    eaq_estk_rt: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    bddd: string;
    /**
     * 사외이사참석여부(참석(명))
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사참석여부(불참(명))
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(사외이사가 아닌 감사위원)참석여부
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    adt_a_atn: string;
    /**
     * 위탁투자중개업자
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnItem
     */
    cs_iv_bk: string;
}
/**
 * @type TsstkAqTrctrCnsDecsnResponse
 * 
 * @export
 */
export type TsstkAqTrctrCnsDecsnResponse = CommonError | TsstkAqTrctrCnsDecsnResponseSuccess;
/**
 * 
 * @export
 * @interface TsstkAqTrctrCnsDecsnResponseSuccess
 */
export interface TsstkAqTrctrCnsDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnResponseSuccess
     */
    status: TsstkAqTrctrCnsDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof TsstkAqTrctrCnsDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<TsstkAqTrctrCnsDecsnItem>}
     * @memberof TsstkAqTrctrCnsDecsnResponseSuccess
     */
    list: Array<TsstkAqTrctrCnsDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type TsstkAqTrctrCnsDecsnResponseSuccessStatusEnum =
    '000'

const TsstkAqTrctrCnsDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isTsstkAqTrctrCnsDecsnResponseSuccessStatusEnum(value: any): value is TsstkAqTrctrCnsDecsnResponseSuccessStatusEnum {
    return TsstkAqTrctrCnsDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as TsstkAqTrctrCnsDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface TsstkAqTrctrCnsDecsnResponseSuccessAllOf
 */
export interface TsstkAqTrctrCnsDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<TsstkAqTrctrCnsDecsnItem>}
     * @memberof TsstkAqTrctrCnsDecsnResponseSuccessAllOf
     */
    list: Array<TsstkAqTrctrCnsDecsnItem>;
}
/**
 * 
 * @export
 * @interface TsstkDpDecsnItem
 */
export interface TsstkDpDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof TsstkDpDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    corp_name: string;
    /**
     * 처분예정주식(주)(보통주식)
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    dppln_stk_ostk: string;
    /**
     * 처분예정주식(주)(기타주식)
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    dppln_stk_estk: string;
    /**
     * 처분 대상 주식가격(원)(보통주식)
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    dpstk_prc_ostk: string;
    /**
     * 처분 대상 주식가격(원)(기타주식)
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    dpstk_prc_estk: string;
    /**
     * 처분예정금액(원)(보통주식)
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    dppln_prc_ostk: string;
    /**
     * 처분예정금액(원)(기타주식)
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    dppln_prc_estk: string;
    /**
     * 처분예정기간(시작일)
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    dpprpd_bgd: string;
    /**
     * 처분예정기간(종료일)
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    dpprpd_edd: string;
    /**
     * 처분목적
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    dp_pp: string;
    /**
     * 처분방법(시장을 통한 매도(주))
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    dp_m_mkt: string;
    /**
     * 처분방법(시간외대량매매(주))
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    dp_m_ovtm: string;
    /**
     * 처분방법(장외처분(주))
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    dp_m_otc: string;
    /**
     * 처분방법(기타(주))
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    dp_m_etc: string;
    /**
     * 위탁투자중개업자
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    cs_iv_bk: string;
    /**
     * 처분 전 자기주식 보유현황(배당가능이익 범위 내 취득(주)(보통주식))
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    aq_wtn_div_ostk: string;
    /**
     * 처분 전 자기주식 보유현황(배당가능이익 범위 내 취득(주)(비율(%)))
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    aq_wtn_div_ostk_rt: string;
    /**
     * 처분 전 자기주식 보유현황(배당가능이익 범위 내 취득(주)(기타주식))
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    aq_wtn_div_estk: string;
    /**
     * 처분 전 자기주식 보유현황(배당가능이익 범위 내 취득(주)(비율(%)))
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    aq_wtn_div_estk_rt: string;
    /**
     * 처분 전 자기주식 보유현황(기타취득(주)(보통주식))
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    eaq_ostk: string;
    /**
     * 처분 전 자기주식 보유현황(기타취득(주)(비율(%)))
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    eaq_ostk_rt: string;
    /**
     * 처분 전 자기주식 보유현황(기타취득(주)(기타주식))
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    eaq_estk: string;
    /**
     * 처분 전 자기주식 보유현황(기타취득(주)(비율(%)))
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    eaq_estk_rt: string;
    /**
     * 처분결정일
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    dp_dd: string;
    /**
     * 사외이사참석여부(참석(명))
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사참석여부(불참(명))
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(사외이사가 아닌 감사위원)참석여부
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    adt_a_atn: string;
    /**
     * 1일 매도 주문수량 한도(보통주식)
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    d1_slodlm_ostk: string;
    /**
     * 1일 매도 주문수량 한도(기타주식)
     * @type {string}
     * @memberof TsstkDpDecsnItem
     */
    d1_slodlm_estk: string;
}
/**
 * @type TsstkDpDecsnResponse
 * 
 * @export
 */
export type TsstkDpDecsnResponse = CommonError | TsstkDpDecsnResponseSuccess;
/**
 * 
 * @export
 * @interface TsstkDpDecsnResponseSuccess
 */
export interface TsstkDpDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof TsstkDpDecsnResponseSuccess
     */
    status: TsstkDpDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof TsstkDpDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<TsstkDpDecsnItem>}
     * @memberof TsstkDpDecsnResponseSuccess
     */
    list: Array<TsstkDpDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type TsstkDpDecsnResponseSuccessStatusEnum =
    '000'

const TsstkDpDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isTsstkDpDecsnResponseSuccessStatusEnum(value: any): value is TsstkDpDecsnResponseSuccessStatusEnum {
    return TsstkDpDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as TsstkDpDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface TsstkDpDecsnResponseSuccessAllOf
 */
export interface TsstkDpDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<TsstkDpDecsnItem>}
     * @memberof TsstkDpDecsnResponseSuccessAllOf
     */
    list: Array<TsstkDpDecsnItem>;
}
/**
 * 
 * @export
 * @interface UnrstExctvMendngSttusItem
 */
export interface UnrstExctvMendngSttusItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof UnrstExctvMendngSttusItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof UnrstExctvMendngSttusItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof UnrstExctvMendngSttusItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof UnrstExctvMendngSttusItem
     */
    corp_name: string;
    /**
     * 구분(미등기임원)
     * @type {string}
     * @memberof UnrstExctvMendngSttusItem
     */
    se: string;
    /**
     * 인원수
     * @type {string}
     * @memberof UnrstExctvMendngSttusItem
     */
    nmpr: string;
    /**
     * 연간급여 총액
     * @type {string}
     * @memberof UnrstExctvMendngSttusItem
     */
    fyer_salary_totamt: string;
    /**
     * 1인평균 급여액
     * @type {string}
     * @memberof UnrstExctvMendngSttusItem
     */
    jan_salary_am: string;
    /**
     * 비고
     * @type {string}
     * @memberof UnrstExctvMendngSttusItem
     */
    rm: string;
}
/**
 * @type UnrstExctvMendngSttusResponse
 * 
 * @export
 */
export type UnrstExctvMendngSttusResponse = CommonError | UnrstExctvMendngSttusResponseSuccess;
/**
 * 
 * @export
 * @interface UnrstExctvMendngSttusResponseSuccess
 */
export interface UnrstExctvMendngSttusResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof UnrstExctvMendngSttusResponseSuccess
     */
    status: UnrstExctvMendngSttusResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof UnrstExctvMendngSttusResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<UnrstExctvMendngSttusItem>}
     * @memberof UnrstExctvMendngSttusResponseSuccess
     */
    list: Array<UnrstExctvMendngSttusItem>;
}

/**
 * 에러 및 정보 코드
 */
export type UnrstExctvMendngSttusResponseSuccessStatusEnum =
    '000'

const UnrstExctvMendngSttusResponseSuccessStatusEnumValues = [
    '000',
]

export function isUnrstExctvMendngSttusResponseSuccessStatusEnum(value: any): value is UnrstExctvMendngSttusResponseSuccessStatusEnum {
    return UnrstExctvMendngSttusResponseSuccessStatusEnumValues.indexOf(value as unknown as UnrstExctvMendngSttusResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface UnrstExctvMendngSttusResponseSuccessAllOf
 */
export interface UnrstExctvMendngSttusResponseSuccessAllOf {
    /**
     * 
     * @type {Array<UnrstExctvMendngSttusItem>}
     * @memberof UnrstExctvMendngSttusResponseSuccessAllOf
     */
    list: Array<UnrstExctvMendngSttusItem>;
}
/**
 * 
 * @export
 * @interface WdCocobdIsDecsnItem
 */
export interface WdCocobdIsDecsnItem {
    /**
     * 접수번호(14자리)
     * ※ 공시뷰어 연결에 이용예시
     * - PC용 : https://dart.fss.or.kr/dsaf001/main.do?rcpNo=접수번호
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    rcept_no: string;
    /**
     * 
     * @type {CorpCls}
     * @memberof WdCocobdIsDecsnItem
     */
    corp_cls: CorpCls;
    /**
     * 공시대상회사의 고유번호(8자리)
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    corp_code: string;
    /**
     * 회사명
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    corp_name: string;
    /**
     * 사채의 종류(회차)
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    bd_tm: string;
    /**
     * 사채의 종류(종류)
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    bd_knd: string;
    /**
     * 사채의 권면(전자등록)총액 (원)
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    bd_fta: string;
    /**
     * 해외발행(권면(전자등록)총액)
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    ovis_fta: string;
    /**
     * 해외발행(권면(전자등록)총액(통화단위))
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    ovis_fta_crn: string;
    /**
     * 해외발행(기준환율등)
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    ovis_ster: string;
    /**
     * 해외발행(발행지역)
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    ovis_isar: string;
    /**
     * 해외발행(해외상장시 시장의 명칭)
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    ovis_mktnm: string;
    /**
     * 자금조달의 목적(시설자금 (원))
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    fdpp_fclt: string;
    /**
     * 자금조달의 목적(영업양수자금 (원))
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    fdpp_bsninh: string;
    /**
     * 자금조달의 목적(운영자금 (원))
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    fdpp_op: string;
    /**
     * 자금조달의 목적(채무상환자금 (원))
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    fdpp_dtrp: string;
    /**
     * 자금조달의 목적(타법인 증권 취득자금 (원))
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    fdpp_ocsa: string;
    /**
     * 자금조달의 목적(기타자금 (원))
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    fdpp_etc: string;
    /**
     * 사채의 이율(표면이자율 (%))
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    bd_intr_sf: string;
    /**
     * 사채의 이율(만기이자율 (%))
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    bd_intr_ex: string;
    /**
     * 사채만기일
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    bd_mtd: string;
    /**
     * 채무재조정에 관한 사항(채무재조정의 범위)
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    dbtrs_sc: string;
    /**
     * 청약일
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    sbd: string;
    /**
     * 납입일
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    pymd: string;
    /**
     * 대표주관회사
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    rpmcmp: string;
    /**
     * 보증기관
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    grint: string;
    /**
     * 이사회결의일(결정일)
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    bddd: string;
    /**
     * 사외이사 참석여부(참석 (명))
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    od_a_at_t: string;
    /**
     * 사외이사 참석여부(불참 (명))
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    od_a_at_b: string;
    /**
     * 감사(감사위원) 참석여부
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    adt_a_atn: string;
    /**
     * 증권신고서 제출대상 여부
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    rs_sm_atn: string;
    /**
     * 제출을 면제받은 경우 그 사유
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    ex_sm_r: string;
    /**
     * 당해 사채의 해외발행과 연계된 대차거래 내역
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    ovis_ltdtl: string;
    /**
     * 공정거래위원회 신고대상 여부
     * @type {string}
     * @memberof WdCocobdIsDecsnItem
     */
    ftc_stt_atn: string;
}
/**
 * @type WdCocobdIsDecsnResponse
 * 
 * @export
 */
export type WdCocobdIsDecsnResponse = CommonError | WdCocobdIsDecsnResponseSuccess;
/**
 * 
 * @export
 * @interface WdCocobdIsDecsnResponseSuccess
 */
export interface WdCocobdIsDecsnResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof WdCocobdIsDecsnResponseSuccess
     */
    status: WdCocobdIsDecsnResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof WdCocobdIsDecsnResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<WdCocobdIsDecsnItem>}
     * @memberof WdCocobdIsDecsnResponseSuccess
     */
    list: Array<WdCocobdIsDecsnItem>;
}

/**
 * 에러 및 정보 코드
 */
export type WdCocobdIsDecsnResponseSuccessStatusEnum =
    '000'

const WdCocobdIsDecsnResponseSuccessStatusEnumValues = [
    '000',
]

export function isWdCocobdIsDecsnResponseSuccessStatusEnum(value: any): value is WdCocobdIsDecsnResponseSuccessStatusEnum {
    return WdCocobdIsDecsnResponseSuccessStatusEnumValues.indexOf(value as unknown as WdCocobdIsDecsnResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface WdCocobdIsDecsnResponseSuccessAllOf
 */
export interface WdCocobdIsDecsnResponseSuccessAllOf {
    /**
     * 
     * @type {Array<WdCocobdIsDecsnItem>}
     * @memberof WdCocobdIsDecsnResponseSuccessAllOf
     */
    list: Array<WdCocobdIsDecsnItem>;
}
/**
 * 
 * @export
 * @interface XbrlTaxonomyItem
 */
export interface XbrlTaxonomyItem {
    /**
     * 재무제표구분
     * @type {string}
     * @memberof XbrlTaxonomyItem
     */
    sj_div: string;
    /**
     * 계정ID
     * @type {string}
     * @memberof XbrlTaxonomyItem
     */
    account_id: string;
    /**
     * 계정명
     * @type {string}
     * @memberof XbrlTaxonomyItem
     */
    account_nm: string;
    /**
     * 기준일
     * @type {string}
     * @memberof XbrlTaxonomyItem
     */
    bsns_de: string;
    /**
     * 한글 출력명
     * @type {string}
     * @memberof XbrlTaxonomyItem
     */
    label_kor: string;
    /**
     * 영문 출력명
     * @type {string}
     * @memberof XbrlTaxonomyItem
     */
    label_eng: string;
    /**
     * 데이터유형
     * ※ 데이타 유형설명 - text block : 제목 - Text : Text - yyyy-mm-dd : Date - X : Monetary Value - (X): Monetary Value(Negative) - X.XX : Decimalized Value - Shares : Number of shares (주식 수) - For each : 공시된 항목이 전후로 반복적으로 공시될 경우 사용 - 공란 : 입력 필요 없음 
     * @type {string}
     * @memberof XbrlTaxonomyItem
     */
    data_tp: string;
    /**
     * IFRS Reference ※ 출력예시 K-IFRS 1001 문단 54?(8), K-IFRS 1001 문단 78？(2)
     * @type {string}
     * @memberof XbrlTaxonomyItem
     */
    ifrs_ref: string;
}
/**
 * @type XbrlTaxonomyResponse
 * 
 * @export
 */
export type XbrlTaxonomyResponse = CommonError | XbrlTaxonomyResponseSuccess;
/**
 * 
 * @export
 * @interface XbrlTaxonomyResponseSuccess
 */
export interface XbrlTaxonomyResponseSuccess {
    /**
     * 에러 및 정보 코드
     * @type {string}
     * @memberof XbrlTaxonomyResponseSuccess
     */
    status: XbrlTaxonomyResponseSuccessStatusEnum;
    /**
     * 응답메시지
     * @type {string}
     * @memberof XbrlTaxonomyResponseSuccess
     */
    message: string;
    /**
     * 
     * @type {Array<XbrlTaxonomyItem>}
     * @memberof XbrlTaxonomyResponseSuccess
     */
    list: Array<XbrlTaxonomyItem>;
}

/**
 * 에러 및 정보 코드
 */
export type XbrlTaxonomyResponseSuccessStatusEnum =
    '000'

const XbrlTaxonomyResponseSuccessStatusEnumValues = [
    '000',
]

export function isXbrlTaxonomyResponseSuccessStatusEnum(value: any): value is XbrlTaxonomyResponseSuccessStatusEnum {
    return XbrlTaxonomyResponseSuccessStatusEnumValues.indexOf(value as unknown as XbrlTaxonomyResponseSuccessStatusEnum) !== -1
}


/**
 * 
 * @export
 * @interface XbrlTaxonomyResponseSuccessAllOf
 */
export interface XbrlTaxonomyResponseSuccessAllOf {
    /**
     * 
     * @type {Array<XbrlTaxonomyItem>}
     * @memberof XbrlTaxonomyResponseSuccessAllOf
     */
    list: Array<XbrlTaxonomyItem>;
}
