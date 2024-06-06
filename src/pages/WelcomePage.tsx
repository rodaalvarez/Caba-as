import React, { lazy, Suspense } from 'react';

const Welcome = lazy(() => import('../features/Welcome/Welcome'));

const WelcomePage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Hola</h1>
        <Welcome />
      </Suspense>
    </div>
  );
};

export default WelcomePage;
