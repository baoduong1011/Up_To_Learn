import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Components/Header/Header';
import TrangChu from './Page/TrangChu/TrangChu';
import TinTuc from './Page/TinTuc/TinTuc';
import DangNhap from './Page/DangNhap/DangNhap';
import DangKy from './Page/DangKy/DangKy';
import Footer from './Components/Footer/Footer';
import PageLoginRegister from './Page/UserLogin-Register/PageLoginRegister';
import AboutMe from './Page/CV/AboutMe';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/trangchu' component={TrangChu} />
                <Route exact path='/tintuc' component={TinTuc} />
                <Route exact path='/dangnhap' component={DangNhap} />
                <Route exact path='/dangky' component={DangKy} />
                <Route exact path='/' component={TrangChu} />
                <Route exact path='/login-register' component={PageLoginRegister}/>
                <Route exact path='/cv-admin-baoduong' component={AboutMe}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
