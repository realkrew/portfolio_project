import React from "react";

import {Avatar, Box, Chip, Grid, List, ListItem, ListItemText, Rating, Stack} from "@mui/material";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {TimelineOppositeContent} from "@mui/lab";
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

const Profile = () => {
    return (
        <div className="view">
            <Grid container direction={'row'} spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={4}>
                    <Grid container direction={'column'} spacing={2}>
                        <Grid item>
                            <Card sx={{ display: 'flex', flexDirection: 'column' }} className="cardbox">
                                <h4>Profile Details</h4>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Avatar alt="Remy Sharp" sx={{ width: 120, height: 120 }} src={ require("../images/thumbnail.png") } className="avatar"/>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} mt={2}>
                                    <Typography variant="subtitle1" gutterBottom component="div" mb={0}>
                                        Lim Ji Eun
                                    </Typography>
                                    <Typography variant="subtitle2" gutterBottom component="div" mb={0}>
                                        UI/UX Designer
                                    </Typography>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card sx={{ display: 'flex', flexDirection: 'column' }} className="cardbox">
                                <h4>About</h4>
                                <List className="about">
                                    <ListItem>
                                        <HomeOutlinedIcon fontSize="small" />
                                        <Typography component="legend">대전 거주</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <BusinessCenterOutlinedIcon fontSize="small" />
                                        <Typography component="legend">프리/반프리</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <MailOutlineIcon fontSize="small" />
                                        <Typography component="legend">realkrew@naver.com</Typography>
                                    </ListItem>
                                </List>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card sx={{ display: 'flex', flexDirection: 'column' }} className="cardbox">
                                <h4>Certificate</h4>
                                <List className="about">
                                    <ListItem>
                                        <WorkspacePremiumOutlinedIcon fontSize="small" />
                                        <Typography component="legend">정보처리기사</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <WorkspacePremiumOutlinedIcon fontSize="small" />
                                        <Typography component="legend">컴퓨터그래픽스운용기능사</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <WorkspacePremiumOutlinedIcon fontSize="small" />
                                        <Typography component="legend">웹디자인기능사</Typography>
                                    </ListItem>
                                </List>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card sx={{ display: 'flex', flexDirection: 'column' }} className="cardbox">
                                <h4><span>Design</span> Skills</h4>
                                <List className="skills">
                                    <ListItem sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography component="legend">Photoshop</Typography>
                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" className="progressBar" />
                                    </ListItem>
                                    <ListItem sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography component="legend">illustrator</Typography>
                                        <Rating name="read-only" value={4} precision={0.5} readOnly size="small" className="progressBar" />
                                    </ListItem>
                                    <ListItem sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography component="legend">figma/xd</Typography>
                                        <Rating name="read-only" value={3} precision={0.5} readOnly size="small" className="progressBar" />
                                    </ListItem>
                                </List>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card sx={{ display: 'flex', flexDirection: 'column' }} className="cardbox">
                                <h4><span>Coding</span> Skills</h4>
                                <List className="skills">
                                    <ListItem sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography component="legend">jQuery</Typography>
                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" className="progressBar" />
                                    </ListItem>
                                    <ListItem sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography component="legend">javascript</Typography>
                                        <Rating name="read-only" value={4} precision={0.5} readOnly size="small" className="progressBar" />
                                    </ListItem>
                                    <ListItem sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography component="legend">React/Vue</Typography>
                                        <Rating name="read-only" value={3} precision={0.5} readOnly size="small" className="progressBar" />
                                    </ListItem>
                                    <ListItem sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography component="legend">Java</Typography>
                                        <Rating name="read-only" value={2.5} precision={0.5} readOnly size="small" className="progressBar" />
                                    </ListItem>
                                    <ListItem sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography component="legend">C#</Typography>
                                        <Rating name="read-only" value={2.5} precision={0.5} readOnly size="small" className="progressBar" />
                                    </ListItem>
                                </List>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card sx={{ display: 'flex', flexDirection: 'column' }} className="cardbox">
                                <h4>IDE</h4>
                                <List className="skills">
                                    <ListItem sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography component="legend">intelliJ</Typography>
                                        <Rating name="read-only" value={4} precision={0.5} readOnly size="small" className="progressBar" />
                                    </ListItem>
                                    <ListItem sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <Typography component="legend">eclipse</Typography>
                                        <Rating name="read-only" value={3} precision={0.5} readOnly size="small" className="progressBar" />
                                    </ListItem>
                                </List>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={8}>
                    <Grid container direction={'column'} spacing={2}>
                        <Grid item>
                            <Card sx={{ display: 'flex', flexDirection: 'column' }} className="cardbox">
                                <h4>Education</h4>
                                <Box className="timeline">
                                    <Timeline>
                                        <TimelineItem>
                                            <TimelineOppositeContent className="period" sx={{ display: { xs: 'none', sm: 'block' } }}>
                                                2014.03 ~ 2017.08
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot className="dot" />
                                                <TimelineConnector className="connector" />
                                            </TimelineSeparator>
                                            <TimelineContent className="content">
                                                <Typography component="p" className="subPeriod" sx={{ display: { xs: 'block', sm: 'none' } }}>2014.03 ~ 2017.08</Typography>
                                                <Typography component="label">서울디지털대학교 시각디자인과</Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent className="period" sx={{ display: { xs: 'none', sm: 'block' } }}>
                                                2005.03 ~ 2005.07
                                            </TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot className="dot" />
                                            </TimelineSeparator>
                                            <TimelineContent className="content">
                                                <Typography component="p" className="subPeriod" sx={{ display: { xs: 'block', sm: 'none' } }}>2005.03 ~ 2005.07</Typography>
                                                <Typography component="label">한밭대학교 외국어학부</Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card sx={{ display: 'flex', flexDirection: 'column' }} className="cardbox">
                                <h4>Career</h4>
                                <Box className="timeline">
                                    <Timeline>
                                        <TimelineItem>
                                            <TimelineOppositeContent className="period" sx={{ display: { xs: 'none', sm: 'block' } }}>현재</TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot className="dot" />
                                                <TimelineConnector className="connector" />
                                            </TimelineSeparator>
                                            <TimelineContent className="content">
                                                <Typography component="p" className="subPeriod" sx={{ display: { xs: 'block', sm: 'none' } }}>현재</Typography>
                                                <Typography component="label">프리랜서</Typography>
                                                <Typography component="p" className="desc">개발 유지보수 및 UI/UX</Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent className="period" sx={{ display: { xs: 'none', sm: 'block' } }}>2022.04 ~ 2022.11</TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot className="dot" />
                                                <TimelineConnector className="connector" />
                                            </TimelineSeparator>
                                            <TimelineContent className="content">
                                                <Typography component="p" className="subPeriod" sx={{ display: { xs: 'block', sm: 'none' } }}>2022.04 ~ 2022.11</Typography>
                                                <Typography component="label">디파인더컴퍼니</Typography>
                                                <Typography component="p" className="desc">UI/UX팀/과장</Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent className="period" sx={{ display: { xs: 'none', sm: 'block' } }}>2021.01 ~ 2022.02</TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot className="dot" />
                                                <TimelineConnector className="connector" />
                                            </TimelineSeparator>
                                            <TimelineContent className="content">
                                                <Typography component="p" className="subPeriod" sx={{ display: { xs: 'block', sm: 'none' } }}>2021.01 ~ 2022.02</Typography>
                                                <Typography component="label">보드**</Typography>
                                                <Typography component="p" className="desc">유니티 개발팀/과장</Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent className="period" sx={{ display: { xs: 'none', sm: 'block' } }}>2014.12 ~ 2017.12</TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot className="dot" />
                                                <TimelineConnector className="connector" />
                                            </TimelineSeparator>
                                            <TimelineContent className="content">
                                                <Typography component="p" className="subPeriod" sx={{ display: { xs: 'block', sm: 'none' } }}>2014.12 ~ 2017.12</Typography>
                                                <Typography component="label">유엔**</Typography>
                                                <Typography component="p" className="desc">UI/UX팀/과장</Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent className="period" sx={{ display: { xs: 'none', sm: 'block' } }}>2012.10 ~ 2014.10</TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot className="dot" />
                                                <TimelineConnector className="connector" />
                                            </TimelineSeparator>
                                            <TimelineContent className="content">
                                                <Typography component="p" className="subPeriod" sx={{ display: { xs: 'block', sm: 'none' } }}>2012.10 ~ 2014.10</Typography>
                                                <Typography component="label">비즈**</Typography>
                                                <Typography component="p" className="desc">UI/UX팀/주임</Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                        <TimelineItem>
                                            <TimelineOppositeContent className="period" sx={{ display: { xs: 'none', sm: 'block' } }}>2009.12 ~ 2012.02</TimelineOppositeContent>
                                            <TimelineSeparator>
                                                <TimelineDot className="dot" />
                                            </TimelineSeparator>
                                            <TimelineContent className="content">
                                                <Typography component="p" className="subPeriod" sx={{ display: { xs: 'block', sm: 'none' } }}>2009.12 ~ 2012.02</Typography>
                                                <Typography component="label">니즈*</Typography>
                                                <Typography component="p" className="desc">디자인팀/주임</Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </Timeline>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card sx={{ display: 'flex', flexDirection: 'column' }} className="cardbox">
                                <h4>Knowledges</h4>
                                <Box className="chips">
                                    <Chip label="디자인" size="small" className="chip" color="primary"/>
                                    <Chip label="퍼블리싱" size="small" className="chip" color="primary"/>
                                    <Chip label="웹표준" size="small" className="chip" color="primary"/>
                                    <Chip label="웹접근성" size="small" className="chip" color="primary"/>
                                    <Chip label="HTML" size="small" className="chip" color="primary"/>
                                    <Chip label="Javascript" size="small" className="chip" color="primary"/>
                                    <Chip label="scss" size="small" className="chip" />
                                    <Chip label="React" size="small" className="chip" />
                                    <Chip label="Vue.js" size="small" className="chip" />
                                    <Chip label="D3.js" size="small" className="chip" />
                                    <Chip label="chart.js" size="small" className="chip" />
                                    <Chip label="UI/UX" size="small" className="chip" />
                                    <Chip label="제로보드" size="small" className="chip" />
                                    <Chip label="워드프레스" size="small" className="chip" />
                                    <Chip label="부트스트랩" size="small" className="chip" />
                                    <Chip label="Java" size="small" className="chip" />
                                    <Chip label="C#" size="small" className="chip" />
                                    <Chip label="php" size="small" className="chip" />
                                    <Chip label="Springboot" size="small" className="chip" />
                                    <Chip label="mySql" size="small" className="chip" />
                                    <Chip label="Unity" size="small" className="chip" />
                                    <Chip label="전자정부프레임워크" size="small" className="chip" />
                                    <Chip label="github" size="small" className="chip" />
                                    <Chip label="git pages" size="small" className="chip" />
                                    <Chip label="SVN" size="small" className="chip" />
                                    <Chip label="MVC" size="small" className="chip" />
                                </Box>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Profile;
