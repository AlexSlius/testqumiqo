import { Cards } from "@/components/cards";
import { LayoutMain } from "@/layout/main-layout";

// dunaic metadata
export async function generateMetadata() {
  return {
    title: "test",
    description: "test",
    keywords: "test",
  }
}

export default async function Home() {
  const resPost = await fetch(`https://api.qumiqo.sontam.xyz/api/posts?_limit=16&type=newest&page=1`);

  if (!resPost.ok) {
    throw new Error('Network response was not ok');
  }

  const dataPost = await resPost.json();

  return (
    <LayoutMain>
      <Cards dataPost={dataPost.data} />
    </LayoutMain>
  );
}
