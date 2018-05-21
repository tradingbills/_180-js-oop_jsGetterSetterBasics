function Circle(radius) {
  /* This is an example of abstraction, using enclosures.
  /  It is acheived in js function constructors by using locally scoped variable(s) for the 
  /  'implementation details' , (which is hiding the details of the function/object)
  /  while also assigning properties and methods to the object variable using the 'this' keyword for the
  /  'essential' properties and methods to be exposed using the object instance 
  /  This follows the rule of abstraction which is to hide the details and expose the essentials
  */

  let defaultLocation= { x:0, y:0 }
  
  this.getDefaultLocation= () => {
    return defaultLocation;
  };

  this.draw= () => {
    console.log('draw')
  }
  Object.defineProperty( this, 'defaultLocation',{
    get: () => {
      return defaultLocation;
    }
  } )
}

const circle= new Circle(10)
console.log("default loaction of object variable", circle.defaultLocation)
circle.draw();