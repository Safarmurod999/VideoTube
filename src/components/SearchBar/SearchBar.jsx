import { IconButton, Paper } from "@mui/material";
import { colors } from "../Constants/colors";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchBar() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const changeHandler = (e) => {
    e.preventDefault();
    if (value) {
      navigate(`/search/${value}`);

    }
  }
  return (
    <Paper
    onSubmit={changeHandler}
      component={"form"}
      sx={{ width: { xs: "auto", sm: "350px" }, maxWidth: "350px", display: "flex", border: `1px solid ${colors.secondary}`, pl: 2, boxShadow: "none" }}
    >
      <input style={{ flexGrow: 1 }}
        type="text"
        placeholder="Search..."
        className="search-bar"
        value={value}
        onChange={e => setValue(e.target.value)} />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
