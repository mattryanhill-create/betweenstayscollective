interface Props {
  city: string;
  fromManager: string;
}

/**
 * Renders an anonymized aggregate testimonial frame.
 * Never uses quote marks or invented names — placeholder until real testimonials are gathered.
 * Mark replacement points with the comment below in JSX.
 */
export function PlaceholderTestimonial({ city, fromManager }: Props) {
  return (
    <div className="bg-stone-50 border-l-4 border-stone-400 p-6 my-8 rounded-r-md">
      {/* TESTIMONIAL-PLACEHOLDER: Replace this block with a real owner quote when available. */}
      <p className="text-stone-800 text-base leading-relaxed">
        Owners in {city} who have switched from {fromManager} to a local boutique co-host typically
        report cleaner accounting, faster guest response times, and improved Superhost continuity.
        Results are based on aggregated Pinellas County data and AirDNA submarket medians.
      </p>
      <p className="text-stone-500 text-sm mt-3">
        Anonymized aggregate framing — placeholder until verified owner quotes are gathered.
      </p>
    </div>
  );
}
