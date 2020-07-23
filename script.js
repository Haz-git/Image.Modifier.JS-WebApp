console.log('JS is working...');

const inputs = document.querySelectorAll('.controls input');
//Assigns constant variable inputs for all inputs. Query selector returns a nodelist which is an array-like object, but with less features. It is common to convert this nodelist in an array for more features.

function handleUpdate() {
    //dataset = object that contains all data attributes given to the object. The suffix given to dataset could to arbitrary, in this case it's sizing.

    //we use || '' because the base does not have this data attribute.
    const suffix = this.dataset.sizing || '';

    //Updating and selecting variable:

    //We are doing to select our entire document-- :root. We are going to set a property of 'spacing', 'blur', or 'spacing'. We set names for these.
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    
    //+ suffix appends 'px' so value can be updated and read.
}

//Assigning listeners for all inputs

//Listens for value of mouse-off event:
inputs.forEach(input => input.addEventListener('change', handleUpdate));

//Listens for value of mouse-move event:
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
//For some reason, mousemove events are not loaded on chrome dev-tools when it's open. Move the mouse, then open dev-tools to see mousemovement values recorded.
