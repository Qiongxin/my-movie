import Banner from "./Banner";
import Nav from "./Nav";
import Rows from "./Rows";

export default function Home () {
  return (
    <div>
      {/* nav section at the top */}
      <Nav />

      {/* banner section shows details about a movie */}
      <Banner />

      {/* movie rows section shows eight different movie lists for a row*/}
      <Rows />
      
    </div>
  )
}