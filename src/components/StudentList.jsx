import StudentItem from "./StudentItem";

export default function StudentList({ items }) {
  const topStudents = items.filter(s => s.score >= 90);

  return (
    <>
      <h3>همۀ دانش‌آموزان</h3>
      <ul>
        {items.map(p => (
          <StudentItem key={p.id} name={p.name} score={p.score} />
        ))}
      </ul>

      <h3>دانش آموزان ممتاز</h3>

      <ul>
        {topStudents.map(p => (
          <StudentItem key={p.id} name={p.name} score={p.score} />
        ))}
      </ul>



    </>
  );
}
