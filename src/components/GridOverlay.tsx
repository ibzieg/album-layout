
const DEFAULT_GRID_SIZE = 24;

interface GridOverlayProps {
  width: number;
  height: number;
  size?: number;
  color?: string;
  strokeWidth?: number;
}


export function GridOverylay({
  width,
  height,
  size = DEFAULT_GRID_SIZE,
  color = "yellow",
  strokeWidth = 0.5
}: GridOverlayProps){
  const columnSize = width / size;
  const rowSize = height / size;

  return (
    <svg
      width={width}
      height={height}
      style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", zIndex: 2 }}
    >
      <defs>
        <pattern
          id="grid"
          width={columnSize}
          height={rowSize}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${columnSize} 0 L 0 0 0 ${rowSize}`}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
          />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}