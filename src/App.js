import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="app">
    <Nav />
    <Banner/>
     <div className="row">
     <Row title="NETFLIX ORIGINALS" fetchURL = {requests.fetchComedyMovies} isLargeRow />
     <Row title="Top Rated" fetchURL = {requests.fetchTopRated} />
     <Row title="Trending " fetchURL = {requests.fetchTrending} />
     <Row title="Romance " fetchURL = {requests.fetchRomanceMovies} />
     <Row title="Horror " fetchURL = {requests.fetchTopRated} />
     <Row title="Documentaries" fetchURL = {requests.fetchActionMovies} />
     </div>

    </div>
  );
}

export default App;
