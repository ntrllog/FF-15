import React from 'react';
import { Line } from 'rc-progress';

const MatchObjTable = ({ blueTeamStats, redTeamStats }) => {
  return (
    <div className="flex justify-around items-center">
      <div className="text-center w-full">
        <p>Blue Team ({blueTeamStats.win === 'Win' ? 'Victory' : 'Defeat'})</p>
        <div className="flex justify-around">
          <p>Towers: {blueTeamStats.towers}</p>
          <p>Barons: {blueTeamStats.barons}</p>
        </div>
        <div className="flex justify-around">
          <p>Dragons: {blueTeamStats.dragons}</p>
          <p>Rift Heralds: {blueTeamStats.heralds}</p>
        </div>
      </div>
      <div className="text-center w-full">
        <p>Damage</p>
        <Line percent={`${blueTeamStats.totalDamage/(blueTeamStats.totalDamage + redTeamStats.totalDamage)*100}`} strokeWidth="5" strokeColor={blueTeamStats.totalDamage + redTeamStats.totalDamage === 0 ? "#CBD5E0" : "#3182CE"} strokeLinecap="butt" trailWidth="5" trailColor={blueTeamStats.totalDamage + redTeamStats.totalDamage === 0 ? "#CBD5E0" : "#E53E3E"} />
        <p>{blueTeamStats.totalDamageString} | {redTeamStats.totalDamageString}</p>
        <p>Kills</p>
        <Line percent={`${blueTeamStats.totalKills/(blueTeamStats.totalKills + redTeamStats.totalKills)*100}`} strokeWidth="5" strokeColor={blueTeamStats.totalKills + redTeamStats.totalKills === 0 ? "#CBD5E0" : "#3182CE"} strokeLinecap="butt" trailWidth="5" trailColor={blueTeamStats.totalKills + redTeamStats.totalKills === 0 ? "#CBD5E0" : "#E53E3E"} />
        <p>{blueTeamStats.totalKills} | {redTeamStats.totalKills}</p>
      </div>
      <div className="text-center w-full">
        <p>Red Team ({redTeamStats.win === 'Win' ? 'Victory' : 'Defeat'})</p>
        <div className="flex justify-around">
          <p>Towers: {redTeamStats.towers}</p>
          <p>Barons: {redTeamStats.barons}</p>
        </div>
        <div className="flex justify-around">
          <p>Dragons: {redTeamStats.dragons}</p>
          <p>Rift Heralds: {redTeamStats.heralds}</p>
        </div>
      </div>
    </div>
  );
};

export default MatchObjTable;
