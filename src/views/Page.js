import React from "react";
import {useParams} from 'react-router-dom';

import {Container, Typography, Link, Breadcrumbs, Box} from "@mui/material";

import Footer from "../components/Footer";
import Profile from "./Profile";

import UIUX from "./UIUX";
import UnityC from "./UnityC";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Projects from "./Projects";
import Main from "./Main";

const data = {
    profile :{
        name:'Profile',
        description:'개인 프로파일',
        component: <Profile />
    },
    projects :{
        name : 'Projects',
        description:'참여 프로젝트',
        component: <Projects />
    },
    ui_ux :{
        name : 'UI/UX',
        description:'UI/UX 참여 프로젝트',
        component: <UIUX />
    },
    unity_c :{
        name : 'Unity/C#',
        description:'Unity/C# 참여 프로젝트',
        component: <UnityC />
    },
    contact :{
        name : 'Contact',
        description:'업무 제의',
        component: <Contact />
    },
    not_found :{
        name : 'NOT FOUND',
        description:'화면을 찾을 수 없습니다.',
        component: <NotFound />
    }
}

const Page = () => {
    const { pagename } = useParams();
    const pages = data[pagename];

    if(!pages){
        return (
            <div className="main">
                <NotFound />
            </div>
        );
    }

    return (
        <div className="main">
            <Container aria-labelledby="contents" className="contents">

                {/*페이지 타이틀*/}
                <Box className="pageTitle">
                    <h3>{ pages.name }</h3>
                    {/*<p className="subTitle">{ pages.description }</p>*/}
                </Box>

                {/*Breadcrumb*/}
                <div role="presentation" className="breadcrumb">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/">Home</Link>
                        <Typography color="text.primary">{ pages.name }</Typography>
                    </Breadcrumbs>
                </div>

                { pages.component }

            </Container>
            <Footer />
        </div>
    );
}

export default Page;
