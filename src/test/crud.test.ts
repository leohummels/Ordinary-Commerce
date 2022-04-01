import request from 'supertest'
import {app, server} from '../app'

afterAll( async () => {
    server.close()
})

 describe('##GET ALL REQUEST TEST##', () => {
 it('should return a json list message when list exist',  async () => {
     const resp = await request(app).get('/list/products').expect(200)
     expect(resp.statusCode).toEqual(200)
  })  
})

describe('##GET BY ID REQUEST TEST##', () => {
   it('should return json message when product exist',  async () => {
    const resp = await request(app).get('/products/55').expect(200)
    expect(resp.statusCode).toEqual(200)
  })  
})
