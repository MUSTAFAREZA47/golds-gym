import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png' // Ensure this path is correct

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    const handleClick = () => {
        if (setBodyPart) {
            setBodyPart(item)
        } else {
            console.error('setBodyPart function is not provided.')
        }

        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
        }
    }

    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                borderTop: bodyPart === item ? '4px solid #FF2625' : 'none',
                background: '#fff',
                borderBottomLeftRadius: '20px',
                width: { xs: '150px', sm: '200px', md: '250px', lg: '270px' },
                height: { xs: '180px', sm: '220px', md: '260px', lg: '282px' },
                cursor: 'pointer',
                gap: { xs: '20px', sm: '30px', md: '40px', lg: '47px' },
                transition: '0.3s',
                '&:hover': {
                    transform: 'scale(1.05)',
                },
            }}
            onClick={handleClick}
        >
            <img src={Icon} alt="dumbbell" width="40px" height="40px" />
            <Typography
                fontSize={{ xs: '16px', sm: '20px', md: '22px', lg: '24px' }}
                fontWeight="bold"
                fontFamily="Alegreya"
                color="#3A1212"
                textTransform="capitalize"
            >
                {item}
            </Typography>
        </Stack>
    )
}

export default BodyPart
