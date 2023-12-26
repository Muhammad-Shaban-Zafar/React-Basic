import Routes from "./pages/Routes";
import "./App.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import CountContextProvider from "./context/CountContext";
import HelpContextProvider from "./context/HelpContext";

function App() {
  return (
    <>
    <HelpContextProvider>
    <CountContextProvider>
        <Routes />
      </CountContextProvider>
    </HelpContextProvider>
      
    </>
  );
}

export default App;
