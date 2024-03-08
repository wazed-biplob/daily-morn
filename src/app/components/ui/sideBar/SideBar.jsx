import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Logo from "@/app/assets/logo.jpg";
import { currentDateTime } from "@/app/utils/Date";

const SideBar = () => {
  return (
    <Box className="mt-4">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={Logo} height={100} width={200} alt="Image" />
          </CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="font-bold"
            >
              Empowering Connections, Illuminating Pathways: Your Gateway to a
              Brighter Future
            </Typography>
            <p className="bg-red-400 p-2 inline rounded font-bold text-white">
              Editorial
            </p>
            <p className="my-4">By Wazed Biplob | {currentDateTime}</p>
            <Typography className="mt-4" variant="body2" color="text.secondary">
              In a world where connections are the currency of progress and
              knowledge is the beacon guiding us forward, our new portal stands
              as a testament to empowerment and enlightenment. With every click,
              we bridge the gaps between individuals, businesses, and ideas,
              forging pathways towards growth and success.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default SideBar;
