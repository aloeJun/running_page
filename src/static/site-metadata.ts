interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://sport.islu.cn',
  logo: 'https://islu.cn/media/detail/aloeJun.png',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://islu.cn',
    }
  ],
};

export default data;
