"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Logo from "../../assets/logo.jpg";
import Image from "next/image";
import { IconButton, Stack } from "@mui/material";
// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
const NavItems = [
  { route: "home", pathName: "/" },
  { route: "pages", pathName: "/pages" },
  { route: "category", pathName: "/category" },
  { route: "news", pathName: "/news" },
  { route: "about", pathName: "/about" },
  { route: "contact", pathName: "/contact" },
];

const NavBar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "black" }}>
      <h1 className="bg-slate-500 text-red-600">Hello</h1>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={Logo} width={100} height={100} alt="logo" />
          <Box style={{ width: "100%", textAlign: "center" }}>
            {NavItems.map((item) => (
              <Link key={item} href={item.pathName}>
                <Button>
                  <span style={{ color: "white" }}>{item.route}</span>
                </Button>
              </Link>
            ))}
          </Box>
          <Box>
            <Stack
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
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
