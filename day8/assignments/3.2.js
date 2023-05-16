// STRING VARIABLE
let str = "Hello World don't look here and there! ";
let str1 = 'Hello World "Mr. CDAC"';
let str2 = "Mumbai";

// Concatnation
let str3 = str + str1 + str2;

// 1. Backtick : Single Quote, Double Quote
let str5 = `Hello World, don't "Mr. CDAC"`;
let str6 =
  "In this guide, we'll take a look at how to use XMLHttpRequest to issue HTTP requests in order to exchange data between the website and a server. Examples of both common and more obscure use cases for XMLHttpRequest are included.To send an HTTP request, create an XMLHttpRequest object, open a URL, and send the request. After the transaction completes, the object will contain useful information such as the response body and the HTTP status of the result.";

let str61 =
  "In this guide, we'll take a look at how to use XMLHttpRequest to issue HTTP " +
  " requests in order to exchange data between the website and a server. Examples of both" +
  "common and more obscure use cases for XMLHttpRequest are included.To send an HTTP request," +
  "create an XMLHttpRequest object, open a URL, and send the request. After the transaction completes, " +
  "the object will contain useful information such as the response body and the HTTP status of the result.";

// 2. Concatnation
// 3. Multiline Feature
let str7 = `In this guide, we'll take a look at how to use XMLHttpRequest to issue HTTP 
requests in order to exchange data between the website and a server.
  Examples of both common and more obscure use cases for XMLHttpRequest are included.
  To send an HTTP request, create an XMLHttpRequest object, open a URL, and send the request. 
  After the transaction completes, the object will contain useful information such as the 
  response body and the HTTP status of the result. 
  `;

// Interpolation :: Using Variable
let usrename = "Rohit Shrama";
let letter = `
Date

Recipient Contact Information 
Name : ${usrename}
Title
Company
Address
City, State Zip Code

Greeting 
Dear Mr./Ms. Last Name,

Use a formal salutation, not a first name, unless you know the person well. 
If you do not know the person's gender, you can write out their full name. 
For instance, write, "Dear Pat Crody" instead of "Dear Mr. Crody" or "Dear Ms. Crody." 
If you do not know the recipient’s name, it’s still common and acceptable to use the old-fashioned 
“To Whom It May Concern.”
`;

console.log(letter);
