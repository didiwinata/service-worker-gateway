import React from 'react'
import { Link } from '../components/link.tsx'
import type { ReactElement } from 'react'

export default function About (): ReactElement {
  return (
    <div className='e2e-section-about pa4-l bg-snow mw7 mv4-l center pa4 br2'>
      <h1 className='pa0 f3 ma0 mb4 teal tc'>About the IPFS Gateway and Service Worker</h1>
      <p className='charcoal db pt1 lh-copy mb2'>This page runs an <Link href='https://specs.ipfs.tech/http-gateways'>IPFS HTTP Gateway</Link> within a <Link href='https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API'>Service Worker</Link>. It uses the <Link href='https://github.com/ipfs/helia-verified-fetch'>@helia/verified-fetch</Link> library to retrieve <Link href='https://docs.ipfs.tech/concepts/content-addressing/'>content-addressed</Link> data directly from the IPFS network.</p>
      <p className='charcoal db pt1 lh-copy mb2'><i><span className='f5 ma0 pt3 teal fw4 db'>Note on this Deployment:</span>This is an independent deployment / fork of the official <Link href='https://github.com/ipfs/service-worker-gateway'>IPFS Service Worker Gateway</Link>. It utilizes ~100% of the upstream open-source codebase (powered by Helia) with minor configuration adjustments to route through our own node infrastructure.</i></p><p className='charcoal db pt1 lh-copy mb2'><i>All original UI elements, logos, icons, and trademarks belong to their respective owners, including Protocol Labs and the IPFS Foundation.</i></p>
      <p className='charcoal db pt1 lh-copy mb2'><span className='f5 ma0 pt3 teal fw4 db'>Why?</span> Centralized IPFS HTTP gateways encourage reliance on third parties who may not exist forever.</p>
      <p className='charcoal db pt1 lh-copy mb2'>Instead, running your own <Link href='https://github.com/ipfs/helia'>Helia</Link> node in a service worker improves decentralization since it is able to fetch content directly from other IPFS nodes.</p>
      <p className='charcoal db pt1 lh-copy mb2'>It offers better security over regular HTTP as downloaded data is verified against the hash contained within the requested CID, and also enhanced reliability because it is able to perform retrieval from multiple providers over multiple transports.</p>
      <p className='charcoal db pt1 lh-copy mb2'>All downloaded files are added to the browser cache which encourages data resilience and also makes them available for offline use.</p>
      <p className='charcoal db pt1 lh-copy mb2'><span className='f5 ma0 pt3 teal fw4 db'>How does it work?</span> A Service Worker is registered on the initial page load, and then intercepts HTTP requests for content stored on <Link href='https://docs.ipfs.tech/how-to/address-ipfs-on-web/'>IPFS paths</Link> such as <code>/ipfs/*</code> (immutable) and <code>/ipns/*</code> (mutable). It takes care of IPFS retrieval, verification, UnixFS deserialization, and returns Response objects to the browser.</p>
      <p className='charcoal db pt1 lh-copy mb2'><span className='f5 ma0 pt3 teal fw4 db'>Need more than a browser gateway?</span> This gateway is a convenience, not a replacement. For better performance, offline access, or to help keep content available on the peer-to-peer network, <Link href='https://docs.ipfs.tech/install/'>run your own IPFS node</Link>.</p>
      <p className='charcoal db pt1 lh-copy mb2'><span className='f5 ma0 pt3 teal fw4 db'>Blocking content</span> This gateway uses the <Link href='https://github.com/didiwinata/cid-denylists'>Denylist</Link> blocklist to block content involving phishing, illegal content, and specific requests.</p>
      <p className='charcoal db pt1 lh-copy mb2'><span className='f5 ma0 pt3 teal fw4 db'>Why does "Save As" save this HTML page?</span> Clicking "Save As" on a raw file (image, JSON, video) saves this bootstrap HTML instead of the actual bytes. This is an <Link href='https://issues.chromium.org/issues/40410035'>upstream Chromium bug</Link> that affects all Chromium-based browsers and cannot be fixed from this project.</p>
    </div>
  )
}
