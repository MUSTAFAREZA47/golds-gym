import React from 'react'
import { Typography, Box, Stack } from '@mui/material'

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const Section = ({ title, data }) => (
    <>
        <Typography
            sx={{
                fontSize: { lg: '44px', xs: '25px' },
                ml: '20px',
                mt: { lg: '100px', xs: '60px' },
            }}
            fontWeight={700}
            color="#000"
            mb="33px"
        >
            Similar{' '}
            <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
                {title}
            </span>{' '}
            exercises
        </Typography>
        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
            {data.length ? <HorizontalScrollbar data={data} /> : <Loader />}
        </Stack>
    </>
)

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
        <Section title="Target Muscle" data={targetMuscleExercises} />
        <Section title="Equipment" data={equipmentExercises} />
    </Box>
)

export default SimilarExercises
