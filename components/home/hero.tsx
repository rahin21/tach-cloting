import React from 'react'
import image_1 from '/public/home/hero.jpg'
import Image from 'next/image'
function Hero() {
	return (
		<div>
			<Image src={image_1} alt='image'/>
		</div>
	)
}

export default Hero