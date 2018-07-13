



axios.get('https://api.myjson.com/bins/bygvt').then((response) => {
    console.log(response.data);
    let data = response.data
    data.aliases.forEach( (element) => {
        console.log(element)
});

let actor = data.playedBy.actor
console.log(actor);

let p = document.createElement('p')
p.innerText = actor
document.body.appendChild(p)
})

