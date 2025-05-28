"use client"
import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");

    const validate = () => {
        const errors = {};
        if (!formData.name.trim()) errors.name = "Name is required";
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.message.trim()) errors.message = "Message is required";
        return errors;
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        setIsSubmitting(true);
        setSuccessMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSuccessMsg("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setErrors({ submit: "Failed to send message. Please try again later." });
            }
        } catch (err) {
            setErrors({ submit: "Something went wrong. Please try again later." });
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <section className="contact section" id="contact">
            <h2 className="section-title mb-6">Contact Me</h2>
            <form onSubmit={handleSubmit} className="contact__form max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md space-y-5">
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className={`contact__input w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.name ? "border-red-500" : "border-gray-300"
                            }`}
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                    />
                    {errors.name && <p className="text-red-500 mt-1 text-sm">{errors.name}</p>}
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className={`contact__input w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.email ? "border-red-500" : "border-gray-300"
                            }`}
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                    />
                    {errors.email && <p className="text-red-500 mt-1 text-sm">{errors.email}</p>}
                </div>
                <div>
                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        className={`contact__input w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${errors.message ? "border-red-500" : "border-gray-300"
                            }`}
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                    />
                    {errors.message && <p className="text-red-500 mt-1 text-sm">{errors.message}</p>}
                </div>

                {errors.submit && <p className="text-red-600 text-center">{errors.submit}</p>}
                {successMsg && <p className="text-green-600 text-center">{successMsg}</p>}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>
        </section>
    );
}
