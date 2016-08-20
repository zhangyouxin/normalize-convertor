import { NumberConvertor } from "./normalizerType";
import { BI } from '@ckb-lumos/lumos'

export class BIConvertor implements NumberConvertor{
  convertU32ToBI(value: ArrayBuffer): BI {
    const view = new DataView(value);
    return BI.from(view.getUint32(0, true));
  }
  convertU64ToBI(value: ArrayBuffer): BI {
    const view = new DataView(value);
    return BI.from(view.getBigUint64(0, true));
  }
  convertU128ToBI(value: ArrayBuffer, offset = 0): BI {
    const view = new DataView(value);
    return BI.from(view.getBigUint64(8 + offset, true)).shl(64).add(BI.from(view.getBigUint64(0 + offset, true)));
  }
  convertU256ToBI(value: ArrayBuffer): BI {
    return this.convertU128ToBI(value, 16).shl(128).add(this.convertU128ToBI(value));
  }
}