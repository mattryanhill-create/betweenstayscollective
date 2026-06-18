interface Props {
  city: string;
  fromManager: string;
}

/**
 * Renders an anonymized aggregate observation about owner-side outcomes.
 * Never uses quote marks or invented names. Replace with verified testimonials when available.
 */
export function PlaceholderTestimonial({ city, fromManager }: Props) {
  return (
    <div className="bg-stone-50 border-l-4 border-stone-400 p-6 my-8 rounded-r-md">
      {/* TESTIMONIAL-PLACEHOLDER: Replace this block with a real owner quote when available. */}
      <p className="text-stone-800 text-base leading-relaxed">
        Owners in {city} who have switched from {fromManager} to a local boutique co-host typically
        report cleaner accounting, faster guest response times, and improved Superhost continuity.
        Outcomes vary by property type and condition. Figures referenced on this page reflect
        aggregated Pinellas County data and AirDNA submarket medians.
      </p>
    </div>
  );
}
