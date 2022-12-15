import React from "react";
import Footer from "../components/Footer";
import { Container } from "@mui/material";

import '../css/main.scss';

const Main = () => {
    return (
        <div className="main">
            <Container aria-labelledby="contents" className="dashboard">
                <i className="tvn">React Project</i>
                <h4 className="SCDream">개인 포트폴리오</h4>
                <p>무단 도용 및 불펌을 금합니다.</p>
            </Container>
            <Footer />
        </div>
    );
}

export default Main;
