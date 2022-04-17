 const firebaseConfig = {
    apiKey: "AIzaSyAGUVz1NkdizEzgt7CVS9CtyPL67-O9nbI",
    authDomain: "dental-df0ec.firebaseapp.com",
    projectId: "dental-df0ec",
    storageBucket: "dental-df0ec.appspot.com",
    messagingSenderId: "110212203816",
    appId: "1:110212203816:web:ff8b42a657f5fb9aed3c1d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const preloader = document.querySelector('.lds-ripple');

  function addItemToContainer (firstName, lastName, email, phoneNumber, date){
    const containerCheck = document.getElementById('list');
    let ElemContainer = document.createElement("div");
    ElemContainer.classList.add('carsCard');
    let firstNameElem = document.createElement("p");
    let lastNameElem = document.createElement("p");
    let emailElem = document.createElement("p");
    let phoneNumberElem = document.createElement("p");
    let dateElem = document.createElement("p");

    manufacturerElem.innerHTML = `Марка автомобіля: ${firstName}`;
    modelElem.innerHTML = `Модель автомобіля: ${lastName}`;
    modElem.innerHTML = `Двигун: ${email}`;
    yearElem.innerHTML = `Рік випуску автомобіля: ${phoneNumber}`;
    numberElem.innerHTML = `Державний номер: ${date}`;

    ElemContainer.appendChild(firstNameElem);
    ElemContainer.appendChild(lastNameElem);
    ElemContainer.appendChild(emailElem);
    ElemContainer.appendChild(phoneNumberElem);
    ElemContainer.appendChild(dateElem);

    containerCheck.append(ElemContainer)

}
function FetchAllData(){
    firebase.database().ref(`users`).once('value',
    function(snapshot){
        snapshot.forEach(
            function(ChildSnapshot){
                var firstNameSel = ChildSnapshot.val().firstName;
                var lastNameSel = ChildSnapshot.val().lastName;
                var emailSel = ChildSnapshot.val().email;
                var phoneNumberSel = ChildSnapshot.val().phoneNumber;
                var dateSel = ChildSnapshot.val().date;
               
                addItemToContainer(firstNameSel, lastNameSel, emailSel, phoneNumberSel, dateSel)
            }
        )
    })
    
};

const showPreloader = (show) => {
    if(show){
        preloader.style.display = 'inline-block'
    } else {
        preloader.style.display = 'none'
    }
}

showPreloader(true);
const renderUsersCards = () =>{
    FetchAllData(); 
    showPreloader(false);
}
renderUsersCards()