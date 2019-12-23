import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../images/slider.jpg"
import SEO from "../components/seo"
import {
        CardMedia,
        Container,
        Fab,
        Box,
        Typography,
        CardContent
} from '@material-ui/core';
import Programbar from '../components/home/program-bar'
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles({
    slider: {
        height: 700,
        width: "100%",
        display: 'block',
        position: 'relative',
        "&::before" : {
            content: "''",
            background: "#000",
            opacity: '0.4',
            display: 'block',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            height: '100%',
            width: '100%'
        }
    },
    containerAbsolute: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)'
    }
})

const IndexPage = () => {
    const classes = useStyles();
    return (
        <Layout>
            <SEO title="Home" />
            <Box position="relative" >
                <CardMedia  className={ classes.slider } image={Image} />
                <Container className={ classes.containerAbsolute } maxWidth="xl" >
                    <CardContent>
                        <Typography>
                            <Box mb={2} fontSize={18} fontWeight={300} color="#fff" >How do  get to the University?</Box>
                            <Box mb={4} lineHeight="110%" fontSize={65} fontWeight={600} width={800} color="#fff" >Welcome to Eduma Education way of school</Box>
                        </Typography>
                        <Fab variant="extended" size="large" color="primary" >
                            <Typography>
                                <Box fontSize={14} fontWeight={300}> Visit campus </Box>
                            </Typography>
                        </Fab>
                    </CardContent>
                </Container>
            </Box>
            <Programbar />  
        </Layout>
    )
}

export default IndexPage
