export interface TattooItem {
  id: string;
  title: string;
  category: 'Black & Grey' | 'Fine-Line & Dotwork' | 'Illustrative Realism' | 'Dark Art & Custom';
  placement: string;
  imageUrl: string;
  description: string;
  healingTime: string;
  featured?: boolean;
}

export interface TattooStyleInfo {
  id: string;
  name: string;
  tagline: string;
  description: string;
  techniques: string[];
  sessionAdvice: string;
  idealFor: string;
  featuredImage: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  projectType: string;
  quote: string;
  location: string;
  rating: number;
}

export const STUDIO_INFO = {
  name: "Morgan Tattoo Studio",
  tagline: "Bespoke Tattoo Craftsmanship in Los Angeles",
  location: "Los Angeles, California",
  phone: "1 234-206-5985",
  phoneFormatted: "+1 (234) 206-5985",
  phoneHref: "tel:12342065985",
  facebook: "https://www.facebook.com/profile.php?id=61594128700128",
  logoUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790901339/808192839_122104600329470956_56433309129483589_n.jpg",
  hours: [
    { day: "Tuesday – Saturday", hours: "11:00 AM – 8:00 PM (By Appointment)" },
    { day: "Sunday", hours: "12:00 PM – 6:00 PM (Consultations Only)" },
    { day: "Monday", hours: "Studio Closed (Design Studio Day)" },
  ],
  services: [
    "Custom Black & Grey Realism",
    "Fine-Line & Delicate Needlework",
    "Illustrative Dark Art & Mythological",
    "Bespoke Sleeve & Backpiece Composition",
    "Cover-Ups & Restoration Consultation"
  ]
};

export const PORTFOLIO_ITEMS: TattooItem[] = [
  {
    id: "work-1",
    title: "Celestial Serpent & Botanical Composition",
    category: "Illustrative Realism",
    placement: "Forearm / Sleeve",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790901339/796958383_122108414445470956_4561154880968025604_n.jpg",
    description: "Detailed illustrative composition balancing fluid anatomical flow with fine stippling and smooth black and grey gradient transitions.",
    healingTime: "2-3 weeks",
    featured: true
  },
  {
    id: "work-2",
    title: "Ethereal Portrait & Chiaroscuro Shading",
    category: "Black & Grey",
    placement: "Upper Arm / Shoulder",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790901339/797088098_122108414499470956_7787303413663571051_n.jpg",
    description: "Mastery of soft tone transitions, high-contrast focal points, and delicate facial anatomy rendered in pure carbon black ink.",
    healingTime: "3 weeks",
    featured: true
  },
  {
    id: "work-3",
    title: "Fine-Line Micro Realism Piece",
    category: "Fine-Line & Dotwork",
    placement: "Inner Bicep",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790901339/809076539_122104612803470956_8375624429513395781_n.jpg",
    description: "Single-needle precision with micro-dotwork textures, engineered to age gracefully and preserve intricate details across time.",
    healingTime: "10-14 days",
    featured: true
  },
  {
    id: "work-4",
    title: "Neo-Classical Architectural & Sculptural Form",
    category: "Illustrative Realism",
    placement: "Outer Thigh",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790901340/808883475_122104612833470956_4714896982642498757_n.jpg",
    description: "Rich sculptural depth reminiscent of classical marble statues, executed with smooth wash gradients and crisp linework.",
    healingTime: "2-3 weeks",
    featured: true
  },
  {
    id: "work-5",
    title: "Dark Ornamental & Geometry Overlay",
    category: "Dark Art & Custom",
    placement: "Chest & Collarbone",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790901340/808883430_122104618203470956_3253218347341596681_n.jpg",
    description: "Bold dark art motifs harmonized with organic body anatomy, deep saturated solid blacks and contrasting skin breaks.",
    healingTime: "3-4 weeks",
    featured: false
  },
  {
    id: "work-6",
    title: "Mythological Shadow & Contrast Study",
    category: "Dark Art & Custom",
    placement: "Ribcage & Torso",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790901340/809201464_122104612767470956_5328409484762332552_n.jpg",
    description: "Dramatic atmospheric mood with heavy contrast, capturing tension and cinematic lighting in a large-scale single session piece.",
    healingTime: "3 weeks",
    featured: true
  },
  {
    id: "work-7",
    title: "Delicate Botanical Vine & Micro Flora",
    category: "Fine-Line & Dotwork",
    placement: "Wrist & Hand",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790901341/813774368_122108414583470956_5158569071153433653_n.jpg",
    description: "Ultra-fine line botanical study with natural organic curvature tailored specifically to finger and wrist articulation.",
    healingTime: "10-14 days",
    featured: false
  },
  {
    id: "work-8",
    title: "Hyper-Detailed Black & Grey Realism Focus",
    category: "Black & Grey",
    placement: "Calf / Leg",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790901341/813520519_122107396479470956_2488316684968089749_n.jpg",
    description: "Complex tonal spectrum utilizing 4-stage grey washes to achieve photorealistic depth and crisp edge retention.",
    healingTime: "2-3 weeks",
    featured: true
  },
  {
    id: "work-9",
    title: "Custom Symbolic Flash & Clean Inkwork",
    category: "Fine-Line & Dotwork",
    placement: "Back of Arm / Tricep",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790901340/813137178_122107396575470956_7275648808901381139_n.jpg",
    description: "Minimalist geometry combined with organic textures, crisp uniform needle passes with zero blowout.",
    healingTime: "12-16 days",
    featured: false
  },
  {
    id: "work-10",
    title: "Dark Fantasy Relic & Atmospheric Shading",
    category: "Dark Art & Custom",
    placement: "Full Forearm Wrap",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790901341/814034567_122108414619470956_5891990144274885431_n.jpg",
    description: "Intense blackwork contrast coupled with fine pepper-shading, creating rich tactile dimensions in dark fantasy styling.",
    healingTime: "3 weeks",
    featured: true
  },
  {
    id: "work-11",
    title: "Illustrative Wildlife & Anatomical Motion",
    category: "Illustrative Realism",
    placement: "Back / Shoulder Blade",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790901341/814226791_122108414337470956_7607997051021424977_n.jpg",
    description: "Dynamic motion study capturing organic muscle structure with expressive pencil-sketch linework and soft washes.",
    healingTime: "2-3 weeks",
    featured: false
  },
  {
    id: "work-12",
    title: "Micro-Ornamental Finger & Hand Artistry",
    category: "Fine-Line & Dotwork",
    placement: "Hand & Knuckles",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790901341/811405816_122106592833470956_6357008864013672052_n.jpg",
    description: "Intricate dotwork stippling and refined single-needle accents engineered specifically for high-mobility skin zones.",
    healingTime: "10-14 days",
    featured: false
  },
  {
    id: "work-13",
    title: "Renaissance Chiaroscuro & Dramatic Wash",
    category: "Black & Grey",
    placement: "Upper Thigh",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790901341/814908404_122108414535470956_446473174741505_n.jpg",
    description: "Deep velvety blacks fading gracefully into pristine negative space skin breaks, reflecting timeless fine art aesthetics.",
    healingTime: "2-3 weeks",
    featured: true
  },
  {
    id: "work-14",
    title: "Custom Symbolic Artifact & Stipple Work",
    category: "Illustrative Realism",
    placement: "Forearm",
    imageUrl: "https://res.cloudinary.com/fzobzdco/image/upload/v1790901342/813931428_122107396503470956_8860276314890200263_n.jpg",
    description: "Bespoke conceptual illustration blending geometric harmony with subtle dot shading and high-clarity contouring.",
    healingTime: "2 weeks",
    featured: false
  }
];

export const TATTOO_STYLES: TattooStyleInfo[] = [
  {
    id: "black-grey",
    name: "Black & Grey Realism",
    tagline: "Photographic depth, velvety shadows, and timeless contrast.",
    description: "Focusing on smooth tone transitions and chiaroscuro lighting, our black and grey work utilizes bespoke ink dilutions to create dimension, anatomy, and sculptural life on skin.",
    techniques: ["Multi-drop grey washes", "Soft magnum blending", "Negative-space highlights", "Micro-contrast layering"],
    sessionAdvice: "Recommended for clients seeking realistic portraits, classical sculptures, and atmospheric narrative pieces.",
    idealFor: "Upper arms, thighs, backpieces, and full sleeves",
    featuredImage: PORTFOLIO_ITEMS[1].imageUrl
  },
  {
    id: "fine-line",
    name: "Fine-Line & Dotwork",
    tagline: "Single-needle elegance, precision stippling, and subtle grace.",
    description: "Delicate lines applied with exact needle depth control. Designed to age with clarity, our fine-line technique preserves crisp details across years of healing.",
    techniques: ["Single-needle 01-03 RL", "Pepper stipple shading", "Geometric symmetry", "Skin-tension calibration"],
    sessionAdvice: "Requires minimal skin trauma, leading to quick healing cycles and gentle recovery.",
    idealFor: "Inner forearms, wrists, collarbones, and micro-concepts",
    featuredImage: PORTFOLIO_ITEMS[2].imageUrl
  },
  {
    id: "illustrative",
    name: "Illustrative Realism",
    tagline: "Where contemporary fine art meets the organic flow of the body.",
    description: "Blending dynamic linework with atmospheric shading. Every piece is drawn uniquely to complement your natural muscle lines and bone contours.",
    techniques: ["Dynamic line weight variance", "Engraving & woodcut cross-hatch", "Anatomical flow mapping", "Carbon wash gradation"],
    sessionAdvice: "Ideal for custom mythological scenes, botanical studies, and original concepts.",
    idealFor: "Full sleeves, legs, chest plates, and ribs",
    featuredImage: PORTFOLIO_ITEMS[0].imageUrl
  },
  {
    id: "dark-art",
    name: "Dark Art & Ornamental",
    tagline: "Bold saturated blacks, gothic nuance, and striking presence.",
    description: "High-impact tattooing characterized by solid black saturation, deep mood, and sacred geometry that commands immediate attention.",
    techniques: ["Solid carbon packing", "High-contrast skin breaks", "Heavy-to-soft texture blending", "Ornamental framing"],
    sessionAdvice: "Best suited for clients wanting impactful, graphic, and visually arresting statements.",
    idealFor: "Chest, torso, spine, and leg sleeves",
    featuredImage: PORTFOLIO_ITEMS[5].imageUrl
  }
];

export const DEMO_TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    clientName: "Alexandria V.",
    projectType: "Custom Black & Grey Sleeve",
    quote: "Morgan took my abstract idea and transformed it into a masterpiece that flows seamlessly with my arm. The attention to hygiene, comfort, and linework precision in Los Angeles is truly second to none.",
    location: "Los Angeles, CA",
    rating: 5
  },
  {
    id: "review-2",
    clientName: "Marcus K.",
    projectType: "Fine-Line Botanical & Stipple Piece",
    quote: "The detail Morgan achieved with a single needle is unbelievable. Fully healed in 12 days and every delicate stroke is as sharp as day one. The studio atmosphere is calm, clean, and inspiring.",
    location: "Silver Lake, CA",
    rating: 5
  },
  {
    id: "review-3",
    clientName: "Elena R.",
    projectType: "Illustrative Sculptural Realism",
    quote: "From our first consultation to the final pass, Morgan showed utmost professionalism. Explained every step of the healing process and gave me a custom piece I'll treasure forever.",
    location: "Downtown Los Angeles, CA",
    rating: 5
  }
];

export const FAQ_ITEMS = [
  {
    question: "How do I book a tattoo session at Morgan Tattoo Studio?",
    answer: "You can submit an appointment inquiry through our Booking page or contact us directly at 1 234-206-5985. Once we review your concept, size, placement, and reference images, we will reach out to confirm your consultation or schedule your tattoo session."
  },
  {
    question: "Do you accept walk-ins or is it appointment only?",
    answer: "Morgan Tattoo Studio primarily operates on an appointment-only basis to ensure every client receives personalized attention, custom design preparation, and an unhurried, private studio session in Los Angeles."
  },
  {
    question: "How are tattoo sessions priced?",
    answer: "Pricing is based on project complexity, size, placement, and required session time. Custom multi-session projects are typically estimated during the initial consultation. A deposit is required to secure your booking date and design time."
  },
  {
    question: "What should I do to prepare for my tattoo appointment?",
    answer: "Get a good night's rest, stay well-hydrated, and eat a substantial meal 1-2 hours before your session. Wear comfortable, loose clothing that allows easy access to the tattoo placement area. Please avoid alcohol and blood thinners 24 hours prior."
  },
  {
    question: "What is the aftercare protocol for healing?",
    answer: "We provide comprehensive verbal and written aftercare instructions after every session. Keep your protective wrap on for the recommended duration, gently wash with fragrance-free antibacterial soap, pat dry with a clean paper towel, and apply a thin layer of recommended aftercare ointment."
  },
  {
    question: "Can I bring my own design or reference images?",
    answer: "Yes! You can attach reference images directly in our booking form. Morgan specializes in creating bespoke custom art, so references will be used as inspiration to design a 100% unique piece tailored to your anatomy."
  }
];
