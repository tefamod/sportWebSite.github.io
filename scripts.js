const shirts = [
    {
        name: "FC Barcelona Home Shirt",
        price: "$89.99",
        imageUrl: "images/barcelona.jpg"
    },
    {
        name: "Real Madrid Away Shirt",
        price: "$79.99",
        imageUrl: "images/realmadrid.jpg"
    },
    {
        name: "Manchester United Home Shirt",
        price: "$85.99",
        imageUrl: "images/manutd.jpg"
    },
    {
        name: "Liverpool FC Third Shirt",
        price: "$90.99",
        imageUrl: "images/liverpool.jpg"
    }
];

function displayShirts() {
    const container = document.getElementById('shirts-container');
    
    shirts.forEach(shirt => {
        const shirtDiv = document.createElement('div');
        shirtDiv.classList.add('shirt');
        
        shirtDiv.innerHTML = `
            <img src="${shirt.imageUrl}" alt="${shirt.name}">
            <h2>${shirt.name}</h2>
            <p>Price: ${shirt.price}</p>
        `;
        
        container.appendChild(shirtDiv);
    });
}

document.addEventListener('DOMContentLoaded', displayShirts);
