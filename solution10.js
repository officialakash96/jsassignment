//Q10. Consider below as an example of constructor function where we want name and level to be referred to a function itself, is below example correct or not? Please explain?
function Hero(name, level)
{
name = name;
level = level;
}

//solution : Above is not the correct way, to refer properties to a function itself you must use 'this' keyword. Any assigned values through above function call won't affect object's prooperties with same name and eventually return 'undefined' when tried to fetch. 
//Correct format is shown below:
function Hero(name, level) 
{
this.name = name;  
this.level = level; 
}


