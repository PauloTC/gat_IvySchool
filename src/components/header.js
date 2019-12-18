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

const useStyles = makeStyles({
    text: {
        fontFamily: 'Poppins',
        display: 'flex'
    },
    link: {
        fontFamily: 'Poppins'
    }
})

const Header = ()=> {
    const classes = useStyles();
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
            <header>
                <Container maxWidth="lg" >
                    <Grid container justify="space-between" >
                        <Grid item md={5} container alignItems="center" >
                            <Typography  className={ classes.text } >
                                <Box fontSize={14} fontWeight={300}>Need Help? Call us now</Box>
                                <Box fontSize={14} fontWeight={300}>(+88)12 345 6789</Box>
                                <Box ml={2} fontSize={14} fontWeight={300}>hello@eduma.com</Box>
                            </Typography>
                        </Grid>
                        <Grid item md={3} container justify="flex-end" >
                            <Button>
                                <Box fontSize={14} fontWeight={300}>Alumno</Box>
                            </Button>
                            <Button>
                                <Box fontSize={14} fontWeight={300}>Profesor</Box>
                            </Button>
                            <Button>
                                <Box fontSize={14} fontWeight={300}>Padres</Box>
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="lg" >
                    <Grid container justify="space-between" >

                        <Grid item  md={2} >
                            <Typography>
                                <Box fontSize={30} fontWeight={600} > Ivy School</Box>
                            </Typography>
                        </Grid>


                        <Grid item container  justify="flex-end" alignItems="center" md={10} >
                            {
                                navigate.map((item)=> {
                                    return (
                                        <Grid item  md={1} >
                                            <Typography>
                                                <Box fontSize={16} fontWeight={300}>
                                                    <Link  href="#" onClick={preventDefault}> { item.name } </Link>
                                                </Box>
                                            </Typography>
                                        </Grid>
                                    )
                                })
                            }
                            <Grid  item md={2} >
                                <Fab variant="extended" size="medium" color="primary" >Apply Now</Fab>
                            </Grid>
                        </Grid>
                      
                    </Grid>

                </Container>
            </header>
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
