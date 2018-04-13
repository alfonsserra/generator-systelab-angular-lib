import { SampleService } from '../app/systelab-preferences/sample.service';


describe( 'Service without the TestBed', () => {

	let service: SampleService;

	beforeEach( () => {
		service = new SampleService();

	} );

	it( 'Check that we can put and get preferences', () => {
			expect( service.firstMethod() )
				.toBe( 'firstMethod' );
	} );

} );
