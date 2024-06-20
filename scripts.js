const shirtsContainer = document.getElementById('shirts-container');

// Simulate a list of shirts by fetching image files from the images folder
function loadShirts() {
    shirtsContainer.innerHTML = '';
    
    const imageFolder = 'images/';
    const images = [
        { name: "P90 T-SHIRT", price: "$27.00 USD", fileName: "shirt1.jpg" },
        { name: "HUMAN T-SHIRT", price: "$27.00 USD", fileName: "shirt2.jpg" },
        { name: "SECURITY T-SHIRT", price: "$27.00 USD", fileName: "shirt3.jpg" },
        { name: "BAKA T-SHIRT", price: "$27.00 USD", fileName: "shirt4.jpg" },
        // Add more images as needed
    ];

    images.forEach(image => {
        const shirtDiv = document.createElement('div');
        shirtDiv.classList.add('shirt');
        shirtDiv.innerHTML = `
            <img src="${imageFolder}${image.fileName}" alt="${image.name}">
            <h2>${image.name}</h2>
            <p>Price: ${image.price}</p>
        `;
        shirtsContainer.appendChild(shirtDiv);
    });
}

document.addEventListener('DOMContentLoaded', loadShirts);
