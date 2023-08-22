
const registrationForm = document.querySelector('#registrationForm');
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#nameInput').value;
    const email = document.querySelector('#emailInput').value;
    const gender = document.querySelector('#genderSelect').value;
    const dob = document.querySelector('#dobInput').value;
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Gender: ${gender}`);
    console.log(`Date of Birth: ${dob}`);
    
    
});
