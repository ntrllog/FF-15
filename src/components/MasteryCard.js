import React from 'react';

const MasteryCard = ({ masteryInfo, champPicUrl, champNameMap, champKeyMap }) => {
  return (
    <div className="text-center">
      <img alt="champ icon" src={`${champPicUrl}${champKeyMap[masteryInfo.championId]}.png`} />
      <p>{champNameMap[masteryInfo.championId]}</p>
      <p>Level: {masteryInfo.championLevel}</p>
      <p>{masteryInfo.championPoints.toLocaleString()} points</p>
    </div>
  );
};

export default MasteryCard;
