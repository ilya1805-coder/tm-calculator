export default function Tab({ title, children }) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="px-4 py-2 border-b border-gray-200 bg-gray-50 rounded-t-lg">
        <h2 className="text-sm font-medium text-gray-700">{title}</h2>
      </div>

      <div className="p-4">{children}</div>
    </div>
  );
}
