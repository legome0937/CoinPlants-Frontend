import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Staking from "./pages/Staking";
import NotFound from "./pages/NotFound";

// Redux
import { Provider } from "react-redux";
import store from "./store/index";

import {
  Mainnet,
  Rinkeby,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
} from "@usedapp/core";
import { getDefaultProvider } from "ethers";

const config = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Rinkeby.chainId]: `https://eth-rinkeby.alchemyapi.io/v2/7c0zicFgvd__JdHxrJ3FUnEw6bbC8LJo`,
  },
};

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <DAppProvider config={config}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/staking" element={<Staking />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </DAppProvider>
      </Provider>
    </div>
  );
}

export default App;
