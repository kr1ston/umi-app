import Cookies from 'js-cookie';
import { history } from 'umi';

export async function getInitialState() {
  const token = Cookies.get('token');
  return {
    token,
  };
}

export function onRouteChange({ location }: { location: Location }) {
  const { pathname } = location;

  const token = Cookies.get('token');

  const loginPath = '/agent';
  const homePath = '/agent';
  const whiteList = [loginPath, '/register', '/forget-password', '/chat'];

  if (token) {
    if (pathname === loginPath) {
      history.replace(homePath);
    }
  } else {
    if (whiteList.includes(pathname)) {
      return;
    }
    history.replace(loginPath);
  }
}
