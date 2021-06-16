// arrow functions 
const add = (x,y) => {
    return x + y;
}

const square = x => {
    return x ** x ; 
}

const rollDie = () => (
    // return Math.floor(Math.random() * 6) + 1
    Math.floor(Math.random() * 6) + 1
)

const add2 = (a,b) => (a+b)

// This
const cat = {
    name: 'Blue Steel',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says MEOW`);
    }
}

const meow2 = cat.meow;

// movies 
const movies = [
    {
        title: 'Amadeus' ,
        score: 99
    }, 
    {
    title: 'Stand by Me' ,
    score: 85
    }, 
    {
    title: 'Parasite',
    score: 95
    }, 
    {
    title: 'Alien',
    score: 90
    }
]

// const newMovies = movies.map(function(movie) {
//     return `${movie.title} - ${movie.score  / 10}`
// })

const newMovies = movies.map(movie => 
    `${movie.title} - ${movie.score  / 10}`
)

// set timeout 
setTimeout(() => {
    console.log("HELLO!!!");
    
}, 3000);

// set interval 

// const id = setInterval(() => {
//     console.log(Math.random());
    
// }, 2000);

// filter method 
const  nums = [9,8,7,6,5,4,3,2,1];
const odds = nums.filter( n=> {
    return n%2 ===1;
})

const smallNums = nums.filter(n => {
    return n < 5;
} )

// every and some 
const exams = [80,98,92,78,77,90,89,84,81,77]

exams.every(score => score >= 75)

function allEvens(nums) {
    return nums.every(score => score%2 === 0)
}

// ****REDUCE 
const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

const total = prices.reduce((total, price) => {
    return total + price
})

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    } else {
        return min;
    }
})

const highestMovie = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    } else {
        return bestMovie;
    } 
})

const person = {
    firstName: 'Viggo',
    lastName: 'Mortenson',
    fullname: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

// spread 
const nums = [13, 4, 5, 6543,321 ,1,2,45,5]