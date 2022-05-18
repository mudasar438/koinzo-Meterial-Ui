import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import images from "../imgs/images";
import { useNavigate } from "react-router-dom";

export function Resource() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box width= "100%"
          height= "100%"
        sx={{
          
          backgroundImage:
            "linear-gradient(120deg,rgba(27,114,236,0.73) 0%,rgba(63,66,216,0.8) 100%),url(https://koinzo.com/wp-content/uploads/2022/02/office-building-2021-08-30-00-07-09-utc.jpg)!important",
          position: "relative",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Container>
          <Box>
            <Grid container md={12} xs={12}>
              <Grid item md={8} xs={12} mt={10} mb={5}>
                <Typography fontSize="4rem" variant="h1" color="white" data-aos="fade-up"
     data-aos-duration="3000">
                  Join our Mission
                </Typography>

                <Typography mt={4} variant="h6" color="white">
                  Join us on our mission to bring greater choice, independence,
                  and opportunity to individuals around the world. We are
                  global!
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box>
        <Grid container>
          <Grid item md={6} xs={12} backgroundColor="#2d6dec">
            <Box>
              <Typography
                variant="h3"
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={15}
                mb={6}
                color="white"
              >
                Career
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={15}
            >
              <Button
                variant="contained"
                onClick={() => navigate("/carrer")}
                style={{
                  borderRadius: "16px",
                  width: "8rem",
                  height: "2rem",
                  backgroundColor: "#29C4A9",
                }}
                fontWeight="bold"
              >
                Carrer
              </Button>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} backgroundColor="#0A3EA6">
            <Box>
              <Typography
                variant="h3"
                display="flex"
                color="white"
                justifyContent="center"
                alignItems="center"
                mt={15}
                mb={6}
              >
                Community
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={15}
            >
              <Button
                variant="contained"
                style={{
                  borderRadius: "16px",
                  width: "8rem",
                  height: "2rem",
                  backgroundColor: "#29C4A9",
                }}
              >
                Community
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>

<Grid container columnSpacing={8}  >


    <Grid item xs={12} md={5}  >

        <Container>

            <Box display="flex" justifyContent="center" alignItems="center" mt={15} data-aos="fade-up"
     data-aos-duration="3000">

                <Typography variant="h2" color="#1bbdb3" >
                    Refer a Friend<br /> to Koinzo
                </Typography>

            </Box>
            <Container>
                <Box borderBottom="3px solid #29C4A9" ml={9} mr={37} mt={2} mb={2}>

                </Box>
            </Container>


            <Box ml={12}>

                <Typography variant="h5" fontSize="18px" color="black" lineHeight={2} data-aos="fade-up"
     data-aos-duration="3000">
                    Once your friend buys $100 or more (or 100 USD equivalent of your domestic currency) within 30 days of creating their account, both accounts will be credited $10 worth of KZO Tokens to your wallet.
                </Typography>

            </Box>

            <Box ml={12} mt={6}>
                <Button variant="contained" style={{ borderRadius: "16px", width: "10rem", height: "2.9rem", backgroundColor: "#2d6dec", fontWeight:"bold" }}   >
                    REFER A FRIEND
                </Button>
            </Box>
        </Container>
    </Grid>

    <Grid item xs={12} md={7} >

        <Box borderRadius="16px">
            <img src={images.laptop} alt="logo" width="760" height="731" />

        </Box>

    </Grid>


</Grid>


</Box>
<Box>
        <Grid container>
          <Grid item md={6} xs={12} backgroundColor="#2d6dec">
            <Box>
              <Typography
                variant="h3"
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={15}
                mb={6}
                color="white"
              >
                News
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={15}
            >
              <Button
                variant="contained"
                onClick={() => navigate("/carrer")}
                style={{
                  borderRadius: "16px",
                  width: "8rem",
                  height: "2rem",
                  backgroundColor: "#29C4A9",
                }}
                fontWeight="bold"
              >
                News
              </Button>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} backgroundColor="#0A3EA6">
            <Box>
              <Typography
                variant="h3"
                display="flex"
                color="white"
                justifyContent="center"
                alignItems="center"
                mt={15}
                mb={6}
              >
                Media Coverage
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={15}
            >
              <Button
                variant="contained"
                style={{
                  borderRadius: "16px",
                  width: "15rem",
                  height: "2rem",
                  backgroundColor: "#29C4A9",
                }}
              >
               Media Coverage
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box><Box>
        <Grid container>
          <Grid item md={6} xs={12} backgroundColor="#0A3EA6">
            <Box>
              <Typography
                variant="h3"
                display="flex"
                color="white"
                justifyContent="center"
                alignItems="center"
                mt={15}
                mb={6}
              >
                Community
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={15}
            >
              <Button
                variant="contained"
                style={{
                  borderRadius: "16px",
                  width: "8rem",
                  height: "2rem",
                  backgroundColor: "#29C4A9",
                }}
              >
                Community
              </Button>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} backgroundColor="#2d6dec">
            <Box>
              <Typography
                variant="h3"
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={10}
                mb={6}
                color="white"
              >
            Partners
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={10}
            >
              <Button
                variant="contained"
                onClick={() => navigate("/carrer")}
                style={{
                  borderRadius: "16px",
                  width: "8rem",
                  height: "2rem",
                  backgroundColor: "#29C4A9",
                }}
                fontWeight="bold"
              >
                Partners
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box mb={20}>
        <Grid container>
          <Grid item md={6} xs={12} backgroundColor="#2d6dec">
            <Box>
              <Typography
                variant="h3"
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={15}
                mb={6}
                color="white"
              >
                News
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={15}
            >
              <Button
                variant="contained"
                onClick={() => navigate("/carrer")}
                style={{
                  borderRadius: "16px",
                  width: "8rem",
                  height: "2rem",
                  backgroundColor: "#29C4A9",
                }}
                fontWeight="bold"
              >
                News
              </Button>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} backgroundColor="#0A3EA6">
            <Box>
              <Typography
                variant="h3"
                display="flex"
                color="white"
                justifyContent="center"
                alignItems="center"
                mt={15}
                mb={6}
              >
                Media Coverage
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={15}
            >
              <Button
                variant="contained"
                style={{
                  borderRadius: "16px",
                  width: "15rem",
                  height: "2rem",
                  backgroundColor: "#29C4A9",
                }}
              >
               Media Coverage
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
export default Resource;
