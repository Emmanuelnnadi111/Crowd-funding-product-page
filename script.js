const openMenu = document.querySelector(".openBtn");
const closeMenu = document.querySelector(".close-menu");
const backToProjectBtn = document.querySelector(".back-to-project");
const backToProjectPage = document.querySelector(".back-to-project-wrap ");
const activeBtn = document.querySelector(".active-btn");
const activeWrap = document.querySelector(".active-wrap");
const continueBtn = document.querySelector(".continueBtn");
const complete = document.querySelector(".complete");
const completeBtn = document.querySelector(".completeBtn");
const selectReward = document.querySelector(".select-reward");
const mobileMenu = document.querySelector(".mobile-menu");
const closeModal = document.querySelector(".close-modal");
const selectInput = document.querySelector("#select-input");

openMenu.addEventListener("click", () => {
	mobileMenu.classList.remove("hidden");
	closeMenu.classList.remove("hidden");
    openMenu.classList.add("hidden");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    openMenu.classList.remove("hidden");
    closeMenu.classList.add("hidden");
});

backToProjectBtn.addEventListener("click", () => {
    console.log(backToProjectPage.classList.remove("hidden"));
});

closeModal.addEventListener("click", () => {
    const display = document.querySelector(".back-to-project-wrap ");
    display.style.display = "none";
});

selectInput.addEventListener("click", () => {
    document.querySelector(".bamboo-content").style.borderColor = "DarkCyan";
    activeWrap.classList.remove("hidden");
    selectInput.style.color = `" text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 "`;
});

continueBtn.addEventListener("click", () => {
    complete.classList.remove("hidden");
     document.querySelector(".back-to-project-wrap").style.display = "none";
});

completeBtn.addEventListener("click", () => {
    complete.classList.add('hidden');
});