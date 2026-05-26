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
  highlights: ["Choose two main areas", "Mix active days with slower mornings", "Keep transfers simple", "Plan meals by route"],
  sections: [
    {
      heading: "Start with your travel rhythm",
      body: [
        "The best Bali itinerary is not always the busiest one. Before choosing destinations, decide whether your group wants slow resort time, cultural visits, family-friendly activities, or a stronger adventure pace.",
        "Once the rhythm is clear, it becomes easier to place beaches, temples, waterfalls, shopping stops, and restaurants into a schedule that feels smooth.",
        "This early decision also helps avoid common planning mistakes, such as booking a sunrise activity after a late dinner or placing a long transfer in the middle of a day that should feel relaxing.",
      ],
    },
    {
      heading: "Choose a few strong anchors",
      body: [
        "A balanced trip usually starts with two or three strong anchor experiences. These can be a temple visit, a beach sunset, a nature route, a cultural village, or a special dinner.",
        "After the anchors are set, smaller stops can be added around them. This keeps the day focused and prevents the itinerary from becoming a long list of quick photo stops.",
        "For families, the anchors may be comfort and easy timing. For couples, the anchors may be scenery and dining. For active travelers, the anchors may be waterfalls, trekking, or adventure routes.",
      ],
    },
    {
      heading: "Group nearby destinations together",
      body: [
        "Bali looks compact on a map, but traffic and mountain roads can make travel time longer than expected. Grouping nearby destinations keeps the day comfortable and gives you more time at each stop.",
        "For example, combine Uluwatu with beach clubs or seafood dinner, Ubud with rice terraces and art markets, and Bedugul with lakeside temples and cool mountain views.",
        "This approach also makes pickup and drop-off simpler. A clean route helps the driver plan the best order, avoid unnecessary backtracking, and adjust timing if the group wants to stay longer at one location.",
      ],
    },
    {
      heading: "Leave space for real rest",
      body: [
        "A balanced holiday needs breathing room. Add a lighter morning after late dinners, long transfers, or full-day tours so the trip does not feel like a checklist.",
        "That extra space also helps when weather changes, photos take longer, or your group finds a place they want to enjoy a little longer.",
        "Rest does not have to mean an empty day. It can be a slow breakfast, a short spa session, an easy beach walk, or a cafe stop before the next activity.",
      ],
    },
    {
      heading: "Use meals to make the route smoother",
      body: [
        "Meal planning can make a big difference in Bali. A lunch stop near the next destination keeps the day moving, while dinner close to the final stop helps everyone relax sooner.",
        "If the group wants a sunset restaurant, popular cafe, or seafood dinner, it is better to place that plan into the route early. Good meal timing often turns a normal transfer into a more comfortable travel day.",
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
    highlights: ["Best for families and couples", "Easy airport access", "Calm beach atmosphere", "Strong resort comfort"],
    sections: [
      {
        heading: "Why Nusa Dua works for slower trips",
        body: [
          "Nusa Dua is built for comfort. The area has calm beaches, tidy resort zones, and a quieter pace than the central nightlife areas.",
          "It is a strong base when your trip focuses on rest, family time, spa days, beach walks, and polished service.",
          "The area also works well for travelers who prefer predictable facilities. Many hotels have direct beach access, organized dining, and easy pickup points for private tours.",
        ],
      },
      {
        heading: "Who should choose Nusa Dua",
        body: [
          "Nusa Dua is a good match for couples, families with children, senior travelers, and guests who want a calm first or final part of the holiday.",
          "It is especially useful when the goal is to slow down after a long flight or end the trip with a few easy days before departure.",
          "If your group wants late-night crowds, busy shopping streets, or frequent cafe hopping, Nusa Dua may feel too quiet. In that case, it can be paired with Seminyak, Kuta, or Ubud for a more varied trip.",
        ],
      },
      {
        heading: "What to add around the area",
        body: [
          "Keep your days simple with beach time in the morning, a relaxed lunch, and one nearby activity in the afternoon.",
          "Popular pairings include watersports at Tanjung Benoa, sunset at Uluwatu, or dinner around Jimbaran after a light day.",
          "For guests who want a cultural touch, a half-day route can include a temple stop, a scenic cliff viewpoint, or a local seafood dinner without making the day too heavy.",
        ],
      },
      {
        heading: "How to pace a Nusa Dua stay",
        body: [
          "A slower Nusa Dua itinerary works best when it avoids early starts every day. Choose one full tour day, then place lighter activities around it.",
          "If you plan to visit central or north Bali from Nusa Dua, start earlier and keep the next morning free. This keeps the resort stay relaxing instead of turning it into a commute-heavy schedule.",
          "For short stays, it is better to pick one main outside route, such as Uluwatu, Ubud, or a south Bali highlight route, then leave the rest of the time for the beach and hotel facilities.",
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
    highlights: ["Good base for active travelers", "Easy evening options", "Plan early starts carefully", "Keep recovery time realistic"],
    sections: [
      {
        heading: "Use the area as a flexible base",
        body: [
          "Kuta and Seminyak are practical bases for travelers who want activity during the day and easy dining or shopping at night.",
          "From here, you can reach watersports, beach activities, markets, and many southern Bali routes without changing hotels too often.",
          "The main advantage is convenience. After a day outside the hotel, the group can still find dinner, massage, shopping, or sunset drinks without needing another long drive.",
        ],
      },
      {
        heading: "Pick the right adventure days",
        body: [
          "Adventure does not have to mean doing everything in one day. A good plan might separate watersports, rafting, trekking, and cultural routes into different blocks.",
          "If the group wants a sunrise trek, prepare for a very early pickup and avoid putting a late-night plan before it. If the group wants rafting, place lunch and recovery time after the activity.",
          "For mixed groups, combine one active highlight with one easy scenic stop. This keeps the day interesting for active travelers while still comfortable for guests who prefer a slower pace.",
        ],
      },
      {
        heading: "Balance adventure with comfort",
        body: [
          "For heavier activities like rafting or sunrise treks, keep the next block of the day lighter. A good schedule should leave room for showers, meals, and recovery.",
          "This pacing helps the trip stay exciting without turning every day into a long commute.",
          "It also gives the driver and guide more flexibility. If weather changes or the activity takes longer than expected, the day can still continue without feeling rushed.",
        ],
      },
      {
        heading: "Use evenings wisely",
        body: [
          "Kuta and Seminyak are strong evening bases because dinner, cafes, shopping, and beach areas are close together. Use this advantage instead of adding another distant stop at the end of the day.",
          "After an active route, choose a dinner area near the hotel or near the final destination. This simple detail often makes the difference between a fun day and an exhausting one.",
          "If you want a sunset moment, plan it as the final highlight before dinner. The route will feel more natural, and the group can end the day without more backtracking.",
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
    highlights: ["Pick one main region", "Avoid long backtracking", "Prioritize signature stops", "Protect airport timing"],
    sections: [
      {
        heading: "Choose fewer places",
        body: [
          "A weekend trip works best when you do not try to cover the whole island. Pick one main region and build around its strongest experiences.",
          "This gives you a trip that feels complete because each stop has enough time to matter.",
          "For many travelers, one beach area plus one cultural or scenic route is enough. A focused trip often feels more memorable than a schedule with too many quick stops.",
        ],
      },
      {
        heading: "Design around arrival and departure",
        body: [
          "Short trips are shaped by flight time. If arrival is late, keep the first night simple and start the main activity the next morning.",
          "If departure is early, avoid placing a far destination on the final day. Choose a nearby meal, shopping stop, spa, or short beach visit instead.",
          "This protects the mood of the trip. A clean airport plan makes the weekend feel organized rather than rushed.",
        ],
      },
      {
        heading: "Make transfer timing part of the plan",
        body: [
          "Short trips are sensitive to travel time. Place airport transfers, hotel check-in, and dinner areas in a logical order.",
          "A clean route can make two or three days feel surprisingly full without adding stress.",
          "It is also useful to keep hotel location close to the main activity area. The less time spent crossing the island, the more time the group has for the experience itself.",
        ],
      },
      {
        heading: "Choose signature moments",
        body: [
          "A weekend itinerary should have a few moments that define the trip. This might be a sunset cliff, a temple gate, a beach lunch, a rice terrace walk, or a seafood dinner.",
          "These signature stops help the trip feel complete even when time is limited. They also make it easier to decide what to skip when the schedule becomes tight.",
          "The best short escape is not about seeing everything. It is about choosing the right things and giving them enough space to feel worthwhile.",
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
    highlights: ["Wear proper temple clothing", "Respect ceremony areas", "Follow local guidance", "Keep photo moments respectful"],
    sections: [
      {
        heading: "Dress with respect",
        body: [
          "Most temple visits require a sarong and sash. Some sites provide rentals, but bringing your own makes the visit smoother.",
          "Keep shoulders and knees covered where required, and follow any additional guidance from your local guide or temple staff.",
          "Comfortable clothing also matters because many temple areas involve stairs, stone paths, or open courtyards. Choose footwear that is easy to remove if required.",
        ],
      },
      {
        heading: "Understand active temple spaces",
        body: [
          "Many temples in Bali are not only tourist attractions. They are active spiritual spaces where local communities pray, prepare offerings, and hold ceremonies.",
          "Because of that, access can change depending on the day. Certain areas may be closed, crowded, or reserved for worshippers.",
          "A flexible attitude makes the visit better. If a guide suggests a different photo angle or walking route, it is usually to protect ceremony flow and guest comfort.",
        ],
      },
      {
        heading: "Be mindful during ceremonies",
        body: [
          "Bali's temples are active spiritual spaces. Give worshippers room, avoid blocking pathways, and keep photo moments respectful.",
          "Small details like lowering your voice and waiting before entering certain areas make the visit more comfortable for everyone.",
          "If a ceremony is happening, observe from an appropriate distance. Avoid using flash, stepping over offerings, or interrupting people who are praying.",
        ],
      },
      {
        heading: "Travel with local guidance",
        body: [
          "A local driver or guide can help explain where to stand, what to wear, and how to move through the temple area respectfully.",
          "This is especially helpful for first-time visitors because each site may have slightly different rules, layout, and ceremony timing.",
          "Good cultural travel is not complicated. It simply asks guests to slow down, listen, and treat sacred places as living spaces rather than only photo locations.",
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
    highlights: ["Private tours give flexibility", "Open trips can be more efficient", "Match the style to your group", "Check pickup and timing rules"],
    sections: [
      {
        heading: "When private tours make sense",
        body: [
          "Private tours are ideal when your group wants flexible timing, custom stops, easier family logistics, or a more personal pace.",
          "They are also useful when you have specific restaurants, photo spots, or hotel pickup needs.",
          "Private tours work especially well for families, couples, senior travelers, and groups that do not want to follow a fixed public schedule.",
        ],
      },
      {
        heading: "What flexibility really means",
        body: [
          "Flexibility does not mean the route has no limits. It means the day can be adjusted within realistic travel time, attraction opening hours, and local conditions.",
          "For example, a private tour may allow a longer lunch, a different photo stop, or a hotel pickup adjustment. It still needs a sensible route so the day stays smooth.",
          "The best private tour is planned clearly before departure, then adjusted gently if the group needs more time at certain stops.",
        ],
      },
      {
        heading: "When open trips are a good fit",
        body: [
          "Open trips can be efficient for travelers who like fixed schedules and shared experiences. They often keep costs simpler and work well for popular routes.",
          "The tradeoff is less flexibility, so it is important to choose a package with a pace that already matches your expectations.",
          "Open trips are often better for solo travelers or small groups who are comfortable with shared pickup points, fixed departure times, and a route that follows the group schedule.",
        ],
      },
      {
        heading: "How to choose the right style",
        body: [
          "Start with your group size, budget, and comfort level. If the group includes children or older guests, private transport usually makes the day easier.",
          "If budget is the main priority and the route is already exactly what you want, an open trip can be a practical option.",
          "Whichever style you choose, confirm pickup area, inclusions, entrance fees, meal rules, and cancellation terms before booking. Clear expectations make the trip feel more professional from the start.",
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
    highlights: ["Plan meals by route", "Book popular dinner spots", "Keep coffee stops short", "Match food stops to the group"],
    sections: [
      {
        heading: "Let the route decide the meal",
        body: [
          "Food stops work best when they support the route instead of pulling you far away from it. Choose lunch near the next destination or on the way to the afternoon stop.",
          "This keeps the itinerary moving and prevents meal breaks from becoming unexpected detours.",
          "A good route-based lunch also gives the driver a clearer plan for parking, timing, and the next stop. That matters on busy travel days.",
        ],
      },
      {
        heading: "Choose food stops by travel style",
        body: [
          "Families may prefer restaurants with easy seating, clean facilities, and familiar menu options. Couples may want a scenic cafe or sunset dinner. Adventure groups may need a quick, filling lunch after an activity.",
          "Matching the food stop to the group makes the day feel more thoughtful. It also reduces delays because guests know what kind of break to expect.",
          "If the group has dietary needs, mention them before the route is finalized. It is easier to plan around food preferences early than to search for options during the tour.",
        ],
      },
      {
        heading: "Use dinner as a soft landing",
        body: [
          "After a full tour day, dinner should feel easy. Pick an area close to your hotel or near the final attraction so the group can relax sooner.",
          "For sunset restaurants or popular cafes, reservations are worth arranging before the day gets busy.",
          "Dinner can also become the final experience of the day. A seafood dinner, local restaurant, or casual cafe can close the route nicely without adding another attraction.",
        ],
      },
      {
        heading: "Keep coffee and snack stops controlled",
        body: [
          "Coffee stops are useful, but they can quietly stretch the schedule. Decide whether the stop is a quick break or a real part of the experience.",
          "For long routes, short snack breaks can help the group stay comfortable. For shorter routes, too many small stops can reduce time at the main destination.",
          "The goal is not to remove breaks. The goal is to place them where they improve the day instead of slowing it down.",
        ],
      },
    ],
  },
];

export const allArticles = [featuredArticle, ...articles];

export function getArticleBySlug(slug: string) {
  return allArticles.find((article) => article.slug === slug);
}
