import React from 'react';
import Icon from '../images/Emblem_Gold.png';

const ResultsPage = ({ summonerInfo, rankedInfo, masteryInfo }) => {
  
  return (
    <div className="bg-gray-200">
      <div className="pt-10 sm:ml-4 md:ml-32">
        <div className="flex">
          <img className="h-32 rounded-full object-contain" alt="profile icon" src={summonerInfo.icon} />
          <div className="ml-4 self-center">
            <p className="font-bold text-4xl">{summonerInfo.name}</p>
            <p>Level: {summonerInfo.level}</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3">
        <div className="col-span-3 md:col-span-1 mt-10 sm:ml-2 md:ml-24">
          {rankedInfo.length > 0 && <div className="rounded bg-gray-100 border border-gray-900 mb-2 flex">
            <img className="h-40" alt="rank icon" src={Icon} />
            <div className="ml-4 self-center">
              <p>{rankedInfo[0].queueType}</p>
              <p>{rankedInfo[0].tier} {rankedInfo[0].rank}</p>
              <p>{rankedInfo[0].leaguePoints} LP</p>
              <p>{rankedInfo[0].wins} W {rankedInfo[0].losses} L</p>
            </div>
          </div>}
          {rankedInfo.length > 1 && <div className="rounded bg-gray-100 border border-gray-900 flex">
            <img className="h-40 object-contain" alt="rank icon" src={Icon} />
            <div className="ml-4 self-center">
              <p>{rankedInfo[1].queueType}</p>
              <p>{rankedInfo[1].tier} {rankedInfo[1].rank}</p>
              <p>{rankedInfo[1].leaguePoints} LP</p>
              <p>{rankedInfo[1].wins} W {rankedInfo[1].losses} L</p>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
