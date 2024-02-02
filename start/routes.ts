/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ProductsController from '#controllers/products_controller'
import router from '@adonisjs/core/services/router'

router.get('/api/products/list', [ProductsController, 'index'])
router.post('/api/products/store', [ProductsController, 'store'])
router.put('/api/products/update/:id', [ProductsController, 'update'])
router.delete('/api/products/delete/:id', [ProductsController, 'destroy'])
