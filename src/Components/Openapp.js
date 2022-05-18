import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import images from "../imgs/images";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { TextareaAutosize } from "@mui/material";
import { Button } from "@mui/material";

export default function Openapp() {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            backgroundImage:
              "linear-gradient(-45deg,rgba(3,37,121,0.42) 0%,rgba(27,82,217,0.93) 100%),url(https://koinzo.com/wp-content/uploads/2022/01/modern-building-to-sky-at-night-2021-08-29-08-33-39-utc.jpg)!important",
            maxWidth: "80%",
            transition: { borderRadius: "300ms ease 0ms" },
            backgroundRepeat: "no-repeat",
            paddingtop: "10px",
            marginLeft: "auto!important",
          }}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            sx={{
              backgroundImage:
                "url(https://koinzo.com/wp-content/uploads/2022/01/risk-29.png)",
              backgroundSize: "contain",

              backgroundPosition: "left bottom 0p",
              backgroundRepeat: "no-repeat",
              boxShadow: "inset 0px -1px 0px 0px #ffffff",
              width: "100%",
              maxWidth: "100%",
              // height: 372
              paddingTop: " 8vw!important",
              paddingRight: "10vw!important",
              paddingBottom: "10vw!important",
              paddingLeft: "0px!important",
            }}
          >
            <Box  data-aos="fade-up"
     data-aos-duration="3000"
              backgroundColor="white"
              width="25rem"
              sx={{ transform: "translateX(-25%)", borderRadius: "5px" }}
            >
              <Typography
                color="#1bbdb3"
                fontSize="3rem"
                fontWeight="bold"
                mt={2}
                mb={2}
               
              >
                Contact US
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Container>
        <Box>
          <Container>
            <Box
              display="flex"
              background="transparent"
              backgroundColor="#fff"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                mt={15}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <img
                  src={images.msg}
                  alt="message"
                  width="32"
                  height="32"
                  sx={{ ml: "20px" }}
                />

                <Typography color="black" variant="h3" mt={3}>
                  Email
                </Typography>
                <Typography
                  color="black"
                  variant="subtitle1"
                  fontSize="1rem"
                  mt={3}
                >
                  inquiry@koinzo.com
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </Container>
      <Box borderBottom="1px solid gray" ml={15} mr={15} mt={15}></Box>
      <Container data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography color="#1bbdb3" variant="h2" mt={10}>
            Send Us A Message
          </Typography>
        </Box>

        <Box borderBottom="3px solid #1BBDB3" ml={60} mr={60} mt={5}></Box>
      </Container>
      <Container data-aos="fade-up"
     data-aos-duration="3000">
        <Box display="flex" mt={10} ml={10}>
          <Grid container>
            <Grid item md={6} xs={6}>
              <Box width="90%">
                <TextField
                  type="text"
                  color="primary"
                  placeholder="FirstName"
                  fullWidth
                />
              </Box>
            </Grid>

            <Grid item md={6} xs={6}>
              <Box width="90%">
                <TextField type="text" placeholder="LastName" fullWidth />
              </Box>
            </Grid>

            <Grid item md={6} xs={6}>
              <Box width="90%" mt={5}>
                <TextField
                  type="text"
                  color="primary"
                  placeholder="FirstName"
                  fullWidth
                />
              </Box>
            </Grid>

            <Grid item md={6} xs={6} mt={5}>
              <Box width="90%">
                <TextField type="text" placeholder="LastName" fullWidth />
              </Box>
            </Grid>

            <Grid item md={12} xs={12} mt={5}>
              <Box width="100%">
                <TextareaAutosize
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Message"
                  style={{ width: "63.5rem", height: "10rem" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container>
        <Box
          mt={3}
          display="flex"
          justifyContent="flex-end"
          alignItems="flex-end"
          mr={6}
        >
          <Button
            variant="contained"
            color="secondary"
            style={{ height: "3rem" }}
          >
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
