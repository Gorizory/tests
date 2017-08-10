function sortLibrary(library, field_name, reverse, initial) {
  function compare(a, b) {
    function innerComp(a, b) {
      if (initial(a[field_name]) > initial(b[field_name])) {
        return 1;
      } else {
        return -1;
      }
    }
    if (!reverse) {
      return innerComp(a, b);
    } else {
      return innerComp(b, a);
    }
  }
  if (initial === undefined) {
    initial = function (obj) {
      return obj;
    }
  }
  library.sort(compare);
  return library;
}
const library = [
  {
    title: 'Bill Gates',
    author: 'The Road Ahead',
    libraryID: 1254
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    libraryID: 4264
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  }
];
console.log(sortLibrary(library, 'libraryID', true, parseInt));
/*
    [
        {
           title: 'Steve Jobs',
           author: 'Walter Isaacson',
           libraryID: 4264
        },
        {
           title: 'Mockingjay: The Final Book of The Hunger Games',
           author: 'Suzanne Collins',
           libraryID: 3245
       },
       {
           title: 'Bill Gates',
           author: 'The Road Ahead',
           libraryID: 1254
       }
    ]
*/