import React from "react";
import { category } from "../Constants/index";
import { Stack } from "@mui/material";
import { colors } from "../Constants/colors";
function Category({ selectedCategoryHandler, selectedCategory }) {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll", padding: "10px 0" }}>
      {category.map((item) => {
        return (
          <button
            key={item.name}
            className="category-btn"
            onClick={() => {selectedCategoryHandler(item.name)}}
            style={{
              background: item.name === selectedCategory && colors.secondary,
            }}
          >
            <span
              style={{
                color: item.name === selectedCategory && colors.primary,
                marginRight: "15px",
                textAlign:"center"
              }}
            >
              {item.icon}
            </span>
            <span
              style={{
                color: item.name === selectedCategory && colors.primary,
              }}
            >
              {item.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
}

export default Category;
