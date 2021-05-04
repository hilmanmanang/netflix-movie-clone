import React from 'react';
import './App.css';
import Banner from './component/Banner';
import Row from './component/Row';
import requests from './request';

function App() {
  return (
    <div className="app">
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrendingNow}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovie}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovie}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovie}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovie}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentary}/>
    </div>
  );
}

export default App;
