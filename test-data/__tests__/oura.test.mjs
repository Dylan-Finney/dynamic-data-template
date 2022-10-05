import MOCK from "@dynamic-data/test-data";

import { newData } from "@dynamic-data/test-data/mockups";

describe("test", () => {
  //test.todo("needs tests");
  it("newData mockup datamodel from default", () => {
    const data = MOCK.newData;
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
