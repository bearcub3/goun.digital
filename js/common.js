(function (win, doc){
    const website = {
        init : function () {
            this.goToTop();
            this.screenSizeDetector();
            this.location();
        },
        location : function(){
            const path = win.location.pathname;
            const wrapper = doc.querySelector('.wrapper');

            win.addEventListener('load', (e) => {
                let width = win.innerWidth;

                if (width < 992) {
                    console.log(path);
                    path === '/ux/visualization.htm'?  wrapper.setAttribute("style", `background: no-repeat url("../imgs/Plutchik-wheel.png"); background-position-y: 11%; background-position-x: 160%;`) : wrapper.setAttribute("style", '');
                } else if( width >= 992) {
                    path === '/ux/visualization.htm'?  wrapper.setAttribute("style", `background: no-repeat url("../imgs/Plutchik-wheel.png"); background-position-y: 10%; background-position-x: 120%;`) : wrapper.setAttribute("style", '');
                }
            });

            win.addEventListener('resize', (e) => {
                let width = win.innerWidth;

                if (width < 992) {
                    console.log(path);
                    path === '/ux/visualization.htm'?  wrapper.setAttribute("style", `background: no-repeat url("../imgs/Plutchik-wheel.png"); background-position-y: 11%; background-position-x: 160%;`) : wrapper.setAttribute("style", '');
                } else if( width >= 992) {
                    path === '/ux/visualization.htm'?  wrapper.setAttribute("style", `background: no-repeat url("../imgs/Plutchik-wheel.png"); background-position-y: 10%; background-position-x: 120%;`) : wrapper.setAttribute("style", '');
                }
            });

        },
        goToTop: function() {
            const top = doc.querySelector('.top-btn');
            
            win.addEventListener('scroll', (e) => {
                let scrollY = win.scrollY;
                if (scrollY > 600) {
                    top.classList.add('visible');
                    top.classList.remove('no-visible'); 
                } else {
                    top.classList.remove('visible');
                    top.classList.add('no-visible');
                }
            })
        },
        screenSizeDetector: function() {
            // Main navigation realignment
            const nav = doc.querySelector('nav > ul');

            // Visualization Graph visibility
            const columns = doc.querySelectorAll('.col-1');
            const methodologySection = doc.querySelectorAll('#methodology ~ *');


            win.addEventListener('load', (e) => {
                let width = win.innerWidth;

                if (width < 992) {
                    columns.forEach((col) => {
                        col.classList.add('no-visible');
                    });
                    
                    methodologySection.forEach((col) => {
                        col.classList.remove('second-column');
                    });

                } else if( width >= 992) {
                    nav.classList.remove('column');
                    columns.forEach((col) => {
                        col.classList.add('visible');
                    });
                }
            });


            win.addEventListener('resize', (e) => {
                let width = win.innerWidth;

                if(width < 992){
                    nav.classList.add('column');
                    columns.forEach((col) => {
                        col.classList.remove('visible');
                        col.classList.add('no-visible');
                    });

                    methodologySection.forEach((col) => {
                        col.classList.remove('second-column');
                    });
                    
                } else if( width >= 992){              
                    nav.classList.remove('column');
                    columns.forEach((col) => {
                        col.classList.remove('no-visible');
                        col.classList.add('visible');
                    });

                    methodologySection.forEach((col) => {
                        col.classList.add('second-column');
                    });
                }
            })
        }
    }
    website.init();
})(window, document);
