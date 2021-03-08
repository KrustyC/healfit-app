import { FC } from 'react';
import { useUser } from '@auth0/nextjs-auth0';

const Profile: FC = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
        <br />
      </div>
    );
  }

  return <div>Hey man you ain't authenticated</div>;
};

export default Profile;
