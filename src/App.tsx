import "./App.css";
import Home from "./pages/Home";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Typography } from "@mui/material";
import { BackToTop } from "./components";

// import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <Typography variant="h3" fontWeight="200" textAlign="left" margin="1em">
                        404 - Não encontrado.
                    </Typography>
                </Route>
            </Switch>
            <BackToTop />
        </Router>
    );
}

export default App;
