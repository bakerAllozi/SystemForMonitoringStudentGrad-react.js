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
// function noretern(
//   numbers: number[],
//   mutet: (v: number) => number,
//   name: string[]
// ): [number[], number[]] {
//   return [
//     numbers.map(mutet),
//     numbers.reduce<number[]>((acc, value, index) => {
//       acc.push(name[index].length * value);
//       return acc;
//     }, []),
//   ];

// ...numbers.map((v) =>
//   name.length >= 5 ? v * name.length : name.length + v
// ),
// }
// console.log(noretern([5, 7, 8], (v) => v * 5, ["baker", "aloziiiiiii", "bab"]));

// function noretern(numbers: number[]): coordinate {
//   return {
//     ...numbers,
//   };
// }

// interface Coordinate {
//   x: number;
//   y: number;
// }

// function parseCoordinate(str: string): Coordinate;
// function parseCoordinate(obj: Coordinate): Coordinate;
// function parseCoordinate(x: number, y: number): Coordinate;
// function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
//   let coord: Coordinate = {
//     x: 0,
//     y: 0,
//   };

//   if (typeof arg1 === "string") {
//     (arg1 as string).split(",").forEach((str) => {
//       const [key, value] = str.split(":");
//       coord[key as "x" | "y"] = parseInt(value, 10);
//     });
//   } else if (typeof arg1 === "object") {
//     coord = {
//       ...(arg1 as Coordinate),
//     };
//   } else {
//     coord = {
//       x: arg1 as number,
//       y: arg2 as number,
//     };
//   }

//   return coord;
// }

// console.log(parseCoordinate(10, 20));
// console.log(parseCoordinate({ x: 52, y: 35 }));
// console.log(parseCoordinate("x:12,y:22"));
