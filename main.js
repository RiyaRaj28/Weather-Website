const cityName = document.getElementById('cityname');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');

const getInfo = async(event) => 
{
    console.log("pouyy")
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = `Please write the name before search`;

    }else{
        try{

        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=647db17c0535eefdadd25a8659b40531`;
        const response = await fetch(url);
        console.log(response);
        
        }catch{
            console.error(error);
            city_name.innerText = `Please write the city name properly`;

        }
    }
    // alert('Hii'); 
}

submitBtn.addEventListener('click', getInfo);