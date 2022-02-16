// I got this next bit of code from the codepenio for getting the current date. 
const datefield = document.querySelector('.date');

const now = new Date();

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

datefield.innerHTML = `<em>${fulldate}</em>`;