
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