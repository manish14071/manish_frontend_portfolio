import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:your.email@example.com",
  },
];

export default function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">Let's Connect</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors relative group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Manish Dehraj. All rights reserved.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Made with ❤️ using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}