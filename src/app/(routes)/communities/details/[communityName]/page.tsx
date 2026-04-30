import { Metadata } from 'next';
import CommunityDetailsView from '@/src/view/communities/communityDetails';
import { getCommunityArticles } from '@/src/api/communities';

type Props = {
  params: Promise<{ communityName: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { communityName } = await params;
  const decodedName = decodeURIComponent(communityName);
  
  try {
    const response = await getCommunityArticles(decodedName);
    const article = response.articles[0];
    
    if (!article) throw new Error("No article found");

    return {
      title: `${article.title} | Modac Real Estate Communities`,
      description: article.meta_description || article.content.substring(0, 160),
      openGraph: {
        title: article.title,
        description: article.meta_description,
        images: [{ url: article.featured_image }],
        type: 'article',
      }
    };
  } catch (error) {
    return {
      title: `${decodedName} | Modac Real Estate`,
    };
  }
}

export default async function CommunityDetailsPage({ params }: Props) {
  const { communityName } = await params;
  return <CommunityDetailsView communityName={communityName} />
}
