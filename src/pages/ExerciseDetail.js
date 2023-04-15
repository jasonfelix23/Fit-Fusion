import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchdata'
import Detail from "../components/Detail"
import ExerciseVideos from "../components/ExerciseVideos"
import SimilarExercises from "../components/SimilarExercises"

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const [targetMuscleExercisesDetails, setTargetMuscleExercisesDetails] = useState({});
    const [equipmentExerciseDetails, setEquipmentExerciseDetails] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions);
            setExerciseDetail(exerciseDetailData);

            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
            setExerciseVideos(exerciseVideosData.contents);

            const targetMuscleExercisesData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
            setTargetMuscleExercisesDetails(targetMuscleExercisesData);

            const equipmentExercisesData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
            setEquipmentExerciseDetails(equipmentExercisesData);

        }
        fetchExercisesData();
    }, [id])

    return (
        <Box mx={1} px={1}>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercisesDetails={targetMuscleExercisesDetails} equipmentExerciseDetails={equipmentExerciseDetails} />
        </Box>
    )
}

export default ExerciseDetail