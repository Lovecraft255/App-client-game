import React, { useState, useEffect } from "react";
import Juego from "./Juego";
const ListGames = ({ juegos }) => {
  return juegos ? (
    <table
      style={{
        color: "#333333",
        backgroundColor: "#F5F5F5",
        borderCollapse: "collapse",
        width: "80%",
        marginTop: "5%",
        border: "1px solid #333", // Agregar bordes arriba y a los costados
      }}
    >
      <tbody>
        <tr
          style={{
            borderBottom: "1px solid #333", // Cambia el color del borde a #333
            backgroundColor: "#F5F5F5",
            textAlign: "center",
          }}
        >
          <td
            style={{
              borderRight: "1px solid #333", // Cambia el color del borde a #333
              padding: "10px",
            }}
          >
            title
          </td>
          <td
            style={{
              borderRight: "1px solid #333", // Cambia el color del borde a #333
              padding: "10px",
            }}
          >
            developer
          </td>
          <td
            style={{
              borderRight: "1px solid #333", // Cambia el color del borde a #333
              padding: "10px",
            }}
          >
            publisher
          </td>
          <td
            style={{
              borderRight: "1px solid #333", // Cambia el color del borde a #333
              padding: "10px",
            }}
          >
            genres
          </td>
          <td
            style={{
              borderRight: "1px solid #333", // Cambia el color del borde a #333
              padding: "10px",
            }}
          >
            release
          </td>
          <td
            style={{
              borderRight: "1px solid #333", // Cambia el color del borde a #333
              padding: "10px",
            }}
          >
            platforms
          </td>
          <td
            style={{
              borderRight: "1px solid #333", // Cambia el color del borde a #333
              padding: "10px",
            }}
          >
            engine
          </td>
          <td
            style={{
              borderRight: "1px solid #333", // Cambia el color del borde a #333
              padding: "10px",
            }}
          >
            modes
          </td>
          <td
            style={{
              borderRight: "1px solid #333", // Cambia el color del borde a #333
              padding: "10px",
            }}
          >
            images
          </td>
          <td
            style={{
              borderRight: "1px solid #333", // Cambia el color del borde a #333
              padding: "10px",
            }}
          >
            premise
          </td>
        </tr>
        {juegos.map((game, index) => {
          return <Juego key={game.title} game={game}></Juego>;
        })}
      </tbody>
    </table>
  ) : (
    <div>{"Datos no solicitados"}</div>
  );
};

export default ListGames;
