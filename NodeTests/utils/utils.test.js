const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () =>
{
    var result = utils.add(33, 11);
    expect(result).toBe(44);
});

it('should square a number', () =>
{
    var result = utils.square(9);
    expect(result).toBe(9*9);
    //if(result != 9*9) throw new Error(`Expected ${9*9}, but got ${result}`);
});

// it('shoukd expect some values', () => {
//     //expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//     //expect([1, 2, 3, 4, 5]).toContain(4);
//     //expect({name:'doe', age:'20'}).toMatchObject({name:'doe'});
// })

it('should verify first and last names', () => {
    var result = utils.setName({}, 'A B');
    expect(result).toMatchObject({firstName:'A', lastName:'B'});
})

it('should async add two numbers', (done)=> {
    utils.asyncAdd(4, 3, (sum)=>{
        expect(sum).toBe(7);
        done();
    })
})

it('should async square two numbers', (done)=> {
    utils.asyncSquare(3, (out)=>{
        expect(out).toBe(9);
        done();
    })
})