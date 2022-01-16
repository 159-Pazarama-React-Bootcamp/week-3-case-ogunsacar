import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { styleForInput, styleForButton,styleForBackLink } from "../pages/StyleLogin";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import useSignup from "../hooks/useSignup";
import { useState } from "react";


import { signInWithPopup, GoogleAuthProvider ,FacebookAuthProvider,GithubAuthProvider} from "firebase/auth";
import { auth } from "../firebase/config";


export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {error, signup, isPending} = useSignup()

    const handleSubmit = (e) => {
        e.preventDefault()
        signup(email,password);

        setEmail('')
        setPassword('')
    }


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
        padding: '200px',
      }}
    >
      <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
        Signup
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
        onChange={(e)=> setEmail(e.target.value)}
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
        onChange={(e)=> setPassword(e.target.value)}
        value={password}
      />
      {isPending && (
          <Button
          type="submit"
          variant="contained"
          sx={{ ...styleForButton, backgroundColor: "#A93159", mt: 3 }}
        >
          Signing up
        </Button>
      )}
      {!isPending && (
          <Button
          type="submit"
          variant="contained"
          sx={{ ...styleForButton, backgroundColor: "#A93159", mt: 3 }}
        >
          Sign Up
        </Button>
      )}
      
      {error && <p>{error}</p> }

      <Typography
        sx={{
          color: "gray",
          fontSize: "15px",
          alignSelf: "center"
        }}
        mt={2}
      >
        Do you have an account?
        <Link sx={{ fontWeight: "bold", ml: 1 }} href="/login">
          Login
        </Link>
      </Typography>

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
      <Link sx={{...styleForBackLink}} href='/'>Back to home page</Link>
    </Box>
  );
}
