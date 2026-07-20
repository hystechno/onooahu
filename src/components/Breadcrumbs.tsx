import { Link } from 'react-router';

interface Crumb {
  label: string;
  to?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="w-full py-3 px-4 md:px-8 border-b border-[#e8e0d5]">
      <ol className="flex items-center gap-2 text-[12px] font-sans text-[#b8a08a] flex-wrap">
        <li>
          <Link to="/" className="hover:text-[#d4a574] transition-colors">Home</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <svg className="w-3 h-3 text-[#d4c4b0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            {item.to ? (
              <Link to={item.to} className="hover:text-[#d4a574] transition-colors">{item.label}</Link>
            ) : (
              <span className="text-[#1a1a1a] font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
