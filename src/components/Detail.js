import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({ exerciseDetail }) => {
    if (!exerciseDetail) {
        return <Typography>Loading exercise details...</Typography>
    }

    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail

    const extraDetail = [
        { icon: BodyPartImage, name: bodyPart },
        { icon: TargetImage, name: target },
        { icon: EquipmentImage, name: equipment },
    ]

    return (
        <Stack
            gap={{ lg: '60px', xs: '30px' }}
            sx={{
                flexDirection: { lg: 'row', xs: 'column' },
                p: '20px',
                alignItems: 'center',
                textAlign: { xs: 'center', lg: 'left' }, // Center text on small screens
            }}
        >
            <img
                src={gifUrl || 'https://via.placeholder.com/500'}
                alt={name}
                loading="lazy"
                className="detail-image"
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    height: 'auto',
                    borderRadius: '10px',
                }}
            />
            <Stack sx={{ gap: { lg: '35px', xs: '20px' }, maxWidth: '600px' }}>
                <Typography
                    sx={{ fontSize: { lg: '64px', xs: '30px' } }}
                    fontWeight={700}
                    textTransform="capitalize"
                >
                    {name}
                </Typography>
                <Typography
                    sx={{ fontSize: { lg: '24px', xs: '18px' } }}
                    color="#4F4C4C"
                >
                    Exercises keep you strong.{' '}
                    <span style={{ textTransform: 'capitalize' }}>{name}</span>{' '}
                    is one of the best exercises to target your {target}. It
                    will help you improve your mood and gain energy.
                </Typography>
                {extraDetail.map((item) => (
                    <Stack
                        key={item.name}
                        direction="row"
                        gap="24px"
                        alignItems="center"
                        sx={{
                            justifyContent: { xs: 'center', lg: 'flex-start' },
                        }}
                    >
                        <Button
                            sx={{
                                background: '#FFF2DB',
                                borderRadius: '50%',
                                width: { xs: '80px', sm: '90px', md: '100px' },
                                height: { xs: '80px', sm: '90px', md: '100px' },
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <img
                                src={item.icon}
                                alt={item.name}
                                style={{
                                    width: '50px',
                                    height: '50px',
                                }}
                            />
                        </Button>
                        <Typography
                            textTransform="capitalize"
                            sx={{ fontSize: { lg: '30px', xs: '20px' } }}
                        >
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}

export default Detail
