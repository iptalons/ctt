/**
 * Made in China 2025 Strategic Priority Sectors
 * Definitions and keywords for each of the 10 priority sectors
 */

import { MIC2025Sector } from './types';

export const MIC2025_SECTORS: Record<string, MIC2025Sector> = {
  next_gen_it: {
    id: 'next_gen_it',
    name: 'Next-Generation Information Technology',
    description: 'Integrated circuits, special equipment, information communication equipment, operating systems, and industrial software',
    priority_level: 'critical',
    keywords: [
      'integrated circuit',
      'semiconductor',
      'SMIC',
      'chip design',
      'EDA software',
      'FPGA',
      'system on chip',
      'SoC',
      '5G',
      '6G',
      'quantum computing',
      'quantum communication',
      'operating system',
      'industrial software',
      'CAD software',
      'IoT',
      'edge computing',
      'neuromorphic computing',
      'photonic integrated circuit'
    ],
    related_fields: [
      'Computer Science',
      'Electrical Engineering',
      'Materials Science',
      'Physics'
    ]
  },

  cnc_robotics: {
    id: 'cnc_robotics',
    name: 'High-End CNC Machines and Robotics',
    description: 'Precision CNC machines, industrial robots, servo motors, reducers, and controllers',
    priority_level: 'high',
    keywords: [
      'CNC machine',
      'computer numerical control',
      'industrial robot',
      'robotic arm',
      'servo motor',
      'harmonic drive',
      'reducer',
      'motion control',
      'additive manufacturing',
      '3D printing',
      'machine tool',
      'precision manufacturing',
      'automation',
      'factory automation',
      'collaborative robot',
      'cobot',
      'robot kinematics',
      'robot dynamics'
    ],
    related_fields: [
      'Mechanical Engineering',
      'Robotics',
      'Manufacturing',
      'Control Systems'
    ]
  },

  new_energy_vehicles: {
    id: 'new_energy_vehicles',
    name: 'Energy-Saving and New Energy Vehicles',
    description: 'Electric vehicles, fuel cell vehicles, battery technology, and drive motors',
    priority_level: 'critical',
    keywords: [
      'electric vehicle',
      'EV',
      'NEV',
      'lithium battery',
      'lithium-ion battery',
      'solid state battery',
      'battery management',
      'BMS',
      'fuel cell',
      'hydrogen fuel',
      'electric motor',
      'drive motor',
      'power electronics',
      'vehicle charging',
      'battery recycling',
      'cathode material',
      'anode material',
      'electrolyte',
      'battery pack'
    ],
    related_fields: [
      'Automotive Engineering',
      'Materials Science',
      'Electrochemistry',
      'Electrical Engineering'
    ]
  },

  aviation_aerospace: {
    id: 'aviation_aerospace',
    name: 'Aviation and Aerospace Equipment',
    description: 'Large aircraft, jet engines, spacecraft, satellites, and launch vehicles',
    priority_level: 'critical',
    keywords: [
      'aircraft engine',
      'jet engine',
      'turbofan',
      'turbine blade',
      'C919',
      'ARJ21',
      'commercial aircraft',
      'aerospace materials',
      'composite material',
      'satellite',
      'launch vehicle',
      'rocket engine',
      'space station',
      'hypersonic',
      'scramjet',
      'avionics',
      'flight control',
      'aerodynamics',
      'propulsion'
    ],
    related_fields: [
      'Aerospace Engineering',
      'Mechanical Engineering',
      'Materials Science',
      'Physics'
    ]
  },

  offshore_maritime: {
    id: 'offshore_maritime',
    name: 'Offshore Engineering Equipment and High-Tech Ships',
    description: 'Deep-sea exploration, resource extraction equipment, LNG tankers, and cruise ships',
    priority_level: 'high',
    keywords: [
      'offshore platform',
      'deep sea exploration',
      'underwater robot',
      'ROV',
      'AUV',
      'subsea equipment',
      'drilling platform',
      'LNG tanker',
      'cruise ship',
      'ship propulsion',
      'marine engine',
      'shipbuilding',
      'naval architecture',
      'ocean engineering',
      'underwater vehicle',
      'submersible',
      'marine equipment'
    ],
    related_fields: [
      'Ocean Engineering',
      'Naval Architecture',
      'Mechanical Engineering',
      'Marine Science'
    ]
  },

  rail_transport: {
    id: 'rail_transport',
    name: 'Advanced Rail Transportation Equipment',
    description: 'High-speed rail, intelligent rail systems, and energy-efficient transportation',
    priority_level: 'high',
    keywords: [
      'high speed rail',
      'HSR',
      'maglev',
      'railway',
      'train',
      'rail transit',
      'traction system',
      'signaling system',
      'CBTC',
      'train control',
      'pantograph',
      'catenary',
      'rail vehicle',
      'locomotive',
      'metro',
      'urban rail',
      'railway automation'
    ],
    related_fields: [
      'Transportation Engineering',
      'Mechanical Engineering',
      'Electrical Engineering',
      'Civil Engineering'
    ]
  },

  electrical_equipment: {
    id: 'electrical_equipment',
    name: 'Electrical Equipment',
    description: 'Power generation, transmission, smart grid, energy storage, and renewable energy',
    priority_level: 'high',
    keywords: [
      'power grid',
      'smart grid',
      'HVDC',
      'UHV',
      'ultra high voltage',
      'power transmission',
      'transformer',
      'wind turbine',
      'solar panel',
      'photovoltaic',
      'PV',
      'energy storage',
      'battery storage',
      'grid storage',
      'power electronics',
      'inverter',
      'nuclear power',
      'clean coal',
      'gas turbine',
      'renewable energy'
    ],
    related_fields: [
      'Electrical Engineering',
      'Power Systems',
      'Energy Engineering',
      'Materials Science'
    ]
  },

  agricultural_machinery: {
    id: 'agricultural_machinery',
    name: 'Agricultural Machinery and Equipment',
    description: 'Large tractors, combine harvesters, and precision agriculture equipment',
    priority_level: 'medium',
    keywords: [
      'tractor',
      'combine harvester',
      'agricultural machinery',
      'farm equipment',
      'precision agriculture',
      'agricultural robot',
      'drone agriculture',
      'smart farming',
      'automated harvesting',
      'seeding machine',
      'irrigation system',
      'agricultural automation',
      'crop monitoring',
      'agricultural sensor'
    ],
    related_fields: [
      'Agricultural Engineering',
      'Mechanical Engineering',
      'Automation',
      'Computer Science'
    ]
  },

  new_materials: {
    id: 'new_materials',
    name: 'New Materials',
    description: 'Advanced functional materials, structural materials, graphene, nanomaterials, and superconducting materials',
    priority_level: 'critical',
    keywords: [
      'graphene',
      'nanomaterial',
      'nanocomposite',
      'carbon nanotube',
      'superconductor',
      'high temperature superconductor',
      'metamaterial',
      'smart material',
      '2D material',
      'quantum material',
      'topological insulator',
      'thermoelectric material',
      'piezoelectric',
      'magnetic material',
      'rare earth',
      'titanium alloy',
      'ceramic material',
      'polymer composite',
      'functional coating'
    ],
    related_fields: [
      'Materials Science',
      'Chemistry',
      'Physics',
      'Nanotechnology'
    ]
  },

  biotech_medical: {
    id: 'biotech_medical',
    name: 'Biotech, Pharma, and High-Performance Medical Devices',
    description: 'Biopharmaceuticals, medical imaging, medical robots, and high-value medical consumables',
    priority_level: 'high',
    keywords: [
      'biopharmaceutical',
      'monoclonal antibody',
      'gene therapy',
      'cell therapy',
      'immunotherapy',
      'CRISPR',
      'genome editing',
      'medical robot',
      'surgical robot',
      'medical imaging',
      'MRI',
      'CT scanner',
      'ultrasound',
      'medical device',
      'diagnostic device',
      'biosensor',
      'drug delivery',
      'regenerative medicine',
      'tissue engineering',
      'traditional Chinese medicine',
      'TCM'
    ],
    related_fields: [
      'Biomedical Engineering',
      'Biotechnology',
      'Medicine',
      'Pharmacology'
    ]
  }
};

/**
 * Get all sector IDs
 */
export function getAllSectorIds(): string[] {
  return Object.keys(MIC2025_SECTORS);
}

/**
 * Get sector by ID
 */
export function getSectorById(id: string): MIC2025Sector | undefined {
  return MIC2025_SECTORS[id];
}

/**
 * Get all keywords across all sectors
 */
export function getAllKeywords(): string[] {
  const keywords = new Set<string>();
  Object.values(MIC2025_SECTORS).forEach(sector => {
    sector.keywords.forEach(keyword => keywords.add(keyword));
  });
  return Array.from(keywords);
}

/**
 * Search sectors by keyword
 */
export function searchSectorsByKeyword(keyword: string): MIC2025Sector[] {
  const lowerKeyword = keyword.toLowerCase();
  return Object.values(MIC2025_SECTORS).filter(sector =>
    sector.keywords.some(k => k.toLowerCase().includes(lowerKeyword)) ||
    sector.name.toLowerCase().includes(lowerKeyword) ||
    sector.description.toLowerCase().includes(lowerKeyword)
  );
}
