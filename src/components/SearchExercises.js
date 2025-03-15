import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])

    // Fetch body parts list on component mount
    useEffect(() => {
        const fetchExercisesData = async () => {
            try {
                const bodyPartsData = await fetchData(
                    'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
                    exerciseOptions,
                )
                setBodyParts(['all', ...bodyPartsData])
            } catch (error) {
                console.error('Error fetching body parts:', error)
            }
        }

        fetchExercisesData()
    }, [])

    // Function to fetch exercises based on search input
    const handleSearch = async () => {
        if (!search.trim()) return // Prevent empty search queries

        try {
            const exercisesData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises',
                exerciseOptions,
            )

            const searchedExercises = exercisesData.filter(
                (item) =>
                    item.name.toLowerCase().includes(search) ||
                    item.target.toLowerCase().includes(search) ||
                    item.equipment.toLowerCase().includes(search) ||
                    item.bodyPart.toLowerCase().includes(search),
            )

            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })

            setExercises(searchedExercises)
            setSearch('') // Clear search field after execution
        } catch (error) {
            console.error('Error fetching exercises:', error)
        }
    }

    // Handle Enter key press for search
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
            <Typography
                fontWeight={700}
                sx={{ fontSize: { lg: '44px', xs: '30px' } }}
                mb="49px"
                textAlign="center"
            >
                Awesome Exercises You <br /> Should Know
            </Typography>

            {/* Search Bar */}
            <Box
                position="relative"
                mb="72px"
                width="100%"
                display="flex"
                justifyContent="center"
            >
                <TextField
                    fullWidth
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px',
                        },
                        width: { lg: '800px', xs: '90%' },
                        backgroundColor: '#fff',
                        borderRadius: '40px',
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    onKeyPress={handleKeyPress}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button
                    sx={{
                        bgcolor: '#FF2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '150px', xs: '80px' },
                        height: '56px',
                        position: 'absolute',
                        right: { lg: '50px', xs: '10px' },
                        fontSize: { lg: '18px', xs: '14px' },
                    }}
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>

            {/* Horizontal Scrollbar for Body Parts */}
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollbar
                    data={bodyParts}
                    bodyParts
                    setBodyPart={setBodyPart}
                    bodyPart={bodyPart}
                />
            </Box>
        </Stack>
    )
}

export default SearchExercises
