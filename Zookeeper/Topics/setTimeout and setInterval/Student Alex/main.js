function showName(name) {
  return(`Hello, student ${name}!`);
}

const studentGreeting = setInterval(showName, 3000);
clearInterval(studentGreeting);