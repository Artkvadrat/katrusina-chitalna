import "./App.css";
import "./reset.css";
import { AboutAuthor, Header, HistoryBlock, Footer } from "./components";

const App = () => {
  return (
    <>
      <Header />

      <HistoryBlock />

      <AboutAuthor />

      <Footer />
    </>
  );
};

export default App;
