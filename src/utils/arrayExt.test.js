import { Filters } from './arrayExt';

const testArrays = {
  'withDupes': ['mock','yeah','ing','yeah','bird'],
  'objects': [
    {
      "name":"something",
      "filterByMeBool": true
    },
    {
      "name":"someone",
      "out": "there",
      "filterByMeBool": false
    },
    {
      "name": "something",
      "outlook": "good"
    },
    {
      "name": "one",
      "value": 1
    },
    {
      "name": "two",
      "value": 2
    },
    {
      "name": "three",
      "value": 3
    }
  ]
}


test('remove duplicates',() => {
  expect(testArrays.withDupes.filter(Filters.dedupe)).toStrictEqual(['mock','yeah','ing','bird']);
})

test(`filter by boolean property`,() => {
  expect(testArrays.objects.filter(Filters.byProp("filterByMeBool"))).toStrictEqual([testArrays.objects[0]]);
});

test(`filter by property equality`, () => {
  expect(testArrays.objects.filter(Filters.byProp("name", "something"))).toStrictEqual([
    testArrays.objects[0],
    testArrays.objects[2]
  ]);
})

test(`filter by property gt`, () => {
  expect(testArrays.objects.filter(Filters.byProp("value", null, 2))).toStrictEqual([
    testArrays.objects[5]
  ]);
})

test(`filter by property lt`, () => {
  expect(testArrays.objects.filter(Filters.byProp("value", null, null, 2))).toStrictEqual([
    testArrays.objects[3]
  ]);
})