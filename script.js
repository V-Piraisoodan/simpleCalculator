var output = document.getElementById('input');

function cal(val){
    output.value += val;
}

// operations 
function answer(num){
    if(output.value ==""){
        output.value = "";
    }
    else{
        output.value = eval(output.value)
    }
}

// clear function
function cl(){
    output.value = "";
}

function CE(){
    output.value = output.value.slice(0,-1);
}

// keyboard key checking
document.body.addEventListener("keydown", function (e) {
    if (isFinite(e.key)) {
        output.value+=e.key;
        // alert("hi")
    } 

    else alert("Only numbers are allowed  !!!!!");
});