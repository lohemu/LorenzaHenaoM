export default function Card({ title, children, className = '' }) {
  return (
    <div className={`rounded-2xl border p-6 shadow-sm ${className}`}>
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div className="text-sm leading-6">{children}</div>
    </div>
  );
}
