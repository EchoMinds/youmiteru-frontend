import React from 'react';
import { UserProfile } from '../../types/userProfile'; 

interface UserDetailsProps {
  user: UserProfile;
}

export function UserDetails({ user }: UserDetailsProps): JSX.Element {
  if (!user) return null;

  const { userId } = user;

  return (
    <div className="userDetails">
      <button className="userSettingsButton">

      </button>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default UserDetails;
