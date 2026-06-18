export function shopImage(filename: string, width = 770): string {
  return `https://foaclothing.com/cdn/shop/files/${filename}&width=${width}`;
}

export function shopCollectionImage(filename: string, width = 960): string {
  return `https://foaclothing.com/cdn/shop/collections/${filename}&width=${width}`;
}
