export const BUSINESS = {
  name: "Lilac Wellness Spa and Pain Relief",
  shortName: "Lilac Wellness Spa",
  tagline: "Relax • Heal • Rejuvenate",
  category: "Premium Spa & Pain Relief Center",

  phone: "8122991243",
  whatsapp: "918122991243",
  email: "contact@lilacwellnessspa.com",

  address: "681, Second Floor, Bharathi Nagaraj Plaza, Above MedPlus Medicals, Ramagondanahalli, Whitefield, Bengaluru, Karnataka 560066",

  mapQuery: "Lilac Wellness Spa and Pain Relief, 681, Second Floor, Bharathi Nagaraj Plaza, Above MedPlus Medicals, Ramagondanahalli, Whitefield, Bengaluru, Karnataka 560066",

  locationShort: "Whitefield, Bengaluru",

  openingHours: "Monday – Sunday | 10:00 AM – 10:00 PM",

  rating: "4.9",
  totalReviews: "270",

  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    twitter: "https://x.com",
  },

  seo: {
    title: "Lilac Wellness Spa and Pain Relief | Premium Spa in Whitefield, Bengaluru",

    description: "Experience premium spa therapies, deep tissue massage, pain relief treatments, body scrubs and wellness packages at Lilac Wellness Spa and Pain Relief in Whitefield, Bengaluru.",

    keywords: "Lilac Wellness Spa, Lilac Wellness Spa and Pain Relief, spa in Whitefield, massage spa Bengaluru, pain relief spa, deep tissue massage Whitefield, body massage Bengaluru, spa near Ramagondanahalli, luxury spa Whitefield",
  },
};

export const whatsappBookingLink = (service = "spa appointment") => {
  const message = `Hello ${BUSINESS.name},

I would like to book a ${service}.

Please share today's availability.`;

  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
};

export const callLink = `tel:${BUSINESS.phone}`;
