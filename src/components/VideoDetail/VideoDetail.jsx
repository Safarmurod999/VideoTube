import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiService } from '../../service/api.service';
import { Box, Chip, Stack, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import { FavoriteOutlined, MarkChatRead, Tag, Visibility } from '@mui/icons-material';
import Videos from "../Videos/Videos";
function VideoDetail() {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [relatedData, setRelatedData] = useState([]);
  useEffect(() => {
    try {
      const getData = async () => {
        const data = await ApiService.fetching(
          `videos?part=contentDetails,snippet,statistics&id=${id}`
        );

        setDetails(data.items[0]);
        const relatedVideos = await ApiService.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`);
        setRelatedData(relatedVideos.items);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <Box minHeight={'90vh'} mb={10} padding={"30px"}>
      <Box display={'flex'} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        <Box width={{ xs: "100%", lg: "75%" }}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className={'react-player'} controls />
          {
            details?.snippet?.tags.map((item, idx) => (
              <Chip label={item}
                key={idx}
                sx={{ marginTop: '10px', cursor: 'pointer', ml: '10px' }}
                deleteIcon={<Tag />}
                onDelete={() => { }}
                variant='outlined'
              />
            ))
          }
          <Typography variant='h5' fontWeight={'bold'} px={2} >
            {details?.snippet?.title}
          </Typography>
          <Typography variant='subtitle2' px={2} sx={{ opacity: '.7' }}>
            {details?.snippet?.description}
          </Typography>
          <Stack direction={"row"} gap={"20px"} alignItems={"center"} py={1} px={2}>
            <Stack sx={{ opacity: 0.7 }} direction={"row"} alignItems={"center"} gap={'3px'}>
              <Visibility />
              {parseInt(details?.statistics?.viewCount).toLocaleString()} views
            </Stack>
            <Stack sx={{ opacity: 0.7 }} direction={"row"} alignItems={"center"} gap={'3px'}>
              <FavoriteOutlined />
              {parseInt(details?.statistics?.likeCount).toLocaleString()} likes
            </Stack>
            <Stack sx={{ opacity: 0.7 }} direction={"row"} alignItems={"center"} gap={'3px'}>
              <MarkChatRead />
              {parseInt(details?.statistics?.commentCount).toLocaleString()} count
            </Stack>
          </Stack>
        </Box>
        <Box width={{ xs: "100%", lg: "25%" }}
          px={2} py={{ md: 1, xs: 5 }} justifyContent={"center"} alignItems={"center"} overflow={"scroll"} maxHeight={"120vh"}>
          <Videos videos={relatedData} />
        </Box>
      </Box>
    </Box>
  )
}

export default VideoDetail