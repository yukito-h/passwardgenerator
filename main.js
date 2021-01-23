const pwcontainer = document.getElementById('pwEl')
const pwLength = document.getElementById('len');
const pwUpper = document.getElementById('upper');
const pwlower = document.getElementById('lower');
const pwNum = document.getElementById('num');
const pwSym = document.getElementById('sym');

const btn = document.getElementById('btn');

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWZ";
const lowercase = "abcdefghijklmnopqrstuvwz";
const number = "1234567890";
const symbol = "!#$%&=~"

function getUppercase() {
  return uppercase[Math.floor(Math.random()*uppercase.length)];
}
function getLowercase() {
  return lowercase[Math.floor(Math.random()*lowercase.length)];
}
function getNumber() {
  return number[Math.floor(Math.random()*number.length)];
}
function getSymbol() {
  return symbol[Math.floor(Math.random()*symbol.length)];
}


function generatePass() {
  const len = pwLength.value;

  let password ="";
  
  if(pwUpper.checked) {
    password += getUppercase();
  }
  if(pwlower.checked) {
    password += getLowercase();
  }
  if(pwNum.checked) {
    password += getNumber();
  }
  if(pwSym.checked) {
    password += getSymbol();
  }

  for(let i = password.length ; i < len ; i++) {
    const x = generateX();
    password += x;
  }

  pwcontainer.innerText =password;
}

function generateX() {
  const xs=[];
  if (pwUpper.checked) {
    xs.push(getUppercase());
}

if (pwlower.checked) {
    xs.push(getLowercase());
}

if (pwNum.checked) {
    xs.push(getNumber());
}

if (pwSym.checked) {
    xs.push(getSymbol());
}

if (xs.length === 0) return "";

return xs[Math.floor(Math.random() * xs.length)];
}

btn.addEventListener("click", generatePass);
