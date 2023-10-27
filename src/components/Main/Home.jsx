import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { colors } from "../Constants/colors";
import { Category, Videos } from "../index";
import { ApiService } from "../../service/api.service";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const selectedCategoryHandler = (category) => setSelectedCategory(category);
  useEffect(() => {
    try {
      const getData = async () => {
        const data = await ApiService.fetching(
          `search?part=snippet&q=${selectedCategory}`
        );

        setVideos(data.items);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, [selectedCategory]);

  return (
    <Stack>
      <Category
        selectedCategoryHandler={selectedCategoryHandler}
        selectedCategory={selectedCategory}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant="h4" fontWeight={"bold"} mb={2} textAlign={"center"}>
            {selectedCategory}{" "}
            <span style={{ color: `${colors.secondary}` }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
}

export default Home;
