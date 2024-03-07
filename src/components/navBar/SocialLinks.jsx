import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Icon,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import "./SocialLinks.css";
import EmailSvg from "../../assets/EmailIcon.svg";
import GithubSvg from "../../assets/GithubIcon.svg";
import LinkedinSvg from "../../assets/LinkedinIcon.svg";

function SocialLinks(props) {
  const theme = useTheme();

  const icons = [LinkedinSvg, GithubSvg, EmailSvg];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography color="text.primary" variant={props.textVariant}>
        Find me on
      </Typography>
      <Box
        sx={{
          margin: props.boxMargin,
          display: "flex",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        {icons.map((icon, index) => (
          <Card
            key={"icon-card-" + index}
            sx={{
              background: theme.palette.card.main,
              boxShadow: 2,
            }}
          >
            <CardActionArea
              sx={{
                width: props.cardSize,
                height: props.cardSize,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon
                sx={{
                  width: "100%",
                  height: "100%",
                  padding: "20%",
                }}
              >
                <img
                  data-testid={"icon-img" + index}
                  alt="Social media icon"
                  src={icon}
                  height={props.iconSize}
                  width={props.iconSize}
                />
              </Icon>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

SocialLinks.defaultProps = {
  boxMargin: "0",
  cardSize: "30px",
  iconSize: "24px",
  textVariant: "subtitle2",
};

export default SocialLinks;
