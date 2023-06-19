/*
In Node.js, the url module provides utilities for URL parsing and formatting. 
It allows you to work with URLs, extract specific components, and construct valid URL strings.
The url module is useful when dealing with web-related operations,
such as handling URLs in HTTP requests or parsing query parameters.
*/

const url = require("url");

const urlString = "https://www.youtube.com/watch?v=GtV-_NTlnLg&list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8&index=13";

const parsedUrl = url.parse(urlString, true);
console.log("Url Host Name : ", parsedUrl.hostname);
console.log("Url Path Name : ", parsedUrl.pathname);
console.log("Url Query : ",parsedUrl.query);
console.log("Url Protocol :  ", parsedUrl.protocol);
console.log("Url Search : " , parsedUrl.search);
console.log("Url Href : " , parsedUrl.href);
console.log("Url Hash : " , parsedUrl.hash);
console.log("Url Auth : " , parsedUrl.auth);


console.log();

// url.format(urlObject): Takes a URL object and returns the corresponding URL string.

const urlObject = {
    protocol : 'https',
    hostname : 'www.youtube.com',
    pathname : '/watch',
    query: {
        v: 'GtV-_NTlnLg',
        list: 'PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8',
        index: '13' 
    }
};

const formattedUrl = url.format(urlObject);
console.log("Formatted Url : ", formattedUrl);
console.log();


//url.resolve(from, to): Resolves a relative URL path to an absolute URL path, given a base URL.

const baseUrl = 'https://www.youtube.com';
const relativeUrl = '/watch?v=GtV-_NTlnLg&list=PLwGdqUZWnOp00IbeN0OtL9dmnasipZ9x8&index=13'
const resolvedUrl = url.resolve(baseUrl, relativeUrl);
console.log("Resoleved Url : ", relativeUrl);
console.log();