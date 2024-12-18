// let baker: boolean = true;
// const names: string[] = "ss".split(" ");
// const names1: Array<number> = [1, 2, 3];

// const banzer: boolean = true;
// const banzer1: string = "true";
// const banzer2: number = 4;
// const banzer3: Array<string> = ["1", "2", "10"];
// const banzer4: Array<boolean> = [true, false];

// interface baker3 {
//   nameess: string;
//   age: number;
// }
// const mybaker: { names: string; age: number } = {
//   names: "bakorooo",
//   age: 23,
// };

// const ids: Record<number, string> = {
//   10: "a",
//   20: "b",
// };

// ids[30] = "c";
// function add(a: string, b: string): string {
//   return a + b;
// }

// function add(t: string, p: string | number): string {
//   return t + p;
// }
// console.log(add("8", "9"));
//

// function noretern(text: string): void {
//   console.log(text);
// }
//--------------------------------------------------------------------------------------
function noretern(
  numbers: number[],
  mutet: (v: number) => number,
  name: string[]
): number[] {
  return [
    ...numbers.map(mutet),
    name.length,
    const summedArray = array1.reduce<number[]>((acc, value, index) => {
        acc.push(value + array2[index]); // جمع العناصر بناءً على الفهرس
        return acc;
      }, []);



    ...numbers.map((v) =>
      name.length >= 5 ? v * name.length : name.length + v
    ),
  ];
}
console.log(noretern([5, 7, 8], (v) => v * 5, ["baker", "aloziiiiiii", "bab"]));

// function noretern(numbers: number[], mutet: (v: number) => number): number[] {
//   return numbers.map(mutet);
// }

// console.log(noretern([5, 7, 8], (v) => v * 5));
