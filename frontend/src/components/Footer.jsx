import { Link } from "react-router-dom";
import { Home, BookOpen, Info, Heart, Github, Shield, ScrollText, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();


    const socialLinks = [
        {
            name: "Github",
            icon: <Github className="w-6 h-6" />,
            to: "https://github.com/vinit105/ideaVault"
        },
        {
            name: "Twitter",
            icon: <Twitter className="size-6" />,
            to: "#"
        },
        {
            name: "LinkedIn",
            icon: <Linkedin className="size-6" />,
            to: "#"
        }
    ]

    const quickLinks = [
        {
            name: "Home",
            href: "/",
            icon: Home,
            color: "text-blue-500",
        },
        {
            name: "Browse Ideas",
            href: "/ideas",
            icon: BookOpen,
            color: "text-indigo-500",
        },
        {
            name: "About",
            href: "/about",
            icon: Info,
            color: "text-purple-500",
        },
    ];

    const legalLinks = [
        {
            name: "Privacy Policy",
            href: "#",
            icon: Shield,
            color: "text-red-400",
        },
        {
            name: "Terms & Conditions",
            href: "#",
            icon: ScrollText,
            color: "text-yellow-400",
        },
    ];

    return (
        <footer className="bg-white text-gray-600 pt-12 pb-6 border-t border-blue-100">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                    {/* Brand Info */}
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                            IdeaVault
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-md">
                            IdeaVault is a platform to license your software project ideas with proof and attribution.
                            Protect your creativity and earn recognition with our 1% model.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            {socialLinks.map((socialLink) => (
                                <a
                                    key={socialLink.name}
                                    href={socialLink.to}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-black transition-colors duration-200"
                                >
                                    {socialLink.icon}
                                </a>

                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gray-800 font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <link.icon className={`w-4 h-4 ${link.color}`} />
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-gray-800 font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {legalLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2 group"
                                    >
                                        <link.icon className={`w-4 h-4 ${link.color}`} />
                                        <span>{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-center md:text-left text-sm text-gray-500">
                            <p>© {currentYear} IdeaVault. All rights reserved.</p>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                            <span>Made with</span>
                            <Heart className="w-4 h-4 mx-1 text-red-500" />
                            <span>
                                by{" "}
                                <a
                                    href="https://github.com/vinit105/ideaVault"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-600 transition-colors"
                                >
                                    vinit105
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
