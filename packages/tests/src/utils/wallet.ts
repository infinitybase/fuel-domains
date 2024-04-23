import { type BN, type Provider, Wallet, bn } from 'fuels';

export const domainPrices = (domain: string, period = 1) => {
  const domainSize = domain.length;

  if (domainSize < 3) {
    return bn(0);
  }

  const prices = {
    [3]: bn.parseUnits('0.005'),
    [4]: bn.parseUnits('0.001'),
    default: bn.parseUnits('0.0002'),
  };

  const price: BN = prices[domainSize] || prices.default;

  return price.mul(period);
};

export const txParams = {
  gasPrice: 1,
  gasLimit: 1_000_000,
};

export const WALLET_PRIVATE_KEYS = {
  MAIN: '0xa449b1ffee0e2205fa924c6740cc48b3b473aa28587df6dab12abc245d1f5298',
  FAKE: '0x12265569a656550e6eceda7ac78a25a2e4584e5742e6420b597c9ced37ff4754',
};

export function createWallet(
  provider: Provider,
  privateKey = WALLET_PRIVATE_KEYS.MAIN
) {
  return Wallet.fromPrivateKey(privateKey, provider);
}

export function randomName(size = 10) {
  const name = (Math.random() + 2).toString(32).substring(2);
  return `${name}`.slice(0, size);
}
