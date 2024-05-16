import React from 'react'

const Skill = () => {
  return (
    <div>
         <section className="text-gray-700 border-t border-gray-200">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-grey-900">My Skill</h1>
                      <div className="flex flex-wrap -m-4">
                       <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                         <div className="w-12 h-12 mb-3 inline-block"></div>
                          <h2 className="title-font font-medium text-3xl text-gray-900">Java Script</ h2>
                        </div>   
                       </div>
                      </div>
                      <div className="flex flex-wrap -m-4">
                       <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                         <div className="w-12 h-12 mb-3 inline-block"></div>
                          <h2 className="title-font font-medium text-3xl text-gray-900">Type Script</ h2>
                        </div>   
                       </div>
                      </div>
                      <div className="flex flex-wrap -m-4">
                       <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                         <div className="w-12 h-12 mb-3 inline-block"></div>
                          <h2 className="title-font font-medium text-3xl text-gray-900">PostgresQL</ h2>
                        </div>   
                       </div>
                      </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Skill
