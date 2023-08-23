let btn = document.getElementById("submit");

btn.addEventListener('click', short);


async function short(){
    let inputLink = document.getElementById("inputLink").value;
    let outputLink = document.getElementById("outputLink");

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputLink}`);
    const data = await result.json();

    outputLink.value = data.result.short_link2;
}

let btn2 = document.getElementById("copy");
btn2.addEventListener('click', copying);

async function copying(){
    outputLink.select();
    window.navigator.clipboard.writeText(outputLink.value);
}