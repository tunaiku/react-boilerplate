import React from 'react';
import Head from '../../shared/components/head';
import image from '../../assets/images/2000px-Vector-based_example.svg.png';

export default () => (
  <div>
    <Head id="home" title="Home" />
    <h1>Welcome Buddies</h1>
    <img src={image} alt="" />
  </div>
);
