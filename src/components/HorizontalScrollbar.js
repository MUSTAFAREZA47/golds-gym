import React, { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { Box, Typography, IconButton } from '@mui/material'

import ExerciseCard from './ExerciseCard'
import BodyPart from './BodyPart'
import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext)

    return (
        <IconButton
            onClick={() => scrollPrev()}
            sx={{
                position: 'absolute',
                left: 0,
                zIndex: 10,
                background: 'rgba(0,0,0,0.2)',
                '&:hover': { background: 'rgba(0,0,0,0.4)' },
            }}
        >
            <img src={LeftArrowIcon} alt="left-arrow" width="30px" />
        </IconButton>
    )
}

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext)

    return (
        <IconButton
            onClick={() => scrollNext()}
            sx={{
                position: 'absolute',
                right: 0,
                zIndex: 10,
                background: 'rgba(0,0,0,0.2)',
                '&:hover': { background: 'rgba(0,0,0,0.4)' },
            }}
        >
            <img src={RightArrowIcon} alt="right-arrow" width="30px" />
        </IconButton>
    )
}

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
    <Box sx={{ position: 'relative', width: '100%', overflowX: 'hidden' }}>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemId={item.id || item}
                    title={item.id || item}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        m: { lg: '0 40px', md: '0 30px', xs: '0 10px' },
                    }}
                >
                    {bodyParts ? (
                        <BodyPart
                            item={item}
                            setBodyPart={setBodyPart}
                            bodyPart={bodyPart}
                        />
                    ) : (
                        <ExerciseCard exercise={item} />
                    )}
                </Box>
            ))}
        </ScrollMenu>
    </Box>
)

export default HorizontalScrollbar
