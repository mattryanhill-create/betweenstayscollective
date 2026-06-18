import type { FaqItem } from '@/components/programmatic/FaqAccordion';

export interface CityContent {
  slug: string;
  /**
   * 1-2 sentence city-specific lead-in to "The Setup" section.
   * Inserted BEFORE the shared occupancy/ADR paragraph to break template fatigue.
   */
  setupOpening: string;
  /**
   * 1-2 sentence city-specific framing for "The Hidden Cost" section.
   * Inserted BEFORE the shared 25-30% fee paragraph.
   */
  hiddenCostAngle: string;
  whyHereParagraphs: string[];
  cityFaqs: FaqItem[];
}

export const cityContent: CityContent[] = [
  {
    slug: 'largo',
    setupOpening:
      'Largo owners sit in a different competitive position than the rest of the county. With over 1,000 active short-term rentals in the submarket, your listing is competing for attention against three times the inventory of Seminole or Dunedin. The owners winning here are the ones treating Largo as a midweek and shoulder-season market, not just a beach overflow market.',
    hiddenCostAngle:
      'In a market with 1,021 competing listings, a national manager treating your Largo property as undifferentiated Pinellas inventory is the fastest way to lose ground. The fees are only half the problem. The bigger cost is being priced and positioned the same as every other Largo property on the platform.',
    whyHereParagraphs: [
      'Largo sits at the geographic center of Pinellas County, which sounds boring on a map but matters for short-term rental performance. Guests can reach Clearwater Beach, Indian Rocks, and downtown St. Pete inside 20 minutes from a Largo rental. That kind of central placement consistently outperforms beachfront properties on weekday bookings, because Largo guests are not just beach tourists. They are also business travelers, medical visitors to the Largo medical district, and families who want a pool without paying beach prices.',
      'The AirDNA numbers reflect this. Largo holds an AirDNA Market Score of 74 with an average daily rate of $259 and a healthy 64% occupancy. The trade-off is that Largo has 1,021 active short-term rentals competing for that demand, which is more than three times the Seminole supply. Without a local pricing strategy, Largo properties get lost in the middle of the search results.',
      'Top-quartile Largo properties earn approximately $81,000 per year. Median Largo properties earn $54,154. The $27,000 gap is what local listing work, dynamic pricing, and faster guest response time tend to recover. National managers usually treat Largo as undifferentiated Pinellas inventory. We do not.',
    ],
    cityFaqs: [
      {
        question: 'Do Largo properties really compete with beach properties?',
        answer:
          'Yes, on weekdays and shoulder seasons. Beach properties win on peak weekends. Largo properties win on midweek bookings because guests get pool, parking, and proximity to both the gulf beaches and Tampa for roughly 60% of the cost of equivalent beachfront. A well-priced Largo property captures both audiences.',
      },
      {
        question: 'How do you handle the high competition in Largo?',
        answer:
          'Three things. First, listing photography and copy that highlights the central location instead of trying to compete on beach access. Second, dynamic pricing that adjusts daily based on demand patterns specific to Largo, not Pinellas as a whole. Third, faster guest response time, which Airbnb weighs in search ranking.',
      },
      {
        question: 'Is the Largo medical corridor a real demand driver?',
        answer:
          'Yes, especially Largo Medical Center and the surrounding clinics. We track midweek bookings from medical visitors as a distinct demand segment when pricing. Properties within 10 minutes of the medical district benefit from this; properties further out lean more on tourist demand.',
      },
    ],
  },
  {
    slug: 'dunedin',
    setupOpening:
      'Dunedin owners have a different problem than Clearwater or St. Pete owners. Supply is tight at only 298 active short-term rentals, which sounds like an advantage until you realize that repeat guests expect a level of personalization national managers do not deliver. Festival weekends sell out fast. Off-season weeks suffer when no one is actively pricing them.',
    hiddenCostAngle:
      'In a repeat-guest market like Dunedin, the worst outcome of using a national manager is not the fee. It is the broken continuity. A guest who books your property three years in a row for the Highland Games does so because of the relationship, not the brand. When that listing changes hands or sits under a manager who churns staff, the repeat guest does not come back.',
    whyHereParagraphs: [
      'Dunedin is a different animal from the rest of Pinellas County. The walkable downtown, the Scottish heritage festivals, and the Honeymoon Island gateway position create a repeat-guest market that beach-only properties cannot match. Dunedin guests come back. They book the same property year after year for the Highland Games. They tell their friends. The lifetime value per guest is meaningfully higher than the county average.',
      'The numbers tell the trade-off honestly. Dunedin holds an AirDNA Market Score of 74 with an average daily rate of $201, which is well below the Pinellas county-wide ADR. Occupancy is steady at 64% and supply is tight at only 298 active short-term rentals, which is roughly one-third the Largo supply. Lower ADR, lower competition, and higher repeat-guest rates net out to predictable annual revenue around $41,778 with less volatility than the beach submarkets.',
      'Top-quartile Dunedin properties earn approximately $63,000 per year. The $21,000 gap between top-quartile and median in Dunedin is smaller than other Pinellas submarkets, which means the ceiling is lower but the floor is higher. Dunedin owners who price for repeat bookings and lean into the local festival calendar tend to outperform owners who treat their property as generic gulf-coast inventory.',
    ],
    cityFaqs: [
      {
        question: 'Is the Dunedin festival calendar actually a revenue driver?',
        answer:
          'Yes. The Highland Games in April, the Scottish Festival, the Mardi Gras parade, and the Honeymoon Island peak season all generate predictable demand spikes. Properties that price ahead of these events capture 30-40% premiums over baseline. Properties that do not, leave that money on the table.',
      },
      {
        question: 'Why is the Dunedin ADR lower than other Pinellas cities?',
        answer:
          'Smaller average property size and a guest base that skews toward solo travelers, couples, and small families rather than the larger groups that drive ADR in beachfront condos. The trade-off is higher occupancy and meaningfully higher repeat-booking rates, which net out favorably over a year.',
      },
      {
        question: 'Do you work with Dunedin Cottage District properties?',
        answer:
          'Yes. The historic cottages in the Dunedin Cottage District are some of the most distinctive inventory in Pinellas County and they reward owners who lean into the character of the property rather than sanitizing it for generic appeal. Listing photography and copy work matters more here than in most submarkets.',
      },
    ],
  },
  {
    slug: 'pinellas-park',
    setupOpening:
      'Pinellas Park owners are in the steepest occupancy decline in the county. Year-over-year nights booked are down 12%, which is meaningfully worse than the rest of Pinellas. The owners holding ground here are the ones running real pricing strategy. The owners on flat rates set six months ago are watching their calendars empty.',
    hiddenCostAngle:
      'When a submarket is correcting downward, slow operators get hit hardest. National managers update Pinellas Park pricing on a quarterly cycle, sometimes longer. By the time the new rate appears, the demand window has already moved. The fee is a smaller problem than the slow-pricing problem.',
    whyHereParagraphs: [
      'Pinellas Park is the most overlooked short-term rental submarket in the county, and that is exactly the opportunity. It sits inland between St. Petersburg and Clearwater, has direct access to both via 275, and consistently undercuts beach submarkets on ADR while holding similar occupancy. The AirDNA Market Score of 70 is solid, the average daily rate of $176 is modest, and the occupancy holds at 63%.',
      'The supply story matters here. Pinellas Park has fewer active short-term rentals than the surrounding cities, which means owners face less direct competition. The trade-off is that guest demand is more price-sensitive in this submarket. Properties that lean into value positioning, group accommodations, and pool amenities tend to outperform properties that try to compete with beachfront on premium pricing.',
      'Top-quartile Pinellas Park properties earn approximately $55,000 per year. The 12% year-over-year occupancy decline is the steepest in the county, which makes operational quality more important than ever. Owners who handed their property to a national manager and assumed steady performance are watching their numbers slip the fastest. A local team that adjusts pricing weekly and responds to guest issues inside 15 minutes recovers most of that ground.',
    ],
    cityFaqs: [
      {
        question: 'Is Pinellas Park really a viable short-term rental market?',
        answer:
          'Yes, for the right property type. Properties with pools, three or more bedrooms, and parking for multiple vehicles outperform here. The market favors families and groups who want gulf access without paying gulf-front prices. Solo travelers and couples are a tougher sell in this submarket.',
      },
      {
        question: 'Why is the year-over-year occupancy decline so steep here?',
        answer:
          'Two reasons. First, increased competition from Tampa Bay short-term rentals that previously stayed inside Hillsborough County. Second, slower price adjustments from national managers who treat Pinellas Park as undifferentiated overflow inventory. A local team that prices for the specific micro-demand patterns in this submarket recovers most of the difference.',
      },
      {
        question: 'Do you handle properties near US-19?',
        answer:
          'Yes. The US-19 corridor is the spine of Pinellas Park demand because it connects to both St. Pete and Clearwater. Properties within a few minutes of US-19 benefit from this access; properties further inland lean more on local amenity offerings.',
      },
    ],
  },
  {
    slug: 'clearwater',
    setupOpening:
      'If you own in Clearwater, you have watched new listings flood the market while your booking rate stays flat. Three years of supply growth outpacing demand growth has reshaped what works here. Generic two-bedroom condos with gulf views are no longer the obvious winners. Differentiated properties with a clear point of view are.',
    hiddenCostAngle:
      'Clearwater is the submarket where being treated as generic inventory hurts the most. National managers price for occupancy and accept lower ADR to fill calendars. That works for them at scale because they spread the loss across thousands of properties. For a single owner, it means your $400-per-night condo is competing on price with the $200-per-night condo two buildings down. The market punishes that.',
    whyHereParagraphs: [
      'Clearwater is the most visible short-term rental market in Pinellas County and also the most competitive. The AirDNA Market Score of 61 is lower than the inland Pinellas submarkets, which surprises owners until they see why: massive supply growth has outpaced demand growth for three straight years. Clearwater holds an average daily rate of $186 and a 63% occupancy, but the year-over-year occupancy decline of 8.7% reflects how saturated this market has become.',
      'That said, Clearwater is far from a bad market. It is just a different game. The properties that thrive in Clearwater right now are not the generic two-bedroom condos with gulf views. They are the differentiated properties: ground-floor units with private outdoor space, properties with workspace and fast wifi for digital nomads, and properties that have invested in serious listing photography and copy work. Generic Clearwater inventory is losing share to differentiated Clearwater inventory.',
      "Top-quartile Clearwater properties earn approximately $59,000 per year, but the gap between top-quartile and bottom-quartile is the widest in the county. This is the submarket where listing quality matters most. Owners who treat their Clearwater rental as a commodity get commodity pricing. Owners who treat it as a specific product for a specific guest get rewarded with premium rates and repeat bookings.",
    ],
    cityFaqs: [
      {
        question: 'Is Clearwater Beach oversaturated?',
        answer:
          'Yes, on supply. No, on demand for differentiated properties. Generic two-bedroom condos with gulf views are competing on price and watching margins compress. Properties with a clear point of view, strong listing work, and dynamic pricing are still hitting top-quartile revenue. The market punishes mediocrity here more than anywhere else in Pinellas.',
      },
      {
        question: 'How do you compete with the big managers in Clearwater?',
        answer:
          "We do not compete on volume. National managers are pricing for occupancy and accepting lower ADR to fill calendars. That works for them at scale. It does not work for individual owners. We price for revenue per available night, which usually means slightly lower occupancy and meaningfully higher ADR. The math nets out in the owner's favor.",
      },
      {
        question: 'Do you take Clearwater Beach condos specifically?',
        answer:
          'Yes, but selectively. We are picky about the buildings we accept because the boutique model breaks if we cannot maintain quality control. Buildings with reasonable HOA rules, working amenities, and consistent cleaning access work well. Buildings with restrictive STR rules or unreliable building maintenance do not.',
      },
    ],
  },
  {
    slug: 'st-petersburg',
    setupOpening:
      'St. Pete is not one market, it is five. Downtown lofts compete on different axes than the southern beaches, which compete on different axes than Old Northeast bungalows. The AirDNA market score of 58 averages all of these together and obscures the reality that owners in the strongest sub-submarkets are quietly outperforming the county.',
    hiddenCostAngle:
      'National managers treat St. Pete as one market and price it as one market. That is the single biggest reason individual St. Pete owners underperform their potential. A downtown St. Pete loft priced like a Tropicana Field overflow property leaves real revenue on the table every single weekend.',
    whyHereParagraphs: [
      'St. Petersburg is the most diverse short-term rental market in the county, which makes it the hardest to generalize about. Downtown loft properties compete on a different axis than waterfront properties on the southern beaches, which compete on a different axis than properties in historic districts like Old Northeast or Kenwood. The AirDNA Market Score of 58 understates this because it averages all of these submarkets together. The reality is that individual St. Pete sub-submarkets perform very differently.',
      'Downtown St. Pete is the strongest sub-submarket right now. The walkable downtown, the museum district, the burgeoning food scene, and the Tropicana Field events drive consistent demand. Properties within walking distance of Beach Drive routinely hit top-quartile revenue. Properties further out depend more on the gulf beaches and behave more like Treasure Island or St. Pete Beach inventory than like downtown inventory.',
      'Top-quartile St. Pete properties earn approximately $78,000 per year, well above the median of $51,973. The gap reflects the importance of micro-location within this city. National managers price St. Pete as one market. We price it as five different markets, because that is what it actually is. The result is meaningfully better revenue capture for owners willing to be specific about who their guest actually is.',
    ],
    cityFaqs: [
      {
        question: 'Why does St. Pete have a lower AirDNA Market Score than inland cities?',
        answer:
          'The score averages strong sub-submarkets with weaker ones. Downtown St. Pete and Old Northeast properties significantly outperform the score. Properties further from downtown and not on the water tend to underperform. The city as a whole is a fine market; the specific neighborhood matters more here than in most Pinellas submarkets.',
      },
      {
        question: 'St. Pete has thousands of listings. How do I stand out?',
        answer:
          'Supply volume alone is misleading because most of those listings compete in different sub-markets. A downtown St. Pete loft is not really competing with a St. Pete Beach condo or a Kenwood bungalow, even though they all show up under the same city name. The properties that stand out are the ones that pick a specific guest profile (downtown food traveler, beach family, design-district visitor) and build the listing entirely around that profile rather than trying to appeal to everyone.',
      },
      {
        question: 'Do you work with downtown St. Pete properties?',
        answer:
          'Yes, and these are some of our strongest performers. Downtown St. Pete benefits from walkability, the food scene, the museum district, and consistent year-round event demand. The pricing strategy here is different from beach properties because the demand peaks are spread across the calendar instead of concentrated in winter and summer.',
      },
      {
        question: 'What about historic district properties like Old Northeast?',
        answer:
          'Strong market for the right property. Guests who book in Old Northeast are usually looking for character and architecture, not generic vacation rental amenities. Listing work matters disproportionately here. The properties that lean into the historic character outperform the properties that try to make a 1920s bungalow feel like a beach condo.',
      },
    ],
  },
  {
    slug: 'palm-harbor',
    setupOpening:
      'Palm Harbor owners do not have a supply problem. They have a seasonality problem. Winter and event-driven demand is strong. Summer is softer than the beach submarkets. The owners who do well here are the ones pricing for the Palm Harbor calendar, not the generic Pinellas calendar.',
    hiddenCostAngle:
      'In a seasonal market like Palm Harbor, flat year-round pricing is the most expensive mistake an owner can make. A property priced the same in July as in February leaves thousands of dollars on the table during Valspar week and Innisbrook event season, then sits half-empty in June.',
    whyHereParagraphs: [
      'Palm Harbor is the quietest serious short-term rental market in north Pinellas. The AirDNA Market Score of 54 reflects that this is not a tourist-first city, but the average daily rate of $247 and the steady demand from Innisbrook Resort events, the Tarpon Springs sponge docks, and the proximity to Honeymoon Island net out to predictable annual revenue around $48,000. Palm Harbor occupancy holds at 60%, slightly below the county average, but the ADR premium more than compensates.',
      'The market here rewards a specific kind of property: larger homes that can host groups attending Innisbrook events, families visiting the Tarpon Springs area, and travelers who want gulf access without the chaos of Clearwater. Smaller condos and one-bedroom properties tend to underperform in Palm Harbor because the guest demographic skews toward groups and families. Owners who match their property to the actual demand pattern here do well.',
      'Top-quartile Palm Harbor properties earn approximately $72,000 per year. The gap between top-quartile and median is meaningful because Palm Harbor is one of the more forgiving submarkets for operational improvements. Cleaner photography, better listing copy, and dynamic pricing produce outsized results here because the underlying demand is steady but the competition is less intense than in beachfront submarkets.',
    ],
    cityFaqs: [
      {
        question: 'Does Innisbrook Resort actually drive bookings?',
        answer:
          'Yes, especially during the Valspar Championship in March and the corporate event calendar that runs from October through May. Properties within 15 minutes of Innisbrook benefit meaningfully from this demand. We price ahead of the Valspar week specifically because the demand spike is predictable and short.',
      },
      {
        question: 'Why is Palm Harbor occupancy lower than other Pinellas cities?',
        answer:
          'Palm Harbor has more seasonality than the rest of Pinellas. The winter and event-driven demand is strong, but the summer is softer than the beach submarkets. This is fine for owners who price seasonally; it is a problem for owners on flat year-round pricing. A local team that prices for the specific Palm Harbor demand calendar handles this well.',
      },
      {
        question: 'Do you take properties in the Tarpon Springs adjacency?',
        answer:
          'Yes. Properties near the Tarpon Springs sponge docks and the Greek heritage district capture a specific kind of guest who is harder to reach with generic listing copy. We tend to outperform national managers in this sub-submarket because we treat the listing work as a craft instead of as a template.',
      },
    ],
  },
];

export function getCityContent(slug: string): CityContent | undefined {
  return cityContent.find((c) => c.slug === slug);
}
