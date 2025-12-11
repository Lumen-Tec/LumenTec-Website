import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
  iconHoverBg: string;
  linkColor: string;
  href: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  iconBgColor,
  iconColor,
  iconHoverBg,
  linkColor,
  href,
}: ServiceCardProps) {
  return (
    <Link href={href} className="group">
      <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden hover:-translate-y-2">
        <div className="p-8">
          <div className={`w-14 h-14 ${iconBgColor} rounded-xl flex items-center justify-center mb-6 ${iconHoverBg} transition-colors`}>
            <div className={`${iconColor} group-hover:text-white transition-colors`}>
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            {title}
          </h3>
          <p className="text-slate-600 mb-4 leading-relaxed">
            {description}
          </p>
          <div className={`flex items-center ${linkColor} font-semibold group-hover:gap-2 transition-all`}>
            <span>Ver más</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
