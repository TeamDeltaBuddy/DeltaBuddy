
export function Button({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition ${className}`}>
      {children}
    </button>
  );
}
