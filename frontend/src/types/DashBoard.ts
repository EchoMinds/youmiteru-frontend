import { Banner } from "./Banner";
import { Season } from "./Season";
import { User } from "./User";

export interface DashBoard {
    user: User[];
    banners: Banner[];
    announcedSeasons: Season[];
    recentReleasedSeasons: Season[];
    popularSeasons: Season[];
}
