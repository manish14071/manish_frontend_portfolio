import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (savedTheme) {
      setTheme(savedTheme);
      root.classList.toggle("dark", savedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      root.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    root.classList.remove(theme);
    root.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="relative transition-colors hover:bg-muted"
    >
      <Sun className={`h-5 w-5 transition-all scale-100 rotate-0 ${theme === "dark" ? "scale-0 rotate-90" : ""}`} />
      <Moon className={`absolute h-5 w-5 transition-all scale-0 rotate-90 ${theme === "dark" ? "scale-100 rotate-0" : ""}`} />
    </Button>
  );
}