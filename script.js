const text = document.querySelector('#text');

text.addEventListener('input', function() {
  console.log(event.target.value);
})