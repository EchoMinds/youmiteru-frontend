import React from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import UserProfile from '../../components/UserProfile/UserProfile';
import UserDetails from '../../components/UserDetails/UserDetails';
import FavoriteAnime from '../../components/FavoriteAnime/FavoriteAnime';
import { useUserProfileQuery } from '../../hooks/useUserProfileQuery'; 

const User = () => {
  const userId = 1; 
  const userProfileQuery = useUserProfileQuery(userId); 

  if (userProfileQuery.isLoading) {
    return <h1>Loading ....</h1>;
  }

  if (userProfileQuery.isError) {
    return <h1>Error ....</h1>;
  }

  const userData = userProfileQuery.data; 

  return (
    <div>
      <NavigationBar />
      {userData && ( 
        <div>
          <UserProfile user={userData} />
          <UserDetails user={userData} />
          <FavoriteAnime favoriteAnime={userData.favoriteAnime} />
        </div>
      )}
    </div>
  );
};

export default User;
