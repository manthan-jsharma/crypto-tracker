interface PriceChangeProps {
  value: number;
}

export default function PriceChange({ value }: PriceChangeProps) {
  const isPositive = value >= 0;
  const colorClass = isPositive ? "text-green-500" : "text-red-500";
  const sign = isPositive ? "+" : "";

  return (
    <span className={colorClass}>
      {sign}
      {value.toFixed(2)}%
    </span>
  );
}
