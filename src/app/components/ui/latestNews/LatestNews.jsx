import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Logo from "../../../assets/logo.jpg";
import Image from "next/image";
import { currentDateTime } from "@/app/utils/Date";

const LatestNews = () => {
  return (
    <>
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
              <Typography
                className="mt-4"
                variant="body2"
                color="text.secondary"
              >
                In a world where connections are the currency of progress and
                knowledge is the beacon guiding us forward, our new portal
                stands as a testament to empowerment and enlightenment. With
                every click, we bridge the gaps between individuals, businesses,
                and ideas, forging pathways towards growth and success.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
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
                      Empowering Connections, Illuminating Pathways: Your
                      Gateway to a Brighter Future
                    </Typography>
                    <p className="bg-red-400 p-2 inline rounded font-bold text-white">
                      Editorial
                    </p>
                    <p className="my-4">By Wazed Biplob | {currentDateTime}</p>
                    <Typography
                      className="mt-4"
                      variant="body2"
                      color="text.secondary"
                    >
                      In a world where connections are the currency of progress
                      and knowledge is the beacon guiding us forward, our new
                      portal stands as a testament to empowerment and
                      enlightenment. With every click, we bridge the gaps
                      between individuals, businesses, and ideas, forging
                      pathways towards growth and success.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={6}>
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
                      Empowering Connections, Illuminating Pathways: Your
                      Gateway to a Brighter Future
                    </Typography>
                    <p className="bg-red-400 p-2 inline rounded font-bold text-white">
                      Editorial
                    </p>
                    <p className="my-4">By Wazed Biplob | {currentDateTime}</p>
                    <Typography
                      className="mt-4"
                      variant="body2"
                      color="text.secondary"
                    >
                      In a world where connections are the currency of progress
                      and knowledge is the beacon guiding us forward, our new
                      portal stands as a testament to empowerment and
                      enlightenment. With every click, we bridge the gaps
                      between individuals, businesses, and ideas, forging
                      pathways towards growth and success.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={6}>
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
                      Empowering Connections, Illuminating Pathways: Your
                      Gateway to a Brighter Future
                    </Typography>
                    <p className="bg-red-400 p-2 inline rounded font-bold text-white">
                      Editorial
                    </p>
                    <p className="my-4">By Wazed Biplob | {currentDateTime}</p>
                    <Typography
                      className="mt-4"
                      variant="body2"
                      color="text.secondary"
                    >
                      In a world where connections are the currency of progress
                      and knowledge is the beacon guiding us forward, our new
                      portal stands as a testament to empowerment and
                      enlightenment. With every click, we bridge the gaps
                      between individuals, businesses, and ideas, forging
                      pathways towards growth and success.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={6}>
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
                      Empowering Connections, Illuminating Pathways: Your
                      Gateway to a Brighter Future
                    </Typography>
                    <p className="bg-red-400 p-2 inline rounded font-bold text-white">
                      Editorial
                    </p>
                    <p className="my-4">By Wazed Biplob | {currentDateTime}</p>
                    <Typography
                      className="mt-4"
                      variant="body2"
                      color="text.secondary"
                    >
                      In a world where connections are the currency of progress
                      and knowledge is the beacon guiding us forward, our new
                      portal stands as a testament to empowerment and
                      enlightenment. With every click, we bridge the gaps
                      between individuals, businesses, and ideas, forging
                      pathways towards growth and success.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LatestNews;
