import React from 'react';

const Juego = ({ game }) => {

    console.log(game);

    function DefinirModosDeJuegos() {
        if (game.modes.single_player === true && game.modes.multiplayer === true) {
            return "Single player and multiplayer";
        } else if (game.modes.single_player === true && game.modes.multiplayer === false) {
            return "Only single player";
        } else if (game.modes.single_player === false && game.modes.multiplayer === true) {
            return "Only multiplayer";
        }
    }

    return (
        <tr style={{ border: '4px solid black', width: '80%' }}>
            <td style={{ width: '80%', fontSize: '100%', borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>{game.title}</td>
            <td style={{ width: '80%', fontSize: '100%', borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>{game.developer}</td>
            <td style={{ width: '80%', fontSize: '100%', borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>{game.publisher}</td>
            <td style={{ width: '80%', fontSize: '100%', borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>{game.genres}</td>
            <td style={{ width: '80%', fontSize: '100%', borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>{game.release.day}/{game.release.month}/{game.release.year}</td>
            <td style={{ width: '80%', fontSize: '100%', borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>{game.platforms.map(plat => plat.name + ",")}</td>
            <td style={{ width: '80%', fontSize: '100%', borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>{game.engine}</td>
            <td style={{ width: '80%', fontSize: '100%', borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>{DefinirModosDeJuegos()}</td>
            <td style={{ overflowY: 'auto', width: '80%', borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>{game.images.map(g => <img style={{ width: '100px', height: '100px'}} key={g} src={g} alt="Game Image" ></img>)}</td>
            <td style={{ overflowY: 'scroll', height: '420px', float: 'right', width: '80%', fontSize: '100%', borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>{game.premise}</td>
        </tr>
    );
};

export default Juego;
