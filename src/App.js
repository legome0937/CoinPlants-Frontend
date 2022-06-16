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

import { useMoralis } from "react-moralis";

const config = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Rinkeby.chainId]: `https://eth-rinkeby.alchemyapi.io/v2/7c0zicFgvd__JdHxrJ3FUnEw6bbC8LJo`,
  },
};

function App() {
  //   const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

  //   useEffect(() => {
  //   if (isAuthenticated) {
  //     // add your logic here
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isAuthenticated]);

  //   const login = async () => {
  //     if (!isAuthenticated) {

  //       await authenticate({signingMessage: "Log in using Moralis" })
  //         .then(function (user) {
  //           console.log("logged in user:", user);
  //           console.log(user!.get("ethAddress"));
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //     }
  //   }

  //   const logOut = async () => {
  //     await logout();
  //     console.log("logged out");
  //   }

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
