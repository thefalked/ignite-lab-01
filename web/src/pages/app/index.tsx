import { getSession, useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { GetServerSideProps, NextPage } from "next";

const Home: NextPage = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Hellow World </h1>

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <a href="/api/auth/logout">Logout</a>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({ req, res }) => {
    console.log(getSession(req, res));

    return {
      props: {},
    };
  },
});
