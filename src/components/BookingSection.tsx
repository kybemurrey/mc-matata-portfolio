import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { toast } from "sonner";

const eventTypes = [
  "Wedding / Koito",
  "Corporate Event",
  "Birthday Party",
  "Graduation",
  "Road Show",
  "Homecoming",
  "Other",
];

const BookingSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show a toast. Backend will be added with Cloud.
    toast.success("Booking request sent! MC Matata will get back to you shortly.");
    setForm({ name: "", email: "", phone: "", eventType: "", eventDate: "", location: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-display text-primary tracking-[0.3em] text-sm mb-4">LET'S WORK TOGETHER</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            BOOK <span className="text-gradient-gold">MC MATATA</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body"
            />
            <select
              name="eventType"
              required
              value={form.eventType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground focus:outline-none focus:border-primary transition-colors font-body"
            >
              <option value="" disabled>Select Event Type</option>
              {eventTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="date"
              name="eventDate"
              required
              value={form.eventDate}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground focus:outline-none focus:border-primary transition-colors font-body"
            />
            <input
              type="text"
              name="location"
              placeholder="Event Location"
              required
              value={form.location}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body"
            />
          </div>
          <textarea
            name="message"
            placeholder="Tell us more about your event..."
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body resize-none"
          />
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground font-display font-semibold tracking-widest text-sm px-8 py-4 rounded-sm hover:opacity-90 transition-opacity"
          >
            SEND BOOKING REQUEST <Send size={16} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingSection;
