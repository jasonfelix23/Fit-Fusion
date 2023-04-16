import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from "../assets/icons/dumbbell.png";

const Navbar = () => {

    const { pathname } = useLocation();

    return (
        <Stack direction="row" sx={{ gap: { sm: "122px", xs: "48px" }, mt: { lg: "32px", xs: "20px" }, justifyContent: { xs: "space-around", lg: "flex-start" } }} px="20px">
            <Link to="/">
                <img src={Logo} alt='logo' style={{ width: "48px", height: "48px", margin: "0 20px" }} />
            </Link>
            <Stack direction={{ xs: 'column', xl: 'row' }} gap={{ xs: '24px', xl: '40px' }} fontSize={{ xs: '16px', lg: '24px' }} alignItems="flex-end" justifyContent={{ xs: "space-around", xl: "none" }}>
                <Link to="/" style={{ textDecoration: "none", color: "3A1212", borderBottom: pathname === "/" ? "3px solid #FF2625" : "none" }}>
                    Home
                </Link>
                <a href='#exercises' style={{
                    textDecoration: "none", color: "#3A1212", borderBottom: pathname === "/" ||
                        pathname === "/my-routine" ? "none" : "3px solid #FF2625"
                }}>Exercises</a>
                <Link to="/my-routine" style={{ textDecoration: "none", color: "3A1212", borderBottom: pathname === "/my-routine" ? "3px solid #FF2625" : "none" }}>
                    MyRoutine
                </Link>
            </Stack>
        </Stack>
    )
}

export default Navbar