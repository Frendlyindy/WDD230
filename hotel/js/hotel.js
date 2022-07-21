const urls = "./js/temples.json";
const resultEl = document.querySelector('div#temple-list');
let arrayList = [];
fetch(urls)
.then(response => response.json())
.then(data => {
    for(let item of data.temples)
    {
        const s = document.createElement('section');
        const h2 = document.createElement('h2');
        h2.textContent = item.name;
        const address = document.createElement('p');
        address.textContent = item.address;
        const phone = document.createElement('p');
        phone.textContent = item.number;
        const email = document.createElement('p');
        email.textContent = item.email;
        s.appendChild(h2);
        s.appendChild(address);
        s.appendChild(phone);
        s.appendChild(email);
        console.log(s);
        resultEl.appendChild(s);
        if(data.temples.name == "Redlands California Temple"){
            document.querySelector('div#temple-info').appendChild(s);
        }
    }
})