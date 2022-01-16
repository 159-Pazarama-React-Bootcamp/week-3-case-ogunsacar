import { createTheme } from "@mui/material";

import Frame from "../images/Frame.png";

const theme = createTheme({});

export const styleForTypography = {
  fontSize: 20,
  marginBottom: "30px"
};

export const styleForRightImage = {
  background: `url(${Frame}) no-repeat center`,
  backgroundSize: "contain",
  height: "80%",
  width: "50vw",
  alignSelf: "center"
};
export const styleForButton = {
  alignSelf: "center"
};
