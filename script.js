console.log('Hi')
// alert('hello and welcome')

// variables
var a=9
console.log(a)// block 1

{
    var a=20
    console.log(a)         //block 2
}
let b=23
console.log(b)
{
    let b=34
    console.log(b)
}
b=44
console.log(b)
const t=30
console.log(t)
{
    const t=90
console.log(t)
}
console.log(t)
//data types
var nam='i am nayana'
console.log(typeof(nam))
//numbers
var count=10
console.log(typeof(count))
//boolean
var bb=true
console.log(typeof(bb))
var gtype
console.log(typeof(gtype))
//arrays
let arr=['red','blue','white',10]
console.log(arr[3])
console.log(arr.length)
arr.push('violet')
console.log(arr)
arr.pop()
console.log(arr)
//javascript objects
let car={
milage:100,
model:'i10',
color:'black'
}
console.log(car)
console.log(car.model)
console.log(car.milage)
let person=new Object()
person.gender='female'
person.height=164
console.log(person)
//arithmetic operators
var e=4 
var f=8
console.log(e+f)
var e=10
var f=++a
console.log(f)
console.log(a)
var e=10
var f=a++
console.log(e)
console.log(f)
//if else
if (e==f) {
    console.log('e is equal to f')
} else {
    console.log('e is not equal to f')
}
if (e!=f) {
   console.log('e is equal to f') 
} else {
    console.log('e is not equal to f')
}
if (e==f && e==10) {
    console.log('e is equal to f')
} else {
 console.log('e is not equal to f and e is not 10')   
}
var c=6
d='8'
if (e===f) {
    console.log('e is equal to f')
} else {
 console.log('e is not equal to f')   
}
if (c==d) {
    console.log('c is equal to d')
} else {
  console.log('c is not equal to d')  
}
var g='5'
 h='10'
if (g>10 || g==h) {
    console.log('g is not equal to h')
} else {
    console.log('g is greater than h and not equal to h')
}
let add=6
add *= 3
console.log(add)
//bodmas
let k=10;
let l=34;
let m=70;
let n=12;
console.log(add);
var exp=k+l*(m-n)-7;
console.log(exp);
//functions
function display(name){ 
    console.log('hi '+name+' welcome to JS')
}
display('nayana')
function addition(y,z){
var result=y+z
return result
}
var result=addition(10,30)
console.log('the sum is'+result)
function sub(l,m){
    var result=l-m
return result
}
var result=sub(30,5)
console.log('the sum is' +result)
function multiplication(j,k){
    var result=j*k
    return result
}
var result=multiplication(6,5)
console.log('the sum is' +result)
function division(q,r){
    var result=q/r
    return result
}
var result=division(20,5)
console.log('the sum is' +result)