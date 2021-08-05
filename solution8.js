//Q8. How to copy values from one object to another in above mentioned example , merge and print them?

const name = { firstName: 'Philip',
lastName: 'Fry' };
const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};

//solution:
function displayObject(obj)
{
  
  for(let elem in obj)
    {
      console.log(obj[elem]);
    }
}


Object.assign(name,details); //merges 'details' object's properties to 'name' object
console.log("Object: 'name' ");
displayObject(name);
console.log("Object: 'details' ");
displayObject(details);
