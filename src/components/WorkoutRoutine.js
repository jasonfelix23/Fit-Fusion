import React, { useState } from 'react'
import { Stack, Box, Button, Typography } from '@mui/material'
import { routinedata } from '../utils/routinedata'

import ExerciseCard from './ExerciseCard'
import RestImage from '../assets/icons/panda.png'

const WorkoutRoutine = () => {
    const workoutDays = ["Chest / Shoulder / Triceps", "Back / Biceps", "Legs", "Rest", "Shoulders", "Arms", "Cardio"]
    const [day, setDay] = useState(0);

    const handleClick = (index) => {
        setDay(index);
    }
    return (
        <Box>
            <Stack direction="row" spacing={2} justifyContent="space-around" mt={8} mb={8}>
                {routinedata.map((item, index) => (
                    <Button key={index} onClick={() => handleClick(index)} variant={index === day ? "contained" : "outlined"} color="error"
                        sx={{ backgroundColor: index === day ? "#FF2625" : "transparent", padding: "20px", borderRadius: "35%", fontWeight: "bold" }}
                    >{item.length !== 0 ? `Day ${index + 1}` : "Rest"}</Button>
                ))}
            </Stack>
            <Typography fontWeight={700} textAlign="center" mb="50px"
                sx={{ fontSize: { lg: "44px", sm: "30px" } }}
            >
                {workoutDays[day]}
            </Typography>
            <Stack direction="row" sx={{ gap: { lg: '110px', xs: "50px" } }} flexWrap="wrap" justifyContent="center">
                {routinedata[day].length !== 0 ? routinedata[day].map((exercise, i) => (
                    <ExerciseCard key={i} exercise={exercise} />
                )) : <img src={RestImage} alt="Rest" width="360px" height="360px" />}
            </Stack>
        </Box>
    )
}

export default WorkoutRoutine