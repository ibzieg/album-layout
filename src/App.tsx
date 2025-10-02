import {Box, Checkbox, FormControlLabel, FormGroup, Paper} from "@mui/material";

import {useState} from "react";



import './App.css'
import LayoutBaculite2025 from "./layouts/LayoutBaculite2025.tsx";
import LayoutAbyssal2025 from "./layouts/LayoutAbyssal2025.tsx";


/**
 *
 * @constructor
 */
function App() {

  const coverWidth = 1400;
  const coverHeight = 1400;
  const gridSize = 24;

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

  const [showGrid, setShowGrid] = useState(false);
  const [showTemplate, setShowTemplate] = useState(false);

  return (
    <div
      style={{width: '100%'}}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '100vh',
          height: '100vh',
        }}>
        <Box
          sx={{
            minWidth: '12.5%',
            height: 'calc(100vh - 10px)',
            border: '1px solid magenta',
            padding: 2
          }}
        >
          {/* Layout Controls ****************************************************/}
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={showGrid}
                  onChange={(e) => setShowGrid(e.target.checked)}
                />
              }
              label="Show Grid"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={showTemplate}
                  onChange={(e) => setShowTemplate(e.target.checked)}
                />
              }
              label="Show Template"
            />
          </FormGroup>
        </Box>

        <Box
          sx={{
            overflowY: 'scroll',
            minWidth: coverWidth + 48,
          }}
        >

          <LayoutBaculite2025
            width={coverWidth}
            height={coverWidth}
            gridSize={gridSize}
            showGrid={showGrid}
            showTemplate={showTemplate}
          />

          <LayoutAbyssal2025
            width={coverWidth}
            height={coverWidth}
            gridSize={gridSize}
            showGrid={showGrid}
            showTemplate={showTemplate}
          />

          <Box marginTop={8}>
          </Box>

        </Box>
      </Box>
    </div>
  )
}

export default App
