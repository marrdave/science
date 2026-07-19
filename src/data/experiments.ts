import type { Experiment } from "../types";

/**
 * The starting library: 17 experiments the kit genuinely supports, fully written.
 * To add more later, append an object here (bump the id), commit, and push —
 * the app and the "X of N" count update themselves. Keep amounts conservative
 * and mark any guessed quantity with `approx: true`.
 *
 * This is a fan-made companion for a kit whose booklet was lost — not the
 * official manufacturer manual.
 */
export const experiments: Experiment[] = [
  {
    id: 1,
    slug: "erupting-volcano",
    title: "Erupting Volcano",
    status: "verified",
    category: "Earth Science",
    difficulty: 1,
    minutes: 10,
    supervision: "Adult required",
    messy: true,
    kitOnly: false,
    summary: "Make a bubbling, foaming eruption with a safe acid–base reaction.",
    kitItems: [
      { name: "Volcano mould", quantity: "1" },
      { name: "Measuring spoon" },
      { name: "Citric acid", quantity: "1 level spoon" },
      { name: "Pipette", quantity: "1" },
      { name: "Safety goggles" }
    ],
    homeItems: [
      { name: "Baking soda", quantity: "1 level spoon" },
      { name: "Water", quantity: "30 ml", approx: true },
      { name: "Washing-up liquid", quantity: "1 small squirt" },
      { name: "Food colouring", quantity: "a few drops" },
      { name: "A washable tray" }
    ],
    safety: [
      "Wear goggles — the foam can flick up.",
      "Never taste anything.",
      "Wipe spills straight away; the floor gets slippery."
    ],
    steps: [
      { text: "Stand the volcano mould on the tray so spills are caught." },
      { text: "Spoon 1 level spoon of baking soda and 1 level spoon of citric acid into the crater." },
      { text: "Add a small squirt of washing-up liquid and a few drops of food colouring." },
      { text: "Pour in about 30 ml of water and step back.", tip: "More water = a faster, bigger whoosh." }
    ],
    expected: "A foamy coloured eruption climbs out of the crater and runs down the sides.",
    why: "The citric acid (an acid) and baking soda (a base) react and let go of carbon-dioxide gas. The washing-up liquid traps the gas into thousands of little bubbles, which is the foam.",
    troubleshooting: [
      { problem: "Barely fizzes", fix: "Your powders may be damp — try fresh baking soda and a touch more water." }
    ],
    cleanup: "Rinse the mould and tray with warm water. Everything is safe to pour down the sink."
  },
  {
    id: 2,
    slug: "balloon-inflation",
    title: "Self-Inflating Balloon",
    status: "verified",
    category: "Chemistry",
    difficulty: 2,
    minutes: 10,
    supervision: "Adult required",
    messy: true,
    kitOnly: false,
    summary: "Blow up a balloon using gas made by a reaction — no breath needed.",
    kitItems: [
      { name: "Volcano flask (or a small bottle)" },
      { name: "Balloon", quantity: "1" },
      { name: "Funnel" },
      { name: "Measuring spoon" },
      { name: "Safety goggles" }
    ],
    homeItems: [
      { name: "Baking soda", quantity: "1 spoon" },
      { name: "White vinegar", quantity: "50 ml", approx: true }
    ],
    safety: [
      "Wear goggles.",
      "Never seal, cork or heat the flask — the gas needs to fill the balloon, not build up pressure.",
      "Point the neck away from faces."
    ],
    steps: [
      { text: "Use the funnel to put 1 spoon of baking soda inside the balloon." },
      { text: "Pour about 50 ml of vinegar into the flask." },
      { text: "Stretch the balloon's neck over the flask, keeping the powder up in the balloon so it doesn't fall in yet." },
      { text: "Lift the balloon upright so the baking soda tips into the vinegar, and watch.", timer: 30 }
    ],
    expected: "The balloon fills and stands up on its own as the reaction bubbles below.",
    why: "Vinegar and baking soda react to make carbon-dioxide gas. Gas takes up far more room than the powder and liquid did, so it flows up and inflates the balloon.",
    cleanup: "Pour the liquid down the sink and rinse the flask. Keep the balloon for the balloon-rocket experiment."
  },
  {
    id: 3,
    slug: "growing-crystals",
    title: "Growing Crystals",
    status: "verified",
    category: "Earth Science",
    difficulty: 3,
    minutes: 20,
    waitTime: "3–7 days",
    supervision: "Adult required",
    messy: false,
    kitOnly: false,
    summary: "Grow a real cluster of crystals and watch it appear over a few days.",
    kitItems: [
      { name: "Crystal-growing powder", quantity: "follow the packet" },
      { name: "Crystal seed" },
      { name: "Measuring beaker" },
      { name: "Stirring rod" },
      { name: "Safety goggles" }
    ],
    homeItems: [
      { name: "Hot water (an adult pours this)", quantity: "as the packet says" }
    ],
    safety: [
      "An adult handles the hot water.",
      "Use the amount printed on YOUR packet — don't guess the strength.",
      "Wear goggles while stirring; don't taste the solution."
    ],
    steps: [
      { text: "Read the ratio on your crystal-powder packet — every kit's is slightly different." },
      { text: "An adult adds hot water to the beaker; stir in the powder until no more will dissolve.", tip: "When a little powder stays at the bottom, the water is 'full' (saturated) — that's what you want." },
      { text: "Rest the crystal seed in the beaker and put it somewhere still and cool." },
      { text: "Leave it and check once a day. Growing takes patience.", timer: 0 }
    ],
    expected: "Over several days, crystals build up on the seed as the water slowly cools and evaporates.",
    why: "Hot water can hold more dissolved powder than cold water. As it cools and dries out, the water can't hold it all, so the extra locks together into neat crystal shapes on the seed.",
    troubleshooting: [
      { problem: "Nothing grows", fix: "The solution wasn't strong enough — redissolve with a bit more powder so some stays undissolved." },
      { problem: "It grew then shrank", fix: "Damp air can redissolve crystals; move it somewhere drier." }
    ],
    cleanup: "Keep your crystal! Rinse the beaker and rod in warm water."
  },
  {
    id: 4,
    slug: "geode-observation",
    title: "Explore a Crystal Rock",
    status: "verified",
    category: "Earth Science",
    difficulty: 1,
    minutes: 15,
    supervision: "Child (adult nearby)",
    messy: false,
    kitOnly: true,
    summary: "Study the crystal/geode sample up close and see how nature grows crystals.",
    kitItems: [
      { name: "Crystal / geode rock" },
      { name: "Magnifying glass" }
    ],
    homeItems: [],
    safety: ["Handle the rock over a table so it doesn't drop on toes."],
    steps: [
      { text: "Look at the rock with your eyes first. What shape is it? Is it dull or sparkly?" },
      { text: "Now look through the magnifying glass. Count how many flat faces you can see on one crystal." },
      { text: "Tilt it under a lamp and watch how the faces catch the light differently." },
      { text: "Compare it to the crystals you grew yourself — same idea, but nature took thousands of years." }
    ],
    expected: "Up close, the rock is made of many small crystals with flat, shiny faces packed together.",
    why: "Geodes form as mineral-rich water seeps into a rock cavity over a very long time. Just like your grown crystals, the minerals lock into repeating shapes — that's why the faces look so regular.",
    cleanup: "Pop the rock back in the box. Nothing to wash."
  },
  {
    id: 5,
    slug: "magic-sand",
    title: "Magic Sand",
    status: "verified",
    category: "Earth Science",
    difficulty: 1,
    minutes: 15,
    supervision: "Adult required",
    messy: true,
    kitOnly: false,
    summary: "Pour sand into water and pull it back out completely dry.",
    kitItems: [
      { name: "Magic (waterproof) sand", quantity: "1 packet" },
      { name: "Measuring beaker" },
      { name: "Stirring rod" }
    ],
    homeItems: [{ name: "Water", quantity: "half a beaker" }],
    safety: [
      "Use only the labelled magic sand from the kit — not ordinary sand.",
      "Don't tip the used sand down the drain; scoop it out to reuse."
    ],
    steps: [
      { text: "Half-fill the beaker with water." },
      { text: "Slowly pour in some magic sand and watch what it does under the water." },
      { text: "Poke it gently with the stirring rod to make shapes." },
      { text: "Scoop the sand back out and feel it — it comes out dry!" }
    ],
    expected: "The sand clumps into blobs and tunnels underwater, and comes out completely dry.",
    why: "The sand grains have an invisible waterproof coating. Water can't stick to them, so it's pushed away — the sand stays dry and huddles together instead of spreading out.",
    cleanup: "Lift out the sand, let it dry on a paper towel, and store it to use again. Pour the water away."
  },
  {
    id: 6,
    slug: "rainbow-water-beads",
    title: "Rainbow Water Beads",
    status: "verified",
    category: "Earth Science",
    difficulty: 1,
    minutes: 10,
    waitTime: "3–4 hours",
    supervision: "Adult required",
    messy: false,
    kitOnly: false,
    summary: "Tiny beads drink up water and grow into bouncy jelly balls.",
    kitItems: [
      { name: "Water beads", quantity: "a small spoonful" },
      { name: "Measuring beaker" }
    ],
    homeItems: [{ name: "Water", quantity: "fill the beaker" }],
    safety: [
      "Swallowing hazard — never put beads in mouths. Keep well away from babies, toddlers and pets.",
      "An adult should stay with young scientists the whole time.",
      "Bin used beads in the rubbish, never down the sink."
    ],
    steps: [
      { text: "Put a small spoonful of dry beads in the beaker — notice how tiny they are." },
      { text: "Fill the beaker with water." },
      { text: "Leave them for a few hours and check back.", timer: 0 },
      { text: "Scoop the swollen beads out and gently squeeze one." }
    ],
    expected: "The tiny hard beads swell into big, soft, squishy jelly balls many times their first size.",
    why: "The beads are made of a material that grabs and holds water inside itself (a polymer). It soaks up hundreds of times its own weight in water, which is why it puffs up so much.",
    cleanup: "Put beads in the bin. They shrink back if left to dry, so you can reuse them."
  },
  {
    id: 7,
    slug: "fizzy-reaction",
    title: "Fizz Lab",
    status: "verified",
    category: "Chemistry",
    difficulty: 1,
    minutes: 10,
    supervision: "Adult required",
    messy: false,
    kitOnly: false,
    summary: "Compare fizzing reactions in test tubes and see which bubbles hardest.",
    kitItems: [
      { name: "Test tubes", quantity: "2–3" },
      { name: "Test-tube rack" },
      { name: "Citric acid", quantity: "1 spoon" },
      { name: "Measuring spoon" },
      { name: "Pipette" },
      { name: "Safety goggles" }
    ],
    homeItems: [
      { name: "Baking soda", quantity: "1 spoon" },
      { name: "Water", quantity: "fill each tube halfway" }
    ],
    safety: [
      "Wear goggles.",
      "Never put a bung, cork or thumb over a fizzing tube — let the gas escape.",
      "Open tubes only; don't taste."
    ],
    steps: [
      { text: "Stand 2–3 tubes in the rack and half-fill each with water." },
      { text: "In tube 1, add a spoon of baking soda. In tube 2, add a spoon of citric acid. In tube 3, add both." },
      { text: "Watch which tubes fizz and which stay still." },
      { text: "Which was the fizziest? Why do you think that is?" }
    ],
    expected: "Only the tube with BOTH baking soda and citric acid fizzes strongly; the single ones stay calm.",
    why: "You need an acid AND a base together to make the gas. On their own, dissolved in water, neither has a reaction partner — so nothing much happens.",
    cleanup: "Rinse the tubes; everything is sink-safe."
  },
  {
    id: 8,
    slug: "ph-testing",
    title: "pH Detective",
    status: "verified",
    category: "Chemistry",
    difficulty: 2,
    minutes: 20,
    supervision: "Adult required",
    messy: false,
    kitOnly: false,
    summary: "Use test strips to find out which kitchen liquids are acids and which aren't.",
    kitItems: [
      { name: "pH test strips" },
      { name: "Mixing cups", quantity: "3–4" },
      { name: "Pipette" },
      { name: "Safety goggles" }
    ],
    homeItems: [
      { name: "Water" },
      { name: "A little vinegar" },
      { name: "Baking soda dissolved in water" },
      { name: "Lemon juice" }
    ],
    safety: [
      "Test ONLY safe kitchen liquids like these. Never test cleaners, bleach, medicines or unknown bottles.",
      "Wear goggles and don't taste any samples."
    ],
    steps: [
      { text: "Put a little of each liquid in its own labelled cup." },
      { text: "Dip one fresh strip into each liquid for a second." },
      { text: "Match the strip's colour to the chart on the strip pack." },
      { text: "Line them up from most acid to least — where does water sit?" }
    ],
    expected: "Lemon and vinegar turn the strip toward the acid colours; baking-soda water goes the other way; plain water sits in the middle.",
    why: "pH strips carry a dye that changes colour depending on how acidic a liquid is. Acids (lemon, vinegar) and bases (baking-soda water) sit at opposite ends, with neutral water in between.",
    cleanup: "Pour samples away, rinse the cups. Used strips go in the bin."
  },
  {
    id: 9,
    slug: "chromatography",
    title: "Hidden Colours",
    status: "verified",
    category: "Chemistry",
    difficulty: 2,
    minutes: 25,
    supervision: "Child (adult nearby)",
    messy: false,
    kitOnly: false,
    summary: "Split a single colour into the secret colours hidden inside it.",
    kitItems: [
      { name: "Filter paper" },
      { name: "Mixing cup" },
      { name: "Food colouring (or use a felt pen)" }
    ],
    homeItems: [
      { name: "A washable felt-tip pen (black works well)" },
      { name: "Water", quantity: "a shallow puddle" }
    ],
    safety: ["Keep the water shallow so the paper doesn't flood."],
    steps: [
      { text: "Cut a strip of filter paper. Draw a fat dot with the felt pen about 2 cm from the bottom." },
      { text: "Put a shallow puddle of water in the cup — just enough to touch the paper's bottom edge." },
      { text: "Stand the strip in so the water is BELOW the dot, not touching it directly." },
      { text: "Watch the water climb past the dot and carry the colours up.", timer: 300 }
    ],
    expected: "The single dot spreads into bands of different colours as the water climbs.",
    why: "The 'one' colour is really a mix. As water climbs the paper it drags the colours along, but some cling to the paper more than others — so they separate into bands. This is called chromatography.",
    troubleshooting: [
      { problem: "The dot didn't move", fix: "The water was probably touching the dot directly — start the water line just below it." }
    ],
    cleanup: "Let the paper dry — it makes a lovely bookmark. Rinse the cup."
  },
  {
    id: 10,
    slug: "density-tower",
    title: "Density Tower",
    status: "verified",
    category: "Chemistry",
    difficulty: 3,
    minutes: 20,
    supervision: "Child (adult nearby)",
    messy: true,
    kitOnly: false,
    summary: "Stack liquids in colourful layers that refuse to mix.",
    kitItems: [
      { name: "Measuring beaker or a wide test tube" },
      { name: "Pipette" },
      { name: "Food colouring" }
    ],
    homeItems: [
      { name: "Honey or syrup", quantity: "a splash" },
      { name: "Washing-up liquid", quantity: "a splash" },
      { name: "Water (coloured)", quantity: "a splash" },
      { name: "Cooking oil", quantity: "a splash" }
    ],
    safety: ["Wipe up drips — oil and syrup are slippery."],
    steps: [
      { text: "Pour in honey/syrup first, straight down the middle." },
      { text: "Gently add washing-up liquid, then coloured water, then oil last." },
      { text: "Use the pipette to add each layer slowly against the side so it settles softly.", tip: "Slow and gentle is the whole trick." },
      { text: "Hold it up to the light and count your layers." }
    ],
    expected: "The liquids sit in separate layers instead of mixing — heaviest at the bottom, lightest on top.",
    why: "Some liquids are heavier for their size (denser) than others. Heavy liquids sink below light ones, so they stack in order instead of blending.",
    troubleshooting: [
      { problem: "Layers mixed", fix: "You poured too fast — add each layer slowly down the side or over the back of a spoon." }
    ],
    cleanup: "Pour away, wash the beaker with hot soapy water to shift the oil."
  },
  {
    id: 11,
    slug: "walking-water",
    title: "Walking Water Rainbow",
    status: "verified",
    category: "Physics",
    difficulty: 1,
    minutes: 45,
    waitTime: "about 1 hour",
    supervision: "Child (adult nearby)",
    messy: false,
    kitOnly: false,
    summary: "Watch colour climb up paper and walk from cup to cup on its own.",
    kitItems: [
      { name: "Mixing cups", quantity: "3 or more" },
      { name: "Food colouring" },
      { name: "Filter paper (or kitchen roll)" }
    ],
    homeItems: [{ name: "Water" }, { name: "Kitchen roll (if you want longer bridges)" }],
    safety: ["No hazards — just a chance of a colourful table, so use a tray."],
    steps: [
      { text: "Line up the cups. Fill every OTHER cup with water and a different colour; leave the ones between empty." },
      { text: "Roll or fold paper strips into bridges, each one linking a full cup to an empty cup." },
      { text: "Watch the colour climb up and over the bridge into the empty cups.", timer: 0 },
      { text: "Come back in an hour — the empty cups have filled and new colours have appeared where two meet." }
    ],
    expected: "Colour travels up the paper bridges and fills the empty cups, mixing into new colours in between.",
    why: "Water climbs the tiny gaps between the paper fibres — this is capillary action, the same trick plants use to drink. It keeps climbing until both cups are level.",
    cleanup: "Bin the paper, pour the water away, rinse cups."
  },
  {
    id: 12,
    slug: "colour-spinner",
    title: "Disappearing Colours",
    status: "verified",
    category: "Physics",
    difficulty: 2,
    minutes: 15,
    supervision: "Child (adult nearby)",
    messy: false,
    kitOnly: false,
    summary: "Spin a colour wheel fast enough and the colours vanish into pale white.",
    kitItems: [
      { name: "Colour spinner disc" },
      { name: "Cotton string (or a pencil through the middle)" }
    ],
    homeItems: [],
    safety: ["Keep the spinning disc away from faces and long hair."],
    steps: [
      { text: "Set up the disc on its string or a pencil so it spins freely." },
      { text: "Look at all the separate colours while it's still." },
      { text: "Spin it as fast as you can." },
      { text: "Watch the colours blur together — how pale can you make them go?" }
    ],
    expected: "As it spins fast, the separate colours blend and the disc looks pale, almost white or grey.",
    why: "Your eyes can't keep up with the fast-changing colours, so your brain blends them together. Mixed light of many colours looks white — which is why the spinning disc pales out.",
    cleanup: "Nothing to wash — pack the disc away."
  },
  {
    id: 13,
    slug: "surface-tension",
    title: "Scaredy-Cat Pepper",
    status: "verified",
    category: "Physics",
    difficulty: 1,
    minutes: 10,
    supervision: "Child (adult nearby)",
    messy: false,
    kitOnly: false,
    summary: "Make floating pepper dart away from your finger like magic.",
    kitItems: [{ name: "Measuring beaker or a wide dish" }, { name: "Pipette" }],
    homeItems: [
      { name: "Ground pepper", quantity: "a light sprinkle" },
      { name: "Water", quantity: "fill the dish" },
      { name: "Washing-up liquid", quantity: "1 drop" }
    ],
    safety: ["None — just don't sniff the pepper."],
    steps: [
      { text: "Fill the dish with water and let it go still." },
      { text: "Sprinkle pepper lightly all over the surface." },
      { text: "Dip a clean finger in the middle — nothing happens." },
      { text: "Now dip your finger in one drop of washing-up liquid, then touch the water again." }
    ],
    expected: "The soapy finger makes the pepper zoom away to the edges instantly.",
    why: "Water's surface behaves like a stretchy skin (surface tension) that holds the pepper up. Soap breaks that skin where you touch, and it snaps outward — dragging the pepper along for the ride.",
    cleanup: "Pour away and rinse the dish well so no soap is left."
  },
  {
    id: 14,
    slug: "static-electricity",
    title: "Balloon Magic",
    status: "verified",
    category: "Physics",
    difficulty: 1,
    minutes: 10,
    supervision: "Child (adult nearby)",
    messy: false,
    kitOnly: false,
    summary: "Charge a balloon and bend water, lift paper, and make hair stand up.",
    kitItems: [{ name: "Balloon", quantity: "1" }],
    homeItems: [
      { name: "A woolly jumper or your hair" },
      { name: "Small bits of torn tissue paper" },
      { name: "A slowly running tap (optional)" }
    ],
    safety: ["None."],
    steps: [
      { text: "Blow up the balloon and tie it." },
      { text: "Rub it briskly on your hair or a woolly jumper for ten seconds." },
      { text: "Hold it just above the torn paper bits — watch them jump up to it." },
      { text: "Try holding it near a thin stream of water from a tap and watch the water bend." }
    ],
    expected: "The charged balloon lifts paper, bends water and makes hair stand on end.",
    why: "Rubbing moves invisible electric charge onto the balloon (static electricity). Charged things pull on light objects nearby — enough to lift paper and tug a stream of water sideways.",
    troubleshooting: [{ problem: "Nothing sticks", fix: "Static is weak on damp days — rub for longer and try in a dry room." }],
    cleanup: "Keep the balloon for the rocket experiment."
  },
  {
    id: 15,
    slug: "balloon-rocket",
    title: "Balloon Rocket",
    status: "verified",
    category: "Physics",
    difficulty: 2,
    minutes: 15,
    supervision: "Child (adult nearby)",
    messy: false,
    kitOnly: false,
    summary: "Launch a balloon along a string and learn why rockets fly.",
    kitItems: [
      { name: "Balloon", quantity: "1" },
      { name: "Cotton string", quantity: "a long piece" }
    ],
    homeItems: [
      { name: "A drinking straw", quantity: "1" },
      { name: "Sticky tape" },
      { name: "Two chairs to tie the string between" }
    ],
    safety: ["Watch faces near the stretched string.", "Don't over-inflate the balloon."],
    steps: [
      { text: "Thread the string through the straw, then tie the string tightly between two chairs across the room." },
      { text: "Blow up the balloon and pinch the neck shut — don't tie it." },
      { text: "Tape the balloon to the straw while still pinching it." },
      { text: "Slide it to one end, let go, and watch it fly!", timer: 5 }
    ],
    expected: "The balloon zooms along the string to the far end.",
    why: "The air rushing backwards out of the balloon pushes the balloon forwards — for every push one way there's an equal push the other way. That's exactly how real rockets work.",
    cleanup: "Untie the string and coil it back into the box."
  },
  {
    id: 16,
    slug: "bottle-tornado",
    title: "Bottle Tornado",
    status: "verified",
    category: "Physics",
    difficulty: 2,
    minutes: 10,
    supervision: "Child (adult nearby)",
    messy: false,
    kitOnly: false,
    summary: "Spin up a swirling tornado of water inside a bottle.",
    kitItems: [{ name: "Funnel" }, { name: "Food colouring" }],
    homeItems: [
      { name: "A clear plastic bottle with a lid", quantity: "1" },
      { name: "Water", quantity: "two-thirds full" },
      { name: "A drop of washing-up liquid (optional)" }
    ],
    safety: ["Make sure the lid is on tight before spinning."],
    steps: [
      { text: "Use the funnel to fill the bottle about two-thirds with water." },
      { text: "Add a drop of colouring (and a drop of washing-up liquid to see it better)." },
      { text: "Screw the lid on tightly." },
      { text: "Turn it upside down and swirl it in fast circles, then hold still and watch." }
    ],
    expected: "A spinning funnel-shaped vortex — a mini tornado — forms in the water.",
    why: "Swirling makes the water spin around a centre. As it drains it keeps spinning faster toward the middle, pulling in air and forming the tornado shape.",
    cleanup: "Pour away and keep the bottle for next time."
  },
  {
    id: 17,
    slug: "colour-changing-flowers",
    title: "Colour-Changing Flowers",
    status: "verified",
    category: "Life & Plants",
    difficulty: 1,
    minutes: 15,
    waitTime: "several hours to a day",
    supervision: "Child (adult nearby)",
    messy: false,
    kitOnly: false,
    summary: "Give a white flower a coloured drink and watch its petals change.",
    kitItems: [
      { name: "Colour-changing flowers (or a white flower from home)" },
      { name: "Food colouring" },
      { name: "Mixing cup" }
    ],
    homeItems: [
      { name: "A white flower such as a carnation (if not using the kit's)" },
      { name: "Water" }
    ],
    safety: ["An adult trims the stem if scissors are needed."],
    steps: [
      { text: "Fill a cup with water and stir in lots of one food colour." },
      { text: "Trim the flower stem and stand it in the coloured water." },
      { text: "Put it somewhere you'll see it and wait.", timer: 0 },
      { text: "Check over the next few hours — the petals slowly take on the colour." }
    ],
    expected: "The petals gradually turn the colour of the water, often starting at the edges.",
    why: "Flowers drink water up their stems through tiny tubes (capillary action again). The colour travels up with the water and ends up in the petals.",
    cleanup: "Compost the flower afterwards; rinse the cup."
  }
];
