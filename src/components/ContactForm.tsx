'use client'
import { useState, useEffect } from 'react';
import { FaComment, FaEnvelope, FaUser } from 'react-icons/fa';

interface ContactFormProps {
    form: {
        name: string;
        namePlaceholder: string;
        email: string;
        emailPlaceholder: string;
        message: string;
        messagePlaceholder: string;
        submitButton: string;
        sending: string;
        success: string;
        error: string;
    };
}

export default function ContactForm({ form }: Readonly<ContactFormProps>) {
    const [status, setStatus] = useState('');

    useEffect(() => {
        if (status === 'success' || status.startsWith('error')) {
            const timer = setTimeout(() => {
                setStatus('');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset(); // Reset form on success
            } else {
                const errorData = await response.json();
                setStatus(`error: ${errorData.error}`);
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    const getButtonText = () => {
        if (status === 'sending') return form.sending;
        if (status === 'success') return form.success;
        if (status.startsWith('error')) return form.error;
        return form.submitButton;
    };

    const getButtonClasses = () => {
        const baseClasses = "mx-auto border-2 py-2 px-4 rounded-sm tracking-widest transition-colors duration-300 font-bold gap-2 flex items-center justify-center uppercase";

        if (status === 'sending') {
            return `${baseClasses} border-white/20 text-white/20 hover:bg-white/10 hover:text-black cursor-not-allowed`;
        }
        if (status === 'success') {
            return `${baseClasses} border-green-500 text-green-500 cursor-pointer bg-green-500/10`;
        }
        if (status.startsWith('error')) {
            return `${baseClasses} border-red-500 text-red-500 cursor-pointer bg-red-500/10`;
        }
        return `${baseClasses} border-white text-white hover:bg-white hover:text-black cursor-pointer`;
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 p-8 border border-white/20 rounded-lg bg-white/5">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">{form.name}</label>
                <div className="relative">
                    <input type="text" id="name" name="name" required placeholder={form.namePlaceholder} className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">{form.email}</label>
                <div className="relative">
                    <input type="email" id="email" name="email" required placeholder={form.emailPlaceholder} className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                </div>
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">{form.message}</label>
                <div className="relative">
                    <textarea id="message" name="message" rows={3} required placeholder={form.messagePlaceholder} className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    <FaComment className="absolute left-3 top-4 text-gray-400 w-4 h-4" />
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={getButtonClasses()}
                >
                    {getButtonText()}
                </button>
            </div>
        </form>
    );
}