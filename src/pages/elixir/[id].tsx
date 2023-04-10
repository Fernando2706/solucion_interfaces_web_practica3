import { GetServerSidePropsContext, NextPage } from "next";
import axios from "axios";
import styled from "styled-components";
import Link from "next/link";
import { ElixirResponse } from "@/models/elixir";
import ElixirWidget from "@/components/ElixirWidget";

const ElixirDetail: NextPage<{ elixir: ElixirResponse }> = ({ elixir }) => {

  return (
    <MainContent>
              <Link href={"/wizard"} >Go to wizards</Link>
        <ElixirWidget elixir={elixir} />
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


export default ElixirDetail;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const response = await axios.get(
      `https://wizard-world-api.herokuapp.com/Elixirs/${context.params?.id ?? ""}`
    );
    const data: ElixirResponse = response.data;
    return {
      props: {
        elixir: data,
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
