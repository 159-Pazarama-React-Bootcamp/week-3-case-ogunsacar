import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { styleForInput, styleForButton, styleForBackLink } from "../pages/StyleLogin";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";


import { signInWithPopup, GoogleAuthProvider ,FacebookAuthProvider,GithubAuthProvider} from "firebase/auth";
import { auth } from "../firebase/config";

const googleSıgnIn = ()=>{
  const provider = new GoogleAuthProvider();

  try {
    signInWithPopup(auth, provider)
  } catch (error) {
    console.log(error);
  }
}
const facebookSıgnIn = ()=>{
  const provider = new FacebookAuthProvider();

  try {
    signInWithPopup(auth, provider)
  } catch (error) {
    console.log(error);
  }
}
const githubSıgnIn = ()=>{
  const provider = new GithubAuthProvider();

  try {
    signInWithPopup(auth, provider)
  } catch (error) {
    console.log(error);
  }
}


export default function LoginLeft() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {error,login} = useLogin()

  const handleSubmit = async(e) => {
      e.preventDefault()
      await login(email,password);

  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mt: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        width : '100%',
      }}
    >
      <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
        Login
      </Typography>
      <TextField
        margin="normal"
        required
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        sx={{ ...styleForInput }}
        onChange={(e) => setEmail(e.target.value)}
            value={email}
      />
      <TextField
        margin="normal"
        required
        name="password"
        label="Password"
        type="password"
        id="password"
        sx={{ ...styleForInput }}
        onChange={(e) => setPassword(e.target.value)}
            value={password}
      />
      <Link
        href="#"
        variant="body2"
        sx={{
          color: "gray",
          textDecoration: "none"
        }}
      >
        Forgot password?
      </Link>

      <Button
        type="submit"
        variant="contained"
        sx={{ ...styleForButton, backgroundColor: "#A93159", mt: 3 }}
      >
        Sign In
      </Button>
      {error && <p>{error}</p> }
      <Typography
        sx={{
          display: "block",
          color: "gray",
          fontSize: "15px",
          alignSelf: "center",
          marginTop: "20px"
        }}
      >
        or continue with
      </Typography>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        mt={2}
        mb={2}
      >
        <Grid item>
          <Button onClick={googleSıgnIn} variant="outlined" sx={{ border: "0" }}>
            <GoogleIcon sx={{ color: "#F4B400" }} />
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={githubSıgnIn} variant="outlined" sx={{ border: "0" }}>
            <GitHubIcon sx={{ color: "#000" }} />
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={facebookSıgnIn} variant="outlined" sx={{ border: "0" ,zIndex: '15'}}>
            <FacebookIcon />
          </Button>
        </Grid>
      </Grid>
      <Typography
        sx={{
          color: "gray",
          fontSize: "15px",
          alignSelf: "center"
        }}
      >
        Don't have an account?
        <Link sx={{ fontWeight: "bold", ml: 1 }} href="/signup">
          Register for free.
        </Link>
      </Typography>
      <Link sx={{...styleForBackLink}} href='/'>Back to home page</Link>
    </Box>
    
  );
}
