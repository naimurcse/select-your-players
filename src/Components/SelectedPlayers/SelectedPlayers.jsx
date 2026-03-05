import SoldPlayer from "../SoldPlayer/SoldPlayer";

function SelectedPlayers({ soldPlayers }) {
  return (
    <div className="max-w-[1200px] mx-auto">
      {soldPlayers.map((player) => (
        <SoldPlayer player={player}></SoldPlayer>
      ))}
    </div>
  );
}

export default SelectedPlayers;
