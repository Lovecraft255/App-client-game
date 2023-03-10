import React, { useState} from 'react';



const Form = ({setGames}) =>{

    const [caract , setCaract] = useState({
        cant: "",
        dev: "",
        gen: "",
        plat: "",
        minDate: "1970-12-31",
        maxDate: "2023-12-31",
        order: ""

    });

    
const pedirDatos= async(e) => {
    e.preventDefault();
    let url ='http://localhost:3001/games';

    if(caract.cant || caract.dev || caract.gen || caract.minDate || caract.maxDate || caract.order){
        url += "?";
        if(caract.cant) url += 'cant=' + caract.cant + '&';
        if(caract.dev) url += 'developer=' + caract.dev + '&';
        if(caract.gen) url += 'genre=' + caract.gen + '&';
        if(caract.plat) url += 'plataform=' + caract.plat + '&';
        if(caract.minDate) url += 'minDate=' + caract.minDate + '&';
        if(caract.maxDate) url += 'maxDate=' + caract.maxDate + '&';
        if(caract.order) url += 'order=' + caract.order + '&';
    }

    const req = fetch(url);
    req.then((res) => res.json())
    .then(game => {
        console.log(game);
        setGames(game.games)   
    })

}  

    return(
        <><div></div>
        <form onSubmit={pedirDatos} >
            <label>Cantidad de juegos que desea</label>
            <input id="cant" value={caract.cant} type="number" min="1" max="7"
                onChange={e => {
                    setCaract(prev => {
                        return {
                            ...prev,
                            [e.target.id]: e.target.value
                        };
                    });
                } } />

            <br />

            <label>Empresas de videojuegos que desea</label>
            <input id="dev" value={caract.dev} type="text" placeholder="none"
                onChange={e => {
                    setCaract(prev => {
                        return {
                            ...prev,
                            [e.target.id]: e.target.value
                        };
                    });
                } } />

            <br />

            <label>Genero de videojuegos que desea</label>
            <input id="gen" value={caract.gen} type="text" placeholder="none"
                onChange={e => {
                    setCaract(prev => {
                        return {
                            ...prev,
                            [e.target.id]: e.target.value
                        };
                    });
                } } />

            <br />
            <label>Fecha minima para los juegos lanzados</label>
            <input id="minDate" value={caract.minDate} type="date" 
                onChange={e => {
                    setCaract(prev => {
                        return {
                            ...prev,
                            [e.target.id]: e.target.value
                        };
                    });
                    console.log(e.target.value);
                } } />

            <br />
            <label>Fecha maxima para los juegos lanzados</label>
            <input id="maxDate" value={caract.maxDate} type="date"
                onChange={e => {
                    setCaract(prev => {
                        return {
                            ...prev,
                            [e.target.id]: e.target.value
                        };
                    });
                } } />

            <br />
            <label>Que tipo de ordenamiento quiere</label>
            <select name="Orden" id="order" value={caract.order}
                onChange={e => {
                    setCaract(prev => {
                        return {
                            ...prev,
                            [e.target.id]: e.target.value
                        };
                    });
                } }
            >
                <option value="default">ninguno</option>
                <option value="title">title</option>
                <option value="date">date</option>
            </select>
            <br />
            <input type="submit" value="Filtrar datos" />
            <br />
            <br />
        </form></>

            

    )
}

export default Form ;
