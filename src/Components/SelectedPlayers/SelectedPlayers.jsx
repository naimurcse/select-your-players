import SoldPlayer from "../SoldPlayer/SoldPlayer";

function SelectedPlayers({ soldPlayers, removePlayer }) {
  return (
    <div className="max-w-[1200px] mx-auto">
      {soldPlayers.map((player) => (
        <SoldPlayer
          key={player.id}
          player={player}
          removePlayer={removePlayer}
        ></SoldPlayer>
      ))}
    </div>
  );
}

export default SelectedPlayers;
