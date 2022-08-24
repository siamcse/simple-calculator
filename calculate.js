const input = document.getElementById('input-field');
const calculate = (number) => {
    input.value += number;
}
const result = () => {
    try{
        input.value = eval(input.value);
    }
    catch{
        alert('Enter valid input.');
    }
}
const clr = () =>{
    input.value = "";
}
const del = () =>{
    input.value = input.value.slice(0,-1);
}