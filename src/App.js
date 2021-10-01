import './App.css';
import Header from "./component/UI/header/Header";
import Footer from "./component/UI/footer/Footer";
import Contact from "./component/pages/contact/Contact"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "./component/UI/content/MainPage";
import BriefPage from "./component/pages/briefPage/BriefPage";
import ErrorPage from "./component/pages/error/Error";
import CasePage from "./component/pages/case/Case";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path='/case' render={CasePage}/>
                    <Route path='/error' render={ErrorPage}/>
                    <Route path='/contact' render={Contact}/>
                    <Route path='/brief' render={BriefPage}/>
                    <Route path='/' render={MainPage}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
