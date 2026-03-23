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
        image: "https://placehold.co/1920x1080/1a1a1a/d2b371",
        title: "Welcome to The Mezzanine",
        subtitle: "A HISTORIC VENUE LOCATION ON AN ICONIC BLOCK",
      },
      {
        id: 2,
        image: "https://placehold.co/1920x1080/1a1a1a/d2b371",
        title: "Welcome to The Mezzanine",
        subtitle: "A HISTORIC VENUE LOCATION ON AN ICONIC BLOCK",
      },
      {
        id: 3,
        image: "https://placehold.co/1920x1080/1a1a1a/d2b371",
        title: "Welcome to The Mezzanine",
        subtitle: "A HISTORIC VENUE LOCATION ON AN ICONIC BLOCK",
      },
      {
        id: 4,
        image: "https://placehold.co/1920x1080/1a1a1a/d2b371",
        title: "Welcome to The Mezzanine",
        subtitle: "A HISTORIC VENUE LOCATION ON AN ICONIC BLOCK",
      },
      {
        id: 5,
        image: "https://placehold.co/1920x1080/1a1a1a/d2b371",
        title: "Welcome to The Mezzanine",
        subtitle: "A HISTORIC VENUE LOCATION ON AN ICONIC BLOCK",
      },
    ],
  },

  eventTypes: [
    {
      id: "corporate",
      title: "CORPORATE EVENTS",
      subtitle: "A distinguished setting for memorable corporate gatherings.",
      image: "https://placehold.co/600x400/2a2a2a/d2b371",
    },
    {
      id: "weddings",
      title: "WEDDINGS",
      subtitle: "Begin your forever story amidst timeless romantic elegance.",
      image: "https://placehold.co/600x400/2a2a2a/d2b371",
    },
    {
      id: "milestone",
      title: "MILESTONE CELEBRATIONS",
      subtitle: "An exquisite setting for your most treasured celebrations.",
      image: "https://placehold.co/600x400/2a2a2a/d2b371",
    },
    {
      id: "film",
      title: "FILM/TV SHOOTS",
      subtitle: "A unique location offering stunning visual production value.",
      image: "https://placehold.co/600x400/2a2a2a/d2b371",
    },
  ],

  spaces: [
    {
      id: "main-bar",
      name: "Main Bar",
      image: "https://placehold.co/800x600/1a1a1a/d2b371",
    },
    {
      id: "lobby",
      name: "Lobby",
      image: "https://placehold.co/800x600/1a1a1a/d2b371",
    },
    {
      id: "reading-room",
      name: "Reading Room",
      image: "https://placehold.co/800x600/1a1a1a/d2b371",
    },
    {
      id: "conference",
      name: "Conference Area",
      image: "https://placehold.co/800x600/1a1a1a/d2b371",
    },
    {
      id: "buffet-dining",
      name: "Buffet Dining Room",
      image: "https://placehold.co/800x600/1a1a1a/d2b371",
    },
    {
      id: "meeting-room",
      name: "Meeting Room",
      image: "https://placehold.co/800x600/1a1a1a/d2b371",
    },
  ],

  gallery: Array.from({ length: 27 }, (_, i) => ({
    id: i,
    src: `https://placehold.co/800x600/1a1a1a/d2b371`,
    alt: `The Mezzanine Gallery Image ${i + 1}`,
  })),

  navigation: [
    { label: "About", href: "#about" },
    { label: "Rooms", href: "#rooms" },
    { label: "Floor Plans", href: "/floor-plans" },
    { label: "Video", href: "#video" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact Us", href: "#contact" },
  ],
};

export default siteConfig;
