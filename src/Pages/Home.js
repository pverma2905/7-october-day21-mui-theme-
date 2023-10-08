import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import { useTheme } from '@emotion/react';
import { colorContext } from '..';


export default function Home() {
    const theme = useTheme();

    // Now you can access theme properties
    const primaryColor = theme.palette.primary.main;
    const secondaryColor = theme.palette.secondary.main;

    const customColor = useContext(colorContext)
    return (
        <>

            <div>Home</div>
            <Button style={{ color: primaryColor, backgroundColor: secondaryColor }}>Using Theme</Button>
            <Button style={{ color: secondaryColor }}>Contained</Button>
            <Button style={{ color: customColor, backgroundColor: secondaryColor }}>Using Context</Button>

        </>

    )
}
