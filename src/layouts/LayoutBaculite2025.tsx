import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import { Image } from 'mui-image'
import { useState } from "react";

import {JCard} from "../components/JCard.tsx";
import shopImage from '../assets/download-shop-gray-d3.png'
import tunnelImage from '../assets/tunnel-d2-1400.png'

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
export function LayoutBaculite2025(
  {
    width = 1400,
    height = 1400,
    gridSize = 24,
    showGrid = false,
    showTemplate = false,
  }: LayoutBaculite2025Props
) {

  const coverWidth = width;
  const coverHeight = height;

  const textColor = '#9E4219'
  const foregroundColor = '#ABAAAA'

  const gw = (n: number) => n * (coverWidth / gridSize)
  const gh = (n: number) => n * (coverHeight / gridSize)

  const styles = {
    coverTextStyle: {
      position: 'absolute',
      top: gh(16),
      left: gw(11.5),
      color: textColor,
      height: gh(4),
      width: gw(10),
      textShadow: `1px 1px 1px ${foregroundColor}`,
      // textShadow: `1px 1px 1px black`,
      zIndex: 2,
      // fontKerning: 'normal',
      letterSpacing: '-0.08em',
      fontFamily: 'serif',
      fontSize: '8rem',
      lineHeight: '0.625',
      scale: '1 1.625',
      // scale: '1 0.625',
      textAlign: 'justify',
      display: 'inline-block'
    }
  }

  return (
    <Box
      sx={{
        overflowY: 'scroll',
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
        >
          {/* Background Image *************************************************/}
          <Image src={shopImage} alt="Shop Image"
                 width={coverWidth}
                 height={coverHeight}
                 style={{
                   position: 'absolute', top: 0, left: 0,
                   zIndex: 1,
                 }}
                 duration={0}
          />

          {/* Artist Title *****************************************************/}
          <Typography
            variant="h3"
            component="div"
            sx={{
              position: 'absolute',
              top: gh(4),
              left: gw(13.25),
              color: textColor,
              textShadow: `1px -1px 1px ${foregroundColor}`,
              zIndex: 2,
              letterSpacing: '-0.08em',
              fontFamily: 'serif',
              fontSize: '8rem',
              scale: '1 -1.625',
            }}
          >
            Baculite
          </Typography>

          {/* Album Title *****************************************************/}
          <Typography
            variant="h3"
            component="div"
            sx={{
              ...styles.coverTextStyle,
              top: gh(14.5),
              letterSpacing: '0.5em',
            }}>
            Erase
          </Typography>
          <Typography
            variant="h3"
            component="div"
            sx={{
              ...styles.coverTextStyle,
              top: gh(16.75),
              letterSpacing: '-0.01em',
            }}>
            Permanent
          </Typography>
          <Typography
            variant="h3"
            component="div"
            sx={{
              ...styles.coverTextStyle,
              top: gh(19.0),
              letterSpacing: '-0.094em',
            }}>
            Infrastructure
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
              letterSpacing: '-0.092em',
              transform: `rotate(90deg) translate(${gh(12.1)}px, ${gh(6)}px)`,
              fontSize: '4.5rem',
            }}>
            Erase Permanent Infrastructure
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
          <Image src={tunnelImage} alt="Tunnel Image"
                 width={coverWidth}
                 height={coverHeight}
                 style={{
                   position: 'absolute', top: 0, left: 0,
                   zIndex: 1,
                 }}
                 duration={0}
          />


          <Typography
            variant="h3"
            component="div"
            sx={{
              ...styles.coverTextStyle,
              left: gw(2.125),
              top: gh(4.75),
              width: gw(13),
              fontSize: '3.75rem',
              lineHeight: '1.125',
              letterSpacing: '-0.01em',
            }}>
            1. Access Tunnel<br/>
            2. Permanent Burden<br/>
            3. Voices Under the Floor<br/>
            4. Destroyed Core<br/>
            5. Collection of Remains<br/>
            <br/>
            6. Operation Morning Light<br/>
            7. Remove Foundation<br/>
            8. Rapid Dissolution<br/>
          </Typography>

        </JCard>
      </Box>

    </Box>

  )
}

export default LayoutBaculite2025;
