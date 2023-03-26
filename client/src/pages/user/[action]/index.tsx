import { UserFavorites } from "@/components/User/UserFavorites";
import { UserPublication } from "@/components/User/UserPublication";
import { UserSettings } from "@/components/User/UserSettings";
import { NextPageWithLayout } from "@/pages/_app";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import Layout from "../../../components/layouts/layout";

const Index: NextPageWithLayout = () => {
  const router = useRouter();
  const [content, setContent] = useState(<UserSettings />);
  const { action } = router.query;

  useEffect(() => {
    switch (action) {
      case "configurar":
        setContent(<UserSettings />);
        break;

      case "favoritos":
        setContent(<UserFavorites />);
        break;

      case "publicar":
        setContent(<UserPublication />);
        break;

      default:
        setContent(<UserSettings />);
        break;
    }
  }, [action]);

  return content;
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Index;
