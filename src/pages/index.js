import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../images/slider.jpg"
import SEO from "../components/seo"
import {
        CardMedia,
        Card,
        Container,
        Fab,
        Box,
        Typography,
        CardContent
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles({
    slider: {
        height: 500,
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
    }
})

const IndexPage = () => {
    const classes = useStyles();
    return (
        <Layout>
            <SEO title="Home" />
            <CardMedia  className={ classes.slider } image={Image} />
            <Container maxWidth="xl" >
                <CardContent>
                    <Typography>
                        <Box>How do  get to the University?</Box>
                        <Box fontSize={65} fontWeight={600} >Welcome to Eduma Education way of school</Box>
                    </Typography>
                    <Fab variant="extended" size="medium" color="primary" >
                        <Typography>
                            <Box fontSize={14} fontWeight={300}> Visit campus </Box>
                        </Typography>
                    </Fab>
                </CardContent>
            </Container>
        </Layout>
    )
}

export default IndexPage
