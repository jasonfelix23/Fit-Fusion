import React from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import WorkoutRoutine from '../components/WorkoutRoutine';

const MyRoutine = () => {
    return (
        <Box>
            <HeroBanner isHome={false} />
            <WorkoutRoutine />
        </Box>
    )
}

export default MyRoutine