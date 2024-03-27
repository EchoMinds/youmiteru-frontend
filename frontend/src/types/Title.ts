export interface ITitle {
    titleId: number;
    titleName: string;
    titleImage: string;
    titleDescription: string;
    genreName: string[];
    seasonList: Season[];
}

export interface Season {
    seasonId: number;
    seasonName: string;
    description: string;
    imageUrl: string;
}
