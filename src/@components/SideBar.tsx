"use client";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function SideBar() {

    const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

    return (
        <>
        {/* Sidebar button */}
        <button onClick={() => {
            setSideBarIsOpen(!sideBarIsOpen);
        }} className="flex lg:hidden flex-row items-center justify-center ml-auto">
            <Menu className="w-6 h-6 text-gray-700" />
        </button>

        {/* Sidebar content */}
        <AnimatePresence>
            {sideBarIsOpen && (
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="h-screen w-screen fixed top-0 left-0 bg-white z-50 flex flex-col p-4"
                >
                    <button
                        className="absolute top-4 right-4 text-gray-700"
                        onClick={() => setSideBarIsOpen(false)}
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <nav className="flex flex-col gap-4">
                        <a onClick={() => {
                            setSideBarIsOpen(false);
                        }} href="#home" className="text-lg font-bold">Home</a>
                        <a onClick={() => {
                            setSideBarIsOpen(false);
                        }} href="#about" className="text-lg font-bold">About Us</a>
                        <a onClick={() => {
                            setSideBarIsOpen(false);
                        }} href="#meet" className="text-lg font-bold">Meet the Team</a>
                        <a onClick={() => {
                            setSideBarIsOpen(false);
                        }} href="#contact" className="text-lg font-bold">Contact</a>
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
        </>
    )
}