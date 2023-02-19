export const truncateAddress = (address: string) => {
  if (!address) return 'No Account'
  const match = address.match(/^(0x[a-zA-Z0-9]{2})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/)
  if (!match) return address
  return `${match[1]}…${match[2]}`
}

export const checkIfWalletConnected = async (): Promise<string> => {
  const { ethereum } = window
  if (ethereum) {
    return new Promise(async (resolve, reject) => {
      if (ethereum) {
        ethereum
          .request({
            method: 'eth_accounts',
          })
          .then((accounts: any) => {
            if (accounts.length !== 0) {
              const account = accounts[0]
              console.log(`found account with address`, account)
              // return account
              resolve(account)
            } else {
              reject('address not found')
            }
          })
      } else {
        reject(``)
      }
    })
  } else {
    return ''
  }
}

export function getDefalutLang() {
  try {
    const lang = localStorage.getItem('classical_i18n_key') ?? 'en_US'
    return lang
  } catch (error) {
    return 'en_US'
  }
}
