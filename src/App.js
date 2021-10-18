import './App.css';
import Header from "./component/UI/header/Header";
import Footer from "./component/UI/footer/Footer";
import Contact from "./component/pages/contact/Contact"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "./component/UI/content/MainPage";
import ErrorPage from "./component/pages/error/Error";
import CasePage from "./component/pages/case/Case";
import BriefPage from "./component/pages/briefPage/BriefPage";
import AboutPage from "./component/pages/aboutPage/About";
import FirstCase from "./component/pages/case/casePages/firstCasePage/FirstCase";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path='/swift-global' component={FirstCase}/>
                    <Route path='/about' component={AboutPage}/>
                    <Route path='/case' component={CasePage}/>
                    <Route path='/brief' component={BriefPage}/>
                    <Route path='/error' component={ErrorPage}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/' component={MainPage}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
