function CreateTestAddition(event)
{
    let div_test = document.querySelector(".test-addition");
    div_test.innerHTML = "";
    let limit = GetLimit();
    let quantity = GetQuantity();
    for (let i = 0; i < quantity; i++)
    {

        let a = Math.floor(Math.random() * (limit + 1));
        let b = Math.floor(Math.random() * (limit - a + 1));

        let ckb_carry = document.querySelector("#ckb-carry");
        if (ckb_carry == null || ckb_carry.checked != true)
        {
            while ((a % 10) + (b % 10) > 9)
            {
                b--;
            }
        }

        let question = document.createElement("label");
        question.innerText = `${a} + ${b} = `;

        let answer = document.createElement("input");
        answer.setAttribute("type", "number");
        answer.setAttribute("min", "0");
        answer.setAttribute("max", `${limit}`);
        answer.setAttribute("placeholder", "?");
        answer.setAttribute("required", "");
        answer.style.width = "40px";
        answer.classList = "form-control d-inline-block ms-1 p-1 text-success text-center answer-box";

        let form_addition = document.createElement("form");
        form_addition.dataset.ans = `${a + b}`;
        form_addition.style.width = "145px";
        form_addition.classList = "d-flex justify-content-end align-items-center d-inline-block mx-1 my-3 p-1 was-validatedz bg-infoz";
        form_addition.appendChild(question);
        form_addition.appendChild(answer);

        div_test.appendChild(form_addition);
    }
}
function CreateTestAddition3Terms(event)
{
    let div_test = document.querySelector(".test-addition-3");
    div_test.innerHTML = "";
    let limit = GetLimit();
    let quantity = GetQuantity();
    for (let i = 0; i < quantity; i++)
    {

        let a = Math.floor(Math.random() * (limit + 1));
        let b = Math.floor(Math.random() * (limit - a + 1));
        let c = Math.floor(Math.random() * (limit - a - b + 1));

        let ckb_carry = document.querySelector("#ckb-carry");
        if (ckb_carry == null || ckb_carry.checked != true)
        {
            let a_flag = true, b_flag = true, c_flag = false;
            while ((a % 10) + (b % 10) + (c % 10) > 9)
            {
                if (a_flag && a > 0)
                {
                    a--;
                    a_flag = false;
                }
                else if (b_flag && b > 0)
                {
                    b--;
                    b_flag = false;
                }
                else
                {
                    if (c > 0) c--;
                    a_flag = true;
                    b_flag = true;
                }
            }
        }

        let question = document.createElement("label");
        question.innerText = `${a} + ${b} + ${c} = `;

        let answer = document.createElement("input");
        answer.setAttribute("type", "number");
        answer.setAttribute("min", "0");
        answer.setAttribute("max", `${limit}`);
        answer.setAttribute("placeholder", "?");
        answer.setAttribute("required", "");
        answer.style.width = "40px";
        answer.classList = "form-control d-inline-block ms-1 p-1 text-success text-center answer-box";

        let form_addition = document.createElement("form");
        form_addition.dataset.ans = `${a + b + c}`;
        form_addition.style.width = "190px";
        form_addition.classList = "d-flex justify-content-end align-items-center d-inline-block m-3 p-1 was-validatedz bg-infoz";
        form_addition.appendChild(question);
        form_addition.appendChild(answer);

        div_test.appendChild(form_addition);
    }
}
function CreateTestAddition2(event)
{
    let div_test = document.querySelector(".test-addition-2");
    div_test.innerHTML = "";
    let limit = GetLimit();
    let quantity = GetQuantity();
    for (let i = 0; i < quantity; i++)
    {

        let a = Math.floor(Math.random() * (limit + 1));
        let b = Math.floor(Math.random() * (limit - a + 1));
        let c = a + b;

        let ckb_carry = document.querySelector("#ckb-carry");
        if (ckb_carry == null || ckb_carry.checked != true)
        {
            while ((c % 10) - (b % 10) < 0)
            {
                b--;
                a++;
            }
        }

        let addend = document.createElement("label");
        addend.innerText = `+ ${b} = ${c}`;

        let answer = document.createElement("input");
        answer.setAttribute("type", "number");
        answer.setAttribute("min", "0");
        answer.setAttribute("max", `${limit}`);
        answer.setAttribute("placeholder", "?");
        answer.setAttribute("required", "");
        answer.style.width = "40px";
        answer.classList = "form-control d-inline-block me-1 p-1 text-success text-center answer-box";

        let form_addition = document.createElement("form");
        form_addition.dataset.ans = `${a}`;
        form_addition.style.width = "146px";
        form_addition.classList = "d-flex justify-content-start align-items-center d-inline-block mx-1 my-3 p-1 was-validatedz bg-infoz";
        form_addition.appendChild(answer);
        form_addition.appendChild(addend);

        div_test.appendChild(form_addition);
    }
}

function CheckTestAddition(event)
{
    let div_test = document.querySelector(".test-addition");
    CheckTest(div_test, "phép cộng. ");
}
function CheckTestAddition3Terms(event)
{
    let div_test = document.querySelector(".test-addition-3");
    CheckTest(div_test, "phép cộng 3 số. ");
}
function CheckTestAddition2(event)
{
    let div_test = document.querySelector(".test-addition-2");
    CheckTest(div_test, "tìm số hạng. ");
}


