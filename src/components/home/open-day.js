import React, { Fragment } from 'react'
import {
    CardMedia,
    Container,
    Fab,
    Box,
    Typography,
    Grid,
    CardContent,
    TextField
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import Check from  '../../assets/select.svg'
import image from '../../images/students.jpeg'

const useStyles = makeStyles({
    blue: {
        background: "#31335D"
    },
    steelblue: {
        background: "#4A4E8E"
    },
    icon : {
        width: 15,
        height: 15
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: 525,
        zIndex: -1,
        "&::before" : {
            content: " ' ' ",
            background: '#000',
            width: '100%',
            height: '100%',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: 'block',
            opacity: 0.5
        }
    }
})

const OpenDay = () => {
    const classes = useStyles();

    const info = [
        {  title: "98%" , subtitle: "of class of 2018" },
        {  title: "126" , subtitle: "People working" },
        {  title: "30" , subtitle: "Years of experience" },
        {  title: "4.032" , subtitle: "Students" }
    ]

    const hours = [
        { day: "Monday, Wednesday", hours: "8:00 - 8:40" },
        { day: "Thursday, Friday", hours: "8:45 - 9:30" },
        { day: "Saturday", hours: "9:35 - 10:20" },
        { day: "Holidays", hours: "10:40 - 11:20" }
    ]

    const choose = [
        "Curriculum & instruction start",
        "Strudent support services",
        "Human resources ED center",
        "Early childhood center",
        "Auditorium with stage",
        "Ed middle school",
        "Three athletic fields"
    ]

    return (
        <Box position="relative" mb={30} pb={ 40 } pt={ 8 } className= { classes.container } >
            <CardMedia className={ classes.image }  image={  image }  />
            <Container maxWidth="xl" >
                <Typography variant="body2" >
                    <Box textAlign="center" color="#fff" >Our Goals</Box>
                </Typography>
                <Typography  variant="h5" >
                     <Box mb={ 4 } fontWeight={600}  textAlign="center" color="#3AC569" >Open Day 2018</Box>
                </Typography>
                <Box display="flex" justify="space-around" >
                    {
                        info.map( i => {
                            return (
                                <Box flex="1" >
                                    <Typography variant="h3" >
                                        <Box  textAlign="center" color="#fff"  fontWeight={600} > {i.title } </Box>
                                    </Typography>
                                    <Typography variant="body1" >
                                        <Box  textAlign="center" color="#fff" > { i.subtitle } </Box>
                                    </Typography>
                                </Box>
                            )
                        } )
                    }
                </Box>
                <Box maxWidth={1150}  position="absolute" left={0}  right={0} margin="auto" bottom={-200} >
                    <Grid container >

                        <Grid className={ classes.blue } item md={4} >
                            <Box py={5} >
                                <Typography>
                                    <Box mb={3} fontWeight={600} color="#fff" textAlign="center" > WORKING HOURS </Box>
                                </Typography>
                                <Box px={5}  display="flex" flexDirection="column" >                          
                                    {
                                        hours.map( h => {
                                            return (
                                                <Box pb={3} display="flex" justifyContent="space-between">
                                                    <Typography> 
                                                        <Box  color="#707186" > { h.day } </Box>
                                                    </Typography>
                                                    <Typography>
                                                        <Box  color="#3AC569" > { h.hours } </Box>
                                                    </Typography>
                                                </Box>
                                            )
                                        } )
                                    }
                                </Box>
                            </Box>
                            
                            
                        </Grid>

                        <Grid className={ classes.steelblue } item md={4} >
                            <Box py={ 5 } >
                                <Typography>
                                    <Box mb={4} fontWeight={600} color="#fff" textAlign="center" > WHY CHOOSE US </Box>
                                </Typography>
                                <Box px={5} display="flex" flexDirection="column" >
                                    {
                                        choose.map( c => {
                                            return (
                                                <Box mb={2} display="flex" alignItems="center" >
                                                    <Box  display="flex" mr={ 2 } >
                                                        <Check  className={ classes.icon } />
                                                    </Box>
                                                    <Typography> 
                                                        <Box  color="#AEAEAE" > { c } </Box>
                                                    </Typography>
                                                </Box>
                                            )
                                        } )
                                    }
                                </Box>
                            </Box>
                        </Grid>

                        <Grid className={ classes.blue } item md={4} >
                            <Box py={ 5 } >
                                <Typography>
                                    <Box mb={4} fontWeight={600} fontWeight={600} color="#fff" textAlign="center" > SUSCRIBE HERE </Box>
                                </Typography>
                                <form>
                                    <Box px={5} display="flex" flexDirection="column" >
                                        <TextField id="outlined-basic" label="Name" variant="outlined" />
                                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                                        <TextField id="outlined-basic" label="Phone" variant="outlined" />
                                    </Box>
                                </form>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default OpenDay