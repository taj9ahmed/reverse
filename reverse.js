function Reverse(input){

    var temp = [];

    console.log("input="+input);
    for(let i=0; i<input.length; i++){
        temp.push( input[i]);
    }
    console.log("temp="+temp);
    var result="";
    for(let j = temp.length-1; j>=0 ;j--){
        result += temp[j];
        // console.log("result="+result+"\n");
    }

    document.getElementById("result").innerHTML = result;
    // console.log("result="+result+"\n");
    
}