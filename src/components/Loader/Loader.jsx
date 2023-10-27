import React from 'react'

import { Box, CircularProgress, Stack } from '@mui/material';
function Loader() {
    return (
        <Box minHeight={"90vh"} width={"100%"} height={"100%"}>
            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
                <CircularProgress/>
            </Stack>
        </Box>
    )
}

export default Loader