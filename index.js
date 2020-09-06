const axios = require('axios');
const https = require('https');
const baseURL = 'https://teaching.csse.uwa.edu.au/units/CITS3200/';

const instance = axios.create({
	httpsAgent: new https.Agent({
	  rejectUnauthorized: false
	})
  });


instance.get(baseURL).then((resp) => {
	console.log(resp.data);
});
