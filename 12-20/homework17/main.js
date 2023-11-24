
const arrow = document.querySelectorAll('#arrow')
const baro = document.querySelectorAll('.teqsti')
const P = document.querySelectorAll('#ptag')
const box = document.querySelectorAll('#box')

for (let i = 0; i < box.length; i++) {
    baro[i].addEventListener("click", function() {
        baro[i].classList.toggle("shavi");
        for (let j = 0; j < baro.length; j++) {
            if (j !== i) {
                baro[j].classList.remove("shavi");
            }
        }
        arrow[i].classList.toggle("rotate");
        for (let j = 0; j < box.length; j++) {
            if (j !== i) {
            arrow[j].classList.remove("rotate");
            }
        }
        P[i].classList.toggle("active");
        for (let j = 0; j < box.length; j++) {
            if (j !== i) {
                P[j].classList.remove("active");
            }
        }
    });
}