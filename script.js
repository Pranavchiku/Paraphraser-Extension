
let button = document.getElementById('fillForm')
button.addEventListener('click', buttonClick);

// console.log(raw);
function buttonClick(){
    var raw = document.getElementById("textHere").value;

    var bodyHere = `{"language":"en","strength":3,"text":"${raw}"}`
    const options = {

        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Host': 'rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com',
            'X-RapidAPI-Key': '381842666cmshab2b9fed8bfbb4ap1c5789jsn7c3571aad773'
        },
        body: bodyHere.toString()
    };
    fetch('https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite', options)
    .then(response => response.json())
    .then(response => {console.log(response);
    document.getElementById("paraphrasedText").style.display="block";
    document.getElementById("paraphrasedText").innerHTML=response["rewrite"];
    })
    .catch(err => console.error(err));
}
