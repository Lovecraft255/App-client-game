const express = require("express");
const { data , getGames , getGamesByGenres , getGamesByDev , getGamesByPlataform , getGamesByDate , orderByDate , orderByTitle} = require("./functions");

const app = express();

app.get("/games", (req, res) => {
    //const games = getGames();
    const {cant , genre , developer , plataform , minDate , maxDate , order} = req.query;
    console.log("Cant=",cant);
    console.log("Genre=",genre);
    console.log("Developer=",developer);
    console.log("Genre=",genre);
    console.log("Plataform=",plataform);
    let games = [];

    
    
    if(cant){
        games.length=parseInt(cant);
        games = getGames(games.length?games:undefined);
    }else{
        games = getGames(data);
    } 
    
    if(genre){
        games = getGamesByGenres(genre , games.length?games:undefined);
        console.log(games);
    }

    if(developer){
        games = getGamesByDev(developer , games.length?games:undefined);
    }

    if(plataform){
        games = getGamesByPlataform(plataform , games.length?games:undefined);
    }

    if(minDate || maxDate){
        games = getGamesByDate(minDate , maxDate , games.length?games:undefined);
    }

    if(order){
        if(order == "title"){
            games = orderByTitle(games.length?games:undefined);
        }

        if(order == "date"){
            games = orderByDate(games.length?games:undefined);
        }
    }

    res.status(200).json({
        count: games.length,
        games
    })
})



app.listen(3001, () => {
    console.log("Todo esta funcinando");
}) 