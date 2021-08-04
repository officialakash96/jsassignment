//Q6. How to delete 'Beethoven' from set
const set = new Set(['Beethoven', 'Mozart', 'Chopin', 'Chopin']);
//solution:
function displaySet(element) //displays each element in set
{
  console.log("Element in set: "+element)
}
function deleteFromSet(set,element) //deletes element from set
{ 
  //before delete operation:
  console.log("Before delete: ");
  set.forEach(displaySet);
  set.delete(element);
  console.log("After delete: ");
  set.forEach(displaySet);
}

// driver code

deleteFromSet(set,'Beethoven');