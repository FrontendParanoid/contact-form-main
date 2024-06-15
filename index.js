//SITE STYLING
const checkbox1 = document.getElementById("general-enquiry");
const box1 = document.getElementById("general-enquiry-box");
const checkbox2 = document.getElementById("support-request");
const box2 = document.getElementById("support-request-box");
const TOS = document.getElementById("msg");
const TOStext = document.getElementById("msgL");

const MyAnimation = () => {
    let element = document.createElement("div");
    element.style.position = "absolute";
    element.style.top = "2px";
    element.style.left = "50%";
    element.style.transform = "translate(-50%)";
    element.style.width = "30%";
    element.style.height = "15%";
    element.style.backgroundColor = "hsl(187, 24%, 22%)";
    element.style.color = "white";
    element.style.borderRadius = "10px";
    element.style.padding = "10px";

    let text = document.createElement("p");
    text.textContent = "Message Sent!";
    text.style.display = "inline";
    text.style.marginRight = "10px"; 

    let image = document.createElement("img");
    image.setAttribute("src", "./assets/images/icon-success-check.svg");
    image.style.marginLeft = "20px";
    image.style.marginTop = "auto";
    image.style.marginBottom = "auto";
    image.style.display = "flex";
    image.style.marginRight = "10px";

    let small = document.createElement("small");
    small.textContent = "Thanks for completing the form. We'll be in touch soon!";
    small.style.display = "block"; 
    small.style.paddingTop = "10px"; 


    let div = document.createElement("div");
    div.append(image);
    div.append(text);
    div.style.display = "flex";
    div.style.alignItems = "center";

    element.appendChild(div);
    element.appendChild(small);

    document.body.appendChild(element);
};

const Checkbox1BGcolor = function()
{
    if(checkbox1.checked)
        {
            box1.style.backgroundColor = "hsl(148, 38%, 91%)";
            box2.style.backgroundColor = "hsl(0, 0%, 100%)";
        }
}

const Checkbox2BGcolor = function()
{
    if(checkbox2.checked)
        {
            box2.style.backgroundColor = "hsl(148, 38%, 91%)";
            box1.style.backgroundColor = "hsl(0, 0%, 100%)";
        }
}

checkbox1.addEventListener("change", Checkbox1BGcolor);

checkbox2.addEventListener("change", Checkbox2BGcolor);

box1.addEventListener("click", () =>
{
    checkbox1.checked = true;
    Checkbox1BGcolor();
});
box2.addEventListener("click", () =>
{
    checkbox2.checked = true;
    Checkbox2BGcolor();
});

TOStext.addEventListener("click", () =>
{
    if (TOS.checked)
    {
        TOS.checked = false;
    }
    else
    {
        TOS.checked = true;
    }
});

//SITE FORM VALIDATION

const form = document.getElementsByTagName("form")[0];
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const query = document.getElementsByClassName("query-type")[0];
const message = document.getElementById("messageText");
var text = "This field is required";

function IsValidEmail(email) 
{
    const emailRegex =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return !emailRegex.test(email);
}

function ClearMsg(element, id)
{
    let error = document.getElementById(id);
    if (error)
    {
        error.style.display = 'none';
        error.remove();
        element.style.border = "1px solid rgb(84, 84, 84)";
    }
}

function ValidateForm()
{
    let msg;
    let condition = true;

    ClearMsg(firstName, "errorfname");
    ClearMsg(lastName, "errorlname");
    ClearMsg(email, "erroremail");
    ClearMsg(box1, "errorquery");
    ClearMsg(message, "errormessage");
    ClearMsg(TOS, "errorTOS");

    if (firstName.value.trim() === "")
    {
        firstName.style.outline = "none";
        firstName.style.border = "1px solid red";

        msg = document.createElement("span");
        msg.textContent = text;
        msg.setAttribute("id", "errorfname")
        msg.style.color = "red";

        document.getElementById("fname").append(msg);
        condition = false;
    }
    if (lastName.value.trim() === "")
    {
        lastName.style.outline = "none";
        lastName.style.border = "1px solid red";

        msg = document.createElement("span");
        msg.textContent = text;
        msg.setAttribute("id", "errorlname")
        msg.style.color = "red";

        document.getElementById("lname").append(msg);
        condition = false;
    }

    if (email.value.trim() === ""
        || IsValidEmail(email.value))
    {
        email.style.outline = "none";
        email.style.border = "1px solid red";

        msg = document.createElement("span");
        msg.setAttribute("id","erroremail");
        msg.textContent = "Please enter a valid email address";
        msg.style.color = "red";

        document.getElementById("emailC").append(msg);
        condition = false;
    }
    
    if (!checkbox1.checked && !checkbox2.checked) 
    {
        msg = document.createElement("span");
        msg.setAttribute("id","errorquery");
        msg.textContent = "Please select a query type";
        msg.style.color = "red";

        query.append(msg);
        condition = false;
    }

    if (message.value.trim() === "")
    {
        message.style.outline = "none";
        message.style.border = "1px solid red";

        msg = document.createElement("span");
        msg.setAttribute("id","errormessage");
        msg.textContent = "This field is required";
        msg.style.color = "red";

        document.getElementsByClassName("message")[0].append(msg);
        condition = false;
    }
    
    if (!TOS.checked)
    {
        msg = document.createElement("p");
        msg.setAttribute("id","errorTOS");
        msg.textContent = "To submit this form, please consent to being contacted ";
        msg.style.color = "red";

        document.getElementsByClassName("TOS consent")[0].append(msg);
        condition = false;
    }

    return condition;
}

form.addEventListener("submit", (event) => 
{
    event.preventDefault();
    if (ValidateForm())
    {
        MyAnimation();
        setTimeout(() =>
        {
            form.submit();
        }, 3000);
    }
});

