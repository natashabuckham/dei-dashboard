interface StatsBoxProps {
  title: string;
  footerText: string;
  children: React.ReactNode;
}

export const StatsBox = ({ title, footerText, children }: StatsBoxProps) => {
  return (
    <div className="statsBox">
      <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
        {title}
      </h3>
      <ul className="space-y-4">{children}</ul>
      <p className="text-xs text-gray-500 mt-5 text-center">{footerText}</p>
    </div>
  );
};
