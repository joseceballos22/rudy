import { Box, Grid, Paper, Typography, AppBar, Tabs, Tab, Button } from '@mui/material';
import Display from './Display';
import { useNavigate } from 'react-router-dom';

export default function No() {

    const navigate = useNavigate();
    return (
        <div>
            <Display mainText ='It was real it was fun wasnt real fun :('>
            </Display>
        </div>
    )
}