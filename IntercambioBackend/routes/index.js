"use strict";
function index(req, res) {
    res.render('index', { title: 'Prácticas', year: new Date().getFullYear() });
}
exports.index = index;
;
function intercambiar(req, res) {
    res.render('intercambiar', { title: 'Intercambiar práctica', year: new Date().getFullYear() });
}
exports.intercambiar = intercambiar;
;
function estado(req, res) {
    res.render('estado', { title: 'Estado de intercambio', year: new Date().getFullYear(), message: '' });
}
exports.estado = estado;
;
function editar(req, res) {
    res.render('editar', { title: 'Editar intercambio', year: new Date().getFullYear(), message: '' });
}
exports.editar = editar;
;
function historial(req, res) {
    res.render('historial', { title: 'Historial de intercambios', year: new Date().getFullYear(), message: '' });
}
exports.historial = historial;
;
//# sourceMappingURL=index.js.map