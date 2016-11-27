/*
 * GET home page.
 */
import express = require('express');

export function index(req: express.Request, res: express.Response) {
    res.render('index', { title: 'Prácticas', year: new Date().getFullYear() });
};

export function intercambiar(req: express.Request, res: express.Response) {
    res.render('intercambiar', { title: 'Intercambiar práctica', year: new Date().getFullYear() });
};

export function estado(req: express.Request, res: express.Response) {
    res.render('estado', { title: 'Estado de intercambio', year: new Date().getFullYear(), message: '' });
};

export function editar(req: express.Request, res: express.Response) {
    res.render('editar', { title: 'Editar intercambio', year: new Date().getFullYear(), message: '' });
};

export function historial(req: express.Request, res: express.Response) {
    res.render('historial', { title: 'Historial de intercambios', year: new Date().getFullYear(), message: '' });
};
