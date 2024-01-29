var library = [ 
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

//function compate_to_sort(x,y){
  // check if the title of book is less than the title of book y
  
function compate_to_sort(x,y){
  // check if the title of book x is less than the title of book y
  if (x.title < y.title){
    return -1;
  }
  if (x.title > y.title){
    return 1;
  }
  // if titles are equal, return 0
  return 0;
}
console.log(library.sort(compate_to_sort));