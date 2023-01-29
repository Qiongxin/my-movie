import Banner from "../Banner";
import Nav from "../Nav";
import requests from "../Request";
import Rows from ".././Rows";
import { nanoid } from 'nanoid'

export default function Home () {

  const lists = [{
    title: 'NETFLIX ORIGINALS',
    url: requests.fetchNetflixOriginals,
    row: true
  },{
    title: 'Trending',
    url: requests.fetchTrending,
    row: false
  },{
    title: 'Top Rated',
    url: requests.fetchTopRated,
    row: false
  },{
    title: 'Action Movies',
    url: requests.fetchActionMovies,
    row: false
  },{
    title: 'Comedy Movies',
    url: requests.fetchComedyMovies,
    row: false
  },{
    title: 'Horror Movies',
    url: requests.fetchHorrorMovies,
    row: false
  },{
    title: 'Romance Movies',
    url: requests.fetchRomanceMovies,
    row: false
  },{
    title: 'Documentaries',
    url: requests.fetchDocumentaries,
    row: false
  }]

  return (
    <div>
      {/* nav section at the top */}
      <Nav />

      {/* banner section shows details about a movie */}
      <Banner />

      {/* movie rows section shows eight different movie lists for a row*/}

      {lists.map( list => <Rows key={nanoid()} title={list.title} fetchUrl={list.url} isLargeRow={list.row}/>)}

      {/* 
      <Rows title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Rows title="Trending" fetchUrl={requests.fetchTrending}/>
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries}/> */}
      
    </div>
  )
}