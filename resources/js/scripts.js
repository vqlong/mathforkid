
// let path = window.location.pathname;
// if (path == "/" || path == "/index.html") path = "./resources/html/";
// else path = "./";

let path = "/resources/html/";
if (window.location.pathname.indexOf("mathforkid") > 0) path = "/mathforkid/resources/html/";

fetch(path + 'message-box.html')
        .then(response => response.text())
        .then(text => document.querySelector('main').innerHTML += text);

fetch(path + 'login-box.html')
        .then(response => response.text())
        .then(text => document.querySelector('main').innerHTML += text);

fetch(path + 'header.html')
    .then(response => response.text())
    .then(text => document.querySelector('header').innerHTML = text);

fetch(path + 'footer.html')
    .then(response => response.text())
    .then(text => document.querySelector('footer').innerHTML = text);

fetch(path + 'nav-top.html')
    .then(response => response.text())
    .then(text => document.querySelector('main').innerHTML = text + document.querySelector('main').innerHTML);

fetch(path + 'nav-bot.html')
    .then(response => response.text())
    .then(text => document.querySelector('main').innerHTML += text);

fetch(path + 'btn-top-bot.html')
    .then(response => response.text())
    .then(text => document.querySelector('main').innerHTML += text);



// if (navigator.maxTouchPoints != 0)
// {
//     let sliders = document.getElementsByClassName("slider-container");
//     for(let s of sliders)
//     {
//         s.style.pointerEvents = "none";
//     }
// }

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
handleCookies.setAttribute("src", "../js/handle-cookies.js");
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

// database
const indexedDB =
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

if (!indexedDB)
{
    console.log("IndexedDB could not be found in this browser.");
}

let request = indexedDB.open("AccountDB", 1);

// error
request.onerror = function (event)
{
    console.error("An error occurred with IndexedDB");
    console.error(event);
};

// tạo bảng, chỉ chạy 1 lần
request.onupgradeneeded = function ()
{
    console.log("AccountDB created successfully!");

    const db = request.result;

    const store = db.createObjectStore("accounts", { keyPath: "id", autoIncrement: true });

    store.createIndex("acc_username", ["username"], { unique: true });
    store.createIndex("acc_password", ["password"], { unique: false });
    store.createIndex("acc_username_password", ["username", "password"], { unique: true, });
};

// chạy mỗi lần khi mở database thành công
request.onsuccess = function (event)
{
    console.log("AccountDB opened successfully!");
    // console.log(event.target);
    // console.log(request);
}

//
function AccountAdd(userData)
{

    const db = request.result;
    const transaction = db.transaction("accounts", "readwrite");
    const store = transaction.objectStore("accounts");
    const addRequest = store.add(userData);

    addRequest.onsuccess = () => {
        console.log(userData.username + " đã được đăng ký thành công!");
        document.getElementById("login-status").innerText = userData.username + " đã được đăng ký thành công!";
    };

    addRequest.onerror = (event) => {
        console.error(event);
    }


    // transaction.oncomplete = () => db.close();
}

//
function AccountGetByUsername(username)
{
    const db = request.result;
    const transaction = db.transaction("accounts", "readwrite");
    const store = transaction.objectStore("accounts");
    const usernameIndex = store.index("acc_username");
    const getRequest = usernameIndex.getAll([`${username}`]);
    getRequest.onsuccess = () => console.log(`getAll ${username}`, getRequest.result);


    // transaction.oncomplete = () => db.close();
}

//
function AccountGetByPassword(password)
{
    const db = request.result;
    const transaction = db.transaction("accounts", "readwrite");
    const store = transaction.objectStore("accounts");
    const passwordIndex = store.index("acc_password");
    const getRequest = passwordIndex.getAll([`${password}`]);
    getRequest.onsuccess = () => console.log(`getAll ${password}`, getRequest.result);


    // transaction.oncomplete = () => db.close();
}

//
function AccountLogin(userData)
{
    const db = request.result;
    const transaction = db.transaction("accounts", "readwrite");
    const store = transaction.objectStore("accounts");
    const usernamepasswordIndex = store.index("acc_username_password");
    const getRequest = usernamepasswordIndex.get([`${userData.username}`, `${userData.password}`]);
    getRequest.onsuccess = () => {
        if (getRequest.result == undefined)
        {
            console.log("Đăng nhập thất bại!");
            document.getElementById("login-status").innerText = "Đăng nhập thất bại!";
            document.getElementById("login-box").style.display = "flex";
        }
        else
        {
            SetCookie("username", getRequest.result.username, 7);
            SetCookie("password", getRequest.result.password, 7);
            document.getElementById("label-username").innerText = `[${getRequest.result.username}]`
            console.log(`Xin chào ${getRequest.result.username}!`);
        }
    };


    // transaction.oncomplete = () => db.close();
}

//
function AccountUpdate(userData)
{
    const db = request.result;
    const transaction = db.transaction("accounts", "readwrite");
    const store = transaction.objectStore("accounts");
    const usernamepasswordIndex = store.index("acc_username_password");
    const getRequest = usernamepasswordIndex.get([`${userData.username}`, `${userData.password}`]);
    getRequest.onsuccess = () => {
        if (getRequest.result == undefined)
        {
            console.log("Đăng nhập thất bại!");
        }
        else
        {
            // console.log(getRequest.result);
            let data = getRequest.result;
            const putRequest = store.put({id: data.id, username: `${data.username}`, password: `${userData.newpassword}`});
            
            putRequest.onsuccess = () => {
                console.log(`Cập nhật thành công!`);
                const getRequest = store.get(putRequest.result);
                getRequest.onsuccess = () => console.log("update", getRequest.result);
            };

            putRequest.onerror = (event) => {
                console.error(`Cập nhật thất bại!`);
                console.error(event);
                console.log(`Cập nhật thất bại!`);
            };
            
        }
    };


    transaction.oncomplete = () => db.close();
}

//
function AccountDelete(userData)
{
    const db = request.result;
    const transaction = db.transaction("accounts", "readwrite");
    const store = transaction.objectStore("accounts");
    const usernamepasswordIndex = store.index("acc_username_password");
    const getRequest = usernamepasswordIndex.get([`${userData.username}`, `${userData.password}`]);
    getRequest.onsuccess = () => {
        if (getRequest.result == undefined)
        {
            console.log("Đăng nhập thất bại!");
        }
        else
        {
            let data = getRequest.result;
            const deleteRequest = store.delete(data.id);
            deleteRequest.onsuccess = () => console.log(`Đã xoá ${data.username}!`);
            
        }
    };


    transaction.oncomplete = () => db.close();
}


function SetPasscode()
{
    if (CheckCookie("passcode") == false)
    {
        document.getElementById("login-prompt").innerHTML = "Enter a new passcode:";
        let inputBox = document.getElementById("login-box");
        inputBox.style.display = "flex";
        let stopWheel = e => e.preventDefault();
        window.addEventListener("wheel", stopWheel, { passive:false });

        let btnOk = document.getElementById("btn-ok-login");
        btnOk.onclick = e =>
        {
            let passcode = document.getElementById("login-data").value;
            if(passcode != "" && passcode != null)
            {
                SetCookie("passcode", passcode, 7);
                inputBox.style.display = "none";
                btnOk.onclick = null;
                window.removeEventListener("wheel", stopWheel);
            }
            else
            {
                e.preventDefault();
            }
            
        };

        let btnClose = document.getElementById("btn-close-login");
        btnClose.onclick = e =>
        {
            inputBox.style.display = "none";
            window.removeEventListener("wheel", stopWheel);
            btnClose.onclick = null;
        }
        
    }
}

// setTimeout(SetPasscode, 3000);

function SetCheckPasscode()
{
    Array.from(document.getElementsByClassName("login-required")).forEach(element =>
    {
        element.addEventListener("show.bs.dropdown", eventDropdown => 
        {
            // document.getElementById("input-prompt").innerHTML = "Enter your passcode:";
            // let inputBox = document.getElementById("input-box");
            // inputBox.style.display = "flex";

            // let btnOk = document.getElementById("btn-ok-input");
            // btnOk.onclick = e =>
            // {
            //     let passcode = document.getElementById("input-data").value;
            //     if (passcode == GetCookie("passcode"))
            //     {
                    
            //     }
            //     else
            //     {
            //         eventDropdown.stopPropagation();
            //         eventDropdown.preventDefault();
            //     }

            //     inputBox.style.display = "none";
            //     btnOk.onclick = null;

            // };

            let passcode = prompt("Enter your password:");
            if (passcode != "" && passcode == GetCookie("password"))
            {
                return;
            }
            else
            {
                eventDropdown.stopPropagation();
                eventDropdown.preventDefault();
            }
            
        });
    });
}

setTimeout(SetCheckPasscode, 3000);

function CheckLogin()
{
    if (CheckCookie("username") == false)
    {
        let loginBox = document.getElementById("login-box");
        loginBox.style.display = "flex";
        let stopWheel = e => e.preventDefault();
        window.addEventListener("wheel", stopWheel, { passive:false });

        let btnLogin = document.getElementById("btn-login");
        btnLogin.onclick = e =>
        {
            let username = document.getElementById("login-username").value;
            let password = document.getElementById("login-password").value;
            if (username == "" || password == "")
            {
                console.log("Tên đăng nhập hoặc mật khẩu không hợp lệ!");
                e.preventDefault();
                return;
            }
            else
            {
                AccountLogin({ username: `${username}`, password: `${password}` });
                loginBox.style.display = "none";
                window.removeEventListener("wheel", stopWheel);
            }
            
        };

        document.getElementById("btn-register").addEventListener("click", e =>
        {
            document.getElementById("login-status").innerText = "";

            let username = document.getElementById("login-username").value;
            let password = document.getElementById("login-password").value;
        
            if (username == "" || password == "")
            {
                console.log("Tên đăng nhập hoặc mật khẩu không hợp lệ!");
                document.getElementById("login-status").innerText = "Tên đăng nhập hoặc mật khẩu không hợp lệ!";
                e.preventDefault();
                return;
            }
            else
            {
                AccountAdd({username: `${username}`, password: `${password}`});
            }
            
        
        });
        

        let btnClose = document.getElementById("btn-close-login");
        btnClose.onclick = e =>
        {
            loginBox.style.display = "none";
            window.removeEventListener("wheel", stopWheel);
        }
        
    }
}

setTimeout(CheckLogin, 3000);









