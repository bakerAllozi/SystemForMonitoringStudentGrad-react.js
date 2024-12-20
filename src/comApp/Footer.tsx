interface Student {
  name: string;
  avg: number;
}

export default function Footer({ arrlist }: { arrlist: Student[] }) {
  const arr1 = arrlist.filter((el) => el.avg >= 50).length;
  const arr2 = arrlist.filter((el) => el.avg < 50).length;
  const prsintSuccess = ((arr1 * 100) / arrlist.length).toFixed(1);

  return (
    <div className="e3">
      <h2>
        The number of successful students: <span>{arr1}</span> and The number of
        students who fail : <span>{arr2}</span> the success rate (
        <span>{prsintSuccess}%</span> )
      </h2>
    </div>
  );
}
