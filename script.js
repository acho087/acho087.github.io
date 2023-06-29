const toggle = document.querySelector(".toggle");
const themeLink = document.getElementById('theme');
const storedTheme = localStorage.getItem('theme');

toggle.classList.toggle("dark", storedTheme === 'dark');
themeLink.href = storedTheme === 'dark' ? 'dark.css' : 'defaultdev.css';

toggle.addEventListener("click", () => {
  toggle.classList.toggle("dark");
  themeLink.href = toggle.classList.contains("dark") ? "dark.css" : "defaultdev.css";
  localStorage.setItem('theme', toggle.classList.contains("dark") ? 'dark' : 'defaultdev');
});


// MODAL STUFF SKILLS
// Get the modal element
const modal = document.getElementById("modal");

// Get the button that opens the modal
const openModalBtn = document.getElementById("openModal");

// Get the button that closes the modal
const closeModalBtn = document.getElementById("closeModal");

// Open the modal when the button is clicked
openModalBtn.addEventListener("click", function() {
  modal.showModal();
});

// Close the modal when the close button is clicked
closeModalBtn.addEventListener("click", function() {
  modal.close();
});

// Close the modal when clicking outside of it
modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.close();
  }
});
