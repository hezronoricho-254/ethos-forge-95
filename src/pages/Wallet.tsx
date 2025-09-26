import { WalletConnect } from "@/components/WalletConnect";
import { Header } from "@/components/Header";

const Wallet = () => {
  return (
    <div className="min-h-screen gradient-hero">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <WalletConnect />
        </div>
      </main>
    </div>
  );
};

export default Wallet;