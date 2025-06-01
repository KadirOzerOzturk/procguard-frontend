import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-dark-contrast text-light-soft py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About */}
                <div>
                    <h2 className="text-white text-xl font-bold mb-4">ProcGuard</h2>
                    <p className="text-sm">
                        ProcGuard is a modern solution offering system monitoring, resource control, and security awareness. CPU, RAM, and process tracking are now much easier.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
                        <li><a href="#features" className="hover:text-blue-400">Features</a></li>
                        <li><a href="#how" className="hover:text-blue-400">How It Works</a></li>
                        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="https://github.com/KadirOzerOzturk" className="hover:text-blue-400" aria-label="GitHub">
                            <FaGithub />

                        </a>
                        <a href="https://www.linkedin.com/in/kadirozerozturk/" className="hover:text-blue-400" aria-label="LinkedIn">
                            <FaLinkedin />

                        </a>
                        
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 text-center text-sm text-gray-500">
                &copy; 2025 ProcGuard. All rights reserved.
            </div>
        </footer>
    );
}
