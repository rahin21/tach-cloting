import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import mainLogo from '/public/0.webp'

function NavBar() {
	return (
		<nav>
			<ul className='font-bold flex'>
				<li><Link href={'/'}>Home</Link></li>
				<li><Link href={'/shop'}>Shop</Link></li>
				<li><Image src={mainLogo} alt="Logo" /></li>
			</ul>
		</nav>
	)
}

export default NavBar