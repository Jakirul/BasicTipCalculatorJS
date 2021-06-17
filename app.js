const bill = document.querySelector("#bill");
const tips = document.querySelector("select");
const people = document.querySelector("#people");
const h1 = document.querySelector(".submission");
const button = document.querySelector("button");
const hr = document.querySelector("hr");

button.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (people.value > 0) {
        const tipValue = (tips.value * bill.value) / (people.value);
        h1.innerHTML = `Total tip = £${tipValue.toFixed(2)}`;
        hr.style.display = 'block'
    } else {
        const tipValue = (tips.value * bill.value) / 1;
        h1.innerHTML = `Total tip = £${tipValue.toFixed(2)}`;
        hr.style.display = 'block'
    }

})
