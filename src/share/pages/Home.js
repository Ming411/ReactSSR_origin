import React from 'react';
import {Link} from 'react-router-dom';
const Home = () => {
  return (
    <div onClick={() => console.log(111)}>
      <h1>Home123</h1>
      <Link to='/list'>go list</Link>
    </div>
  );
};

export default Home;
