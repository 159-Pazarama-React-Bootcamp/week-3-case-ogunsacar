//styles
import { Grid } from "@mui/material";
//components
import HomeLeft from "../components/HomeLeft";
import HomeRight from "../components/HomeRight";

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <HomeLeft />
      </Grid>
      <Grid item xs={0} sm={6}>
        <HomeRight />
      </Grid>
    </Grid>
  );
}
