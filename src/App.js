import "./App.css";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import Favourites from "./components/Favourites";

import { BrowserRouter, Route, Routes } from "react-router-dom"; // browser router gives facility of routing

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {" "}
              <Banner />
              <MovieList />
            </>
          }
        />
        <Route path='/favourites' element={<> <Favourites /></>}/>
      </Routes>

     
     
    </BrowserRouter>
  );
}

export default App;
