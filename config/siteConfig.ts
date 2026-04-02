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
    name: "FiDi Mezzanine",
    tagline: "Manhattan's Premier Event Venue in the Financial District",
    description:
      "FiDi Mezzanine is Manhattan's most sought-after event venue, located at 55 Broadway in the heart of the Financial District. Spanning over 6,300 square feet across four stunning rooms, we offer full-service event production from decor and catering to staging and entertainment. Whether you are planning a corporate event, a wedding reception, a private party, or a milestone celebration, FiDi Mezzanine delivers an experience that is both unforgettable and seamlessly executed.",
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
      instagram: "https://www.instagram.com/fidimezzanine/",
    },
    capacity: {
      max: 400,
      seated: 150,
    },
    squareFeet: 6300,
    spaces: 4,
  },

  seo: {
    title: "FiDi Mezzanine | Premier Event Venue in Manhattan Financial District",
    description:
      "FiDi Mezzanine is Manhattan's premier event venue at 55 Broadway. Full-service corporate events, weddings, private parties and milestone celebrations for up to 400 guests in the heart of New York's Financial District.",
    keywords: [
      "event venue NYC",
      "event venue Manhattan",
      "Financial District event venue",
      "Wall Street event space",
      "corporate event venue Manhattan",
      "wedding venue New York",
      "wedding venue NYC",
      "party venue near me Manhattan",
      "event space New York",
      "private event venue NYC",
      "corporate party venue NYC",
      "banquet hall Manhattan",
      "venue rental Manhattan",
      "event hall NYC",
      "party space Manhattan",
      "meeting venue Manhattan",
      "corporate events New York",
      "wedding reception venue NYC",
      "event center Manhattan",
      "FiDi event venue",
      "Lower Manhattan event space",
      "55 Broadway events",
      "full service event venue NYC",
      "private party venue Manhattan",
    ],
  },

  hero: {
    autoplayDelay: 5000,
    slides: [
      {
        id: 1,
        image: "/slider/2.jpg",
        title: "Welcome to FiDi Mezzanine",
        subtitle: "MANHATTAN'S PREMIER EVENT VENUE ON AN ICONIC BLOCK",
      },
      {
        id: 2,
        image: "/slider/1.jpg",
        title: "Your Perfect Wedding in New York",
        subtitle: "FULL SERVICE WEDDING VENUE IN THE FINANCIAL DISTRICT",
      },
      {
        id: 3,
        image: "/slider/3.jpg",
        title: "Raise a Glass in the Heart of Manhattan",
        subtitle: "PRIVATE PARTIES AND MILESTONE EVENTS DONE RIGHT",
      },
      {
        id: 4,
        image: "/slider/4.jpg",
        title: "Where Corporate Meets Exceptional",
        subtitle: "CORPORATE EVENT SPACES BUILT FOR IMPACT IN NYC",
      },
      {
        id: 5,
        image: "/slider/5.jpg",
        title: "Dine, Celebrate, Remember",
        subtitle: "SEATED DINNERS AND RECEPTIONS FOR UP TO 400 GUESTS",
      },
    ],
  },

  eventTypes: [
    {
      id: "corporate",
      title: "CORPORATE EVENTS",
      subtitle: "Conferences, product launches, company parties and corporate galas in the heart of Manhattan's Financial District.",
      image: "/events/corporate.jpg",
    },
    {
      id: "weddings",
      title: "WEDDINGS",
      subtitle: "Full service wedding venue in New York City. From ceremony to reception, every detail is handled for you.",
      image: "/events/weddings.jpg",
    },
    {
      id: "milestone",
      title: "MILESTONE CELEBRATIONS",
      subtitle: "Birthday parties, anniversaries, and private celebrations for up to 400 guests in Lower Manhattan.",
      image: "/events/milestone.jpg",
    },
    {
      id: "film",
      title: "FILM AND TV SHOOTS",
      subtitle: "A visually stunning Manhattan location with industrial character and production-ready infrastructure.",
      image: "/events/film.jpg",
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
      name: "Conference Room",
      image: "/spaces/conference.jpg",
    },
    {
      id: "buffet-dining",
      name: "Dining Room",
      image: "/spaces/buffet-dining-room.jpg",
    },
    {
      id: "meeting-room",
      name: "Meeting Room",
      image: "/spaces/meeting-rooms.jpg",
    },
  ],

  gallery: [
    { id: 1, src: "/gallery/1.jpg", alt: "FiDi Mezzanine event venue interior Manhattan" },
    { id: 2, src: "/gallery/2.jpg", alt: "Corporate event setup at FiDi Mezzanine Financial District NYC" },
    { id: 3, src: "/gallery/3.jpg", alt: "Wedding reception venue New York City Financial District" },
    { id: 4, src: "/gallery/4.jpg", alt: "Private party space Manhattan at FiDi Mezzanine" },
    { id: 5, src: "/gallery/5.jpg", alt: "Event hall interior FiDi Mezzanine 55 Broadway NYC" },
    { id: 6, src: "/gallery/6.jpg", alt: "Corporate gala venue Manhattan Wall Street area" },
    { id: 7, src: "/gallery/7.jpg", alt: "Banquet hall setup FiDi Mezzanine New York" },
    { id: 8, src: "/gallery/8.jpg", alt: "Wedding venue decor Financial District Manhattan" },
    { id: 9, src: "/gallery/9.jpg", alt: "Party venue NYC event space Lower Manhattan" },
    { id: 10, src: "/gallery/10.jpg", alt: "FiDi Mezzanine main bar event space Manhattan" },
    { id: 11, src: "/gallery/11.jpg", alt: "Corporate conference room event venue NYC" },
    { id: 12, src: "/gallery/12.jpg", alt: "Wedding ceremony space Manhattan event venue" },
    { id: 13, src: "/gallery/13.jpg", alt: "Private dining room rental Manhattan NYC" },
    { id: 14, src: "/gallery/14.jpg", alt: "Milestone celebration venue New York Financial District" },
    { id: 15, src: "/gallery/15.jpg", alt: "FiDi Mezzanine lobby event space 55 Broadway" },
    { id: 16, src: "/gallery/16.jpg", alt: "Evening event at FiDi Mezzanine Manhattan venue" },
    { id: 17, src: "/gallery/17.jpg", alt: "Corporate party venue New York City" },
    { id: 18, src: "/gallery/18.jpg", alt: "Full service wedding venue NYC reception setup" },
    { id: 19, src: "/gallery/19.jpg", alt: "Event space rental Manhattan Financial District" },
    { id: 20, src: "/gallery/20.jpg", alt: "Cocktail reception venue FiDi Mezzanine NYC" },
    { id: 21, src: "/gallery/21.jpg", alt: "Grand ballroom style event setup Manhattan" },
    { id: 22, src: "/gallery/22.jpg", alt: "Reading room private event space FiDi Mezzanine" },
    { id: 23, src: "/gallery/23.jpg", alt: "Corporate event space Wall Street New York" },
    { id: 24, src: "/gallery/24.jpg", alt: "Wedding banquet hall Manhattan NYC" },
    { id: 25, src: "/gallery/25.jpg", alt: "Party hall rental near Wall Street Manhattan" },
    { id: 26, src: "/gallery/26.jpg", alt: "FiDi Mezzanine interior venue New York" },
    { id: 27, src: "/gallery/27.jpg", alt: "Staged event space Manhattan corporate gathering" },
    { id: 28, src: "/gallery/28.jpg", alt: "Private event venue rental Manhattan NYC" },
    { id: 29, src: "/gallery/29.jpg", alt: "Seated dinner event at FiDi Mezzanine New York" },
    { id: 30, src: "/gallery/30.jpg", alt: "Event center Manhattan Lower Manhattan venue" },
    { id: 31, src: "/gallery/31.jpg", alt: "FiDi Mezzanine party space Financial District" },
    { id: 32, src: "/gallery/32.jpg", alt: "Corporate meeting venue Manhattan 55 Broadway" },
    { id: 33, src: "/gallery/33.jpg", alt: "Elegant wedding reception Manhattan event venue" },
    { id: 34, src: "/gallery/34.jpg", alt: "Event hall rental near Wall Street NYC" },
    { id: 35, src: "/gallery/35.jpg", alt: "Birthday party venue rental Manhattan New York" },
    { id: 36, src: "/gallery/36.jpg", alt: "FiDi Mezzanine dining room corporate lunch event" },
    { id: 37, src: "/gallery/37.jpg", alt: "Manhattan event venue full service production" },
    { id: 38, src: "/gallery/38.jpg", alt: "Large party venue NYC up to 400 guests FiDi" },
    { id: 39, src: "/gallery/39.jpg", alt: "Financial District venue rental New York events" },
    { id: 40, src: "/gallery/40.jpg", alt: "FiDi Mezzanine event venue 55 Broadway Manhattan NYC" },
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
