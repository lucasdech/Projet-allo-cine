

async function getmoovies() {
    const response = await fetch("../data/moovies.json");
    const data = await response.json();
    console.log(data.moovieslist);


    data.moovieslist.forEach(moovieslist => {
        let infodufilm = document.querySelector(".info-film");
        infodufilm.innerHTML += `
        
        <div class="card ${moovieslist.Title}">

        <ul>

        <div class="row align text-center">

           <div class="poster col"> 

           <li><img  src="${moovieslist.Poster}"> </li>

            </div>
            
            <div class="text col">
            <h2> <U> ${moovieslist.Title} </U></h2>
            <li> <U> Title : </U> ${moovieslist.Title}</li>
             <li> <U> Year : </U> ${moovieslist.Year}</li>
            <li> <U> Released : </U> ${moovieslist.Released}</li>
            <li> <U> Runtime : </U> ${moovieslist.Runtime}</li>
            <li> <U> Genre : </U> ${moovieslist.Genre}</li>
            <li> <U> Direction : </U> ${moovieslist.Director}</li>
            <li> <U> Writer : </U> ${moovieslist.Writer}</li>
            <li> <U> Actors : </U> ${moovieslist.Actors}</li>
            <li> <U> Plot : </U> ${moovieslist.Plot}</li>
            <li> <U> Languages : </U> ${moovieslist.Language}</li>
            <li> <U> Contry : </U> ${moovieslist.Country}</li>
            <li> <U> Awards : </U> ${moovieslist.Awards}</li>
            <li> <U> Metascore : </U> ${moovieslist.Metascore}</li>
            <li> <U> IDMB Rating : </U> ${moovieslist.imdbRating}</li>
            <li> <U> Type : </U> ${moovieslist.Type}</li>
            </div>

        </div>
        <div class="container text-center">
           <div class="imagesbas row align-items-end"> 

           <div class="col gros"> <li> <img src="${moovieslist.Images}"> </li> </div>
           <div class="col gros"> <li> <img src="${moovieslist.Images[1]}"> </li> </div>
           <div class="col gros"> <li> <img src="${moovieslist.Images[2]}"> </li> </div>
           <div class="col gros"> <li> <img src="${moovieslist.Images[3]}"> </li> </div>
           <div class="col gros"> <li> <img src="${moovieslist.Images[4]}"> </li> </div>
           </div>

        </ul>
        </div>
        
        </div>

        `

    })
}


getmoovies();

