export type ArticleSection = {
  heading: string;
  body: string[];
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  publishedAt: string;
  highlights: string[];
  sections: ArticleSection[];
};

export const featuredArticle: Article = {
  slug: "balanced-bali-holiday",
  category: "Bali Guide",
  title: "How to Plan a Balanced Bali Holiday",
  excerpt:
    "A good Bali trip gives you time for beaches, temples, nature, local food, and slow mornings. Here is how to shape an itinerary that feels full without feeling rushed.",
  image: "https://res.cloudinary.com/dh1vnkssv/image/upload/f_auto,q_auto/hero_tllhfl",
  publishedAt: "May 2026",
  highlights: ["Choose two main areas", "Mix active days with slower mornings", "Keep transfers simple"],
  sections: [
    {
      heading: "Start with your travel rhythm",
      body: [
        "The best Bali itinerary is not always the busiest one. Before choosing destinations, decide whether your group wants slow resort time, cultural visits, family-friendly activities, or a stronger adventure pace.",
        "Once the rhythm is clear, it becomes easier to place beaches, temples, waterfalls, shopping stops, and restaurants into a schedule that feels smooth.",
      ],
    },
    {
      heading: "Group nearby destinations together",
      body: [
        "Bali looks compact on a map, but traffic and mountain roads can make travel time longer than expected. Grouping nearby destinations keeps the day comfortable and gives you more time at each stop.",
        "For example, combine Uluwatu with beach clubs or seafood dinner, Ubud with rice terraces and art markets, and Bedugul with lakeside temples and cool mountain views.",
      ],
    },
    {
      heading: "Leave space for real rest",
      body: [
        "A balanced holiday needs breathing room. Add a lighter morning after late dinners, long transfers, or full-day tours so the trip does not feel like a checklist.",
        "That extra space also helps when weather changes, photos take longer, or your group finds a place they want to enjoy a little longer.",
      ],
    },
  ],
};

export const articles: Article[] = [
  {
    slug: "relaxing-nusa-dua-escape",
    category: "Luxury",
    title: "Where to Stay for a Relaxing Nusa Dua Escape",
    excerpt: "Quiet beaches, polished resorts, and easy transfers make Nusa Dua a strong choice for a slower Bali holiday.",
    image: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443582/nusadua_s8l2hp.jpg",
    publishedAt: "May 2026",
    highlights: ["Best for families and couples", "Easy airport access", "Calm beach atmosphere"],
    sections: [
      {
        heading: "Why Nusa Dua works for slower trips",
        body: [
          "Nusa Dua is built for comfort. The area has calm beaches, tidy resort zones, and a quieter pace than the central nightlife areas.",
          "It is a strong base when your trip focuses on rest, family time, spa days, beach walks, and polished service.",
        ],
      },
      {
        heading: "What to add around the area",
        body: [
          "Keep your days simple with beach time in the morning, a relaxed lunch, and one nearby activity in the afternoon.",
          "Popular pairings include watersports at Tanjung Benoa, sunset at Uluwatu, or dinner around Jimbaran after a light day.",
        ],
      },
    ],
  },
  {
    slug: "adventure-days-kuta-seminyak",
    category: "Adventure",
    title: "Adventure Days Around Kuta and Seminyak",
    excerpt: "Pair watersports, rafting, sunrise treks, and local markets without losing the comfort of a well-paced trip.",
    image: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443801/advanture_mdfcry.jpg",
    publishedAt: "May 2026",
    highlights: ["Good base for active travelers", "Easy evening options", "Plan early starts carefully"],
    sections: [
      {
        heading: "Use the area as a flexible base",
        body: [
          "Kuta and Seminyak are practical bases for travelers who want activity during the day and easy dining or shopping at night.",
          "From here, you can reach watersports, beach activities, markets, and many southern Bali routes without changing hotels too often.",
        ],
      },
      {
        heading: "Balance adventure with comfort",
        body: [
          "For heavier activities like rafting or sunrise treks, keep the next block of the day lighter. A good schedule should leave room for showers, meals, and recovery.",
          "This pacing helps the trip stay exciting without turning every day into a long commute.",
        ],
      },
    ],
  },
  {
    slug: "weekend-bali-itinerary",
    category: "Short Escape",
    title: "A Weekend Bali Itinerary That Still Feels Complete",
    excerpt: "For short stays, focus on fewer areas, stronger experiences, and clean transfer timing between each stop.",
    image: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443911/escape_l4sfoo.jpg",
    publishedAt: "May 2026",
    highlights: ["Pick one main region", "Avoid long backtracking", "Prioritize signature stops"],
    sections: [
      {
        heading: "Choose fewer places",
        body: [
          "A weekend trip works best when you do not try to cover the whole island. Pick one main region and build around its strongest experiences.",
          "This gives you a trip that feels complete because each stop has enough time to matter.",
        ],
      },
      {
        heading: "Make transfer timing part of the plan",
        body: [
          "Short trips are sensitive to travel time. Place airport transfers, hotel check-in, and dinner areas in a logical order.",
          "A clean route can make two or three days feel surprisingly full without adding stress.",
        ],
      },
    ],
  },
  {
    slug: "temple-etiquette-cultural-tips",
    category: "Culture",
    title: "Temple Etiquette and Cultural Travel Tips",
    excerpt: "Simple customs, dress codes, and timing notes that help you enjoy Bali's cultural sites with respect.",
    image: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443801/advanture_mdfcry.jpg",
    publishedAt: "May 2026",
    highlights: ["Wear proper temple clothing", "Respect ceremony areas", "Follow local guidance"],
    sections: [
      {
        heading: "Dress with respect",
        body: [
          "Most temple visits require a sarong and sash. Some sites provide rentals, but bringing your own makes the visit smoother.",
          "Keep shoulders and knees covered where required, and follow any additional guidance from your local guide or temple staff.",
        ],
      },
      {
        heading: "Be mindful during ceremonies",
        body: [
          "Bali's temples are active spiritual spaces. Give worshippers room, avoid blocking pathways, and keep photo moments respectful.",
          "Small details like lowering your voice and waiting before entering certain areas make the visit more comfortable for everyone.",
        ],
      },
    ],
  },
  {
    slug: "private-tour-or-open-trip",
    category: "Planning",
    title: "Private Tour or Open Trip: Which One Fits You?",
    excerpt: "Choose the right style based on your budget, schedule, comfort level, and how much flexibility you want.",
    image: "https://res.cloudinary.com/dh1vnkssv/image/upload/v1777443582/nusadua_s8l2hp.jpg",
    publishedAt: "May 2026",
    highlights: ["Private tours give flexibility", "Open trips can be more efficient", "Match the style to your group"],
    sections: [
      {
        heading: "When private tours make sense",
        body: [
          "Private tours are ideal when your group wants flexible timing, custom stops, easier family logistics, or a more personal pace.",
          "They are also useful when you have specific restaurants, photo spots, or hotel pickup needs.",
        ],
      },
      {
        heading: "When open trips are a good fit",
        body: [
          "Open trips can be efficient for travelers who like fixed schedules and shared experiences. They often keep costs simpler and work well for popular routes.",
          "The tradeoff is less flexibility, so it is important to choose a package with a pace that already matches your expectations.",
        ],
      },
    ],
  },
  {
    slug: "easy-food-stops-between-destinations",
    category: "Food",
    title: "Easy Food Stops to Add Between Destinations",
    excerpt: "A practical way to plan lunch, coffee, and sunset dinner stops so your itinerary keeps moving smoothly.",
    image: "https://res.cloudinary.com/dh1vnkssv/image/upload/f_auto,q_auto/hero_tllhfl",
    publishedAt: "May 2026",
    highlights: ["Plan meals by route", "Book popular dinner spots", "Keep coffee stops short"],
    sections: [
      {
        heading: "Let the route decide the meal",
        body: [
          "Food stops work best when they support the route instead of pulling you far away from it. Choose lunch near the next destination or on the way to the afternoon stop.",
          "This keeps the itinerary moving and prevents meal breaks from becoming unexpected detours.",
        ],
      },
      {
        heading: "Use dinner as a soft landing",
        body: [
          "After a full tour day, dinner should feel easy. Pick an area close to your hotel or near the final attraction so the group can relax sooner.",
          "For sunset restaurants or popular cafes, reservations are worth arranging before the day gets busy.",
        ],
      },
    ],
  },
];

export const allArticles = [featuredArticle, ...articles];

export function getArticleBySlug(slug: string) {
  return allArticles.find((article) => article.slug === slug);
}
