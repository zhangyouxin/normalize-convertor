import { BIConvertor } from "../src/numberConvertor";

describe('normalizer', () => {

  it('should return value', () => {
    expect(90).toBe(90);
  }) 
  it('should convertU32ToBI', () => {
    const buffer = new ArrayBuffer(4);
    new DataView(buffer).setUint32(0, 1718224904, true /* littleEndian */);
    const result = new BIConvertor().convertU32ToBI(buffer);
    expect(result.toHexString()).toBe('0x666a0808');
  }) 
  it('should convertU64ToBI', () => {
    const buffer = new ArrayBuffer(8);
    new DataView(buffer).setUint32(0, 1718224904, true /* littleEndian */);
    new DataView(buffer).setUint32(4, 1718224647, true /* littleEndian */);
    const result = new BIConvertor().convertU64ToBI(buffer);
    expect(result.toHexString()).toBe('0x666a0707666a0808');
  }) 
  it('should convertU128ToBI', () => {
    const buffer = new ArrayBuffer(16);
    new DataView(buffer).setUint32(0, 1718224904, true /* littleEndian */);
    new DataView(buffer).setUint32(4, 1718224647, true /* littleEndian */);
    new DataView(buffer).setUint32(8, 1718224390, true /* littleEndian */);
    new DataView(buffer).setUint32(12, 1718224133, true /* littleEndian */);
    const result = new BIConvertor().convertU128ToBI(buffer);
    expect(result.toHexString()).toBe('0x666a0505666a0606666a0707666a0808');
  }) 
  it('should convertU256ToBI', () => {
    const buffer = new ArrayBuffer(32);
    new DataView(buffer).setUint32(0, 1718224904, true /* littleEndian */);
    new DataView(buffer).setUint32(4, 1718224647, true /* littleEndian */);
    new DataView(buffer).setUint32(8, 1718224390, true /* littleEndian */);
    new DataView(buffer).setUint32(12, 1718224133, true /* littleEndian */);
    new DataView(buffer).setUint32(16, 1718223876, true /* littleEndian */);
    new DataView(buffer).setUint32(20, 1718223619, true /* littleEndian */);
    new DataView(buffer).setUint32(24, 1718223362, true /* littleEndian */);
    new DataView(buffer).setUint32(28, 1718223105, true /* littleEndian */);
    const result = new BIConvertor().convertU256ToBI(buffer);
    expect(result.toHexString()).toBe('0x666a0101666a0202666a0303666a0404666a0505666a0606666a0707666a0808');
  }) 
});
