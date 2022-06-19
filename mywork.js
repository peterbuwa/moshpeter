//    object oriented programming

const circle = {
    point: 3,
    people:{x:1, y:2},
    draw:function(){
        console.log("draw")
    },
    arr:[1,2]
}

circle.draw();

// function declaration and function expession

function myfunction(){
    console.log("declaration")
}

let expression = function expression(){
    console.log("expression")
}



expression();
let another = expression;
another();
myfunction();

//   if else statement

let hour = 24;
if(hour > 6 && hour < 12) console.log("good morning");
else if(hour > 12 && hour < 18)console.log("good afternoon");
else if (hour > 24)console.log("not a valid hour")
else console.log("good evening");

let hours = new Date();
let clock = hours.getHours() 
console.log(clock)

function myLimit(clock){
   if(clock < 12) console.log("good morning");
   else if (clock > 12 && clock < 18)console.log("good afernoon");
   else console.log("good evening"); 
}

myLimit(clock);

// iterating over an array

 let myFirstArray = [1,2,3,4,5]
for(let x of myFirstArray){
    console.log(x);
}

myFirstArray.forEach((value, index)=>{
    console.log(index, value);
})

// max of two numbers

function max(a,b){
    if(a > b)return a;
    return b;
}

console.log(max(12,13));

// or we can use a ternary operation
function maxOne(a,b){
   return (a > b) ? a : b;
}
console.log(maxOne(19,17));

// the this keyword

const video = {
    title:"a",
    tag:["a","b","c"],
    showTag: function(){
        this.tag.forEach((a)=>{
            console.log(this.title, a)
        })
    }
}
video.showTag();

function videoOne(){
    console.log(this);
}

videoOne.apply({name:"peter"})
const fn = videoOne.bind({name:"james"},1,2);
fn();
videoOne.call({name:"jakis"}, 1,2);

videoOne()

// landscale or portrait

function itLandScape(width,height){
    if(width > height)return true;
    else false;
}
console.log(itLandScape(600,300));

function itLandScapeOne(width, height){
    return (width < height)
}
console.log(itLandScapeOne(400, 300));
