import { Calendar, MapPin, Users, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { EventCard } from "@/components/EventCard";

const featuredEvents = [
  {
    id: "1",
    title: "Web3 Developer Conference 2024",
    description: "The premier blockchain development conference featuring the latest in DeFi, NFTs, and decentralized applications.",
    date: "2024-03-15",
    time: "09:00 AM",
    location: "San Francisco, CA",
    price: "0.1 ETH",
    attendees: 1200,
    image: "/api/placeholder/400/300",
    verified: true,
    badges: ["Early Bird", "Limited NFT"],
    organizer: "BlockchainEvents LLC",
    ticketsLeft: 45,
    totalTickets: 1200
  },
  {
    id: "2", 
    title: "DeFi Summit: Future of Finance",
    description: "Explore the cutting-edge developments in decentralized finance with industry leaders and innovators.",
    date: "2024-03-22",
    time: "10:00 AM",
    location: "New York, NY",
    price: "0.08 ETH",
    attendees: 800,
    image: "/api/placeholder/400/300",
    verified: true,
    badges: ["Verified", "Royalties"],
    organizer: "DeFi Alliance",
    ticketsLeft: 120,
    totalTickets: 800
  },
  {
    id: "3",
    title: "NFT Art & Culture Festival",
    description: "A celebration of digital art, NFT culture, and the creators shaping the metaverse landscape.",
    date: "2024-04-05", 
    time: "2:00 PM",
    location: "Los Angeles, CA",
    price: "0.05 ETH",
    attendees: 500,
    image: "/api/placeholder/400/300", 
    verified: true,
    badges: ["Art", "Community"],
    organizer: "CryptoArt Collective",
    ticketsLeft: 89,
    totalTickets: 500
  }
];

const Index = () => {
  return (
    <div className="min-h-screen gradient-hero">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"></div>
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 glass-card border-accent/30 text-accent">
            🚀 Blockchain-Native Events
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-neon bg-clip-text text-transparent">
            Transparent Events,
            <br />
            Real Rewards
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Join blockchain-verified events with NFT tickets, community rewards, and full transparency. 
            Experience the future of event participation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary glow-primary transition-bounce text-lg px-8">
              <Zap className="mr-2 h-5 w-5" />
              Explore Events
            </Button>
            <Button variant="outline" size="lg" className="glass-card border-accent/30 text-lg px-8">
              <Shield className="mr-2 h-5 w-5" />
              Connect Wallet
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="glass-card p-8 text-center transition-smooth hover:glow-neon">
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Blockchain Verified</h3>
              <p className="text-muted-foreground">
                Every ticket is an NFT on-chain, ensuring authenticity and preventing fraud.
              </p>
            </Card>
            <Card className="glass-card p-8 text-center transition-smooth hover:glow-primary">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Early Supporter Rewards</h3>
              <p className="text-muted-foreground">
                Get exclusive benefits and rewards for supporting events early.
              </p>
            </Card>
            <Card className="glass-card p-8 text-center transition-smooth hover:glow-neon">
              <Users className="h-12 w-12 text-neon-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Community Driven</h3>
              <p className="text-muted-foreground">
                Build lasting connections with NFT memberships and community rewards.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Events</h2>
              <p className="text-muted-foreground text-lg">
                Discover blockchain-native events with verified organizers and transparent operations.
              </p>
            </div>
            <Button variant="outline" className="glass-card border-accent/30">
              View All Events
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 gradient-card">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-muted-foreground">Events Hosted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">50K+</div>
              <div className="text-muted-foreground">NFT Tickets</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-neon-purple mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-success-green mb-2">$2M+</div>
              <div className="text-muted-foreground">Creator Royalties</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;