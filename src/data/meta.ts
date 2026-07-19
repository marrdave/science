import type { Achievement, EquipmentItem } from "../types";
import { experiments } from "./experiments";

export const TOTAL = experiments.length;

/** Milestones peg to the real library size, so "finish everything" is reachable. */
export const achievements: Achievement[] = [
  { id: "first", title: "First Experiment", description: "Complete your very first experiment.", kind: "milestone", threshold: 1 },
  { id: "junior", title: "Junior Scientist", description: "Complete 5 experiments.", kind: "milestone", threshold: 5 },
  { id: "explorer", title: "Lab Explorer", description: "Complete 10 experiments.", kind: "milestone", threshold: 10 },
  { id: "master", title: "Master Scientist", description: `Complete all ${TOTAL} experiments.`, kind: "milestone", threshold: TOTAL },
  { id: "cat-chem", title: "Chemistry Champion", description: "Finish every Chemistry experiment.", kind: "category", category: "Chemistry" },
  { id: "cat-phys", title: "Physics Investigator", description: "Finish every Physics experiment.", kind: "category", category: "Physics" },
  { id: "cat-earth", title: "Earth Science Explorer", description: "Finish every Earth Science experiment.", kind: "category", category: "Earth Science" },
  { id: "cat-life", title: "Plant Scientist", description: "Finish every Life & Plants experiment.", kind: "category", category: "Life & Plants" },
  { id: "sp-volcano", title: "Volcano Specialist", description: "Erupt the volcano.", kind: "special", slug: "erupting-volcano" },
  { id: "sp-crystal", title: "Crystal Grower", description: "Grow your own crystals.", kind: "special", slug: "growing-crystals" }
];

export const equipment: EquipmentItem[] = [
  { name: "Test-tube rack + 4 test tubes", kind: "tool" },
  { name: "Volcano flask + volcano mould", kind: "tool" },
  { name: "Measuring beaker", kind: "tool" },
  { name: "Mixing cups", kind: "tool" },
  { name: "Pipettes / droppers", kind: "tool" },
  { name: "Stirring rod", kind: "tool" },
  { name: "Measuring spoons", kind: "tool" },
  { name: "Funnel", kind: "tool" },
  { name: "Safety goggles", kind: "tool" },
  { name: "Magnifying glass", kind: "tool" },
  { name: "Balloons + pump nozzle", kind: "reusable" },
  { name: "Cotton string", kind: "reusable" },
  { name: "Pipe cleaners", kind: "reusable" },
  { name: "Paper clips", kind: "reusable" },
  { name: "Filter paper", kind: "reusable" },
  { name: "Colour spinner disc", kind: "reusable" },
  { name: "Crystal / geode rock", kind: "reusable" },
  { name: "Citric acid", kind: "chemical", note: "Use only while sealed and clearly labelled." },
  { name: "Fizzy (effervescent) tablets", kind: "chemical", note: "Use only while sealed and clearly labelled." },
  { name: "Crystal-growing powder + seed", kind: "chemical", note: "Follow the ratio on your own packet." },
  { name: "Magic (waterproof) sand", kind: "chemical" },
  { name: "Rainbow water beads", kind: "chemical", note: "Swallowing hazard — keep from small children and pets." },
  { name: "Colour-changing flowers", kind: "chemical" },
  { name: "Food-colour pigments (red / yellow / green)", kind: "chemical" }
];
