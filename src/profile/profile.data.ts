export const profileData = {
  name: 'Имя Фамилия',
  description: 'Кратко, чем занимаешься.',
  links: {
    create: [{ label: 'GitHub', url: 'https://github.com/...', sortOrder: 0 }],
  },
  skills: {
    create: [{ name: 'TypeScript', sortOrder: 0 }],
  },
  experiences: {
    create: [
      {
        company: 'Компания',
        position: 'Должность',
        startDate: new Date('2022-03-01'),
        endDate: null,
        achievements: ['Что сделал на этой работе'],
        sortOrder: 0,
      },
    ],
  },
  projects: {
    create: [{ name: 'Название', url: 'https://github.com/...', sortOrder: 0 }],
  },
};
