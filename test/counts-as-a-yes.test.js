// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { countsAsAYes } from '../src/counts-as-a-yes/utils.js';

const test = QUnit.test;

test('time to test a yes', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes('yes');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'yes returns true'); 
    
});
