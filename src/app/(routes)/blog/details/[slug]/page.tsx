import { Metadata } from 'next';
import DetailsBlog from '@/src/view/blog/blogDetails';
import { getBlogPost } from '@/src/data/blogData';

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  return {
    title: `${post.title} | Modac Real Estate Blog`,
    description: post.subtitle,
    openGraph: {
      title: post.title,
      description: post.subtitle,
      images: [{ url: post.featuredImage }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.subtitle,
      images: [post.featuredImage],
    }
  };
}

export default async function BlogDetailsPage({ params }: Props) {
    return <DetailsBlog />
}