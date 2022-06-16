
import './App.css';
import Navbar from './components/Navbar';
import ListOfMovies from './components/ListOfMovies';




function App() {

  return (
    <>
    {/* need to pass the searchTerm to ListOfMovies */}
      <Navbar/>
      <ListOfMovies/>
    </>
  );
}

export default App;
