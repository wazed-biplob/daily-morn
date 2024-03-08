"use client";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import { NavItems } from "./Navbar";
const Footer = () => {
  return (
    <Box>
      <Container className="bg-black max-w-full px-2 py-4 m-0 mx-auto">
        <Box
          className="text-center"
          direction="row"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          {" "}
          <IconButton>
            <FacebookIcon></FacebookIcon>
          </IconButton>
          <IconButton>
            <FacebookIcon></FacebookIcon>
          </IconButton>
          <IconButton>
            <FacebookIcon></FacebookIcon>
          </IconButton>
        </Box>
        <Box style={{ width: "100%", textAlign: "center" }}>
          {NavItems.map((item) => (
            <Link key={item} href={item.pathName}>
              <Button>
                <span style={{ color: "white" }}>{item.route}</span>
              </Button>
            </Link>
          ))}
        </Box>
        <Typography variant="body2" className="text-gray-400 text-center">
          @2024 The Daily Morn- All rights reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
