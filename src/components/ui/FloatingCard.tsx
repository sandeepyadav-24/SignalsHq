interface FloatingCardProps {
  className?: string;
  icon: string;
  title: string;
  value: string;
}

export default function FloatingCard({
  className = "",
  icon,
  title,
  value,
}: FloatingCardProps) {
  return (
    <div
      className={`absolute bg-white/90 rounded-2xl shadow-lg p-4 backdrop-blur-sm border border-gray-100 hover:border-gray-200 transition-colors ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-50 to-violet-50 flex items-center justify-center">
          <img src={icon} alt={title} className="w-5 h-5" />
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}
