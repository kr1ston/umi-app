import React from 'react';
import { useModel } from 'umi';

const InitialStateTest: React.FC = () => {
  const { initialState, loading, refresh } = useModel('@@initialState');
  
  return (
    <div>
      <h2>Initial State Test</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Token: {initialState?.token || 'No token'}</p>
          <button type="button" onClick={refresh}>Refresh Initial State</button>
        </>
      )}
    </div>
  );
};

export default InitialStateTest; 