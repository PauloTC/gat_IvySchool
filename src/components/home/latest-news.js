import React, { Fragment } from 'react'
import {
    CardMedia,
    Container,
    Fab,
    Box,
    Grid,
    Typography,
    CardContent
} from '@material-ui/core';
import image from '../../images/news.jpg'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    image: {
        height: 318,
        width: 318
    }
})

const LatestNews = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <Container maxWidth="xl" >
                <Grid container >
                    <Grid md={4} >
                        <Box>
                            <CardMedia className={ classes.image } image={ image } />
                        </Box>
                    </Grid>
                    <Grid md={4} >
                        <Typography  variant="h6" >Latest News</Typography>
                        <Typography  variant="caption">
                            <Box>Lecture: An indigenous Anatolian Syllabic Script From 3500 Years Ago</Box>
                        </Typography>
                    </Grid>
                    <Grid md={4} >
                        <Typography  variant="h6" >School Eduma</Typography>
                        <Typography  variant="caption" >For 23 years of existence, Ed Foundation has implemented more tan  1700 activities the total value about 10 millon euros.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    )
}

export default LatestNews