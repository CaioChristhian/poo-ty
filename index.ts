import { Person } from "./banking/Person";

function main() {
  const maria = new Person("Maria", "da Silva", new Date("1999-05-11"));

  console.log(maria.getFullName());
}

main();
