import { Suspense } from "react";
import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import Navbar from "./Components/Navbar/Navbar";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playersPromises = fetchPlayers();

  return (
    <>
      {/* {Navber} */}
      <Navbar></Navbar>

      {/* Available Players*/}
      <Suspense fallback={<h2>Loading...</h2>}>
        <AvailablePlayers playersPromises={playersPromises}> </AvailablePlayers>
      </Suspense>

      <SelectedPlayers></SelectedPlayers>
    </>
  );
}

export default App;
