import { AqiProvider } from "../context/AqiContext";
import DashboardLayout from "./DashboardLayout";
import SuccessContent from "./SuccessContent";
import Error from "./Error";
import Loader from "./Loader";

const AQIDashboard = () => (
  <AqiProvider>
    <DashboardLayout>
      <SuccessContent />
      <Loader />
      <Error />
    </DashboardLayout>
  </AqiProvider>
);

export default AQIDashboard;
