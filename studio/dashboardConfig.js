export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ecbcd8bc94566682f5a1f06',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5uid9utx',
                  apiId: 'cfb0927c-6814-4398-a148-c41f3a85f203'
                },
                {
                  buildHookId: '5ecbcd8cd2193e8fa58e04c7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-j1p5vt7w',
                  apiId: '095f099e-b7e6-4daf-b807-2859c30d3d92'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AlexCelestino/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-j1p5vt7w.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
