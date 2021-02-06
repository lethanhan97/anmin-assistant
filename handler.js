'use strict';
const axios = require('axios');
const env = require('./env.json');
const api = axios.create({
  baseURL: `https://api.telegram.org/bot${env.token}`,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

module.exports.remind = async (_) => {
  const message = "It's already 11.30pm. Time for bed!";
  return api
    .get('/sendMessage', {
      params: {
        chat_id: chatId,
        text: message,
        parse_mode: 'html'
      }
    })
    .then(() => ({
      statusCode: 200,
      body: JSON.stringify({
        message: `${message}`
      })
    }))
    .catch((e) => ({
      statusCode: 500,
      body: JSON.stringify(e)
    }));

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
