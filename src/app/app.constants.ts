// BLOCKCHAIN
export const BLOCKCHAIN_PREMINNED = 125000000;

// WALLET
export const ARKTOSHI_DP = 8;
export const WALLET_UNIT_TO_SATOSHI = 100000000;
export const WALLET_REFRESH_PRICE_MILLISECONDS = 500 * 1000;
export const WALLET_REFRESH_TRANSACTIONS_MILLISECONDS = 10 * 1000;
export const WALLET_MIN_NUMBER_CONFIRMATIONS = 51;
export const BIP39_DOCUMENTATION_URL = 'https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki';

// TRANSACTION SEND
export const TRANSACTION_ADDRESS_SIZE = 20;

// STORAGE
export const STORAGE_MARKET_TICKER = 'market_ticker';
export const STORAGE_MARKET_HISTORY = 'market_history';
export const STORAGE_LOGIN = 'login';
export const STORAGE_PROFILES = 'profiles';
export const STORAGE_NETWORKS = 'network';
export const STORAGE_SETTINGS = 'settings';
export const STORAGE_ACTIVE_PROFILE = 'active_profile';
export const STORAGE_INTROSEEN = 'intro';
export const STORAGE_DELEGATES = 'delegates';
export const STORAGE_FEES = 'fees';
export const STORAGE_MASTERPASSWORD = 'Ripamasterpassword';
export const STORAGE_AUTH_UNLOCK_TIMESTAMP = 'auth_timestamp';
export const STORAGE_AUTH_ATTEMPTS = 'auth_attempts';

// TOAST
export const TOAST_HIDE_DELAY = 3000;
export const TOAST_POSITION = 'bottom';

// COIN MARKETCAP API
export const API_MARKET_URL = 'https://min-api.cryptocompare.com';
export const API_MARKET_HISTORY_ENDPOINT = 'data/histoday?allData=true&fsym=';
export const API_MARKET_TICKER_ENDPOINT = 'data/pricemultifull?fsyms=';

// GENERIC
export const VIBRATION_TIME_MS = 30;
export const VIBRATION_TIME_LONG_MS = 200;
export const APP_TIMEOUT_DESTROY = 60000;

// PIN
export const PIN_ATTEMPTS_LIMIT = 3;
export const PIN_ATTEMPTS_TIMEOUT_MILLISECONDS = 30 * 1000;

// ARK
export const PRIVACY_POLICY_URL = 'https://ripaex.io/PrivacyPolicy.txt';
export const URI_QRCODE_SCHEME_PREFIX = 'ripa:';
export const NUM_ACTIVE_DELEGATES = 51;

// WALLETS
export const DEFAULT_NETWORKS = {
    ripaex: {
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
      }
    },
    ark: {
      bip32: {
          private: 0x2bf4530,
          public: 0x2bf4968,
      },
      name: 'ark',
      nethash: '6e84d08bd299ed97c212c886c98a57e36545c8f5d645ca7eeae63a8bd62d8988',
      token: 'ARK',
      symbol: 'Ѧ',
      version: 0x17,
      explorer: 'https://explorer.ark.io',
      wif: 0xaa,
      activePeer: {
          ip: 'node1.arknet.cloud',
          port: 4001,
      }
    },
    kapu: {
      bip32: {
        private: 0x2bf4530,
        public: 0x2bf4968,
      },
      logo: 'https://www.kapu.one/assets/images/logo.png',
      name: 'kapu',
      nethash: '313ea34c8eb705f79e7bc298b788417ff3f7116c9596f5c9875e769ee2f4ede1',
      token: 'KAPU',
      symbol: 'ʞ',
      version: 0x2D,
      explorer: 'http://explorer.kapu.one',
      wif: 0xaa,
      activePeer: {
        ip: '51.15.198.173',
        port: 4600,
      }
    }
};
