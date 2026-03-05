import { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";
function AvailablePlayers({
  playersPromises,
  setAvailableBalance,
  availableBalance,
}) {
  const players = use(playersPromises);
  // console.log(players);
  return (
    <>
      <div className="max-w-80 md:max-w-100  lg:max-w-200 xl:max-w-300 mx-auto grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8">
        {players.map((player) => (
          <PlayerCard
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            player={player}
            key={player.id}
          ></PlayerCard>
        ))}
      </div>
    </>
  );
}

export default AvailablePlayers;
