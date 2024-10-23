import React from 'react'
import Image from 'next/image'
export default function ProjectSection() {
  return (
    <section className="bg-gray-100 py-16">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-3xl font-bold mb-4">Single Family</h3>
        <p className="text-gray-600 mb-8">
          Catherine Street Residence: A creative blend of modern design with efficiency in mind. Bringing your dream home to life.
        </p>
        <button className="px-8 py-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
          View more details
        </button>
      </div>
      <Image src="https://i.pinimg.com/564x/0d/37/34/0d3734b67837f8fcd3d528d9004a8583.jpg"  width={700}   height={1022} alt="Single Family Project" className="w-full rounded-lg shadow-md" />
    </div>
  </section>
  )
}
