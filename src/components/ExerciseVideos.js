import React from 'react'
import { Typography, Box, Stack } from '@mui/material'
import Loader from './Loader'

const ExerciseVideos = ({ exerciseVideos = [], name }) => {
    if (!exerciseVideos?.length) return <Loader />

    return (
        <Box sx={{ mt: { lg: '150px', xs: '20px' }, p: '20px' }}>
            <Typography
                fontWeight={700}
                color="#000"
                mb="30px"
                textAlign="center"
                sx={{ fontSize: { lg: '40px', md: '35px', xs: '24px' } }}
            >
                Watch{' '}
                <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>
                    {name}
                </span>{' '}
                Exercise Videos
            </Typography>
            <Stack
                direction={{ lg: 'row', xs: 'column' }}
                spacing={{ lg: 10, md: 5, xs: 3 }}
                alignItems="flex-start"
                justifyContent="center"
                flexWrap="wrap"
            >
                {exerciseVideos.slice(0, 3).map((item) => (
                    <a
                        key={item.video.videoId}
                        className="exercise-video"
                        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Watch ${item.video.title} on YouTube`}
                        style={{
                            width: '100%',
                            maxWidth: '400px',
                            textDecoration: 'none',
                        }}
                    >
                        <img
                            style={{
                                width: '100%',
                                borderRadius: '12px',
                                objectFit: 'cover',
                            }}
                            src={
                                item.video.thumbnails?.[0]?.url ||
                                '/placeholder.jpg'
                            }
                            alt={item.video.title || 'Exercise Video'}
                        />
                        <Box mt={1}>
                            <Typography
                                sx={{
                                    fontSize: {
                                        lg: '22px',
                                        md: '20px',
                                        xs: '18px',
                                    },
                                }}
                                fontWeight={600}
                                color="#000"
                            >
                                {item.video.title || 'Unknown Video'}
                            </Typography>
                            <Typography fontSize="14px" color="gray">
                                {item.video.channelName || 'Unknown Channel'}
                            </Typography>
                        </Box>
                    </a>
                ))}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos
