import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import bannerImg from '../../../Images/Banner/nguy-n-hi-p-maYeMl3xCrY-unsplash.jpg'
const Banner = () => {
    const bannerStyle = {
        background : `url(${bannerImg}) center center no-repeat`,
        padding : '200px 0px',
        backgroundSize : 'cover',
        textAlign:'center', 
        color:'white'
    
    }
    return (
        <div style={bannerStyle}>
            <Box sx={{width: '75%', mx:'auto'}}>
            <Typography variant='h3'>
            DONATE BLOOD AND GET REAL BLESSINGS.
            </Typography>
            <Typography variant='h5' sx={{my:3}}>
            Blood is the most precious gift that anyone can give to another person.
            Donating blood not only saves the life also save donor's lives.
            </Typography>
            <Button variant="outlined" color="error" size="large">
                Make You Donar
            </Button>
            </Box>
        </div>
    );
};

export default Banner;