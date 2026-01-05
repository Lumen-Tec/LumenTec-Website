import Badge from './Badge';

type CardServiceProps = {
  code?: string; // Texto utilizado en badge para un icono o sigla
  title: string;
  description: string;
  details: string[]; // Lista de puntos detallados
  badgeText?: string; // Etiqueta superior del badge
  className?: string;
};

export default function CardService({
  code,
  title,
  description,
  details,
  badgeText,
  className = '',
}: CardServiceProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg border border-slate-100 p-8 flex flex-col gap-4 transition-all duration-500 hover-lift hover-glow group ${className}`}>
      {/* Badge opcional en card */}
      {badgeText && (
        <div className="flex">
          <Badge className="mb-2 group-hover:scale-105 transition-transform">{badgeText}</Badge>
        </div>
      )}

      {code && (
        <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          {code}
        </div>
      )}

      <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">{title}</h3>

      <p className="text-slate-600">{description}</p>

      <ul className="text-sm text-slate-500 space-y-1">
        {details.map((item) => (
          <li key={item} className="group-hover:text-slate-600 transition-colors">• {item}</li>
        ))}
      </ul>
    </div>
  );
}
