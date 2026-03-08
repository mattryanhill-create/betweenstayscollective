import { Link } from 'react-router-dom';

export type ComparisonRow = {
  feature: string;
  managerValue: string;
  betweenStaysValue: string;
};

export type OtherManagerLink = {
  name: string;
  href: string;
};

export type SwitchingLayoutProps = {
  managerName: string;
  managerSlug: string;
  heroTitle: string;
  heroIntro: string;
  problemsContent: React.ReactNode;
  howDifferentContent: React.ReactNode;
  resultsContent: React.ReactNode;
  howSwitchWorksContent: React.ReactNode;
  faqContent: React.ReactNode;
  comparisonTableRows: ComparisonRow[];
  otherManagerPages: OtherManagerLink[];
};

export default function SwitchingLayout({
  managerName,
  heroTitle,
  heroIntro,
  problemsContent,
  howDifferentContent,
  resultsContent,
  howSwitchWorksContent,
  faqContent,
  comparisonTableRows,
  otherManagerPages,
}: SwitchingLayoutProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* 1. Hero Section */}
      <h1 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight">
        {heroTitle}
      </h1>
      <p className="mt-6 text-gray-600 leading-relaxed">
        {heroIntro}
      </p>

      {/* 2. Problems Section */}
      <h2 className="font-serif text-3xl font-bold text-gray-900 mt-16 mb-6">
        The Problems with {managerName}
      </h2>
      <div className="text-gray-600 leading-relaxed [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-gray-900 [&_h3]:font-serif [&_p]:mb-4">
        {problemsContent}
      </div>

      {/* 3. Comparison Table */}
      <h2 className="font-serif text-3xl font-bold text-gray-900 mt-16 mb-6">
        {managerName} vs. Between Stays Collective
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="font-serif text-left py-3 px-4 text-gray-900 font-semibold">
                Feature
              </th>
              <th className="font-serif text-left py-3 px-4 text-gray-900 font-semibold">
                {managerName}
              </th>
              <th className="font-serif text-left py-3 px-4 text-gray-900 font-semibold">
                Between Stays
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonTableRows.map((row, i) => (
              <tr
                key={i}
                className={`border-b border-gray-100 ${
                  i % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'
                }`}
              >
                <td className="py-3 px-4 text-gray-900 font-medium">
                  {row.feature}
                </td>
                <td className="py-3 px-4 text-gray-600">
                  {row.managerValue}
                </td>
                <td className="py-3 px-4 text-emerald-700 font-medium">
                  {row.betweenStaysValue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 4. How We're Different Section */}
      <h2 className="font-serif text-3xl font-bold text-gray-900 mt-16 mb-6">
        How Between Stays Collective Is Different
      </h2>
      <div className="text-gray-600 leading-relaxed [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-gray-900 [&_h3]:font-serif [&_p]:mb-4 [&_a]:underline">
        {howDifferentContent}
      </div>

      {/* 5. Real Results Section */}
      <h2 className="font-serif text-3xl font-bold text-gray-900 mt-16 mb-6">
        Real Results: A {managerName} → Between Stays Story
      </h2>
      <div className="text-gray-600 leading-relaxed [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-gray-900 [&_h3]:font-serif [&_p]:mb-4 [&_a]:underline">
        {resultsContent}
      </div>

      {/* 6. How to Switch Section */}
      <h2 className="font-serif text-3xl font-bold text-gray-900 mt-16 mb-6">
        How to Switch from {managerName} to Between Stays
      </h2>
      <div className="text-gray-600 leading-relaxed [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-gray-900 [&_h3]:font-serif [&_p]:mb-4 [&_a]:underline">
        {howSwitchWorksContent}
      </div>

      {/* 7. FAQ Section */}
      <h2 className="font-serif text-3xl font-bold text-gray-900 mt-16 mb-6">
        Frequently Asked Questions About Switching from {managerName}
      </h2>
      <div className="text-gray-600 leading-relaxed space-y-6 [&_h4]:text-lg [&_h4]:font-serif [&_h4]:text-gray-900 [&_h4]:mb-2 [&_p]:mb-0 [&_a]:underline">
        {faqContent}
      </div>

      {/* 8. CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
          Ready to Switch from {managerName}?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6 max-w-xl mx-auto">
          Get a free property audit and see what your listing could earn with a
          local, transparent partner.
        </p>
        <Link
          to="/audit"
          className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Get your free property audit
        </Link>
      </div>

      {/* 9. Other Managers Section */}
      {otherManagerPages.length > 0 && (
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">Compare other managers:</p>
          <div className="flex flex-wrap gap-4">
            {otherManagerPages.map((link, i) => (
              <Link
                key={i}
                to={link.href}
                className="text-[#5A7A6A] hover:text-[#3D5A4A] font-medium underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
