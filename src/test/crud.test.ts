//import {test} from './jest.config'
import request from 'supertest'
import {app} from '../app'
import { Controller } from '../controller/product.controllers'

const controller = new Controller

describe('##GET REQUEST TEST##', () => {
    test('should return error messagen when product does not exist', async () => {
      controller.getProductByID
    })

    request(app).get('/products/59').expect(400)
})