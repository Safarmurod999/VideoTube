import { Box, Stack } from "@mui/material";
import { logo } from "../Constants";
import { colors } from "../Constants/colors";
import { Link } from "react-router-dom";
import {SearchBar} from "../index";

function Navbar() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{
        position: "sticky",
        top: "0",
        left: "0",
        zIndex: "999",
        background: colors.primary,
      }}
    >
      <Link to={"/"}>
        {" "}
        <img src={logo} alt="logo" width={"120"} style={{paddingRight:"20px"}} />
      </Link>
      <SearchBar/>
    </Stack>
  );
}

export default Navbar;
