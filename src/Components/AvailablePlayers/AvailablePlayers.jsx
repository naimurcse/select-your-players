import { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";
function AvailablePlayers({ playersPromises }) {
  const players = use(playersPromises);
  console.log(players);
  return (
    <>
      <div className="max-w-300 mx-auto grid grid-cols-3 gap-8">
        {players.map((player) => (
          <PlayerCard player={player}></PlayerCard>
        ))}
      </div>
    </>
  );
}

export default AvailablePlayers;
