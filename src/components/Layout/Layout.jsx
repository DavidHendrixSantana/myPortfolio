import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    return (
        <div style={{ position: 'relative' }}>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
