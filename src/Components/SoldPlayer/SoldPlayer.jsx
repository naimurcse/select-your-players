import deleteIcon from "../../assets/deleteIcon.png";

function SoldPlayer({ player, removePlayer }) {
  const { name, img, playing_role } = player;

  const handleRemove = (deletePlayer) => {
    removePlayer(deletePlayer);
  };
  return (
    <>
      <div className="shadow border-1 rounded-xl border-gray-200 py-3 px-4 mb-4 flex justify-between items-center">
        {/* Left Part */}
        <div className="flex items-center gap-4">
          <img className="w-22 rounded" src={img} alt="" />
          <div>
            <h3 className="text-3xl font-extrabold text-gray-700">{name}</h3>
            <p className="text-gray-500 mt-2">{playing_role}</p>
          </div>
        </div>

        {/* Right Part */}
        <button onClick={() => handleRemove(player)}>
          <img src={deleteIcon} alt="" />
        </button>
      </div>
    </>
  );
}

export default SoldPlayer;
