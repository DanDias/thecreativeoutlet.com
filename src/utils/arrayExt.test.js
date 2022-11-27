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