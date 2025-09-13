export default function Heading({ level = 1, className = '', children }) {
  const Tag = `h${level}`;
  const sizes = { 1: 'text-3xl sm:text-4xl', 2: 'text-2xl sm:text-3xl', 3: 'text-xl sm:text-2xl' };
  return <Tag className={`font-semibold tracking-tight ${sizes[level] || 'text-lg'} ${className}`}>{children}</Tag>;
}
