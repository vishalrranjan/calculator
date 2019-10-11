
function  insert(num){
	document.form.textview.value = document.form.textview.value + num;
}

function equal(){
	var exp = document.form.textview.value
	if(exp){
		document.form.textview.value = eval(exp); //eval() for evalute the expression.
	}
}

function clean(){
		document.form.textview.value = ""
}

function back(){
	exp=document.form.textview.value 
	document.form.textview.value = exp.substr(0, exp.length-1)
}