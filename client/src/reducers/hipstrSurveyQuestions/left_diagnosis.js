export const left_diagnosis = {
  block_id: 'left_diagnosis',
  block_header: 'Left Hip Diagnosis',
  block_description: 'Select one or more Diagnoses from the three categories',
  enabled: false,
  required: true,
  questions: [
    {
      id: '0',
      question_header: 'General Diagnosis',
      question_desc: 'Select all that apply',
      enabled: true,
      required: false,
      type: 'SATA',
      options: [
        { value: 'FAI', children: [], blocks_enabled: [] },
        { value: 'DDH', children: [], blocks_enabled: [] },
        { value: 'SCFE', children: [], blocks_enabled: [] },
        { value: 'Perthes', children: [], blocks_enabled: [] },
        { value: 'Hypermobility', children: [], blocks_enabled: [] },
        { value: 'OA', children: [], blocks_enabled: [] },
        { value: 'Loose Bodies', children: [], blocks_enabled: [] },
        { value: 'Inflammatory', children: [], blocks_enabled: [] },
        { value: 'Post Traumatic', children: [], blocks_enabled: [] },
        { value: 'AVN', children: [], blocks_enabled: [] },
        { value: 'Undiagnosed hip Pain', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '1',
      question_header: 'Central Compartment Diagnosis',
      question_desc: 'Select all that apply',
      enabled: true,
      required: false,
      type: 'SATA',
      options: [
        { value: 'Labral Tear', children: [], blocks_enabled: [] },
        { value: 'Ligamentum Teres Tear', children: [], blocks_enabled: [] },
        {
          value: 'Chondral Lesion – non FAI',
          children: [],
          blocks_enabled: [],
        },
        { value: 'Post Traumatic OC Defect', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '2',
      question_header: 'Extra-Articular',
      question_desc: 'Select all that apply',
      enabled: true,
      required: false,
      type: 'SATA',
      options: [
        { value: 'Snapping IP', children: [], blocks_enabled: [] },
        { value: 'Snapping ITB', children: [], blocks_enabled: [] },
        {
          value: 'Troch Bursitis',
          children: [],
          blocks_enabled: [],
        },
        { value: 'Gluteus Tear', children: [], blocks_enabled: [] },
        {
          value: 'AIIS Subspine impingement',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Ischiofemoral impingement',
          children: [],
          blocks_enabled: [],
        },
        { value: 'Deep Gluteal syndrome', children: [], blocks_enabled: [] },
        { value: 'Hamstring Tendinopathy', children: [], blocks_enabled: [] },
        { value: 'Hamstring Avulsion', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
  ],
};
