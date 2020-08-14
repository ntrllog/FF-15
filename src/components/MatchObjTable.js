import React from 'react';

const MatchObjTable = ({ blueTeamStats, redTeamStats }) => {
  return (
    <div className="flex justify-evenly items-center">
      <div>
        <p>Blue Team ({blueTeamStats.win === 'Win' ? 'Victory' : 'Defeat'})</p>
        <p>Towers: {blueTeamStats.towers}</p>
        <p>Barons: {blueTeamStats.barons}</p>
        <p>Dragons: {blueTeamStats.dragons}</p>
        <p>Rift Heralds: {blueTeamStats.heralds}</p>
      </div>
      <div className="text-center">
        <p>Damage</p>
        <p>{blueTeamStats.totalDamage} | {redTeamStats.totalDamage}</p>
        <progress style={{ background: 'red' }} value={`${blueTeamStats.totalDamage}`} max={`${blueTeamStats.totalDamage + redTeamStats.totalDamage}`}></progress>
        <p>Gold</p>
        <p>{blueTeamStats.totalGold} | {redTeamStats.totalGold}</p>
        <progress style={{ background: 'red' }} value={`${blueTeamStats.totalGold}`} max={`${blueTeamStats.totalGold + redTeamStats.totalGold}`}></progress>
        <p>Kills</p>
        <p>{blueTeamStats.totalKills} | {redTeamStats.totalKills}</p>
        <progress style={{ background: 'red' }} value={`${blueTeamStats.totalKills}`} max={`${blueTeamStats.totalKills + redTeamStats.totalKills}`}></progress>
      </div>
      <div className="text-right">
        <p>Red Team ({redTeamStats.win === 'Win' ? 'Victory' : 'Defeat'})</p>
        <p>Towers: {redTeamStats.towers}</p>
        <p>Barons: {redTeamStats.barons}</p>
        <p>Dragons: {redTeamStats.dragons}</p>
        <p>Rift Heralds: {redTeamStats.heralds}</p>
      </div>
    </div>
  );
};

export default MatchObjTable;
