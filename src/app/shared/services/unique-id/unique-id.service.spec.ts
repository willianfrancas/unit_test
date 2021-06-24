import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdsWithPrefix.name}
      should generate id when called with prefix`, () => {

    const id = service.generateUniqueIdsWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdsWithPrefix.name}
      should not generate duplicate id`, () => {

    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.generateUniqueIdsWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGenerateUniqueIds.name}
      should return the number of generateIds when called`, () => {

    service.generateUniqueIdsWithPrefix('app');
    service.generateUniqueIdsWithPrefix('app');
    expect(service.getNumberOfGenerateUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGenerateUniqueIds.name}
      should throw when call with empty`, () => {
    const emptyValues = [null, undefined, '0', '1'];
    emptyValues.forEach(emptyValue => {
      expect(() => service.generateUniqueIdsWithPrefix(emptyValue))
        .withContext(`Empty values: ${emptyValues}`)
        .toThrow();
    });
  });

});
