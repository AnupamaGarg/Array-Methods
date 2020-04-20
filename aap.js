console.log("Array Challenge");

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(function (inventor) {
    if (inventor.year >= 1500 && inventor.year < 1600) {
        return true;
    }
});
console.log(fifteen);
console.table(fifteen);


// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullName = inventors.map(function (inventor) {
    return `${inventor.first} ${inventor.last}`
});
console.table(fullName);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const oldestToYoungest = inventors.sort(function (a, b) {
   //return a.year - b.year;
    if (a.year > b.year) {
        return 1;
    } else {
        return -1;
    }

});
console.table(oldestToYoungest);


// Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce(function(total,inventor){
    
return total + (inventor.passed - inventor.year);

},0);
console.table(totalYears);

//OR------------

/*var totalYears = 0;
for (i=0; i< inventors.length; i++){
totalYears += (inventors[i].passed - inventors[i].year)
}
console.log(totalYears);*/

// 5. Sort the inventors by years lived

const yearsLived = inventors.sort(function (a, b) {
    const previousInventor = a.passed - a.year;
    const nextInventor = b.passed - b.year;
     if (previousInventor > nextInventor) {
         return -1;
     } else {
         return 1;
     }
 
 });
 console.table(yearsLived);

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const people1 = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
 
  const IsAdult = people1.some(function(person){
      currentYear= (new Date()).getFullYear();
      if(currentYear - person.year >= 19){
          return true;
      }
     
  })
  console.log(IsAdult);

  // Array.prototype.every() // is everyone 19 or older?

  const checkAllAdult = people1.every(function(person){
    currentYear= (new Date()).getFullYear();
    if(currentYear - person.year >= 19){
        return true;
    }
   
})
console.log(checkAllAdult );

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];


// Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    const findId = comments.find(function(comment){
        if (comment.id === 823423){
         return true;
        }
    });
    console.log(findId);