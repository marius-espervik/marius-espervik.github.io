let header = document.querySelector('#intro');
let anim = [
	{ t: ' ', ms: 200 },
	{ t: '_', ms: 200 },
	{ t: ' ', ms: 200 },
	{ t: '_', ms: 200 },
	{ t: ' ', ms: 200 },
	{ t: '_', ms: 200 },
	{ t: 'M_', ms: 100 },
	{ t: 'Ma_', ms: 100 },
	{ t: 'Mar_', ms: 100 },
	{ t: 'Mari_', ms: 100 },
	{ t: 'Mariu_', ms: 100 },
	{ t: 'Marius_', ms: 100 },        
	{ t: 'Marius _', ms: 300 },       
	{ t: 'Marius E_', ms: 100 },      
	{ t: 'Marius Es_', ms: 100 },     
	{ t: 'Marius Esp_', ms: 100 },    
	{ t: 'Marius Espe_', ms: 100 },   
	{ t: 'Marius Esper_', ms: 100 },  
	{ t: 'Marius Esperv_', ms: 100 }, 
	{ t: 'Marius Espervi_', ms: 200 },
	{ t: 'Marius Espervik', ms: 100 } 
]

let i = 0;
let update = () => {
  let step = anim[i];
  header.innerText = step.t;
  i++

  if (i < anim.length) {
    setTimeout(update, step.ms);
  }
  else {
    setTimeout(() => {
      document.getElementById('intro').style.fontSize = '4rem';
      setTimeout(() => {
        document.getElementById("nav").style.opacity = "1";
      }, 500);
    }, 200);

  }
}
update()