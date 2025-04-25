interface MiniChartProps {
  data: number[];
  priceChange: number;
}

export default function MiniChart({ data, priceChange }: MiniChartProps) {
  const isPositive = priceChange >= 0;
  const strokeColor = isPositive ? "#10B981" : "#EF4444";

  // Create SVG path from data
  const width = 120;
  const height = 40;
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue;

  // Create path
  let path = `M 0 ${height - ((data[0] - minValue) / range) * height}`;

  for (let i = 1; i < data.length; i++) {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((data[i] - minValue) / range) * height;
    path += ` L ${x} ${y}`;
  }

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <path d={path} fill="none" stroke={strokeColor} strokeWidth="2" />
    </svg>
  );
}
