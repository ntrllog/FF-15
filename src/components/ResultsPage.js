import React from 'react';
import RankedCard from './RankedCard';

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
          {rankedInfo.length > 0 && <RankedCard queueType={rankedInfo[0].queueType} tier={rankedInfo[0].tier} rank={rankedInfo[0].rank} lp={rankedInfo[0].leaguePoints} wins={rankedInfo[0].wins} losses={rankedInfo[0].losses} />}
          {rankedInfo.length > 1 && <RankedCard queueType={rankedInfo[1].queueType} tier={rankedInfo[1].tier} rank={rankedInfo[1].rank} lp={rankedInfo[1].leaguePoints} wins={rankedInfo[1].wins} losses={rankedInfo[1].losses} />}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
