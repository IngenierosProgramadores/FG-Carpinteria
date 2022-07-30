const recaptcha = document.getElementById("g-recaptcha");

const changeLanguage = async (language) => {
  if (language == "es") {
    document.getElementById("en").style.display = "block";
  } else {
    document.getElementById("es").style.display = "block";
  }
  const requestJSON = await fetch(`../langueges/${language}.json`);
  const texts = await requestJSON.json();

  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.innerHTML = texts[section][value];
  }
};

recaptcha.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});
