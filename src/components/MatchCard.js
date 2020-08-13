import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { summonerSpellMap, runePathMap, keystoneMap, itemMap } from '../data/gameData.js';

const API_KEY = process.env.REACT_APP_API_KEY;
// const CORS_URL = 'https://cors-anywhere.herokuapp.com/';
const CORS_URL = 'https://adoring-fermi-ca261c.netlify.app/';
const QUEUE_TYPE_URL = 'http://static.developer.riotgames.com/docs/lol/queues.json';
const MATCH_URL = 'https://na1.api.riotgames.com/lol/match/v4/matches/';

const MatchCard = ({ match, champPicUrl, champNameMap, champKeyMap, summonerName }) => {
  const [matchType, setMatchType] = useState('');
  const [gameDuration, setGameDuration] = useState(0);
  const [playerStats, setPlayerStats] = useState({});
  
  useEffect(() => {
    getMatchInfo();
  }, []);
  
  const binarySearch = (queueId, arr) => {
    let l = 0;
    let r = arr.length-1;
    
    while (l+1 < r) {
      let mid = l + Math.floor((r - l) / 2);
      if (arr[mid].queueId === queueId) {
        return arr[mid].description.replace(' games', '').replace('5v5 ', '');
      }
      else if (arr[mid].queueId < queueId) {
        l = mid;
      }
      else {
        r = mid;
      }
    }
    if (arr[l].queueId === queueId) {
      return arr[l].description.replace(' games', '').replace('5v5 ', '');
    }
    else if (arr[r].queueId === queueId) {
      return arr[r].description.replace(' games', '').replace('5v5 ', '');
    }
    return `Game Mode ${queueId}`;
  }
  
  const getMatchType = async queueId => {
    const res = await axios.get(QUEUE_TYPE_URL);
    setMatchType(binarySearch(queueId, res.data));
  };
  
  
  const getMatchResponse = async matchId => {
    const res = await axios.get(`${CORS_URL}${MATCH_URL}${matchId}`, {
      params: {
        api_key: API_KEY,
      },
    });
    
    return res.data;
  };
  
  const getParticipantId = async matchRes => {
    for (let i = 0; i < matchRes.participantIdentities.length; i++) {
      let participant = matchRes.participantIdentities[i];
      if (participant.player.summonerName === summonerName) {
        return participant.participantId;
      }
    }
  };
  
  const getStats = async (matchRes, participantId) => {
    let stats = {
      win: true,
      spell1: 0,
      spell2: 0,
      rune1: 0,
      rune2: 0,
      kda: '',
      item1: 0,
      item2: 0,
      item3: 0,
      item4: 0,
      item5: 0,
      item6: 0,
      trinket: 0,
      level: 0,
      cs: 0,
      controlWards: 0,
    };
    for (let i = 0; i < matchRes.participants.length; i++) {
      let participant = matchRes.participants[i];
      if (participant.participantId === participantId) {
        stats.win = participant.stats.win;
        stats.spell1 = participant.spell1Id;
        stats.spell2 = participant.spell2Id;
        stats.rune1 = participant.stats.perk0;
        stats.rune2 = participant.stats.perkSubStyle;
        stats.kda = `${participant.stats.kills} / ${participant.stats.deaths} / ${participant.stats.assists}`;
        stats.kdaRatio = participant.stats.deaths === 0 ? 'Perfect KDA' : `${((participant.stats.kills + participant.stats.assists)/participant.stats.deaths).toFixed(2)}:1`;
        stats.item1 = participant.stats.item0;
        stats.item2 = participant.stats.item1;
        stats.item3 = participant.stats.item2;
        stats.item4 = participant.stats.item3;
        stats.item5 = participant.stats.item4;
        stats.item6 = participant.stats.item5;
        stats.trinket = participant.stats.item6;
        stats.level = participant.stats.champLevel;
        stats.cs = participant.stats.totalMinionsKilled + participant.stats.neutralMinionsKilled;
        stats.controlWards = participant.stats.visionWardsBoughtInGame;
        break;
      }
    }
    return stats;
  }
  
  const getMatchInfo = async () => {
    getMatchType(match.queue);
    let matchRes = await getMatchResponse(match.gameId);
    let participantId = await getParticipantId(matchRes);
    let stats = await getStats(matchRes, participantId);
    setPlayerStats(stats);
    setGameDuration(matchRes.gameDuration);
  };
  
  return (
    <div className={`flex flex-wrap justify-center items-center ${playerStats.win ? 'bg-blue-300' : 'bg-red-300'} mb-2 py-2 border border-gray-600`}>
      <div className="text-center ml-2">
        <p>{matchType}</p>
        <p>{playerStats.win ? 'Victory' : 'Defeat'}</p>
        <p>{Math.round(gameDuration / 60)} mins</p>
      </div>
      <div>
        <div className="flex items-center ml-2">
          <img className="h-20" alt="champ icon" src={`${champPicUrl}${champKeyMap[match.champion]}.png`} />
          <div className="ml-2">
            <img className="h-10" alt="spell1 icon" src={summonerSpellMap[playerStats.spell1]} />
            <img className="h-10" alt="spell2 icon" src={summonerSpellMap[playerStats.spell2]} />
          </div>
          <div className="flex flex-col ml-2">
            <img className="h-16" alt="keystone icon" src={keystoneMap[playerStats.rune1]} />
            <img className="object-contain h-10" alt="rune path icon" src={runePathMap[playerStats.rune2]} />
          </div>
        </div>
        <p className="ml-2">{champNameMap[match.champion]}</p>
      </div>
      <div className="text-center ml-2">
        <p>{playerStats.kda}</p>
        <p>{playerStats.kdaRatio}</p>
      </div>
      <div className="flex items-center ml-2">
        <div className="grid grid-cols-3">
          {[playerStats.item1, playerStats.item2, playerStats.item3, playerStats.item4, playerStats.item5, playerStats.item6].map((item, index) => item !== 0 ? <img key={item} className="h-10" alt={`item ${index}`} src={`${itemMap[item]}`} /> : <div key={index}></div>)}
        </div>
        <img className="h-10" alt="trinket icon" src={`${itemMap[playerStats.trinket]}`} />
      </div>
      <div className="text-center ml-4">
        <p>Level {playerStats.level}</p>
        <p>{playerStats.cs} CS ({(playerStats.cs / (gameDuration / 60)).toFixed(1)})</p>
        <p>Control Ward {playerStats.controlWards}</p>
      </div>
    </div>
  );
};

export default MatchCard;
