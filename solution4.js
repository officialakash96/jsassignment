//Q4. Consider the two functions below. Will they both return the same thing? Why or why not?
function foo1()
  {
    return {
      bar: "hello"
    };
  }
function foo2()
  {
    return{
      bar: "hello"
    };
  }
//code to check the return value
console.log(foo1());
console.log(foo2());

//answer: they will return same value but different objects. foo1's return object reference is different from foo2's return object