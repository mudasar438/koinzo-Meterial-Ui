import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import images from '../imgs/images'
import { ButtonGroup, Collapse, Container, Stack, styled } from '@mui/material';
import { spacing } from '@mui/system';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import KZOToken from './KZOToken';
import Icon from '@mui/material/Icon';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';


const StyledButton = styled(Button)(({ theme, active }) => `
padding-left:1rem;
font-size:1rem;
font-weight:semi-bold;
border-radius:20px;
height:2.5rem;
border:2px solid white;
background-color:transparent;
font-family:'Nexa Bold',Helvetica,Arial,Lucida,sans-serif;
margin-top:10px !important;
&:hover {
    background-color:transparent ;
}
${active && `

background-color:#fff;
color:${theme.palette.primary.main};
&:hover {
    background-color:#fff ;
}
`}


`)

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    function handleNavigate(link) {
        setIsOpen(false)
        navigate(link)
    }

  return (
    <AppBar position="sticky" sx={{ backgroundImage: "linear-gradient(160deg,#2b57c6 0%,#1877f3 100%)!important", justifyContent: "center" }} >
    <Container style={{ padding: 0 }}>
        <Toolbar justifyContent="center" alignItems="center" style={{ padding: "10px 0px" }}>

            <Box mt={1} >
                <Link to={'/'}>
                    <img src={images.logo1} alt="logo" width="170" height="64" />
                </Link>
            </Box>
            <Box display={"flex"} flexGrow={1}>

            </Box>

            <Stack spacing={2}
                sx={{
                    display: {
                        xs: "none",
                        md: 'flex'
                    },
                    flexWrap: 'wrap',
                }}
                direction={{ md: "row" }}   >
                <Navlink title="Home" link="/" ></Navlink>
                <Navlink title="$KZO-Token" link="/kzotoken"></Navlink>
                <Navlink title="RealLaunch" link="/reallaunch" ></Navlink>
                <Navlink title="NFTs" link="/nfts"></Navlink>
                <Navlink title="Staking" link="/staking"></Navlink>
                <Navlink title="Resources" link="/resources" ></Navlink>
                <StyledButton variant="contained" style={{ border: "none", backgroundColor: "#1ABDB3" }} onClick={() => navigate('/Openapp')}> Open App</StyledButton>
            </Stack>

            <Box ml={4} display="flex" justifyContent="space-between" alignItems="flex-end"

                sx={{
                    display: {
                        xs: "block",
                        md: 'none'
                    },
                }}
            >



                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"

                    sx={{
                        display: {
                            xs: "flex",
                            md: "none"
                        }
                    }}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <MenuIcon />
                </IconButton>
                <Box
                    sx={{

                        position: 'relative',
                    }}
                >
                    <Collapse in={isOpen}
                        sx={{
                            position: "absolute",
                            top: 0,
                            right: 30,
                            padding:5,
                            
                            

                            backgroundColor: 'primary.main',
                            display: {
                                xs: "block",
                                md: "none"
                            }

                        }}
                        
                    >
                       <Navlink title="Home" link="/" ></Navlink>
                <Navlink title="$KZO-Token" link="/kzotoken"></Navlink>
                <Navlink title="RealLounch" link="/RealLounch" ></Navlink>
                <Navlink title="NFTs" link="/nfts"></Navlink>
                <Navlink title="Staking" link="/staking"></Navlink>
                <Navlink title="Resources" link="/resources" ></Navlink>
                <StyledButton variant="contained" style={{ border: "none", backgroundColor: "#1ABDB3" }} onClick={() => navigate('/Openapp')}> Open App</StyledButton>
                    </Collapse>

                </Box>

            </Box>




        </Toolbar>
    </Container>


</AppBar >
  );
}

export default Navbar;

function Navlink({ title, link }) {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    
    return (
        <StyledButton 
        variant="contained"
         onClick={() => navigate(link)} 
active={pathname === link}>{title} </StyledButton>

    )
}