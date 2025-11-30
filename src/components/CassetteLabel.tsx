import { Box } from "@mui/material";
import { GridOverylay } from "./GridOverlay.tsx";

import LabelTemplateImage from "../assets/CL-WIDE-1UP photoshop.png";

import { Image } from "mui-image";

interface CasetteLabelOptions {
  width: number;
  height: number;
  backgroundColor?: string;
  gridSize?: number;
  showGrid?: boolean;
  showTemplate?: boolean;
  children?: React.ReactNode;
}


export function CassetteLabel({
  width,
  height,
  backgroundColor,
  gridSize = 24,
  showGrid = false,
  showTemplate = false,
  children,
}: CasetteLabelOptions) {
  const templateImage = LabelTemplateImage;

  return (
    <Box
      sx={{
        width,
        height,
        border: "2px solid #cccccc",
        display: "flex",
        position: "relative",
        backgroundColor,
      }}
    >
      <Box>
        {children}

        {showTemplate && (
          <Image
            src={templateImage}
            alt="CasetteLabelTemplate"
            width={width}
            height={height}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
            duration={0}
          />
        )}

        {showGrid && (
          <GridOverylay width={width} height={height} size={gridSize} />
        )}
      </Box>
    </Box>
  );
}
