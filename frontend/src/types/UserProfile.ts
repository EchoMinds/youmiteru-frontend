interface ratedSeason {
    seasonId: number;
    seasonName: string;
    imageUrl: string;
    seasonRating: number;
}

interface favoriteSeason {
    seasonId: number;
    seasonName: string;
    imageUrl: string;
}

export interface UserProfile {
    userId: number;
    profileImageUrl: string;
    username: string;
    favoriteSeasons: [];
    ratedSeasons: ratedSeason[];
}
