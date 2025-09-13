export default function Button({ as: Tag = 'button', className = '', children, ...props }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
