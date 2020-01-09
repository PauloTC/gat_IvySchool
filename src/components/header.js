import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Fragment } from "react"
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles'
import Fab from '@material-ui/core/Fab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {
    Slide
} from '@material-ui/core';

const useStyles = makeStyles({
    text: {
        fontFamily: 'Poppins',
        display: 'flex'
    },
    link: {
        color: '#fff',
        textDecoration: 'none'
    },
    header: {
        backgroundColor: "transparent"
    }
})

const Header = ()=> {
    const classes = useStyles();
    const trigger = useScrollTrigger();
    const preventDefault = event => event.preventDefault();
    const navigate = [
        { name : "Home", to: "home" },
        { name : "Academics", to: "academics" },
        { name : "News", to: "news" },
        { name : "Events", to: "events" },
        { name : "School life", to: "school" },
        { name : "Contact", to: "contact" }
    ]
    return (
        <Fragment>
            <AppBar elevation={0} className={ classes.header } >
                <Toolbar  disableGutters  className={ !trigger ? classes.top : classes.notop  } >
                    <Box width="100%"  display="flex"  flexDirection="column" >

                        <Box   className={ classes.callaction } backgroundColor="#3AC569" >
                            
                            <Container maxWidth="xl">
                                <Grid container justify="space-between">
                                    <Grid item md={5} container alignItems="center" >
                                        <Typography  className={ classes.text } >
                                            <Box fontSize={14} fontWeight={300}>Need Help? Call us now</Box>
                                            <Box fontSize={14} fontWeight={300}>(+88)12 345 6789</Box>
                                            <Box color="#e0e0e0"  ml={2} fontSize={14} fontWeight={300}>hello@eduma.com</Box>
                                        </Typography>
                                    </Grid>
                                    <Grid item md={3} container justify="flex-end" >
                                        <Button>
                                            <Box color="#e0e0e0" fontSize={14} fontWeight={300}>Alumno</Box>
                                        </Button>
                                        <Button>
                                            <Box color="#e0e0e0" fontSize={14} fontWeight={300}>Profesor</Box>
                                        </Button>
                                        <Button>
                                            <Box color="#e0e0e0"fontSize={14} fontWeight={300}>Padres</Box>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Container>

                        </Box>
                        
                        
                        <Box  mt={3} >
                            <Container maxWidth="xl">
                                <Grid container justify="space-between">

                                    <Grid item  md={2} >
                                        <Typography>
                                            <Box fontSize={30} fontWeight={600} > Ivy School</Box>
                                        </Typography>
                                    </Grid>


                                    <Grid item md={10} >

                                        <Box display="flex" justifyContent="flex-end"  alignItems="center"  >
                                            {
                                                navigate.map((item)=> {
                                                    return (
                                                        <Box mr={ 5  } >
                                                            <Typography>
                                                                <Box color="#fff" fontSize={16} fontWeight={300}>
                                                                    <Link  className={ classes.link } href="#" onClick={preventDefault}> { item.name } </Link>
                                                                </Box>
                                                            </Typography>
                                                        </Box>
                                                    )
                                                })
                                            }

                                            <Fab variant="extended" size="medium" color="primary" >
                                                <Typography>
                                                    <Box fontSize={14} fontWeight={300}> Apply Now </Box>
                                                </Typography>
                                            </Fab>
                                        </Box>

                                    </Grid>

                                
                                </Grid>

                            </Container>
                        </Box>

                    </Box>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
} 

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
