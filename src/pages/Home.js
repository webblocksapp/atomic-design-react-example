import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Div from '../components/atoms/Div';

const Home = () => {
  return (
    <MainLayout title="Home">
      <Div>Section 1</Div>
      <Div>Section 2</Div>
      <Div>Section 3</Div>
      <Div>Section 4</Div>
      <Div>Section 5</Div>
    </MainLayout>
  );
};

export default Home;
