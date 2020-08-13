import React, { useState } from 'react';
import axios from 'axios';
import MainPage from './MainPage';
import ResultsPage from './ResultsPage';

require('dotenv').config();

export const PATCH_VERSION = '10.16.1';

const API_KEY = process.env.REACT_APP_API_KEY;
const CORS_URL = 'https://cors-anywhere.herokuapp.com/';
const SUMMONER_URL = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/';
const PROFILE_ICON_URL = 'http://ddragon.leagueoflegends.com/cdn/10.16.1/img/profileicon/';
const RANKED_URL = 'https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/';
const MASTERY_URL = 'https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/';
const MATCHES_URL = 'https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/';

const App = () => {
  const [summonerInfo, setSummonerInfo] = useState({});
  const [rankedInfo, setRankedInfo] = useState([]);
  const [masteryInfo, setMasteryInfo] = useState([]);
  const [matchesInfo, setMatchesInfo] = useState([]);
  const [showResults, setShowResults] = useState(false);
  
  const getSummonerInfo = async name => {
    const res = await axios.get(`${CORS_URL}${SUMMONER_URL}${name}`, {
      params: {
        api_key: API_KEY,
      },
    });
    
    return res.data;
  };
  
  const getRankedInfo = async id => {
    const res = await axios.get(`${CORS_URL}${RANKED_URL}${id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    
    if (res.data.length === 2) {
      if (res.data[0].queueType === 'RANKED_FLEX_SR') {
        return [res.data[1], res.data[0]];
      }
    }

    return res.data;
  }; 
  
  const getMasteryInfo = async id => {
    const res = await axios.get(`${CORS_URL}${MASTERY_URL}${id}`, {
      params: {
        api_key: API_KEY,
      },
    });

    return res.data.slice(0, 3);
  };
  
  const getMatchesInfo = async id => {
    const res = await axios.get(`${CORS_URL}${MATCHES_URL}${id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return res.data.matches.slice(0, 15);
  };
  
  const onFormSubmit = async name => {
    if (name) {
      try {
        const summonerRes = await getSummonerInfo(name);
        setSummonerInfo({ name: summonerRes.name, level: summonerRes.summonerLevel, icon: `${PROFILE_ICON_URL}${summonerRes.profileIconId.toString()}.png` });
        const rankedRes = await getRankedInfo(summonerRes.id);
        setRankedInfo(rankedRes);
        const masteryRes = await getMasteryInfo(summonerRes.id);
        setMasteryInfo(masteryRes);
        const matchesRes = await getMatchesInfo(summonerRes.accountId);
        setMatchesInfo(matchesRes);
        setShowResults(true);
      }
      catch (err) {
        if (err.response) {
          alert(err.response.data.status.message);
        }
        else {
          alert('Most likely too many requests have been made. Try again in an hour.')
        }
      }
    }    
  };
  
  return (
    <div className="font-mono">
      <MainPage showResults={showResults} onFormSubmit={onFormSubmit} />
      <div className="">
        {showResults === true ? <ResultsPage summonerInfo={summonerInfo} rankedInfo={rankedInfo} masteryInfo={masteryInfo} matchesInfo={matchesInfo} /> : <div></div>}
      </div>
    </div>
  );
}

export default App;
