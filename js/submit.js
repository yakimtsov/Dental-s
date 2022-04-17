import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js';
    import {getDatabase, ref, set} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

    const firebaseConfig = {
        apiKey: "AIzaSyAGUVz1NkdizEzgt7CVS9CtyPL67-O9nbI",
        authDomain: "dental-df0ec.firebaseapp.com",
        projectId: "dental-df0ec",
        storageBucket: "dental-df0ec.appspot.com",
        messagingSenderId: "110212203816",
        appId: "1:110212203816:web:ff8b42a657f5fb9aed3c1d"
      };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);


submitData.addEventListener('click', (e) => {
    e.preventDefault()
    var email = document.getElementById('email').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var date = document.getElementById('date').value;

    // const newKey = push(child(ref(database), 'users')).key;

//add data
    set(ref(database, `users/ ${firstName} ${lastName}`), {
        firstName: firstName,
        email: email,
        lastName: lastName,
        phoneNumber:phoneNumber,
        date:date,
    }).then(() => {
        document.querySelector(".success").style.display = 'flex';
        document.getElementById('bookForm').reset();
        setTimeout(function(){
            document.querySelector(".success").style.display = 'none';
            document.querySelector('.modal-overlay').style.display = 'none'
        }, 3000);
    })
        .catch((error) => {
            // The write failed...
            alert(error);
        });
    });
