const url = "https://rickandmortyapi.com/api/character";
fetch(url)
.then(function (response) {
    return response.json();
})
.then(function (jsObject) {
    var cards = window.document.getElementById("cards");
    jsObject.results.forEach(character => {
        cards.innerHTML = cards.innerHTML + 
        `<div id="${character.id}" class="card" style="cursor:pointer;" 
        onclick = charInfo(${character.id});>
        <img src = ${character.image} width="150px" height="150px"></img>
        <h6>${character.name}</h6>
        <button type="button" class="btn btn-success">Like!</button>
        </div>`
    });
})

function charInfo(num) {
    var charUrl = 'https://rickandmortyapi.com/api/character/' + num;
    fetch(charUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsObject) {
        // console.log(JSON.stringify(jsObject));
        // alert("Name: " + jsObject.name + ", Status: " + jsObject.status + ", Species: " + jsObject.species);
        var print = `<div></div>`;
        jsObject.episode.forEach(episode => {
            print = print + `<div> ${episode} </div>`;
        })
        $("#myModal").click(function () {
            var info = `<div id="infoCard">
           <p> Name: ${jsObject.name}</p>
           <p> <img src = ${jsObject.image} width="150px" height="150px"></img> </p>
           <p> Status: ${jsObject.status}</p>
           <p> Species: ${jsObject.species}</p>
           <p> Gender: ${jsObject.gender}</p>
           <p> Origin: ${jsObject.origin.name}</p>
           <p> Location: ${jsObject.location.name}</p>
           <p id="print"> Episodes: ${print}</p>
            </div>`
            $("#myModal").html(info);
        });
        $("#myModal").modal();
    })
}

function showEpisodes(arr) {
    var episodes = `<p></p><br>`;
    arr.forEach(element => {
        episodes += element + "\n";
    })
    return episodes;
}
