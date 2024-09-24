import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
let name = "akshat";
function App() {
  const [Mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextrUtils-DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils-LightMode";
    }
  };

  return (
    <>
      {/* <Navbar title="TEXTUTILS" aboutText="ABOUT TEXTUTILS"/> */}
      <BrowserRouter>
        <Navbar title="TEXTUTILS" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About />} /> */}

          {/* <Route exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter The Text To Analyse Below "
                  mode={Mode}
                />
              }
            />
          </Routes> */}
          <TextForm
            showAlert={showAlert}
            heading="Enter The Text To Analyse Below "
            mode={Mode}
          />
        </div>
      </BrowserRouter>

      {/* <About/> */}
    </>
  );
}

export default App;
