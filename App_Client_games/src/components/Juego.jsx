import React from "react";

const Juego = ({ game }) => {
  console.log(game);

  function DefinirModosDeJuegos() {
    if (game.modes.single_player === true && game.modes.multiplayer === true) {
      return "Single player and multiplayer";
    } else if (
      game.modes.single_player === true &&
      game.modes.multiplayer === false
    ) {
      return "Only single player";
    } else if (
      game.modes.single_player === false &&
      game.modes.multiplayer === true
    ) {
      return "Only multiplayer";
    }
  }

  return (
    <tr
      style={{
        border: "1px solid #333",
        maxWidth: "80%",
        margin: "0 auto",
        backgroundColor: "#f2f2f2",
      }}
    >
      <td
        style={{
          width: "80%",
          fontSize: "1rem",
          textAlign: "center",
          color: "#333",
          border: "1px solid #333", // Agrega un borde de 1px sólido de color negro
          padding: "8px", // Añade un espacio interno de 8px para separar el contenido del borde
        }}
      >
        {game.title}
      </td>
      <td
        style={{
          width: "80%",
          fontSize: "1rem",
          textAlign: "center",
          color: "#333",
          border: "1px solid #333", // Agrega un borde de 1px sólido de color negro
          padding: "8px", // Añade un espacio interno de 8px para separar el contenido del borde
        }}
      >
        {game.developer}
      </td>
      <td
        style={{
          width: "80%",
          fontSize: "1rem",
          textAlign: "center",
          color: "#333",
          border: "1px solid #333", // Agrega un borde de 1px sólido de color negro
          padding: "8px", // Añade un espacio interno de 8px para separar el contenido del borde
        }}
      >
        {game.publisher}
      </td>
      <td
        style={{
          width: "80%",
          fontSize: "1rem",
          textAlign: "center",
          color: "#333",
          border: "1px solid #333", // Agrega un borde de 1px sólido de color negro
          padding: "8px", // Añade un espacio interno de 8px para separar el contenido del borde
        }}
      >
        {game.genres}
      </td>
      <td
        style={{
          width: "80%",
          fontSize: "1rem",
          textAlign: "center",
          color: "#333",
          border: "1px solid #333", // Agrega un borde de 1px sólido de color negro
          padding: "8px", // Añade un espacio interno de 8px para separar el contenido del borde
        }}
      >
        {game.release.day}/{game.release.month}/{game.release.year}
      </td>
      <td
        style={{
          width: "80%",
          fontSize: "1rem",
          textAlign: "center",
          color: "#333",
          border: "1px solid #333", // Agrega un borde de 1px sólido de color negro
          padding: "8px", // Añade un espacio interno de 8px para separar el contenido del borde
        }}
      >
        {game.platforms.map((plat) => plat.name + ",")}
      </td>
      <td
        style={{
          width: "80%",
          fontSize: "1rem",
          textAlign: "center",
          color: "#333",
          border: "1px solid #333", // Agrega un borde de 1px sólido de color negro
          padding: "8px", // Añade un espacio interno de 8px para separar el contenido del borde
        }}
      >
        {game.engine}
      </td>
      <td
        style={{
          width: "80%",
          fontSize: "1rem",
          textAlign: "center",
          color: "#333",
          border: "1px solid #333", // Agrega un borde de 1px sólido de color negro
          padding: "8px", // Añade un espacio interno de 8px para separar el contenido del borde
        }}
      >
        {DefinirModosDeJuegos()}
      </td>
      <td
        style={{
          overflowY: "auto",
          width: "80%",
          textAlign: "center",
          color: "#333",
        }}
      >
        {game.images.map((IUrl) => (
          <img
            style={{ width: "100px", height: "100px" }}
            key={IUrl}
            src={"http://localhost:5173/" + IUrl}
            alt="Game Image"
          ></img>
        ))}
      </td>
      <td
        style={{
          overflowY: "scroll",
          height: "420px",
          float: "right",
          width: "80%",
          fontSize: "1rem",
          textAlign: "center",
          color: "#333",
          border: "1px solid #333", // Agrega un borde de 1px sólido de color negro
          padding: "8px", // Añade un espacio interno de 8px para separar el contenido del borde
        }}
      >
        {game.premise}
      </td>
    </tr>
  );
};

export default Juego;
