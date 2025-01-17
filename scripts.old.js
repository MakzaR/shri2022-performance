(() => {
    function bind(nodes, event, handler) {
        for (let i = 0; i < nodes.length; i ++) {
            nodes[i].addEventListener(event, handler);
        }
    }

    function makeTabs(node) {
        let selected = node.querySelector('.s__tb_a').dataset.id;
        const tabs = node.querySelectorAll('.s__tb');
        const list = Array.from(tabs).map(node => node.dataset.id);
        const select = node.querySelector('.s__sel');

        function selectTab(newId) {
            const newTab = node.querySelector(`.s__tb[data-id=${newId}]`);
            const newPanel = node.querySelector(`.s__p[data-id=${newId}]`);
            const oldTab = node.querySelector('.s__tb_a');
            const oldPanel = node.querySelector('.s__p:not(.s__p_h)');

            selected = newId;

            oldTab.classList.remove('s__tb_a');
            oldTab.setAttribute('aria-selected', 'false');
            oldTab.removeAttribute('tabindex');
            newTab.classList.add('s__tb_a');
            newTab.setAttribute('aria-selected', 'true');
            newTab.setAttribute('tabindex', '0');
            newTab.focus({
                preventScroll: true
            });

            oldPanel.classList.add('s__p_h');
            oldPanel.setAttribute('aria-hidden', 'true');
            newPanel.classList.remove('s__p_h');
            newPanel.setAttribute('aria-hidden', 'false');

            select.value = newId;
        }

        select.addEventListener('input', () => {
            selectTab(select.value);
        });

        bind(tabs, 'click', event => {
            const newId = event.target.dataset.id;
            selectTab(newId);
        });

        bind(tabs, 'keydown', event => {
            if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
                return;
            }

            let index = list.indexOf(selected);

            if (event.which === 37) {
                --index;
            } else if (event.which === 39) {
                ++index;
            } else if (event.which === 36) {
                index = 0;
            } else if (event.which === 35) {
                index = list.length - 1;
            } else {
                return;
            }

            if (index >= list.length) {
                index = 0;
            } else if (index < 0) {
                index = list.length - 1;
            }

            selectTab(list[index]);
            event.preventDefault();
        });
    }

    function makeMenu(node) {
        let expanded = false;
        const links = document.querySelector('.hed__lis');

        node.addEventListener('click', () => {
            expanded = !expanded;
            node.setAttribute('aria-expanded', expanded ? 'true' : 'false');
            links.classList.toggle('hed__lis_o', expanded);
            links.classList.add('hed__lis-t');
        });
    }

    makeTabs(document.querySelector('.m__dev'));
    makeMenu(document.querySelector('.hed__m'));
})();
