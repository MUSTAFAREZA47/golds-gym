import React, { useEffect, useState, useMemo } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import Loader from './Loader'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const exercisesPerPage = 6

    useEffect(() => {
        const fetchExercisesData = async () => {
            if (exercises.length && bodyPart === 'all') return // Avoid refetching if data exists

            try {
                let exercisesData = []
                const apiUrl =
                    bodyPart === 'all'
                        ? 'https://exercisedb.p.rapidapi.com/exercises'
                        : `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`

                exercisesData = await fetchData(apiUrl, exerciseOptions)
                setExercises(exercisesData)
            } catch (error) {
                console.error('Error fetching exercises:', error)
                setExercises([]) // Ensure state is updated on error
            }
        }

        fetchExercisesData()
    }, [bodyPart, setExercises, exercises.length])

    // Pagination Logic
    const indexOfLastExercise = currentPage * exercisesPerPage
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
    const currentExercises = useMemo(
        () => exercises.slice(indexOfFirstExercise, indexOfLastExercise),
        [exercises, indexOfFirstExercise, indexOfLastExercise],
    )

    const paginate = (event, value) => {
        setCurrentPage(value)
        document
            .getElementById('exercises')
            ?.scrollIntoView({ behavior: 'smooth' })
    }

    if (!exercises.length) return <Loader />

    return (
        <Box id="exercises" sx={{ mt: { lg: '100px', xs: '50px' }, p: '20px' }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ fontSize: { lg: '44px', md: '36px', xs: '28px' } }}
                mb="40px"
                textAlign="center"
            >
                {exercises.length ? 'Showing Results' : 'No Exercises Found'}
            </Typography>
            <Stack
                direction="row"
                sx={{
                    gap: { lg: '80px', md: '50px', xs: '20px' },
                    flexWrap: 'wrap',
                }}
                justifyContent="center"
            >
                {currentExercises.map((exercise) => (
                    <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
            </Stack>
            <Stack sx={{ mt: { lg: '100px', xs: '60px' } }} alignItems="center">
                {exercises.length > exercisesPerPage && (
                    <Pagination
                        color="primary"
                        shape="rounded"
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="medium"
                        sx={{
                            '& .MuiPaginationItem-root': {
                                fontSize: { lg: '16px', xs: '12px' },
                                padding: { lg: '10px', xs: '6px' },
                            },
                        }}
                    />
                )}
            </Stack>
        </Box>
    )
}

export default Exercises
