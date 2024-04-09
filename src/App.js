import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Page />
    </div>
  );
}
const arr = [
  { name: "baker", avg: "96" },
  { name: "mohammad", avg: "75" },
  { name: "Amer", avg: "44" },
];
function Page() {
  const [listN, setNList] = useState("");
  const [listAvg, setAVGList] = useState(0);
  const [arrlist, setarrlist] = useState(arr);
  function handelList(student) {
    setarrlist((e) => [...e, student]);
  }
  function clos(stdent) {
    setarrlist((e) => [...e].filter((el) => el !== stdent));
  }
  return (
    <div className="Page">
      <List arrlist={arrlist} clos={clos} />
      <Input
        handelList={handelList}
        names={listN}
        avg={listAvg}
        setNList={setNList}
        setAVGList={setAVGList}
      />
      <Footer arrlist={arrlist} />
    </div>
  );
}
function List({ arrlist, clos }) {
  let sortedItems;

  const [sortBy, setSortBy] = useState("top rate");
  if (sortBy === "top rate") {
    sortedItems = arrlist.slice().sort((a, b) => Number(b.avg) - Number(a.avg));
  }
  if (sortBy === "lowest rate") {
    sortedItems = arrlist.slice().sort((a, b) => Number(a.avg) - Number(b.avg));
  }
  if (sortBy === "alphabetical order") {
    sortedItems = arrlist.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
  function handelClos(e) {
    clos(e);
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
        {sortedItems
          .map((e, i) => (
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
          ))
          .sort((n1, n2) => n1 - n2)}
      </ul>
    </div>
  );
}

function Input({ names, avg, setNList, setAVGList, handelList }) {
  function handelstudnt() {
    if (!names || !avg) return;

    const student = { name: names, avg: avg };
    handelList(student);
    setNList("");
    setAVGList("");
  }
  return (
    <div className="Input e2">
      <h2> add new student</h2>
      <input
        type="text"
        placeholder="enter the name"
        value={names}
        onChange={(e) => setNList(e.target.value)}
      />
      <input
        type="number"
        placeholder="enter the avg"
        value={avg}
        max={100}
        min={35}
        onChange={(e) =>
          setAVGList(e.target.value > 100 ? 100 : e.target.value)
        }
      />
      <button onClick={handelstudnt}>ok</button>
    </div>
  );
}
function Footer({ arrlist }) {
  const arr1 = arrlist.filter((el) => el.avg >= 50).length;
  const arr2 = arrlist.filter((el) => el.avg < 50).length;
  const prsintSuccess = ((arr1 * 100) / arrlist.length).toFixed(1);

  return (
    <div className="e3">
      <h2>
        The number of successful students: <span>{arr1}</span> and The number of
        students who fail : <span>{arr2}</span> the success rate (
        <span>{isNaN(prsintSuccess) ? "-" : prsintSuccess}%</span> )
      </h2>
    </div>
  );
}
