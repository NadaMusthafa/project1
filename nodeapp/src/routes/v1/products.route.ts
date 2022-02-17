import express, { Request, Response} from 'express';
// import { createResource, findResource, findOneResource, patchResource, deleteResource } from '../../services/products.service';
// import { handleAsync, EntityNotFoundError } from '../../shared/common';
// import authMiddleware from '../../middlewares/auth.middleware';
// import { ProductValidator } from '../../models/product.entity';
// import  validationMiddleware  from '../../middlewares/validation.middleware';

 
let router = express.Router( );

// API Endpoint '/products'(temporary)
router.post(`/`, async(request: Request, response: Response) => {

    
        // Retreive name & price from body
        const {name, price} = request.body;
    
        // Validate the data retreived
        if (!name || !price) {
            response.send(400);
            return;
        }
    
        // Save to db & collect product info & send to client
        response.send( {message: 'product data saved to database'} );     
});

router.get(`/`, async(request: Request, response: Response) => {

    response.send( {message: `product data fetched from database`} );
});

router.get(`/:id`, (request: Request, response: Response) => {

    const id = request.params.id;

    response.send( {message : `product data fetched from database`} );
});

router.patch(`/:id`, async(request: Request, response: Response) => {

    const id = request.params.id;
    const {name, price} = request.body;

    if( name && price ) {
        response.send( {message: `name and price updated on id: ${id}`} )
    }
    else if( name ) {
        response.send( {message:`name updated on id: ${id}`} )
        }
    else if( price ) {
        response.send( {message:`price updated on id: ${id}`} )
    }
});

router.delete(`/:id`, async(request: Request, response: Response) => {

    const id = request.params.id;

    response.send( {message:`product data deleted on id: ${id}`} );
});


// API Endpoint `/products`

// Protect ALL CRUD operations
// router.use(authMiddleware() );

// router.post(`/`, validationMiddleware( ProductValidator ),async (req, res, next) => {

// 	const model = req.body;
	
// 	// Call service
// 	const [ newResource, error ] = await handleAsync( createResource(model) );
// 	if ( error ) return next( error );
	
// 	res.send( newResource );
// });

// router.get(`/`, async(req, res, next) => {
    
// 	let options = req.query;
// 	 // Call Service
//      const [ allResources, error ] = await handleAsync( findResource( options ) );
// 	 if ( error ) return next( error );

// 	 res.send( allResources );
// });

// router.get(`/:id`, async(req, res, next) => {

// 	const id = Number(req.params.id);

// 	// Call Service
// 	const [ resource, error ] = await handleAsync( findOneResource(id) );
// 	if ( error ) return next( error );

// 	if( resource ) {
// 		res.send( resource );
// 	} else {
// 		next( new EntityNotFoundError(id , `Products.route->get/:id`) );
// 	}
// });

// router.patch(`/:id`, validationMiddleware( ProductValidator, { skipMissingProperties: true } ), async(req, res, next) => {

// 	const id = Number( req.params.id );
// 	const patchedModel = req.body;

// 	// Call Service
// 	const [ resource, error ] = await handleAsync( patchResource(id, patchedModel) );
// 	if ( error ) return next( error );

// 	if ( resource ) {
// 		res.send( resource );
// 	} else {
// 			next( new EntityNotFoundError(id , `Products.route->patch`) );
// 	}
// });

	
// router.delete(`/:id`, authMiddleware( ), async(req, res, next) => {

// 	const id = Number(req.params.id);

// 	// Call service
// 	const [ result, error ] = await handleAsync( deleteResource(id) );
// 	if ( error ) return next( error );

// 	if( result.affected === 1 ) {
// 		res.send( {deleted: true} );
// 	} else {
// 		next( new EntityNotFoundError(id , `Products.route->delete`) );
// 	}
// });


export default router;
