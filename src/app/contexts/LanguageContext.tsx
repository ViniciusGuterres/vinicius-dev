'use client'

import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { Language, Translations } from "../types"
import { dictionary } from "../lib/dictionary";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    setLanguageState: (newLanguage: Language) => void;
    translate: (path: string) => string | string[];
    isLoading: boolean;
};

interface LanguageProviderProps {
    children: ReactNode;
    initialLanguage?: Language;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const DEFAULT_LANGUAGE = 'en-us';
const LANGUAGE_LOCAL_STORAGE_KEY = 'language';

export function LanguageProvider({ children, initialLanguage = DEFAULT_LANGUAGE }: LanguageProviderProps) {
    const [language, setLanguage] = useState<Language>(initialLanguage);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const userLanguageLocalStorage = localStorage.getItem(LANGUAGE_LOCAL_STORAGE_KEY);
        
        if (userLanguageLocalStorage) {
            setLanguage(userLanguageLocalStorage as Language);
        }

        setIsLoading(false);
    }, []);

    const translate = (path: string): string | string[] => {
        const keys = path.split('.');
        let currentDictionary: any = dictionary[language];

        for (const key of keys) {
            if (currentDictionary && typeof currentDictionary === 'object' && key in currentDictionary) {
                currentDictionary = currentDictionary[key];
            } else {
                console.warn(`Translation not found: ${path} for language: ${language}`);
                return path;
            }
        }

        return currentDictionary;
    }

    const setLanguageState = (newLanguage: Language) => {
        setIsLoading(true);
        setLanguage(newLanguage);

        // Update the new language in the local storage
        localStorage.setItem(LANGUAGE_LOCAL_STORAGE_KEY, newLanguage);

        setIsLoading(false); 
    }

    return (
        <LanguageContext.Provider
            value={{ language, setLanguage, translate, isLoading, setLanguageState }}
        >
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (context === undefined) {
        throw new Error("'useLanguage' must be used within a LanguageProvider");
    }

    return context;
}