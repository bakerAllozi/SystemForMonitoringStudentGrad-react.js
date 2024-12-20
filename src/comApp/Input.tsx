interface IInput {
  names: string;
  avg: number;
  setNList: (value: string) => void;
  setAVGList: (value: number) => void;
  handelList: (student: { name: string; avg: number }) => void;
}

export default function Input({
  names,
  avg,
  setNList,
  setAVGList,
  handelList,
}: IInput) {
  function handelstudnt() {
    if (!names || !avg) return;

    const student = { name: names, avg: avg };
    handelList(student);
    setNList("");
    setAVGList(0);
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = Number(e.target.value);

          setAVGList(value > 100 ? 100 : value);
        }}
      />
      <button onClick={handelstudnt}>ok</button>
    </div>
  );
}
