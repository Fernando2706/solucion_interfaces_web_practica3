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

const ErrorPage: NextPage = () => {

  return (
    <MainContent>
      <h1>No se ha encontrado el recurso</h1>
      <Link href={"/"} >Go to Houses</Link>
      
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



export default ErrorPage;

