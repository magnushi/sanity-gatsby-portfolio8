export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5df7fb4b47884adf7a4e6978',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio8-studio',
                  apiId: '93b0af42-a60c-4121-b225-ee7439d64417'
                },
                {
                  buildHookId: '5df7fb4b0d0894d780e60a24',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio8',
                  apiId: '7f54add5-07f6-4ace-9136-7c0ec368d994'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-gatsby-portfolio8',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio8.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
