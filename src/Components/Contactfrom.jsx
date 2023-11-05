import React from 'react'

const ContactForm = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-2">
            <h1 className="text-3xl font-semibold mb-8 lg:text-4xl text-center">
                Contact Us
            </h1>
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
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" placeholder="Address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Project Count</span>
                        </label>
                        <input type="text" placeholder="Solar project count" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Documents</span>
                        </label>
                        <input type="text" placeholder="Other related documents" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Get Quote</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
