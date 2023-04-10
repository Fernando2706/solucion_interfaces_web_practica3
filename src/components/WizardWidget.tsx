import { HousesResponse } from "@/models/houses";
import { WizardsResponse } from "@/models/wizards";
import Link from "next/link";
import React from "react";
import styled from "styled-components";


interface Props {
    wizard: WizardsResponse
    showElixirs: boolean
}

const WizardWidget: React.FC<Props> = ({wizard, showElixirs = false}) => {


    return (
        <Container>
            <h2>{wizard.firstName} {wizard.lastName}</h2>
            {!showElixirs && (<Link href={`/wizard/${wizard.id}`}>Ir al detalle del mago</Link>)}
            <ul>
                {showElixirs && wizard.elixirs.map(elixir => {
                    return <li key={elixir.id} ><Link href={`/elixir/${elixir.id}`}>{elixir.name}</Link></li>
                })}
            </ul>
        </Container>
    )
}

const Container = styled.div `
    width: 200px;
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


export default WizardWidget