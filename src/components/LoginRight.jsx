import { styleForRightImage } from "../pages/StyleLogin";

import { Box, createTheme } from "@mui/material";

const theme = createTheme({});

export default function LoginRight() {
  return (
   
      <Box
      component='div'
        sx={{
          ...styleForRightImage,
          [theme.breakpoints.down("md")]: {
            display: "none"
          }
        }}
      />
    
  );
}
