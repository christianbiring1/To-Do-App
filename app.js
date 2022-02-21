const container = document.querySelector('.activities');
const formElement = document.forms['manipulate-item'];
formElement.addEventListener('submit', e =>{
    e.preventDefault();
    
})
     /* Add item on the list */
const link = formElement.querySelector('.submit');
link.addEventListener('click', e => {

        // Grab typed item.
        const item = formElement.querySelector('input[type="text"]').value;
        console.log(item);

            //  create Element
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const span = document.createElement('span');

    //  Append element
    container.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(span);

    // ADD content
    span.textContent = item;
    
})











