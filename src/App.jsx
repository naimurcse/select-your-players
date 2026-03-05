import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import LoadingSpinner from "./Components/LoadingSpinner/LoadingSpinner";
import Navbar from "./Components/Navbar/Navbar";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playersPromises = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(6000000);
  const [soldPlayers, setSoldPlayers] = useState([]);
  // console.log(soldPlayers);
  return (
    <>
      {/* {Navber} */}
      <Navbar availableBalance={availableBalance}></Navbar>

      {/* Players Button for Available and Selected */}
      <div className="max-w-[1200px] mx-auto flex justify-between items-center my-8 pb-8 border-b-2 border-gray-200">
        <h2 className="font-bold text-3xl">
          {toggle
            ? "Available Players"
            : `Selected Players (${soldPlayers.length}/6)`}
        </h2>
        <div>
          <button
            onClick={() => setToggle(true)}
            className={`py-2 px-8 border-1 border-gray-300 font-bold border-r-0 rounded-l-xl ${toggle ? "bg-[#ddfc2d]" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-2 px-8 border-1 border-gray-300 font-bold border-l-0 rounded-r-xl ${!toggle ? "bg-[#ddfc2d]" : ""}`}
          >
            Selected ({soldPlayers.length})
          </button>
        </div>
      </div>

      {/* Toggle for display either available players or Selected players */}
      {toggle ? (
        <Suspense fallback={<LoadingSpinner>Loading...</LoadingSpinner>}>
          <AvailablePlayers
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            playersPromises={playersPromises}
            setSoldPlayers={setSoldPlayers}
            soldPlayers={soldPlayers}
          >
            {" "}
          </AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers soldPlayers={soldPlayers}></SelectedPlayers>
      )}
    </>
  );
}

export default App;
