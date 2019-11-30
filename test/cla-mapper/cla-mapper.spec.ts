import {ClaMapper} from '../../src';

describe('ClaMapper', () => {
   let mapper: ClaMapper;

   const defaultMap = {
       stringTest: '-test',
       booleanTest: '--boolean-test',
       booleanFalsyTest: '--boolean-falsy-test',
       numberTest: '--number-test',
       numberZeroTest: '--number-zero-test',

       objTest: '--obj-test',
       nullTest: '--null-test',
       undefinedTest: '--undefined-test',

       nothingTest: undefined,
       nothingTest2: '',
       nothingTest3: null,
   };

   beforeEach(() => {
       mapper = new ClaMapper(defaultMap);
   });

   it('should have map after construction', () => {
       expect(mapper.commandLineArgsMap).toBe(defaultMap);
   });

   it('should set map and get map', () => {
       const newMap = {
           foo: '-foo'
       };

       mapper.commandLineArgsMap = newMap;

       expect(mapper.commandLineArgsMap).toBe(newMap);
   });

   it('should return command line args (valid obj)', () => {
       expect(mapper.getCommandLineArgs({
           stringTest: 'string',
           booleanTest: true,
           booleanFalsyTest: false,
           numberTest: 1,
           numberZeroTest: 0,

           objTest: {foo: 'bar'},
           nullTest: null,
           undefinedTest: undefined,

           nothingTest: 123,
           nothing2Test: 555,
           nothing3Test: 888,

           nothingTest4: 111
       })).toStrictEqual([
           '-test',
           'string',
           '--boolean-test',
           '--number-test',
           '1',
           '--number-zero-test',
           '0'
       ])
   });
});