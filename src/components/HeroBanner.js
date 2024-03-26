import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import HeroBannerImage from "../assets/images/gym-3.png"

const HeroBanner = ({ isHome }) => {
    const displayContentForHome = (
        <Box>
            <Typography color="#FF2625" fontSize="24px" fontWeight="600px">
                This is fitness club
            </Typography>
            <Typography fontWeight={700}
                sx={{ fontSize: { lg: "44px", sm: "40px" } }}
                mb="23px" mt="20px">
                Sweat, Smile <br /> And Repeat
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={4}>
                Check out the most effective exercises
            </Typography>
            <Button variant="contained" color="error" href='#exercises'
                sx={{ backgroundColor: "#FF2625", padding: "12px" }}
            >Explore Exercises</Button>
        </Box>);
    const displayContentForMyRoutine = (
        <Box>
            <Typography fontWeight={700}
                sx={{ fontSize: { lg: "34px", sm: "20px" } }}
                mb="23px" mt="20px">
                "The only bad workout<br /> is the one that didn't happen."
            </Typography>
            <Typography color="#FF2625" fontSize="24px" fontWeight="600px" mb={10}>
                Most effective routine
            </Typography>
        </Box>
    );
    return (
        <Box sx={{
            mt: { lg: "212px", sm: "70px" },
            ml: { sm: "40px" }
        }} position="relative" p="20px">
            {isHome ? displayContentForHome : displayContentForMyRoutine}
            <Typography
                fontSize="200px"
                fontWeight="600"
                color="#FF2625"
                sx={{
                    opacity: 0.1,
                    display: { lg: "block", xs: "none" }
                }}
            >
                {isHome ? `Exercises` : `Routine`}
            </Typography>
            <img src={HeroBannerImage} className='hero-banner-img' alt="banner" />
        </Box >
    )
}

export default HeroBanner