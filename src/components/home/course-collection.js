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



export class CourseCollection extends Component {

    
    render() {
        
        const events = [
            { date: '06' , month: 'AUG, 2018' , title: '  Lecture: An indigenous Anatolian Syllabic Script from 3500  Years Ago ',  time: '10 am - 14 pm'  },
            { date: '07' , month: 'AUG, 2019' , title: '  Lecture: An indigenous Anatolian Syllabic Script from 3500  Years Ago ',  time: '10 am - 14 pm'  },
            { date: '08' , month: 'AUG, 2020' , title: '  Lecture: An indigenous Anatolian Syllabic Script from 3500  Years Ago ',  time: '10 am - 14 pm'  }
        ]

        return (
            <Box  py={8} >
                <Container maxWidth="xl" >
                    <Grid  container >
                        <Grid item md={6} >
                            <Typography  variant="h4" >
                                <Box mb={5}  fontWeight={ 600 }>Nuestros Eventos</Box>
                            </Typography>
                            {
                                events.map( (e , index)=> {
                                    return (
                                        <Box  mb={ 4 } >
                                            <Grid  id={ index } alignItems="center"  container spacing={2}  >
                                                <Grid  item >
                                                    <Box  p={1} textAlign="center"  border="1px solid  #3AC569"  >
                                                        <Typography  variant="h4" >
                                                                <Box color="#3AC569"  > { e.date } </Box>
                                                        </Typography>
                                                        <Typography  variant="body2" >
                                                            <Box color="#3AC569" >  { e.month } </Box>
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid  md={9} item >
                                                    <Typography  variant="body1" >Lecture: An indigenous Anatolian Syllabic Script from 3500  Years Ago</Typography>
                                                    <Typography  variant="body2">  10 am - 14 pm </Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    )
                                } )
                            }
                        </Grid>
                        <Grid item md={6} >
                            <Box border="1px solid #000"  >

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        )
    }
}

export default CourseCollection
