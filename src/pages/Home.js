import { Box, Grid, Paper, Typography, AppBar, Tabs, Tab, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import backgroundImg from '../images/rudyBackgroundHome.png';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <Box p={7}>
                <div style={{ textAlign: 'center'}}>
                    <Button 
                        variant='contained'
                        style={{ marginRight: '30px', width: '30%', backgroundColor: 'purple'}} onClick={(()=> {
                            navigate('/');
                        })}>
                        Home
                    </Button>
                    <Button 
                        variant='contained'
                        style={{ width: '30%', backgroundColor: 'red'}} onClick={(() => {
                            navigate('/watch-this');
                        })}>
                    Watch This
                    </Button>
                </div>
            </Box>
            <div style={{ background: 'AntiqueWhite', backgroundImage: `url(${backgroundImg})`}}>
                <Box p={15}>
                    <Box pb={50} pt={10}>
                        <Typography variant='h2'sx={{}} style={{ textAlign: 'center'}}>
                            Will you be mine?
                        </Typography>
                        <Typography variant='h2'sx={{}} style={{ textAlign: 'center'}}>
                            A website of love for the only true
                        </Typography>
                        <Typography variant='h2'sx={{}} style={{ textAlign: 'center'}}>
                            love in my life
                        </Typography>
                    </Box>
                </Box>
            </div>
        </div>
    );
}