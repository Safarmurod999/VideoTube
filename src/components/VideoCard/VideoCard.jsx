import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { colors } from "../Constants/colors";
import moment from "moment/moment";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

function VideoCard({ item }) {

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "360px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={`/video/${item.id.videoId}`}>
        <img
          src={item?.snippet?.thumbnails?.high?.url}
          alt={item?.snippet?.title}
          style={{ width: "100%", height: "180px" }}
        /></Link>
      <CardContent
        sx={{
          width: { xs: "100%", sm: "360px", md: "320px" },
          background: colors.primary,
          height: "200px",
          position: "relative",
        }}
      >
        <Link to={`/video/${item.id.videoId}`}>
          <Typography my={"5px"} sx={{ opacity: ".4" }}>
            {moment(item?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant={"subtitle1"} fontWeight={"bold"}>
            {item.snippet.title.slice(0, 30)}
          </Typography>

          <Typography variant={"subtitle2"} sx={{ opacity: ".6" }}>
            {item.snippet.description.slice(0, 50)}
          </Typography>
        </Link>
        <Link to={`/channel/${item?.snippet?.channelId}`}>
          <Stack
            direction={"row"}
            position={"absolute"}
            bottom={"10px"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Avatar src={item?.snippet?.thumbnails?.high?.url} />
            <Typography variant={"subtitle2"} color={"gray"}>
              {item.snippet.channelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
