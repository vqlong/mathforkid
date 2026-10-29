function CreateTestMultiplication3(event)
{
    let div_test = document.querySelector(".test-multiplication");
    div_test.innerHTML = "";
    let limit_a = 9999;

    let limit = GetLimit();
    if (limit == 100) limit_a = 999;
    if (limit == 20) limit_a = 99;

    let quantity = GetQuantity();
    for (let i = 0; i < quantity; i++)
    {

        let a = Math.floor(Math.random() * (limit_a + 1));
        if (a < 10) a += 10;

        let b = Math.floor(Math.random() * (limit_a + 1));
        if (b < 10) b += 10;
        if (b > 999) b = Math.floor(b / 10);

        if (a < b)
        {
            let temp = a;
            a = b;
            b = temp;
        }


        let form_multiplication = document.createElement("form");
        form_multiplication.dataset.ans = `${a * b}`;
        form_multiplication.style.width = "155px";
        form_multiplication.style.fontSize = "2rem";
        form_multiplication.classList = "d-flex flex-column align-items-end mx-2 my-3 p-3";
        let line3 = `<div class="d-flex">
                            <input type="number" placeholder="?" class="flex-fill text-success text-end border-0 my-1 p-0">
                            <span class="text-transparent">0</span>
                            <span class="text-transparent">0</span>
                        </div>`;
        if (b < 100) line3 = "";
        form_multiplication.innerHTML = `<span>${a}</span>
                        <span class="multiplication-sign align-self-start">x</span>
                        <span>${b}</span>
                        <span class="d-block border-bottom border-success w-100 text-success"></span>
                        <div class="d-flex">
                            <input type="number" placeholder="?" class="flex-fill text-success text-end border-0 my-1 p-0">
                            <span class="text-transparent"></span>
                        </div>
                        <div class="d-flex">
                            <input type="number" placeholder="?" class="flex-fill text-success text-end border-0 my-1 p-0">
                            <span class="text-transparent">0</span>
                        </div>
                        ${line3}
                        <span class="d-block border-bottom border-success w-100 text-success"></span>
                        <input type="number" placeholder="?" class="answer-box text-success text-end border-0 my-1 p-0">
                    `;

        div_test.appendChild(form_multiplication);
    }
}

function CheckTestMultiplication3(event)
{
    let div_test = document.querySelector(".test-multiplication");
    CheckTest(div_test, "phép nhân. ");
}

