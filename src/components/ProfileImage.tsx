import { useState } from "react";

interface ProfileImageProps {
  className?: string;
  fallbackClassName?: string;
}

export default function ProfileImage({ className = "w-full h-full object-cover", fallbackClassName = "w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-slate-900 font-black" }: ProfileImageProps) {
  const [imgErr, setImgErr] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-full flex items-center justify-center">
      {!imgErr ? (
        <img
          src="/input_file_0.png"
          onError={() => setImgErr(true)}
          className={className}
          alt="Pothu Ankhith"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className={fallbackClassName}>
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" />
          </svg>
          <span className="relative z-10 text-xl tracking-wider">PA</span>
        </div>
      )}
    </div>
  );
}
