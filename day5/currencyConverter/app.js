fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>displayDropDown(res));

let select = document.querySelectorAll(".currency");
let btn = document.getElementById('btn');
let input1 = document.getElementById('input');

function displayDropDown(res){
    const array = Object.entries(res);

    for(let i=0;i<array.length;i++)
    {
        let opt = `<option value="${array[i][0]}">${array[i][0]}</option>`;
        select[0].innerHTML += opt;
        select[1].innerHTML += opt;
    }
}

btn.addEventListener('click', ()=>{
    let curr1 = select[0].value;
    let curr2 = select[1].value;
    let inputVal = input1.value;
    console.log(inputVal);
    if (isNaN(inputVal) || curr1 === curr2 || inputVal === null || inputVal === "") {
        alert("please enter the correct value");
    }
    else{
        convert(curr1,curr2,inputVal);
    }

})

function convert(curr1,curr2,inputVal){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
      .then(resp => resp.json())
      .then((data) => {
         document.getElementById('result').value = Object.values(data.rates)[0];
      });
}