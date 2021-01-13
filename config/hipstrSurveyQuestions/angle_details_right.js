const angle_details_right = {
  block_id: 'angle_details_right',
  block_header: 'Hip Angle Details - Right',
  block_description: 'Details about the Angle of the Hip',
  enabled: false,
  required: false,
  questions: [
    {
      id: '40',
      question_header: 'Right Center Edge Angle',
      question_desc: 'Enter the Right Center Edge Angle to the Sourcil',
      enabled: true,
      required: false,
      type: 'FR',
      fr_type: 'number',
      value: [],
    },
    {
      id: '41',
      question_header: 'Right Center Edge Angle',
      question_desc: 'Enter the Right Center Edge Angle to the Edge',
      enabled: true,
      required: false,
      type: 'FR',
      fr_type: 'number',
      value: [],
    },
    {
      id: '42',
      question_header: 'Right Alpha Angle',
      question_desc: 'Enter Right Side Alpha Angle',
      enabled: true,
      required: false,
      type: 'FR',
      fr_type: 'number',
      value: [],
    },
    {
      id: '43',
      question_header: 'Right Femoral Version',
      question_desc: 'Enter the Right Femoral Version',
      enabled: true,
      required: false,
      type: 'FR',
      fr_type: 'number',
      value: [],
    },
    {
      id: '44',
      question_header: 'Right Femoral Version',
      question_desc: 'Enter the type Right Femoral Version',
      enabled: true,
      required: false,
      type: 'MC',
      options: [
        { value: 'CT', children: [], blocks_enabled: [] },
        { value: 'MRI', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '45',
      question_header: 'Right Tonnis Angle',
      question_desc: 'Enter the Right Tonnis Angle',
      enabled: true,
      required: false,
      type: 'FR',
      fr_type: 'number',
      value: [],
    },
  ],
};

module.exports = angle_details_right;
