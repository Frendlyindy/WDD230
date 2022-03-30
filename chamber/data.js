const url = "data.json";
fetch(url)
.then(response => response.json())
.then(data => {
    for(let power of businesses)
            {
                const s = document.createElement('section');
                s.textContent = power;
                
            }
})