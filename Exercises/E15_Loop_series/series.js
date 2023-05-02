const n = parseInt(prompt("please enter the number of elements to be calculate: "));

function series1(){
    let series = [1];
    for(let i=1;i<n;i++){
        series[i]=i*i;
    }
    console.log(series);
    document.getElementById("result").innerHTML ="Fn = n * n<br>"+series.join(", ");
}

function series2(){
    let series = [1];
    for(let i=1;i<n;i++){
        series[i]=series[i-1]*2;
    }
    console.log(series);
    document.getElementById("result").innerHTML ="Fn = Fn-1 * 2<br>"+series.join(", ");
}

function series3(){
    let series = [1,1];
    for(let i=2;i<n;i++){
        series[i]=series[i-1]+series[i-2];
    }
    console.log(series);
    document.getElementById("result").innerHTML ="Fn = Fn-1 + Fn-2<br>"+series.join(", ");

}

function series4(){
    let counter=0;
    let number=2;
    let result="";

    while(counter<n){
        for(let i=number;i>1;i--){
            if(number % i === 0 && i !== number){
                break;
            }
            if(i === 2){
                counter++;
                console.log(counter, number);
                result += "the "+counter + "th prime number = " + number+"<br>";
            }
            
        }
    number++
    }
    document.getElementById("result").innerHTML ="Fn = nth prime number<br>"+result;
}
