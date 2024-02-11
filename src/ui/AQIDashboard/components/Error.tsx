import { useContext } from "react";
import { StyledLocationParagraph } from "@/ui/AQIDashboard/components/SuccessContent";
import AqiContext from "../context/AqiContext";
import translations from "@/assets/i18n/en.json";

const { error } = translations.body.dashboard;

const Error = () => {
  const { response, isError, isLoading } = useContext(AqiContext);
  const city = response?.data?.city?.name;
  const forecast = response?.data?.forecast;
  if (isLoading) return null;

  if (isError || response?.status === "error") {
    return (
      <StyledLocationParagraph>
        {JSON.stringify(response?.data)?.replace(/"/g, "")}
      </StyledLocationParagraph>
    );
  }

  if (response && !city)
    return (
      <StyledLocationParagraph>{error.noLocation}</StyledLocationParagraph>
    );

  if (response && !forecast)
    return (
      <StyledLocationParagraph>{error.noForecast}</StyledLocationParagraph>
    );

  return null;
};

export default Error;
