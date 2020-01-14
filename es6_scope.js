var i = 3; console.log(i); // 3 
for(i = 0; i <= 3; i++) {
  console.log(i); // 0, 1, 2, 3
}
i += 5; console.log(i); // 9

/* 
I find this very interesting that the scope of i is not actually contained
in the forloop if previous declared in the global scope. Due to this, global scope
i gets incremented immediately in line 2 but not local scope.
*/

var i = 3; console.log(i); // 3 
for(let i = 0; i <= 3; i++) { // let forces i into local scope
  console.log(i); // 0, 1, 2, 3
}
i += 5; console.log(i); // 8