import { Link } from 'react-router-dom';

const footerLinks = {
  services: [
    { label: 'Services', href: '/services' },
    { label: 'Free Audit', href: '/audit' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link to="/" className="font-serif text-lg text-gray-900">
              Between Stays Collective
            </Link>
            <p className="mt-4 body-text text-sm">
              Local co-hosting for Tampa Bay Airbnb and VRBO hosts.
            </p>
          </div>

          {/* Services */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-normal uppercase tracking-[0.1em] text-gray-500 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="body-text text-sm hover:text-[#5A7A6A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-normal uppercase tracking-[0.1em] text-gray-500 mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="body-text text-sm hover:text-[#5A7A6A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Between Stays Collective
            </p>
            <p className="text-xs text-gray-400">
              Tampa Bay, Florida
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
