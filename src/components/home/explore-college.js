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

})



const ExploreCollege = () => {

    const classes = useStyles();

    return (
        <Box  py={15} >
            <section className={ classes.section }>
                <Container maxWidth="xl" >
                    <Grid alignItems="center"  container >
                        <Grid item xs={12} sm={6}  lg={3} >
                            <Typography  variant="body1"  >    
                                <Box color="#7C7C7C" fontWeight={ 300 } > ALL EDUMA ALL THE TIME</Box>
                            </Typography>
                            <Typography variant="h4" >
                                <Box fontWeight={ 900 } >Explore Eduma</Box>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}  lg={ 2 } >
                            <Typography  variant="h2" >
                                <Box  textAlign="center" fontWeight={ 800 } > 24 </Box>
                            </Typography>
                            <Typography variant="h5" >
                                <Box  color="#7C7C7C" fontWeight={ 300 } textAlign="center"  > HOURS </Box>
                            </Typography>
                        </Grid>
                        <Grid item sm={12}   lg={ 7 } >
                            <Typography>
                                <Box color="#7C7C7C" >There's always something amazing happening at Michigan Whether it's on campus or around the world our students, faculty staff and alumni are out seizing the day as shown in the slideshow below suspendisse potenti</Box>
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </Box>         
    )
}



export default ExploreCollege