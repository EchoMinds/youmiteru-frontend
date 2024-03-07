export interface CatalogData {
    title_name: string;
    title_image_url: string;
}

export interface CatalogParams {
    genres?: string[];
    format?: string[];
    state?: string[];
    AgeRestriction?: string[];
    yearSeason?: string[];
}
