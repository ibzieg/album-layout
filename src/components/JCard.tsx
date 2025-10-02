import {Box} from "@mui/material";
import {GridOverylay} from "./GridOverlay.tsx";

import JP0Cover from '../assets/JP0 2024 cover photoshop.png'
import JP0Inside from '../assets/JP0 2024 inside photoshop.png'

import { Image } from 'mui-image'

interface JCardOptions {
  width: number;
  height: number;
  gridSize?: number;
  showGrid?: boolean;
  showTemplate?: boolean;
  children?: React.ReactNode;
  layoutType?: JLayoutType;
}

type JLayoutType = 'cover' | 'inside'

export function JCard({
  width,
  height,
  gridSize = 24,
  showGrid = false,
  showTemplate = false,
  layoutType = 'cover',
  children
}: JCardOptions) {


  const templateImage = layoutType === 'cover' ? JP0Cover : JP0Inside;


  return (
    <Box
      sx={{
        width,
        height,
        border: "2px solid #cccccc",
        display: "flex",
        position: 'relative'
      }} >
      <Box>


        {children}

        {showTemplate && <Image
            src={templateImage} alt="JP0 2024 cover"
            width={width}
            height={height}
            style={{
              position: 'absolute', top: 0, left: 0,
              zIndex: 1
            }}
            duration={0}
        />}

        {showGrid && <GridOverylay
            width={width}
            height={height}
            size={gridSize}
        />}

      </Box>
    </Box>
  );
}