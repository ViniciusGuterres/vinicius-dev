import React from 'react';
import { useLanguage } from "../contexts/LanguageContext";
import Image from 'next/image';
import { Language } from '../types';

export default function LanguageToggle() {
    const { language, setLanguage, isLoading } = useLanguage();

    const setLanguageLocalStorage = (language: Language) => {
        localStorage.setItem('language', language);
    }

    if (isLoading) {
        return (
            <div className="flex items-center space-x-1">
                <div className="w-8 h-6 bg-[#22F0B3]/20 rounded animate-pulse" />
                <div className="w-8 h-6 bg-[#22F0B3]/20 rounded animate-pulse" />
            </div>
        );
    }

    const isPortuguese = language === 'pt-br';

    return (
        <div className="flex items-center space-x-1 p-1 bg-[#1F1F21]/50 backdrop-blur-sm rounded-lg border border-[#22F0B3]/20">
            {/* USA Flag Button */}
            <button
                onClick={() => {
                    setLanguage('en-us');
                    setLanguageLocalStorage('en-us');
                }}
                className={`relative flex items-center justify-center w-8 h-6 rounded transition-all duration-500 ease-out group ${
                    !isPortuguese 
                        ? 'border border-[#22F0B3]/60 bg-[#22F0B3]/5' 
                        : 'border border-transparent bg-transparent hover:bg-[#22F0B3]/5 hover:border-[#22F0B3]/30'
                }`}
                aria-label="Switch to English"
            >
                <div className="w-6 h-4 rounded-sm overflow-hidden">
                    <Image
                        src="/eua_flag.svg"
                        alt="USA flag"
                        width={24}
                        height={16}
                        className="w-full h-full object-cover transition-all duration-500"
                    />
                </div>
            </button>
            
            {/* Brazil Flag Button */}
            <button
                onClick={() => {
                    setLanguage('pt-br');
                    setLanguageLocalStorage('pt-br');
                }}
                className={`relative flex items-center justify-center w-8 h-6 rounded transition-all duration-500 ease-out group ${
                    isPortuguese 
                        ? 'border border-[#22F0B3]/60 bg-[#22F0B3]/5' 
                        : 'border border-transparent bg-transparent hover:bg-[#22F0B3]/5 hover:border-[#22F0B3]/30'
                }`}
                aria-label="Switch to Portuguese"
            >
                <div className="w-6 h-4 rounded-sm overflow-hidden">
                    <Image
                        src="/brazil_flag.svg"
                        alt="Brazil flag"
                        width={24}
                        height={16}
                        className="w-full h-full object-cover transition-all duration-500"
                    />
                </div>
            </button>
        </div>
    );
}