import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Phone, Upload, Image as ImageIcon, X, CheckCircle2, ShieldAlert, Sparkles, Clock, MapPin, ArrowRight } from 'lucide-react';
import { STUDIO_INFO, TattooItem, TATTOO_STYLES } from '../data/studioData';
import { LiquidText } from '../components/ui/LiquidText';
import { CornerButton } from '../components/ui/CornerButton';

interface BookingPageProps {
  initialArtwork?: TattooItem | null;
  initialStyle?: string | null;
  onNavigateHome: () => void;
}

export const BookingPage: React.FC<BookingPageProps> = ({
  initialArtwork,
  initialStyle,
  onNavigateHome
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredDate: '',
    timePreference: 'Afternoon (1pm - 5pm)',
    tattooStyle: initialStyle || (initialArtwork?.category || 'Black & Grey Realism'),
    placement: initialArtwork?.placement || '',
    approximateSize: 'Medium (4" - 7")',
    tattooIdea: initialArtwork ? `Inspired by "${initialArtwork.title}" — ` : '',
    budgetRange: '$400 - $800',
    isFirstTattoo: 'No',
    medicalNoticeAccepted: false,
  });

  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; preview: string }[]>(
    initialArtwork
      ? [{ name: initialArtwork.title, preview: initialArtwork.imageUrl }]
      : []
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<{
    referenceCode: string;
    submittedAt: string;
    details: typeof formData;
  } | null>(null);

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialArtwork) {
      setFormData((prev) => ({
        ...prev,
        tattooStyle: initialArtwork.category,
        placement: initialArtwork.placement,
        tattooIdea: `Inspired by portfolio piece: "${initialArtwork.title}". `,
      }));
      setUploadedFiles([{ name: initialArtwork.title, preview: initialArtwork.imageUrl }]);
    } else if (initialStyle) {
      setFormData((prev) => ({
        ...prev,
        tattooStyle: initialStyle,
      }));
    }
  }, [initialArtwork, initialStyle]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const newFiles = filesArray.map((file) => ({
        name: file.name,
        preview: URL.createObjectURL(file),
      }));
      setUploadedFiles((prev) => [...prev, ...newFiles].slice(0, 4));
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errors.fullName = 'Please provide your full name.';
    if (!formData.phone.trim()) errors.phone = 'Please provide a valid phone number.';
    if (!formData.tattooIdea.trim()) errors.tattooIdea = 'Please describe your tattoo concept.';
    if (!formData.medicalNoticeAccepted) {
      errors.medicalNoticeAccepted = 'Please acknowledge that you are 18+ and ready for consultation.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const refCode = `MTS-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedInquiry({
        referenceCode: refCode,
        submittedAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
        details: { ...formData },
      });
      setIsSubmitting(false);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 900);
  };

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[#080809]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#c5a059]">
            Private Consultation Request
          </span>
          <div className="mt-3">
            <LiquidText
              text="Book a Tattoo Session"
              as="h1"
              className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading text-white"
              highlightWords={['Book', 'Tattoo', 'Session']}
              highlightClassName="text-[#c5a059]"
            />
          </div>
          <p className="mt-4 text-sm sm:text-base text-zinc-300">
            Submit your concept, placement, and reference imagery for Morgan Tattoo Studio in Los Angeles. We review every inquiry individually.
          </p>
        </div>

        {/* Prototype Notice Disclaimer */}
        <div className="mb-8 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-400 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-4 h-4 text-[#c5a059] shrink-0" />
            <span>
              <strong className="text-zinc-200">Prototype Booking Portal:</strong> Submitting this inquiry will generate an official consultation inquiry summary without charging a fee.
            </span>
          </div>
          <a
            href={STUDIO_INFO.phoneHref}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#c5a059] hover:underline shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{STUDIO_INFO.phone}</span>
          </a>
        </div>

        {/* Form or Confirmation View */}
        <AnimatePresence mode="wait">
          {!submittedInquiry ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              onSubmit={handleSubmit}
              className="p-6 sm:p-10 rounded-3xl bg-[#0e0e12] border border-zinc-800 shadow-2xl space-y-8"
            >
              {/* Section 1: Client Details */}
              <div className="space-y-4">
                <h3 className="text-base font-heading font-bold text-white uppercase tracking-wider pb-2 border-b border-zinc-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c5a059]" />
                  <span>1. Contact & Personal Details</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jordan Miller"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full bg-zinc-900 border ${
                        formErrors.fullName ? 'border-red-500' : 'border-zinc-800 focus:border-[#c5a059]'
                      } rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors`}
                    />
                    {formErrors.fullName && (
                      <p className="text-[11px] text-red-400 mt-1">{formErrors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Phone Number (Clickable SMS / Call) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (310) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full bg-zinc-900 border ${
                        formErrors.phone ? 'border-red-500' : 'border-zinc-800 focus:border-[#c5a059]'
                      } rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors`}
                    />
                    {formErrors.phone && (
                      <p className="text-[11px] text-red-400 mt-1">{formErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. jordan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#c5a059] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Section 2: Tattoo Concept & Sizing */}
              <div className="space-y-4 pt-4">
                <h3 className="text-base font-heading font-bold text-white uppercase tracking-wider pb-2 border-b border-zinc-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c5a059]" />
                  <span>2. Tattoo Specifications</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Desired Tattoo Style
                    </label>
                    <select
                      value={formData.tattooStyle}
                      onChange={(e) => setFormData({ ...formData, tattooStyle: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#c5a059] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="Black & Grey Realism">Black & Grey Realism</option>
                      <option value="Fine-Line & Dotwork">Fine-Line & Dotwork</option>
                      <option value="Illustrative Realism">Illustrative Realism</option>
                      <option value="Dark Art & Custom">Dark Art & Custom</option>
                      <option value="Cover-Up / Restoration">Cover-Up / Restoration Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Body Placement
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Forearm, Ribs, Thigh, Shoulder"
                      value={formData.placement}
                      onChange={(e) => setFormData({ ...formData, placement: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#c5a059] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Approximate Size
                    </label>
                    <select
                      value={formData.approximateSize}
                      onChange={(e) => setFormData({ ...formData, approximateSize: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#c5a059] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="Small / Micro (1-3 inches)">Small / Micro (1-3 inches)</option>
                      <option value="Medium (4-7 inches)">Medium (4-7 inches)</option>
                      <option value="Large (8-12 inches)">Large (8-12 inches)</option>
                      <option value="Full Sleeve / Backpiece Project">Full Sleeve / Backpiece Project</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Describe Your Idea & Story *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share any symbols, meaning, mood, specific elements you want included, or if you are continuing an existing project..."
                    value={formData.tattooIdea}
                    onChange={(e) => setFormData({ ...formData, tattooIdea: e.target.value })}
                    className={`w-full bg-zinc-900 border ${
                      formErrors.tattooIdea ? 'border-red-500' : 'border-zinc-800 focus:border-[#c5a059]'
                    } rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors`}
                  />
                  {formErrors.tattooIdea && (
                    <p className="text-[11px] text-red-400 mt-1">{formErrors.tattooIdea}</p>
                  )}
                </div>

                {/* Reference Images Upload Dropzone */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Reference Images or Inspiration (Max 4)
                  </label>
                  <div className="border-2 border-dashed border-zinc-800 hover:border-[#c5a059]/60 rounded-2xl p-6 text-center transition-colors bg-zinc-950/60">
                    <input
                      type="file"
                      id="ref-upload"
                      multiple
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="ref-upload"
                      className="flex flex-col items-center justify-center cursor-pointer"
                    >
                      <Upload className="w-8 h-8 text-[#c5a059] mb-2" />
                      <span className="text-xs font-semibold text-zinc-200">
                        Click to upload reference photos
                      </span>
                      <span className="text-[11px] text-zinc-400 mt-0.5">
                        PNG, JPG, HEIC up to 10MB
                      </span>
                    </label>

                    {uploadedFiles.length > 0 && (
                      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                        {uploadedFiles.map((file, idx) => (
                          <div
                            key={idx}
                            className="relative w-20 h-20 rounded-lg overflow-hidden border border-zinc-700 bg-zinc-900 group"
                          >
                            <img
                              src={file.preview}
                              alt={file.name}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => removeFile(idx)}
                              className="absolute top-1 right-1 p-1 rounded-full bg-black/80 text-white hover:text-red-400 transition-colors"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Section 3: Scheduling Preferences */}
              <div className="space-y-4 pt-4">
                <h3 className="text-base font-heading font-bold text-white uppercase tracking-wider pb-2 border-b border-zinc-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c5a059]" />
                  <span>3. Scheduling & Budget</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Preferred Date Window
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#c5a059] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Preferred Time
                    </label>
                    <select
                      value={formData.timePreference}
                      onChange={(e) => setFormData({ ...formData, timePreference: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#c5a059] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="Morning (11am - 1pm)">Morning (11am - 1pm)</option>
                      <option value="Afternoon (1pm - 5pm)">Afternoon (1pm - 5pm)</option>
                      <option value="Evening (5pm - 8pm)">Evening (5pm - 8pm)</option>
                      <option value="Flexible / Any Time">Flexible / Any Time</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                      Estimated Budget Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#c5a059] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="$250 - $450">$250 - $450 (Small / Fine Line)</option>
                      <option value="$450 - $850">$450 - $850 (Medium piece)</option>
                      <option value="$850 - $1,500+">$850 - $1,500+ (Large / Full Session)</option>
                      <option value="Multi-Session Project">Multi-Session Sleeve / Backpiece</option>
                    </select>
                  </div>
                </div>

                {/* Consent & Age Check */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer text-xs text-zinc-300">
                    <input
                      type="checkbox"
                      checked={formData.medicalNoticeAccepted}
                      onChange={(e) =>
                        setFormData({ ...formData, medicalNoticeAccepted: e.target.checked })
                      }
                      className="mt-0.5 accent-[#c5a059] w-4 h-4 rounded cursor-pointer"
                    />
                    <span>
                      I confirm that I am at least 18 years of age and understand that Morgan Tattoo Studio in Los Angeles operates on a custom consultation and booking basis.
                    </span>
                  </label>
                  {formErrors.medicalNoticeAccepted && (
                    <p className="text-[11px] text-red-400 mt-1 pl-7">
                      {formErrors.medicalNoticeAccepted}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-zinc-400">
                  <span>Questions prior to booking? Call </span>
                  <a href={STUDIO_INFO.phoneHref} className="text-[#c5a059] font-medium hover:underline">
                    {STUDIO_INFO.phone}
                  </a>
                </div>

                <CornerButton
                  type="submit"
                  size="lg"
                  variant="primary"
                  disabled={isSubmitting}
                  icon={<Sparkles className="w-4 h-4" />}
                >
                  {isSubmitting ? 'Transmitting Inquiry...' : 'Submit Tattoo Inquiry'}
                </CornerButton>
              </div>
            </motion.form>
          ) : (
            /* Submission Success Summary */
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 sm:p-12 rounded-3xl bg-[#0e0e12] border border-[#c5a059]/60 shadow-2xl space-y-6 text-left"
            >
              <div className="flex items-center gap-3 text-[#c5a059]">
                <CheckCircle2 className="w-8 h-8" />
                <div>
                  <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#c5a059]">
                    Inquiry Received
                  </span>
                  <h2 className="text-2xl font-heading font-bold text-white">
                    Consultation Request Submitted
                  </h2>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 leading-relaxed">
                Thank you, <strong className="text-white">{submittedInquiry.details.fullName}</strong>. Your tattoo concept inquiry has been recorded in our Los Angeles studio booking queue. We will review your ideas, sizing, and references before reaching out.
              </div>

              {/* Summary Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-xs">
                <div>
                  <span className="text-zinc-500 uppercase tracking-wider block">Reference Code</span>
                  <span className="font-mono font-bold text-base text-[#c5a059]">
                    {submittedInquiry.referenceCode}
                  </span>
                </div>

                <div>
                  <span className="text-zinc-500 uppercase tracking-wider block">Submitted Date</span>
                  <span className="font-medium text-zinc-200">{submittedInquiry.submittedAt}</span>
                </div>

                <div>
                  <span className="text-zinc-500 uppercase tracking-wider block">Selected Style</span>
                  <span className="font-medium text-zinc-200">{submittedInquiry.details.tattooStyle}</span>
                </div>

                <div>
                  <span className="text-zinc-500 uppercase tracking-wider block">Placement & Size</span>
                  <span className="font-medium text-zinc-200">
                    {submittedInquiry.details.placement || 'Not specified'} · {submittedInquiry.details.approximateSize}
                  </span>
                </div>

                <div className="sm:col-span-2 pt-2 border-t border-zinc-900">
                  <span className="text-zinc-500 uppercase tracking-wider block">Concept Description</span>
                  <p className="font-normal text-zinc-300 mt-1 italic">
                    "{submittedInquiry.details.tattooIdea}"
                  </p>
                </div>
              </div>

              {/* Next Steps Road */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-[#c5a059]">
                  What Happens Next
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <strong className="text-white block mb-1">1. Concept Review</strong>
                    <span className="text-zinc-400">We analyze reference imagery and anatomical feasibility.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <strong className="text-white block mb-1">2. Contact & Quote</strong>
                    <span className="text-zinc-400">We contact your phone ({submittedInquiry.details.phone}) with session estimates.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <strong className="text-white block mb-1">3. Deposit & Date</strong>
                    <span className="text-zinc-400">Lock in your private studio appointment date in Los Angeles.</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 border-t border-zinc-800 flex flex-wrap items-center gap-4">
                <CornerButton
                  size="md"
                  variant="primary"
                  onClick={onNavigateHome}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Return to Home
                </CornerButton>

                <CornerButton
                  size="md"
                  variant="outline"
                  onClick={() => setSubmittedInquiry(null)}
                >
                  Submit Another Inquiry
                </CornerButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
