(function (win, doc){
    const website = {
        init : function () {
            this.indexPage();
        },
        indexPage: function() {
            // Hero section realignment
            const hero = doc.querySelector('.hero').firstElementChild;

            win.addEventListener('resize', (e) => {
                let width = win.innerWidth;

                if (width < 992) {
                    hero.classList.remove('row');
                    hero.classList.add('column');
                    // cta.classList.add('no-visible');
                } else if( width >= 992) {
                    hero.classList.remove('column');
                    hero.classList.add('row');
                }
            });

        }
    }
    website.init();
})(window, document);