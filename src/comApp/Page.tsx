import React, { useState } from "react";
import Footer from "./Footer";
import List from "./List";
import Input from "./Input";
const arr: { name: string; avg: number }[] = [
  { name: "baker", avg: 44 },
  { name: "mohammad", avg: 33 },
  { name: "Amer", avg: 88 },
];
const Page: React.FC = () => {
  const [listN, setNList] = useState<string>("");
  const [listAvg, setAVGList] = useState<number>(0);
  const [arrlist, setarrlist] = useState<{ name: string; avg: number }[]>(arr);

  function handelList(student: { name: string; avg: number }) {
    setarrlist((e) => [...e, student]);
  }

  function clos(stdent: { name: string; avg: number }) {
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
};

export default Page;
