export interface CatalogElement {
    titleId: number;
    titleName: string;
    titleImageUrl: string;
}

export interface CatalogPages {
    currentPage: number;
    titlesForCatalog: CatalogElement[];
    totalPage: number;
}
export interface CatalogParams {
    genres?: string[];
    format?: string[];
    state?: string[];
    AgeRestriction?: string[];
    yearSeason?: string[];
    dates?: string[];
}
