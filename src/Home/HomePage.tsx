import React from 'react';
// import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import MainArticle from '../components/MainArticle';
import AllArticles from '../components/AllArticles';
import FirstArticle from '../components/FirstArticle';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="w-full">
      <div className="bg-topSite bg-top bg-no-repeat w-full xxl:bg-cover">
        <Header />
        <MainArticle />
        <FirstArticle />
      </div>
      <AllArticles />
      <Footer />
    </div>
  );
}

export default Home;
