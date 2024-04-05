import React from 'react';
import { user_profile, ratedSeason, favoriteSeason } from '../../types/userProfile'; 

interface UserProfileProps {
  user: user_profile;
}

export function UserProfile({ user }: UserProfileProps): JSX.Element {
  if (!user) return null;

  const { profileImageUrl, username, ratedSeasons, favoriteSeasons } = user;

  return (
    <div className="userProfile">
      <img src={profileImageUrl} alt="User Avatar" />
      <h3>{username}</h3>
      <div className="ratedSeasons">
        <h4>Оцениваемые сезоны:</h4>
        <ul>
          {ratedSeasons.map((season: ratedSeason) => (
            <li key={season.seasonId}>
              {season.seasonName} - Рейтинг: {season.seasonRating}
            </li>
          ))}
        </ul>
      </div>
      <div className="favoriteSeasons">
        <h4>Любимые аниме:</h4>
        <ul>
          {favoriteSeasons.map((season: favoriteSeason) => (
            <li key={season.seasonId}>
              {season.seasonName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
