import { useState } from "react";

interface Student {
  name: string;
  avg: number;
}

const List = ({
  arrlist,
  clos,
}: {
  arrlist: Student[];
  clos: (student: Student) => void;
}) => {
  let sortedItems: Student[] = [];

  const [sortBy, setSortBy] = useState<string>("top rate");
  if (sortBy === "top rate") {
    sortedItems = arrlist.slice().sort((a, b) => Number(b.avg) - Number(a.avg));
  }
  if (sortBy === "lowest rate") {
    sortedItems = arrlist.slice().sort((a, b) => Number(a.avg) - Number(b.avg));
  }
  if (sortBy === "alphabetical order") {
    sortedItems = arrlist.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
  function handelClos(student: Student) {
    clos(student);
  }
  return (
    <div>
      <h2>List ovg of std </h2>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option>top rate</option>
        <option>lowest rate</option>
        <option>alphabetical order</option>
      </select>
      <ul className="fatherList">
        {sortedItems.map((e, i) => (
          <li key={i}>
            <button className="clos" onClick={() => handelClos(e)}>
              x
            </button>
            <span>{i + 1}</span>
            <h3>{e.name}</h3>
            <p>{e.avg}</p>
            <p style={e.avg < 50 ? { color: "white" } : {}}>
              {e.avg >= 50 ? "ناجح" : "راسب"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
