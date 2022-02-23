const container = document.querySelector('.activities ul');
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
    const li = document.createElement('li');
    const span = document.createElement('span');
    const cancel = document.createElement('span'); 
    const status = document.createElement('span');

    //  Append element
    container.appendChild(li);
    li.appendChild(span);
    li.appendChild(cancel);
    li.appendChild(status);

    // ADD content
    span.textContent = item;
    cancel.textContent = 'x';
    status.textContent = 'Done';

    // Add  classes
    cancel.classList.add('cancel')
    status.classList.add('status');
    
    // Remove item on the list
    const rmv = document.querySelectorAll('.cancel');
    rmv.forEach(btn => {
        btn.addEventListener('click', e => {
        const par = e.target.parentElement; 
        if(confirm('Are you sure you want to delete this item')){
        par.parentNode.removeChild(par);
        }
    })
})

// complete the does 

const ok = document.querySelectorAll('.status')
   ok.forEach(item => {
       item.addEventListener('click', e =>{
           e.target.style.backgroundColor = 'lightgreen';
       })
   })
    console.log(ok);
})











