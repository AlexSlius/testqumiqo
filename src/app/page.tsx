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

const fetchPosts = async () => {
  try {
    const res = await fetch(`https://api.qumiqo.sontam.xyz/api/posts?_limit=16&type=newest&page=1`);

    return res.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return { data: [], meta: { page: 1, totalPages: 1 } };
  }
};

export default async function Home() {
  const dataPost = fetchPosts();

  return (
    <LayoutMain>
      <Cards dataPost={dataPost} />
    </LayoutMain>
  );
}
