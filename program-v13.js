function buildFullBodyProgram() {
  const phaseFor = week => {
    if (week === 4 || week === 8) return "Deload";
    if (week <= 3) return "Foundation";
    if (week <= 7) return "Build";
    if (week <= 11) return "Strength";
    return "Consolidate";
  };

  const noteFor = week => {
    if (week === 4 || week === 8) return "Reduce resistance 15–20% and use 2 easy sets. Finish feeling fresher than you started.";
    if (week <= 3) return "Learn the A/B rhythm. Leave about 3 clean reps in reserve and prioritize breathing and control.";
    if (week <= 7) return "Add reps first, then a small amount of resistance. Keep 2–3 clean reps in reserve.";
    if (week <= 11) return "Use challenging, controlled loads near RPE 7. Never grind through pressure, doming, or bulging.";
    return "Repeat controlled loads, compare with earlier weeks, and finish the cycle strong—not exhausted.";
  };

  const strengthDose = week => {
    if (week === 4 || week === 8) return { main: "2×6–8", secondary: "2×8", accessory: "2×10–12", carry: "2×30–40 steps" };
    if (week <= 3) return { main: "3×6–8", secondary: "3×8", accessory: "2×12–15", carry: "3×40–50 steps" };
    if (week <= 7) return { main: "3×8–10", secondary: "3×8–10", accessory: "3×12–15", carry: "3×50–60 steps" };
    if (week <= 11) return { main: "4×6", secondary: "3×6–8", accessory: "3×10–12", carry: "3×45–60 steps" };
    return { main: "3×6–8", secondary: "3×8", accessory: "2×12", carry: "3×40–50 steps" };
  };

  const corePrep = (week, workout) => {
    const breathing = ["360° breathing", "3×5 breaths", "Expand ribs and back; use a long, relaxed exhale."];
    if (week <= 4) {
      return workout === "A"
        ? [breathing, ["Heel slide", "2×8/side", "Stop before doming."], ["Dead bug heel tap", "2×6/side", "Exhale as the heel lowers."]]
        : [breathing, ["Bird dog", "2×6/side", "Keep hips square and move slowly."], ["Pallof press / suitcase march", "2×10/side", "Tonal: resist rotation. Free weights: march without leaning."]];
    }
    if (week <= 8) {
      return workout === "A"
        ? [breathing, ["Dead bug heel tap", "2×8/side", "Use a longer lever only if the midline stays flat."], ["Glute bridge march", "2×6/side", "Keep the pelvis level; use a regular bridge if needed."]]
        : [breathing, ["Bird dog", "2×8/side", "Reach long without arching."], ["Pallof press / suitcase march", "2×12/side", "Slow reps; ribs stacked over pelvis."]];
    }
    return workout === "A"
      ? [breathing, ["Incline plank", "2×20–30 sec", "Use a high surface; swap for heel slides if you see doming."], ["Dead bug heel tap", "2×8/side", "Exhale through each lower."]]
      : [breathing, ["Bear hover prep", "2×10–15 sec", "Only if symptom-free; otherwise use bird dog."], ["Pallof press / suitcase march", "2×12/side", "Stay tall and resist movement."]];
  };

  const postureWarmup = [
    ["Thoracic extension", "5 slow reps", "Use a rolled towel or roller; do not force the low back to arch."],
    ["Wall slide", "1×8", "Move without shrugging or abdominal pressure."]
  ];

  const workoutA = week => {
    const d = strengthDose(week);
    return [
      ...postureWarmup,
      ...corePrep(week, "A"),
      ["Goblet squat", d.main, "DB/KB. Keep ribs stacked; exhale as you stand."],
      ["Hip thrust / glute bridge", d.secondary, "DB/KB across hips or bodyweight. Pause at the top without arching."],
      ["Single-arm chest press", d.main + "/side", "Tonal or DB floor press. Stay square and exhale on the press."],
      ["Lat pulldown / DB pullover", d.secondary, "Use Tonal for pulldowns; use a DB/KB pullover when training away from it."],
      ["Farmer carry", d.carry, "Hold two DBs/KBs. Walk tall with quiet ribs and steady breathing."],
      ["Face pull / rear-delt fly", d.accessory, "Tonal face pull or light DB rear-delt fly. Control the return."],
      ["Zone 2 finish", "15 min", "Easy–moderate walk or bike; conversational pace."]
    ];
  };

  const workoutB = week => {
    const d = strengthDose(week);
    return [
      ...postureWarmup,
      ...corePrep(week, "B"),
      ["Romanian deadlift", d.main, "Tonal, DB, or KB. Hinge smoothly and stop if abdominal pressure rises."],
      ["Reverse lunge", d.secondary + "/side", "DB/KB or bodyweight. Use support as needed."],
      ["Half-kneeling single-arm press", d.secondary + "/side", "Tonal, DB, or KB. Keep ribs over pelvis; do not lean back."],
      ["Single-arm row", d.main + "/side", "Tonal, DB, or KB. Keep the torso square."],
      ["Suitcase carry", d.carry + "/side", "One DB/KB. Walk without leaning toward or away from the load."],
      ["Face pull / rear-delt fly", d.accessory, "Tonal face pull or light DB rear-delt fly. Keep the neck relaxed."],
      ["Zone 2 finish", "15 min", "Easy–moderate walk or bike; conversational pace."]
    ];
  };

  const zone2 = [["Zone 2 cardio", "35–45 min", "Brisk walk, bike, or incline treadmill; conversational pace."], ["Posture mobility reset", "5 min", "Thoracic extension, wall slides, chin tucks, and doorway pec stretch."]];
  const recovery = [["Easy walk", "25–35 min", "Comfortable pace; this can count toward the weekly Zone 2 goal if the effort fits."], ["Daily posture reset", "5–10 min", "Thoracic extension, chin tucks, wall slides, doorway pec stretch, and Y/T or wall angels."], ["Hip and lower-body mobility", "5 min", "Hip flexors, hamstrings, and calves. Keep every stretch gentle."], ["Breathing reset", "2×5 breaths", "Gentle 360° breathing; let the abdominal wall relax."]];
  const family = [["Family activity / Zone 2", "30–45 min", "Walk, bike, hike, playground laps, or active play at an easy–moderate effort."], ["Optional mobility", "5–10 min", "Choose the areas that feel tight; do not turn recovery into another workout."]];
  const review = [["Family walk", "Optional 20–40 min", "Keep it easy."], ["Weekly core check", "2 min", "Record doming, pain, and hernia symptoms."], ["Plan next week's loads", "5 min", "Add reps or a small load only when every rep stayed controlled."], ["Meal prep", "10 min", "Plan oats, beans, fish, nuts, and other fiber-forward foods."]];

  return Array.from({ length: 12 }, (_, i) => {
    const week = i + 1;
    const rotation = week % 2 === 1 ? { Monday: "A", Wednesday: "B", Friday: "A" } : { Monday: "B", Wednesday: "A", Friday: "B" };
    return {
      week,
      phase: phaseFor(week),
      note: noteFor(week),
      days: {
        Monday: [`Full Body ${rotation.Monday}`, rotation.Monday === "A" ? workoutA(week) : workoutB(week)],
        Tuesday: ["Zone 2 + Mobility", zone2.map(x => [...x])],
        Wednesday: [`Full Body ${rotation.Wednesday}`, rotation.Wednesday === "A" ? workoutA(week) : workoutB(week)],
        Thursday: ["Recovery + Zone 2", recovery.map(x => [...x])],
        Friday: [`Full Body ${rotation.Friday}`, rotation.Friday === "A" ? workoutA(week) : workoutB(week)],
        Saturday: ["Family Activity", family.map(x => [...x])],
        Sunday: ["Rest + Review", review.map(x => [...x])]
      }
    };
  });
}
