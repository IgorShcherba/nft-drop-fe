import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

export default function NFTDropPape() {
  //Auth

  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()

  const onSigninClick = () => {
    if (!address) {
      connectWithMetamask()
    } else {
      disconnect()
    }
  }
  console.log(address)

  return (
    //   Left
    <div className="flex h-screen grid-cols-10 flex-col lg:grid">
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <img
              src="https://links.papareact.com/8sg"
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
            />
          </div>
          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">Blabla Apes</h1>
            <h2 className="text-xl text-gray-300">A collection of apes</h2>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* Header  */}
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{' '}
            <span className="font-extrabold underline decoration-pink-600/50">
              Blabla
            </span>{' '}
            NFT Market Place
          </h1>
          <button
            onClick={onSigninClick}
            className="rounded-full bg-rose-400 px-4 py-2 text-xs text-white lg:py-3 lg:px-5 lg:text-base"
          >
            {address ? 'Sign out' : 'Sign in'}
          </button>
        </header>
        <hr className="my-2 border" />
        {address && (
          <p className="text-center text-sm text-rose-300">
            You're logged in with wallet {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        )}
        {/* Content  */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
          <img
            src="https://links.papareact.com/bdy"
            alt=""
            className="w-80 object-cover pb-10 lg:h-40"
          />
          <h1 className="font-3xl lg:text-extrabold font-bold lg:text-5xl">
            Example of a NFT collection drop app
          </h1>
          <p className="mt-2 text-xl text-green-500">13 / 21 NFT's claimed</p>
        </div>
        {/* Mint button  */}
        <button className="mt-10 h-16 w-full rounded-full bg-red-600 font-bold text-white">
          Mint NFT (0.01 ETH)
        </button>
      </div>
    </div>
  )
}
