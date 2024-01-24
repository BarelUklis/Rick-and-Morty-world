import { useRef } from "react"; 
 
const useDebounce = (callback: (value: string) => void, delay: number) => { 
  const timeoutRef = useRef<number | null>(null); 
 
  return (value: string) => { 
    if (timeoutRef.current) { 
      clearTimeout(timeoutRef.current); 
    } 
    timeoutRef.current = setTimeout(() => callback(value), delay); 
  }; 
}; 
 
export default useDebounce;