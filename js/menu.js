(function (win, doc){
    const website = {
        init : function () {
            // this.textTransition();
            this.dropdown();
            // this.goToTop();
            this.screenSizeDetector();
        },
        dropdown : function() {
            // submenu dropdown
            const menus = doc.querySelectorAll('.submenu > a');

            // Main section position alignment
            //const main = doc.querySelector('main');
            const header = doc.querySelector('header');

            // when the logo is in the focus state
            const logo = doc.querySelector('.logo a');

            logo.addEventListener('click', (e) => { 
                //e.preventDefault();

                const firstMenu = doc.querySelector('.submenu:first-child ul');

                if (firstMenu && firstMenu.classList.contains('visible')){
                    firstMenu.classList.remove('visible');
                    firstMenu.classList.add('no-visible');
                }
            })

            logo.addEventListener('focus', (e) => { 
                //e.preventDefault();

                const firstMenu = doc.querySelector('.submenu:first-child ul');

                if (firstMenu && firstMenu.classList.contains('visible')){
                    firstMenu.classList.remove('visible');
                    firstMenu.classList.add('no-visible');
                }
            })

            // dropdown menu
            const dropdowns = doc.querySelectorAll('.dropdown');

            dropdowns.forEach((el, i) => {
                el.addEventListener('click', (e) => {
                    //e.preventDefault();
                    const parent = el.parentElement.parentElement;

                    if(parent && parent.classList.contains('no-visible')){
                        parent.classList.remove('no-visible');
                        parent.classList.add('visible');
                        parent.classList.add('selected');
                        console.log(parent);
                        
                    }
                })
            })

            dropdowns.forEach((el, i) => {
                el.addEventListener('focus', (e) => {
                    //e.preventDefault();
                    const parent = el.parentElement.parentElement;

                    if(parent && parent.classList.contains('no-visible')){
                        parent.classList.remove('no-visible');
                        parent.classList.add('visible');
                        parent.classList.add('selected');
                        console.log(parent);
                        
                    }
                })
            })

            dropdowns.forEach((el, i) => {
                el.addEventListener('blur', (e) => {
                    //e.preventDefault();
                    const parent = el.parentElement.parentElement;

                    if(i === 3 && parent.classList.contains('visible')){
                        parent.classList.remove('visible');
                        parent.classList.add('no-visible');
                    }
                })  
            })

            dropdowns.forEach((el, i) => {
                el.addEventListener('focusout', (e) => {
                    //e.preventDefault();
                    const parent = el.parentElement.parentElement;

                    if(i === 3 && parent.classList.contains('visible')){
                        parent.classList.remove('visible');
                        parent.classList.add('no-visible');
                    }
                })  
            })
        },

        screenSizeDetector: function() {
            // Main navigation realignment
            const nav = doc.querySelector('nav > ul');
            const submenu = nav.nextElementSibling;

            // Main section position alignment
            const main = doc.querySelector('main');
            const header = doc.querySelector('header');

            // Sub page navigation
            const subnav = doc.querySelector('.subpage-nav');
            
            // sub page layout
            const titleArea = doc.querySelector('.title-area');
            const contentArea = doc.querySelector('.content-area');

            win.addEventListener('resize', (e) => {
                let width = win.innerWidth;

                if(width < 992){
                    nav.classList.add('column');
                    
                    // subpage layout changes
                    if(subnav.classList.contains('visible')) {
                        subnav.classList.remove('visible');

                    } else {
                        subnav.classList.add('no-visible');
                    }

                    // subnav.classList.contains('visible')? subnav.classList.remove('visible') : 

                } else if( width >= 992){
                    nav.classList.remove('column');

                    // subpage layout changes
                    subnav.classList.contains('no-visible')? subnav.classList.remove('no-visible') : subnav.classList.add('visible');

                }
            })

            win.addEventListener('load', (e) => {
                let width = win.innerWidth;

                if (width < 992) {
                    nav.classList.add('column');

                    // subpage layout changes
                    subnav.classList.contains('visible')? subnav.classList.remove('visible') : subnav.classList.add('no-visible');

                } else if( width >= 992) {
                    nav.classList.remove('column');

                    // subpage layout changes
                     // subpage layout changes
                    if(subnav && subnav.classList.contains('no-visible')){
                        subnav.classList.remove('no-visible');
                        subnav.classList.add('visible')
                    }
                }
            });
        }
    }
    website.init();
})(window, document);
