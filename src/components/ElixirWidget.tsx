import { ElixirResponse } from "@/models/elixir";
import { HousesResponse } from "@/models/houses";
import React from "react";
import styled from "styled-components";


interface Props {
    elixir: ElixirResponse
}

const ElixirWidget: React.FC<Props> = ({elixir}) => {


    return (
        <Container>
            <h2>{elixir.name}</h2>
            <p>Manufacturer: <i>{elixir.manufacturer}</i></p>
            <p>Difficulty: <i>{elixir.difficulty}</i></p>
            <p>Effect: <i>{elixir.effect}</i></p>
            <p>Characteristics: <i>{elixir.characteristics}</i></p>
            <p>Time: <i>{elixir.time}</i></p>
            <p>SideEffects: <i>{elixir.sideEffects}</i></p>

            <p>Inventors:</p>
            <ul>
            {elixir.inventors.map(inventor => {
                return <li key={inventor.id}>{inventor.firstName} {inventor.lastName}</li>
            })}
            </ul>
            <p>Ingredients:</p>
            <ul>
            {elixir.ingredients.map(ingredients => {
                return <li key={ingredients.id}>{ingredients.name}</li>
            })}
            </ul>
        </Container>
    )
}

const Container = styled.div `
    width: 500px;
    height: fit-content;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
    border-radius: 10px;
    > h2 {
        text-align: center;
        width: 100%;
    }
`


export default ElixirWidget