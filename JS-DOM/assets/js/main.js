const inp = document.querySelector("input");
const ls = document.getElementById("list");
let students = [];
function addArr() {

    if (inp.value.trim() != "") {
        if (students.includes(inp.value.trim()) === false) {
            students.push(inp.value.trim());
            inp.value = "";
            fillList();
        }
        else{
            alert("yenisini elave edin")
        }
    }
    else {
        alert("Nese daxil et")
    }
}
function fillList() {
    let res = students.reduce(
        (result, val) => result += `<li>${val}</li>`, ''
    );
    ls.innerHTML = res;
}


