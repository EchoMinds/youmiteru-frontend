import { Banner } from "./Banner";
import { Season } from "./Season";

export interface DashBoard {
    banners: Banner[];
    announcedSeasons: Season[];
    recentReleasedSeasons: Season[];
    popularSeasons: Season[];
}
