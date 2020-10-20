function tabs() {

    const menuTabs = document.querySelector('.expert__menu'),
          tabs = document.querySelectorAll('.expert__menu_item'),
          content = document.querySelectorAll('.expert__content'),
          prev = document.querySelector('.expert__prev'),
          next = document.querySelector('.expert__next');

    let index = 2;
    content.forEach(item => {
        item.style.width = '695px';
        item.style.height = '460px';
    });
    function setActiveTab() {
        tabs.forEach(item => {
            item.classList.remove('expert__menu_item_active');
            if (item.getAttribute('data-tab') == index) {
                item.classList.add('expert__menu_item_active');
            }
        });
    }

    function toggleContent() {
        content.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
            if (item.getAttribute('id') == index) {
                item.classList.remove('hide');
                item.classList.add('show');
            }
        }); 
        setActiveTab();
    }

    menuTabs.addEventListener('click', e => {
        index = e.target.getAttribute('data-tab');
        toggleContent();
    });

    prev.addEventListener('click', () => {
		if (index == 1) {
            index = content.length;
		} else {
			index--;
        }
        toggleContent();
    });
    
    next.addEventListener('click', () => {
		if (index == content.length) {
            index = 1;
		} else {
			index++;
        }
        toggleContent();
    });

    setActiveTab();
    toggleContent();
}

export default tabs;