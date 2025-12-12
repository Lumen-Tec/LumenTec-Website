import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  websiteUrl: string;
  imageAlt: string;
}

export default function ProjectCard({
  title,
  category,
  description,
  imageUrl,
  websiteUrl,
  imageAlt
}: ProjectCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden">
      <div className="grid md:grid-cols-12 gap-0">
        {/* Columna Logo/Imagen */}
        <div className="md:col-span-4 bg-slate-50 p-10 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-100 group-hover:bg-indigo-50/30 transition-colors">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              className="object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
        {/* Columna Info */}
        <div className="md:col-span-8 p-8 md:p-10 flex flex-col justify-center">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
            <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 w-fit">
              {category}
            </span>
          </div>
          <p className="text-slate-600 mb-8 text-lg leading-relaxed">
            {description}
          </p>
          <div>
            <a 
              href={websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md gap-2"
            >
              Visitar sitio web
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
