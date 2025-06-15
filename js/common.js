(function (win, doc){
    const website = {
        init : function () {
            this.goToTop();
            this.screenSizeDetector();
            this.location();
            this.tooManyIframes();
        },
        location : function(){
            const path = win.location.pathname;
            const wrapper = doc.querySelector('.wrapper');

            win.addEventListener('load', (e) => {
                let width = win.innerWidth;

                if (width < 992) {
                    path === '/ux/visualization.htm'?  wrapper.setAttribute("style", `background: no-repeat url("../imgs/Plutchik-wheel.png"); background-position-y: 16%; background-position-x: 110%;`) : wrapper.setAttribute("style", '');
                } else if( width >= 992) {
                    path === '/ux/visualization.htm'?  wrapper.setAttribute("style", `background: no-repeat url("../imgs/Plutchik-wheel.png"); background-position-y: 18%; background-position-x: 120%;`) : wrapper.setAttribute("style", '');
                }
            });

            win.addEventListener('resize', (e) => {
                let width = win.innerWidth;

                if (width < 992) {
                    path === '/ux/visualization.htm'?  wrapper.setAttribute("style", `background: no-repeat url("../imgs/Plutchik-wheel.png"); background-position-y: 16%; background-position-x: 110%;`) : wrapper.setAttribute("style", '');
                } else if( width >= 992) {
                    path === '/ux/visualization.htm'?  wrapper.setAttribute("style", `background: no-repeat url("../imgs/Plutchik-wheel.png"); background-position-y: 18%; background-position-x: 120%;`) : wrapper.setAttribute("style", '');
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
        },
        tooManyIframes: function(){
            const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
            let removedIframes = [];

            const libraryLink = doc.createElement('a');
            libraryLink.href = 'https://www.figma.com/proto/yDQZRhz2Fbp129JZALbeN0/Portfolio-projects?node-id=8-2901&t=4tPLHVPutJ6rJQNy-1';
            libraryLink.target = '_blank';

            const guidelinesLink = doc.createElement('a');
            guidelinesLink.href = 'https://www.figma.com/proto/yDQZRhz2Fbp129JZALbeN0/Portfolio-projects?node-id=11-5236&t=Bv6PlKxLWWl1fVjC-1';
            guidelinesLink.target = '_blank';

            const responsiveLink = doc.createElement('a');
            responsiveLink.href = 'https://www.figma.com/proto/yDQZRhz2Fbp129JZALbeN0/Portfolio-projects?node-id=10-1729&t=QbqVvFsJZHco4map-1';
            responsiveLink.target = '_blank';

           

            if(isMobile){
                const iFrames = doc.querySelectorAll('iframe');
                
                iFrames.forEach((iframe) => {
                    removedIframes.push({
                        src: iframe.src,
                        width: iframe.width,
                        height: iframe.height,
                        style: iframe.style,
                        fullScreen: iframe.allowfullscreen
                      });
                      iframe.remove();
                });

                // Design Library
                const challenge = doc.querySelector('#library-challenges').parentElement.nextElementSibling;
                const figcaption = challenge.querySelector('figcaption');
                const challengeImg = doc.createElement('img');

                challengeImg.src = '../imgs/component-library.png';
                challengeImg.alt = 'Design Library Image Excerption';
                challengeImg.width = '100%';
                challengeImg.height = 'auto';
                challengeImg.classList.add('mobile-img');
 
                libraryLink.appendChild(challengeImg);
                challenge.insertBefore(libraryLink, figcaption);

                // Design Guidelines
                const deliberable = doc.querySelector('#guidelines-deliverables').parentElement.nextElementSibling;
                const figcaption2 = deliberable.querySelector('figcaption');
                const deliberableImg = doc.createElement('img');

                deliberableImg.src = '../imgs/design-guidelines.png';
                deliberableImg.alt = 'Design Guidelines Excerption';
                deliberableImg.width = '100%';
                deliberableImg.height = 'auto';
                deliberableImg.classList.add('mobile-img');
 
                guidelinesLink.appendChild(deliberableImg);
                deliberable.insertBefore(guidelinesLink, figcaption2);

                // Responsive Design
                const responsive = doc.querySelector('#responsive').parentElement.lastElementChild;
                const figcaption3 = responsive.querySelector('figcaption');
                const responsiveImg = doc.createElement('img');

                responsiveImg.src = '../imgs/responsive-design.png';
                responsiveImg.alt = 'Responsive Design Excerption';
                responsiveImg.width = '100%';
                responsiveImg.height = 'auto';
                responsiveImg.classList.add('mobile-img');
 
                responsiveLink.appendChild(responsiveImg);
                responsive.insertBefore(responsiveLink, figcaption3);
            }
        }
    }
    website.init();
})(window, document);
