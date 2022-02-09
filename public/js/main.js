const cityName=document.getElementById('cityName')
const city_name=document.getElementById('city_name')
const temp_status=document.getElementById('temp_status')
const temp=document.getElementById('temp')
const submitBtn=document.getElementById('submitBtn')
const day=document.getElementById('day');
const today_date=document.getElementById('today_date');
const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
      city_name.innerHTML='Write something before you search';
    }
    else
    try{
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=f333364bc1268f18e37062174ab5f06e`;
      const response=await  fetch(url);
      const data=await response.json();
      const arr=[data];
      temp.innerHTML=arr[0].main.temp;
     tempMood=arr[0].weather[0].main;
     city_name.innerHTML=`${arr[0].name}, ${arr[0].sys.country}`;
      temp.innerHTML=arr[0].main.temp;
      if(tempMood=='Clear'){
          temp_status.innerHTML=
          "<i class='fas fa-sun' style='color:#eccc68;'></i>";
        }
          else if(tempMood=='Clouds'){
            temp_status.innerHTML=
            "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
          }

          else if(tempMood=='Rain'){
            temp_status.innerHTML=
            "<i class='fas fa-rain' style='color:#a4b0be;'></i>";
          }
          let n=new Date();

      
          var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
          var months=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
            day.innerHTML=days[n.getDay()]
      console.log(response);
      today_date.innerHTML=`${n.getDate()}  ${months[n.getMonth()]}`;
    }
    catch{
        city_name.innerHTML=`Please enter a valid city name`;
    }
}
submitBtn.addEventListener('click',getInfo)