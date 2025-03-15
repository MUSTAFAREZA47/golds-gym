import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import Loader from '../components/Loader'

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState(null)
    const [exerciseVideos, setExerciseVideos] = useState([])
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
    const [equipmentExercises, setEquipmentExercises] = useState([])
    const { id } = useParams()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })

        const fetchExercisesData = async () => {
            try {
                const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
                const youtubeSearchUrl =
                    'https://youtube-search-and-download.p.rapidapi.com'

                const exerciseDetailData = await fetchData(
                    `${exerciseDbUrl}/exercises/exercise/${id}`,
                    exerciseOptions,
                )
                if (!exerciseDetailData) return

                setExerciseDetail(exerciseDetailData)

                // Fetch dependent data only after exercise details are loaded
                const [
                    exerciseVideosData,
                    targetMuscleExercisesData,
                    equipmentExercisesData,
                ] = await Promise.all([
                    fetchData(
                        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
                        youtubeOptions,
                    ),
                    fetchData(
                        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
                        exerciseOptions,
                    ),
                    fetchData(
                        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
                        exerciseOptions,
                    ),
                ])

                setExerciseVideos(exerciseVideosData?.contents || [])
                setTargetMuscleExercises(targetMuscleExercisesData || [])
                setEquipmentExercises(equipmentExercisesData || [])
            } catch (error) {
                console.error('Failed to fetch exercise details:', error)
            }
        }

        fetchExercisesData()
    }, [id])

    if (!exerciseDetail) return <Loader />

    return (
        <Box sx={{ mt: { lg: '96px', xs: '60px' }, p: '20px' }}>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos
                exerciseVideos={exerciseVideos}
                name={exerciseDetail.name}
            />
            <SimilarExercises
                targetMuscleExercises={targetMuscleExercises}
                equipmentExercises={equipmentExercises}
            />
        </Box>
    )
}

export default ExerciseDetail
