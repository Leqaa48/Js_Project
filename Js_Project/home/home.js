// Get references to the buttons, checkbox, and form elements
const saveToLocalStorageButton = document.getElementById('saveToLocalStorage');
const saveToSessionStorageButton = document.getElementById('saveToSessionStorage');
const agreementCheckbox = document.getElementById('agreement');
const contactForm = document.getElementById('contactForm');

// Add event listener to checkbox to enable/disable buttons based on its state
agreementCheckbox.addEventListener('click', update = () => {
    let checkbox = document.getElementById('agreement');
    if (checkbox.checked) {
        // Enable buttons if checkbox is checked
        document.getElementById("saveToLocalStorage").disabled = false;
        document.getElementById("saveToSessionStorage").disabled = false;
    } else {
        // Disable buttons if checkbox is unchecked
        document.getElementById("saveToLocalStorage").disabled = true;
        document.getElementById("saveToSessionStorage").disabled = true;
    }
});

// Function to update buttons based on checkbox state
function updateButtons() {
    if (agreementCheckbox.checked) {
        document.getElementById("saveToLocalStorage").disabled = false;
        document.getElementById("saveToSessionStorage").disabled = false;
    } else {
        document.getElementById("saveToLocalStorage").disabled = true;
        document.getElementById("saveToSessionStorage").disabled = true;
    }
}


function formValidate() {
    
    const userName = document.getElementById('userName').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;

    // Check if any field is empty
    if (!userName , !email , !dob , !phoneNumber , !password) {
        alert('All fields are required.'); 
        return false; 
    }
    return true; 
}





//  save  data to local storage
function saveToLocalStorage() {
    if (formValidate()) { // Validate form before saving
        const formData = new FormData(contactForm); 
        const data = Object.fromEntries(formData); // Convert form data to an object
        localStorage.setItem('formData', JSON.stringify(data)); 
        alert('Data saved to Local Storage.'); // Notify user
    }
}

//  save data to session storage
function saveToSessionStorage() {
    if (formValidate()) { 
        const formData = new FormData(contactForm); 
        const data = Object.fromEntries(formData); 
        sessionStorage.setItem('formData', JSON.stringify(data)); 
        alert('Data saved to Session Storage.'); 
    }
}

// Function to clear form and storage
function clearForm() {
    localStorage.removeItem('formData'); 
    sessionStorage.removeItem('formData'); 
    updateButtons(); 
    alert('Form cleared and data removed from storage.'); // Notify user
}

// Add event listeners to buttons and form
saveToLocalStorageButton.addEventListener('click', saveToLocalStorage); 
saveToSessionStorageButton.addEventListener('click', saveToSessionStorage); 
contactForm.addEventListener('reset', clearForm); 
