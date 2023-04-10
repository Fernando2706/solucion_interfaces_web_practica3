    import { GetServerSidePropsContext, NextPage } from "next";
import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { WizardsResponse } from "@/models/wizards";
import WizardWidget from "@/components/WizardWidget";
import Link from "next/link";

const Wizards: NextPage<{ wizards: WizardsResponse[] }> = ({ wizards }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentWizard, setCurrentWizard] = useState<WizardsResponse | undefined>(
    wizards[0]
  );

  useEffect(() => {
    setCurrentWizard(wizards.at(currentIndex));
  }, [currentIndex]);

  return (
    <MainContent>
      <h1>Wizards</h1>
      <Link href={"/"} >Go to  Houses</Link>

      {(!wizards || wizards.length === 0) && <p>No wizards</p>}
      {wizards && wizards.length > 0 && (
        <Container>
          <Button
            onClick={() => {
              if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1);
              }
            }}
          >
            {"<"}
          </Button>
          {currentWizard && (
            <WizardWidget wizard={currentWizard} showElixirs={false}/>
          )}
          <Button
            onClick={() => {
              if (currentIndex < wizards.length - 1) {
                setCurrentIndex(currentIndex + 1);
              }
            }}
          >
            {">"}
          </Button>
        </Container>
      )}
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

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

`

const Button = styled.div`
  cursor: pointer;
`;

export default Wizards;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const response = await axios.get(
      "https://wizard-world-api.herokuapp.com/Wizards"
    );
    const data: WizardsResponse[] = response.data;
    return {
      props: {
        wizards: data,
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
