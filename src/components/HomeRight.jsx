import { styleForRightImage } from "../pages/StyleHome";

import { Box, Paper } from "@mui/material";

export default function HomeRight() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#fff"
      }}
    >
      <Paper sx={{ ...styleForRightImage }} />
    </Box>
  );
}
