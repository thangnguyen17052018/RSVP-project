document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#registrar');
    const input = form.querySelector('input');
    const ul = document.getElementById('invitedList');
    
    const mainDiv = document.querySelector('.main');
    const div = document.createElement('div');
    const filterLabel = document.createElement('label');
    const filterCheckbox = document.createElement('input');
    
    // filterCheckbox.addEventListener('change', (e) => {
    //     const isChecked = e.target.checked;
    //     const lis = ul.children;
    //     if (isChecked){
    //         for (let i = 0; i < lis.length; i++){
    //             let li = lis[i];
    //             if (li.className === 'responded'){
    //                 li.style.display = '';
    //             } else {
    //                 li.style.display = 'none';
    //             }
    //         }
    //     } else {
    //         for (let i = 0; i < lis.length; i++){
    //             let li = lis[i];
    //             li.style.display = '';
                
    //         }
    //     }
    // });
    
    filterLabel.textContent = "Hide those who haven't responded";
    filterCheckbox.type = 'checkbox';
    div.appendChild(filterLabel);
    div.appendChild(filterCheckbox);
    mainDiv.insertBefore(div, ul);
    
    function createLI(text){
        function createElement(elementName, property, value) {
            const element = document.createElement(elementName);
            element[property] = value;       
        return element; 
        }

        function appendToLi(elementName, property, value){
            const element = createElement(elementName, property, value);
            li.appendChild(element);
        return element;
        }

        const li = document.createElement('li');
        
        // const sp = document.createElement('span');
        // sp.textContent = text;
      //=> const span = createElement('span', 'textContent', text);
        // li.appendChild(span);
        appendToLi('span', 'textContent', text);


        // const label = document.createElement('label');
        // label.textContent = 'Confirmed';


        
        //appendToLi('input', 'type', 'checkbox');
        //const label = createElement('label', 'textContent', 'Confirmed');
        //li.appendChild(label);
        appendToLi('label', 'textContent', 'Confirmed').appendChild(createElement('input', 'type', 'checkbox'));

        // const checkbox = document.createElement('input');
        // checkbox.type = 'checkbox';
        // //const checkbox = createElement('input', 'type', 'checkbox');
        // label.appendChild(checkbox);

        // const editButton = document.createElement('button');
        // editButton.textContent = 'edit';
        // const editButton = createElement('button', 'textContent', 'edit');
        // li.appendChild(editButton);
        appendToLi('button', 'textContent', 'edit');
        // const removeButton = document.createElement('button');
        // removeButton.textContent = 'remove';
        // const removeButton = createElement('button', 'textContent', 'remove');
        // li.appendChild(removeButton);
        appendToLi('button', 'textContent', 'remove');
    return li;
}

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = input.value;
        input.value = '';
        const li = createLI(text);
        ul.appendChild(li);    
    });

    ul.addEventListener('change', (e) => {
        const checkbox = e.target;
        const checked = checkbox.checked;
        const listItem = checkbox.parentNode.parentNode;
        
        if (checked){
            listItem.className = 'responded';
        } else {
            listItem.className = '';
        }
    });

    ul.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const button = e.target;
            const li = button.parentNode;
            const ul = li.parentNode;
            const action = button.textContent;
            const nameActions = {
                remove: () => {
                    ul.removeChild(li);
                },
                edit: () => {
                    const input = document.createElement('input');
                    input.type = 'text';
                    const span = li.firstElementChild;
                    input.value = span.textContent;
                    li.insertBefore(input, span);
                    li.removeChild(span);
                    button.textContent = 'save';
                },
                save: () => {
                    const input = li.firstElementChild;
                    const span = document.createElement('span');
                    li.insertBefore(span, input);
                    span.textContent = input.value;
                    li.removeChild(input);
                    button.textContent = 'edit';
                }
            };
            // if (action === 'remove'){
            //     nameActions.remove();
            // } else if (action === 'edit'){
            //     nameActions.edit();
            // } else if (action === 'save'){
            //     nameActions.save();
            // }
            //=> Replace by this code
            //select and run button in button's name
            nameActions[action]();
        }
        
    });
});