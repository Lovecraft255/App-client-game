const juego =({game}) =>{
        
    return<tr>
    <td>{game.title}</td>
    <td>{game.developer}</td>
    <td>{game.publisher}</td>
    <td>{game.genres}</td>
    <td>{game.release.day}/{game.release.month}/{game.release.year}</td>
    <td>{game.images.map(g => <img key={g} src={g} ></img> )}</td>

    </tr>

}

export default juego;