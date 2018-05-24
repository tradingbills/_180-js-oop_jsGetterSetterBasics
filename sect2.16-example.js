function Circle(radius) {
  /* This is an example of abstraction, using enclosures.
  /  It is acheived in js function constructors by using locally scoped variable(s) for the 
  /  'implementation details' , (which is hiding the details of the function/object)
  /  while also assigning properties and methods to the object variable using the 'this' keyword for the
  /  'essential' properties and methods to be exposed using the object instance 
  /  This follows the rule of abstraction which is to hide the details and expose the essentials
  */

  let defaultLocation = {
    x: 0,
    y: 0
  }

  this.draw = () => {
    console.log('draw')
  }
  Object.defineProperty(this, 'defaultLocation', {
    get: () => {
      return defaultLocation;
    },
    set: (value) => {
      if (!value || value === undefined || (typeof value != 'object'))  {
        value = {
          x: 1,
          y: 1
        }
      }
      defaultLocation = value;
    }
  })
}

const circle = new Circle(10)
circle.defaultLocation = {x: 5, y: 5 }
console.log("Example using Object.defineProperty() 'get' to display the defaultLoaction property's value, circle is an instance of Cirlce. cirlce.defaultLocation: ", circle.defaultLocation)
circle.draw();
