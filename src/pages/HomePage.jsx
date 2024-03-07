import React, { useState } from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import NavBar from "../components/navBar/NavBar";
import SocialLinks from "../components/navBar/SocialLinks";
import { useMediaQuery } from "react-responsive";
import ImageCard from "../components/heroSection/ImageCard";
import IntroText from "../components/heroSection/IntroText";

export default function HomePage() {
  const isSmallLaptop = useMediaQuery({ minWidth: 1072, maxHeight: 900 });
  const isTablet = useMediaQuery({ minWidth: 1000, maxWidth: 1072 });
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  const [imgHeight, setImgHeight] = useState(null);

  return (
    <>
      <Box
        height="100vh"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NavBar />
        {!isMobile && (
          <Grid container xs={12} sx={{ flexGrow: 1 }}>
            <Grid
              xs={7}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                paddingRight: "5vw",
                paddingLeft: "48px",
              }}
            >
              <IntroText
                useLargeFont
                isTablet={isTablet || isSmallLaptop}
                isMobile={isMobile}
              />
              <Box
                sx={{
                  marginTop: isSmallLaptop ? "13vh" : "18vh",
                }}
              >
                <SocialLinks
                  boxMargin="24px 112px"
                  iconSize="100px"
                  cardSize="56px"
                  textVariant={"subtitle1"}
                />
              </Box>
            </Grid>
            <Grid
              xs={5}
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              <ImageCard
                boxJustify="flex-start"
                imgHeight={imgHeight}
                setImgHeight={setImgHeight}
                cardHeight={imgHeight ? imgHeight * 0.68 : "52vh"}
              />
            </Grid>
          </Grid>
        )}
        {isMobile && (
          <Box container sx={{ flexGrow: 1 }}>
            <Box
              xs={12}
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                paddingTop: "50px",
                height: imgHeight,
              }}
            >
              <ImageCard
                boxJustify="center"
                imgHeight={imgHeight}
                setImgHeight={setImgHeight}
                cardHeight={imgHeight ? imgHeight * 0.75 : "52vh"}
                width="80vw"
                maxWidth="400px"
              />
            </Box>
            <Box
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: "0 10vw",
              }}
            >
              <IntroText
                useLargeFont={false}
                isTablet={isTablet}
                isMobile={isMobile}
              />
              <Box
                sx={{
                  marginTop: "5vh",
                }}
              >
                <SocialLinks
                  boxMargin="24px 112px"
                  iconSize="100px"
                  cardSize="56px"
                  textVariant="subtitle3"
                />
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}
