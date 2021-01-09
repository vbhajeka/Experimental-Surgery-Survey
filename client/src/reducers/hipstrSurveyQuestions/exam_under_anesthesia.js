export const exam_under_anesthesia = {
  block_id: 'exam_under_anesthesia',
  block_header: 'Exam Under Anesthesia',
  block_description:
    'Details about the Exam while the patient was under anesthesia',
  enabled: false,
  required: false,
  questions: [
    {
      id: '25',
      question_header: 'Left PROM Performed',
      question_desc: 'Was PROM performed on the left side?',
      enabled: true,
      required: true,
      type: 'MC',
      options: [
        { value: 'Yes', children: ['26', '27', '28'], blocks_enabled: [] },
        { value: 'No', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '26',
      question_header: 'Left PROM: FF',
      question_desc: 'Enter range',
      enabled: false,
      required: true,
      type: 'DDS',
      options: [
        { value: '180', children: [], blocks_enabled: [] },
        { value: '150 to 179', children: [], blocks_enabled: [] },
        { value: '120 to 149', children: [], blocks_enabled: [] },
        { value: '90 to 119', children: [], blocks_enabled: [] },
        { value: '60 to 89', children: [], blocks_enabled: [] },
        { value: '30 to 59', children: [], blocks_enabled: [] },
        { value: '0 to 29', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '27',
      question_header: 'Left PROM in 90 deg: IR',
      question_desc: 'Enter range',
      enabled: false,
      required: true,
      type: 'DDS',
      options: [
        { value: '90', children: [], blocks_enabled: [] },
        { value: '75 to 89', children: [], blocks_enabled: [] },
        { value: '60 to 74', children: [], blocks_enabled: [] },
        { value: '45 to 59', children: [], blocks_enabled: [] },
        { value: '30 to 44', children: [], blocks_enabled: [] },
        { value: '15 to 29', children: [], blocks_enabled: [] },
        { value: '0 to 14', children: [], blocks_enabled: [] },
        { value: '-1 to -14', children: [], blocks_enabled: [] },
        { value: '-15 to -29', children: [], blocks_enabled: [] },
        { value: '-30 to -44', children: [], blocks_enabled: [] },
        { value: '-45', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '28',
      question_header: 'Left PROM in 90 deg: ER',
      question_desc: 'Enter range',
      enabled: false,
      required: true,
      type: 'DDS',
      options: [
        { value: '120', children: [], blocks_enabled: [] },
        { value: '105 to 119', children: [], blocks_enabled: [] },
        { value: '90 to 104', children: [], blocks_enabled: [] },
        { value: '75 to 89', children: [], blocks_enabled: [] },
        { value: '60 to 74', children: [], blocks_enabled: [] },
        { value: '45 to 59', children: [], blocks_enabled: [] },
        { value: '30 to 44', children: [], blocks_enabled: [] },
        { value: '15 to 29', children: [], blocks_enabled: [] },
        { value: '0 to 14', children: [], blocks_enabled: [] },
        { value: '-1 to -14', children: [], blocks_enabled: [] },
        { value: '-15 to -29', children: [], blocks_enabled: [] },
        { value: '-30 to -44', children: [], blocks_enabled: [] },
        { value: '-45', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '29',
      question_header: 'Right PROM Performed',
      question_desc: 'Was PROM performed on the right side?',
      enabled: true,
      required: false,
      type: 'MC',
      options: [
        { value: 'Yes', children: ['30', '31', '32'], blocks_enabled: [] },
        { value: 'No', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '30',
      question_header: 'Right PROM: FF',
      question_desc: 'Enter range',
      enabled: false,
      required: false,
      type: 'DDS',
      options: [
        { value: '180', children: [], blocks_enabled: [] },
        { value: '150 to 179', children: [], blocks_enabled: [] },
        { value: '120 to 149', children: [], blocks_enabled: [] },
        { value: '90 to 119', children: [], blocks_enabled: [] },
        { value: '60 to 89', children: [], blocks_enabled: [] },
        { value: '30 to 59', children: [], blocks_enabled: [] },
        { value: '0 to 29', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '31',
      question_header: 'Right PROM in 90 deg: IR',
      question_desc: 'Enter range',
      enabled: false,
      required: false,
      type: 'DDS',
      options: [
        { value: '90', children: [], blocks_enabled: [] },
        { value: '75 to 89', children: [], blocks_enabled: [] },
        { value: '60 to 74', children: [], blocks_enabled: [] },
        { value: '45 to 59', children: [], blocks_enabled: [] },
        { value: '30 to 44', children: [], blocks_enabled: [] },
        { value: '15 to 29', children: [], blocks_enabled: [] },
        { value: '0 to 14', children: [], blocks_enabled: [] },
        { value: '-1 to -14', children: [], blocks_enabled: [] },
        { value: '-15 to -29', children: [], blocks_enabled: [] },
        { value: '-30 to -44', children: [], blocks_enabled: [] },
        { value: '-45', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '32',
      question_header: 'Right PROM in 90 deg: ER',
      question_desc: 'Enter range',
      enabled: false,
      required: false,
      type: 'DDS',
      options: [
        { value: '120', children: [], blocks_enabled: [] },
        { value: '105 to 119', children: [], blocks_enabled: [] },
        { value: '90 to 104', children: [], blocks_enabled: [] },
        { value: '75 to 89', children: [], blocks_enabled: [] },
        { value: '60 to 74', children: [], blocks_enabled: [] },
        { value: '45 to 59', children: [], blocks_enabled: [] },
        { value: '30 to 44', children: [], blocks_enabled: [] },
        { value: '15 to 29', children: [], blocks_enabled: [] },
        { value: '0 to 14', children: [], blocks_enabled: [] },
        { value: '-1 to -14', children: [], blocks_enabled: [] },
        { value: '-15 to -29', children: [], blocks_enabled: [] },
        { value: '-30 to -44', children: [], blocks_enabled: [] },
        { value: '-45', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
  ],
};
