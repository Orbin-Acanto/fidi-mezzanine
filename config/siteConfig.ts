export interface VenueInfo {
  name: string;
  tagline: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
  };
  capacity: {
    max: number;
    seated?: number;
  };
  squareFeet: number;
  spaces: number;
}

export interface EventType {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface VenueSpace {
  id: string;
  name: string;
  image: string;
}

export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

export interface SiteConfig {
  venue: VenueInfo;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    slides: HeroSlide[];
    autoplayDelay: number;
  };
  eventTypes: EventType[];
  spaces: VenueSpace[];
  gallery: GalleryImage[];
  navigation: {
    label: string;
    href: string;
  }[];
}

const siteConfig: SiteConfig = {
  venue: {
    name: "The Mezzanine",
    tagline: "Elevated Events in the Financial District",
    description:
      "Step into a space where industrial-chic design meets Financial District energy at The Mezzanine, FiDi's most stylish event venue located at 55 Broadway. Thoughtfully curated from the ground up, The Mezzanine pairs contemporary aesthetics with the full-service hospitality of MMEink, creating an atmosphere that is both striking and effortlessly functional.",
    address: {
      street: "55 Broadway",
      city: "New York",
      state: "NY",
      zip: "10006",
      full: "55 Broadway, New York, NY 10006",
    },
    contact: {
      phone: "212-971-5353",
      email: "info@mmeink.com",
    },
    social: {
      facebook: "https://www.facebook.com/themezzaninenyc",
      instagram: "https://www.instagram.com/themezzaninenyc",
    },
    capacity: {
      max: 300,
      seated: 150,
    },
    squareFeet: 6300,
    spaces: 4,
  },

  seo: {
    title: "Historic Downtown Manhattan Event Venue | The Mezzanine NYC",
    description:
      "Discover The Mezzanine, a stylish event venue in Lower Manhattan's Financial District. Host elegant weddings, corporate events & galas in a modern industrial-chic space at 55 Broadway.",
    keywords: [
      "event venue NYC",
      "Financial District event space",
      "Manhattan wedding venue",
      "FiDi event venue",
      "55 Broadway events",
      "corporate events Manhattan",
      "downtown NYC venue",
      "Lower Manhattan event space",
      "NYC wedding venue",
      "industrial chic venue NYC",
      "MMEink venues",
      "Broadway event space",
    ],
  },

  hero: {
    autoplayDelay: 5000,
    slides: [
      {
        id: 1,
        image: "/slider/2.jpg",
        title: "Welcome to The Mezzanine",
        subtitle: "A HISTORIC VENUE LOCATION ON AN ICONIC BLOCK",
      },
      {
        id: 1,
        image: "/slider/1.jpg",
        title: "Your Dream Wedding Awaits",
        subtitle: "AN UNFORGETTABLE CELEBRATION IN THE HEART OF FIDI",
      },
      {
        id: 3,
        image: "/slider/3.jpg",
        title: "Raise a Glass in Style",
        subtitle: "A CURATED BAR EXPERIENCE FOR EVERY OCCASION",
      },
      {
        id: 4,
        image: "/slider/4.jpeg",
        title: "Where Business Meets Elegance",
        subtitle: "CORPORATE EVENTS WITH A SOPHISTICATED EDGE",
      },
      {
        id: 5,
        image: "/slider/5.jpg",
        title: "Dine in Distinction",
        subtitle: "SEATED DINNERS CRAFTED TO IMPRESS",
      },
    ],
  },

  eventTypes: [
    {
      id: "corporate",
      title: "CORPORATE EVENTS",
      subtitle: "A distinguished setting for memorable corporate gatherings.",
      image: "/events/corporate.jpg",
    },
    {
      id: "weddings",
      title: "WEDDINGS",
      subtitle: "Begin your forever story amidst timeless romantic elegance.",
      image: "/events/weddings.jpg",
    },
    {
      id: "milestone",
      title: "MILESTONE CELEBRATIONS",
      subtitle: "An exquisite setting for your most treasured celebrations.",
      image: "/events/milestone.jpg",
    },
    {
      id: "film",
      title: "FILM/TV SHOOTS",
      subtitle: "A unique location offering stunning visual production value.",
      image: "/events/film.jpeg",
    },
  ],

  spaces: [
    {
      id: "main-bar",
      name: "Main Bar",
      image: "/spaces/main-bar.jpg",
    },
    {
      id: "lobby",
      name: "Lobby",
      image: "/spaces/lobby.jpg",
    },
    {
      id: "reading-room",
      name: "Reading Room",
      image: "/spaces/reading-room.jpg",
    },
    {
      id: "conference",
      name: "Conference Area",
      image: "/spaces/conference.jpeg",
    },
    {
      id: "buffet-dining",
      name: "Buffet Dining Room",
      image: "/spaces/buffet-dining-room.jpg",
    },
    {
      id: "meeting-room",
      name: "Meeting Room",
      image: "/spaces/meeting-rooms.jpeg",
    },
  ],

  gallery: [
    { id: 1, src: "/gallery/1.jpeg", alt: "The Mezzanine Gallery Image 1" },
    { id: 2, src: "/gallery/2.jpg", alt: "The Mezzanine Gallery Image 2" },
    { id: 3, src: "/gallery/3.jpeg", alt: "The Mezzanine Gallery Image 3" },
    { id: 4, src: "/gallery/4.jpg", alt: "The Mezzanine Gallery Image 4" },
    { id: 5, src: "/gallery/5.jpg", alt: "The Mezzanine Gallery Image 5" },
    { id: 6, src: "/gallery/6.jpeg", alt: "The Mezzanine Gallery Image 6" },
    { id: 7, src: "/gallery/7.png", alt: "The Mezzanine Gallery Image 7" },
    { id: 8, src: "/gallery/8.jpg", alt: "The Mezzanine Gallery Image 8" },
    { id: 9, src: "/gallery/9.jpeg", alt: "The Mezzanine Gallery Image 9" },
    { id: 10, src: "/gallery/10.jpg", alt: "The Mezzanine Gallery Image 10" },
    { id: 11, src: "/gallery/11.jpeg", alt: "The Mezzanine Gallery Image 11" },
    { id: 12, src: "/gallery/12.jpg", alt: "The Mezzanine Gallery Image 12" },
    { id: 13, src: "/gallery/13.jpeg", alt: "The Mezzanine Gallery Image 13" },
    { id: 14, src: "/gallery/14.jpg", alt: "The Mezzanine Gallery Image 14" },
    { id: 15, src: "/gallery/15.jpg", alt: "The Mezzanine Gallery Image 15" },
    { id: 16, src: "/gallery/16.jpeg", alt: "The Mezzanine Gallery Image 16" },
    { id: 17, src: "/gallery/17.jpeg", alt: "The Mezzanine Gallery Image 17" },
    { id: 18, src: "/gallery/18.png", alt: "The Mezzanine Gallery Image 18" },
    { id: 19, src: "/gallery/19.jpg", alt: "The Mezzanine Gallery Image 19" },
    { id: 20, src: "/gallery/20.jpeg", alt: "The Mezzanine Gallery Image 20" },
    { id: 21, src: "/gallery/21.png", alt: "The Mezzanine Gallery Image 21" },
    { id: 22, src: "/gallery/22.jpg", alt: "The Mezzanine Gallery Image 22" },
    { id: 23, src: "/gallery/23.jpg", alt: "The Mezzanine Gallery Image 23" },
    { id: 24, src: "/gallery/24.png", alt: "The Mezzanine Gallery Image 24" },
    { id: 25, src: "/gallery/25.jpg", alt: "The Mezzanine Gallery Image 25" },
    { id: 26, src: "/gallery/26.jpeg", alt: "The Mezzanine Gallery Image 26" },
    { id: 27, src: "/gallery/27.jpg", alt: "The Mezzanine Gallery Image 27" },
    { id: 28, src: "/gallery/28.png", alt: "The Mezzanine Gallery Image 28" },
    { id: 29, src: "/gallery/29.jpg", alt: "The Mezzanine Gallery Image 29" },
    { id: 30, src: "/gallery/30.jpg", alt: "The Mezzanine Gallery Image 30" },
    { id: 31, src: "/gallery/31.jpg", alt: "The Mezzanine Gallery Image 31" },
    { id: 32, src: "/gallery/32.png", alt: "The Mezzanine Gallery Image 32" },
    { id: 33, src: "/gallery/33.jpeg", alt: "The Mezzanine Gallery Image 33" },
    { id: 34, src: "/gallery/34.jpeg", alt: "The Mezzanine Gallery Image 34" },
    { id: 35, src: "/gallery/35.jpg", alt: "The Mezzanine Gallery Image 35" },
    { id: 36, src: "/gallery/36.jpg", alt: "The Mezzanine Gallery Image 36" },
    { id: 37, src: "/gallery/37.jpeg", alt: "The Mezzanine Gallery Image 37" },
    { id: 38, src: "/gallery/38.jpg", alt: "The Mezzanine Gallery Image 38" },
    { id: 39, src: "/gallery/39.png", alt: "The Mezzanine Gallery Image 39" },
    { id: 40, src: "/gallery/40.jpeg", alt: "The Mezzanine Gallery Image 40" },
  ],

  navigation: [
    { label: "About", href: "#about" },
    { label: "Rooms", href: "#rooms" },
    { label: "Floor Plans", href: "/floor-plans" },
    { label: "Video", href: "#video" },
    { label: "Gallery", href: "#gallery" },
    { label: "Brochure", href: "/brochure" },
    { label: "Contact Us", href: "#contact" },
  ],
};

export default siteConfig;
