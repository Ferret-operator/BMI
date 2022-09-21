function szamolas()
{

   let magassag = parseFloat(document.getElementById('magassag').value);
   let suly= parseFloat(document.getElementById('testsuly').value);

   document.getElementById('bmi_ertek').textContent= suly / ((magassag / 100) * 2);


}

function init(){

    document.getElementById('magassag').addEventListener('change',szamolas);
    document.getElementById('testsuly').addEventListener('change', szamolas);

    

}
document.addEventListener("DOMContentLoaded", init);
console.log('Javascript file end');