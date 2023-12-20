function option(boxId){
    const options = document.getElementById(`${boxId}Options`);
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
}
   
function expandBox(e){
    e.classList.toggle('expanded')
}
 
function addToCart() {
    const selectedOptions = [];
    const boxes = ['box1', 'box2', 'box3'];

    boxes.forEach(boxId => {
      const selectedOption = document.querySelector(`input[name=${boxId}Options]:checked)`);
      if (selectedOption) {
        selectedOptions.push(`${boxId}: ${selectedOption.nextSibling.textContent.trim()}`);
      }
    });

    if (selectedOptions.length > 0) {
        alert(`Added to Cart:\n${selectedOptions.join('\n')}`);
      } else {
        alert('Please select options before adding to cart.');
      }
}

