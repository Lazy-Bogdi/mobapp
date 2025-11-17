import { createContext, useContext, useState, type ReactNode } from 'react';

type TextContextType = {
  text: string;
  setText: (text: string) => void;
};

const TextContext = createContext<TextContextType | undefined>(undefined);

export function TextProvider({ children }: { children: ReactNode }) {
  const [text, setText] = useState('');

  return <TextContext.Provider value={{ text, setText }}>{children}</TextContext.Provider>;
}

export function useText() {
  const context = useContext(TextContext);
  if (!context) {
    throw new Error('useText must be used within TextProvider');
  }
  return context;
}

