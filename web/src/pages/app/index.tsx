import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { GetServerSideProps, NextPage } from "next";
import { useMeQuery } from "../../graphql/generated/graphql";
import { ssrGetProducts } from "../../graphql/generated/page";
import { withApollo } from "../../lib/withApollo";

const Home: NextPage = ({ data }) => {
  const { user } = useUser();
  const { data: me, loading, error } = useMeQuery();

  return (
    <div className="text-violet-500">
      <h1>Hellow World </h1>
      <pre>{JSON.stringify(me, null, 2)}</pre>

      {/* <pre>{JSON.stringify(data.products, null, 2)}</pre> */}

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <a href="/api/auth/logout">Logout</a>
    </div>
  );
};

export default withApollo(ssrGetProducts.withPage()(Home));

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    // return getServerPageGetProducts({}, ctx);

    return {
      props: {},
    };
  },
});
