import './App.css';
import Row from './Row';
import requests from './request';

function App() {
  return (
    <div className="App">
     <h1>About to build netflix clone</h1>
     <div className="row">
     <Row title="Netflix Originals" fetchURL = {requests.fetchNetflixOriginals} />
     <Row title="Top Rated" fetchURL = {requests.fetchTopRated} />
     <Row title="Trending " fetchURL = {requests.fetchTrending} />
     <Row title="Romance " fetchURL = {requests.fetchRomanceMovies} />
     <Row title="Horror " fetchURL = {requests.fetchHorrorMovies} />
     </div>

    </div>
  );
}

export default App;
