import { HousesResponse } from "@/models/houses";
import React from "react";
import styled from "styled-components";


interface Props {
    house: HousesResponse
}

const HouseWidget: React.FC<Props> = ({house}) => {


    return (
        <Container>
            <h2>{house.name}</h2>
            <p>Founder: <i>{house.founder}</i></p>
            <p>Room: <i>{house.commonRoom}</i></p>
            <p>Traits:</p>
            <ul>
            {house.traits.map(trait => {
                return <li key={trait.id}>{trait.name}</li>
            })}
            </ul>
            <p>Heads:</p>
            <ul>
            {house.heads.map(head => {
                return <li key={head.id}>{head.firstName} {head.lastName}</li>
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


export default HouseWidget