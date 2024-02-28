export function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-larger text-transparent md:text-4xl my-10">
      {children}
    </h1>
  );
}
