"use client"
import { useState } from "react"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"

import { SanityProduct } from "@/config/inventory"
import { shimmer, toBase64 } from "@/lib/image"

interface Props {
  product: SanityProduct
}

export function ProductGallery({ product }: Props) {

  const { images, name } = product

  const [selectedImage, setSetselectedImage] = useState(images[0])

  return (
    <div className="flex flex-col-reverse">
      {/* Image Grid */}
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <ul className="grid grid-cols-4 gap-6">
          {images.map((image,i) => (
            <div
              key={i}
              className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase hover:bg-gray-50"
            >
              <span className="absolute inset-0 overflow-hidden rounded-md">
                <Image
                 key={i}
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(20, 200))}`}
                  onClick={() => setSetselectedImage(image)}
                  src={image && urlForImage(image).url()}
                  width={200}
                  height={200}
                  alt={name}
                  className="h-full w-full object-cover object-center"
                />
              </span>
              {image === selectedImage && <span
                className="pointer-events-none absolute inset-0 rounded-md ring-4 ring-indigo-500 ring-offset-2"
                aria-hidden="true"
              />
              }
            </div>
          ))}
        </ul>
      </div>

      {/* Main Image */}
      <div className="aspect-h-1 aspect-w-1 w-full">
        <Image
          priority
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(20, 200))}`}
          src={urlForImage(selectedImage).url()}
          alt={`Main Image - ${name} `}
          width={600}
          height={750}
          className="h-full w-full border-2 border-gray-200 object-cover object-center shadow-sm dark:border-gray-800 sm:rounded-lg"
        />
      </div>
    </div>
  )
}
