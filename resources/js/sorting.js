if (navigator.maxTouchPoints != 0)
{
    document.querySelector(".form-check.form-switch").style.display = 'none';
    let btn = document.querySelector(".btn-speak");
    btn.classList.remove("btn-speak");
    btn.setAttribute("width", "150px");
    btn.setAttribute("height", "150px");

}

function CreateTestSorting(event)
{
    let div_test = document.querySelector(".test-sorting.sorting-less");
    div_test.innerHTML = "";
    CreateTestSortingBySign(div_test);

    let div_test2 = document.querySelector(".test-sorting.sorting-greater");
    div_test2.innerHTML = "";
    CreateTestSortingBySign(div_test2, false);
}
function CreateTestSortingBySign(div_test, isless = true)
{

    let limit = GetLimit();
    let quantity = GetQuantity() / 2;
    for (let i = 0; i < quantity; i++)
    {

        let a = Math.floor(Math.random() * (limit + 1));
        let b = Math.floor(Math.random() * (limit + 1));
        let c = Math.floor(Math.random() * (limit + 1));
        let d = Math.floor(Math.random() * (limit + 1));
        let e = Math.floor(Math.random() * (limit + 1));

        let question = document.createElement("label");
        question.innerText = `${a}, ${b}, ${c}, ${d}, ${e}`;

        let form_sorting = document.createElement("form");
        let sequence = [a, b, c, d, e];
        if (isless) sequence.sort((a, b) => a - b);
        else sequence.sort((a, b) => b - a);
        form_sorting.dataset.ans = `${sequence[0]} ${sequence[1]} ${sequence[2]} ${sequence[3]} ${sequence[4]}`;
        //form_sorting.style.width = "320px";
        form_sorting.classList = "d-flex flex-column justify-content-center align-items-center d-inline-block p-1 bg-warningz";
        form_sorting.appendChild(question);

        let div_answer = document.createElement("div");
        for (let i = 0; i < 5; i++)
        {
            let box = document.createElement("input");
            box.setAttribute("type", "number");
            box.setAttribute("min", "0");
            box.setAttribute("max", `${limit}`);
            box.setAttribute("placeholder", "?");

            box.style.width = "40px";
            box.classList = "form-control d-inline-block p-1 text-success text-center sorting-box";
            div_answer.appendChild(box);
            if (i < 4)
            {
                let sign = document.createElement("span");
                if (isless) sign.innerText = "≤";
                else sign.innerText = "≥";
                sign.classList = "mx-2";
                div_answer.appendChild(sign);
            }
        }
        form_sorting.appendChild(div_answer);

        div_test.appendChild(form_sorting);
    }
}
function CheckTestSorting(event)
{
    let point = 0;
    let div_sorting_less = document.querySelector(".test-sorting.sorting-less");
    let forms_less = div_sorting_less.children;
    for (let f of forms_less)
    {
        if (f.nodeName == "FORM")
        {
            let array_answer = [];
            for (let box of f.querySelectorAll(".sorting-box")) array_answer.push(box.value);
            let answer = `${array_answer[0]} ${array_answer[1]} ${array_answer[2]} ${array_answer[3]} ${array_answer[4]}`;
            if (answer == f.dataset.ans)
            {
                point++;
                f.classList.remove("border", "border-danger", "rounded-3");
            }
            else
            {
                f.classList.add("border", "border-danger", "rounded-3");
            }
        }
    }

    let div_sorting_greater = document.querySelector(".test-sorting.sorting-greater");
    let forms_greater = div_sorting_greater.children;
    for (let f of forms_greater)
    {
        if (f.nodeName == "FORM")
        {
            let array_answer = [];
            for (let box of f.querySelectorAll(".sorting-box")) array_answer.push(box.value);
            let answer = `${array_answer[0]} ${array_answer[1]} ${array_answer[2]} ${array_answer[3]} ${array_answer[4]}`;
            if (answer == f.dataset.ans)
            {
                point++;
                f.classList.remove("border", "border-danger", "rounded-3");
            }
            else
            {
                f.classList.add("border", "border-danger", "rounded-3");
            }
        }
    }

    document.getElementById("message-box-body").innerText = point + " điểm.";

    SpeakByBrowser("sắp xếp. " + point + " điểm");
}

function SelectTable(event)
{
    document.querySelector(".btn-select-table.active").classList.remove("active");
    event.target.classList.add("active");
    CreateTable(event.target.innerText);
}
function CreateTable(name)
{
    let header = document.getElementById("table1-header");
    if (name == "+") header.innerText = "Bảng cộng";
    else if (name == "x") header.innerText = "Bảng nhân";
    let table = document.getElementById("table1");
    table.innerHTML = "";
    for (let i = 1; i < 10; i++)
    {
        let div = document.createElement("div");
        for (let j = 1; j < 11; j++)
        {
            let p = document.createElement("p");
            let text = `${i} + ${j} = ${j + i}`;
            if (name == "x") text = `${i} x ${j} = ${j * i}`;
            p.innerText = text;
            p.style.cursor = "pointer";
            p.className = "my-2 px-3 py-1";
            p.addEventListener("mousedown", e =>
            {
                SpeakByBrowser(text);

            });
            div.appendChild(p);
        }

        div.className = "d-inline-block m-2 border border-success rounded-4 text-success";
        table.appendChild(div);
    }

}

function Up()
{
    let cnt = document.getElementById("counter-display");
    let text = cnt.innerText;
    let num = parseInt(text);
    if (num != NaN) num++;
    cnt.innerText = num;
    SpeakCounter();
}
function Down()
{
    let cnt = document.getElementById("counter-display");
    let text = cnt.innerText;
    let num = parseInt(text);
    if (num != NaN) num--;
    cnt.innerText = num;
    SpeakCounter();
}
// window.addEventListener("keydown", e =>
// {
//     if (e.key == "ArrowUp")
//     {
//         e.preventDefault();
//         Up();
//     }

//     if (e.key == "ArrowDown")
//     {
//         e.preventDefault();
//         Down();
//     }
// });

function SpeakCounter()
{
    let text = document.getElementById("counter-display").innerText;
    SpeakByBrowser(text);
}
