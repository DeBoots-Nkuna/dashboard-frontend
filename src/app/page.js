import UploadData from '@/components/uploadData';

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <h1>GEDA Dashboard</h1>
        </nav>
      </header>
      <section>
        <UploadData />
      </section>
    </>
  );
}
