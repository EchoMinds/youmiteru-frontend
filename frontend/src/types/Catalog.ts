export interface CatalogElement {
    title_name: string;
    title_image_url: string;
}

export interface CatalogPages {
    currentPage: number;
    titlesForCatalog: CatalogElement[];
    totalPages: number;
}
export interface CatalogParams {
    genres?: string[];
    format?: string[];
    state?: string[];
    AgeRestriction?: string[];
    yearSeason?: string[];
    dates?: string[];
}
