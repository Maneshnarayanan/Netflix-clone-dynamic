// import logo from './logo.svg';/
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Rowposter from "./Components/Rowposters/Rowposter";
import { action ,Documentaries,HorrorMovies,originals, RomanceMovies, trending } from "./urls";
function App() {
    return (
        <div>
            <Navbar />
            <Banner />
            <Rowposter url={originals} tittle="Netflix Originals" />
            <Rowposter url={trending} tittle="Trending" isSmall />
            <Rowposter url={action} tittle="Action" isSmall />
            <Rowposter url={HorrorMovies} tittle="Horror Movies" isSmall />
            <Rowposter url={RomanceMovies} tittle="Romance Movies" isSmall />
            <Rowposter url={Documentaries} tittle="Documentaries" isSmall />

        </div>
    );
}

export default App;
