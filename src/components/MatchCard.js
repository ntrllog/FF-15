import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MatchTable from './MatchTable';
import MatchObjTable from './MatchObjTable';

import { summonerSpellMap, runePathMap, keystoneMap, itemMap } from '../data/gameData.js';

const API_KEY = process.env.REACT_APP_API_KEY;
const CORS_URL = 'https://cors-anywhere.herokuapp.com/';
// const CORS_URL = '';
const QUEUE_TYPE_URL = 'https://static.developer.riotgames.com/docs/lol/queues.json';
const MATCH_URL = 'https://na1.api.riotgames.com/lol/match/v4/matches/';

const MatchCard = ({ match, champPicUrl, champNameMap, champKeyMap, summonerName, setSearching }) => {
  const [displayDetailedStats, setDisplayDetailedStats] = useState(false);
  const [matchType, setMatchType] = useState('');
  const [gameDuration, setGameDuration] = useState(0);
  const [playerStats, setPlayerStats] = useState({});
  const [player1Stats, setPlayer1Stats] = useState({});
  const [player2Stats, setPlayer2Stats] = useState({});
  const [player3Stats, setPlayer3Stats] = useState({});
  const [player4Stats, setPlayer4Stats] = useState({});
  const [player5Stats, setPlayer5Stats] = useState({});
  const [player6Stats, setPlayer6Stats] = useState({});
  const [player7Stats, setPlayer7Stats] = useState({});
  const [player8Stats, setPlayer8Stats] = useState({});
  const [player9Stats, setPlayer9Stats] = useState({});
  const [player10Stats, setPlayer10Stats] = useState({});
  const [blueTeamStats, setBlueTeamStats] = useState({});
  const [redTeamStats, setRedTeamStats] = useState({});
  
  useEffect(() => {
    getMatchInfo();
  }, []);
  
  const onMatchCardClick = () => {
    setDisplayDetailedStats(!displayDetailedStats);
  }
  
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
    let statsArray = [];
    let playerIndex = 0;
    let blueTeam = {
      win: matchRes.teams[0].win,
      maxDamage: 0,
      totalDamage: 0,
      totalGold: 0,
      totalKills: 0,
      towers: matchRes.teams[0].towerKills,
      barons: matchRes.teams[0].baronKills,
      dragons: matchRes.teams[0].dragonKills,
      heralds: matchRes.teams[0].riftHeraldKills,
    };
    let redTeam = {
      win: matchRes.teams[1].win,
      maxDamage: 0,
      totalDamage: 0,
      totalGold: 0,
      totalKills: 0,
      towers: matchRes.teams[1].towerKills,
      barons: matchRes.teams[1].baronKills,
      dragons: matchRes.teams[1].dragonKills,
      heralds: matchRes.teams[1].riftHeraldKills,
    };
    
    for (let i = 0; i < matchRes.participants.length; i++) {
      let participant = matchRes.participants[i];
      statsArray.push({
        champion: participant.championId,
        participantId: participant.participantId,
        summonerName: matchRes.participantIdentities[i].player.summonerName,
        summonerId: matchRes.participantIdentities[i].player.summonerId,
        win: participant.stats.win,
        spell1: participant.spell1Id,
        spell2: participant.spell2Id,
        rune1: participant.stats.perk0,
        rune2: participant.stats.perkSubStyle,
        kda: `${participant.stats.kills} / ${participant.stats.deaths} / ${participant.stats.assists}`,
        kdaRatio: participant.stats.deaths === 0 ? 'Perfect KDA' : `${((participant.stats.kills + participant.stats.assists)/participant.stats.deaths).toFixed(2)}:1 KDA`,
        damage: participant.stats.totalDamageDealtToChampions,
        damageString: participant.stats.totalDamageDealtToChampions.toLocaleString(),
        wards: participant.stats.wardsPlaced,
        item1: participant.stats.item0,
        item2: participant.stats.item1,
        item3: participant.stats.item2,
        item4: participant.stats.item3,
        item5: participant.stats.item4,
        item6: participant.stats.item5,
        trinket: participant.stats.item6,
        cs: participant.stats.totalMinionsKilled + participant.stats.neutralMinionsKilled,
      });
      if (participant.participantId === participantId) {
        playerIndex = i;
      }
      if (i < 5) {
        if (participant.stats.totalDamageDealtToChampions > blueTeam.maxDamage) {
          blueTeam.maxDamage = participant.stats.totalDamageDealtToChampions;
        }
        blueTeam.totalDamage += participant.stats.totalDamageDealtToChampions;
        blueTeam.totalGold += participant.stats.goldEarned;
        blueTeam.totalKills += participant.stats.kills;
      }
      else {
        if (participant.stats.totalDamageDealtToChampions > redTeam.maxDamage) {
          redTeam.maxDamage = participant.stats.totalDamageDealtToChampions;
        }
        redTeam.totalDamage += participant.stats.totalDamageDealtToChampions;
        redTeam.totalGold += participant.stats.goldEarned;
        redTeam.totalKills += participant.stats.kills;
      }
    }
    return [statsArray, playerIndex, blueTeam, redTeam];
  }
  
  const getMatchInfo = async () => {
    try {
      getMatchType(match.queue);
      let matchRes = await getMatchResponse(match.gameId);
      let participantId = await getParticipantId(matchRes);
      let stats = await getStats(matchRes, participantId);
      let setAllPlayerStats = [setPlayer1Stats, setPlayer2Stats, setPlayer3Stats, setPlayer4Stats, setPlayer5Stats, setPlayer6Stats, setPlayer7Stats, setPlayer8Stats, setPlayer9Stats, setPlayer10Stats];
      for (let i = 0; i < setAllPlayerStats.length; i++) {
        if (i === stats[1]) {
          setPlayerStats(stats[0][i]);
        }
        setAllPlayerStats[i](stats[0][i]);
      }
      setBlueTeamStats(stats[2]);
      setRedTeamStats(stats[3]);
      setGameDuration(matchRes.gameDuration);
    }
    catch (err) {
      if (err.response.data.status) {
        alert(err.response.data.status.message);
      }
      else {
        alert(err);
      }
      setSearching(false);
    }
  };
  
  return (
    <div className={`${gameDuration < 240 ? 'bg-gray-300' : playerStats.win ? 'bg-blue-300' : 'bg-red-300'} mb-2 py-2 border border-gray-600 ui accordion`}>
      <div onClick={onMatchCardClick} className={`flex flex-wrap justify-around items-center ${displayDetailedStats ? 'active' : ''} title`}>
        <div className="text-center ml-2">
          <p>{matchType}</p>
          <p>{gameDuration < 240 ? 'Remake' : playerStats.win ? 'Victory' : 'Defeat'}</p>
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
          <p>{gameDuration < 240 && playerStats.kdaRatio === 'Perfect KDA' ? '0.00:1 KDA' : playerStats.kdaRatio}</p>
        </div>
        <div className="flex items-center ml-2">
          <div className="grid grid-cols-3">
            {[playerStats.item1, playerStats.item2, playerStats.item3, playerStats.item4, playerStats.item5, playerStats.item6].map((item, index) => item !== 0 ? <img key={index} className="h-10" alt={`item ${index}`} src={`${itemMap[item]}`} /> : <div key={index}></div>)}
          </div>
          <img className="h-10" alt="trinket icon" src={`${itemMap[playerStats.trinket]}`} />
        </div>
        <div className="text-center ml-4">
          <p>Level {playerStats.level}</p>
          <p>{playerStats.cs} CS ({(playerStats.cs / (gameDuration / 60)).toFixed(1)})</p>
          <p>{playerStats.wards} wards</p>
        </div>
        <i className={`arrow circle ${displayDetailedStats ? 'up' : 'down'} icon`}></i>
      </div>
      <div className={`${displayDetailedStats ? 'active' : ''} content`}>
        <MatchTable team={'Blue Team'} teamStats={blueTeamStats} player1Stats={player1Stats} player2Stats={player2Stats} player3Stats={player3Stats} player4Stats={player4Stats} player5Stats={player5Stats} champPicUrl={champPicUrl} champKeyMap={champKeyMap} summonerSpellMap={summonerSpellMap} keystoneMap={keystoneMap} runePathMap={runePathMap} itemMap={itemMap} />
        <MatchObjTable blueTeamStats={blueTeamStats} redTeamStats={redTeamStats} />
        <MatchTable team={'Red Team'} teamStats={redTeamStats} player1Stats={player6Stats} player2Stats={player7Stats} player3Stats={player8Stats} player4Stats={player9Stats} player5Stats={player10Stats} champPicUrl={champPicUrl} champKeyMap={champKeyMap} summonerSpellMap={summonerSpellMap} keystoneMap={keystoneMap} runePathMap={runePathMap} itemMap={itemMap} />
      </div>
    </div>
  );
};

export default MatchCard;
