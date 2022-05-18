import React from 'react'
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';

 function Carrer() {
  return (
    <Box>
      <Box
            sx={{
                backgroundImage: "linear-gradient(180deg,rgba(255,255,255,0.28) 0%,#ffffff 100%),url(https://koinzo.com/wp-content/uploads/2022/02/at-the-job-interview-2021-08-29-16-29-47-utc-scaled.jpg)!important",
                paddingTop: "100px",
                paddingRight: "0px",
                paddingBottom: "100px",
                paddingLeft: "0px",
                position: "relative",
                backgroundColor: "#fff",
                backgroundPosition: "50%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",

            }}
        >

            <Container>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Typography variant="h3" color="common.black" fontWeight="semi-bold">
                        Unlock Your Potential
                    </Typography>

                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" mt={4}>

                    <Typography variant="subtitle1" color="common.black" textAlign="center">
                        Become a part of a rapidly growing company with unlimited future potential. Koinzo is focused on <br /> democratizing wealth in Real Estate and financial services and making them openly accessible to anyone,<br /> anywhere in the world.
                    </Typography>
                </Box>
            </Container>


        </Box>
        
    </Box>
  )
}
export default Carrer;
