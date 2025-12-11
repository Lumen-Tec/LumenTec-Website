import Image from 'next/image';

interface TeamCardProps {
    name: string;
    role: string;
    linkedinUrl: string;
    initials: string;
}

export default function TeamCard({ name, role, linkedinUrl, initials }: TeamCardProps) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-600 flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-md ring-4 ring-white group-hover:ring-indigo-50 transition-all">
          {initials}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-1">{name}</h3>
        <p className="text-indigo-600 font-medium mb-6 bg-indigo-50 px-3 py-1 rounded-full text-sm">{role}</p>
        <a 
          href={linkedinUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full py-2.5 px-4 rounded-lg border border-slate-200 text-slate-600 font-medium hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-200 flex items-center justify-center gap-2"
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