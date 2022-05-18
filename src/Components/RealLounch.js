import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import images from "../imgs/images";
import { Stack } from "@mui/material";

function RealLounch() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(180deg,rgba(35,98,175,0.37) 0%,#2931c6 100%),url(https://koinzo.com/wp-content/uploads/2022/02/office-building-2021-08-30-00-07-09-utc.jpg)!important",

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
          <Grid item>
            <Box ml={18} color="white">
              <Typography
                mt={20}
                mb={20}
                variant="h1"
                fontWeight="bold"
                width="800px"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                RealLaunch
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid
          container
          display="flex"
          justifyContent="center"
          backgroundColor="#2d6dec"
          mb={10}
          ml={13}
          md={10}
          sm={10}
          columnSpacing={4}
          borderRadius="16px"
          sx={{ transform: "translateY(-80px)" }}
        >
          <Grid item md={3} xs={6} mt={5} mb={8}>
            <Box>
              <Typography
                lineHeight={2}
                color="white"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                The most advanced IDO launchpad with the fairest distribution
                and inbuilt price discovery mechanism to yield the best returns
                for the IDO buyers and the project which do
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={6} mt={5} mb={8}>
            <Box>
              <Typography
                lineHeight={2}
                color="white"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                The most advanced IDO launchpad with the fairest distribution
                and inbuilt price discovery mechanism to yield the best returns
                for the IDO buyers and the project which do
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={6} mt={5} mb={8}>
            <Box>
              <Typography
                lineHeight={2}
                color="white"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                The most advanced IDO launchpad with the fairest distribution
                and inbuilt price discovery mechanism to yield the best returns
                for the IDO buyers and the project which do
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={6} mt={5} mb={8}>
            <Box>
              <Typography
                lineHeight={2}
                color="white"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                The most advanced IDO launchpad with the fairest distribution
                and inbuilt price discovery mechanism to yield the best returns
                for the IDO buyers and the project which do
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Container>
        <Box mb={5}>
          <Grid container display="flex" md={12} columnSpacing={2}>
            <Grid
              item
              md={6}
              xs={12}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Box ml={4}>
                <Typography variant="h4" color="#1bbdb3">
                  WHY IDO LAUNCHPAD
                </Typography>
              </Box>
              <Typography ml={4} lineHeight={2.3}>
                The recent rise of decentralized technologies and its use have
                grown in many thousand percentages from Uniswap, Pancakeswap and
                such have enabled users to trade and bring billions of dollars
                in liquidity and volume all from the wallet which offers great
                advantages over the centralized exchanges. This growth and the
                direction market is heading, RealLaunch (Launchpad) has made a
                very advanced decentralized multichain protocol so the users can
                benefit in buying tokens at Koinzo at the maximum possible
                market driven price endpoint as a result of price discovery and
                fundraisers are able to have a very fair distribution of tokens
                as well as gauge the interest, completely permissionless.
                RealLaunch looks to completely enhance the way new projects
                gather liquidity and how participating users can gain most from
                it to get the best yield. All done decentrally permissionless,
                interoperable in a multi cross chained environment through
                Koinzo.
              </Typography>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box data-aos="fade-up" data-aos-duration="3000">
                <img
                  src={images.IDO}
                  alt=""
                  width="600"
                  style={{ borderRadius: "16px" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box mb={5}>
        <Grid container display="flex" md={12} columnSpacing={2}>
          <Grid item ml={5} md={6} xs={12}>
            <Box data-aos="fade-up" data-aos-duration="3000">
              <img
                src={images.IDOo}
                alt=""
                width="550"
                style={{ borderRadius: "16px" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            md={5}
            xs={12}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Box ml={4} mt={10}>
              <Typography variant="h4" color="#1bbdb3">
                What is an Initial Dex Offering (IDO)?
              </Typography>
            </Box>
            <Typography ml={4} lineHeight={2.3}>
              An IDO is a fundraising method in which the token is issued via a
              decentralized liquidity exchange. A decentralized liquidity
              exchange is a type of crypto asset exchange that relies on
              liquidity pools with which traders can swap tokens.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Container>
        <Box>
          <Grid container md={10} ml={7}>
            <Grid
              item
              md={12}
              xs={12}
              sx={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
              ml={8}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Typography variant="h4" color="#1bbdb3" mt={5} mb={5}>
                Highly vetted Real Estate Projects and teams you can trust.
              </Typography>
            </Grid>
            <Grid
              item
              md={12}
              xs={2}
              sx={12}
              display="flex"
              justifyContent="center"
              alignItems="center"
              ml={8}
            >
              <Box data-aos="fade-up" data-aos-duration="3000">
                <img
                  src={images.kionzoBulding}
                  alt=""
                  style={{ borderRadius: "16px" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container>
        <Box mb={5} mt={10}>
          <Grid
            container
            display="flex"
            columnSpacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={5} xs={12}>
              <Box data-aos="fade-up" data-aos-duration="3000">
                <img
                  src={images.femaleStat}
                  alt=""
                  width="500"
                  style={{ borderRadius: "16px" }}
                />
              </Box>
            </Grid>
            <Grid item md={5} xs={12} ml={6}>
              <Box
                mt={7}
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <Typography variant="h4">IDO MARKET STATISTICS</Typography>
              </Box>
              <Typography
                lineHeight={2}
                width="600px"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Currently over $63 billion in monthly volume come just from
                decentralized exchanges and the ecosystem boost that comes from
                IDO Launchpad is placed in the prime center of it all for
                helping new projects raise liquidity in the most optimal way.
                Also, the crypto ecosystem users need a way to get the tokens at
                optimal price so they can get best yield for their participation
                in providing liquidity and funding the projects.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container>
        <Grid
          container
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <Grid item md={12} xs={10}>
            <Box>
              <Typography variant="h5" fontWeight="bold">
                Disrupting the Real Estate Industry with new capital structure
              </Typography>
              <Typography mt={2}>
                Koinzo makes disruptive use of blockchain technology in multiple
                ways:
              </Typography>
            </Box>

            <Typography mt={2}>
              Koinzo aiming to use blockchain utility tokens to provide
              meaningful rewards and incentives to crypto evangelists to take
              part to revolutionize the Real Estate Industry and be early
              adopter. We launched KZO token to raise funds. We’re using the
              proceeds to develop a complete ecosystem of capabilities, each of
              which expands our capabilities and returns dividends to
              shareholders while diversifying the investment.
            </Typography>
            <Typography mt={2}>
              Koinzo is the first Launchpad which allows Real Estate related
              companies to offer their product and service using Utility Tokens
              as well as Security Tokens depending on the nature of their
              businesses. All utility tokens will be launched on Koinzo platform
              and Security Tokens will be launched using Koinzo partners. Tokens
              will be placed on as many exchanges as possible to ensure maximum
              value and tradability. Koinzo will provide assistance to turn
              client ideas into reality.
            </Typography>
            <Typography mt={2}>
              We intend to be in full compliance of any and all pertinent
              regulations, and we shall amend the terms of the STO as required
              by any securities trading regulations applicable to cryptocurrency
              transactions, now and in the future, as required by law; including
              STO offering to only accredited investors in certain countries or
              KYC and AML requirements of exchanges and Governments.
            </Typography>
            <Typography mt={2}>
              Koinzo will provide expertise and facilitation to all organization
              who wants to use Crypto Platform as source of their funding and in
              return KZO holders will get deep discounts and preferred
              allocations to all new projects launched via Koinzo.
            </Typography>
            <Typography mt={2}>
              In addition to fund raising for projects, Koinzo will utilize
              blockchain technology to create valuable utility token rewards for
              town planners, structure engineers, and architects in Metaverse.
              Koinzo will also make innovative use of Blockchain technology to
              build virtual space.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Box>
          <Grid
            container
            
            mt={5}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Grid item md={12} sx={7.5}>
              <Box>
                <Typography variant="h5" fontWeight="bold">
                  Risk Reduction with Proven model
                </Typography>
                <Typography mt={1} variant="h6" fontWeight="bold">
                  Koinzo with use these step process
                </Typography>
              </Box>

              <Typography mt={2}>
                1.Selection: Select a winning Project
              </Typography>
              <Typography mt={0.5}>
                2.Due Diligence: Perform due diligence by Koinzo industry
                exports to size the opportunity and viability.
              </Typography>
              <Typography mt={0.5}>
                3.Compliance & regulatory requirements.
              </Typography>
              <Typography mt={0.5}>4.Tokenization & Tokenomics</Typography>
              <Typography mt={0.5}>
                a.All projects will strict tokenomics to ensure the safety of
                funds.
              </Typography>
              <Typography mt={0.5}>
                b.All tokens will be vested over period of project, and team
                token holders will not be permitted to release more than 33% of
                their tokens in any one calendar year.
              </Typography>
              <Typography mt={0.5}>
                c.Koinzo will ensure that the smart contracts are designed to
                ensure smooth operations and rapid transactions. All smart
                contracts will be audited.
              </Typography>
              <Typography mt={0.5}>
                5.Distribution of Funds and Incentives
              </Typography>
              <Typography mt={0.5}>
                6.This makes Koinzo both the first launchpad offering end to end
                services, and the first to be funded by utility token to lower
                the barrier to entry for traditional Real Estate developers and
                companies to participate in crypto revolution.
              </Typography>
              <Typography mt={0.5}>7.Return on Investment</Typography>
              <Typography mt={0.5}>
                8.Token holders benefit from the upside of KZO, including each
                business pillar and partner company that together create a
                sustainable business in Real Estate industry.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container>
        <Box mb={5}>
          <Grid container display="flex" columnSpacing={5} ml={3}>
            <Grid
              item
              md={6}
              xs={12}
              mt={10}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <Box ml={4}>
                <Typography variant="h5" fontWeight="bold">
                  MULTI-CHAIN SUPPORT
                </Typography>
              </Box>
              <Typography ml={4} lineHeight={2.3}>
                We believe the future of the entire cryptocurrency industry is
                multi chain. Raise Capital Across All Main Blockchain Networks.
              </Typography>
            </Grid>
            <Grid item md={6} xs={10}>
              <Box data-aos="fade-up" data-aos-duration="3000">
                <img
                  src={images.MultiChain}
                  alt=""
                  width="500"
                  style={{ borderRadius: "16px" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box>
        <Grid
          container
          columnSpacing={6}
          display="flex"
          backgroundColor="#2d6dec"
          justifyContent="space-around"
          alignItems="center"
          mt={10}
        >
          <Grid item md={5} mt={10} lineHeight={2}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                src={images.lock}
                alt=""
                width="80"
                height="80"
                data-aos="zoom-in-down"
              />
            </Box>
            <Typography
              variant="h5"
              color="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              variation="h4"
              mb={1}
            >
              LIQUIDITY LOCKERS
            </Typography>
            <Typography
              display="flex"
              justifyContent="center"
              textAlign="center"
              color="white"
            >
              Project developers are welcomed to use our security feature
              allowing them to lock their liquidity provider tokens. Locking
              liquidity is becoming a standard in the DeFi industry, and we are
              proud to re-affirm this concept.
            </Typography>
          </Grid>
          <Grid item md={5} mt={10} lineHeight={2}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                src={images.Tokken}
                alt=""
                width="80"
                height="80"
                data-aos="zoom-in-down"
              />
            </Box>
            <Typography
              variant="h5"
              color="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              variation="h4"
              mb={1}
            >
              TOKEN VESTING
            </Typography>
            <Typography
              color="white"
              display="flex"
              justifyContent="center"
              textAlign="center"
            >
              Vesting options can both be utilized by project owners and/or
              early adopters of a technology. We offer this option as a
              standalone and integrated service. Wallets vesting tokens are
              reflected in a dedicated UI.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid
          container
          columnSpacing={6}
          display="flex"
          backgroundColor="#2d6dec"
          justifyContent="space-around"
          alignItems="center"
          mb={10}
        >
          <Grid item md={5} lineHeight={2} mt={10}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                src={images.Decentralize}
                alt=""
                width="80"
                height="80"
                data-aos="zoom-in-down"
              />
            </Box>
            <Typography
              variant="h5"
              color="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              variation="h4"
              mb={1}
              textAlign="center"
            >
              DECENTRALIZED LAUNCHPAD FOR NEW PROJECTS
            </Typography>
            <Typography
              display="flex"
              justifyContent="center"
              textAlign="center"
              color="white"
            >
              Our technology can serve you to launch your project as quickly as
              2 weeks. We are collaborating with an ever-increasing number of
              third-party providers that can review different aspects of your
              product. As an startup, you can also use our technology to launch
              your very own incubated project with our help.
            </Typography>
          </Grid>
          <Grid item md={5} mt={1} lineHeight={2}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                src={images.Staking}
                alt=""
                width="80"
                height="80"
                data-aos="zoom-in-down"
              />
            </Box>
            <Typography
              variant="h5"
              color="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              variation="h4"
              mb={1}
            >
              STAKING AS A SERVICE
            </Typography>
            <Typography
              color="white"
              display="flex"
              justifyContent="center"
              textAlign="center"
            >
              Sustainable projects are permanently looking to reward their
              communities. We now offer them this possibility. This service
              consists in generating staking contracts that can incentivize
              holders and communities to enjoy the rewards made available for
              them by their favorite projects!
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default RealLounch;
