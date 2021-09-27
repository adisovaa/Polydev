import './App.css';
import Header from "./component/header/Header";
import MainPage from "./component/content/MainPage";
import Footer from "./component/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <MainPage/>
            <Footer/>
        </div>
    );
}

export default App;
