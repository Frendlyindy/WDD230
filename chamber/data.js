const url = "./data.json";
const resultElement = document.querySelector('div#directory');
fetch(url)
.then(response => response.json())
.then(data => {
    
    for(let item of data.businesses)
            {
                const s = document.createElement('section');
                const h2 = document.createElement('h2');
                h2.textContent = item.name;
                const address = document.createElement('p');
                address.textContent = item.address;
                const phone = document.createElement('p');
                phone.textContent = item.number;
                const web = document.createElement('a');
                web.textContent = item.website;
                web.href = item.website;
                s.appendChild(h2);
                s.appendChild(address);
                s.appendChild(phone);
                s.appendChild(web)
                resultElement.appendChild(s);
                
            }
})