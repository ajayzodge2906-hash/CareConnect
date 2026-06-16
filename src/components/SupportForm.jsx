import React, { useState } from 'react';
import { User, Mail, Phone, HeartPulse, FileText, ClipboardList, AlertCircle } from 'lucide-react';

const CATEGORIES = [
  "Medication Help",
  "Appointment Support",
  "General Health Query",
  "Mental Health Support"
];

export default function SupportForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    category: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear specific error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Required fields check
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.category) newErrors.category = 'Please select a support category';
    if (!formData.description.trim()) newErrors.description = 'Please describe your request';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Scroll to first error
      const firstErrorKey = Object.keys(newErrors)[0];
      const element = document.getElementsByName(firstErrorKey)[0];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
      return;
    }

    // Process submission with simulated AI computation delay
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmit(formData);
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-xl px-4 py-10 sm:px-6">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8">
        
        {/* Form Header */}
        <div className="mb-8 border-b border-slate-100 pb-5">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Submit Support Request
          </h2>
          <p className="mt-1.5 text-sm text-slate-500">
            Please fill in your details and describe your concerns.
          </p>
        </div>

        {isSubmitting ? (
          /* Loading State */
          <div className="flex flex-col items-center justify-center py-12">
            <svg
              className="h-10 w-10 animate-spin text-primary-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <p className="mt-4 text-sm font-semibold text-slate-700">CareConnect AI Summarizer</p>
            <p className="text-xs text-slate-400 mt-1">Generating concise request summary for volunteers...</p>
          </div>
        ) : (
          /* Form Content */
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            
            {/* Section 1: Personal Details */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <User className="h-5 w-5 text-primary-600" />
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                  Personal Details
                </h3>
              </div>
              
              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative mt-1.5 rounded-lg shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <User className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border pl-9 pr-3 py-2.5 text-slate-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm transition-colors ${
                        errors.fullName ? 'border-red-300 ring-red-300' : 'border-slate-300'
                      }`}
                      placeholder="Jane Doe"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1.5 flex items-center text-xs text-red-600">
                      <AlertCircle className="mr-1 h-3.5 w-3.5" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative mt-1.5 rounded-lg shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Mail className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border pl-9 pr-3 py-2.5 text-slate-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm transition-colors ${
                        errors.email ? 'border-red-300 ring-red-300' : 'border-slate-300'
                      }`}
                      placeholder="jane.doe@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 flex items-center text-xs text-red-600">
                      <AlertCircle className="mr-1 h-3.5 w-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative mt-1.5 rounded-lg shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Phone className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border pl-9 pr-3 py-2.5 text-slate-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm transition-colors ${
                        errors.phone ? 'border-red-300 ring-red-300' : 'border-slate-300'
                      }`}
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1.5 flex items-center text-xs text-red-600">
                      <AlertCircle className="mr-1 h-3.5 w-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-100 my-6"></div>

            {/* Section 2: Support Details */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ClipboardList className="h-5 w-5 text-primary-600" />
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                  Support Information
                </h3>
              </div>
              
              <div className="space-y-4">
                {/* Category Dropdown */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-slate-700">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <div className="relative mt-1.5 rounded-lg shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <HeartPulse className="h-4 w-4 text-slate-400" />
                    </div>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border pl-9 pr-3 py-2.5 text-slate-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm bg-white transition-colors ${
                        errors.category ? 'border-red-300 ring-red-300' : 'border-slate-300'
                      }`}
                    >
                      <option value="">Select a category</option>
                      {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                  {errors.category && (
                    <p className="mt-1.5 flex items-center text-xs text-red-600">
                      <AlertCircle className="mr-1 h-3.5 w-3.5" />
                      {errors.category}
                    </p>
                  )}
                </div>

                {/* Description Textarea */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-slate-700">
                    Describe your request/concern <span className="text-red-500">*</span>
                  </label>
                  <div className="relative mt-1.5 rounded-lg shadow-sm">
                    <div className="pointer-events-none absolute top-3 left-3 flex items-center">
                      <FileText className="h-4 w-4 text-slate-400" />
                    </div>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      className={`block w-full rounded-lg border pl-9 pr-3 py-2.5 text-slate-900 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 sm:text-sm transition-colors ${
                        errors.description ? 'border-red-300 ring-red-300' : 'border-slate-300'
                      }`}
                      placeholder="Provide details of your support request (e.g. 'I missed my blood pressure medicine for two days and feel weak and dizzy.')"
                    />
                  </div>
                  {errors.description && (
                    <p className="mt-1.5 flex items-center text-xs text-red-600">
                      <AlertCircle className="mr-1 h-3.5 w-3.5" />
                      {errors.description}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-4 flex justify-end space-x-3">
              <button
                type="button"
                onClick={onCancel}
                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors focus:outline-none"
              >
                Cancel
              </button>
              
              <button
                type="submit"
                className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 hover:shadow hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98] focus:outline-none"
              >
                Submit Request
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
