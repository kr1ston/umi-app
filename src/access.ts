import { getInitialState } from './app';

export default function (initialState: Awaited<ReturnType<typeof getInitialState>>) {
  const { token } = initialState || {};

  return {
    isLogin: !!token,
  };
}
