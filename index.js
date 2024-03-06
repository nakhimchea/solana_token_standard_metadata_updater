import { createUmi } from '@metaplex-foundation/umi-bundle-defaults'
import { mplTokenMetadata, createNft, fetchDigitalAsset } from '@metaplex-foundation/mpl-token-metadata'

// Import NFT worker
import { generateSigner, percentAmount } from '@metaplex-foundation/umi'

// Use the RPC endpoint of your choice.
const umi = createUmi('http://127.0.0.1:8899').use(mplTokenMetadata())

// NFT Signer
const mint = generateSigner(umi)
await createNft(umi, {
  mint,
  name: 'My NFT',
  uri: 'https://example.com/my-nft.json',
  sellerFeeBasisPoints: percentAmount(0),
}).sendAndConfirm(umi)

const asset = await fetchDigitalAsset(umi, mint.publicKey)