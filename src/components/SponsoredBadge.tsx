// Badge for sponsored/paid restaurant features
// Use this when a restaurant pays for placement — FTC compliance
export default function SponsoredBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.08em] text-[#b8a08a] bg-[#f5ede4] px-2.5 py-1 rounded-full font-sans">
      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
      Sponsored
    </span>
  );
}
