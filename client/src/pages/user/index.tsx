import React, { ReactElement } from "react";

import { NextPageWithLayout } from "../_app";
import Layout from "./layout";
import { UserSettings } from "@/components/User/UserSettings";
import { useRouter } from "next/router";

const UserPage: NextPageWithLayout = () => {
  const router = useRouter();
  router.push("/user/configurar");
  return <UserSettings />;
};

UserPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default UserPage;
