import { FileSystemConfig } from '@/Globals'

const fileSystems: FileSystemConfig[] = [
  {
    name: 'Sample Runs',
    slug: 'sample-runs',
    description: 'Pre-built dashboards for exploration',
    thumbnail: 'images/thumb-localfiles.jpg',
    baseURL: 'https://svn.vsp.tu-berlin.de/repos/public-svn/shared/billy/simwrapper/sample-data',
  },
  {
    name: 'Local Files',
    slug: 'local',
    description: 'Local files on this computer, shared via mini-file-server',
    baseURL: 'http://localhost:8000',
    thumbnail: 'images/thumb-localfiles.jpg',
  },
]

for (let port = 8000; port < 8500; port++) {
  fileSystems.push({
    name: 'Localhost ' + port,
    slug: `${port}`,
    description: 'Localhost ' + port,
    description_de: 'Localhost ' + port,
    baseURL: 'http://localhost:' + port,
    thumbnail: '/simwrapper/images/thumb-localfiles.jpg',
    hidden: true,
  })
}

export default fileSystems
