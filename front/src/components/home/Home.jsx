import React from 'react';
import HomeInputs from './HomeInputs';
import HomeParticipate from './HomeParticipate';
import MediaMobApp from './MediaMobApp';
import './Home.scss';
import RestoPub from './RestoPub';

const Home = () => (
  <div className="home">
    <HomeInputs />
    <HomeParticipate />
    <RestoPub />
    <MediaMobApp />
  </div>
);

export default Home;
