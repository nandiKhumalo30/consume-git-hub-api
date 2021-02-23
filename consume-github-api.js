const axios = require('axios');
function api(repoName, startDate, endDate){
  axios.get(`https://api.github.com/repos/freeCodeCamp/${repoName}/pulls`)
  .then (function(response) {

    for(let i = 0; i < response.data[0].number; i++){
      if(new Date(response.data[i].created_at) >= new Date(startDate) && new Date(response.data[i].created_at) <= new Date(endDate) ||
      new Date(response.data[i].closed_at) >= new Date(startDate) && new Date(response.data[i].closed_at) <= new Date(endDate) || 
      new Date(response.data[i].updated_at) >= new Date(startDate) && new Date(response.data[i].updated_at) <= new Date(endDate)  ||
      new Date(response.data[i].merged_at) >= new Date(startDate) && new Date(response.data[i].merged_at) <= new Date(endDate))
      console.log(response.data[i])
    } 
  })   
  .catch(function(error) { 
   console.log(error);
  })
}
console.log(api(`boilerplate-project-stockchecker`, '2018-12-12', '2021-12-12'))
