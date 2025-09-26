import { useState } from "react";
import { Wallet, Check, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const WALLET_OPTIONS = [
  {
    name: "MetaMask",
    icon: "🦊",
    description: "Most popular Ethereum wallet",
    installed: true,
  },
  {
    name: "WalletConnect", 
    icon: "📱",
    description: "Connect with mobile wallets",
    installed: true,
  },
  {
    name: "Coinbase Wallet",
    icon: "🔵", 
    description: "Official Coinbase wallet",
    installed: false,
  },
];

export const WalletConnect = () => {
  const [isConnecting, setIsConnecting] = useState<string | null>(null);
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null);
  const { toast } = useToast();

  const handleConnect = async (walletName: string) => {
    setIsConnecting(walletName);
    
    // Simulate wallet connection
    setTimeout(() => {
      setIsConnecting(null);
      setConnectedWallet(walletName);
      toast({
        title: "Wallet Connected!",
        description: `Successfully connected to ${walletName}`,
      });
    }, 2000);
  };

  const handleDisconnect = () => {
    setConnectedWallet(null);
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been safely disconnected",
      variant: "destructive",
    });
  };

  if (connectedWallet) {
    return (
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
              <Check className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold">Wallet Connected</h3>
              <p className="text-sm text-muted-foreground">{connectedWallet}</p>
            </div>
          </div>
          <Badge className="bg-success-green/20 text-success-green border-success-green/30">
            Connected
          </Badge>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Address</span>
            <span className="text-sm font-mono">0x742d...3a7c</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Network</span>
            <span className="text-sm">Ethereum Mainnet</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Balance</span>
            <span className="text-sm font-semibold">2.45 ETH</span>
          </div>
        </div>

        <Button 
          variant="outline" 
          onClick={handleDisconnect}
          className="w-full glass-card border-accent/30 touch-manipulation active:scale-95"
        >
          Disconnect Wallet
        </Button>
      </Card>
    );
  }

  return (
    <Card className="glass-card p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Wallet className="h-8 w-8 text-primary-foreground" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Connect Your Wallet</h2>
        <p className="text-muted-foreground">
          Choose your preferred wallet to start participating in blockchain-native events
        </p>
      </div>

      <div className="space-y-3">
        {WALLET_OPTIONS.map((wallet) => (
          <div
            key={wallet.name}
            className={`glass-card border border-accent/20 rounded-lg p-4 transition-smooth hover:border-accent/40 ${
              !wallet.installed ? 'opacity-60' : 'cursor-pointer hover:glow-neon'
            }`}
            onClick={() => wallet.installed && handleConnect(wallet.name)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{wallet.icon}</div>
                <div>
                  <h3 className="font-semibold">{wallet.name}</h3>
                  <p className="text-sm text-muted-foreground">{wallet.description}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {!wallet.installed && (
                  <Badge variant="outline" className="text-warning-orange border-warning-orange/30">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Not Installed
                  </Badge>
                )}
                
                {isConnecting === wallet.name ? (
                  <Loader2 className="h-4 w-4 animate-spin text-primary" />
                ) : wallet.installed ? (
                  <Button size="sm" variant="ghost" className="text-accent hover:text-accent">
                    Connect
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 glass-card border border-accent/20 rounded-lg">
        <div className="flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-medium mb-1">New to Web3?</h4>
            <p className="text-sm text-muted-foreground">
              Don't have a wallet yet? We recommend starting with MetaMask - it's free, secure, and easy to use.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};