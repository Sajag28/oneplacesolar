import React from 'react'

const CareerPage = () => {
    return (
        <>
            <h1 className="text-3xl text-center mt-24">We`re Hiring</h1>
            <p className='text-center'>Apply now</p>
            <div className="flex flex-col items-center justify-center mt-2">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-2">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone No.</span>
                            </label>
                            <input type="text" placeholder="Phone no." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <input type="text" placeholder="Message" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit Application</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CareerPage