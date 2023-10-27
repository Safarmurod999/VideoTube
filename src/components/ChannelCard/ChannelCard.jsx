import { CheckCircle } from '@mui/icons-material'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ChannelCard = ({ item }) => {
  return (
    <>
      <Box sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto"
      }}>
        <Link to={`/channel/${item?.id}`||`/channel/${item?.snippet?.channelId}`}>
          <CardContent sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <CardMedia image={item?.snippet?.thumbnails?.high?.url}
              alt={item?.snippet?.title}
              style={{ width: "180px", height: "180px", borderRadius: "50%", mb: 2, border: "1px solid #e3e3e3" }} />
            <Typography variant='h6'>
              {item?.snippet?.title} <CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
            </Typography>
            {item?.statistics?.subscriberCount && <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
              {parseInt(item.statistics.subscriberCount).toLocaleString("en-Us")} Subscribers</Typography>}
          </CardContent>
        </Link>
      </Box>
    </>
  )
}

export default ChannelCard