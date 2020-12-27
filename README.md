# FF 15

[![Netlify Status](https://api.netlify.com/api/v1/badges/55b52bf0-3b60-4dcd-8aa5-d5ab7e121e39/deploy-status)](https://app.netlify.com/sites/ff-15/deploys)

A web application that displays League of Legends player information and match statistics. Uses the [Riot Games API](https://developer.riotgames.com/).

(a clone of [op.gg](https://na.op.gg/summoner/userName=Big+Tast%C3%BF))

https://ff-15.netlify.app

## Screenshots
![](/images/Home.png)
![](/images/Search.png)

## Resources
https://stackoverflow.com/questions/43462367/how-to-overcome-the-cors-issue-in-reactjs  
https://stackoverflow.com/questions/39153080/how-can-i-get-the-status-code-from-an-http-error-in-axios

## Personal Notes
- Don't use cors-anywhere for local testing, use cors extension (App and MatchCard)
- Remove all double quotes from itemMap (except Cho'Gath, Kai'Sa, Kha'Zix, Kog'Maw, Rek'Sai, Vel'Koz)
