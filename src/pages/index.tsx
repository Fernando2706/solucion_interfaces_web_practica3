import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetServerSidePropsContext, NextPage } from "next";
import axios from "axios";
import { HousesResponse } from "@/models/houses";
import styled from "styled-components";
import HouseWidget from "@/components/HouseWidget";
import { useEffect, useState } from "react";
import Link from "next/link";

const Home: NextPage<{ houses: HousesResponse[] }> = ({ houses }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentHouse, setCurrentHouse] = useState<HousesResponse | undefined>(
    houses[0]
  );

  useEffect(() => {
    setCurrentHouse(houses.at(currentIndex));
  }, [currentIndex]);

  return (
    <MainContent>
      <h1>Houses</h1>
      <Link href={"/wizard"} >Go to wizards</Link>
      {(!houses || houses.length === 0) && <p>No Houses</p>}
      {houses && houses.length > 0 && (
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
          {houses && houses.length > 0 && currentHouse && (
            <HouseWidget house={currentHouse} />
          )}
          <Button
            onClick={() => {
              if (currentIndex < houses.length - 1) {
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

export default Home;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const response = await axios.get(
      "https://wizard-world-api.herokuapp.com/Houses"
    );
    const data: HousesResponse[] = response.data;
    return {
      props: {
        houses: data,
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
