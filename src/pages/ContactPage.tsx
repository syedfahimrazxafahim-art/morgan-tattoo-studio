import React, { useState } from 'react';
import { Phone, MapPin, Clock, ArrowUpRight, Send, CheckCircle2, Sparkles, Calendar } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';
import { LiquidText } from '../components/ui/LiquidText';
import { CornerButton } from '../components/ui/CornerButton';

interface ContactPageProps {
  onBookSession: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBookSession }) => {
  const [formSent, setFormSent] = useState(false);
  const [msgData, setMsgData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setMsgData({ name: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#080809]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#c5a059]">
            Direct Inquiries & Location
          </span>
          <div className="mt-3">
            <LiquidText
              text="Contact Morgan Tattoo Studio"
              as="h1"
              className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading text-white"
              highlightWords={['Morgan', 'Tattoo', 'Studio']}
              highlightClassName="text-[#c5a059]"
            />
          </div>
          <p className="mt-4 text-sm sm:text-base text-zinc-300">
            Located in Los Angeles, California. We operate private studio sessions by appointment to deliver unhurried, personalized tattoo craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Studio Info Details (Col 1-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#0e0e12] border border-zinc-800 shadow-2xl space-y-6">
              <div className="flex items-center gap-3 pb-6 border-b border-zinc-800">
                <img
                  src={STUDIO_INFO.logoUrl}
                  alt="Logo"
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-[#c5a059]"
                />
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">Morgan Tattoo Studio</h3>
                  <p className="text-xs text-[#c5a059]">Los Angeles, California</p>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[#c5a059]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 uppercase tracking-wider block">Telephone / SMS</span>
                    <a
                      href={STUDIO_INFO.phoneHref}
                      className="text-base font-semibold text-white hover:text-[#c5a059] transition-colors"
                    >
                      {STUDIO_INFO.phone}
                    </a>
                    <p className="text-[11px] text-zinc-500">Tap to call directly</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[#c5a059]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 uppercase tracking-wider block">Location</span>
                    <p className="text-sm font-semibold text-white">Los Angeles, California</p>
                    <p className="text-[11px] text-zinc-500">Exact studio address provided upon confirmed appointment</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[#c5a059]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 uppercase tracking-wider block">Operating Hours</span>
                    <ul className="text-xs text-zinc-300 space-y-1 mt-1">
                      {STUDIO_INFO.hours.map((h, i) => (
                        <li key={i}>
                          <span className="text-white font-medium">{h.day}:</span> {h.hours}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Social Channels (Facebook only) */}
              <div className="pt-4 border-t border-zinc-800">
                <span className="text-xs text-zinc-400 uppercase tracking-wider block mb-3">Official Social Profile</span>
                <a
                  href={STUDIO_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#c5a059] transition-colors group"
                >
                  <span className="text-sm font-medium text-white group-hover:text-[#c5a059]">
                    Morgan Tattoo Studio on Facebook
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#c5a059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Form & Booking Prompt (Col 6-12) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0e0e12] border border-zinc-800 shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#c5a059]">
                  Fast Studio Message
                </span>
                <h3 className="mt-1 text-2xl font-heading font-bold text-white">
                  Send a Quick Question
                </h3>
                <p className="mt-1 text-xs text-zinc-400">
                  Have a quick inquiry regarding sizing, schedule, or consultations in Los Angeles? Drop a message below.
                </p>
              </div>

              {formSent ? (
                <div className="p-6 rounded-2xl bg-zinc-900 border border-[#c5a059]/60 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-[#c5a059] mx-auto" />
                  <h4 className="text-base font-heading font-bold text-white">Message Transmitted</h4>
                  <p className="text-xs text-zinc-300">
                    Thank you for reaching out to Morgan Tattoo Studio. We will follow up via your phone number promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleMessageSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sam Taylor"
                        value={msgData.name}
                        onChange={(e) => setMsgData({ ...msgData, name: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#c5a059] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. (213) 555-0123"
                        value={msgData.phone}
                        onChange={(e) => setMsgData({ ...msgData, phone: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#c5a059] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Your Message or Question *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Ask about availability, concept feasibility, pricing estimates..."
                      value={msgData.message}
                      onChange={(e) => setMsgData({ ...msgData, message: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#c5a059] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <p className="text-[11px] text-zinc-500">Private & direct studio contact.</p>
                    <CornerButton
                      type="submit"
                      size="md"
                      variant="primary"
                      icon={<Send className="w-3.5 h-3.5" />}
                    >
                      Send Message
                    </CornerButton>
                  </div>
                </form>
              )}
            </div>

            {/* Direct Booking Hero Banner */}
            <div className="p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-heading font-bold text-white">Ready for a full tattoo consultation?</h4>
                <p className="text-xs text-zinc-400 mt-1">Submit your reference images, placement, and sizing on our booking portal.</p>
              </div>
              <CornerButton
                size="md"
                variant="primary"
                onClick={onBookSession}
                icon={<Calendar className="w-4 h-4" />}
              >
                Open Booking Form
              </CornerButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
