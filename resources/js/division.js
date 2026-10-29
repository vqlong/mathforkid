function CreateTestDivision(event)
{
    let div_test = document.querySelector(".test-division");
    div_test.innerHTML = "";
    let limit_a = GetLimit();
    let limit_b = 10;
    let quantity = GetQuantity();
    for (let i = 0; i < quantity; i++)
    {

        let a = Math.floor(Math.random() * (limit_a + 1));
        let b = Math.floor(Math.random() * (limit_b + 1));
        if (b == 0) b = 1;
        let c = a * b;

        let question = document.createElement("label");
        question.innerText = `${c} : ${b} = `;

        let answer = document.createElement("input");
        answer.setAttribute("type", "number");
        answer.setAttribute("min", "0");
        answer.setAttribute("max", `${limit_a}`);
        answer.setAttribute("placeholder", "?");
        answer.setAttribute("required", "");
        answer.style.width = "40px";
        answer.classList = "form-control d-inline-block ms-1 p-1 text-success text-center answer-box";

        let form_division = document.createElement("form");
        form_division.dataset.ans = `${a}`;
        form_division.style.width = "140px";
        form_division.classList = "d-flex justify-content-end align-items-center d-inline-block mx-2 my-3 p-1 was-validatedz bg-info1";
        form_division.appendChild(question);
        form_division.appendChild(answer);

        div_test.appendChild(form_division);
    }
}
function CreateTestDivision2(event)
{
    let div_test = document.querySelector(".test-division-2");
    div_test.innerHTML = "";
    let limit_a = GetLimit();
    let limit_b = 10;
    let quantity = GetQuantity();
    for (let i = 0; i < quantity; i++)
    {
        let a = Math.floor(Math.random() * (limit_a + 1));
        let b = Math.floor(Math.random() * (limit_b + 1));
        if (b == 0) b = 1;
        let c = a * b;

        let question = document.createElement("label");
        question.innerText = `: ${b} = ${a}`;

        let answer = document.createElement("input");
        answer.setAttribute("type", "number");
        answer.setAttribute("min", "0");
        answer.setAttribute("max", `${limit_a * limit_b}`);
        answer.setAttribute("placeholder", "?");
        answer.setAttribute("required", "");
        answer.style.width = "45px";
        answer.classList = "form-control d-inline-block me-1 p-1 text-success text-center answer-box";

        let form_division = document.createElement("form");
        form_division.dataset.ans = `${c}`;
        form_division.style.width = "135px";
        form_division.classList = "d-flex justify-content-start align-items-center d-inline-block mx-2 my-3 p-1 was-validatedz bg-info1";
        form_division.appendChild(answer);
        form_division.appendChild(question);

        div_test.appendChild(form_division);
    }
}
function CreateTestDivision3(event)
{
    let div_test = document.querySelector(".test-division-3");
    div_test.innerHTML = "";
    let limit_a = GetLimit();
    let limit_b = 10;
    let quantity = GetQuantity();
    for (let i = 0; i < quantity; i++)
    {
        let a = Math.floor(Math.random() * (limit_a + 1));
        let b = Math.floor(Math.random() * (limit_b + 1));
        if (a == 0) a = 1;
        if (b == 0) b = 1;
        let c = a * b;

        let dividend = document.createElement("label");
        dividend.innerText = `${c} :`;
        let quotient = document.createElement('label');
        quotient.innerText = `= ${b}`;

        let answer = document.createElement("input");
        answer.setAttribute("type", "number");
        answer.setAttribute("min", "0");
        answer.setAttribute("max", `${limit_a}`);
        answer.setAttribute("placeholder", "?");
        answer.setAttribute("required", "");
        answer.style.width = "40px";
        answer.classList = "form-control d-inline-block mx-1 p-1 text-success text-center answer-box";

        let form_division = document.createElement("form");
        form_division.dataset.ans = `${a}`;
        form_division.style.width = "143px";
        form_division.classList = "d-flex justify-content-center align-items-center d-inline-block mx-2 my-3 p-1 was-validatedz bg-info1";
        form_division.appendChild(dividend);
        form_division.appendChild(answer);
        form_division.appendChild(quotient);

        div_test.appendChild(form_division);
    }
}

function CheckTestDivision(event)
{
    let div_test = document.querySelector(".test-division");
    let point = CheckTest(div_test, "phép chia. ");
    let quantity = GetQuantity();
    let limit = GetLimit();
    if (point < quantity && limit != 1000) CreateTestDivision(null);
}
function CheckTestDivision2(event)
{
    let div_test = document.querySelector(".test-division-2");
    let point = CheckTest(div_test, "tìm số bị chia. ");
    let quantity = GetQuantity();
    let limit = GetLimit();
    if (point < quantity && limit != 1000) CreateTestDivision2(null);
}
function CheckTestDivision3(event)
{
    let div_test = document.querySelector(".test-division-3");
    let point = CheckTest(div_test, "tìm số chia. ");
    let quantity = GetQuantity();
    let limit = GetLimit();
    if (point < quantity && limit != 1000) CreateTestDivision3(null);
}
