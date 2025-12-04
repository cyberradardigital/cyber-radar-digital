import Link from 'next/link';

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-300 mb-6">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && <span className="mx-2 text-gray-500">/</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-white">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
