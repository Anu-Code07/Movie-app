import React from 'react';
import Nav from './Nav';
import Title from './Title';

function MainPagelayout({ children }) {
  return (
    <div>
      <Title
        title="Movie Box"
        subtitle="Find all your favourite movies or actor!"
      />
      <Nav />
      {children}
    </div>
  );
}

export default MainPagelayout;
