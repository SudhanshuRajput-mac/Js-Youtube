//  destructing of the object in javascripts . 

const course = {
    coursename : "JS in hindi" , 
    price : "999", 
    courseInstructor : "Hitesh"  
}

// accessing the key and values in the object . 
// course.courseInstructor  
// other way 
// destructing . 
const {courseInstructor} = course   // inside the curly braces we have give the key whose value has to extract . 

console.log(courseInstructor)

const {courseInstructor : instructor} = course  // it can be access with the name instructor . 
console.log(instructor)