var expect = require( 'chai' ).expect;
var st = require( './index.js' );

describe( 'starwars-names', function () {
    describe( 'all', function () {
        it( 'should return an array of strings', function () {
            expect( st.all ).to.satisfy( isArrayOfStrings );

            function isArrayOfStrings( array ) {
                return array.every( function ( item ) {
                    return typeof item === 'string';
                } );
            }

        } );
        it( 'should contain "Luke Skywalker"', function () {
            expect( st.all ).to.include( "Luke Skywalker" );
        } );
    } );
    describe( 'random', function () {
        it( 'should return a random item from the "starwars-names" array', function () {
            var randomItem = st.random();
            expect( st.all ).to.include( randomItem );
        } );
    } );
} );
