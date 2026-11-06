import * as api from '@lp-labs/ordinal-suffix';
import { ordinal } from '@lp-labs/ordinal-suffix';
console.log(ordinal(42));
// @ts-expect-error invalid argument must be rejected by declarations
api.ordinal('first');
