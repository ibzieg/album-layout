import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Tabs,
  Tab,
  ThemeProvider,
  createTheme, CssBaseline,
} from "@mui/material";

import { useState } from "react";

import "./App.css";
import LayoutBaculite2025 from "./layouts/LayoutBaculite2025.tsx";
import LayoutAbyssal2025 from "./layouts/LayoutAbyssal2025.tsx";

/**
 *
 * @constructor
 */
function App() {
  const coverWidth = 1400;
  // const coverHeight = 1400;
  const gridSize = 24;

  const textColor = "#9E4219";
  const foregroundColor = "#ABAAAA";
  const backgroundColor = "#7c7979";

  const theme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: foregroundColor,
      },
      primary: {
        main: textColor,
      }
    },
  });

  const [showGrid, setShowGrid] = useState(false);
  const [showTemplate, setShowTemplate] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          // width: "100vh",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            minWidth: "12.5%",
            height: "calc(100vh - 10px)",

            border: `1px solid ${foregroundColor}`,
            padding: 2,
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
            overflowY: 'hidden',
            minWidth: coverWidth + 48,
            width: '100%',
            height: 'calc(100vh - 10px)',
            padding: 2,
          }}
        >
          <Tabs
            value={selectedTab}
            onChange={(_, newValue) => setSelectedTab(newValue)}
          >
            <Tab label="Baculite" />
            <Tab label="Abyssal" />
          </Tabs>

          {selectedTab === 0 && (
            <LayoutBaculite2025
              width={coverWidth}
              height={coverWidth}
              gridSize={gridSize}
              showGrid={showGrid}
              showTemplate={showTemplate}
            />
          )}

          {selectedTab === 1 && (
            <LayoutAbyssal2025
              width={coverWidth}
              height={coverWidth}
              gridSize={gridSize}
              showGrid={showGrid}
              showTemplate={showTemplate}
            />
          )}
        </Box>
      </Box>
    </div>
    </ThemeProvider>
  );
}

export default App;
