"use strict";

const { getRandomInt } = require("@dynamic-data/utils");

const MOCK = require("@dynamic-data/test-data");

const {
  getModelCSVHeader,
  getNewDataMockupData
} = require("@dynamic-data/test-mockups");

describe("test", () => {
  //test.todo("needs tests");

  it("getNewDataMockupData", () => {
    const result = getNewDataMockupData(

      "newData",
      "2022-04-03"
    );
    console.log("NewData ", result);
    expect(typeof result).toBe("object");
  });
});
