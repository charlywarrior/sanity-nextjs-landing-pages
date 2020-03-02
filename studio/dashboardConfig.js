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
                  buildHookId: '5e5d2dda47370f95e0b049ab',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bzwpvqgv',
                  apiId: 'acb2f010-bf03-4c5a-b28e-f3b63aed00cc'
                },
                {
                  buildHookId: '5e5d2ddae250ffc0697cac26',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-c8wu7j5g',
                  apiId: '36e63607-5af3-4be2-9d1d-34641c6cb7b7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/charlywarrior/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-c8wu7j5g.netlify.com', category: 'apps'}
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
