import { useState } from "react";
import { useQuery } from "react-query";
import getAirQualityStats from "@/api/get-air-quality";
import AqiContext from "../context/AqiContext";
import DashboardLayout from "./DashboardLayout";
import SuccessContent from "./SuccessContent";
import Error from "./Error";
import Loader from "./Loader";

const AQIDashboard = () => {
  const [newSearch, setNewSearch] = useState("here");

  const {
    data: response,
    isLoading,
    isError,
  } = useQuery(["airQualityStats", newSearch], () =>
    getAirQualityStats(newSearch)
  );

  return (
    <AqiContext.Provider
      value={{
        response,
        isLoading,
        isError,
        setNewSearch,
      }}
    >
      <DashboardLayout>
        <SuccessContent />
        <Loader />
        <Error />
      </DashboardLayout>
    </AqiContext.Provider>
  );
};

export default AQIDashboard;
