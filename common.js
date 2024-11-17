

fetch('message-box.html')
        .then(response => response.text())
        .then(text => document.querySelector('main').innerHTML += text);

fetch('header.html')
    .then(response => response.text())
    .then(text => document.querySelector('header').innerHTML = text);

fetch('footer.html')
    .then(response => response.text())
    .then(text => document.querySelector('footer').innerHTML = text);

fetch('nav-top.html')
    .then(response => response.text())
    .then(text => document.querySelector('main').innerHTML = text + document.querySelector('main').innerHTML);

fetch('nav-bot.html')
    .then(response => response.text())
    .then(text => document.querySelector('main').innerHTML += text);

fetch('btn-top-bot.html')
    .then(response => response.text())
    .then(text => document.querySelector('main').innerHTML += text);

if (navigator.maxTouchPoints != 0)
{
    let sliders = document.getElementsByClassName("slider-container");
    for(let s of sliders)
    {
        //s.style.pointerEvents = "none";
    }
}

function SpeakByBrowser(text)
{           
    let utterThis = new SpeechSynthesisUtterance(text);
    if (navigator.maxTouchPoints != 0)
    {
        window.speechSynthesis.speak(utterThis);
        return;
    }

    for(let v of window.speechSynthesis.getVoices())
    {
        if (v.name == "Microsoft HoaiMy Online (Natural) - Vietnamese (Vietnam)") utterThis.voice = v;
    }
    window.speechSynthesis.speak(utterThis);
}

function SliderQuantityInput(slider)
{

    let width = slider.value*100/slider.getAttribute("max");
    if (5 < width && width < 20) width++;
    else if (width <= 5) width += 1.2;
    slider.previousElementSibling.style.width = width + "%";

    slider.parentElement.previousElementSibling.innerText = slider.value;
}

const DEFAULT_QUANTITY = 10;
const DEFAULT_LIMIT = 1000;
function GetQuantity()
{
    let select_quantity = document.querySelector(".select-quantity");
    if (select_quantity == null || select_quantity == undefined) return DEFAULT_QUANTITY;
    else return select_quantity.value;
}
function GetLimit()
{
	// return DEFAULT_LIMIT;
	
    let limit_20 = document.querySelector(".limit-20");
    let limit_100 = document.querySelector(".limit-100");
    let limit_1000 = document.querySelector(".limit-1000");

    if (limit_20 == null || limit_20 == undefined 
        || limit_100 == null || limit_100 == undefined
        || limit_1000 == null || limit_1000 == undefined)
    {
        return DEFAULT_LIMIT;
    }
    else
    {
        if (limit_20.checked == true) return 20;
        else if (limit_100.checked == true) return 100;
        else if (limit_1000.checked == true) return 1000;
    }
}

let handleCookies = document.createElement("script");
handleCookies.setAttribute("src", "handle-cookies.js");
document.body.appendChild(handleCookies);

// yêu cầu passcode khi thay đổi cài đặt phép tính

function SetCookie(name, value, expdays)
{
    const d = new Date();
    d.setTime(d.getTime() + expdays*24*60*60*1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function GetCookie(name)
{
    let cookies = document.cookie.split(";");
    for(let c of cookies)
    {
        while(c.charAt(0) == " ") c = c.substring(1);
        if(c.split("=")[0] == name) return c.split("=")[1];
    }

    return "";
}

function DeleteCookie(name)
{
    document.cookie =  `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function CheckCookie(name)
{
    let cvalue = GetCookie(name);
    if(cvalue != "")
    {
        return true;
    }
    else
    {
        return false;
    }
}

if (CheckCookie("passcode") == false)
{
    let passcode = prompt("Enter a new passcode:", "123456");
    if(passcode != "" && passcode != null) SetCookie("passcode", passcode, 7);
}


Array.from(document.getElementsByClassName("passcode-required")).forEach(e =>
    {
        e.addEventListener("show.bs.dropdown", e => 
        {
            let passcode = prompt("Enter your passcode:");
            if (passcode == GetCookie("passcode")) return;
            e.stopPropagation();
            e.preventDefault();
        });
    });









