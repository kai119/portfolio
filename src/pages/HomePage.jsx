import React from "react";
import { Card, Button, Typography, CardContent, useTheme } from "@mui/material";
import NavBar from "../components/navBar/NavBar";

export default function HomePage() {
  const theme = useTheme();

  return (
    <>
      <NavBar />
      <Card
        sx={{
          background: theme.palette.card.main,
          boxShadow: 1,
          width: "50%",
          height: "50%",
          margin: "10px 10px",
        }}
      >
        <CardContent>
          <Button size="md" color="primary">
            Test
          </Button>
          <Typography>Hello World</Typography>
        </CardContent>
      </Card>
    </>
  );
}
