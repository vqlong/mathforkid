function CreateTestMultiplication(event)
{
    let div_test = document.querySelector(".test-multiplication");
    div_test.innerHTML = "";
    let limit_a = GetLimit();
    let limit_b = 10;

    let quantity = GetQuantity();
    for (let i = 0; i < quantity; i++)
    {

        let a = Math.floor(Math.random() * (limit_a + 1));
        let b = Math.floor(Math.random() * (limit_b + 1));

        let question = document.createElement("label");
        question.innerText = `${a} x ${b} = `;

        let answer = document.createElement("input");
        answer.setAttribute("type", "number");
        answer.setAttribute("min", "0");
        answer.setAttribute("max", `${limit_a * limit_b}`);
        answer.setAttribute("placeholder", "?");
        answer.setAttribute("required", "");
        answer.style.width = "45px";
        answer.classList = "form-control d-inline-block ms-1 p-1 text-success text-center answer-box bg-warningz";

        let form_multiplication = document.createElement("form");
        form_multiplication.dataset.ans = `${a * b}`;
        form_multiplication.style.width = "135px";
        form_multiplication.classList = "d-flex justify-content-end align-items-center d-inline-block mx-2 my-3 p-1 was-validatedz bg-infoz";
        form_multiplication.appendChild(question);
        form_multiplication.appendChild(answer);

        div_test.appendChild(form_multiplication);
    }
}
function CreateTestMultiplication2(event)
{
    let div_test = document.querySelector(".test-multiplication-2");
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

        let label = document.createElement("label");
        label.innerText = `x ${b} = ${c}`;

        let answer = document.createElement("input");
        answer.setAttribute("type", "number");
        answer.setAttribute("min", "0");
        answer.setAttribute("max", `${limit_a}`);
        answer.setAttribute("placeholder", "?");
        answer.setAttribute("required", "");
        answer.style.width = "36px";
        answer.classList = "form-control d-inline-block me-1 p-1 text-success text-center answer-box";

        let form_multiplication = document.createElement("form");
        form_multiplication.dataset.ans = `${a}`;
        form_multiplication.style.width = "135px";
        form_multiplication.classList = "d-flex justify-content-start align-items-center d-inline-block mx-2 my-3 p-1 was-validatedz bg-infoz";
        form_multiplication.appendChild(answer);
        form_multiplication.appendChild(label);

        div_test.appendChild(form_multiplication);
    }
}

function CheckTestMultiplication(event)
{
    let div_test = document.querySelector(".test-multiplication");
    CheckTest(div_test, "phép nhân. ");
}
function CheckTestMultiplication2(event)
{
    let div_test = document.querySelector(".test-multiplication-2");
    let point = CheckTest(div_test, "tìm thừa số. ");
    let quantity = GetQuantity();
    let limit = GetLimit();
    if (point < quantity && limit != 1000) CreateTestMultiplication2(null);
}

