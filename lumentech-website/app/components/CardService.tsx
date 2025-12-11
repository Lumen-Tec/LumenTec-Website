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
    <div className={`bg-white rounded-2xl shadow-lg border border-slate-100 p-8 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl transition ${className}`}>
      {/* Badge opcional en card */}
      {badgeText && (
        <div className="flex">
          <Badge className="mb-2">{badgeText}</Badge>
        </div>
      )}

      {code && (
        <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
          {code}
        </div>
      )}

      <h3 className="text-xl font-bold text-slate-900">{title}</h3>

      <p className="text-slate-600">{description}</p>

      <ul className="text-sm text-slate-500 space-y-1">
        {details.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}