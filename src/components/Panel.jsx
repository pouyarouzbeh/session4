export default function Panel({ title, children }) {
  return (
    <section style={{border:"1px solid #ccc", padding:8, marginBottom:12}}>
      <h4>{title}</h4>
      {children}
    </section>
  );
}