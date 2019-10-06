const main = document.querySelector('main')



function randomizeGroup(num) {
    const students = [
        "Abdullah Altamimi", "Abdulrahman Alfouzan", "Abdulrahman Aljammaz", "Abdulrahman Alshabibi", 
        "Abdulwahhab AlBallaa", "Aisha Dabbagh", "Dalia Abdullah", "Fahad Abdullah", " Hisham Aljahbli", 
        "Joseph Rulo", "Lama Alyousef", "Lamees Alfallaj", " Mesfer AlQahtani", 
        " Moayad Alnuwaysir", " Mohammed Almarri", " Mohammed Alofaysan", " Monirah AlModhi", 
        " Muhannad Alanazi", " Muneera Bin Hotan",  "Nawal Bin Dawood", "Noura Albukhaite", 
        " Nouf Almatroudi", " Obaid Alqahtani", " Osama Alruthaya", " Raje Alharthi", 
        " Sager Alarifi", " Sara Alghannamy", " Sarah Alghofaili", " Saud Alshamsi", 
        " Sumayah Ali"
    ];

    students.sort(() => Math.random() - 0.5) //this is to shuffle the array so the students order is randomized within the students array

    main.innerHTML = ''

    const numberOfStudentsPerGroup = num

    const numberOfGroups = Math.floor(students.length / numberOfStudentsPerGroup); // how many groups you have depends on how many students you have divided by how many students you want in a single group

    for (let i = 0; i < numberOfGroups; i++) {
        let group = '';
        for (let j = 0; j < numberOfStudentsPerGroup; j++) {
            group += `<li> ${students.splice(0, 1)} </li>`;
        }
        if (students.length <= 1) group += `<li> ${students.splice(0, 1)} </li>`; //this line is to avoid having the last person in a group alone, this is necessary if the students total count is odd
        main.innerHTML += `<div class="col-4">${group}</div>`;
    }
}


const button = document.getElementById("btn");
button.addEventListener("click", () => randomizeGroup(5)); //the number you pass in the argument of the function is how many students you want in a single group

