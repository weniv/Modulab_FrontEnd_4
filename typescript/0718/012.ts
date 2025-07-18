let vAny: any = 100;
let vUnknown: unknown = 100;

console.log(vAny + 100); // No error, outputs: 200
// console.log(vUnknown + 100); // Error: Object is of type 'unknown'.