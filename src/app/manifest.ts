import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Студия 3D-печати',
    short_name: 'Студия 3D-печати',
    description: 'Печать пластиковых изделий на заказ из пластика',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    orientation: 'landscape-primary',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg',
      },
    ],
  };
}
