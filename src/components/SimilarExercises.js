import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercisesDetails, equipmentExerciseDetails }) => {
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
            <Typography variant="h3" mb={5}>
                Exercises that target the same muscle group
            </Typography>
            <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
                {targetMuscleExercisesDetails.length ?
                    <HorizontalScrollBar data={targetMuscleExercisesDetails} isBodyParts={false} />
                    : <Loader />
                }
            </Stack>
            <Typography variant="h3" mb={5}>
                Exercises that use the same equipment
            </Typography>
            <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
                {equipmentExerciseDetails.length ?
                    <HorizontalScrollBar data={equipmentExerciseDetails} isBodyParts={false} />
                    : <Loader />
                }
            </Stack>

        </Box>
    )
}

export default SimilarExercises