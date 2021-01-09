export const right_glute_repair = {
  block_id: 'right_glute_repair',
  block_header: 'Gluteus Tendon Repair Details',
  block_description: 'Gluteus Tendon Repair Details',
  enabled: false,
  required: true,
  questions: [
    {
      id: '0',
      question_header: 'Glute Tendon Repair Type',
      question_desc: 'Select Glute tendon repair type',
      enabled: true,
      required: true,
      type: 'MC',
      options: [
        {
          value: 'Arthroscopic',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Open',
          children: [],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: '1',
      question_header: 'Size of Lesion',
      question_desc: 'Enter the Size of the Lesion',
      enabled: true,
      required: true,
      type: 'FR',
      fr_type: 'number',
      value: [],
    },
    {
      id: '6',
      question_header: 'Implant Manufacturer',
      question_desc: 'Who manufactured the implant?',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        { value: 'Arthex', children: ['11'], blocks_enabled: [] },
        { value: 'Biomet', children: ['12'], blocks_enabled: [] },
        { value: 'Conmed', children: ['13'], blocks_enabled: [] },
        {
          value: 'Smith & Nephew',
          children: ['14'],
          blocks_enabled: [],
        },
        { value: 'Stryker / Pivot', children: ['15'], blocks_enabled: [] },
        { value: 'Medacta', children: ['16'], blocks_enabled: [] },
        { value: 'Other', children: ['58'], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '58',
      question_header: 'Other Implant Manufacturer',
      question_desc: 'What was the Other Implant Manufacturer?',
      enabled: false,
      required: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
    {
      id: '11',
      question_header: 'Arthex Implant System',
      question_desc: 'What was the Arthex Implant System?',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        { value: 'Pushlock', children: [], blocks_enabled: [] },
        {
          value: 'Biocomposite Pushlock',
          children: [],
          blocks_enabled: [],
        },
        { value: 'PEEK SutureTak', children: [], blocks_enabled: [] },
        {
          value: 'Biocomposite SutureTak',
          children: [],
          blocks_enabled: [],
        },
        { value: 'Knotless FiberTak', children: [], blocks_enabled: [] },
        { value: 'Other', children: ['59'], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '59',
      question_header: 'Other Arthex Implant System',
      question_desc: 'What was the Other Arthex Implant System?',
      enabled: false,
      required: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
    {
      id: '12',
      question_header: 'Biomet Implant System',
      question_desc: 'What was the Biomet Implant System?',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        {
          value: 'Juggerknot Long Soft Anchor',
          children: [],
          blocks_enabled: [],
        },
        { value: 'Other', children: ['60'], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '60',
      question_header: 'Other Biomet Implant System',
      question_desc: 'What was the Other Biomet Implant System?',
      enabled: false,
      required: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
    {
      id: '13',
      question_header: 'Conmed Implant System',
      question_desc: 'What was the Conmed Implant System?',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        {
          value: 'Poplok',
          children: [],
          blocks_enabled: [],
        },
        { value: 'Press FT', children: [], blocks_enabled: [] },
        { value: 'Bio Mini Revo', children: [], blocks_enabled: [] },
        { value: 'Y Knot', children: [], blocks_enabled: [] },
        { value: 'Other', children: ['61'], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '61',
      question_header: 'Other Conmed Implant System',
      question_desc: 'What was the Other Conmed Implant System?',
      enabled: false,
      required: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
    {
      id: '14',
      question_header: 'Smith & Nephew Implant System',
      question_desc: 'What was the Smith & Nephew Implant System?',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        { value: 'Bioraptor Knotless', children: [], blocks_enabled: [] },
        { value: 'Bioraptor PK', children: [], blocks_enabled: [] },
        { value: 'Labralock P', children: [], blocks_enabled: [] },
        { value: 'Mini Magnum', children: [], blocks_enabled: [] },
        { value: 'Mini Magnum Plus', children: [], blocks_enabled: [] },
        { value: 'Osteoraptor', children: [], blocks_enabled: [] },
        { value: 'Q-Fix', children: [], blocks_enabled: [] },
        { value: 'Speedlock', children: [], blocks_enabled: [] },
        { value: 'Speedlock Plus', children: [], blocks_enabled: [] },
        { value: 'Speedlock Ultra', children: [], blocks_enabled: [] },
        { value: 'Other', children: ['62'], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '62',
      question_header: 'Other Smith & Nephew Implant System',
      question_desc: 'What was the Other Smith & Nephew Implant System?',
      enabled: false,
      required: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
    {
      id: '15',
      question_header: 'Stryker / Pivot Implant System',
      question_desc: 'What was the Stryker / Pivot Implant System?',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        { value: 'Iconix', children: [], blocks_enabled: [] },
        { value: 'Pivot Cinchlock SS', children: [], blocks_enabled: [] },
        { value: 'Pivot Nanotak Flex', children: [], blocks_enabled: [] },
        { value: 'Other', children: ['63'], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '63',
      question_header: 'Other Stryker / Pivot Implant System',
      question_desc: 'What was the Other SStryker / Pivot Implant System?',
      enabled: false,
      required: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
    {
      id: '16',
      question_header: 'Medacta Implant System',
      question_desc: 'What was the Medacta Implant System?',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        { value: 'Mectalock PPEK', children: [], blocks_enabled: [] },
        { value: 'Mectalock TI', children: [], blocks_enabled: [] },
        { value: 'Mectatap TI', children: [], blocks_enabled: [] },
        { value: 'Mectalock All Suture', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '17',
      question_header: 'Other Implant System',
      question_desc: 'What was the Other Implant System?',
      enabled: false,
      required: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
    {
      id: '7',
      question_header: 'Number of Anchors',
      question_desc: 'How many anchors were used?',
      enabled: true,
      required: true,
      type: 'FR',
      fr_type: 'number',
      options: [],
      value: [],
    },
    {
      id: '8',
      question_header: 'Anchor Material',
      question_desc: 'What was the material of the anchor?',
      enabled: true,
      required: true,
      type: 'MC',
      options: [
        { value: 'All-suture Based', children: [], blocks_enabled: [] },
        { value: 'Metal', children: [], blocks_enabled: [] },
        { value: 'Bioabsorbable', children: [], blocks_enabled: [] },
        { value: 'PEEK', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '9',
      question_header: 'Anchor Type',
      question_desc: 'What type of anchor was used?',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        { value: 'Knotted', children: [], blocks_enabled: [] },
        { value: 'Knotless', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '2',
      question_header: 'Row',
      question_desc: 'How many rows were used?',
      enabled: true,
      required: true,
      type: 'MC',
      options: [
        { value: 'Single Row', children: [], blocks_enabled: [] },
        { value: 'Double Row', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '3',
      question_header: 'Augmentation',
      question_desc: 'Was there any augmentation?',
      enabled: true,
      required: true,
      type: 'MC',
      options: [
        { value: 'Yes', children: ['4'], blocks_enabled: [] },
        { value: 'No', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '4',
      question_header: 'Type of Augmentation',
      question_desc: 'What was the type of Augmentation?',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        { value: 'Autograft', children: ['5'], blocks_enabled: [] },
        { value: 'Allograft', children: ['18'], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '5',
      question_header: 'Autograft Type',
      question_desc: 'Enter the autograft type',
      enabled: false,
      required: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
    {
      id: '18',
      question_header: 'Type of Allograft',
      question_desc: 'What was the type of Allograft?',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        { value: 'IT Band', children: [], blocks_enabled: [] },
        { value: 'Dermal Autograft', children: ['19'], blocks_enabled: [] },
        { value: 'Other', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '19',
      question_header: 'Type of Dermal Allograft',
      question_desc: 'What was the type of Dermal Allograft?',
      long_question_desc: [
        'Graftjacket - Wright Medical Technology / human cadaver dermis',
        'Cuffpatch - Arthrotek / Porcine SIS',
        'Restore - Depuy Orthopaedics / Porcine SIS',
        'Permacol - Zimmer / Porcine dermis',
        'Tissuemend - Stryker / Porcine dermis',
        'Artelon and Sportmesh - Artimplant and Biomet / Polyurethane urea polymer',
        'Bio-Blanket - Kensey Nash Corporation / Bovine dermis',
        'Gore-Tex Patch WL - Gore and Associates / ePTFE',
        'Leeds-Keio - Xiros plc, Yufu Itonaga / Polyester ethylene terephthalate',
        'Poly-Tape - Xiros plc, Yufu Itonaga / Polyester ethylene terephthalate',
        'OrthoADAPT - Pegasus Biologic Inc / Equine pericardium',
        'Shelhigh No-React Encuff Patch - Shelhigh Inc / Bovine or porcine pericardium',
      ],
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        {
          value: 'Graftjacket',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Cuffpatch',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Restore',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Permacol',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Tissuemend',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Artelon and Sportmesh',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Bio-Blanket',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Gore-Tex Patch WL',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Leeds-Keio',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Poly-Tape',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'OrthoADAPT',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Shelhigh No-React Encuff Patch',
          children: [],
          blocks_enabled: [],
        },
        { value: 'Other', children: ['26'], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '26',
      question_header: 'Other Type of Dermal Allograft',
      question_desc: 'What was the Other Type of Dermal Allograft?',
      enabled: false,
      required: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
  ],
};
