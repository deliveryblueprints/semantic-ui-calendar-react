import { getYears } from '../src/components/YearPickerComponent.js';
import moment from 'moment';
import { assert } from 'chai';

const yearsStart = moment('2009-01-01').year();
const expected = [
  '2009',
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020'
];
const compare = (arrA, arrB) => {
  if (arrA.length !== arrB.length) return false;
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) return false;
  }
  return true;
};

describe('YearPicker: getYears', function() {
  it('return range of years as expected', function() {
    assert(compare(getYears(yearsStart), expected), 'getYears return expected array of years');
  });
});
