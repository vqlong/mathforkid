function CreateTestSubtraction(event)
{
    let div_test = document.querySelector(".test-subtraction");
    div_test.innerHTML = "";
    let limit = GetLimit();
    let quantity = GetQuantity();
    for (let i = 0; i < quantity; i++)
    {

        let a = Math.floor(Math.random() * (limit + 1));
        let b = Math.floor(Math.random() * (limit + 1));
        if (a < b)
        {
            let temp = a;
            a = b;
            b = temp;
        }

        let ckb_carry = document.querySelector("#ckb-carry");
        if (ckb_carry == null || ckb_carry.checked != true)
        {
            while ((a % 10) - (b % 10) < 0)
            {
                b--;
            }
        }

        let question = document.createElement("label");
        question.innerText = `${a} - ${b} = `;

        let answer = document.createElement("input");
        answer.setAttribute("type", "number");
        answer.setAttribute("min", "0");
        answer.setAttribute("max", `${limit}`);
        answer.setAttribute("placeholder", "?");
        answer.setAttribute("required", "");
        answer.style.width = "40px";
        answer.classList = "form-control d-inline-block ms-1 p-1 text-success text-center answer-box";

        let form_subtraction = document.createElement("form");
        form_subtraction.dataset.ans = `${a - b}`;
        form_subtraction.style.width = "140px";
        form_subtraction.classList = "d-flex justify-content-end align-items-center d-inline-block mx-2 my-3 p-1 was-validatedz bg-info1";
        form_subtraction.appendChild(question);
        form_subtraction.appendChild(answer);

        div_test.appendChild(form_subtraction);
    }
}
function CreateTestSubtraction2(event)
{
    let div_test = document.querySelector(".test-subtraction-2");
    div_test.innerHTML = "";
    let limit = GetLimit();
    let quantity = GetQuantity();
    for (let i = 0; i < quantity; i++)
    {
        let a = Math.floor(Math.random() * (limit + 1));
        let b = Math.floor(Math.random() * (limit + 1));
        if (a < b)
        {
            let temp = a;
            a = b;
            b = temp;
        }

        let ckb_carry = document.querySelector("#ckb-carry");
        if (ckb_carry == null || ckb_carry.checked != true)
        {
            while ((a % 10) - (b % 10) < 0)
            {
                b--;
            }
            //alert(b);
        }
        // else{
        //     console.log(`${a}  ${b}` + ckb_carry);
        // }

        let c = a - b;
        let question = document.createElement("label");
        question.innerText = `- ${b} = ${c}`;

        let answer = document.createElement("input");
        answer.setAttribute("type", "number");
        answer.setAttribute("min", "0");
        answer.setAttribute("max", `${limit}`);
        answer.setAttribute("placeholder", "?");
        answer.setAttribute("required", "");
        answer.style.width = "40px";
        answer.classList = "form-control d-inline-block me-1 p-1 text-success text-center answer-box";

        let form_subtraction = document.createElement("form");
        form_subtraction.dataset.ans = `${a}`;
        form_subtraction.style.width = "138px";
        form_subtraction.classList = "d-flex justify-content-start align-items-center d-inline-block mx-2 my-3 p-1 was-validatedz bg-info1";
        form_subtraction.appendChild(answer);
        form_subtraction.appendChild(question);

        div_test.appendChild(form_subtraction);
    }
}
function CreateTestSubtraction3(event)
{
    let div_test = document.querySelector(".test-subtraction-3");
    div_test.innerHTML = "";
    let limit = GetLimit();
    let quantity = GetQuantity();
    for (let i = 0; i < quantity; i++)
    {
        let a = Math.floor(Math.random() * (limit + 1));
        let b = Math.floor(Math.random() * (limit + 1));
        if (a < b)
        {
            let temp = a;
            a = b;
            b = temp;
        }

        let ckb_carry = document.querySelector("#ckb-carry");
        if (ckb_carry == null || ckb_carry.checked != true)
        {
            while ((a % 10) - (b % 10) < 0)
            {
                b--;
            }
        }

        let c = a - b;
        let minuend = document.createElement("label");
        minuend.innerText = `${a} -`;
        let diff = document.createElement('label');
        diff.innerText = `= ${c}`;

        let answer = document.createElement("input");
        answer.setAttribute("type", "number");
        answer.setAttribute("min", "0");
        answer.setAttribute("max", `${limit}`);
        answer.setAttribute("placeholder", "?");
        answer.setAttribute("required", "");
        answer.style.width = "40px";
        answer.classList = "form-control d-inline-block mx-1 p-1 text-success text-center answer-box";

        let form_subtraction = document.createElement("form");
        form_subtraction.dataset.ans = `${b}`;
        form_subtraction.style.width = "141px";
        form_subtraction.classList = "d-flex justify-content-center align-items-center d-inline-block mx-2 my-3 p-1 was-validatedz bg-info1";
        form_subtraction.appendChild(minuend);
        form_subtraction.appendChild(answer);
        form_subtraction.appendChild(diff);

        div_test.appendChild(form_subtraction);
    }
}

function CheckTestSubtraction(event)
{
    let div_test = document.querySelector(".test-subtraction");
    CheckTest(div_test, "phép trừ. ");
}
function CheckTestSubtraction2(event)
{
    let div_test = document.querySelector(".test-subtraction-2");
    CheckTest(div_test, "tìm số bị trừ. ");
}
function CheckTestSubtraction3(event)
{
    let div_test = document.querySelector(".test-subtraction-3");
    CheckTest(div_test, "tìm số trừ. ");
}