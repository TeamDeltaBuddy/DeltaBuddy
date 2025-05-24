
export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function CardContent({ children, className }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
