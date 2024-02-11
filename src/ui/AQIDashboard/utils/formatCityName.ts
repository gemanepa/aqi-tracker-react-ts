// Formats city name previous to the API call
const formatCityName = (cityName: string) =>
  cityName
    .replace(/\s/g, "-")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export default formatCityName;
