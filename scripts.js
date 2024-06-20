// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const shirtsContainer = document.getElementById('shirts-container');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const adminPanel = document.getElementById('admin-panel');
const addShirtBtn = document.getElementById('add-shirt-btn');

loginBtn.addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            loginBtn.style.display = 'none';
            logoutBtn.style.display = 'block';
            adminPanel.style.display = 'block';
        })
        .catch(error => {
            alert('Login failed: ' + error.message);
        });
});

logoutBtn.addEventListener('click', () => {
    auth.signOut().then(() => {
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
        adminPanel.style.display = 'none';
    });
});

addShirtBtn.addEventListener('click', () => {
    const name = document.getElementById('shirt-name').value;
    const price = document.getElementById('shirt-price').value;
    const imageUrl = document.getElementById('shirt-image-url').value;

    db.collection('shirts').add({
        name,
        price,
        imageUrl
    }).then(() => {
        alert('Shirt added successfully');
        loadShirts();
    }).catch(error => {
        alert('Error adding shirt: ' + error.message);
    });
});

function loadShirts() {
    shirtsContainer.innerHTML = '';
    db.collection('shirts').get().then(snapshot => {
        snapshot.forEach(doc => {
            const shirt = doc.data();
            const shirtDiv = document.createElement('div');
            shirtDiv.classList.add('shirt');
            shirtDiv.innerHTML = `
                <img src="${shirt.imageUrl}" alt="${shirt.name}">
                <h2>${shirt.name}</h2>
                <p>Price: ${shirt.price}</p>
            `;
            shirtsContainer.appendChild(shirtDiv);
        });
    });
}

auth.onAuthStateChanged(user => {
    if (user) {
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
        adminPanel.style.display = 'block';
    } else {
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
        adminPanel.style.display = 'none';
    }
    loadShirts();
});

document.addEventListener('DOMContentLoaded', loadShirts);
