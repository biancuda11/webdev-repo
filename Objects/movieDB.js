let moviedb = [
  {
    Movie: 'In Brudges',
    Rating: '5 Stars',
    Viewed: true
  },
  {
    Movie: 'Frozen',
    Rating: '4.5 Stars',
    Viewed: false
  },
  {
    Movie: 'Mad Max Fury Road',
    Rating: '5 Stars',
    Viewed: true
  },
  {
    Movie: 'Les Miserables',
    Rating: '3.5 Stars',
    Viewed: false
  },
]

console.log(moviedb.Viewed);

for (var i = 0; i < moviedb.length; i++) {
  var result = "You have ";
  if (moviedb[i].Viewed === true) {
    result += 'watched '
  } else {
    result += 'not watched '
  }
  result += "\"" + moviedb[i].Movie + "\" - ";
  result +=moviedb[i].Rating + " stars"
  console.log(result);
}
