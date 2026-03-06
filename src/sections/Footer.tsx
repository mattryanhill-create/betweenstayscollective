import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
          <a 
            href="#" 
            aria-label="Facebook"
            className="text-black hover:opacity-60 transition-opacity"
          >
            <Facebook className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a 
            href="#" 
            aria-label="Twitter"
            className="text-black hover:opacity-60 transition-opacity"
          >
            <Twitter className="w-5 h-5" strokeWidth={1.5} />
          </a>
          <a 
            href="#" 
            aria-label="Instagram"
            className="text-black hover:opacity-60 transition-opacity"
          >
            <Instagram className="w-5 h-5" strokeWidth={1.5} />
          </a>
        </div>

        {/* Copyright */}
        <p className="font-serif text-sm italic text-gray-500 text-center">
          © {new Date().getFullYear()} by Sydney Oliver. Powered and secured by{' '}
          <a href="#" className="underline hover:text-black transition-colors">
            Wix
          </a>
        </p>
      </div>
    </footer>
  );
}
