
export const TextAreaAtom = ({ placeholder, rows = 5, ...props }) => {
  return (
    <textarea
      placeholder={placeholder}
      rows={rows}
      className="w-full border border-orange-300 rounded-md p-3 focus:border-azulLoren"
      required
      {...props}
    ></textarea>
  );
};


