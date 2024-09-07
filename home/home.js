
    const saveToLocalStorageButton = document.getElementById('saveToLocalStorage');
    const saveToSessionStorageButton = document.getElementById('saveToSessionStorage');
    const agreementCheckbox = document.getElementById('agreement');
    const contactForm = document.getElementById('contactForm');
    
    agreementCheckbox.addEventListener('click', update = () =>{
        let checkbox=document.getElementById('agreement');
        if(checkbox.checked == true){
            document.getElementById("saveToLocalStorage").disabled = false;
            document.getElementById("saveToSessionStorage").disabled = false;
            
        }
        else{
            document.getElementById("saveToLocalStorage").disabled= true;
            document.getElementById("saveToSessionStorage").disabled = true;
        }
    });

    function updateButtons() {
        if(agreementCheckbox.checked == true){
            document.getElementById("saveToLocalStorage").disabled = false;
            document.getElementById("saveToSessionStorage").disabled = false;
            
        }
        else{
            document.getElementById("saveToLocalStorage").disabled= true;
            document.getElementById("saveToSessionStorage").disabled = true;
        }
    };
    function formValidate() {
        const userName = document.getElementById('userName').value;
        const email = document.getElementById('email').value;
        const dob = document.getElementById('dob').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const password = document.getElementById('password').value;

        if (!userName , !email , !dob , !phoneNumber , !password) {
            alert('All fields are required.');
            return false;
        }
    }; 

    function saveToLocalStorage() {
        if (formValidate()) {
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            localStorage.setItem('formData', JSON.stringify(data));
            alert('Data saved to Local Storage.');
        }
    };

    function saveToSessionStorage() {
        if (formValidate()) {
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            sessionStorage.setItem('formData', JSON.stringify(data));
            alert('Data saved to Session Storage.');
        }
    };

    function clearForm() {
        localStorage.removeItem('formData');
        sessionStorage.removeItem('formData');
        updateButtons();
        alert('Form cleared and data removed from storage.');
    };

    saveToLocalStorageButton.addEventListener('click', saveToLocalStorage);
    saveToSessionStorageButton.addEventListener('click', saveToSessionStorage);
    contactForm.addEventListener('reset', clearForm);
    

    
