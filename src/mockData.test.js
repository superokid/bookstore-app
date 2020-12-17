import { mock, getMock, getBookByIdMock, patchBookSalesMock } from './mockData';

describe('getMock', () => {
  it('filter sold', () => {
    const res = getMock({ filter: { isSold: true } });
    expect(res.every((item) => item.isSold)).toBeTruthy();
  });
  it('filter unsold', () => {
    const res = getMock({ filter: { isSold: false } });
    expect(res.every((item) => item.isSold)).toBeFalsy();
  });

  it('search title', () => {
    const search = 'Kinfolk';
    const res = getMock({ search });
    expect(res.length).toBeGreaterThan(0);
    expect(res.every((item) => item.title.includes(search))).toBeTruthy();
  });
  it('search title lowercase', () => {
    const search = 'kinfolk';
    const res = getMock({ search });
    expect(res.length).toBeGreaterThan(0);
    expect(res.every((item) => item.title.toLowerCase().includes(search))).toBeTruthy();
  });
  it('search title falsy', () => {
    const search = 'asdfadsfadsf';
    const res = getMock({ search });
    expect(res.length).toBe(0);
  });

  it('search author', () => {
    const search = 'William';
    const res = getMock({ search });
    expect(res.every((item) => item.author.includes(search))).toBeTruthy();
  });
  it('search author lowercase', () => {
    const search = 'william';
    const res = getMock({ search });
    expect(res.length).toBeGreaterThan(0);
    expect(res.every((item) => item.author.toLowerCase().includes(search))).toBeTruthy();
  });
  it('search author falsy', () => {
    const search = 'asdfadsfadsf';
    const res = getMock({ search });
    expect(res.length).toBe(0);
  });

  it('search nothing', () => {
    const res = getMock({ search: undefined });
    expect(res.length).toBe(mock.length);
  });

  it('patchBookSalesMock', () => {
    const id = 1;
    const val = false;
    const res = patchBookSalesMock(id, val);
    expect(res[0].isSold).toBe(false);
  });

  it('getBookByIdMock', () => {
    const id = 1;
    const res = getBookByIdMock(id);
    expect(res.id).toBe(id);
  });
});
