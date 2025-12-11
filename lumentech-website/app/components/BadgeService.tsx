type BadgeServiceProps = {
  label: string;
  className?: string;
};

export default function BadgeService({ label, className = '' }: BadgeServiceProps) {
  return (
    <span
      className={`px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 text-sm font-medium ${className}`}
    >
      {label}
    </span>
  );
}