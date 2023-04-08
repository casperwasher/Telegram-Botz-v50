const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://youtube-mp36.p.rapidapi.com/dl',
  params: {id: 'UxxajLWwzqY'},
  headers: {
    'X-RapidAPI-Key': '1f436e8510msh1cc8197b227ccfcp1ca8c5jsn687ac5e9f5eb',
    'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});