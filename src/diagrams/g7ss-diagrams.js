// Grade 7 SS "Label the Diagram": diagrams from Jamie's own notes, 31 Oct 2026:
//  - "How the structure of the Earth leads to volcanoes" (original: src/assets/tests/g7ss-volcano-sheet-original.jpg)
//  - "How convection currents drive the Earth!" (original: src/assets/tests/g7ss-convection-sheet-original.jpg)
//  - "How a tsunami forms - step by step" (2 Nov 2026; original: src/assets/tests/g7ss-tsunami-sheet-original.png)
// The labels were wiped off the picture and each pin sits where the label was. Memo lines come from the same sheets.
// The 3 plate-boundary pictures sit two on top and one below (so they are big enough on a phone), each with a blank
// strip underneath for its label. The 5 tsunami pictures sit 2, 2, 1 in step order, each with a strip for its label.
// Still to come (Jamie will send it): how an earthquake happens.
// Each diagram: { key, name, t (a deck topic key: its icon and colour are used), pic, dense (optional: on phones, show
// green numbers on the picture and the labels in a key underneath, because the labels would overlap), pins: [[x %, y %, label, memo line], ...] }
const DIAGRAMS_G7SS = {
  id: 'g7ss-label', title: 'Grade 7 SS Diagrams', grade: 7, subject: 'Social Sciences',
  // pictures: key -> file in src/assets/tests (inlined by the build)
  pics: { earth: '__TESTIMG_g7ss-earth-layers__', volcano: '__TESTIMG_g7ss-volcano__',
    convection: '__TESTIMG_g7ss-convection__', plates: '__TESTIMG_g7ss-plate-boundaries__', tsunami: '__TESTIMG_g7ss-tsunami__' },
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
    { key: 'tsunami', name: 'How a Tsunami Forms', t: 'Q', pic: 'tsunami', pins: [
      [24.9, 30.8, 'Sudden disturbance', 'Step 1: an earthquake, volcanic eruption, landslide or meteorite impact suddenly moves the sea floor up or down, pushing up all the water above it.'],
      [75.1, 30.8, 'Waves begin', 'Step 2: the displaced water makes waves that spread out in all directions. In the deep ocean they are very long but very low.'],
      [24.9, 63.6, 'Racing across the ocean', 'Step 3: the waves travel hundreds of kilometres across the ocean, as fast as a jet plane: up to 800 km/h!'],
      [75.1, 63.6, 'Waves grow taller', 'Step 4: in shallow water near the coast the waves slow down, and the energy is squeezed upwards, so they grow much taller.'],
      [50, 96.5, 'Tsunami hits the coast', 'Step 5: giant waves surge onto land, causing flooding and destruction. It is not just one wave: they can keep coming for hours!'],
    ] },
  ],
};
if (typeof module !== 'undefined') module.exports = DIAGRAMS_G7SS;
