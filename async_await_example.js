// async function bar() {
//   console.log('bar');
//    const result1 = await new Promise((resolve) => setTimeout(() => resolve('1'),5000));
//   console.log('in bar');
//   console.log(result1);
//    const result2 = await new Promise((resolve) => setTimeout(() => resolve('2'),8000));
//   console.log(result2);
//   console.log('bar');
//   return true;
// }

// function baz() {
//   console.log('in baz...');
//   bar().then(() => {
//     console.log('bar done');
//   });
//   console.log('here');
// }
// baz();
// console.log('main done');

async function foo() {
   const p1 = new Promise((resolve) => setTimeout(() => resolve('1'), 1000))
   const p2 = new Promise((_,reject) => setTimeout(() => reject('2'), 500))   //uncaught exception 2
   const results = [await p1, await p2] // Do not do this! Use Promise.all or Promise.allSettled instead.
}
foo().catch((err) => {console.log(`catch... ${err}`)}) // Attempt to swallow all errors...