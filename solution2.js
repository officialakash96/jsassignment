//Q2.
//Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },
    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
    },
    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }
];
function readingStatus(library)
{
    library.forEach(element => {
        console.log("author: "+element.author+", title: "+element.title+", readingStatus: "+element.readingStatus);
    });
}
//driver code
readingStatus(library);