'use client'
import {useState} from 'react'
import Image from 'next/image'
import {cn} from '@/lib/utils'

const ProductImages = ({images}: { images: string[] }) => {
  const [current, setCurrent] = useState(0)


  return (
    <>
      <div className="space-y-4">
        <Image src={images[current]} alt="product image" width={1000} height={1000}
               className="min-h-[300px] object-cover object-center"/>
      </div>
      <div className="flex">
        {images.map((image, index) => (
          <div key={index} className={cn('cursor-pointer border mr-2 hover:border-yellow-600', index === current && 'border-yellow-500')}
               onClick={() => setCurrent(index)}>
            <Image
              key={index}
              src={image}
              alt="image"
              width={100}
              height={100}

            />
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductImages