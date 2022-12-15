import React from 'react';
import {Container} from "@mui/material";

const NotFound = () => {
    return (
        <div className="main">
            <Container className="container">
                <h3>404 ERROR</h3>
                <p>페이지를 찾을 수 없습니다.</p>
            </Container>
        </div>
    );
};

export default NotFound;
