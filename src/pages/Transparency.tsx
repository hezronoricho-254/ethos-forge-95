import { TransparencyLog } from "@/components/TransparencyLog";
import { Header } from "@/components/Header";

const Transparency = () => {
  return (
    <div className="min-h-screen gradient-hero">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <TransparencyLog />
      </main>
    </div>
  );
};

export default Transparency;