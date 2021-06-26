// let boy = {
//   name: "Mike",
//   showName: function () {
//     console.log(this.name);
//   }
// };

// let man = boy;
// boy = null;

// man.showName();

//Lexical Scope defines how variable names are resolved in nested function

//Nested(child) function have access to the scope of their parent functions()

// This is often confused with closures, but lexical scope is only an important part of the closure.

// closure is a function having access to the parent scope, even after the parent function has closed

// A closure is created when we define a function, not when a function is excuted
// let x = 1;

// const parentFunction = () => {
//   //local scope
//   let myValue = 2;
//   console.log(x);
//   console.log(myValue);

//   const childFunction = () => {
//     console.log((x += 5));
//     console.log((myValue += 1));
//   };

//   return childFunction;
// };

// const result = parentFunction();
// result(); // parent function is already called and returned value
// result(); // continued to increment value
// console.log(x);
// // console.log(myValue) // reference Error

// console.log("#########################");

// const privateCounter = (() => {
//   let count = 0;
//   console.log(`initial Value: ${count}`);
//   return () => {
//     count += 1;
//     console.log(count);
//   };
// })();

// privateCounter();
// privateCounter();

// const credits = ((num) => {
//   let credits = num;
//   console.log(`initial credit value : ${credits}`);
//   return () => {
//     credits -= 1;
//     if (credits > 0) console.log(`playing game, ${credits} credits(s) remains`);
//     if (credits <= 0) console.log(`not enouth credits`);
//   };
// })(3);

// credits();
// credits();
// credits();

// // further more
//####################################################
// for (var index = 0; index < 10; index++) {
//   setTimeout(() => console.log(index));
// }

//  VAR alogo

// var index = 0;
// if (index < 10) {
//   console.log(index);
//   setTimeout(() => console.log(index));
// }

// index++;

// if (index < 10) {
//   console.log(index);
//   setTimeout(() => console.log(index));
// }
//####################################################
// for (let index = 0; index < 10; index++) {
//   setTimeout(() => console.log(index));
// }

// Let algo
// {
//   // overall

//   let index = 0;

//   {
//     // scope1
//     let index;
//     index = 0;

//     if (index < 10) {
//       console.log(index);
//       setTimeout(() => console.log(index));
//     }
//     //index ++;
//   }

//   {
//     //scope2
//     let index;
//     index = 0;
//     index++; // 1

//     if (index < 10) {
//       console.log(index); //1
//       setTimeout(() => console.log(index)); // 1
//     }
//   }

//   {
//     //scope3
//     let index;
//     index = 1;
//     index++; // 2

//     if (index < 10) {
//       console.log(index); //2
//       setTimeout(() => console.log(index)); // 2
//     }
//   }
// }

// for (let index = 0; index < 10; index++) setTimeout(() => console.log(index));

//###############################

let test = [];
for (let i = 0; i < 5; i++) {
  // alert(i);
  // test.push(() => console.log(i));
  test.push(i);
  console.log(test);
}

// test.forEach((l) => l());

// for (var i = 0; i < 5; i++) {
//   test.push(() => console.log(i));
// }
// test.forEach((l) => l());

// {
//     //overall
//     let i = 0;

//     { //scope 1
//         let i;
//         i = 0;

//         if (i < 5) {
//             test.push(() => console.log(i));
//             console.log(test);
//             console.log(i);
//         }
//     }

//     {//scope 2

//         let i;
//         i = 0;
//         i++

//         if (i < 5) {
//             test.push(() => console.log(i));
//             console.log(test);
//             console.log(i);
//         }
//     }
// }

// }

// let test = [];
// for (let i = 0; i < 5; i++) {
//   test.push(i);
//   console.log("first", test);
//   test.push("X");
//   console.log("second", test);
// }

// function callMethod(...params) {
//   let args = [...params];
//   console.log("1: ", args.length);
//   console.log("1: ", args);
//   args.push("x");
//   // args.shift();
//   console.log("2: ", args.length);
//   console.log("2: ", args);
// }

// callMethod(0, 1, 2, 3);

// var arr = [];
// console.log(arr, arr.length);
// // 복잡한 코드가 있다고 가정
// setTimeout(function () {
//   // 비동기 가정
//   arr.push(5);
// }, 0);
