![Ripa Mobile](./banner_medium_mobile.jpg)

[![Build Status](https://travis-ci.org/ArkEcosystem/ark-mobile.svg?branch=master)](https://travis-ci.org/ArkEcosystem/ark-mobile)

# Ripa Mobile
> A Wallet for Everyone

Ripa’s mobile wallet is a hybrid application (using the same codebase for Android and iOS which helps with coordinated development). Created using Ionic framework and ARK’s [TypeScript API](https://github.com/ArkEcosystem/ark-ts) to interact with the ARK network via your mobile phone, anytime, anywhere (as long as you have an internet connection).

## Download

- [Google Play](https://play.google.com/store/apps/details?id=io.ripa.wallet.mobile)
- App Store # coming soon


## Features

- Import your existing passphrase (import by QR Scanner or write/paste your passphrase).
- Generate a new passphrase.
- Encrypt access to your profile with a custom 6 digit PIN (AES256+PBKDF2).
- Most transaction types are available: send, receive, vote, unvote, register a delegate.
- Connects to both mainnet and devnet.
- Option for additional profiles (separate profiles for different Ripa addresses or networks).
- Option to add contacts and easily transact with them.
- Total balance of your combined Ripa addresses.
- Wallet backup - input your selected PIN to decrypt your wallet and gain view of your private data.
- Change PIN - if you want to change your encryption/decryption PIN you can easily do so..
- Clear Data — you can clear all your data from the phone.
- Overview of network status with an option to change peer.
- Current market value, along with weekly movements.
- Support for showing data in different FIAT currencies.

## Build

First follow the steps below to install the dependencies:

```bash
$ npm install -g ionic cordova@7.1.0
$ npm install
$ ionic cordova prepare
```

Run on device:

```bash
$ ionic cordova run ios
$ ionic cordova run android
```

Debug in browser:

```bash
$ npm run ionic:serve
```

## Testing

To run the unit tests:
```bash
$ npm test
```

To run the unit tests and watch them:
```bash
$ npm run test:unit
```

To run the unit tests and generate a coverage report:
```bash
$ npm run test:coverage
```

To run the E2E (end to end) tests:
```bash
$ npm run test:e2e
```

## Contributing

- If you find any bugs, submit an [issue](../../issues) or open [pull-request](../../pulls), helping us catch and fix them.
- Engage with other users and developers on [RIPA Slack](https://ripaex.slack.com).
- Join to our [gitter](https://gitter.im/ripaex/Lobby).
- [Contribute bounties](./CONTRIBUTING.md).
- [Help translate](./TRANSLATING.md).

## Authors
- Lúcio Rubens <lucio@ark.io>
- Alex Barnsley <alex@ark.io>
- Bledar Gogaj <gobled@gmail.com>

## License

Ripa Mobile is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
