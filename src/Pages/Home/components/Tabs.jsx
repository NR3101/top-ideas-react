import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("#hot");
  const params = useLocation();

  useEffect(() => {
    setActiveTab(params.hash);
  }, [params]);

  return (
    <div role="tablist" className="tabs tabs-bordered border-primary">
      <a
        href="/#hot"
        role="tab"
        className={`tab text-lg font-bold
      ${activeTab === "#hot" && "tab-active"}
      `}
      >
        🔥 Hot
      </a>
      <a
        href="/#new"
        role="tab"
        className={`tab text-lg font-bold
      ${activeTab === "#new" && "tab-active"}
      `}
      >
        ✨ New
      </a>
      <a
        href="/#top"
        role="tab"
        className={`tab text-lg font-bold
      ${activeTab === "#top" && "tab-active"}
      `}
      >
        🏆 Top
      </a>
    </div>
  );
};

export default Tabs;
