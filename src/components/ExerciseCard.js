import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
    if (!exercise) {
        return <Typography>Loading exercise...</Typography>
    }

    return (
        <Link
            className="exercise-card"
            to={`/exercise/${exercise?.id || '#'}`}
            style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: '#fff',
                borderRadius: '10px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                padding: '15px',
                transition: 'transform 0.3s',
            }}
            sx={{
                '&:hover': { transform: 'scale(1.05)' },
            }}
        >
            <img
                src={exercise.gifUrl || 'https://via.placeholder.com/400'}
                alt={exercise.name || 'Exercise'}
                loading="lazy"
                style={{
                    width: '100%',
                    maxWidth: '400px',
                    height: 'auto',
                    borderRadius: '10px',
                }}
            />
            <Stack
                direction="row"
                justifyContent="center"
                flexWrap="wrap"
                gap="10px"
                mt="10px"
            >
                <Button
                    sx={{
                        color: '#fff',
                        background: '#FFA9A9',
                        fontSize: { lg: '14px', xs: '12px' },
                        borderRadius: '20px',
                        textTransform: 'capitalize',
                        px: { xs: '10px', sm: '15px' },
                        py: { xs: '5px', sm: '8px' },
                    }}
                >
                    {exercise.bodyPart || 'Unknown'}
                </Button>
                <Button
                    sx={{
                        color: '#fff',
                        background: '#FCC757',
                        fontSize: { lg: '14px', xs: '12px' },
                        borderRadius: '20px',
                        textTransform: 'capitalize',
                        px: { xs: '10px', sm: '15px' },
                        py: { xs: '5px', sm: '8px' },
                    }}
                >
                    {exercise.target || 'Unknown'}
                </Button>
            </Stack>
            <Typography
                color="#000"
                fontWeight="bold"
                sx={{
                    fontSize: { lg: '24px', xs: '18px' },
                    textAlign: 'center',
                    mt: '10px',
                    pb: '10px',
                    textTransform: 'capitalize',
                }}
            >
                {exercise.name || 'Exercise'}
            </Typography>
        </Link>
    )
}

export default ExerciseCard
