const companyData = {
  name: "Acme Corporation",
  primaryColor: "#2c5545",
  backgroundColor: "#e3e3e3",
  claim: "We make the best widgets",
  text: "We are the best company in the world, except for the other companies that are better than us.",
  imageUrl:
    "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
};

//CAMBIANDO EL NOMBRE Y TITULO
const newCompanyName = document.querySelector('.logo');
newCompanyName.textContent = companyData.name;
companyData.name[0].toUpperCase;

const newTitle = document.getElementById('headTitle');
newTitle.textContent = companyData.name;

//CAMBIANDO LA IMAGEN
const setImage = document.getElementById('companyImage');
setImage.setAttribute("src", companyData.imageUrl);

//CAMBIANDO EL CLAIM Y EL TEXTO
const newClaim = document.getElementById('companyClaim');
newClaim.textContent = companyData.claim;

const newText = document.getElementById('companyText');
newText.textContent = companyData.text;

//ACCEDIENDO AL BACKGROUND & PRIMARY COLOR DESDE EL COMPANY DATA
document.documentElement.style.setProperty('--back-color', companyData.backgroundColor);

document.documentElement.style.setProperty('--primary-color', companyData.primaryColor);

//ACCEDIENDO AL FORMULARIO DESDE EL BOTON
function openForm() {
  const editForm = document.getElementById('companyForm');
  editForm.style.display = "block";
};

function closeForm() {
  const hiddenForm = document.getElementById('companyForm');
  hiddenForm.style.display = "none";
};

const editButton = document.getElementById('editCompanyBtn');
editButton.addEventListener('click', openForm);

const closeButton = document.getElementById('closeCompanyFormBtn');
closeButton.addEventListener('click', closeForm)
