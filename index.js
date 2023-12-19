function option(boxId){
    const options = document.getElementById(`${boxId}Options`);
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
}
   
function expandBox(e){
    e.classList.toggle('expanded')
}
 

