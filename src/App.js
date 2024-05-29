import Layout from "./components/Layout/Layout";
import ReactGA from "react-ga"
const TRACKING_ID = "G-H4SSZL32ZV";
ReactGA.initialize(TRACKING_ID);
function App() {
  return <Layout />;
}

export default App;
