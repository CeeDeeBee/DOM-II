const blocksContainer = document.getElementsByClassName('blocks')[0];
const blocks = document.querySelectorAll('.block');

blocks.forEach((block) => {
    // Create Travelers
    const newTraveler = document.createElement('div');
    newTraveler.style.backgroundColor = 'black';
    newTraveler.style.width = '70px';
    newTraveler.style.height = '70px';
    block.style.display = 'flex';
    block.style.justifyContent = 'center';
    block.style.alignItems = 'center';
    newTraveler.style.transition = 'all 2s';
    block.append(newTraveler);

    // Rockets to top 
    block.addEventListener('click', () => blocksContainer.prepend(block));

    // Traveler movement

    const windowWidth = window.innerWidth;
    const translateDistance = windowWidth - block.getBoundingClientRect().right;
    block.addEventListener('mousedown', () => newTraveler.style.transform = `translateX(${translateDistance}px)`);
    block.addEventListener('mouseup', () => newTraveler.style.transform = `translateX(0px)`);
});

// Center travelers
blocksContainer.style = 'justify-content: center; align-items: center';