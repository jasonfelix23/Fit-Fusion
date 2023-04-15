import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/icons/dumbbell.png'

const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#fff3f4" mx={0}>
            <Stack gap="40px" alignItems="center" px="40px" pt="24px">
                <img src={Logo} alt='logo' width="64px" height="64px" />
                <Typography variant='h6' pb="40px" mt="20px">
                    Made with 💓 by Jason Felix.
                </Typography>
            </Stack>
        </Box>
    )
}

export default Footer