import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard, Loader } from "../index";

function Videos({ videos }) {
  if (!videos.length) {
    return (<Loader />);
  }
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      alignItems={"start"}
      gap={2}
    >
      {videos.map((item, idx) => {
        return <Box key={item.id.videoId ?? idx}>
          {item.id.videoId && <VideoCard item={item} />}
          {item.id.channelId && <ChannelCard item={item} />}
        </Box>;
      })}
    </Stack>
  );
}

export default Videos;
