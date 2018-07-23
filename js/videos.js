'use strict';

(function (d) {

    /* Se hace esto, por que tabs y panels son nodeList originalmente y
     no arreglos, entonces los convertimos(hacemos una copia) a arreglos para poder obtener
     el index(posicion) mas adelante */

    var tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabs__item'));
    var panels = Array.prototype.slice.apply(d.querySelectorAll('.panels__item'));
    d.getElementById('tabs').addEventListener('click', function (e) {
        if (e.target.classList.contains('tabs__item')) {
            var i = tabs.indexOf(e.target);

            tabs.map(function (tab) {
                return tab.classList.remove('active');
            });
            tabs[i].classList.add('active');

            panels.map(function (panel) {
                return panel.classList.remove('active');
            });
            panels[i].classList.add('active');
        }
    });
})(document);