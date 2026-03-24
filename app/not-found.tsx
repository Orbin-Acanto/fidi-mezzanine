import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-24 min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-heading font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
