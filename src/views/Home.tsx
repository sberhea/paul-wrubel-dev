import { Container, Paper, Typography } from "@mui/material";

const Home = () => {
    return (
        <Container sx={{ my: 10 }}>
            <Paper
                variant="outlined"
                elevation={0}
                sx={{
                    p: 2,
                    m: 2,
                }}
            >
                <Typography
                    // align="left"
                    fontSize="4rem"
                    fontFamily='"Source Code Pro", monospace'
                >
                    {"> ./paulwrubel.dev"}
                </Typography>
            </Paper>
            <Paper variant="outlined" elevation={0} sx={{ p: 2, m: 2 }}>
                <Typography
                    fontSize="3rem"
                    fontFamily='"Source Code Pro", monospace'
                >
                    software engineer
                    <br />
                    technology enthusiast
                </Typography>
            </Paper>
        </Container>
    );
};

export default Home;
