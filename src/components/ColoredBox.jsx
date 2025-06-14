export default function ColoredBox({ color = "lightblue", children }) {
  return (
    <div
      style={{
        background: color,
        padding: 16,
        borderRadius: 8,
        marginBottom: 12,
      }}
    >
      {children}   {/* محتوا یا کامپوننت‌های دلخواه */}
    </div>
  );
}
