import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import images from "../imgs/images";
import { Stack } from "@mui/material";

function Stacking() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(180deg,rgba(35,98,175,0.37) 0%,#2931c6 100%),url(https://koinzo.com/wp-content/uploads/2022/02/business-01.jpg),linear-gradient(180deg,rgba(58,84,255,0.93) 0%,rgba(10,62,166,0.67) 100%)!important;",

          width: "1350",
          height: "700",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid container>
          <Grid item md={6}>
            <Box
              ml={12}
              color="white"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Typography mt={20} mb={5} variant="h3">
                Koinzo Staking
              </Typography>
              <Typography mb={20}>
                Subsequent to the aforementioned token sale rounds, KOINZO can
                be obtained through secondary market purchase or through our
                token staking program. 62,500,000 (12.5% of total supply) tokens
                will be reserved for rewards to KZO token stakers.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container>
          <Box></Box>
          <Container
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={8}
              mb={4}
            >
              <Typography
                color="secondary"
                variant="h6"
                textAlign="center"
                fontWeight="bold"
              >
                The following activities result in an allocation of the KOINZO
                token through staking:
              </Typography>
            </Box>
          </Container>
          <Container>
            <Stack
              spacing={2}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Box display="flex" spacing={8}>
                <Box sx={{ spacing: 2 }}>
                  <img src={images.arrowIcon} alt="" width="28" height="28" />
                </Box>
                <Typography
                  ml={3}
                  color="Black"
                  variant="h6"
                  fontSize="1rem"
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="500"
                >
                  liquidity pool contributions in our DEX, beyond any earned
                  pool fees
                </Typography>
              </Box>

              <Box display="flex">
                <Box sx={{ spacing: 2 }}>
                  <img src={images.arrowIcon} alt="" width="28" height="28" />
                </Box>
                <Typography ml={3} color="Black" variant="h6" fontSize="1rem">
                  held in Koinzo platform staking wallets
                </Typography>
              </Box>

              <Box display="flex">
                <Box sx={{ spacing: 2 }}>
                  <img src={images.arrowIcon} alt="" width="28" height="28" />
                </Box>
                <Typography ml={3} color="Black" variant="h6" fontSize="1rem">
                  held by marketplaces and their participants
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle1" fontSize="1rem" color="black">
                  The Koinzo team expects to announce future staking options as
                  the platform evolves.
                </Typography>
              </Box>
            </Stack>
          </Container>
        </Grid>
      </Box>
      <Box>
        <Grid container columnSpacing={6} mt={8}>
          <Grid item xs={12} md={6}>
            <Box borderRadius="16px" data-aos="zoom-in-up">
              <img src={images.money} alt="logo" width="750" height="484" />
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h3" color="#1bbdb3" ml={5}>
              Earn Passive Income With Crypto
            </Typography>
          </Grid>

          <Container>
            <Box>
              <Grid
                container
                columnSpacing={6}
                display="flex"
                justifyContent="start"
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    <Typography variant="h3" color="#1bbdb3">
                      The simple, secure
                      <br /> way to stake
                    </Typography>

                    <Typography
                      variant="h6"
                      color="common.black"
                      display="flex"
                      mt={2}
                    >
                      Simply buy KZO tokens and deposit to your account for
                      rewards earning.
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box>
                    <img
                      src={images.securestaking}
                      alt="logo"
                      width="670"
                      height="530"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>

          <Container>
            <Box mt={4} mb={4}>
              <Typography
                textAlign="center"
                color="#1bbdb3"
                variant="h3"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Koinzo incentivizes token holders in honest and multiple ways!
              </Typography>
            </Box>
          </Container>
        </Grid>

        <Container>
          <Box>
            <Grid
              container
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <Grid item md={4} sx={12} mt={6}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mb={3}
                >
                  <img src={images.balance} alt="logo" height="60" width="60" />
                </Box>
                <Typography
                  color="black"
                  display="flex"
                  justifyContent="center"
                  variation="h5"
                  mb={1}
                >
                  Earn
                </Typography>
                <Typography color="black" textAlign="center" lineHeight={2}>
                  Receive rewards distributions daily, calculated
                  <br /> based on a user’s total balance.
                </Typography>
              </Grid>

              <Grid item md={4} sx={12} mt={6}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mb={3}
                >
                  <img src={images.rewad} alt="logo" height="60" width="60" />
                </Box>
                <Typography
                  variant="h5"
                  color="black"
                  textAlign="center"
                  display="flex"
                  justifyContent="center"
                  variation="h4"
                  mb={1}
                >
                  Ease of use
                </Typography>
                <Typography color="black" textAlign="center" lineHeight={2}>
                  Earn rewards directly from Koinzo or use
                  <br /> an external wallet.
                </Typography>
              </Grid>

              <Grid item md={4} sx={12} mt={6} mb={8}>
                <Box
                  display="flex"
                  justifyContent="center"
                  textAlign="center"
                  alignItems="center"
                  mb={3}
                >
                  <img src={images.unlock} alt="logo" height="60" width="60" />
                </Box>
                <Typography
                  variant="h5"
                  color="black"
                  display="flex"
                  justifyContent="center"
                  variation="h4"
                  mb={1}
                >
                  Unlock the Power of Your Crypto
                </Typography>
                <Typography color="black" textAlign="center" lineHeight={2}>
                  KZO holders, you get profits and prosperity through our
                  leading digital assets facilitation and high-yield interest on
                  your idle crypto holdings.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box>
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Box
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Typography variant="h4" color="#1bbdb3" fontWeight="bold">
                Earn Rewards by staking coins and fiat
              </Typography>
            </Box>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </Box>
    </Box>
  );
}
export default Stacking;
