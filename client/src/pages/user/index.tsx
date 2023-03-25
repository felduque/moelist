import React, { ReactElement } from "react";

import { useAppContext } from "@/utils/state";
import { NextPageWithLayout } from "../_app";
import Layout from "./layout";

const UserPage: NextPageWithLayout = () => {
  const { user } = useAppContext();

  return <div>UserPage</div>;
};

UserPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <p>hola</p>
    </Layout>
  );
};

export default UserPage;
