import React from 'react';

import { rankedIconMap } from '../data/gameData.js';

const RankedCard = ({ rankedInfo }) => {
  const romanToInt = {
    'I': 1,
    'II': 2,
    'III': 3,
    'IV': 4,
    'V': 5,
  };
  
  const queueType = {
    'RANKED_SOLO_5x5': 'Ranked Solo',
    'RANKED_FLEX_SR': 'Ranked Flex',
  };
  
  return (
    <div className="rounded bg-gray-100 border border-gray-600 mb-2 flex justify-center">
      <div>
        <img className="h-40" alt="rank icon" src={(rankedIconMap[rankedInfo.tier])} />
        <div className="ml-4 self-center">
          <p>{queueType[rankedInfo.queueType]}</p>
          <p><span className="text-blue-700 font-bold">{rankedInfo.tier} {romanToInt[rankedInfo.rank]}</span> | {rankedInfo.leaguePoints} LP</p>
          <p>{rankedInfo.wins} W {rankedInfo.losses} L</p>
          <p>Win Ratio {Math.round(rankedInfo.wins / (rankedInfo.wins + rankedInfo.losses) * 100)}%</p>
        </div>
      </div>
    </div>
  );
};

export default RankedCard;
