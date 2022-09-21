function szamolas()
{

   let magassag = parseFloat(document.getElementById('magassag').value);
   let suly= parseFloat(document.getElementById('testsuly').value);
    let bmi= suly / ((magassag / 100) ** 2);
   document.getElementById('bmi_ertek').textContent= bmi;

   if(bmi<= 18.5){

        document.getElementById('sovany').classList.add('kijeloles');
   }
   else if(bmi => 18.5 && bmi <= 24.9){

    document.getElementById('normal').classList.add('kijeloles');

   }
   else if(bmi =>25 && bmi <= 29.9){

    document.getElementById('tulsuly').classList.add('kijeloles');

   }
   else if(bmi => 30 && bmi<= 34.9){

    document.getElementById('tulsuly_1').classList.add('kijeloles');

   }
   else if(bmi => 35 && bmi<= 39.9){

    document.getElementById('tulsuly_2').classList.add('kijeloles');

   }
   else if(bmi => 40){

    document.getElementById('tulsuly_3').classList.add('kijeloles');

   }


}

function init(){

    document.getElementById('magassag').addEventListener('change',szamolas);
    document.getElementById('testsuly').addEventListener('change', szamolas);



}
document.addEventListener("DOMContentLoaded", init);
console.log('Javascript file end');