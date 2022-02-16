const fs = require('fs');
const assert = require('assert');
const path = require('path');
const db = require('../Server/models/model');
const controller = require('../Server/controllers/fileController');
// const api = require('../Server/api');
const request = require('supertest');
const server = 'http://localhost:3000';
const res = require('express/lib/response');
const req = require('express/lib/request');
require('regenerator-runtime/runtime');
// const { post } = require('../Server/api');

//might need to import filecontroller 

describe ('database/controller unit tests', (done) => {

    //cannot run this test until import statements issue is solved
    describe("Get list of algorithms from database", () => {
        describe('GET', () => {
            it ('responds with 201 and with an array of objects', async () => { 
                await request (server)
                    .get("/")
                    .expect('Content-Type', /json/)
                    .expect(201)
                    .then((res) => {
                        console.log("POST res.body", res.body);
                        expect(Array.isArray(res.body.rows)).toEqual(true);
                        
                    })
            })
        })
    });

})