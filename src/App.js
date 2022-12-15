import './App.css';
import './css/style.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./views/Main";
import Page from "./views/Page";
import NotFound from "./views/NotFound";

function App() {

    return (
        <div className="layout">
            <Router>
                <Header />
                <Nav />
                <Routes>
                    <Route path="/" exact={true} element={<Main />} />
                    <Route path="/:pagename" element={<Page />}/>
                    {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
