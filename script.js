const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const time = document.querySelector(".time");


const padZero = (num)=>{
    return String(num).padStart(2 , '0');
}

const checkAmPm = (currentHours)=>{
    if(currentHours >= 12){
        return "PM";
    }else{
        return "AM";
    }
}

const settingTime = ()=>{
    let currentDate = new Date();
    let currentHours = currentDate.getHours();
    if(currentHours>12){
        hours.innerText = padZero(currentHours - 12);
    }else{
        hours.innerText = padZero(currentHours);
    }
    minutes.innerText = padZero(currentDate.getMinutes());
    seconds.innerText = padZero(currentDate.getSeconds());
    time.innerText = checkAmPm(currentHours);
}

const updateTime = ()=>{
    setInterval(()=>{
        settingTime();
    } , 1000);
}

const onLoad = ()=>{
    settingTime();
    updateTime();
}

onLoad();

