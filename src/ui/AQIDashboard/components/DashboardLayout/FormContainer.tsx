import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import translations from "@/assets/i18n/en.json";
import formatCityName from "@/ui/AQIDashboard/utils/formatCityName";
import AqiContext from "@/ui/AQIDashboard/context/AqiContext";

const { dashboard } = translations.body;

const StyledFormContainerWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 1200px) {
    padding-top: 10px;
    padding-bottom: 15px;
    padding-left: 2vw;
    padding-right: 2vw;
    flex-direction: row;
    gap: 20px;
  }
`;

const StyledTextField = styled(TextField)`
  && {
    width: 100%;
    @media (min-width: 1200px) {
      width: 75%;
    }
  }
`;

const StyledButton = styled(Button)`
  && {
    width: 100%;
    height: 54px; /* Adjust the height as needed */
    min-width: 200px; /* Adjust the width as needed */
    font-weight: bold;
    @media (min-width: 1200px) {
      width: 25%;
    }
  }
`;

const FormContainer = () => {
  const { setNewSearch } = useContext(AqiContext);
  const [selectedCity, setSelectedCity] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedCity = formatCityName(selectedCity);
    setNewSearch(formattedCity);
  };

  return (
    <StyledFormContainerWrapper onSubmit={handleSearch}>
      <StyledTextField
        label={dashboard.search.placeholder}
        variant="outlined"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      />
      <StyledButton type="submit" variant="contained" color="primary">
        {dashboard.search.button}
      </StyledButton>
    </StyledFormContainerWrapper>
  );
};

export default FormContainer;
