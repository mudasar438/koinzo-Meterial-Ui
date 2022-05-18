import { Typography } from "@mui/material";
import React from "react";
import images from "../imgs/images";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Stack } from "@mui/material";



function NavbarHero() {
  return (
    <Box>
      <Box  sx={{
      backgroundImage:
        " linear-gradient(160deg,#2b57c6 0%,rgba(29,88,140,0.76) 100%),url(https://koinzo.com/wp-content/uploads/2022/01/luxury-downtown-of-dubai-2021-08-30-12-38-05-utc-scaled.jpg)!important;",
      width: "1350",
      height: "617",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
     
  

    }}>
      
      <Box sx={{
        backgroundImage: "url(https://koinzo.com/wp-content/uploads/2022/01/bg_image_01-2x.png)",
    
        backgroundSize: "contain",
        backgroundPosition: "right 0px bottom 0px",
        width: "100%",
        maxWidth: "100%",
        boxShadow: "inset 0px -1px 0px 0px #fffff",
        paddingTop: "0px!important",
        paddingRight: "14vw!important",
        paddingBottom: "5vw!important",
        paddingLeft: "14vw!important",
        backgroundRepeat: "no-repeat",
        margin: "auto"
      }} 
        
        
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <img
            src={images.logo3}
            alt="logo"
            width="200"
            height="300"
            background="blue"
          />
        </Box>
        <Box data-aos="fade-right" ml={8}>
          <Typography color="white" variant="h2">
            Koinzo
          </Typography>
          <Typography color="white" variant="secondry" justifycontent="center">
            Koinzo is a blockchain powered Decentralized (DEX) Platform for
            launching and investing into <br></br>Real Estate Asset Class using
            Tokens and NFTs. KZO is a utility token for Koinzo Platform. Koinzo{" "}
            <br></br> DEX will provide Real Estate Developers opportunity to
            launch Token quickly for their projects <br></br> and investors an
            opportunity to invest in Real Estate Sector as little as $1.00
          </Typography>
        </Box>
      </Box>
      </Box>
      
      <Container>
        <Box data-aos="fade-right">
          <Typography variant="h3" color="secondary" fontWeight="bold" mt={5}>
            Koinzo Offerings:
          </Typography>
        </Box>
      </Container>
      <Container>
        <Box>
          
             <Container>
              <Grid container>
                <Grid item xs={12} md={6} mt={4}>
              <Typography variant="h4" color="secondary" data-aos="fade-right">
                Asset Tokenization – Tokens
              </Typography>

              <Typography
                variant="subtitle1"
                color="common.black"
                display="flex"
                mt={2}
                data-aos="fade-right"
              >
                Savills Global Research estimates global Real Estate value US
                $326.5 trillion.
                <br />
                MCSI estimates managed Real Estate market US $10.5 trillion.
                <br />
                By 2027 Real Estate Tokenization will be US $1.8 trillion.
                <br />
                By Tokenizing the Real Estate Assets, Koinzo is democratizing
                wealth <br /> among average working class.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
            <img src={images.Asset} alt="logo" width="550" height="383" style={{ borderRadius: "16px" }} />
            </Grid>
              </Grid>
            </Container> 
           

           
         
        </Box>

        
          <Grid container>
          
            <Grid item sm={12} md={8}>
              <Box data-aos="fade-down"
     data-aos-duration="3000">>

              <img
                src={images.Nft}
                alt="logo"
                width={520}
                style={{ borderRadius: "16px" }}
                />
                </Box>
            </Grid>
          

          
            <Grid item sm={12} md={4}>
              <Box>

              <Typography variant="h3" mt={2} color="secondary" data-aos="fade-left">
                Fractional Ownership -NFTs
              </Typography>
              </Box>
              <Box>

              <Typography variant="body2" mt={2} data-aos="fade-left">
                Koinzo Platform provides property owners’ ability to issue NFTs
                or Micro Share via NFTs Collections.
              </Typography>
              </Box>
            </Grid>
          
          </Grid>
        
        <Box display="flex" mt={2}>
          <Grid container>

          
          
            <Grid item sm={12} md={6} data-aos="fade-right">
              <Typography variant="h3" mt={4} color="secondary">
                Crowdfunding
              </Typography>
              <Typography variant="body2" mt={2}>
                Koinzo is the first Platform to offer REIT style Funding raising
                for Real Estate management companies.
              </Typography>
              <Typography mt={2}>
                Koinzo will provide Real Estate Developers ability to raise
                funds for net-zero and alternative housing projects
              </Typography>
              <Typography mt={2}>
                All projects will be evaluated by industry experts and legal
                team for funds security.
              </Typography>
            </Grid>
          
          
            <Grid item sm={12} md={6} data-aos="fade-left">
              <img 
                src={images.nightcity}
                alt="logo"
                width={520}
                style={{ borderRadius: "16px" }}
              />
            </Grid>
          
          </Grid>
        </Box>
        <Container >
                <Box>

                    <Grid container columnSpacing={6} mt={4} display="flex" justifyContent="start" >
                        <Grid item xs={12} md={6} >

                            <Box borderRadius="16px">
                                <Box data-aos="fade-right"

                                >

                                    <img src={images.dEFI} alt="logo" width="520" style={{ borderRadius: "16px" }} />
                                </Box>

                            </Box>

                        </Grid>



                        <Grid item xs={12} md={6} mt={14}>
                            <Box data-aos="fade-left"

                            >

                                <Typography variant="h3" color="secondary">
                                    Staking – DeFi
                                </Typography>
                            </Box>

                            <Box data-aos="fade-left"

                            >

                                <Typography variant="subtitle1" color="common.black" display="flex" mt={2} mb={4}>
                                    Users can stake their funds for higher return.

                                    While funds are being raised all funds will be in escrow staking account earning interest for investors on daily bases.
                                </Typography>
                            </Box>
                        </Grid>





                    </Grid>
                </Box>

            </Container>

        <Box>
          <Container>
            <Grid mt={10} mb={5}>
              <Typography variant="h3"  color="secondary" data-aos="fade-right">Current Status</Typography>
              <Box
                borderTop="1px solid gray"
                width="100px"
                mt={3}
                color="secondary"
              ></Box>
            </Grid>
            <Grid container columnSpacing={2}>
              <Grid item md={6} data-aos="fade-right">
                <Stack >
                  <Box display="flex">
                    <img src={images.arrowIcon} alt="" width="30" height="32" />
                    <Typography ml={2} >
                      Koinzo.com Platform is functional
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <img src={images.arrowIcon} alt="" width="30" height="32" />
                    <Typography ml={2}>
                      KZO Token listed on Koinzo-Swap and Pancake-Swap
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <img src={images.arrowIcon} alt="" width="30" height="32" />
                    <Typography ml={2}>
                      RealLaunch (Launchpad) to launch security and utility
                      token is ready
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <img src={images.arrowIcon} alt="" width="30" height="32" />
                    <Typography ml={2}>
                      KZO sale is in progress, contact us for discount.
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item md={6} data-aos="fade-right">
                <Stack >
                  <Box display="flex">
                    <img src={images.arrowIcon} alt="" width="30" height="32" />
                    <Typography ml={2}>
                      KZO Token issued on Polygon | BSC protocol
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <img src={images.arrowIcon} alt="" width="30" height="32" />
                    <Typography ml={2}>
                      Koinzo.com Platform is functional
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <img src={images.arrowIcon} alt="" width="30" height="32" />
                    <Typography ml={2}>
                      KZO Token provides DeFi - Staking
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <img src={images.arrowIcon} alt="" width="30" height="32" />
                    <Typography ml={2}>
                      All (Security, utility) Tokens will be issued on Polygon |
                      BSC (low/Gasless Transaction Infrastructure)
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Container >
                <Box data-aos="fade-down"

                >

                    <Box mt={15} backgroundColor="#1877f3" mb={15} borderRadius="20px" p={7} color="white">
                        <Grid container columnSpacing={4}>
                            <Grid item md={2} xs={3}  >
                                <Stack spacing={3}>

                                    <Box>
                                        <Typography variant="h6">
                                            Token Usage
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h6">
                                            Token Name
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h6">
                                            Token Type
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="h6">
                                            Token Supply
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h6">
                                            Token Description
                                        </Typography>
                                    </Box>


                                </Stack>
                            </Grid>

                            <Grid item md={5} xs={3}  >
                                <Stack spacing={3}>

                                    <Box>
                                        <Typography variant="h6">
                                            Platform Token
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="h6">
                                            KZO
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="h6">
                                            Utility Token
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="h6">
                                            500 million (Pre-Mined)
                                        </Typography>
                                    </Box>



                                    <Box>
                                        <Typography variant="h6">
                                            Utility Token on Polygon | BSC protocol used as funding instrument and will be listed on decentralized exchanges with liquidity that is collected through the initial rounds of fundraising and investments. This token will be used as rewards for staking and other activities.
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Grid>

                            <Grid item md={5} xs={3}  >
                                <Stack spacing={3}>

                                    <Box>
                                        <Typography variant="h6" variant="h5">
                                            Asset /Security Tokens /NFTs
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h6">
                                            Name derived from Property
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="h6">
                                            Security | utility
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h6">
                                            Property Value will determine supply
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="h6">
                                            Real Estate Asset based security tokens will be issued with builders and property owners on Koinzo platform.
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="h6">
                                            Each property will have its own token based on its value. Total Property Value /USDT= 1 Token Value
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Grid>

                        </Grid>
                    </Box>
                </Box>
            </Container>
      </Container>
    </Box>
  );
}

export default NavbarHero;
