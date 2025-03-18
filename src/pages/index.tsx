import React from 'react';
import { history } from 'umi';
import Cookies from 'js-cookie';

export default function HomePage() {
  const token = Cookies.get('token');
  
  const handleLogin = () => {
    Cookies.set('token', 'test-token');
    window.location.reload();
  };
  
  const handleLogout = () => {
    Cookies.remove('token');
    window.location.reload();
  };
  
  return (
    <div>
      <h1>Umi App Home Page</h1>
      <p>Token status: {token ? 'Logged in' : 'Not logged in'}</p>
      {token ? (
        <button type="button" onClick={handleLogout}>Logout</button>
      ) : (
        <button type="button" onClick={handleLogin}>Login</button>
      )}
      <p>
        <button type="button" onClick={() => history.push('/dashboard')}>Go to Dashboard</button>
      </p>
    </div>
  );
} 