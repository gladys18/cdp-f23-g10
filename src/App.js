import Layout from "./components/Layout/Layout";
import ReactGA from "react-ga"
const TRACKING_ID = "G-BN2QE9SJZB";
ReactGA.initialize(TRACKING_ID);
function App() {
  return <Layout />;
}

export default App;
