import { useSelector } from 'react-redux';

import { userSelector } from './selectors';

export const useUserInfo = () => {
  const user = useSelector(userSelector);

  return user;
};
