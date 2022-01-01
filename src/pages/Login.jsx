import { Box, Grid } from "@mui/material";
import { styleForBox, styleForGrid } from "../pages/StyleLogin";

import LoginRight from "../components/LoginRight";
import LoginLeft from "../components/LoginLeft";

export default function Login() {
  return (
    <Box
      sx={{
        ...styleForBox
      }}
    >
      <Grid container sx={{ ...styleForGrid }}>
        <Grid item xs={12} sm={12} md={8} sx={{ padding: "50px" }}>
          <LoginLeft />
        </Grid>
        <Grid item xs={0} sm={0} md={4}>
          <LoginRight />
        </Grid>
      </Grid>
    </Box>
  );
}
