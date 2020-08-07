import React from 'react';

import IRON from '../images/Emblem_Iron.png';
import BRONZE from '../images/Emblem_Bronze.png';
import SILVER from '../images/Emblem_Silver.png';
import GOLD from '../images/Emblem_Gold.png';
import PLATINUM from '../images/Emblem_Platinum.png';
import DIAMOND from '../images/Emblem_Diamond.png';
import MASTER from '../images/Emblem_Master.png';
import GRANDMASTER from '../images/Emblem_Grandmaster.png';
import CHALLENGER from '../images/Emblem_Challenger.png';

const rankedIcon = {
  "IRON": IRON,
  "BRONZE": BRONZE,
  "SILVER": SILVER,
  "GOLD": GOLD,
  "PLATINUM": PLATINUM,
  "DIAMOND": DIAMOND,
  "MASTER": MASTER,
  "GRANDMASTER": GRANDMASTER,
  "CHALLENGER": CHALLENGER,
};

const RankedCard = ({ rankedInfo }) => {
  return (
    <div className="rounded bg-gray-100 border border-gray-900 mb-2 flex justify-center">
      <div>
        <img className="h-40" alt="rank icon" src={rankedIcon[rankedInfo.tier]} />
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
