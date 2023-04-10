import { GetServerSidePropsContext, NextPage } from "next";
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { WizardsResponse } from "@/models/wizards";
import WizardWidget from "@/components/WizardWidget";
import Link from "next/link";

const WizardDetail: NextPage<{ wizard: WizardsResponse }> = ({ wizard }) => {

  return (
    <MainContent>
              <Link href={"/wizard"} >Go to wizards</Link>
        <WizardWidget wizard={wizard} showElixirs={true}/>
    </MainContent>
  );
};

const MainContent = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: azure;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > * {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
`;
export default WizardDetail;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const response = await axios.get(
      `https://wizard-world-api.herokuapp.com/Wizards/${context.params?.id ?? ""}`
    );
    const data: WizardsResponse = response.data;
    return {
      props: {
        wizard: data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }
}
