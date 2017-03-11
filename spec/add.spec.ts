import { expect } from 'chai';
import { add } from '../index';

describe('add', () => {

   it('should sum given numbers', () => {
      expect(add(2, 5)).eq(7);
   });

});
