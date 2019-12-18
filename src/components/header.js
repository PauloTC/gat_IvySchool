import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Fragment } from "react"
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    text: {
        fontFamily: 'Poppins',
        display: 'flex'
    }
})

const Header = ()=> {
    const classes = useStyles();
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
