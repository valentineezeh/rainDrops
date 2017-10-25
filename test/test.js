import {assert} from 'chai';

import rainDrops from '../src/main.js';

describe("rainDrops", () => {
   describe("rainDrops tests", () => {
       it("should return Plong for 28", () => {
           assert.equal(rainDrops(28), 'Plong');
       });
       it("should return PlingPlang for 1755", () => {
           assert.equal(rainDrops("1755"), 'PlingPlang');
            });
       it("should return 13 for 13", () => {
           assert.equal(rainDrops("13"), 13);
       });

       it("should return 34 for 34", () => {
           assert.equal(rainDrops("34"), '34');
       });
       it("should return invalid input for 'Hello' ", () => {
           assert.equal(rainDrops("Hello"), 'invalid input');
       });
       it("should return '4.5' for 4.5", () => {
           assert.equal(rainDrops("4.5"), 4.5);
       });
       it("should return invalid input for 0", () => {
           assert.equal(rainDrops("0"), "invalid input");
       });
       it("should return PlingPlang for '15'", () => {
           assert.equal(rainDrops("15"), 'PlingPlang');
       });
       it("should return PlingPlong for 21", () => {
           assert.equal(rainDrops("21"), 'PlingPlong');
       });
       it("should return invalid input for ''", () => {
           assert.equal(rainDrops(''), 'invalid input');
       });
       it("should return PlingPlangPlong for 105", () => {
           assert.equal(rainDrops(105), 'PlingPlangPlong');
       });
   })
})
