import React, {useEffect, useState} from "react";

import {Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';

const data = [
    { Title: '2022년 빅데이터 플래폼 고도화 및 분석모델 UI/UX 개발', Period: '2022.05.01 ~ 2022.11.30', Part: 'UI/UX 개발' },
    { Title: '부동산*** 임대관리솔루션 모바일 사이트 구축', Period: '2021.11.08 ~ 2022.02.11', Part: 'UI/UX 개발' },
    { Title: '통계청 차세대 나라통계시스템 구축', Period: '2021.09.23 ~ 2021.10.20', Part: 'UI/UX 개발' },
    { Title: '원자력안전정보공개센터 사이트 구축', Period: '2021.09.06 ~ 2021.12.17', Part: 'UI/UX 개발' },
    { Title: '의료기기 요건면제확인시스템 구축', Period: '2021.08.02 ~ 2021.11.02', Part: 'UI/UX 개발' },
    { Title: '2020년 유치원 정보공시시스템 기능개선', Period: '2020.08.24 ~ 2020.11.23', Part: 'UI/UX 개발' },
    { Title: '2017년 유치원 정보공시시스템 기능개선', Period: '2017.07.01 ~ 2017.12.31', Part: 'UI/UX 개발' },
    { Title: '원자력안전규제 종합 정보시스템 구축사업', Period: '2017.06.15 ~ 2017.12.31', Part: 'UI/UX 개발' },

    { Title: '한국안전기술협회 홈페이지 리뉴얼', Period: '2017.03.13 ~ 2017.10.31', Part: 'UI/UX 개발' },
    { Title: 'KT 글로벌 네트워크 통합 시스템 시연화면 구축', Period: '2017.03.06 ~ 2017.04.07', Part: 'UI/UX 개발' },
    { Title: '원자력안전규제 종합정보시스템 구축 2단계', Period: '2017.03.02 ~ 2017.12.31', Part: 'UI/UX 개발' },

    { Title: '2017년 유치원 정보공시시스템 유지관리', Period: '2017.03.01 ~ 2017.12.31', Part: 'UI/UX 개발' },
    { Title: '모트렉스 스마트워크 플랫폼 런처 개발', Period: '2017.02.10 ~ 2017.04.14', Part: 'UI/UX 개발' },
    { Title: '정부통합전산센터 CMS 구축', Period: '2016.08.01 ~ 2016.11.30', Part: 'UI/UX 개발' },
    { Title: '2016년 유치원정보공시시스템 기능개선', Period: '2016.08.01 ~ 2016.12.31', Part: 'UI/UX 개발' },
    { Title: 'KT 로드쇼 시연화면 개발', Period: '2016.05.02 ~ 2016.07.31', Part: 'UI/UX 개발' },
    { Title: '신용보증기금 차세대 시스템 구축 1단계', Period: '2016.04.11 ~ 2016.09.30', Part: 'UI/UX 개발' },
    { Title: 'KINS RASIS 통합업무포털시스템 구축', Period: '2016.04.04 ~ 2016.04.15', Part: 'UI/UX 개발' },
    { Title: '2016년 유치원정보공시시스템 유지보수', Period: '2016.03.01 ~ 2016.12.31', Part: 'UI/UX 개발' },

    { Title: 'KT Network Management System 구축', Period: '2015.11.24 ~ 2016.04.30', Part: 'UI/UX 개발' },
    { Title: 'KT One-box 서비스 제어시스템 구축', Period: '2015.10.19 ~ 2016.03.31', Part: 'UI/UX 개발' },

    { Title: '유치원 공시등록시스템 구축', Period: '2015.01.19 ~ 2015.08.28', Part: 'UI/UX 개발' },
    { Title: '유치원 알리미 사이트 구축', Period: '2015.01.19 ~ 2015.08.28', Part: 'UI/UX 개발' },

    { Title: '청운대학교 홈페이지/입학처 모바일 웹페이지 구축', Period: '2014.02.20 ~ 2014.04.30', Part: 'UI/UX 개발' },
    { Title: 'WiseCloud 솔루션 브랜드 사이트 구축', Period: '2014.02.10 ~ 2014.05.16', Part: 'UI/UX 개발' },
    { Title: '중소기업지원사업 통합관리시스템 구축', Period: '2013.10.01 ~ 2014.01.29', Part: 'UI/UX 개발' },
    { Title: '홈페이지 리뉴얼 구축', Period: '2013.07.17 ~ 2013.09.13', Part: 'UI/UX 개발' },
    { Title: 'PMS 시스템 브랜드 사이트 구축', Period: '2013.04.17 ~ 2013.06.27', Part: 'UI/UX 개발' },
    { Title: 'WiseFTA 솔루션 브랜드 사이트 구축', Period: '2013.02.18 ~ 2013.03.29', Part: 'UI/UX 개발' },
    { Title: 'CMMS 모바일 점검정비 시스템', Period: '2012.11.22 ~ 2013.02.08', Part: 'UI/UX 개발' },
];

const Projects = () => {
    return (
        <div className="view">

            <List sx={{ width: '100%', bgcolor: 'background.paper' }} className="lists">
                {data.map(function (list) {
                    return (
                        <ListItem>
                            <ListItemAvatar className="list-icon">
                                <Avatar sx={{ width: 32, height: 32 }}>
                                    <WorkIcon fontSize="small" />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={
                                <React.Fragment>
                                    <Typography
                                        component="p"
                                        variant="body2"
                                        color="text.secondary"
                                    >{list.Part}</Typography>
                                    <Typography component="h4" className="list-title">{list.Title}</Typography>
                                </React.Fragment>
                            } secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                    >
                                        {list.Period}
                                    </Typography>
                                </React.Fragment>
                            }
                            className="list-body"/>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
}

export default Projects;
