import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalStateContext from '../../context/GlobalContext';
import { goToDetailPage, goToPokedex } from '../../routes/coordinator';
import {  Title, Pokemon, All, Load, PokemonImagem } from './styled';


function Home() {
    const navigate = useNavigate()

    //informações vindo do globalStates
    const {
        allPokemons,
        getAllPokemons,
        addToPokedex,
        pokedex,
    } = useContext(GlobalStateContext);

    //renderizando os pokemons
    const Rend = ({ id, image, name, type }) => {

        const style = type + " thumb-container";

        //mapeando a pokedex para extrair o id
        const mapPokedex = pokedex.map((item) => {
           return (item.id)
        })
               //pegando id com o botao adicionar
               let botao
               if (mapPokedex.find(element => element == id)) {
                   botao = <button disabled={true} >adicionar</button>
                } else {
                   botao = <button onClick={() => addToPokedex({ id, image, name, type })} >adicionar</button>
               }

        //Renderizando a lista em card
        return (
            <div className={style}>
                <div className="number"><small>Carde Nº{id}</small></div>
                <PokemonImagem><img src={image} alt={name} /></PokemonImagem>
                <div className="detail-wrapper">
                    <h3>{name}</h3>
                    <small>Type: {type}</small>
                    {botao}
                    <button onClick={() => pokemonDetail(id)} >detalhes</button>
                </div>
            </div>

        );
    }

    const pokemonDetail = (id) => {
        goToDetailPage(navigate, id)
    }


    return (
            <div>
                <Title>Lista de Pokémons <button className="go" onClick={() => goToPokedex(navigate)}>Pokedex</button></Title>
                <Pokemon>
                    <All>
                        {allPokemons.map((pokemonStats, index) =>
                            <Rend
                                key={index}
                                id={pokemonStats.id}
                                image={pokemonStats.sprites.other.dream_world.front_default}
                                name={pokemonStats.name}
                                type={pokemonStats.types[0].type.name}
                            />)}
                    </All>
                    <Load onClick={() => getAllPokemons()}>Carregando..</Load>
                </Pokemon>
            </div>
    );
}

export default Home;