import React, { lazy, Suspense } from 'react';

const Welcome = lazy(() => import('../features/Welcome/Welcome'));

const WelcomePage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Welcome />
      </Suspense>
    </div>
  );
};

export default WelcomePage;
