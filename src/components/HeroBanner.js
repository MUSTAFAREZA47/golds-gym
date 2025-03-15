import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.jpg'

const HeroBanner = () => (
    <Box
        sx={{
            position: 'relative',
            height: { lg: '900px', xs: '800px' }, // Adjusted for better mobile view
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${HeroBannerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            textAlign: 'center',
            px: { xs: 2, sm: 4 }, // Padding for responsiveness

            // Overlay Effect
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity here (0.5 = 50% dark)
                zIndex: 1,
            },
        }}
    >
        {/* Content Wrapper to Keep Text Above Overlay */}
        <Box sx={{ position: 'relative', zIndex: 2 }}>
            <Typography
                color="#FF2625"
                fontWeight="600"
                sx={{
                    mt: { lg: '500px', xs: '400px' },
                    fontSize: { lg: '26px', xs: '16px' },
                }}
            >
                Fitness Club
            </Typography>

            <Typography
                fontWeight={700}
                sx={{
                    fontSize: { lg: '50px', xs: '28px' },
                    mt: { lg: '20px', xs: '10px' },
                    lineHeight: { lg: '60px', xs: '34px' },
                }}
            >
                Sweat, Smile & Repeat
            </Typography>

            <Typography
                sx={{
                    fontSize: { lg: '22px', xs: '14px' },
                    lineHeight: { lg: '35px', xs: '22px' },
                    mt: { lg: '20px', xs: '10px' },
                    px: { xs: 3, sm: 5 },
                }}
            >
                Check out the most effective exercises personalized to you
            </Typography>

            <Stack>
                <Button
                    href="#exercises"
                    sx={{
                        mt: { lg: '30px', xs: '15px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        padding: { lg: '14px 24px', xs: '10px 18px' },
                        backgroundColor: '#FF2625',
                        color: 'white',
                        borderRadius: '8px',
                        '&:hover': { backgroundColor: '#d11f1a' },
                    }}
                >
                    Explore Exercises
                </Button>
            </Stack>
        </Box>
    </Box>
)

export default HeroBanner
