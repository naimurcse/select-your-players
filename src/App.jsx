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

      {/* Players Button for Available and Selected */}
      <div className="max-w-[1200px] mx-auto flex justify-between items-center my-8 pb-8 border-b-2 border-gray-200">
        <h2 className="font-bold text-3xl">Available Players </h2>
        <div>
          <button className="py-3 px-8 border-1 font-bold border-r-0 rounded-l-xl bg-[#ddfc2d]">
            Available
          </button>
          <button className="py-3 px-8 border-1 font-bold border-l-0 rounded-r-xl">
            Selected (0)
          </button>
        </div>
      </div>

      {/* Available Players*/}
      <Suspense fallback={<h2>Loading...</h2>}>
        <AvailablePlayers playersPromises={playersPromises}> </AvailablePlayers>
      </Suspense>

      {/* Selected Players */}
      <SelectedPlayers></SelectedPlayers>
    </>
  );
}

export default App;
