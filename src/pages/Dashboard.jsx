import { Button, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useLogout } from "../hooks/useLogout";
import { styleForBackLink } from "../pages/StyleLogin";


export default function Dashboard() {

    const {logout} = useLogout()
    return (
        <Box>
            <Button  sx={{fontSize : '20px'}} fullWidth variant='contained' color='error' onClick={logout}>Logout</Button>
            <Typography textAlign='center' variant='h2' mt={2}>
                Hi, there! I hope you like my project.
            </Typography>
            
            <Link sx={{...styleForBackLink}} href='/'>Back to home page</Link>
        </Box>
    )
}
