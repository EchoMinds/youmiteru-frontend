export interface CatalogElement {
    title_id: number;
    title_name: string;
    title_image_url: string;
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
