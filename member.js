function member() {
  return {
    name: 'member',
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Unique identifier for the member',
      },
      name: {
        type: 'string',
        description: 'Name of the member',
      },
      email: {
        type: 'string',
        format: 'email',
        description: 'Email address of the member',
      },
      role: {
        type: 'string',
        enum: ['admin', 'user', 'guest'],
        description: 'Role of the member in the system',
      },
    },
    required: ['id', 'name', 'email', 'role'],
  };
}