// Grade 7 SS "Label the Diagram": diagrams from Jamie's own notes, 31 Oct 2026:
//  - "How the structure of the Earth leads to volcanoes" (original: src/assets/tests/g7ss-volcano-sheet-original.jpg)
//  - "How convection currents drive the Earth!" (original: src/assets/tests/g7ss-convection-sheet-original.jpg)
// The labels were wiped off the picture and each pin sits where the label was. Memo lines come from the same sheets.
// The 3 plate-boundary pictures sit two on top and one below (so they are big enough on a phone), each with a blank
// strip underneath for its label. Still to come (Jamie will send it): how an earthquake happens.
// Each diagram: { key, name, t (a deck topic key: its icon and colour are used), pic, dense (optional: on phones, show
// green numbers on the picture and the labels in a key underneath, because the labels would overlap), pins: [[x %, y %, label, memo line], ...] }
const DIAGRAMS_G7SS = {
  id: 'g7ss-label', title: 'Grade 7 SS Diagrams', grade: 7, subject: 'Social Sciences',
  // pictures: key -> file in src/assets/tests (inlined by the build)
  pics: { earth: '__TESTIMG_g7ss-earth-layers__', volcano: '__TESTIMG_g7ss-volcano__',
    convection: '__TESTIMG_g7ss-convection__', plates: '__TESTIMG_g7ss-plate-boundaries__' },
  diagrams: [
    { key: 'earth', name: 'Layers of the Earth', t: 'Q', pic: 'earth', pins: [
      [87, 5, 'Crust', 'The thin, solid, brittle outer layer, made of rock. It is broken into tectonic plates that move.'],
      [87, 26.5, 'Mantle', 'A very thick layer of hot, solid rock. Heat makes some of it melt and move slowly in currents.'],
      [87, 59, 'Outer core', 'A liquid layer made of iron and nickel. Its movement creates Earth’s magnetic field.'],
      [87, 81.8, 'Inner core', 'A solid ball of iron and nickel, extremely hot and under huge pressure.'],
    ] },
    { key: 'volcano', name: 'Parts of a Volcano', t: 'Q', pic: 'volcano', pins: [
      [84.3, 14.2, 'Ash, gas and steam', 'Blasted out of the top of the volcano when it erupts.'],
      [82.2, 27.7, 'Crater', 'The bowl-shaped top of a volcano.'],
      [84.8, 38.5, 'Lava flow', 'Lava is magma that reaches the Earth’s surface. It flows down the sides and cools.'],
      [84.7, 58.9, 'Layers of lava and ash', 'Every eruption adds a new layer, building the volcano bigger.'],
      [32.4, 64.6, 'Vent', 'An opening in the crust through which magma escapes.'],
      [82.8, 87.7, 'Magma chamber', 'Where molten rock collects beneath the crust. Pressure builds up!'],
    ] },
    { key: 'plates', name: '3 Ways Plates Move', t: 'Q', pic: 'plates', pins: [
      [25.3, 49.7, 'Divergent boundary', 'Plates spread apart. Rising hot mantle reaches the surface and new crust forms.'],
      [76.1, 49.7, 'Convergent boundary', 'Plates collide. Cool, dense mantle sinks and pulls one plate down under the other (subduction).'],
      [50, 92.1, 'Transform boundary', 'Plates slide sideways past each other.'],
    ] },
    { key: 'convection', name: 'Convection Currents', t: 'Q', pic: 'convection', dense: true, pins: [
      [44.6, 91.1, 'Heat from the core', 'Step 1: heat from the core warms the mantle rock above it.'],
      [32.2, 49.6, 'Warm rock rises', 'Step 2: warm mantle rock becomes less dense and rises.'],
      [24.1, 23.2, 'Rock cools at the top', 'Step 3: near the surface, under the crust, the rock cools.'],
      [7.7, 57.7, 'Cool rock sinks', 'Step 4: cool mantle rock becomes more dense and sinks. The cycle repeats: a convection current!'],
      [50.9, 48.8, 'Mantle', 'The thick layer of hot rock between the crust and the core. It behaves like a very thick, slow-moving fluid.'],
    ] },
  ],
};
if (typeof module !== 'undefined') module.exports = DIAGRAMS_G7SS;
