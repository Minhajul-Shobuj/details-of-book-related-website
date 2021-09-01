const searchText = () => {
    const input = document.getElementById('input-field');
    const url = ` http://openlibrary.org/search.json?q=${input.value}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.docs));
    input.value = '';
}

const displayResult = (data) => {
    const results = document.getElementById('results');
    results.innerHTML = '';
    // for book value
    const resultValue = document.getElementById('result-value');
    resultValue.innerHTML = '';
    const h5 = document.createElement('h5');
    h5.innerHTML = `Showing <span class="text-success fw-bolder">${data.length}</span> books`;
    resultValue.appendChild(h5);
    // for book with details 
    data.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `<div class="d-flex flex-row card">
        <div>
        <img src=" https://covers.openlibrary.org/b/id/${element.cover_i}-M.jpg" class="card-img-top" alt="...">
    </div>
        <div class="card-body w-50">
            <h3 class="fw-bold card-title">${element.title}</h3>
            <p>by<span class="fw-bolder"> ${element.author_name}</span></p>
            <p>First published in ${element.first_publish_year}</p>
        </div>
    </div>`
        results.appendChild(div);
    });

}