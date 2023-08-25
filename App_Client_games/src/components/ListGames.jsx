import React, { useState, useEffect } from 'react';
import Juego from './Juego';
const ListGames = ({ juegos }) => {
    //const juego = juegos.map(game =>  console.log(game))
    return (

        juegos ? (<table style={{color:'#000000', backgroundColor:'#00FFFF', position: 'absolute', left:'5%',top:'70%',  borderTop: '4px solid black', borderLeft: '4px black solid', width:'90%', marginLeft:'auto', marginRight:'auto'}}>
            <tbody  >
                <tr >
                    <td style={{borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>title</td>
                    <td style={{borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>developer</td>
                    <td style={{borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>publisher</td>
                    <td style={{borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>genres</td>
                    <td style={{borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>release</td>
                    <td style={{borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>platforms</td>
                    <td style={{borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>engine</td>
                    <td style={{borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>modes</td>
                    <td style={{borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>images</td>
                    <td style={{borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>premise</td>
                </tr>

                {juegos.map((game, index) => {
                    console.log(game);
                    return <Juego key={game.title} game={game}></Juego>
                })}
            </tbody>
        </table>) : (<div >{"Datos no solicitados"}</div>)

    )
}

export default ListGames;