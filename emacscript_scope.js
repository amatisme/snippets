var i = 3;
console.log(i) // will be 3 
for(i = 0; i <= 3; i++) {
  let j = i; // explicitly bring the value of i into forloop scope (again)
  console.log(j); // will be j (of course)
  console.log(i); // will be i (of course)
}
i += 5;
console.log(i); // outputs 9 and not 8
console.log(j); undefined (out of scope, due to let)

/*
3
0
0
1
1
2
2
3
3
9
undefined

I find this very interesting that the scope of i is not actually contained
in the forloop if previous declared in the global scope. Due to this, global scope
i gets incremented immediately in line 2 but not local scope.
*/
