function test1() {
	return new Promise((res) => {
    setTimeout(res,5000,'test1');
  })
}

function test2() {
	return new Promise((res) => {
    setTimeout(res,3000,'test2');
  })
}

let startTime = Date.now();
Promise.all([
  
  Promise.resolve(test1()).then((val) => {
		console.log(` Promise.all - ${val}`);
	  console.log(`completed in `, Date.now() - startTime);
  	return val;  
  }),
  
 ( async () => {
    let resultFromTest2 = await test2();
  	console.log(` async-await - ${resultFromTest2} `);
	  console.log('completed in ', Date.now() - startTime);
  	return resultFromTest2;
  })()
])
	.then((values) => {
  console.log(` Promise.all - ${values}`);
  console.log(`completed in `, Date.now() - startTime);
});

function print() {
  console.log("From print...");
}
print();