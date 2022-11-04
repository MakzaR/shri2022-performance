function bind(e, t, i) {
    for (let a = 0; a < e.length; a++) e[a].addEventListener(t, i)
}

function makeTabs(e) {
    let t = e.querySelector(".section__tab_active").dataset.id;
    const i = e.querySelectorAll(".section__tab");
    const a = Array.from(i).map(e => e.dataset.id);
    const n = e.querySelector(".section__select");

    function s(i) {
        const a = e.querySelector(`.section__tab[data-id=${i}]`);
        const s = e.querySelector(`.section__panel[data-id=${i}]`);
        const c = e.querySelector(".section__tab_active");
        const r = e.querySelector(".section__panel:not(.section__panel_hidden)");

        t = i

        c.classList.remove("section__tab_active")
        c.setAttribute("aria-selected", "false")
        c.removeAttribute("tabindex")
        a.classList.add("section__tab_active")
        a.setAttribute("aria-selected", "true")
        a.setAttribute("tabindex", "0")
        a.focus({preventScroll: !0})

        r.classList.add("section__panel_hidden")
        r.setAttribute("aria-hidden", "true")
        s.classList.remove("section__panel_hidden")
        s.setAttribute("aria-hidden", "false")

        n.value = i
    }

    n.addEventListener("input", () => {
        s(n.value)
    }), bind(i, "click", e => {
        s(e.target.dataset.id)
    }), bind(i, "keydown", e => {
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        let i = a.indexOf(t);
        if (37 === e.which) --i; else if (39 === e.which) ++i; else if (36 === e.which) i = 0; else {
            if (35 !== e.which) return;
            i = a.length - 1
        }
        i >= a.length ? i = 0 : i < 0 && (i = a.length - 1), s(a[i]), e.preventDefault()
    })
}

makeTabs(document.querySelector(".main__devices"));