// I have a string - const text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// Your task is to:
// Print the word which contains maximum vowels. [Using array method].

const text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const arr = text.split(" ");
let word = "";
let max = -Infinity;
const vowels = ['a','e','i','o','u','A','E','I','O','U'];
for(let i of arr)
{
    let c = 0;
    for(let j in i)
    {
        if(vowels.includes(i[j]))
        {
            c++;
        }
        if(c > max)
        {
            max = c;
            word = i;
        }
    }
}
console.log(word);



// You just copy paste the json from here - https://fakestoreapi.com/carts
// To calculate finally a pair (, ). -- Part 1, calculate the total quantity for product id 1. -- Part 2, put it in a function and calculate for all of them.

const store = [{"id":1,"userId":1,"date":"2020-03-02T00:00:02.000Z","products":[{"productId":1,"quantity":4},{"productId":2,"quantity":1},{"productId":3,"quantity":6}],"__v":0},{"id":2,"userId":1,"date":"2020-01-02T00:00:02.000Z","products":[{"productId":2,"quantity":4},{"productId":1,"quantity":10},{"productId":5,"quantity":2}],"__v":0},{"id":3,"userId":2,"date":"2020-03-01T00:00:02.000Z","products":[{"productId":1,"quantity":2},{"productId":9,"quantity":1}],"__v":0},{"id":4,"userId":3,"date":"2020-01-01T00:00:02.000Z","products":[{"productId":1,"quantity":4}],"__v":0},{"id":5,"userId":3,"date":"2020-03-01T00:00:02.000Z","products":[{"productId":7,"quantity":1},{"productId":8,"quantity":1}],"__v":0},{"id":6,"userId":4,"date":"2020-03-01T00:00:02.000Z","products":[{"productId":10,"quantity":2},{"productId":12,"quantity":3}],"__v":0},{"id":6,"userId":8,"date":"2020-03-01T00:00:02.000Z","products":[{"productId":18,"quantity":1}],"__v":0}]
//console.log(flatStore);

const productQuantity = store.reduce((total, c)=>{
    console.log(total);
    c.products.forEach(element => {if(element.productId === 1)
        total += element.quantity;
    });
    return total;
});
console.log(productQuantity);