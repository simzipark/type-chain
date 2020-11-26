"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "홍길동",
    age: 25,
    job: "Student"
};
const name = "simzipark", age = 99, job = "developer";
const helloWorld = (name, age, job) => {
    console.log(`Hello ${job}!(${name}, ${age})`);
};
helloWorld(name, age, job);
// helloWorld(name, age);   //이렇게 작성 시 error 마크 되며 인자가 하나 부족하다고 표기됨 "타입스크립트 고유의 기능"
const helloWorld2 = (name, age, job) => {
    console.log(`Hello ${job}!(${name}, ${age})`);
};
helloWorld2(name, age);
// helloWorld2(person);
const helloWorld3 = (person) => {
    return `Hello ${person.job}!(${person.name}, ${person.age})`;
};
console.log(helloWorld3(person));
//터미날에 yarn start 시 "Hello Developer!(simzipark, 99)" 출력
//# sourceMappingURL=index.js.map