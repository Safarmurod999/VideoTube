import { Box, Container } from "@mui/material"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import ChannelCard from "../ChannelCard/ChannelCard";
import { ApiService } from "../../service/api.service"
import Videos from "../Videos/Videos";
function Channel() {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    try {
      const getData = async () => {
        const data = await ApiService.fetching(
          `channels?part=snippet&id=${id}`
        );

        setDetails(data.items[0]);
        const relatedVideos = await ApiService.fetching(`search?channelId=${id}&part=snippet%2Cid&order=date`);
        setVideos(relatedVideos.items);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  return (
    <Box minHeight={'95vh'} mt={'1vh'}>
      <Box>
        <Box width={'100%'} height={'200px'} zIndex={10} sx={{
          backgroundImage: `url(${details?.brandingSettings?.image?.bannerExternalUrl})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',backgroundPosition:'center',objectFit:'cover'
        }} />
        <ChannelCard item={details
        } />
      </Box>
      <Container maxWidth={"90%"} >
        <Videos videos={videos}/>
      </Container>
    </Box>
  )
}

export default Channel