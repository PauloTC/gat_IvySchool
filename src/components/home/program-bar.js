import React, { Fragment } from 'react'
import {
    Container,
    Box,
    Typography,
    Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import Icon from "../../assets/backpack.svg";

const useStyles = makeStyles({
    bluecontainer : {
        background : "#333556"
    },
    containericon: {
    },
    icon : {
        width: 40,
        height: 40,
        position: 'relative'
    }
})

const programs = [
    {
        title: "Programs",
        content: "Attorney will need to arrange to hire an appearance attorney."
    },
    {
        title: "Certificate",
        content: "We are team og legal experts thatuses only fully screened."
    },
    {
        title: "Affordability",
        content: "We can provide qualified and experienced attorneys."
    }
]

const ProgramsBar = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Box py={5} className={ classes.bluecontainer } >
                <Container maxWidth="xl" >
                    <Grid container  justify="space-between" spacing= {2} >
                            {
                                programs.map((item) => {
                                    return (
                                        <Grid item container alignItems="center" spacing={3} sm={4} >
                                            <Grid item container alignItems="center" justify="center" xs={3} >
                                                <Box display="flex" className={ classes.containericon } position="relative" >
                                                    <Icon className={ classes.icon } />
                                                </Box>
                                            </Grid>
                                            <Grid item xs={9} >
                                                <Typography>
                                                    <Box mb={1} color="#fff" fontSize={18} fontWeight={600} > { item.title } </Box>
                                                    <Box  lineHeight="120%" color="#909098" fontSize={16} fontWeight={300} > { item.content } </Box>
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    )
                                })
                            }        

                            
                    </Grid>
                </Container>
            </Box>
        </Fragment>
    )
}

export default ProgramsBar