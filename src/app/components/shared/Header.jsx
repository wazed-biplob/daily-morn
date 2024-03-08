import {
  currDateTime,
  currentDateTime,
  getCurrentDateTime,
} from "@/app/utils/Date";
import { Box, Container } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box>
      <Container className="flex flex-col mt-4 gap-y-4 justify-center items-center">
        <h1 className="text-6xl font-extrabold text-red-400">The Daily Morn</h1>
        <p className="text-4xl text-orange-400">{currentDateTime}</p>
      </Container>
    </Box>
  );
};

export default Header;
