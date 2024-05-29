import React from "react";
import "./progressSlider.css";
import { Typography } from "@mui/material";
import { withTheme } from "@emotion/react";

class ProgressSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollProgress);
    this.setState({
      scrolled: "0%",
      circleScrolled: 0,
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollProgress);
  }

  scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const scrollPercent =
      (scrollPx - 1000) /
      (document.querySelector("#content").getBoundingClientRect().height -
        document.documentElement.clientHeight);
    const scrolled = `${Math.max(Math.min(100, scrollPercent * 115), 0)}%`;
    console.log(scrolled);
    const circleScrolledStyle = Math.max(
      (scrollPercent - 0.87) / (1 - 0.87),
      0,
    );

    this.setState({
      scrolled: scrolled,
      circleScrolled: circleScrolledStyle,
    });
  };

  render() {
    const progressBarStyle = {
      height: this.state.scrolled,
    };

    const circleStyle = {
      background:
        this.state.circleScrolled > 0
          ? `linear-gradient(to bottom, #45a29e ${
              this.state.circleScrolled * 100
            }%, #ccc ${(1 - this.state.circleScrolled) * 100}%)`
          : "#ccc",
    };

    return (
      <div className="progress-and-content">
        <div className="progress-wrapper">
          <div className="progress-and-title">
            <Typography
              variant="h4"
              color={this.props.theme.palette.primary.main}
              sx={{ marginBottom: "10vh" }}
            >
              Experience
            </Typography>
            <div className="progress">
              <div className="outer-circle-top">
                <div className="inner-circle-top" />
              </div>

              <div className="progress-container">
                <div className="progress-bar" style={progressBarStyle} />
              </div>
              <div className="outer-circle-bottom" style={circleStyle}>
                <div className="inner-circle-bottom" />
              </div>
            </div>
          </div>
        </div>
        <div id="content">{this.props.content}</div>
      </div>
    );
  }
}

ProgressSlider.defaultProps = {
  theme: {
    palette: {
      primary: {
        main: "#66fcf1",
      },
    },
  },
  content: "",
};

const ProgressSliderWithStyles = withTheme(ProgressSlider);
export default ProgressSliderWithStyles;
