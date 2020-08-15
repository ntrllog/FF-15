import React from 'react';
import { Line } from 'rc-progress';

const MatchTableRow = ({ playerStats, team, teamStats, champPicUrl, champKeyMap, summonerSpellMap, keystoneMap, runePathMap, itemMap }) => {
  return (
    <tr>
      <td data-label={team}>
        <div className="flex flex-wrap items-center">
          <img className="h-8" alt="champ icon" src={`${champPicUrl}${champKeyMap[playerStats.champion]}.png`} />
          <div className="ml-2">
            <img className="h-4" alt="spell1 icon" src={summonerSpellMap[playerStats.spell1]} />
            <img className="h-4" alt="spell2 icon" src={summonerSpellMap[playerStats.spell2]} />
          </div>
          <div className="flex flex-col ml-2">
            <img className="h-5" alt="keystone icon" src={keystoneMap[playerStats.rune1]} />
            <img className="object-contain h-4" alt="rune path icon" src={runePathMap[playerStats.rune2]} />
          </div>
          <p>{playerStats.summonerName}</p>
        </div>
      </td>
      <td data-label="Kills/Deaths/Assists">
        <div className="text-center">
          <p>{playerStats.kda}</p>
          <p>{playerStats.kdaRatio}</p>
        </div>
      </td>
      <td data-label="Damage">
        <p className="text-center">{playerStats.damageString}</p>
        <Line percent={`${playerStats.damage/teamStats.maxDamage*100}`} strokeWidth="5" strokeColor={team === 'Blue Team' ? "#3182CE" : "#E53E3E"} tailWidth="5" />
      </td>
      <td data-label="CS">{playerStats.cs}</td>
      <td data-label="Items">
        <div className="flex flex-wrap">
          {[playerStats.item1, playerStats.item2, playerStats.item3, playerStats.item4, playerStats.item5, playerStats.item6, playerStats.trinket].map((item, index) => item !== 0 ? <img key={index} className="h-6" alt={`item ${index}`} src={`${itemMap[item]}`} /> : <div className="h-6 w-6" key={index}></div>)}
        </div>
      </td>
    </tr>
  );
};

export default MatchTableRow;
