import React from 'react';
import RankedCard from './RankedCard';
import MasteryCard from './MasteryCard';
import MatchCard from './MatchCard';

import { PATCH_VERSION } from './App';
import { champNameMap, champKeyMap } from '../data/gameData.js';

const ResultsPage = ({ summonerInfo, rankedInfo, masteryInfo, matchesInfo }) => {
  const CHAMPION_PIC_URL = `https://ddragon.leagueoflegends.com/cdn/${PATCH_VERSION}/img/champion/`;
  
  return (
    <div className="bg-gray-200 md:pr-10">
      <div className="pt-10 sm:ml-4 md:ml-32">
        <div className="flex">
          <img className="h-32 rounded-full object-contain" alt="profile icon" src={summonerInfo.icon} />
          <div className="ml-4 self-center">
            <p className="font-bold text-4xl">{summonerInfo.name}</p>
            <p>Level: {summonerInfo.level}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-3 md:col-span-1 mt-10 sm:ml-2 md:ml-24">
          {rankedInfo.length > 0 && <RankedCard rankedInfo={rankedInfo[0]} />}
          {rankedInfo.length > 1 && <RankedCard rankedInfo={rankedInfo[1]} />}
        </div>
        <div className="col-span-3 md:col-span-2 mt-10">
          <p className="text-center text-3xl">Most Played Champions</p>
          <div className="flex justify-evenly">
            {masteryInfo.map(championMastery => <MasteryCard key={championMastery.championId} masteryInfo={championMastery} champPicUrl={CHAMPION_PIC_URL} champNameMap={champNameMap} champKeyMap={champKeyMap} />)}
          </div>
          <div>
            {matchesInfo.map(match => <MatchCard key={match.gameId} match={match} champPicUrl={CHAMPION_PIC_URL} champNameMap={champNameMap} champKeyMap={champKeyMap} summonerName={summonerInfo.name} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
