"use strict";
// tslint:disable:object-literal-sort-keys
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
     networks: {
    mainnet: {
      bip32: {
        
        public: 0x03E25D7E,
        private: 0x03E25944
      },
      name: 'ripaex',
      nethash: 'bee1634649fc6a759e5fdb8f3c4bcb4b5189c1f2a6b48284a6445f3f09db844e',
      token: 'XPX',
      symbol: '₱',
      version: 0x37,
      explorer: 'https://explorer.ripaex.io',
      wif: 0xaa, // Network prefix for wif generation
      activePeer: {
        ip: '54.37.235.26',
        port: 5500
      },
      peers: [],
    },
    devnet: {
      bip32: {
        public: 0x0488B21E, // base58 will have a prefix 'xpub'
      private: 0x0488ADE4 // base58Priv will have a prefix 'xpriv'
      },
      name: 'devnet',
      nethash: '',
      token: 'DXPX',
      symbol: 'D₱',
      version: 0x4B,
      explorer: 'https://dexplorer.ripaex.io',
      wif: 0xba,
      activePeer: {
        ip: 'node1.dev.ripanet.cloud',
        port: 4100,
      },
      peers: [
      ],
    },
  },
  blockchain: {
    interval: 8,
    delegates: 51,
    date: new Date(Date.UTC(2017, 2, 21, 13, 0, 0, 0)),
  },
};
//# sourceMappingURL=index.js.map

