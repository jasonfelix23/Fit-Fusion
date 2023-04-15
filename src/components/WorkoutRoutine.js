import React, { useState } from 'react'
import { Stack, Box, Button, Typography } from '@mui/material'
import { routinedata } from '../utils/routinedata'

import ExerciseCard from './ExerciseCard'

const WorkoutRoutine = () => {
    const workoutDays = ["Chest / Shoulder / Triceps", "Back / Biceps"]
    const [day, setDay] = useState(0);

    const handleClick = (index) => {
        setDay(index);
    }
    return (
        <Box>
            <Stack direction="row" spacing={2} justifyContent="space-around" mt={8} mb={8}>
                {routinedata.map((item, index) => (
                    <Button key={index} onClick={() => handleClick(index)} variant={index === day ? "contained" : "outlined"} color="error" href='#exercises'
                        sx={{ backgroundColor: index === day ? "#FF2625" : "transparent", padding: "20px", borderRadius: "35%", fontWeight: "bold" }}
                    >Day {index + 1}</Button>
                ))}
            </Stack>
            <Typography fontWeight={700} textAlign="center" mb="50px"
                sx={{ fontSize: { lg: "44px", sm: "30px" } }}
            >
                {workoutDays[day]}
            </Typography>
            <Stack direction="row" sx={{ gap: { lg: '110px', xs: "50px" } }} flexWrap="wrap" justifyContent="center">
                {routinedata[day].map((exercise, i) => (
                    <ExerciseCard key={i} exercise={exercise} />
                ))}
            </Stack>
        </Box>
    )
}

export default WorkoutRoutine