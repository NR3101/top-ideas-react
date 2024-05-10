import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import { Ideas } from "../../../utils/schema";
import { db } from "../../../utils";
import { useCallback, useEffect, useState } from "react";
import { desc } from "drizzle-orm";
import Idealist from "./components/Idealist";

const HomePage = () => {
  const params = useLocation();
  const [ideas, setIdeas] = useState([]);

  const getAllIdeas = useCallback(async () => {
    const result = await db
      .select(Ideas)
      .from(Ideas)
      .limit(20)
      .orderBy(
        desc(
          params.hash === "#hot" || params.hash === "#top"
            ? Ideas.votes
            : Ideas.id
        )
      );
    setIdeas(result);
  }, [params]);

  useEffect(() => {
    getAllIdeas();
  }, [getAllIdeas]);

  return (
    <div className="h-full">
      <Header />
      <Hero />
      <Tabs />

      <Idealist ideas={ideas} refreshData={getAllIdeas} />
    </div>
  );
};

export default HomePage;
