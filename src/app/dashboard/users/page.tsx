import { redirect } from 'next/navigation';

const UsersPage = () => {
  redirect('/dashboard/users/profiles');
};

export default UsersPage;
