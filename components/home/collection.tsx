import Link from 'next/link'
import React from 'react'
import kints from '/public/home/kint.jpg'
import dresses from '/public/home/dresses.jpg'
import tops from '/public/home/tops.jpg'
import Image from 'next/image'
function Collections() {
	return (
		<div className='flex md:flex-row flex-col text-end justify-between items-center gap-5 lg:m-20 m-5'>
			<Link href={'/tach-kints'} className=''>
				<Image src={kints} alt='kints' height={500} />
				<p className='text-lg my-4'>Knits</p>
				<p className='text-lg my-4'>$212</p>
			</Link>
			<Link href={'/dresses'} className=''>
				<Image src={dresses} alt='dresses' height={500} />
				<p className='text-lg my-4'>Dresses</p>
				<p className='text-lg my-4'>$212</p>
			</Link>
			<Link href={'/tops'} className=''>
				<Image src={tops} alt='tops' height={500} />
				<p className='text-lg my-4'>Tops</p>
				<p className='text-lg my-4'>$212</p>
			</Link>
		</div>
	)
}

export default Collections