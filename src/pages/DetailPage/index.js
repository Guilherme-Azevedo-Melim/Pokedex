import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { goToHome, goToPokedex } from '../../routes/coordinator'
import { baseUrl } from '../../constants/constant'
import axios from 'axios'
import { CardStatus } from '../../components/CardStatus'
import { CardType } from '../../components/CardType'
import { CardMoves } from '../../components/CardMoves'
import { CardSprites } from '../../components/CardSprites'
import { Main, PokemonCard, Description, Title } from './styled'


function DetailPage() {

    const navigate = useNavigate()

    const [pokemon, setPokemon] = useState({ sprites: {}, stats: [], types: [], moves: [] })

    const { id } = useParams()

    useEffect(() => {
        getPokemonDetails()
    }, [])

    const getPokemonDetails = () => {

        axios.get(`${baseUrl}pokemon/${id}`)
            .then((response) => {
                setPokemon(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const getPokemonStatus = pokemon.stats.map((status) => {
        return (
            <div>
                {status.stat.name.toUpperCase()}: {status.base_stat}
            </div>
        )
    })

    const getPokemonTypes = pokemon.types.map((pokeType) => {
        return (
            <div>
                {pokeType.type.name.toUpperCase()}
            </div>
        )
    })

    const getPokemonMoves = pokemon.moves.map((pokeMove) => {
        return (
            <div>
                {pokeMove.move.name.toUpperCase()}
            </div>
        )
    })

    return (
        <div>
            <Title>Detalhes do Pokemon <button className="go" onClick={() => navigate(-1)}>Voltar</button></Title>
            <Main>
                <div>
                    <CardSprites>
                        <img src={pokemon.sprites.front_default} />
                        <img src={pokemon.sprites.back_default} />
                    </CardSprites>
                </div>
                <PokemonCard>
                    <div>
                        <CardStatus>
                            <Description>STATUS</Description>
                            {getPokemonStatus}
                        </CardStatus>

                        <CardType>
                            <Description>TYPE</Description>
                            {getPokemonTypes}
                        </CardType>
                    </div>

                    <div>
                        <CardMoves>
                            <Description>MOVES</Description>
                            {getPokemonMoves}
                        </CardMoves>
                    </div>
                </PokemonCard>
            </Main>

        </div>
    )
}

export default DetailPage;