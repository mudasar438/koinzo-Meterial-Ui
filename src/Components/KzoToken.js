import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import images from "../imgs/images";
import Stack from "@mui/material/Stack";
function KzoToken() {
  return (
    <Box>
      <Box
        sx={{
          width: "fixed",
          height: 490,
          backgroundImage:
            "linear-gradient(60deg,rgba(25,32,168,0.89) 0%,rgba(12,113,195,0.67) 100%),url(https://koinzo.com/wp-content/uploads/2022/01/office-building-2021-08-29-21-04-49-utc.jpg)!important",
          position: "relative",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={6} md={12}>
              <Typography
                color={"common.white"}
                variant="h5"
                data-aos="fade-right"
              >
                $KZO is a BEP20 utility token, created specifically for the
                Koinzo.com
              </Typography>
              <Grid item md={12} mt={2}>
                <Typography
                  color={"common.white"}
                  variant="body2"
                  data-aos="fade-right"
                >
                  At Koinzo, we aim to build on the market position as a leading
                  Real Estate Launchpad and community-rewards platform, through
                  the consistent introduction of high-quality decentralized
                  applications and benefits. This will be accomplished by
                  leveraging the Koinzo team’s experience and by enabling other
                  development teams and users to guide the growth and direction
                  of the platform through a unique governance mechanism. In
                  contrast with more centralized competition-rewards platforms,
                  the BEP-20 based platform Koinzo provides a unique and
                  compelling user experience.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container>
          <Grid
            container
            mt={6}
            spacing={2}
            maxWidth="md"
            ml={2}
            display="flex"
            justifyContent="space-around"
          >
            <Grid item xs={12} md={6} mt={8} lineHeight="2">
              <Typography width="550px" data-aos="fade-right">
                KZO is the cryptocurrency token that offers a wide range of{" "}
                <br /> applications and benefits within the Koinzo ecosystem.{" "}
                <br /> You can buy or sell KZO like any other cryptocurrency.{" "}
                <br /> KZO will play an important role in Koinzo’s growth and{" "}
                <br /> making our mission to steer the Real Estate Industry to{" "}
                <br /> open-up for millions of people across the world.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography data-aos="fade-up">
                <img
                  src={images.Trader}
                  alt=""
                  width="520"
                  style={{ borderRadius: "16px" }}
                />
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="white"
            data-aos="fade-up"
          >
            <Grid
              container
              backgroundColor="#1877f3"
              md={7.5}
              sx={12}
              display="flex"
              columnSpacing={4}
              borderRadius="16px"
              mt={10}
              mb={10}
            >
              <Grid
                item
                md={6}
                xs={6}
                mt={2}
                mb={1}
                borderBottom="2px solid white"
              >
                <Box mt={1}>
                  <Typography>Blockchain</Typography>
                </Box>
              </Grid>

              <Grid
                item
                md={6}
                xs={6}
                mt={2}
                mb={1}
                borderBottom="2px solid white"
              >
                <Box mt={1}>
                  <Typography>BSC & Polygon</Typography>
                </Box>
              </Grid>

              <Grid item mt={3} md={6} xs={6}>
                <Stack spacing={3} mb={6}>
                  <Box>
                    <Typography>Token Category</Typography>
                  </Box>
                  <Box>
                    <Typography>Token Protocol</Typography>
                  </Box>
                  <Box>
                    <Typography>Token Name</Typography>
                  </Box>
                  <Box>
                    <Typography>Token Symbol</Typography>
                  </Box>
                  <Box>
                    <Typography>Token Supply</Typography>
                  </Box>
                  <Box>
                    <Typography>Token Price</Typography>
                  </Box>
                </Stack>
              </Grid>

              <Grid item mt={3} md={6} xs={6}>
                <Stack
                  spacing={3}
                  mb={6}
                  mr={20}
                  display="flex"
                  justifyContent="center"
                  textAlign="center"
                  alignItems="center"
                >
                  <Box>
                    <Typography>Utility</Typography>
                  </Box>
                  <Box>
                    <Typography>BSC | Ploygon</Typography>
                  </Box>
                  <Box>
                    <Typography>Koinzo Token</Typography>
                  </Box>
                  <Box>
                    <Typography>KZO</Typography>
                  </Box>
                  <Box>
                    <Typography>500 Million</Typography>
                  </Box>
                  <Box>
                    <Typography>$0.50</Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box>
          <Container>
            <Grid mt={10} mb={5} data-aos="fade-down-right">
              <Typography variant="h3" color="secondary">
                KZO Token
              </Typography>
              <Box
                borderTop="1px solid gray"
                width="100px"
                mt={3}
                color="secondary"
              ></Box>
            </Grid>
            <Grid container columnSpacing={2}>
              <Grid item md={6} xs={12} data-aos="fade-down-right">
                <Stack spacing={2} mb={10} ml={2} lineHeight={5}>
                  <Box display="flex">
                    <img
                      src={images.arrowIcon}
                      alt=""
                      width="30"
                      height="32"
                      pb={2}
                    />
                    <Typography ml={2}>
                      KZO Token is a utility token for Koinzo ecosystem.
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <img src={images.arrowIcon} alt="" width="30" height="32" />
                    <Typography ml={2}>
                      KZO Token will be used on the Koinzo Stake platform to
                      earn rewards.
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
                      KZO Tokens can be redeemed for other tokens on platform or
                      stable-coins.
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item md={6} xs={12} data-aos="fade-down-right">
                <Stack spacing={2} mb={10} ml={2} lineHeight={5}>
                  <Box display="flex">
                    <img src={images.arrowIcon} alt="" width="30" height="32" />
                    <Typography ml={2}>
                      KZO Token is fundraising instrument to support Koinzo
                      platform for Real Estate Ecosystem.
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <img src={images.arrowIcon} alt="" width="30" height="32" />
                    <Typography ml={2}>
                      KZO Token is a new revolutionary project that allows all
                      KZO Token ($KZO) holders to generate infinite passive
                      rewards in the form of KZO.
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
      <Container>
        <Box display="flex" mt={4}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <img
                src={images.Bitcoine}
                alt="logo"
                width={520}
                style={{ borderRadius: "16px" }}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <Typography variant="h3" mt={2} color="secondary">
                Tokenomics
              </Typography>
              <Typography variant="body2" mt={2} lineHeight={2} width="450px">
                KZO Token is the next evolution of utility token on the Binance
                Smart Chain (BSC): the first token to maximize your earnings
                both now and in the future. Simply hold $KZO in an eligible
                wallet and automatically receive rewards from every transaction.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Container>
        <Box>
          <Grid
            container
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            mt={10}
            mb={10}
          >
            <Grid item md={2} xs={12}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <img src={images.transaction} alt="" width="60" height="60" />
              </Box>
              <Typography
                variant="h5"
                color="black"
                display="flex"
                justifyContent="center"
                alignItems="center"
                variation="h4"
                mb={1}
              >
                Transaction Tax
              </Typography>
              <Typography
                color="black"
                display="flex"
                justifyContent="center"
                textAlign="center"
              >
                Every transaction has a fee of 5.00% tax charges. The more you
                hold,
              </Typography>
            </Grid>
            <Grid item md={2} xs={12}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <img src={images.Autobutn} alt="" width="60" height="60" />
              </Box>
              <Typography
                variant="h5"
                color="black"
                display="flex"
                justifyContent="center"
                alignItems="center"
                variation="h4"
                mb={1}
              >
                Auto Burn
              </Typography>
              <Typography
                color="black"
                display="flex"
                justifyContent="center"
                textAlign="center"
              >
                1% of total transaction automatically strategic burn in every
                transaction.
              </Typography>
            </Grid>
            <Grid item md={2} xs={12}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src={images.Redistribution}
                  alt=""
                  width="60"
                  height="60"
                />
              </Box>
              <Typography
                variant="h5"
                color="black"
                display="flex"
                justifyContent="center"
                alignItems="center"
                variation="h4"
                mb={1}
              >
                Redistribution
              </Typography>
              <Typography
                color="black"
                display="flex"
                justifyContent="center"
                textAlign="center"
              >
                2% of total transaction will automatically redistributed among
                token holders.
              </Typography>
            </Grid>
            <Grid item md={2} xs={12}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <img src={images.Pancake} alt="" width="60" height="60" />
              </Box>
              <Typography
                variant="h5"
                color="black"
                display="flex"
                justifyContent="center"
                alignItems="center"
                variation="h4"
                mb={1}
              >
                Pancakeswap
              </Typography>
              <Typography
                color="black"
                display="flex"
                justifyContent="center"
                textAlign="center"
              >
                Any transaction between two wallets is taxed 5% by the contract
                and distributed as above.
              </Typography>
            </Grid>
            <Grid item md={2} xs={12}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <img src={images.Liquidity} alt="" width="60" height="60" />
              </Box>
              <Typography
                variant="h5"
                color="black"
                display="flex"
                justifyContent="center"
                alignItems="center"
                variation="h4"
                mb={1}
                textAlign="center"
              >
                Automatic Liquidity Pools
              </Typography>
              <Typography
                color="black"
                display="flex"
                justifyContent="center"
                textAlign="center"
              >
                2% of each transaction will automatically be added to Liquidity
                Pool to create a stable price floor.
              </Typography>
            </Grid>
          </Grid>
        </Box></Container>
        <Container>
        <Box display="flex" mt={4}>
          <Grid container>
            <Grid
              item
              md={6}
              xs={12}
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <img
                src={images.whale}
                alt="logo"
                width={520}
                style={{ borderRadius: "16px" }}
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <Typography
                variant="h4"
                mt={2}
                color="secondary"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Anti-Whale Mechanism
              </Typography>
              <Typography
                variant="body2"
                mt={2}
                lineHeight={2}
                width="550px"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Our Anti-Whale Mechanism ensures that no single sell order can
                amount to more than 0.125% of the total supply of $KZO.
              </Typography>
              <Typography
                variant="body2"
                mt={2}
                lineHeight={2}
                width="550px"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                The Anti-Whale Mechanism won’t necessarily stop Whales from
                selling, but having a maximum allocation limit, transaction cost
                and other elements helps to prevent large selloffs and price
                manipulation.
              </Typography>
            </Grid>
          </Grid>
        </Box></Container>
        <Box>
          <Container>
            <Grid
              container
              mt={6}
              spacing={2}
              maxWidth="md"
              display="flex"
              justifyContent="space-around"
            >
              <Grid
                item
                md={6}
                xs={12}
                mt={8}
                lineHeight="2"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <Typography variant="h4" color="secondary">
                  Multichain
                </Typography>
                <Typography width="300px" lineHeight={2}>
                  This project will launch on BSC initially, but we have plans{" "}
                  <br /> to expand into other chains. After the project launches{" "}
                  <br /> successfully, we will implement these measures and
                  launch <br /> on other chains as well like Polygon and enable
                  Swaps.
                </Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <Typography data-aos="fade-up" data-aos-duration="3000">
                  <img
                    src={images.blockTec}
                    ml={15}
                    alt=""
                    width="580"
                    style={{ borderRadius: "16px" }}
                  />
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Container>
      <Container >
                
                    <Box data-aos="fade-down">
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Grid container backgroundColor="#1877f3" color="white" md={10} sx={12} display="flex" columnSpacing={4} borderRadius="16px" mt={2} mb={10} height="1020">
                                <Grid item md={2} xs={2} mt={2} mb={1} borderBottom="2px solid white" >

                                    <Box mt={1} >
                                        <Typography >
                                            Type
                                        </Typography>
                                    </Box>
                                    <Typography></Typography>

                                </Grid>

                                <Grid item md={2} xs={2} mt={2} mb={1} borderBottom="2px solid white">
                                    <Box mt={1}>
                                        <Typography >
                                            %
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item md={2} xs={2} mt={2} mb={1} borderBottom="2px solid white">
                                    <Box mt={1} >
                                        <Typography>
                                            Token
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item md={2} xs={2} mt={2} mb={1} borderBottom="2px solid white">
                                    <Box mt={1}>
                                        <Typography>
                                            Vested
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item md={2} xs={2} mt={2} mb={1} borderBottom="2px solid white">
                                    <Box mt={1}>
                                        <Typography textAlign="center">
                                            Fully Lockup Period Days
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item md={2} xs={2} mt={2} mb={1} borderBottom="2px solid white">
                                    <Box mt={1}>
                                        <Typography textAlign="center" mr={2}>
                                            Monthly Released Rate After Lockup Period
                                        </Typography>
                                    </Box>
                                </Grid>


                                <Grid item mt={3} md={2} xs={2}>
                                    <Stack spacing={3} mb={6}>

                                        <Box>
                                            <Typography>
                                                Management
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                Advisor
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                Team
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                Marketing Partner
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                EcoSystem Channel
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                Dex Liquidity
                                            </Typography>
                                        </Box>

                                        <Box>
                                            <Typography>
                                                Reserve
                                            </Typography>
                                        </Box>

                                        <Box>
                                            <Typography>
                                                Staking Reward
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                For Sale
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Grid>

                                <Grid item mt={3} md={2} xs={2}>
                                    <Stack spacing={3} mb={6} mr={13} display="flex" justifyContent="center" alignItems="center">

                                        <Box>
                                            <Typography>
                                                9%
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                5%
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                11%
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                10%
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                10%
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                7.5%
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                2.5%
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                12.5%
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                32.5%
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Grid>

                                <Grid item mt={3} md={2} xs={2}>
                                    <Stack spacing={3} mb={6} mr={12} display="flex" justifyContent="center" alignItems="center">

                                        <Box>
                                            <Typography>
                                                45.0M
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                25.0M
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                55.0M
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                50.0M
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                50.0M
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                37.5M
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                12.5M
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                62.5M
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                162.5M
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Grid>

                                <Grid item mt={3} md={2} xs={2}>
                                    <Stack spacing={3} mb={6} mr={8} display="flex" justifyContent="center" alignItems="center">

                                        <Box>
                                            <Typography>
                                                Daily after 30 Days
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                Daily after 60 Days
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                Daily after 90 Days
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Grid>

                                <Grid item mt={3} md={2} xs={2}>
                                    <Stack spacing={3} mb={6} display="flex" justifyContent="center" alignItems="center">

                                        <Box>
                                            <Typography>
                                                180
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                180
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                180
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                90
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Grid>

                                <Grid item mt={3} md={2} xs={2}>
                                    <Stack spacing={1} mb={6} display="flex" >

                                        <Box>
                                            <Typography>
                                                25% after Lookup Period 4% Monthly Release after
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                25% after Lookup Period
                                                4% Monthly Release after
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                25% after Lookup Period
                                                4% Monthly Release after
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography>
                                                25% after Lookup Period
                                                4% Monthly Release after
                                            </Typography>
                                        </Box>

                                        <Box textAlign="center">
                                            <Typography display="flex" justifyContent="flex-start" alignItems="flex-start">
                                                2% Monthly
                                            </Typography>
                                        </Box>



                                        <Box>
                                            <Typography textAlign="start">

                                            </Typography>
                                        </Box>

                                        <Box>
                                            <Typography textAlign="start">

                                            </Typography>
                                        </Box>

                                        <Box>
                                            <Typography >

                                            </Typography>
                                        </Box>

                                        <Box >
                                            <Typography mt={4}>
                                                Average 5-7% Release
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Grid>





                            </Grid>



                        </Box>

                    </Box>
              
            </Container>

      <Box backgroundColor="#1b208e">
        <Grid container mt={4} display="flex" mb={4}>
          <Grid item md={9} xs={2} mt={10} mb={10}>
            <Box ml={10}>
              <img src={images.TokenAll} alt="token" width="700" />
            </Box>
          </Grid>
          <Grid item md={3} xs={2} mt={20}>
            <Typography
              variant="h3"
              mr={5}
              color="#00e4ff"
              fontWeight="bold"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              KZO Token Allocation
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box backgroundColor="#1b208e">
        <Grid container mt={4} display="flex" mb={4}>
          <Grid item xs={2} md={4} mt={20}>
            <Typography
              variant="h3"
              color="#00e4ff"
              fontWeight="bold"
              ml={8}
              mt={20}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Usage of Funds
            </Typography>
          </Grid>
          <Grid item xs={12} md={8} mt={10} mb={8}>
            <Box ml={10}>
              <img
                src={images.UsageFund}
                alt="token"
                width="650"
                data-aos="fade-up"
                data-aos-duration="3000"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
export default KzoToken;
