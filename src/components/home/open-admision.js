import React, { Component } from 'react'
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

const useStyles = makeStyles({
    section: {
        background: '#31335D'
    }

})



const OpenAdmision = () => {

    const classes = useStyles();

    return (         
        <section className={ classes.section }>
                <Box  py={ 10 }  >
                    <Typography variant="subtitle1"  >
                        <Box  textAlign="center" color="#878895"  >Get 100$ of online courses for free</Box>
                    </Typography>
                    <Typography variant="h5"  >
                        <Box  textAlign="center" color="#fff"  >Apply for Admission or some other Call to Action</Box>
                    </Typography>
                    <Box textAlign="center"  mt={ 3 } >
                        <Fab variant="extended"  size="large" color="primary"  > 
                            <Box px={ 5 } >Learn More</Box>
                        </Fab>
                    </Box>
                </Box>
        </section>
    )
}



export default OpenAdmision