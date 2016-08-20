import { BI } from '@ckb-lumos/lumos'
// T 是 molecule-es 生成的 molecule object type `RawWithdrawalRequestType`
// U 是用户定义的类型，比如下面的示例中的 `RawWithdrawalRequestUserType`
// K 是 molecule-es 生成的类 `RawWithdrawalRequest`
export interface NormalizeConvertor<T, U, K> {
  Normalize: (value: U) => T;
  Denormalize: (value: K) => U;
}

export interface NumberConvertor {
  convertU32ToBI(value: ArrayBuffer): BI;
  convertU64ToBI(value: ArrayBuffer): BI;
  convertU128ToBI(value: ArrayBuffer): BI;
  convertU256ToBI(value: ArrayBuffer): BI;
}