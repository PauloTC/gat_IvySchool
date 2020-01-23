import React, { Fragment } from 'react'
import {
    CardMedia,
    Container,
    Fab,
    Box,
    Grid,
    Typography,
    Card,
    CardContent
} from '@material-ui/core';
import image from '../../images/news.jpg'
import Icon from '../../assets/calendar.svg'
import Timer from '../../assets/timer.svg'
import Location from '../../assets/location.svg'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    image: {
        height: 500,
        width: '100%'
    },
    icon: {
        width: 15,
        height: 15,
        marginRight: 10
    },
    date: {
        display: 'flex',
        alignItems : 'center'
    },
    card: {
        position: 'relative'
    },
    content: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        background: 'rgba(0, 0, 0, 0.7)'
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        '&:nth-of-type(1)' : {
            marginRight: 15
        }
    }
})

const LatestNews = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <Container maxWidth="xl" >
                <Box py={12} >

                    <Grid container spacing={5}>

                        <Grid item md={4} >
                            <Box>
                                <Card  className={ classes.card } >
                                    {/* <CardMedia className={ classes.image } image={ image } /> */}
                                    <CardContent  className={ classes.content } >
                                        <Box mb={2} >
                                            <Typography variant="subtitle1" > 
                                                <Box fontWeight={600} lineHeight="150%" color="#fff" >Presentation: The geographics of a care based economy year 2018</Box> 
                                            </Typography>
                                        </Box>
                                        <Grid container >
                                            <Grid item className={ classes.item }  >
                                                <Timer  className={ classes.icon } />
                                                <Typography variant="body2" > 
                                                    <Box  color="#fff" >14:30 pm</Box> 
                                                </Typography>
                                            </Grid>
                                            <Grid item className={ classes.item } >
                                                <Location className={ classes.icon } />
                                                <Typography variant="body2" >
                                                    <Box color="#fff" >Napoli, Pizarro 41/22</Box> 
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>

                        <Grid item md={4} >
                            <Typography  variant="h4" >
                                <Box  mb={5} fontWeight={ 900 } >Latest News</Box>
                            </Typography>

                            <Box borderBottom="1px solid #EBEBEB" pb={3} mb={3} >
                                <Typography  variant="subitle1">
                                    <Box mb={2} fontWeight={600} >Lecture: An indigenous Anatolian Syllabic Script From 3500 Years Ago</Box>
                                </Typography>
                                <Typography className={ classes.date } variant="body2" >
                                    <Icon className={ classes.icon } />
                                    <Box  fontWeight={300}  >January 3, 2018</Box>
                                </Typography>
                            </Box>

                            <Box borderBottom="1px solid #EBEBEB" pb={3} mb={3} >
                                <Typography  variant="subitle1">
                                    <Box mb={2} fontWeight={600} >Lecture: An indigenous Anatolian Syllabic Script From 3500 Years Ago</Box>
                                </Typography>
                                <Typography className={ classes.date } variant="body2" >
                                    <Icon className={ classes.icon } />
                                    <Box  fontWeight={300}  >January 3, 2018</Box>
                                </Typography>
                            </Box>

                            <Box>
                                <Typography  variant="subitle1">
                                    <Box mb={2} fontWeight={600} >Lecture: An indigenous Anatolian Syllabic Script From 3500 Years Ago</Box>
                                </Typography>
                                <Typography className={ classes.date } variant="body2" >
                                    <Icon className={ classes.icon } />
                                    <Box  fontWeight={300}  >January 3, 2018</Box>
                                </Typography>
                            </Box>
                            
                        </Grid>

                        <Grid item md={4} >
                            <Typography  variant="h4" >
                                <Box  fontWeight={ 900 } mb={5} >School Eduma</Box>
                            </Typography>
                            <Typography  variant="subtitle1" >
                                <Box mb={3} fontWeight={300} >For 23 years of existence, Ed Foundation has implemented more tan  1700 activities, the total value about 10 millon euros.</Box>
                                <Box fontWeight={300} > We are home to 1,500 students (aged 12 to 16) and 100 expert faculty and staff a community representing over 40 different nations. We are proud of our international and multi-cultural ethos,and the way our community. </Box>
                            </Typography>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </Fragment>
    )
}

export default LatestNews