import React from 'react'

const Section = () => {
  return (
    <section className="text-gray-700">
        <div className="flex container mx-auto py-20 px-5 items-center">
            <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 lg:pl-10 md:pl-6">
                <h1 className="text-3xl sm:text-6xl text-gray-600 font-medium mb-4">
                    Hi!
                    <br />
                    I'm Erina Hasegawa
                    <br />
                    Engineer
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    I'm already learning programming at boot camp.
                    </p>
            </div>
            <div>
           <img src="/picture.jpg" alt="Erina Hasegawa" className="w-35 h-85"/>
        </div>
        </div>


    </section>
  )
}

export default Section
