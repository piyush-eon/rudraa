import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <h2 className="message">Site can only be viewed in desktop</h2>
      <div className="App">
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
