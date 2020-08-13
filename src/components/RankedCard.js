import React from 'react';

import { rankedIconMap } from '../data/gameData.js';

const RankedCard = ({ rankedInfo }) => {
  return (
    <div className="rounded bg-gray-100 border border-gray-600 mb-2 flex justify-center">
      <div>
        <img className="h-40" alt="rank icon" src={(rankedIconMap[rankedInfo.tier])} />
        <div className="ml-4 self-center">
          <p>{rankedInfo.queueType}</p>
          <p>{rankedInfo.tier} {rankedInfo.rank}</p>
          <p>{rankedInfo.leaguePoints} LP</p>
          <p>{rankedInfo.wins} W {rankedInfo.losses} L</p>
        </div>
      </div>
    </div>
  );
};

export default RankedCard;
