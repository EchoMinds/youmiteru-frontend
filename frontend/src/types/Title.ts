import { Season } from "./Season";

export interface ITitle {
    titleId: number;
    titleName: string;
    titleImage: string;
    titleDescription: string;
    genreName: string[];
    seasonList: Season[];
}
