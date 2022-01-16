import { createTheme } from "@mui/material";
import Avatar from "../images/avatar.png";
import AvatarTransparent from "../images/avatar_transparent.png";

const theme = createTheme({});

export const styleForBox = {
  backgroundImage: "linear-gradient(#00B4DB, #0083B0)",
  height: "100vh",
  width: "100vw",
  padding: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  ":after": {
    backgroundImage: `url(${AvatarTransparent})`,
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    content: "''",
    position: "absolute",
    left: "0",
    top: "0",
    bottom: "0",
    zIndex: "2"
  }
};
export const styleForGrid = {
  backgroundColor: "#fff",
  height: "90vh",
  width: "80vw",
  borderRadius: '50px',
  zIndex: "3",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    height: "70vh",
    width: "100vw"
  }
};

export const styleForRightImage = {
  background: `url(${Avatar}) no-repeat center/contain`,
  backgroundColor :'#DFEDF3' ,
  height: "100%",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    display: "none"
  },
};

export const styleForInput = {
/*   [theme.breakpoints.up("lg")]: {
    width: "100%"
  }, */
  width: "100%"
};
export const styleForButton = {
  /* [theme.breakpoints.down("md")]: {
    width: "100%"
  },
  [theme.breakpoints.up("lg")]: {
    width: "100%"
  }, */
  width: "100%"
};


export const styleForBackLink = {
  position: 'absolute',
  right :'20px',
  bottom : '20px',
  color :'#333',
  textDecoration : 'none',
  fontSize : '20px',

}