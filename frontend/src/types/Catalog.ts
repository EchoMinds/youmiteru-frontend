export interface CatalogData {
    name: string;
    url_image: string;
}

export interface CatalogParams {
    genres?: string[];
    format?: string[];
    state?: string[];
    ageRestriction?: string[];
    yearSeason?: string[];
}
