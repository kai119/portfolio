import {
  AppBar,
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Divider,
  Drawer,
  Link,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import HamburgerIcon from "./HamburgerIcon";
import SocialLinks from "./SocialLinks";
import KaiCV from "../../assets/Kai_Mumford_CV.pdf";

export default function NavBar() {
  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 1024px)" });
  const [selectedSection, setSelectedSection] = useState("");
  const [currentHover, setCurrentHover] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const pageLinks = ["home", "experience", "projects", "contact"];

  const AvatarLabel = styled("div")({
    display: "flex",
    alignItems: "center",
  });

  const getLinkColour = (pageLink) => {
    if (currentHover === pageLink) {
      return "text.primary";
    } else if (currentHover !== "") {
      return "text.disabled";
    } else {
      return "text.secondary";
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "transparent",
        height: "72px",
      }}
    >
      <Grid container xs={12}>
        <Grid xs={3}>
          <AvatarLabel>
            <Avatar
              alt="Kai Mumford"
              src={process.env.PUBLIC_URL + "/img/avatar.png"}
              sx={{
                margin: 2,
                border: 1,
                borderColor: theme.palette.secondary.main,
              }}
            />
            <Typography
              color="text.primary"
              variant="body2"
              sx={{
                width: "auto",
              }}
            >
              Kai Mumford
            </Typography>
          </AvatarLabel>
        </Grid>
        <Grid xs={9}>
          {isTabletOrMobile && (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                height: "100%",
                transition: "all .5s ease",
              }}
            >
              {pageLinks.map((pageLink) => (
                <Link
                  data-testid={"navBar-desktop-pageLink-" + pageLink}
                  onClick={() => setSelectedSection(pageLink)}
                  variant="body1"
                  onMouseEnter={() => setCurrentHover(pageLink)}
                  onMouseLeave={() => setCurrentHover("")}
                  underline="none"
                  href={"#" + pageLink}
                  sx={{
                    color:
                      pageLink === selectedSection
                        ? "text.primary"
                        : getLinkColour(pageLink),
                    transition: "all .5s ease",
                    WebkitTransition: "all .5s ease",
                    MozTransition: "all .5s ease",
                    width: "120px",
                    margin: "0 2%",
                    paddingTop: "auto",
                    paddingBottom: "auto",
                    textAlign: "center",
                  }}
                >
                  {pageLink.charAt(0).toUpperCase() + pageLink.slice(1)}
                </Link>
              ))}
              <Card
                sx={{
                  background: theme.palette.card.main,
                  boxShadow: 1,
                  height: "50%",
                  marginLeft: "3%",
                  marginRight: "5.8%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a href={KaiCV} download target="_self">
                  <CardActionArea>
                    <CardContent>
                      <Typography
                        sx={{
                          width: "60px",
                          display: "flex",
                          justifyContent: "center",
                        }}
                        color="primary"
                      >
                        Resume
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </a>
              </Card>
            </div>
          )}
          {!isTabletOrMobile && (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                height: "100%",
              }}
            >
              <HamburgerIcon
                data-testid="hamburger-icon"
                open={drawerOpen}
                onClick={() => setDrawerOpen(!drawerOpen)}
              />
              <Drawer
                anchor="right"
                open={drawerOpen}
                data-testid="navBar-drawer"
                sx={{
                  zIndex: 1,
                }}
                PaperProps={{
                  sx: {
                    width: "42%",
                    backgroundColor: "menu.main",
                  },
                }}
              >
                <Divider
                  variant="middle"
                  sx={{
                    marginTop: "72px",
                    color: "divider.main",
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  {pageLinks.map((pageLink) => (
                    <Link
                      data-testid={"navBar-mobile-pageLink-" + pageLink}
                      onClick={() => {
                        setSelectedSection(pageLink);
                        setDrawerOpen(false);
                      }}
                      variant="body1"
                      onMouseEnter={() => setCurrentHover(pageLink)}
                      onMouseLeave={() => setCurrentHover("")}
                      underline="none"
                      href={"#" + pageLink}
                      sx={{
                        color:
                          pageLink === selectedSection
                            ? "text.primary"
                            : getLinkColour(pageLink),
                        transition: "all .5s ease",
                        WebkitTransition: "all .5s ease",
                        MozTransition: "all .5s ease",
                        width: "120px",
                        margin: "3% 0",
                        paddingTop: "auto",
                        paddingBottom: "auto",
                        textAlign: "center",
                      }}
                    >
                      {pageLink.charAt(0).toUpperCase() + pageLink.slice(1)}
                    </Link>
                  ))}

                  <Card
                    sx={{
                      background: theme.palette.card.main,
                      boxShadow: 2,
                      height: "12%",
                      display: "flex",
                      margin: "3vh 0",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <a href={KaiCV} download="Test_PDF" target="_self">
                      <CardActionArea>
                        <CardHeader
                          title="Resume"
                          titleTypographyProps={{
                            color: "primary",
                            variant: "body1",
                          }}
                          sx={{
                            color: "primary",
                          }}
                        />
                      </CardActionArea>
                    </a>
                  </Card>
                </Box>
                <Divider
                  variant="middle"
                  sx={{
                    margin: "2vh 0",
                    color: "divider.main",
                  }}
                />
                <SocialLinks
                  boxMargin="3vh 3% 0 3%"
                  cardSize="40px"
                  iconSize="24px"
                />
              </Drawer>
            </div>
          )}
        </Grid>
      </Grid>
    </AppBar>
  );
}
