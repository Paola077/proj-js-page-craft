const companyData = {
  name: "Acme Corporation",
  primaryColor: "#2c5545",
  backgroundColor: "#e3e3e3",
  claim: "We make the best widgets",
  text: "We are the best company in the world, except for the other companies that are better than us.",
  imageUrl:
    "https:plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
};

document.addEventListener('DOMContentLoaded', () => {

  const newCompanyName = document.querySelector('.logo');
  newCompanyName.textContent = companyData.name;
  companyData.name[0].toUpperCase;

  const newTitlePage = document.getElementById('headTitle');
  newTitlePage.textContent = companyData.name;

  const setNewImage = document.getElementById('companyImage');
  setNewImage.setAttribute("src", companyData.imageUrl);

  const newClaim = document.getElementById('companyClaim');
  newClaim.textContent = companyData.claim;

  const newText = document.getElementById('companyText');
  newText.textContent = companyData.text;

  document.documentElement.style.setProperty('--back-color', companyData.backgroundColor);

  document.documentElement.style.setProperty('--primary-color', companyData.primaryColor);

  function openForm() {
    const showForm = document.getElementById('companyForm');
    showForm.style.display = "block";
  };

  function closeForm() {
    const hiddenForm = document.getElementById('companyForm');
    hiddenForm.style.display = "none";
  };

  const editButton = document.getElementById('editCompanyBtn');
  editButton.addEventListener('click', openForm);

  const closeButton = document.getElementById('closeCompanyFormBtn');
  closeButton.addEventListener('click', closeForm)

  const reloadedDataCompanyName = document.getElementById("companyNameInput");
  reloadedDataCompanyName.value = companyData.name;

  const reloadedDataImg = document.getElementById("companyImageURLInput");
  reloadedDataImg.value = companyData.imageUrl;

  const reloadedPrimaryColor = document.getElementById("primaryColor");
  reloadedPrimaryColor.value = companyData.primaryColor;

  const reloadedSecondaryColor = document.getElementById("backgroundColor");
  reloadedSecondaryColor.value = companyData.backgroundColor;

  const reloadedDataClaim = document.getElementById("companyClaimInput");
  reloadedDataClaim.value = companyData.claim;

  const reloadedTextArea = document.getElementById("companyTextInput");
  reloadedTextArea.value = companyData.text;

  const storedData = localStorage.getItem("dataInput");
  if (storedData) {
    const dataSaved = JSON.parse(storedData);

     document.getElementById("companyNameInput").value = dataSaved.company;
     document.getElementById("companyImageURLInput").value = dataSaved.companyImage;
     document.getElementById("primaryColor").value = dataSaved.primaryColor;
     document.getElementById("backgroundColor").value = dataSaved.secondaryColor;
     document.getElementById("companyClaimInput").value = dataSaved.claim;
     document.getElementById("companyTextInput").value = dataSaved.textArea;

     document.getElementById("companyName").textContent = dataSaved.company;
     document.getElementById("companyImage").setAttribute("src", dataSaved.companyImage);
     document.documentElement.style.setProperty('--primary-color', dataSaved.primaryColor);
     document.documentElement.style.setProperty('--back-color', dataSaved.secondaryColor);
     document.getElementById("companyClaim").textContent = dataSaved.claim;
     document.getElementById("companyText").textContent = dataSaved.textArea;
 }

  const editForm = document.getElementById("companyForm");

  editForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nameCompanyInput = document.getElementById("companyNameInput");
    const imgCompanyInput = document.getElementById("companyImageURLInput");
    const primaryColorInput = document.getElementById("primaryColor");
    const backgroundColorInput = document.getElementById("backgroundColor");
    const claimCompanyInput = document.getElementById("companyClaimInput");
    const textCompanyInput = document.getElementById("companyTextInput");
    
    const inputDataUser = {
    company: nameCompanyInput.value,
    companyImage: imgCompanyInput.value,
    primaryColor: primaryColorInput.value,
    secondaryColor: backgroundColorInput.value,
    claim: claimCompanyInput.value,
    textArea: textCompanyInput.value,
    };
    
    const inputDataObjectToJson = JSON.stringify(inputDataUser);
    localStorage.setItem("dataInput", inputDataObjectToJson);

    document.getElementById("companyName").textContent = inputDataUser.company;
    document.getElementById("companyImage").setAttribute("src", inputDataUser.companyImage);
    document.documentElement.style.setProperty('--primary-color', inputDataUser.primaryColor);
    document.documentElement.style.setProperty('--back-color', inputDataUser.secondaryColor);
    document.getElementById("companyClaim").textContent = inputDataUser.claim;
    document.getElementById("companyText").textContent = inputDataUser.textArea;

    closeForm();
  })
});

