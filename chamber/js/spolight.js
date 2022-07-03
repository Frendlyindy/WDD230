const lru = "./data.json";
const spotElement = document.querySelector("div#spot1");
let array = [];
let object = Math.random();
const spotOne = document.querySelector("#spot1");
const spotTwo = document.querySelector("section.spot2");
fetch(lru)
  .then((response) => response.json())
  .then((data) => {
    
      //let object = Math.random() - Math.random();
      if (data.businesses[0]) {
        //const s = document.createElement('section');
        const h2 = document.createElement("h2");
        h2.textContent = data.businesses.name;
        const address = document.createElement("p");
        address.textContent = data.businesses.address;
        const phone = document.createElement("p");
        phone.textContent = data.businesses.number;
        const web = document.createElement("a");
        web.textContent = data.businesses.website;
        web.href = data.businesses.website;
        spotOne.appendChild(h2);
        spotOne.appendChild(address);
        spotOne.appendChild(phone);
        spotOne.appendChild(web);
        console.log(data.businesses);
        //spotOne.appendChild(s);
        // if(item.level == "Silver"||item.level == "Gold"){
        //     let name = item.name;
        //     let add = item.address;
        //     let num = item.number;
        //     let website = item.website;
        //     let business = [name, add, num, website];
        //     array.push(business);
        // }
      }
    
  });
// function batman(){
//     let element = document.querySelector("#directory");
//     element.classList.toggle("direct-grid");
//}
//array.sort(() => Math.random() - Math.random()).slice(0, 11);
