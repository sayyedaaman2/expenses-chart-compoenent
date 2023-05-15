


async function generateChart(){

    const chartData = await fetch('./data.json');
    const response = await chartData.json();
    console.log(response);

    const chartDivElement = document.getElementById('chart');

    const today = new Date();
    for(let i=0; i<response.length; i++){

        const colElement = document.createElement('div');
        colElement.className = "col"
        const colMoneyElement = document.createElement('div');
        colMoneyElement.className = "col-money";
        const colSizeElement = document.createElement("div");
        colSizeElement.className = 'col-size';
        const colNameElement = document.createElement('div');
        colNameElement.className = 'col-name';


        colNameElement.innerText = response[i].day
        colMoneyElement.innerText =  "$" + response[i].amount;
        colSizeElement.style.height = response[i].amount + "%";
        if(today.getDay() == i+1){
            colSizeElement.style.backgroundColor = "hsl(186, 34%, 60%)";
        }
        // console.log(response[i].amount*100/100)

        colSizeElement.addEventListener('mouseover',function(){
            colMoneyElement.style.display = "block"
        })
        colSizeElement.addEventListener('mouseleave',function(){
            colMoneyElement.style.display = "none"
        })

        colElement.append(colMoneyElement);
        colElement.append(colSizeElement);
        colElement.append(colNameElement)

        chartDivElement.append(colElement);
    }



    



}

generateChart();