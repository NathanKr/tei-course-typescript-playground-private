export function writePerson(person: {
  firstName: string;
  lastName: string;
  age: number;
}) {
  console.log(
    `first : ${person.firstName} , last : ${person.lastName} , age : ${person.age} `
  );
}

// --- numeric sum : add numbers
export function sum(n1: number, n2: number): number {
  return n1 + n2;
}

// ----numeric mul : mul number
export const mul = (n1: number, n2: number): number => {
  return n1 * n2;
};
