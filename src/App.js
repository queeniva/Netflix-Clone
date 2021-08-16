import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
    <Banner fetchURL = {requests.fetchTrending}/>
     <div className="row">
     <Row title="NETFLIX ORIGINALS" fetchURL = {requests.fetchComedyMovies} isLargeRow />
     <Row title="Top Rated" fetchURL = {requests.fetchTopRated} />
     <Row title="Trending " fetchURL = {requests.fetchTrending} />
     <Row title="Romance " fetchURL = {requests.fetchRomanceMovies} />
     <Row title="Horror " fetchURL = {requests.fetchHorrorMovies} />
     <Row title="Documentaries" fetchURL = {requests.fetchDocumentaries} />
     </div>

    </div>
  );
}

export default App;
