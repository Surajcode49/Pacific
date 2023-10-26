import React from 'react'

const Section1 = () => {
    return (
        <section className='heroSection'>
            <div className="row d-flex flex-row justify-content-between align-items-center  m-0 p-0">
                <div className="left col-12 col-md-6 p-4 ">
                    <h1 className='heroHeading'>Lorem ipsum dolor sit amet.
                    </h1>
                    <p className="heroText">Lorem ipsum dolor sit amet consectetur.</p>
                        <form >
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search bar"
                                    aria-label="Search bar"
                                    aria-describedby="button-addon2"
                                    style={{minHeight: "5rem"}}
                                />
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    id="button-addon2"
                                >
                                    Button
                                </button>
                            </div>
                        </form>
                </div>
                <div className="right col-12 col-md-6 p-4">
                    <img src="https://assets-global.website-files.com/64ea623865b739aa36e8e292/64eb1b3ff9b5b3f9cad79195_photo-3-p-800.png" alt="" srcset="" className='heroImage ' />
                </div>
            </div>
        </section>
    )
}

export default Section1