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
                  buildHookId: '5d13bbbdb272d5fa80c0746b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gpt6frwt',
                  apiId: '968c8f86-48f6-4367-83d6-92bfb78578d7'
                },
                {
                  buildHookId: '5d13bbbd1509a620d4053cc4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vgwhg2sp',
                  apiId: 'efc70d3d-f8e8-421f-bab4-05afbeb13cd1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zapaiamarce/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vgwhg2sp.netlify.com', category: 'apps'}
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
