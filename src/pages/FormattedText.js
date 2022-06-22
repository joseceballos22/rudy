import { Box, Grid, Paper, Typography} from '@mui/material';

export default function FormattedText(props) {

    return (
        <div style={{ backgroundColor: 'lightsalmon'}}>
            <Box p={10}>
                <Paper elevation={5}>
                    <Box pb={60} pt={10}>
                        <Typography variant='h1' align='center'>
                            {props.text}
                        </Typography>
                    </Box>
                </Paper>
            </Box>

        </div>
    )
}