import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import Section from "./Components/Section";
import { DataProvider } from "./Components/Context";
import Footer from "./Components/Footer";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <Section />
          <Footer />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;
