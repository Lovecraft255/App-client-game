const juego = ({ game }) => {

    console.log(game);
    function DefinirModosDeJuegos() {
        if (game.modes.single_player == true && game.modes.multiplayer == true) {
            return "Single player and multplayer"
        } else if (game.modes.single_player == true && game.modes.multiplayer == false) {
            return "Only single player"
        } else if (game.modes.single_player == false && game.modes.multiplayer == true) {
            return "Only multiplayer"
        }
    }

    return <tr style={{ border: '4px solid black', width:'100%', margin:'0 auto' }}>
        <td style={{ width: '180px', fontSize: '15px', borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>{game.title}</td>
        <td style={{ width: '180px', fontSize: '15px', borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>{game.developer}</td>
        <td style={{ width: '180px', fontSize: '15px', borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>{game.publisher}</td>
        <td style={{ width: '180px', fontSize: '15px', borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>{game.genres}</td>
        <td style={{ width: '180px', fontSize: '15px', borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>{game.release.day}/{game.release.month}/{game.release.year}</td>
        <td style={{ width: '180px', fontSize: '15px', borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>{game.platforms.map(plat => { return plat.name + "," })}</td>
        <td style={{ width: '180px', fontSize: '15px', borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>{game.engine}</td>
        <td style={{ width: '180px', fontSize: '15px', borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>{DefinirModosDeJuegos()}</td>
        <td style={{ overflow: 'auto', width: '180px', borderRight: "4px solid black", borderBottom: "4px solid black", textAlign: 'center' }}>{game.images.map(g => <img style={{ width: '80px', height: '80px'}} key={g} src={g} ></img>)}</td>
        <td style={{ overflowY: 'scroll', height: '350px', float: 'right', width: '180px', fontSize: '15px', borderRight: "4px solid black", borderBottom: "1px solid black", textAlign: 'center' }}>{game.premise}</td>

    </tr>

}

export default juego;