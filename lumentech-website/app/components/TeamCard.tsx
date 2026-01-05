import Image from 'next/image';

interface TeamCardProps {
  name: string;
  role: string;
  linkedinUrl: string;
  initials: string;
}

export default function TeamCard({ name, role, linkedinUrl, initials }: TeamCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 transition-all duration-500 flex flex-col items-center text-center group hover-lift hover-glow">
      <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-600 flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-md ring-4 ring-white group-hover:ring-indigo-100 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-indigo-500/30 animate-pulse-glow">
        {initials}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-indigo-700 transition-colors">{name}</h3>
      <p className="text-indigo-600 font-medium mb-6 bg-indigo-50 px-3 py-1 rounded-full text-sm group-hover:bg-indigo-100 transition-colors">{role}</p>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-shimmer w-full py-2.5 px-4 rounded-lg border border-slate-200 text-slate-600 font-medium hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] hover:shadow-lg hover:shadow-[#0077b5]/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <Image
          src="https://res.cloudinary.com/drec8g03e/image/upload/v1765327013/linkedin_speobq.svg"
          alt="LinkedIn Logo"
          width={20}
          height={20}
        />
        <span>LinkedIn</span>
      </a>
    </div>
  );
}