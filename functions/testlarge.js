/*
let b = [{
    Age: [3, 5]
},
{
    Age: [2, 6]
},
{
    Age: [5, 9]
},
{
    Age: [1, 3]
}
];

function age (fig){
let ages = 0
for(i = 0; i < fig.length; i++){
ages += fig[i]
}return ages
}
let w = (age(b[0].Age))
let x = (age(b[1].Age))
let y = (age(b[2].Age))
let z = (age(b[3].Age))

let v = [w, x, y, z]

let p = Math.max(...v)
if (Math.max(...v) === age(b[0].Age)){
    console.log(b[0])
}else if (Math.max(...v) === age(b[1].Age)){
    console.log(b[1])
}else if (Math.max(...v) === age(b[2].Age)){
    console.log(b[2])
}else if (Math.max(...v) === age(b[3].Age)){
    console.log(b[3])
}

console.log(p)*/

let a = '1'
let b = 3
for (i = 0; i < a[0].length; i++){
    b[i] += 1
}

console.log(b)