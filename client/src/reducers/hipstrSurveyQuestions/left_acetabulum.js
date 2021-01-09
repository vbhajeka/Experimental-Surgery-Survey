export const left_acetabulum =
  // left_acetabulum
  {
    block_id: 'left_acetabulum',
    block_header: 'Left Acetabulum Details',
    block_description: 'Details about the Acetabulum Labrum',
    enabled: false,
    required: true,
    questions: [
      {
        id: '0',
        question_header: 'Left Acetabulum',
        question_desc: 'What was the status of the Left Acetabulum?',
        enabled: true,
        required: true,
        type: 'MC',
        options: [
          { value: 'Normal', children: [], blocks_enabled: [] },
          {
            value: 'Abnormal',
            children: ['1', '2', '3', '4'],
            blocks_enabled: [],
          },
        ],
        value: [],
      },
      {
        id: '1',
        question_header: 'Pincer Lesion',
        question_desc: 'Was there a Pincer Lesion?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'Yes', children: [], blocks_enabled: [] },
          { value: 'No', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '2',
        question_header: 'Os Acetabuli',
        question_desc: 'Was there a Os Acetabuli?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'Yes', children: ['6'], blocks_enabled: [] },
          { value: 'No', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '6',
        question_header: 'Os Acetabuli Treatment',
        question_desc: 'What was the Treatment for the Os Acetabuli?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'Internal fixation', children: [], blocks_enabled: [] },
          { value: 'Removal', children: [], blocks_enabled: [] },
          { value: 'Leave Alone', children: [], blocks_enabled: [] },
          { value: 'Other', children: ['32'], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '32',
        question_header: 'Other Treatment',
        question_desc: 'Enter Treatment for Os Acetabuli',
        enabled: false,
        required: true,
        type: 'FR',
        fr_type: 'text',
        value: [],
      },
      {
        id: '3',
        question_header: 'Rim Stress Fracture',
        question_desc: 'Was there a Rim Stress Fracture?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'Yes', children: ['7'], blocks_enabled: [] },
          { value: 'No', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '7',
        question_header: 'Rim Stress Fracture Treatment',
        question_desc: 'What was the Treatment for the Rim Stress Fracture?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'Internal fixation', children: [], blocks_enabled: [] },
          { value: 'Removal', children: [], blocks_enabled: [] },
          { value: 'Leave Alone', children: [], blocks_enabled: [] },
          { value: 'Other', children: ['34'], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '34',
        question_header: 'Other Treatment',
        question_desc: 'Enter Treatment for Rim Stress Fracture',
        enabled: false,
        required: true,
        type: 'FR',
        fr_type: 'text',
        value: [],
      },
      {
        id: '4',
        question_header: 'Contrecoup & Dysplasia',
        question_desc: 'Was there a Contrecoup or Dysplasia?',
        enabled: false,
        required: true,
        type: 'SATA',
        options: [
          { value: 'Contrecoup', children: [], blocks_enabled: [] },
          { value: 'Dysplasia', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
    ],
  };
