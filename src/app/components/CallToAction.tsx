import React from 'react'

export default function CallToAction() {
  return (
    <section className="bg-blue-900 text-white py-16 text-center">
    <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
    <form className="flex flex-col md:flex-row justify-center items-center">
      <input type="email" placeholder="Email" className="p-3 rounded-lg text-gray-900 mb-4 md:mb-0 md:mr-4"/>
      <button className="px-8 py-4 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600">
        Contact Us
      </button>
    </form>
  </section>
  )
}
