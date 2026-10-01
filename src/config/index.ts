export interface Config {
  gateways: string[]
  routers: string[]
  dnsResolvers: Record<string, string | string[]>
  fetchTimeout: number
  debug: string
}

/**
 * Config used in production
 */
export const config: Config = {
  gateways: [
    'https://trustless-ipfs.dget.top'
  ],
  routers: [
    'https://delegated-ipfs.dev'
  ],
  dnsResolvers: {
    ".": 'https://delegated-ipfs.dev/dns-query',
    "eth.": "https://dns-web3.dget.top/dns-query",
    "888.": "https://dns-web3.dget.top/dns-query",
    "anime.": "https://dns-web3.dget.top/dns-query",
    "arculus.": "https://dns-web3.dget.top/dns-query",
    "ask.": "https://dns-web3.dget.top/dns-query",
    "ath.": "https://dns-web3.dget.top/dns-query",
    "austin.": "https://dns-web3.dget.top/dns-query",
    "bald.": "https://dns-web3.dget.top/dns-query",
    "binanceus.": "https://dns-web3.dget.top/dns-query",
    "bitcoin.": "https://dns-web3.dget.top/dns-query",
    "blockchain.": "https://dns-web3.dget.top/dns-query",
    "brave.": "https://dns-web3.dget.top/dns-query",
    "bunni.": "https://dns-web3.dget.top/dns-query",
    "cgai.": "https://dns-web3.dget.top/dns-query",
    "chip.": "https://dns-web3.dget.top/dns-query",
    "collect.": "https://dns-web3.dget.top/dns-query",
    "crypto.": "https://dns-web3.dget.top/dns-query",
    "dao.": "https://dns-web3.dget.top/dns-query",
    "digibyte.": "https://dns-web3.dget.top/dns-query",
    "donut.": "https://dns-web3.dget.top/dns-query",
    "dream.": "https://dns-web3.dget.top/dns-query",
    "dsci.": "https://dns-web3.dget.top/dns-query",
    "emir.": "https://dns-web3.dget.top/dns-query",
    "go.": "https://dns-web3.dget.top/dns-query",
    "gotchi.": "https://dns-web3.dget.top/dns-query",
    "grow.": "https://dns-web3.dget.top/dns-query",
    "her.": "https://dns-web3.dget.top/dns-query",
    "hi.": "https://dns-web3.dget.top/dns-query",
    "hub.": "https://dns-web3.dget.top/dns-query",
    "kingdom.": "https://dns-web3.dget.top/dns-query",
    "klevar.": "https://dns-web3.dget.top/dns-query",
    "kresus.": "https://dns-web3.dget.top/dns-query",
    "learn.": "https://dns-web3.dget.top/dns-query",
    "lfg.": "https://dns-web3.dget.top/dns-query",
    "ltc.": "https://dns-web3.dget.top/dns-query",
    "lunar.": "https://dns-web3.dget.top/dns-query",
    "manga.": "https://dns-web3.dget.top/dns-query",
    "ministry.": "https://dns-web3.dget.top/dns-query",
    "moon.": "https://dns-web3.dget.top/dns-query",
    "mooncat.": "https://dns-web3.dget.top/dns-query",
    "mycircle.": "https://dns-web3.dget.top/dns-query",
    "nft.": "https://dns-web3.dget.top/dns-query",
    "og.": "https://dns-web3.dget.top/dns-query",
    "ohm.": "https://dns-web3.dget.top/dns-query",
    "onchain.": "https://dns-web3.dget.top/dns-query",
    "pastor.": "https://dns-web3.dget.top/dns-query",
    "pilot.": "https://dns-web3.dget.top/dns-query",
    "pokt.": "https://dns-web3.dget.top/dns-query",
    "polygon.": "https://dns-web3.dget.top/dns-query",
    "privacy.": "https://dns-web3.dget.top/dns-query",
    "pudgy.": "https://dns-web3.dget.top/dns-query",
    "pundi.": "https://dns-web3.dget.top/dns-query",
    "rain.": "https://dns-web3.dget.top/dns-query",
    "secret.": "https://dns-web3.dget.top/dns-query",
    "sonic.": "https://dns-web3.dget.top/dns-query",
    "tea.": "https://dns-web3.dget.top/dns-query",
    "tribe.": "https://dns-web3.dget.top/dns-query",
    "u.": "https://dns-web3.dget.top/dns-query",
    "unstoppable.": "https://dns-web3.dget.top/dns-query",
    "wallet.": "https://dns-web3.dget.top/dns-query",
    "web3.": "https://dns-web3.dget.top/dns-query",
    "x.": "https://dns-web3.dget.top/dns-query",
    "xmr.": "https://dns-web3.dget.top/dns-query",
    "zano.": "https://dns-web3.dget.top/dns-query",
    "zil.": "https://dns-web3.dget.top/dns-query"
  },
  fetchTimeout: 30_000,
  debug: globalThis?.location?.hostname?.search(/localhost|inbrowser\.dev|127\.0\.0\.1/) === -1 ? '' : '*,*:trace'
}
