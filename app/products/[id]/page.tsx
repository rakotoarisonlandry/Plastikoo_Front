import ProductDetail from '@/components/sectionsdetails/ProductDetail';
import Homepage from '@/components/section/header/Homepage';

const product = {
  nom: 'Nom du Produit',
  description: 'Description du produit.',
  image: '/Union.png',
  prix: '1500Ar',
};

const smallImages = [
  '/Union.png',
  '/Union.png',
  '/Union.png',
];

const relatedProducts = [
  {
    nom: 'Produit Similaire 1',
    description: 'Description du produit similaire.',
    image: '/Union.png',
    prix: '2000Ar',
  },
  {
    nom: 'Produit Similaire 2',
    description: 'Description du produit similaire.',
    image: '/Union.png',
    prix: '2500Ar',
  },
  {
    nom: 'Produit Similaire 3',
    description: 'Description du produit similaire.',
    image: '/Union.png',
    prix: '3000Ar',
  },
];

const Page = () => {
  return (
    <div>
      <Homepage />

      <ProductDetail product={product} smallImages={smallImages} relatedProducts={relatedProducts} />
    </div>
  );
};

export default Page;
