import React from 'react';

const MasteryCard = ({ masteryInfo, url, idToChampKeyMap, idToChampNameMap }) => {
  return (
    <div className="text-center">
      <img alt="champ icon" src={`${url}${idToChampKeyMap[masteryInfo.championId]}.png`} />
      <p>{idToChampNameMap[masteryInfo.championId]}</p>
      <p>Level: {masteryInfo.championLevel}</p>
      <p>{masteryInfo.championPoints.toLocaleString()} points</p>
    </div>
  );
};

export default MasteryCard;
