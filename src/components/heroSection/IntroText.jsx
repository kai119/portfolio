import React, { useEffect, useRef, useState } from "react";
import { Typography, useTheme } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

function IntroText(props) {
  const theme = useTheme();
  const textRef = useRef();
  const [subtitleSize, setSubtitleSize] = useState("");
  const [headingSize, setHeadingSize] = useState("");
  const [subHeadingSize, setSubHeadingSize] = useState("");
  const [bodySize, setBodySize] = useState("");

  useEffect(() => {
    if (props.isMobile) {
      setSubtitleSize("subtitle3");
      setHeadingSize("h3");
      setSubHeadingSize("h6");
      setBodySize("body_small");
    } else if (props.isTablet) {
      setSubtitleSize("subtitle2");
      setHeadingSize("h2");
      setSubHeadingSize("h4");
      setBodySize("body_medium");
    } else {
      setSubtitleSize("subtitle1");
      setHeadingSize("h1");
      setSubHeadingSize("h4");
      setBodySize("body_large");
    }
  }, [props.isMobile, props.isTablet]);
  return (
    <div>
      <Typography
        color="text.secondary"
        variant={subtitleSize}
        sx={{ marginTop: !props.isMobile && "80px" }}
      >
        Hello World
      </Typography>
      <div>
        <Typography color="text.primary" variant={headingSize} display="inline">
          I'm{" "}
        </Typography>
        <Typography
          ref={textRef}
          color="primary"
          variant={headingSize}
          display="inline"
        >
          Kai Mumford
        </Typography>
      </div>
      <div>
        <Typography
          color="text.primary"
          variant={subHeadingSize}
          display="inline"
        >
          A
        </Typography>
        <TypeAnimation
          sequence={[
            " Software Engineer.",
            1000,
            " Frontend Engineer.",
            1000,
            "n Agile Developer.",
            1000,
          ]}
          speed={50}
          style={{
            display: "inline",
            color: theme.palette.text.primary,
            fontSize: props.useLargeFont ? 50 : 14,
            fontWeight: 500,
            fontFamily: ["Roboto"],
          }}
          repeat={Infinity}
          color="text.primary"
        />
        <Typography
          color="text.secondary"
          variant={bodySize}
          sx={{ marginTop: "4vh", display: "block" }}
        >
          I specialise in designing, building, and deploying high-quality and
          scaleable applications.
        </Typography>
      </div>
    </div>
  );
}

IntroText.defaultProps = {
  isMobile: false,
  isTablet: false,
  useLargeFont: true,
};

export default IntroText;
