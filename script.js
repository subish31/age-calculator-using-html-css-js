function getage() {
    const age = document.getElementById('age');
    const date = document.getElementById('date');
    const month = document.getElementById('month');
    const year = document.getElementById('year');
    
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    
    const currentDate = mm + '/' + dd + '/' + yyyy;
    console.log(currentDate);
    
    const dob = month.value + '/' + date.value + '/' + year.value;
    const calculatedAge = yyyy - year.value;

    if (new Date(dob) > today || year.value=='' || month.value>12 || date.value>31) {
        age.innerText = 'Please enter a valid date of birth.';
    } else {
        age.innerText = `Your age is ${calculatedAge} years.`;
    }
}
