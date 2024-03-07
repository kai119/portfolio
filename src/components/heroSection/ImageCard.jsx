import { useTheme } from "@emotion/react";
import { Box, Card } from "@mui/material";
import { useWindowSize } from "@uidotdev/usehooks";
import React, { useEffect, useRef, useState } from "react";

function ImageCard(props) {
  const theme = useTheme();
  const imgRef = useRef();
  const [imgWidth, setImgWidth] = useState(null);
  const windowSize = useWindowSize();

  const onImgLoad = ({ target: img }) => {
    props.setImgHeight(img.offsetHeight);
    setImgWidth(img.offsetWidth, () => console.log(imgWidth));
  };

  useEffect(() => {
    imgRef.current.clientHeight > 0 &&
      props.setImgHeight(imgRef.current.clientHeight);
    imgRef.current.clientWidth > 0 && setImgWidth(imgRef.current.clientWidth);
  }, [props, windowSize]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        height: props.imgHeight ? props.imgHeight * 0.75 : "52vh",
        width: imgWidth || "29vw",
        justifyContent: props.boxJustify,
      }}
    >
      <Card
        sx={{
          background: theme.palette.card.main,
          boxShadow: 2,
          position: "absolute",
          width: props.width,
          maxWidth: props.maxWidth,
          height: props.cardHeight,
        }}
      ></Card>
      <img
        alt="Kai Mumford"
        onLoad={onImgLoad}
        ref={imgRef}
        src={process.env.PUBLIC_URL + "/img/Graduation-removebg.png"}
        style={{
          position: "absolute",
          width: props.width,
          maxWidth: props.maxWidth,
        }}
      />
    </Box>
  );
}

ImageCard.defaultProps = {
  imgHeight: null,
  setImgHeight: () => {},
  boxJustify: "flex-start",
  width: "29vw",
  maxWidth: null,
  cardHeight: "52vh",
};

export default ImageCard;
