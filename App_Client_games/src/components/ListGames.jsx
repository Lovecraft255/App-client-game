import React, { useState , useEffect } from 'react';
import Juego from './Juego';
const ListGames = ({juegos}) =>{
    //const juego = juegos.map(game =>  console.log(game))
    return(

        juegos ? (   <table>
            <tbody>
            <tr>
    
                    <td>title</td>
        
                    <td>developer</td>
        
                    <td>publisher</td>
        
                    <td>genres</td>
        
                    <td>release</td>
        
                    <td>platforms</td>
        
                    <td>engine</td>
        
                    <td>modes</td>
        
                    <td>images</td>
        
                    <td>premise</td>
                </tr>

                {juegos.map((game, index) => {
                    console.log(game); 
                    return <Juego key={game.title} game={game}></Juego>
                })}
            </tbody>
          </table>):( <div>{"Datos no solicitados"}</div>)

    )
}

export default ListGames;