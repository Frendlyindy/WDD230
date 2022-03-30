const url = "data.json";
fetch(url)
.then(response => response.json())
.then(data => {
    for(let power of businesses)
            {
                const li = document.createElement('li');
                li.textContent = power;
                ul.appendChild(li);
            }
})