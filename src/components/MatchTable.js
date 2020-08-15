import React from 'react';
import { Line } from 'rc-progress';

const MatchTable = ({ team, teamStats, player1Stats, player2Stats, player3Stats, player4Stats, player5Stats, champPicUrl, champKeyMap, summonerSpellMap, keystoneMap, runePathMap, itemMap }) => {
  return (
    <table className="ui celled unstackable table">
      <thead>
        <tr>
          <th>{team}</th>
          <th>KDA</th>
          <th>Damage</th>
          <th>CS</th>
          <th>Items</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label={team}>
            <div className="flex flex-wrap items-center py-2">
              <img className="h-16" alt="champ icon" src={`${champPicUrl}${champKeyMap[player1Stats.champion]}.png`} />
              <div className="ml-2">
                <img className="h-8" alt="spell1 icon" src={summonerSpellMap[player1Stats.spell1]} />
                <img className="h-8" alt="spell2 icon" src={summonerSpellMap[player1Stats.spell2]} />
              </div>
              <div className="flex flex-col ml-2">
                <img className="h-8" alt="keystone icon" src={keystoneMap[player1Stats.rune1]} />
                <img className="object-contain h-6" alt="rune path icon" src={runePathMap[player1Stats.rune2]} />
              </div>
              <p>{player1Stats.summonerName}</p>
            </div>
          </td>
          <td data-label="KDA">
            <div>
              <p>{player1Stats.kda}</p>
              <p>{player1Stats.kdaRatio}</p>
            </div>
          </td>
          <td data-label="Damage">
            <p>{player1Stats.damageString}</p>
            <Line percent={`${player1Stats.damage/teamStats.maxDamage*100}`} strokeWidth="5" strokeColor={team === 'Blue Team' ? "#3182CE" : "#E53E3E"} />
          </td>
          <td data-label="CS">{player1Stats.cs}</td>
          <td data-label="Items">
            <div className="flex flex-wrap">
              {[player1Stats.item1, player1Stats.item2, player1Stats.item3, player1Stats.item4, player1Stats.item5, player1Stats.item6, player1Stats.trinket].map((item, index) => item !== 0 ? <img key={index} className="h-10" alt={`item ${index}`} src={`${itemMap[item]}`} /> : <div className="h-10 w-10" key={index}></div>)}
            </div>
          </td>
        </tr>
        <tr>
          <td data-label={team}>
            <div className="flex flex-wrap items-center py-2">
              <img className="h-16" alt="champ icon" src={`${champPicUrl}${champKeyMap[player2Stats.champion]}.png`} />
              <div className="ml-2">
                <img className="h-8" alt="spell1 icon" src={summonerSpellMap[player2Stats.spell1]} />
                <img className="h-8" alt="spell2 icon" src={summonerSpellMap[player2Stats.spell2]} />
              </div>
              <div className="flex flex-col ml-2">
                <img className="h-8" alt="keystone icon" src={keystoneMap[player2Stats.rune1]} />
                <img className="object-contain h-6" alt="rune path icon" src={runePathMap[player2Stats.rune2]} />
              </div>
              <p>{player2Stats.summonerName}</p>
            </div>
          </td>
          <td data-label="KDA">
            <div>
              <p>{player2Stats.kda}</p>
              <p>{player2Stats.kdaRatio}</p>
            </div>
          </td>
          <td data-label="Damage">
            <p>{player2Stats.damageString}</p>
            <Line percent={`${player2Stats.damage/teamStats.maxDamage*100}`} strokeWidth="5" strokeColor={team === 'Blue Team' ? "#3182CE" : "#E53E3E"} />
          </td>
          <td data-label="CS">{player2Stats.cs}</td>
          <td data-label="Items">
            <div className="flex flex-wrap">
              {[player2Stats.item1, player2Stats.item2, player2Stats.item3, player2Stats.item4, player2Stats.item5, player2Stats.item6, player2Stats.trinket].map((item, index) => item !== 0 ? <img key={index} className="h-10" alt={`item ${index}`} src={`${itemMap[item]}`} /> : <div className="h-10 w-10" key={index}></div>)}
            </div>
          </td>
        </tr>
        <tr>
          <td data-label={team}>
            <div className="flex flex-wrap items-center py-2">
              <img className="h-16" alt="champ icon" src={`${champPicUrl}${champKeyMap[player3Stats.champion]}.png`} />
              <div className="ml-2">
                <img className="h-8" alt="spell1 icon" src={summonerSpellMap[player3Stats.spell1]} />
                <img className="h-8" alt="spell2 icon" src={summonerSpellMap[player3Stats.spell2]} />
              </div>
              <div className="flex flex-col ml-2">
                <img className="h-8" alt="keystone icon" src={keystoneMap[player3Stats.rune1]} />
                <img className="object-contain h-6" alt="rune path icon" src={runePathMap[player3Stats.rune2]} />
              </div>
              <p>{player3Stats.summonerName}</p>
            </div>
          </td>
          <td data-label="KDA">
            <div>
              <p>{player3Stats.kda}</p>
              <p>{player3Stats.kdaRatio}</p>
            </div>
          </td>
          <td data-label="Damage">
            <p>{player3Stats.damageString}</p>
            <Line percent={`${player3Stats.damage/teamStats.maxDamage*100}`} strokeWidth="5" strokeColor={team === 'Blue Team' ? "#3182CE" : "#E53E3E"} />
          </td>
          <td data-label="CS">{player3Stats.cs}</td>
          <td data-label="Items">
            <div className="flex flex-wrap">
              {[player3Stats.item1, player3Stats.item2, player3Stats.item3, player3Stats.item4, player3Stats.item5, player3Stats.item6, player3Stats.trinket].map((item, index) => item !== 0 ? <img key={index} className="h-10" alt={`item ${index}`} src={`${itemMap[item]}`} /> : <div className="h-10 w-10" key={index}></div>)}
            </div>
          </td>
        </tr>
        <tr>
          <td data-label={team}>
            <div className="flex flex-wrap items-center py-2">
              <img className="h-16" alt="champ icon" src={`${champPicUrl}${champKeyMap[player4Stats.champion]}.png`} />
              <div className="ml-2">
                <img className="h-8" alt="spell1 icon" src={summonerSpellMap[player4Stats.spell1]} />
                <img className="h-8" alt="spell2 icon" src={summonerSpellMap[player4Stats.spell2]} />
              </div>
              <div className="flex flex-col ml-2">
                <img className="h-8" alt="keystone icon" src={keystoneMap[player4Stats.rune1]} />
                <img className="object-contain h-6" alt="rune path icon" src={runePathMap[player4Stats.rune2]} />
              </div>
              <p>{player4Stats.summonerName}</p>
            </div>
          </td>
          <td data-label="KDA">
            <div>
              <p>{player4Stats.kda}</p>
              <p>{player4Stats.kdaRatio}</p>
            </div>
          </td>
          <td data-label="Damage">
            <p>{player4Stats.damageString}</p>
            <Line percent={`${player4Stats.damage/teamStats.maxDamage*100}`} strokeWidth="5" strokeColor={team === 'Blue Team' ? "#3182CE" : "#E53E3E"} />
          </td>
          <td data-label="CS">{player4Stats.cs}</td>
          <td data-label="Items">
            <div className="flex flex-wrap">
              {[player4Stats.item1, player4Stats.item2, player4Stats.item3, player4Stats.item4, player4Stats.item5, player4Stats.item6, player4Stats.trinket].map((item, index) => item !== 0 ? <img key={index} className="h-10" alt={`item ${index}`} src={`${itemMap[item]}`} /> : <div className="h-10 w-10" key={index}></div>)}
            </div>
          </td>
        </tr>
        <tr>
          <td data-label={team}>
            <div className="flex flex-wrap items-center py-2">
              <img className="h-16" alt="champ icon" src={`${champPicUrl}${champKeyMap[player5Stats.champion]}.png`} />
              <div className="ml-2">
                <img className="h-8" alt="spell1 icon" src={summonerSpellMap[player5Stats.spell1]} />
                <img className="h-8" alt="spell2 icon" src={summonerSpellMap[player5Stats.spell2]} />
              </div>
              <div className="flex flex-col ml-2">
                <img className="h-8" alt="keystone icon" src={keystoneMap[player5Stats.rune1]} />
                <img className="object-contain h-6" alt="rune path icon" src={runePathMap[player5Stats.rune2]} />
              </div>
              <p>{player5Stats.summonerName}</p>
            </div>
          </td>
          <td data-label="KDA">
            <div>
              <p>{player5Stats.kda}</p>
              <p>{player5Stats.kdaRatio}</p>
            </div>
          </td>
          <td data-label="Damage">
            <p>{player5Stats.damageString}</p>
            <Line percent={`${player5Stats.damage/teamStats.maxDamage*100}`} strokeWidth="5" strokeColor={team === 'Blue Team' ? "#3182CE" : "#E53E3E"} />
          </td>
          <td data-label="CS">{player5Stats.cs}</td>
          <td data-label="Items">
            <div className="flex flex-wrap">
              {[player5Stats.item1, player5Stats.item2, player5Stats.item3, player5Stats.item4, player5Stats.item5, player5Stats.item6, player5Stats.trinket].map((item, index) => item !== 0 ? <img key={index} className="h-10" alt={`item ${index}`} src={`${itemMap[item]}`} /> : <div className="h-10 w-10" key={index}></div>)}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default MatchTable;
