import React, { useContext } from  'react';
import GlobalStateContext from '../../context/GlobalContext';
import { useNavigate } from 'react-router-dom'
import {goToHome, goToDetailPage} from '../../routes/coordinator'
import { PokemonImagem, Title, Pokemon, All } from './styled';

function Pokedex() {

    const navigate = useNavigate()

    const  {
        pokedex,
        removePokemon,
    } = useContext(GlobalStateContext);
    

    const pokemonDetail = (id) => {
        goToDetailPage(navigate, id)
    }

    const Rend = (pokemon={}) => {

        const style = pokemon.type + " thumb-container";

        //Renderizando a lista em card
        return (
            <div className={style}>
                <div className="number"><small>Carde Nº{pokemon.id}</small></div>

                <PokemonImagem><img src={pokemon.image} alt={pokemon.name} /></PokemonImagem>

                <div className="detail-wrapper">
                    <h3>{pokemon.name}</h3>
                    <small>Type: {pokemon.type}</small>

                    <button onClick={() => removePokemon(pokemon)} >Remover</button>
                    <button onClick={() => pokemonDetail(pokemon.id)} >detalhes</button>
                </div>

            </div>
        );
    }

    const showPokedex = pokedex.map((pokemon) => {
        return (
            <Rend 
            {...pokemon}
            />
        )
    })

    return (
        <div className="app-container">
            <Title>Pokedex <button className="go"  onClick={() => goToHome(navigate)}>Home</button></Title>
                <Pokemon>
                    <All>
                        {showPokedex}
                    </All>
                </Pokemon>
        </div>
    )
}

export default Pokedex;