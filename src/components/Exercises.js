import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import Loader from './Loader'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [exercisesPerPage] = useState(6)

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = []

            if (bodyPart === 'all') {
                exercisesData = await fetchData(
                    'https://exercisedb.p.rapidapi.com/exercises',
                    exerciseOptions,
                )
            } else {
                exercisesData = await fetchData(
                    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
                    exerciseOptions,
                )
            }

            setExercises(exercisesData)
        }

        fetchExercisesData()
    }, [bodyPart, setExercises])

    // Pagination Logic
    const indexOfLastExercise = currentPage * exercisesPerPage
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
    const currentExercises = exercises.slice(
        indexOfFirstExercise,
        indexOfLastExercise,
    )

    const paginate = (event, value) => {
        setCurrentPage(value)
        window.scrollTo({ top: 1600, behavior: 'smooth' })
    }

    if (!currentExercises.length) return <Loader />

    return (
        <Box id="exercises" sx={{ mt: { lg: '100px', xs: '50px' }, p: '20px' }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ fontSize: { lg: '44px', md: '36px', xs: '28px' } }}
                mb="40px"
                textAlign="center"
            >
                Showing Results
            </Typography>
            <Stack
                direction="row"
                sx={{
                    gap: { lg: '80px', md: '50px', xs: '20px' },
                    flexWrap: 'wrap',
                }}
                justifyContent="center"
            >
                {currentExercises.map((exercise, idx) => (
                    <ExerciseCard key={idx} exercise={exercise} />
                ))}
            </Stack>
            <Stack sx={{ mt: { lg: '100px', xs: '60px' } }} alignItems="center">
                {exercises.length > exercisesPerPage && (
                    <Pagination
                        color="primary"
                        shape="rounded"
                        defaultPage={1}
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
