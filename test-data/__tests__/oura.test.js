"use strict";

//const { default: MOCK } = require("../dist/cjs");

//const { Activity } = require("../dist/cjs/mockups");

const MOCK = require("@dynamic-data/test-data");

const { newData } = require("@dynamic-data/test-data/mockups");

describe("test", () => {
  //test.todo("needs tests");
  it("newData mockup datamodel from default", () => {
    const data = MOCK.default.newData;
    console.log("MOCK ", MOCK);
    //console.log("MOCK DATA", data);

    expect(typeof data).toBe("object");
  });
  it("newData mockup datamodel only", () => {
    const data = newData;
    //console.log("MOCK DATA", data);

    expect(typeof data).toBe("object");
  });
});
