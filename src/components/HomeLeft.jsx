import { Box, Button, Typography } from "@mui/material";
import { styleForTypography, styleForButton } from "../pages/StyleHome";

export default function HomeLeft() {
  return (
    <Box
      sx={{
        height: "80%",
        padding: "150px",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Typography
        component="h5"
        variant="h4"
        sx={{ ...styleForTypography, fontWeight: "bold", fontSize: "45px" }}
      >
        Hi,there 👋🏻
      </Typography>
      <Typography variant="body2" sx={{ ...styleForTypography }}>
        I hope you are doing well.I designed different type of landing
        pages,application. It can help others to develop more ideas from this. I
        keep it simple and minimal. It can also help you find different options
        in exploring and improving your skills.
      </Typography>
      <Typography variant="body2" sx={{ ...styleForTypography }}>
        I am available for new projects. I hope you show me your support 😄
      </Typography>
      <Typography variant="body2" sx={{ ...styleForTypography }}>
        I wish you good luck, Ogün
      </Typography>
      <Button
        variant="contained"
        href="/login"
        size="large"
        sx={{ ...styleForButton, marginTop: "auto" }}
      >
        Buy me a coffee
      </Button>
    </Box>
  );
}
