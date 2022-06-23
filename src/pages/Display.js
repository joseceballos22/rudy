import { Box, Grid, Paper, Typography, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Display(props) {
    const navigate = useNavigate();
    return (
        <div style={{ backgroundColor: 'lightsalmon'}}>
            <Box p={10}>
                <Paper elevation={5}>
                    <Box pb={60} pt={10}>
                        <Typography variant='h1' align='center'>
                            {props.mainText}
                        </Typography>
                        <Box pt={40} pl={80}>
                            <Button onClick={() => {
                                navigate('/')
                            }} variant='outlined' >
                                    <Typography variant='h4' align='center' width={500}>Go Back</Typography>
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Box>

        </div>
    )
}