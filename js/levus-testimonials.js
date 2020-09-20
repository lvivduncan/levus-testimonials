// 20-09-2020
{
    // wrapper
    const wrapper = document.getElementById('levus-testimonials');
    // all
    let items = wrapper.querySelectorAll('#levus-testimonials li');
    //
    const ul = wrapper.querySelector('ul');

    if (items.length <= 3) {
        // cloned and append elements
        items.forEach(element => ul.append(element.cloneNode(true)));
        // new nodelist
        items = wrapper.querySelectorAll('#levus-testimonials li');
    }

    setInterval(() => {
        const last = ul.lastElementChild;
        ul.prepend(last);
        // destroy transition
        ul.style.transition = 'none';
        ul.classList.add('move');
        setTimeout(() => {
            ul.classList.remove('move');
            ul.style.transition = '.5s';
        }, 1000); 
    }, 3500);
}