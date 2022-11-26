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

test(`filter by property`,() => {
  expect(testArrays.objects.filter(Filters.byProp("filterByMeBool"))).toStrictEqual(testArrays.objects[0]);
});