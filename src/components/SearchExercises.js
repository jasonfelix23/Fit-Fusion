import React, { useState, useEffect } from 'react';
import { Button, TextField, Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchdata';

import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setsearch] = useState('');
    const [bodyParts, setbodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions
            );
            setbodyParts(['all', ...bodyPartsData]);
        }
        fetchExercisesData();
    }, [])

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions
            );
            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
            )
            setsearch('');
            setExercises(searchedExercises);
        }
    }
    return (
        <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
            <Typography fontWeight={700} textAlign="center" mb="50px"
                sx={{ fontSize: { lg: "44px", sm: "30px" } }}
            >
                Awesome Exercises You <br /> should know.
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: "700",
                            border: "none",
                            borderRadius: "10px"
                        },
                        width: {
                            lg: "1170px", xs: "350px"
                        },
                        backgroundColor: '#fff',
                        borderRadius: '40px',
                    }}
                    height="76px"
                    value={search}
                    onChange={(e) => setsearch(e.target.value.toLowerCase())}
                    placeholder='Search Exercises'
                    type='text'
                />
                <Button className='search-btn'
                    sx={{
                        bgcolor: '#FF2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: {
                            lg: '20px', xs: '14px'
                        },
                        height: '56px',
                        position: 'absolute',
                        right: '0'
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: "20px" }}>
                <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        </Stack>
    )
}

export default SearchExercises