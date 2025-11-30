import {
  Box,
  Typography,
} from "@mui/material";
import { Image } from "mui-image";

import { JCard } from "../components/JCard.tsx";

import abyssalCover from "../assets/abyssal-cover-4.png";
import abyssalInside from "../assets/jewel-1400.png";
import abyssalCollage from "../assets/inside-1423-d4.png";
import abyssalCD from "../assets/CD-1394-final.png";
// import ziLogoScan from "../assets/zi-scan-d4.png";
import {CassetteLabel} from "../components/CassetteLabel.tsx";
import config from "../config.ts";

interface LayoutBaculite2025Props {
  width: number;
  height: number;
  gridSize?: number;
  showGrid?: boolean;
  showTemplate?: boolean;
}

/**
 *
 * @constructor
 */
export function LayoutBaculite2025({
  width = 1400,
  height = 1400,
  gridSize = 24,
  showGrid = false,
  showTemplate = false,
}: LayoutBaculite2025Props) {
  const coverWidth = width;
  const coverHeight = height;

  const textColor = "#9E4219";
  const foregroundColor = "#ABAAAA";
  // const backgroundColor = "#7c7979";

  const gw = (n: number) => n * (coverWidth / gridSize);
  const gh = (n: number) => n * (coverHeight / gridSize);

  const styles = {
    coverTextStyle: {
      position: "absolute",
      top: gh(16),
      left: gw(11.5),
      color: textColor,
      height: gh(4),
      width: gw(10),
      textShadow: `1px 1px 1px ${foregroundColor}`,
      // textShadow: `1px 1px 1px black`,
      zIndex: 2,
      // fontKerning: 'normal',
      letterSpacing: "-0.08em",
      fontFamily: "serif",
      fontSize: "8rem",
      lineHeight: "0.625",
      scale: "1 1.625",
      // scale: '1 0.625',
      textAlign: "justify",
      display: "inline-block",
    },
  };

  return (
    <Box
      sx={{
        overflowY: "scroll",
        height: 'calc(100% - 10px)',
        minWidth: coverWidth + 24,
      }}
    >
      {/* JP0 Layout *********************************************************/}

      <Box marginTop={8}>
        <Typography variant={"h2"}>JP0 Cover</Typography>
        <JCard
          height={coverHeight}
          width={coverWidth}
          gridSize={gridSize}
          showGrid={showGrid}
          showTemplate={showTemplate}
          backgroundColor={'black'}
        >
          {/* Background Image *************************************************/}
          <Image
            src={abyssalCollage}
            width={gw(6)}
            height={gh(8)}
            style={{
              width: gw(6.25),
              height: gh(24),
              position: "absolute",
              top: gh(0),
              left: gw(0),
              zIndex: 1,
              objectFit: "cover",
            }}
            duration={0}
          />

          {/*<Image*/}
          {/*  src={ziLogoScan}*/}
          {/*  width={gw(6)}*/}
          {/*  height={gh(8)}*/}
          {/*  style={{*/}
          {/*    width: gw(1.75),*/}
          {/*    height: gh(1.75),*/}
          {/*    position: "absolute",*/}
          {/*    top: gh(18),*/}
          {/*    left: gw(1.5),*/}
          {/*    zIndex: 2,*/}
          {/*    mixBlendMode: "normal",*/}
          {/*    objectFit: "cover",*/}
          {/*  }}*/}
          {/*  duration={0}*/}
          {/*/>*/}

          <Image
            src={abyssalCover}
            width={gw(8)}
            height={gh(8)}
            style={{
              width: gw(12),
              height: gh(12),
              position: "absolute",
              top: gh(6),
              left: gw(10.25),
              zIndex: 1,
            }}
            duration={0}
          />

          {/* Artist Title *****************************************************/}
          <Typography
            variant="h3"
            component="div"
            sx={{
              position: "absolute",
              top: gh(3.5),
              left: gw(12.0),
              color: textColor,
              textShadow: `1px -1px 1px ${foregroundColor}`,
              zIndex: 2,
              letterSpacing: "-0.08em",
              fontFamily: "serif",
              fontSize: "8rem",
              scale: "1 1.625",
            }}
          >
            Abyssal Fluid
          </Typography>

          {/* Album Title *****************************************************/}
          <Typography
            variant="h3"
            component="div"
            sx={{
              ...styles.coverTextStyle,
              top: gh(19.45),
              left: gw(10.75),
              fontSize: "4rem",
              letterSpacing: "0.5em",
              scale: "1 1.625",
            }}
          >
            Revenue
          </Typography>
          <Typography
            variant="h3"
            component="div"
            sx={{
              ...styles.coverTextStyle,
              top: gh(20.75),
              left: gw(14.75),
              fontSize: "4rem",
              letterSpacing: "0.5em",
              scale: "1 1.625",
              // transform: 'perspective(500px) rotateX(20deg)',
              /* or */
              // transform: skew(10deg, 5deg);
            }}
          >
            Streams
          </Typography>

          {/* Spine Layout *****************************************************/}
          <Typography
            variant="h3"
            component="div"
            sx={{
              ...styles.coverTextStyle,
              // top: gh(19.0),
              top: gh(0),
              left: gw(0),
              width: gh(24),
              letterSpacing: "-0.092em",
              transform: `rotate(90deg) translate(${gh(12.0)}px, ${gh(6)}px)`,
              fontSize: "4.5rem",
              scale: "1.0 1.5",
            }}
          >
            Abyssal Fluid / Revenue Streams
          </Typography>
        </JCard>
      </Box>

      <Box marginTop={8}>
        <Typography variant={"h2"}>JP0 Inside</Typography>
        <JCard
          height={coverHeight}
          width={coverWidth}
          gridSize={gridSize}
          showGrid={showGrid}
          showTemplate={showTemplate}
          layoutType="inside"
        >
          {/* Background Image *************************************************/}
          <Image
            src={abyssalInside}
            alt="Inside Cover"
            width={coverWidth}
            height={coverHeight}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
            duration={0}
          />

          <Typography
            variant="h3"
            component="div"
            sx={{
              ...styles.coverTextStyle,
              color: "black",
              textShadow: `1px 1px 1px ${foregroundColor}`,
              left: gw(2.125),
              top: gh(5.75),
              width: gw(13),
              fontSize: "3.75rem",
              lineHeight: "1.125",
              letterSpacing: "-0.01em",
            }}
          >
            1. Black Mold, Cracked Wall
            <br />
            2. Alarm
            <br />
            3. Microwave Chamber
            <br />
            4. Nullify
            <br />
            5. Methamphetamine Loop
            <br />
            6. Segmented Body
            <br />
            7. Time Warp{" "}
            <span
              style={{
                fontSize: "2.75rem",
              }}
            >
              (Back to Nothing)
            </span>
            <br />
            8. Isolation
            <br />
          </Typography>
        </JCard>
      </Box>


      <Box marginTop={8}>
        <Typography variant={"h2"}>Label</Typography>
        <CassetteLabel
          width={config.cassetteLabel.width}
          height={config.cassetteLabel.height}
          gridSize={gridSize}
          showGrid={showGrid}
          showTemplate={showTemplate}
        >
          {/* Background Image *************************************************/}
          <Image
            src={abyssalCD}
            alt="CD"
            width={config.cassetteLabel.width}
            height={config.cassetteLabel.width}
            style={{
              objectFit: "fill",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
            duration={0}
          />
          <Typography
            variant="h3"
            component="div"
            sx={{
              ...styles.coverTextStyle,
              left: gw(1),
              top: gh(-4.0),
              width: gw(13),
              fontSize: "3.75rem",
              lineHeight: "1.125",
              letterSpacing: "-0.01em",
            }}
          >
            <Typography
              variant="h3"
              component="div"
              sx={{
                ...styles.coverTextStyle,
                color: "black",
                textShadow: `1px 1px 1px ${foregroundColor}`,
                left: gw(8.5),
                top: gh(6.0),
                width: gw(20),
                fontSize: "2.75rem",
                lineHeight: "1.125",
                letterSpacing: "-0.01em",
              }}
            >
              Abyssal Fluid
            </Typography>
            <Typography
              variant="h3"
              component="div"
              sx={{
                ...styles.coverTextStyle,
                color: "black",
                textShadow: `1px 1px 1px ${foregroundColor}`,
                left: gw(8.5),
                top: gh(9.8),
                width: gw(20),
                fontSize: "2.5rem",
                lineHeight: "1.125",
                letterSpacing: "-0.01em",
              }}
            >
              Revenue Streams
            </Typography>


          </Typography>
        </CassetteLabel>
      </Box>

    </Box>
  );
}

export default LayoutBaculite2025;
