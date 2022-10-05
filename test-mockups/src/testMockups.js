import {
  toIsoString,
  getRandomInt,
  getNewDate,
  getSleepDate,
  pickRandomValue,
  getAverage
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/test-data";

const NewDataModel = {
  exampleAtrr: () => {
    return getRandomInt(1,10)
  }
}

const dataModels = {
  newData: {
    data: MOCK.newData,
    mockup: NewDataModel
  }

};

export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}

export function getNewDataMockupData(dataModel, dataDate) {
  let mockupData = {};
  const mockupModel = dataModels[dataModel].mockup;
  mockupData = dataModels[dataModel].data;

  [
    "exampleAtrr",
  ].forEach((key, i) => {
    switch (key) {
      default:
        mockupData[key] = mockupModel[key]()
        break
    }
  });

  return mockupData;
}