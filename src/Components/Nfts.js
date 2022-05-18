import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import styled from "@emotion/styled";
import images from "../imgs/images";
import { Grid } from "@mui/material";

const ImageContainer = styled(Box)(
  ({ theme }) => `
  visibility:visible;
  position:absolute;
  right:0;
  top:0;
  left:0;
  bottom:0;
  widht: 100%;
  height: 100%;
  overflow: hidden;
  display: block;
  pointer-events: none;
  transition:display 03s;`
);

function Nfts() {
  return (
    <>
      <Box
        sx={{
          backgroundBlendMode: "overlay",
          backgroundImage:
            "url(https://koinzo.com/wp-content/uploads/2022/02/coding-background-texture.jpg)!important",
          position: "relative",
          padding: "8vw 0",
        }}
      >
        <Box>
          <ImageContainer component={"span"}>
            <video loop autoPlay muted playsInline src={images.nft}>
              <source type="video/mp4" src={images.nft} n />
            </video>
          </ImageContainer>
        </Box>
        <Container>
          <Box>
            <Grid Container>
              <Grid
                item
                md={6}
                xs={12}
                mt={15}
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <Box
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Typography ml={10} color="white" variant="h3" zIndex={50}>
                    Real Estate backed NFTs &<br /> Marketplace
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={6} xs={12} mt={6}>
                <Box
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <Typography
                    ml={10}
                    color="white"
                    zIndex={50}
                    variant="subtitle1"
                    width="700px"
                  >
                    As technology evolves alongside society, nearly all aspects
                    of life increasingly shift to the digital and virtual space.
                    From work and school to conferences and social gatherings.
                    We can do all of these things from the comfort of our homes
                    through computers, smartphones, and tablets. But a
                    surprising addition to that list is buying Real Estate
                    properties via NFTs or friction ownership in Real Estate
                    asset.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container>
          <Box>
            <Grid container mt={10}>
              <Grid item md={6} xs={12}>
                <Box
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <Typography color="black" variant="subtitle1">
                    Non-fungible tokens are unique digital assets that are
                    developed on a digital ledger called blockchain technology.
                    These tokens could neither be replicated nor be destroyed.
                    Thus, every transaction detail is recorded and secured
                    efficiently in the blockchain.
                  </Typography>
                </Box>
              </Grid>

              <Grid item md={6} xs={12}>
                <Box
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <Typography color="black" variant="subtitle1">
                    The monetization of Real Estate platforms by using the power
                    of NFTs is an effective way to provide enormous liquidity
                    and business opportunities for the individuals and
                    organizations that are interested in this platform. The
                    primary reason for attracting numerous investors to the
                    platform is because of the quality of holding partial
                    ownership in the tokens that were generated by tokenizing
                    the Real Estate asset. The digital world has allowed
                    businesses to explore the world of Real Estate in two
                    impressive methods. These methods can be implemented to
                    their advantage by developing their NFT business platform.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
            mt={6}
          >
            <Typography
              variant="h3"
              color="secondary"
              fontWeight="semi-bold"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Key Points:
            </Typography>
          </Box>

          <Box borderBottom="3px solid #09ADA9 " mt={4} width="9%"></Box>

          <Box>
            <Grid
              container
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Grid item md={6} xs={12}>
                <Box display="flex" mt={5}>
                  <Box sx={{ spacing: 2 }}>
                    <img src={images.arrowIcon} alt="" width="28" height="28" />
                  </Box>
                  <Typography ml={3} color="black" variant="h6" fontSize="1rem">
                    NFTs can work for Real Estate, however, tokenizing Real
                    Estate is still in its infancy and much of the
                    infrastructure and legal frameworks are nascent or
                    non-existent in most part of the world. We are positioning
                    Koinzo to be a leader in Real Estate NFTs space and we will
                    help policy makers a smooth transition.
                  </Typography>
                </Box>
              </Grid>

              <Grid item md={6} xs={12}>
                <Box display="flex" mt={5} ml={5}>
                  <Box>
                    <img src={images.arrowIcon} alt="" width="28" height="28" />
                  </Box>
                  <Typography ml={3} color="Black" variant="h6" fontSize="1rem">
                    A real estate NFT is a kind of digital certificate of
                    ownership, similar to a deed, that is published (“minted”)
                    on a blockchain for the world to see and verify ownership.
                  </Typography>
                </Box>

                <Box display="flex" mt={5} ml={5}>
                  <Box>
                    <img src={images.arrowIcon} alt="" width="28" height="28" />
                  </Box>
                  <Typography ml={3} color="Black" variant="h6" fontSize="1rem">
                    Future innovations using real estate NFTs, such as DeFi
                    lending/borrowing, fractional ownership, crowdfunding, and
                    more, have the potential to transform the industry.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box
            mt={6}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Typography color="black" variant="subtitle1">
              The future of real estate tokenization will go far beyond
              ownership transfers by opening up new avenues of innovation for
              real estate investors. Although it is still very early in the real
              estate NFT space, mainstream adoption of this method of ownership
              could be just around the corner; and the innovation it could bring
              with it could be immense.
            </Typography>
          </Box>
        </Container>

        <Box backgroundColor="#4b53c1">
          <Container>
            <Box>
              <Container>
                <Grid
                  container
                  columnSpacing={6}
                  display="flex"
                  justifyContent="start"
                  mt={4}
                >
                  <Grid item xs={12} md={6} mt={20} mb={30}>
                    <Box
                      borderRadius="16px"
                      data-aos="fade-up"
                      data-aos-duration="3000"
                    >
                      <img
                        src={images.Defi2}
                        alt="logo"
                        width="396"
                        height="434"
                        style={{ borderRadius: "16px" }}
                      />
                    </Box>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    mt={17}
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    <Typography variant="h3" color="white">
                      DeFi Lending and Borrowing:
                    </Typography>
                    <Box
                      borderBottom="5px solid white"
                      width="17%"
                      mt={2}
                    ></Box>
                    <Typography
                      variant="h6"
                      color="common.white"
                      display="flex"
                      mt={2}
                    >
                      Real estate NFTs open the door to “DeFi” (decentralized
                      finance), that allows for peer-to-peer borrowing and
                      lending. With a real estate NFT, user can prove, on the
                      blockchain, that s/he owns a property, which means that it
                      has the potential to be used as collateral in the crypto
                      world.
                    </Typography>
                    <Typography
                      variant="h6"
                      color="common.white"
                      display="flex"
                      mt={2}
                    >
                      Imagine being able to take a loan against a house without
                      having to go through a middleman like a bank. The market
                      for DeFi for traditional crypto assets (peer-to-peer
                      borrowing and lending of fungible tokens such as Bitcoin,
                      Ethereum, and others) is already massive.
                    </Typography>

                    <Typography
                      variant="h6
                                        "
                      color="common.white"
                      display="flex"
                      mt={2}
                      mb={30}
                    >
                      DeFi platform like Aave already has billions of dollars’
                      worth of crypto assets being borrowed and lent; with Real
                      Estate NFTs, we could see the same sort of boom, which
                      could fundamentally transform the way the industry works
                      today. Koinzo is prepared to position itself a leader
                      player in Real Estate NFTs space. Koinzo Management
                      decided to kept some information private for now, that
                      information will be made available as we make progress on
                      our NFTs timeline.
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </Container>
        </Box>

        <Box
          sx={{
            backgroundImage:
              "url(https://koinzo.com/wp-content/uploads/2022/02/coding-background-texture.jpg), linear-gradient(0deg,#4b53c1 0%,rgba(45,48,239,0.83) 100%) !important",
            paddingTop: "10vw",
            paddingBottom: "10vw",
            backgroundBlendMode: "overlay",
            position: "relative",
          }}
        >
          <Box
            sx={{
              backgroundImage:
                "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDBweCIgdmlld0JveD0iMCAwIDEyODAgMTQwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik05NzguODEgMTIyLjI1TDAgMGgxMjgwbC0yNjIuMSAxMTYuMjZhNzMuMjkgNzMuMjkgMCAwIDEtMzkuMDkgNS45OXoiIGZpbGwtb3BhY2l0eT0iLjUiLz48cGF0aCBkPSJNOTgzLjE5IDk1LjIzTDAgMGgxMjgwbC0yNjYgOTEuNTJhNzIuNTggNzIuNTggMCAwIDEtMzAuODEgMy43MXoiLz48L2c+PC9zdmc+)",

              backgroundSize: "100% 100px",
              top: 0,
              height: "100px",
              zIndex: 1,
              display: "block",
              backgroundRepeat: "no-repeat",
              pointerEvents: "none",
              position: "absolute",
              left: 0,
              right: 0,
            }}
          ></Box>
          <Container>
            <Grid
              container
              columnSpacing={6}
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <Grid item md={4} xs={12}>
                <Box backgroundColor="white" borderRadius="12px">
                  <Container>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      mb={2}
                    >
                      <img
                        src={images.Security}
                        alt="security"
                        width="80"
                        height="80"
                      />
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography
                        color="common.black"
                        variant="subtitle1"
                        fontSize="1rem"
                        fontWeight="bold"
                        mt={1}
                      >
                        High-Grade Security
                      </Typography>
                    </Box>
                    <Box mb={4}>
                      <Typography color="common.black" textAlign="center">
                        Since this platform is built on the power of blockchain
                        technology, the transactions are stored and secured
                        safely.
                      </Typography>
                    </Box>
                  </Container>
                </Box>
              </Grid>

              <Grid item md={4} xs={12}>
                <Box backgroundColor="white" borderRadius="12px">
                  <Container>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      mb={2}
                    >
                      <img
                        src={images.Ownership}
                        alt="security"
                        width="80"
                        height="80"
                      />
                    </Box>
                    <Box>
                      <Typography
                        color="common.black"
                        variant="subtitle1"
                        fontSize="1rem"
                        fontWeight="bold"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        mt={2}
                      >
                        Authentication Of Ownership
                      </Typography>
                    </Box>
                    <Box mb={4}>
                      <Typography color="common.black" textAlign="center">
                        Since this platform is built on the power of blockchain
                        technology, the transactions are stored and secured
                        safely.
                      </Typography>
                    </Box>
                  </Container>
                </Box>
              </Grid>

              <Grid item md={4} xs={12}>
                <Box backgroundColor="white" borderRadius="12px">
                  <Container>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      mb={2}
                    >
                      <img
                        src={images.Trading}
                        alt="security"
                        width="80"
                        height="80"
                      />
                    </Box>
                    <Box>
                      <Typography
                        color="common.black"
                        variant="subtitle1"
                        fontSize="1rem"
                        fontWeight="bold"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        mt={2}
                      >
                        Easy Trading
                      </Typography>
                    </Box>
                    <Box mb={4}>
                      <Typography
                        color="common.black"
                        textAlign="center"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                      >
                        Real estate NFT marketplaces are unique platforms that
                        are created for the sole purpose of trading NFT real
                        estate assets
                      </Typography>
                    </Box>
                  </Container>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
export default Nfts;
