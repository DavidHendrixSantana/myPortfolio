import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProfile } from '../../store/portfolioSlice';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const profile = useSelector(selectProfile);
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Use environment variables with fallback to window object for GitHub Pages
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || window.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || window.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || window.VITE_EMAILJS_PUBLIC_KEY;

        emailjs
            .sendForm(
                serviceId,
                templateId,
                form.current,
                {
                    publicKey: publicKey,
                }
            )
            .then(
                () => {
                    setSubmitStatus('success');
                    e.target.reset();
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setSubmitStatus('error');
                }
            )
            .finally(() => {
                setIsSubmitting(false);
                // Clear status after 5 seconds
                setTimeout(() => setSubmitStatus(null), 5000);
            });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <Mail className="contact-icon" />
                                <span>{profile.contact.email}</span>
                            </div>
                            <div className="contact-item">
                                <Phone className="contact-icon" />
                                <span>{profile.contact.phone}</span>
                            </div>
                            <div className="contact-item">
                                <MapPin className="contact-icon" />
                                <span>{profile.contact.location}</span>
                            </div>
                        </div>

                        <a href={`mailto:${profile.contact.email}`} className="email-button">
                            Say Hello <Send size={18} />
                        </a>
                    </div>

                    <div className="contact-form-visual">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" name="user_name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="user_email" placeholder="your@email.com" required />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea name="message" placeholder="Hello David, I'd like to discuss..." required></textarea>
                            </div>
                            <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                            {submitStatus === 'success' && (
                                <p className="success-message">Message sent successfully!</p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="error-message">Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
