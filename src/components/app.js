import React, { Component } from 'react';
import SearchBar from './search_bar';
import PageTitle from './page_title';
//import Header from './header';
// var Twitter = require('twitter');

// var client = new Twitter({
//   consumer_key: 'rPyZirqaUFeuD8Z4DJNgi8Mex',
//   consumer_secret: 'jAOWP7COyBURhxoMjh33XTTRDeVlPus9V9525ZSsLUdJudURdH',
//   access_token_key: '2813955372-qejx8bsdaWxh0YMrfyYi89oGlwN8L9SJGqTfPzP',
//   access_token_secret: 'jqFXJDtJHypuFmpTRoaPcnblk2wIeLmQvCUl1fmsOumUD'
// });

// var params = {screen_name: 'nodejs'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }
// });
export default class App extends Component {
  render() {
    return (
    	<div>
     	 	<PageTitle />
      		<SearchBar />
      	</div>
    );
  }
}
