import React from 'react';
import HomeInputs from './HomeInputs';
import HomeParticipate from './HomeParticipate';
import MediaMobApp from './MediaMobApp';
import './Home.scss';


const Home = () => (
  <div className="Home">
    <HomeInputs />
    <HomeParticipate />
    <MediaMobApp />
  </div>
);

export default Home;
