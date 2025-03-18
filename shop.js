let currentEndpoint = 'items';

async function loadData(endpoint) {
    currentEndpoint = endpoint;
    try {
        const response = await fetch(`https://952540bf85e3332e.mokky.dev/${endpoint}`);
        const data = await response.json();
        console.log(data);
        displayCards(data);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

function displayCards(data) {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'col-md-3 col-sm-6 mb-4';
        card.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <img src="${item.img}" alt="">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text"><strong>Описание:</strong> ${item.description}</p>
                    <p class="card-text"><strong>Цена:</strong> ${item.price}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

window.onload = () => loadData('items');