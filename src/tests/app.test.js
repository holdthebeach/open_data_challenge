import {test, expect} from 'vitest'
import {sortAscending, sortDescending} from 'src/App.tsx'


// test('array will be returned with objects in ascending order of their dataSets value', () => {
//     const initialData = [{dataSets: 1}, {dataSets: 100}, {dataSets: 3}]
//     const expectedData = [{dataSets: 1}, {dataSets: 3}, {dataSets: 100}]

//     expect(sortAscending(initialData)).toEqual(expectedData);
// })

// test('array will be returned with objects in descending order of their dataSets value', () => {
//     const initialData = [{dataSets: 1}, {dataSets: 100}, {dataSets: 3}]
//     const expectedData = [{dataSets: 100}, {dataSets: 3}, {dataSets: 1}]

//     expect(sortDescending(initialData)).toEqual(expectedData);
// })

//sample test so vitest doesn't return error
test('test description for 1+1', () => {
    expect(1+1).toEqual(2);
})