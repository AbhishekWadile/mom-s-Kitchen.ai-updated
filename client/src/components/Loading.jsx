import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Loading = ({show}) => {
  return show && (
    <div className="w-[30vh] h-[30vh]">
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>
  );
}

export default Loading;
