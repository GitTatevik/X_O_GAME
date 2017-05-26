let xTurn = true; // popoxakan vor cuyc e talis ov petq e xaxy sksi, x te o 
let lines = {
	'1': [[1,2,3],[1,4,7],[1,5,9]], // numn e "1"
	'2': [[1,2,3],[2,5,8]],
	'3': [[1,2,3],[3,5,7],[3,6,9]],
	'4':[[4,5,6],[1,4,7]],
	'5':[[4,5,6],[3,5,7],[1,5,9],[2,5,8]],
	'6':[[4,5,6],[3,6,9]],
	'7':[[1,4,7],[3,5,7],[7,8,9]],
	'8':[[2,5,8],[7,8,9]],
	'9':[[1,5,9],[3,6,9],[7,8,9]]
};
let count = 0;

let cont = document.createElement('div');
cont.setAttribute('id','container');
document.body.appendChild(cont);

let block = [];
let innerValues=[]; // pahum enq x, o  arjeqnery

for(let i = 1; i<10; i++){
	block[i] = document.createElement('div');
	block[i].id=i;
	block[i].setAttribute('class','items');
	cont.appendChild(block[i]);
	block[i].addEventListener('click', onclicked);	
	innerValues[i]='';
}

var gameFinished = false;
function onclicked(e){ // 
	
	if(gameFinished == false){
	
	if(e.target.innerHTML == ''){ // e.target-i mej pahvats e div-y
		if(xTurn ==true){
		e.target.innerHTML='X';
		e.target.style.color="#960536";
		innerValues[parseInt(e.target.id)]='X';
		}
		else{	
		e.target.innerHTML='O';
		e.target.style.color="#1b4636";
		innerValues[parseInt(e.target.id)]='O';
		}
		xTurn = !xTurn;
		
		
		
		let checking = checkLines(e.target.id, e.target.innerHTML); // stugum e true e te false
		count++;
		if(checking){
			setTimeout(function(){let template = document.getElementById("template");
			let victory= template.content.querySelector("#victory");
			//let cln = victory.cloneNode(true); - 2nd option for cloneNode, to create a variable and keep the clonenode in it
			document.body.appendChild(victory);
			
			},0);
			gameFinished = true;
		}	
		else if(count == 9){
		
		setTimeout(function(){let template = document.getElementById("template");
			let draw= template.content.querySelector("#draw");
			document.body.appendChild(draw.cloneNode(true));
			},0);
			gameFinished = true;
	}
	}
	}
	
}

function checkLines(num, value){
	let victory = true;
	const line = lines[num]; //vercrecinq mez petq yexats gtsery
	for (let i of line){
		victory = true;
		for(let j of i){
			if(innerValues[j] !== value){
				victory = false;
			}
		}
		
		
		if(victory == true){
			return true;
		}
		
		
	}
	return false; // kam return victory , kveradardzni
	
}

function refresh(){
	for(let i =1; i<block.length;++i){
		innerValues[i] = '';
		block[i].innerHTML='';
	}
	xTurn = true;
	count =0;
	gameFinished=false;
}


function removeDiv(e){ // eventy sovorakan obyekt e, vory uni it propertinery, 
//voronq nuynpes karox en linel obyekt

	document.body.removeChild(e.target.parentElement);	
	refresh();
	
}






