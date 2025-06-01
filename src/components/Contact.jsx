import React from "react";

export default function Contact() {
    return (
        <section id="contact" className=" text-light px-6 py-24">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Contact Us</h2>
                <p className="text-light-soft mb-12 text-center">
                    Do you have a question about your system? Need support? We are here.
                </p>

                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-dark text-light border border-dark-contrast px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Full Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-dark text-light border border-dark-contrast px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="example@mail.com"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium">
                            Your Message
                        </label>
                        <textarea
                            id="message"
                            rows="5"
                            className="w-full bg-dark text-light border border-dark-contrast px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                            placeholder="Hello, I have a question about the system..."
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-primary hover:bg-primary-light text-light font-semibold px-8 py-3 rounded-xl shadow-lg transition"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
