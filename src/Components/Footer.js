import React from "react";
import { Container, Grid, Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { Button } from "@mui/material";
import images from "../imgs/images";

const Footer = () => {
  return (
    <Box       
    sx={{backgroundImage:'linear-gradient(123deg,#3071f2 0%,#003193 100%)!important',
position:'relative'
}}
       >

    <Box backgroundColor="#1877f3">
      <Box sx={{
    backgroundImage:"url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI5NXB4IiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTEyODAgMy40QzEwNTAuNTkgMTggMTAxOS40IDg0Ljg5IDczNC40MiA4NC44OWMtMzIwIDAtMzIwLTg0LjMtNjQwLTg0LjNDNTkuNC41OSAyOC4yIDEuNiAwIDMuNFYxNDBoMTI4MHoiIGZpbGwtb3BhY2l0eT0iLjMiLz48cGF0aCBkPSJNMCAyNC4zMWM0My40Ni01LjY5IDk0LjU2LTkuMjUgMTU4LjQyLTkuMjUgMzIwIDAgMzIwIDg5LjI0IDY0MCA4OS4yNCAyNTYuMTMgMCAzMDcuMjgtNTcuMTYgNDgxLjU4LTgwVjE0MEgweiIgZmlsbC1vcGFjaXR5PSIuNSIvPjxwYXRoIGQ9Ik0xMjgwIDUxLjc2Yy0yMDEgMTIuNDktMjQyLjQzIDUzLjQtNTEzLjU4IDUzLjQtMzIwIDAtMzIwLTU3LTY0MC01Ny00OC44NS4wMS05MC4yMSAxLjM1LTEyNi40MiAzLjZWMTQwaDEyODB6Ii8+PC9nPjwvc3ZnPg==)",
    backgroundSize:'100% 95px',
    top:0,
    zIndex:1,
    transform:"rotateX(180deg)",
    marginTop:"-1px",
    display:'block',
    position:"absolute",
    pointerEvents:'none',
    left:0,
    right:0,
    height:'90px'
}}>

      </Box>
      <Container >
        <Grid container columnSpacing={7}>
          <Grid item borderRight="3px solid white" mt={20} md={6} sx={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={images.logo1} alt="footer image" width={200} />
            </Box>
            <Box sx={{ mt: 1, border: "none", borderBottom: "3px solid white" }}>

              
            </Box>
            
            <Box display="flex" mt={3}>
              <Grid container>

             
            <Grid item md={6} color="white"  lineHeight={2}>
              <Typography>Vision & Mission</Typography>
              <Typography>Legal & Disclaimer</Typography>
              <Typography>Privacy & Cookies Policy</Typography>
            </Grid>
            

            <Grid item md={6} color="white">
              <Typography>OnePage</Typography>
              <Typography>Presentation</Typography>
              <Typography>WhitePaper</Typography>
            </Grid>

            </Grid>
            </Box>

           
          </Grid>
          <Grid item mt={20} md={6} xs={6}>
            <Typography variant="h2" color="white">
              Get in Touch
            </Typography>
            <Typography variant="body2" textAline="start" color="white">
              Koinzo is currently operational in beta version, we appreciate
              support and your feedback through our telegram channel.
            </Typography>
            <Button
              varient="contained"
              sx={{ mt: 3, backgroundColor: "#14f1d9", borderRadius: 16 }}
            >
              {" "}
              Contact US
            </Button>
          </Grid>
          <Grid item mt={5} md={12} xs={12}>
            <Typography varient="body2" color="white" mt={2} textAline="center">
              Tokens and digital assets are subject to a number of risks,
              including price volatility. Transacting in tokens and digital
              assets could result in significant losses and may not be suitable
              for some consumers. Token and digital asset markets and exchanges
              are not regulated with the same controls or customer protections
              available with other forms of financial products and are subject
              to an evolving regulatory environment. Tokens and digital assets
              do not typically have legal tender status and are not covered by
              deposit protection insurance. The past performance of a token or a
              digital asset is not a guide to future performance, nor is it a
              reliable indicator of future results or performance. Additional
              disclosures can be found on the Legal & Disclaimers page. ©
              Copyright 2022 | All Rights Reserved
            </Typography>
          </Grid>
          
        </Grid>
      </Container>
    </Box>
    </Box>
  );
};

export default Footer;
