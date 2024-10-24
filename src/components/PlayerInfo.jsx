import { useState } from "react";

export default function PlayerInfo({ name, symbol, isActive }) {

  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleSetIsEditing = () => {
    setIsEditing(editing => !editing);
  }

  const handleSetPlayerName = (e) => {
    e.preventDefault();
    setPlayerName(e.target.value);
  }

  return (
    <li key={symbol} className={isActive ? 'active' : undefined}> 
      <span className="player">
        <span className="player-name">
          {isEditing ?
            (<input
              type="text"
              onChange={handleSetPlayerName}
              value={playerName}
              required
            >
            </input>)
            :
            playerName}
        </span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button
        onClick={handleSetIsEditing}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  )
}