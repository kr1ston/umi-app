// import { getInitialState } from './app';
import Cookies from 'js-cookie';

export default function access() {
  // const { token } = getInitialState() || {};
  const token = Cookies.get('token');

  return {
    isLogin: !!token,
    token,
  };
}
