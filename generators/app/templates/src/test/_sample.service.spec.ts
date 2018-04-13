import { SampleService } from '../app/<%= title %>/sample.service';


describe( 'Service without the TestBed', () => {

	let service: SampleService;

	beforeEach( () => {
		service = new SampleService();

	} );

	it( 'Check that we can call to the fist method', () => {
			expect( service.firstMethod() )
				.toBe( 'firstMethod' );
	} );

} );
