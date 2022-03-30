const url = "./data.json";
const resultElement = document.querySelector('div#directory');
fetch(url)
.then(response => response.json())
.then(data => {
    
    for(let power of businesses)
            {
                const s = document.createElement('section');
                s.textContent = power;
                resultElement.appendChild(s);
                
            }
})