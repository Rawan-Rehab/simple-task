document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var elementsInput = document.querySelector('input[name="elements"]');
    var textsInput = document.querySelector('input[name="texts"]');
    var typeSelect = document.querySelector('select[name="type"]');
    var resultsDiv = document.querySelector('.results');

    var numElements = parseInt(elementsInput.value);
    var elementText = textsInput.value;
    var elementType = typeSelect.value;

    
    resultsDiv.innerHTML = '';

    
    for (var i = 1; i <= numElements; i++) {
      var newElement = document.createElement(elementType);
      newElement.classList.add('box');
      newElement.title = 'Element';
      newElement.id = 'id-' + i;
      newElement.textContent = elementText;
      resultsDiv.appendChild(newElement);
    }
  });