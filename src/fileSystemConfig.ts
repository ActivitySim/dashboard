import { FileSystemConfig } from '@/Globals'

const fileSystems: FileSystemConfig[] = [
  {
    name: 'Sample Runs',
    slug: 'sample',
    description: 'Pre-built dashboards for exploration',
    thumbnail: 'images/thumb-localfiles.jpg',
    baseURL: 'https://svn.vsp.tu-berlin.de/repos/public-svn/shared/billy/simwrapper/sample-data',
  },
  {
    name: 'Localhost',
    slug: 'local',
    description: 'Local files on this computer, shared via mini-file-server',
    baseURL: 'http://localhost:8000',
    thumbnail: 'images/thumb-localfiles.jpg',
  },
]

export default fileSystems
