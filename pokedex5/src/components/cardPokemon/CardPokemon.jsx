import React from "react"
import {CardPokemonStyled, Button } from "./styled"


function CardPokemon() {
    return (
     <CardPokemonStyled>
         <img>Imagem</img>
         <Button>Adicionar um Pokédex</Button>
         <Button>Ver detalhes</Button>
     </CardPokemonStyled>
    );
  }
  
  export default CardPokemon;