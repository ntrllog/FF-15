import React from 'react';
import MatchTableRow from './MatchTableRow';

const MatchTable = ({ team, teamStats, player1Stats, player2Stats, player3Stats, player4Stats, player5Stats, champPicUrl, champKeyMap, summonerSpellMap, keystoneMap, runePathMap, itemMap }) => {
  return (
    <table className="ui celled small unstackable table">
      <thead>
        <tr>
          <th>{team}</th>
          <th>Kills/Deaths/Assists</th>
          <th>Damage</th>
          <th>CS</th>
          <th>Items</th>
        </tr>
      </thead>
      <tbody>
        {[player1Stats, player2Stats, player3Stats, player4Stats, player5Stats].map(playerStats => <MatchTableRow key={playerStats.summonerId} playerStats={playerStats} team={team} teamStats={teamStats} champPicUrl={champPicUrl} champKeyMap={champKeyMap} summonerSpellMap={summonerSpellMap} keystoneMap={keystoneMap} runePathMap={runePathMap} itemMap={itemMap} />)}
      </tbody>
    </table>
  );
};

export default MatchTable;
