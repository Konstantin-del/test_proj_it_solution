export const profileData = {
  name: 'Konstantin Pukhov',
  description: 'full stack developer.',
  links: {
    create: [
      {
        label: 'GitHub',
        url: 'https://github.com/Konstantin-del',
        sortOrder: 0,
      },
    ],
  },
  skills: {
    create: [
      { name: 'TypeScript', sortOrder: 0 },
      { name: 'JavaScript', sortOrder: 1 },
      { name: 'C#', sortOrder: 2 },
      { name: 'SQL', sortOrder: 3 },
      { name: 'Docker', sortOrder: 4 },
      { name: 'GIT', sortOrder: 5 },
    ],
  },
  experiences: {
    create: [
      {
        company: 'it technology',
        position: 'full stack developer',
        startDate: new Date('2024-03-01'),
        endDate: new Date('2024-12-01'),
        achievements: ['Рефакторинг, новые фичи, поиск багов'],
        sortOrder: 2,
      },
      {
        company: '1win',
        position: 'backend developer',
        startDate: new Date('2025-01-01'),
        endDate: new Date('2025-12-01'),
        achievements: [
          'Подключение новых платежных провайдеров, ' +
            'составление сопровождающей документации, рефакторинг, написание тестов',
        ],
        sortOrder: 1,
      },
      {
        company: 'А4-консалтинг',
        position: 'backend developer',
        startDate: new Date('2025-02-01'),
        endDate: null,
        achievements: [
          'Работа с CRM, Внедрение нового функционала: цифровые подписи документов, ' +
            'рефакторинг основного функционала системы, ' +
            'оптимизация запросов к базе данных, кеширование',
        ],
        sortOrder: 0,
      },
    ],
  },
  projects: {
    create: [{ name: 'Название', url: 'https://github.com/...', sortOrder: 0 }],
  },
};
