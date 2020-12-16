import { getMock } from './mockData';

describe('mockData', () => {
  it('getMock filter sold', () => {
    const res = getMock({ filter: { isSold: true } });
    expect(res.every((item) => item.isSold)).toBeTruthy();
  });
});
