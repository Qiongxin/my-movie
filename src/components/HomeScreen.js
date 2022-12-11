import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./Request";
import Rows from "./Rows";

export default function Home () {

  return (
    <div>
      {/* nav section at the top */}
      <Nav />

      {/* banner section shows details about a movie */}
      <Banner />

      {/* movie rows section shows eight different movie lists for a row*/}

      <Rows title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Rows title="Trending" fetchUrl={requests.fetchTrending}/>
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      
    </div>
  )
}