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
    const sagasContainer = document.getElementById('sagas');
    
    sagas.forEach(saga => {
        const sagaElement = document.createElement('div');
        sagaElement.classList.add('saga');
        sagaElement.innerHTML = `
            <h2>${saga.saga_number}. ${saga.title}</h2>
        `;
        sagasContainer.appendChild(sagaElement);
    });
}

getSagas();