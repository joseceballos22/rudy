import { Box, Grid, Paper, Typography, AppBar, Tabs, Tab, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div style={{ background: 'AntiqueWhite' , height: '100%'}}>
            <Box p={10}>
                <Paper elevation={3}>
                    <Box pb={50} pt={10}>
                        <Typography variant='h1'sx={{}} style={{ textAlign: 'center'}}>Will you be mine?</Typography>
                        <Box p={30}>
                        <div className='formatButton'>
                            <Box p={10}>
                            <Button variant='outlined' size='large' style={{ width: '30%'}} onClick={() => {
                                navigate('/yes');
                            }}>
                                Yes :)
                            </Button>
                            <Button variant='outlined' size='large' style={{ width: '30%'}} onClick={() => {
                                navigate('/no')
                            }}>
                                No :(
                            </Button>
                            </Box>
                        </div>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </div>

    );
}