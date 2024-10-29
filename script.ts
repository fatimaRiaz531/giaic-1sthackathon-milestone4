const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const photoInput = document.getElementById('photo') as HTMLInputElement;
const schoolInput = document.getElementById('school') as HTMLInputElement;
const degreeInput = document.getElementById('degree') as HTMLInputElement;
const companyInput = document.getElementById('company') as HTMLInputElement;
const roleInput = document.getElementById('role') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;
const projectsInput = document.getElementById('projects') as HTMLInputElement;

const outputName = document.getElementById('outputName') as HTMLInputElement;
const outputEmail = document.getElementById('outputEmail') as HTMLInputElement;
const outputPhone = document.getElementById('outputPhone') as HTMLInputElement;
const outputPhoto = document.getElementById('outputPhoto') as HTMLInputElement;
const outputSchool = document.getElementById('outputSchool') as HTMLInputElement;
const outputDegree = document.getElementById('outputDegree') as HTMLInputElement;
const outputCompany = document.getElementById('outputCompany') as HTMLInputElement;
const outputRole = document.getElementById('outputRole') as HTMLInputElement;
const outputSkills = document.getElementById('outputSkills') as HTMLInputElement;
const outputProjects = document.getElementById('outputProjects') as HTMLInputElement;

const formArea = document.getElementById('form-area') as HTMLElement;
const outputArea = document.getElementById('output') as HTMLElement;
const submitBtn = document.getElementById('submitButton') as HTMLElement; 
const editBtn = document.getElementById('editBtn') as HTMLElement;

submitBtn.addEventListener('click',()=>{
    formArea.style.display = 'none';
    outputArea.style.display = "block";

    if (photoInput.files && photoInput.files.length > 0) {
        const file = photoInput.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            if (e.target?.result) {
                outputPhoto.innerHTML = `<img src="${e.target.result}" alt="Uploaded Photo" style="width: 150px; height: 150px; border-radius: 50%; border: 2px solid #4a90e2; background-position: center; background-repeat: no-repeat; background-size: cover; margin: 20px 0">`;
            }
        };
        reader.readAsDataURL(file);
    } else {
        outputPhoto.innerHTML = "<p>No photo uploaded</p>";
    }

    outputName.textContent = nameInput.value;
    outputEmail.textContent = emailInput.value;
    outputPhone.textContent = phoneInput.value;

    outputSchool.textContent = schoolInput.value;
    outputDegree.textContent = degreeInput.value;

    outputCompany.textContent = companyInput.value;
    outputRole.textContent = roleInput.value;

    outputSkills.textContent = skillsInput.value;
    outputProjects.textContent = projectsInput.value;
})

editBtn.addEventListener('click', () => {
    outputArea.style.display = "none";
    formArea.style.display = "block";
})