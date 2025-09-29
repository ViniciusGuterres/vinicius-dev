import React from 'react';
import { useLanguage } from "../contexts/LanguageContext";
import Image from 'next/image';

export default function LanguageToggle() {
    const { language, setLanguage, isLoading } = useLanguage();

    if (isLoading) {
        return (
            <div className="w-16 h-8 bg-white/10 rounded-full animate-pulse" />
        );
    }

    const isPortuguese = language === 'pt-br';

    return (
        <button
            onClick={() => setLanguage(isPortuguese ? 'en' : 'pt-br')}
            className="group relative flex items-center w-16 h-8 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-500 ease-out hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
            aria-label={`Switch to ${isPortuguese ? 'English' : 'Português'}`}
        >
            {/* Active indicator */}
            <div
                className={`absolute w-6 h-6 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full shadow-lg transform transition-all duration-500 ease-out flex items-center justify-center ${isPortuguese ? 'translate-x-9' : 'translate-x-1'
                    }`}
            >
                {/* Flag icon inside the indicator */}
                <div className="w-3 h-3 rounded-full overflow-hidden">
                    {isPortuguese ? (
                        <Image
                            src="/brazil_flag.svg"
                            alt="Brazil flag"
                            width={12}
                            height={12}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <Image
                            src="/eua_flag.svg"
                            alt="USA flag"
                            width={12}
                            height={12}
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>
            </div>

            {/* Flag indicators */}
            <div className="relative flex items-center justify-between w-full px-2">
                {/* USA Flag */}
                <div
                    className={`w-4 h-3 rounded-sm overflow-hidden transition-all duration-500 ${!isPortuguese
                            ? 'opacity-100 scale-110'
                            : 'opacity-40 scale-100'
                        }`}
                >
                    <Image
                        src="/eua_flag.svg"
                        alt="USA flag"
                        width={16}
                        height={12}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Brazil Flag */}
                <div
                    className={`w-4 h-3 rounded-sm overflow-hidden transition-all duration-500 ${isPortuguese
                            ? 'opacity-100 scale-110'
                            : 'opacity-40 scale-100'
                        }`}
                >
                    <Image
                        src="/brazil_flag.svg"
                        alt="Brazil flag"
                        width={16}
                        height={12}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </button>
    );
}