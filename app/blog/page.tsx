import { 
  BlogHero, 
  BlogFeatured, 
  BlogGrid, 
  BlogNewsletter 
} from "@/components/sections/BlogPreview/Blog";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <BlogHero />
      <BlogFeatured />
      <BlogGrid />
      <BlogNewsletter />
    </main>
  );
}
