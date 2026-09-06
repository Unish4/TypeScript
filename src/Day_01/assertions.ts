// Method 1: 'as' keyword (PREFERRED!)
let value1: unknown = "Hello"
let stringValue1 = value1 as string
console.log(stringValue1.toUpperCase())  // "HELLO"

// Method 2: Angle brackets (AVOID in React/JSX)
let value2: unknown = "World"
let stringValue2 = <string>value2
console.log(stringValue2.toUpperCase())  // WORLD
