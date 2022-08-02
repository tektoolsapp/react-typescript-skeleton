import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Router>
          <Layout />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="page1" element={<Page1 />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
