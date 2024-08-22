const list = document.getElementById('sagas-list');

async function getSagas() {
    try {
        const response = await fetch('https://api.api-onepiece.com/v2/sagas/en');
        const sagas = await response.json();
        
        displaySagas(sagas);
    } catch (error) {
        console.error('Error fetching the sagas:', error);
    }
}

function displaySagas(sagas) {
    sagas.forEach(saga => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h2>${saga.title}</h2>
        `;
        list.appendChild(li); 
    });
}

getSagas();
