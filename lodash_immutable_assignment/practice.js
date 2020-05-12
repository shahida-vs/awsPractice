var _ = require('lodash');
//const {Map} = require('immutable');

//1
var a ={b:"propert1"};
var b ={c:"property2",d:"property3"};
//var final = {...a,...b};
var final = _.assign(a,b)
console.log(final);





//2
function calculate () {
    return 5;
}
var result = _.times(5,calculate);
console.log(result);





//3
_.debounce(calculate,5000);





//4
var students = [
    { firstName: "John", lastName: "Doe", age: 28, gender: "male" },
    { firstName: "Jane", lastName: "Doe", age: 5, gender: "female" },
    { firstName: "Jim", lastName: "Carrey", age: 54, gender: "male" },
    { firstName: "Kate", lastName: "Winslet", age: 40, gender: "female" }
  ];

var student = _.find(students, { lastName: "Doe", gender: "male" });
console.log(student);

var underAgestudent = _.find(students, function(student) {
	return student.age > 28;
});
console.log(underAgestudent);//{ firstName: 'Jim', lastName: 'Carrey', age: 54, gender: 'male' }
//{ firstName: 'John', lastName: 'Doe', age: 28, gender: 'male' } when age > 6

var femalestudent = _.find(students, function(student) {
	return student.gender === "female";
});
console.log("female student",femalestudent);






//5

var obj = {};
var age = {age:20};
_.set(obj, 'name' , "amit")
_.set(obj, "detail", age)
console.log(obj);


var studentAge = _.get(obj,"detail","doesn't exist") 
console.log("student age - ",studentAge);
var studentAge = _.get(obj,"phone","doesn't exist");
console.log("student phone - ",studentAge);

var bar = { foo: { key: "foo" } };
_.set(bar, "foo.items[0]", "An item");
console.log("bar",bar);





//6
const a1 = _.deburr("déjà vu");
const b1 =_.deburr("Juan José");

console.log("a - ",a1, " b - ",b1);




//7
var posts = [
    { id: "1abc", title: "First blog post", content: "..." },
    { id: "2abc", title: "Second blog post", content: "..." },
    { id: "34abc", title: "The blog post we want", content: "..." }
];

posts = _.keyBy(posts, "id");

var post = posts["34abc"]
console.log("post",post);




//8
const array = [
    {name : 'sam' , marks : 50},
    {name : 'kartik', marks : 70 }
]
const sum = _.reduce(array,function(acc,cur){
    acc += cur.marks;
    return acc;
},0)
console.log("sum",sum);





//9
var original = { food: {choc:"bar",toff:"mango",salt:{tata:1,iiodine:2}} };
var copy = _.cloneDeep(original);
copy.foo = "new value";
copy.food = "clear";
console.log("original",original);
console.log("copy",copy);





//10
var sortedArray = [1, 1, 2, 3, 3, 3, 5, 8, 8];
var result = _.sortedUniq(sortedArray);
console.log("result",result);





//Immutable

const { Map, Set ,List } = require('immutable');
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set('b', 50);
const res = map1.get('b') + " changed to " + map2.get('b');
console.log("res",res);

const map3 = Map(map1);
const map4 = map1;
const map5 = Set().add(map1);
console.log("map 3", map3.get('b')); // 2
console.log("map 4", map4.get('b')); // 2
console.log("map 5", map5.get('b')); // undefined

const mapM = Map({d:4,e:5,f:6})
const obj1 = {g:7,h:8}
const map6 = map1.merge(mapM);
const map7 = map1.merge(mapM,obj1);
console.log("map6",map6.get('e'));
console.log("map7",map7.get('h'));



const mp1 = Map({ a: 1, b: 2, c: 3 });
const mp2 = Map({ a: 1, b: 2, c: 3 });
const set = Set().add(mp1);
console.log("contains mp2 ? ",set.has(mp2)); //true even when we added mp1 in set, bcz mp1 and mp2 are same





//
const list1 = List([ 1, 2, 3 ]);
const list2 = List([ 4, 5, 6 ]);
const array1 = [ 7, 8, 9 ];
const list3 = list1.concat(list2, array1);
console.log("list3",list3);
