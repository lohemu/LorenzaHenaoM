export default function Text({ className = '', children }) {
  return <p className={`text-base leading-7 ${className}`}>{children}</p>;
}
