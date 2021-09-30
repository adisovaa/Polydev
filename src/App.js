import './App.css';
import Header from "./component/UI/header/Header";
import Footer from "./component/UI/footer/Footer";
import Contact from "./component/pages/contact/Contact"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "./component/UI/content/MainPage";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/' component={MainPage}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
