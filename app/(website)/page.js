import HomePage from "./home";
import { getAllPosts } from "@/lib/sanity/client";
import TitleImage from "@/components/title-container";
import PostList from "@/components/postlist";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Container from "@/components/container";


export default async function IndexPage() {
  const posts = await getAllPosts();
  return (
    <>
    <div style={{ position: 'relative', paddingBottom: '2rem' }}>
      <Navbar />

      {/* Left edge text */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%) rotate(180deg)',
          writingMode: 'vertical-rl',
          whiteSpace: 'nowrap',
          zIndex: 1000,
        }}
      >
        <h1 className="text-saffron" style={{ fontSize: '.75rem', margin: 15, letterSpacing: 12 }}>ISSUE 03 - RAVE WAVE</h1>
      </div>

      {/* Right edge text */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%) rotate(-360deg)',
          writingMode: 'vertical-rl',
          whiteSpace: 'nowrap',
          zIndex: 1000,
        }}
      >
        <h1 className="text-saffron" style={{ fontSize: '.75rem', margin: 15, letterSpacing: 12 }}>CONCOURSE</h1>
      </div>

      {/* Your existing content */}
      <TitleImage/>
      <Container className="mt-10 border-t border-gray-100 dark:border-gray-800 py-5 bg-back flex flex-col">
      <div className=" flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 my-20 border-b block border-saffron">
        <h1 className=" py-5 text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8 text-lilac">
          Latest Posts      
        </h1>
      </div>
      </Container>
      <HomePage posts={posts} />

      
    </div>
    <div className="bg-back z-50">
      <Footer />
    </div>
    
    </>
  );
}
