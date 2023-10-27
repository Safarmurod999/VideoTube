import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { VideoCard, ChannelCard,Loader } from "../index";
import { ApiService } from '../../service/api.service';
function Search() {

  let [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    try {
      const getData = async () => {
        const data = await ApiService.fetching(
          `search?part=snippet&q=${id}`
        );

        setVideos(data.items);
      };

      getData();
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  return (
    <>
      <Typography pt={"40px"} width={"100%"}
        fontSize={"40px"}
        textAlign={"center"}>Search results for {id}</Typography>
      <Stack
        width={"100%"}
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"start"}
        gap={2}
        pt={"40px"}
      >
        {videos.map((item, idx) => {
          return <Box key={item.id.videoId ?? idx}>
            {item.id.videoId && <VideoCard item={item} />}
            {item.id.channelId && <ChannelCard item={item} />}
          </Box>;
        })}    </Stack></>
  )
}

export default Search