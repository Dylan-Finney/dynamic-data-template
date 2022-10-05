import { getRandomInt } from "@dynamic-data/utils";

import MOCK from "@dynamic-data/test-data";

import {
  getModelCSVHeader,
  getNewDataMockupData,
} from "@dynamic-data/test-mockups";

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