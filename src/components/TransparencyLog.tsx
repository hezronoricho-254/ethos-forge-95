import { useState } from "react";
import { Search, Filter, ExternalLink, Shield, Clock, User, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TRANSACTION_TYPES = {
  ticket_mint: { label: "Ticket Minted", icon: "🎫", color: "text-success-green" },
  ticket_transfer: { label: "Ticket Transfer", icon: "↔️", color: "text-primary" },
  royalty_paid: { label: "Royalty Paid", icon: "💰", color: "text-accent" },
  event_created: { label: "Event Created", icon: "🎪", color: "text-neon-purple" },
  refund_issued: { label: "Refund Issued", icon: "💸", color: "text-warning-orange" },
};

const MOCK_TRANSACTIONS = [
  {
    id: "1",
    type: "ticket_mint",
    hash: "0x1234...5678",
    event: "Web3 Developer Conference 2024",
    actor: "0x742d...3a7c",
    amount: "0.1 ETH",
    timestamp: "2024-01-15T10:30:00Z",
    block: 18950000,
    gasUsed: "45,231",
  },
  {
    id: "2", 
    type: "royalty_paid",
    hash: "0x2345...6789",
    event: "Web3 Developer Conference 2024",
    actor: "EventChain Protocol",
    amount: "0.005 ETH",
    timestamp: "2024-01-15T10:31:00Z",
    block: 18950001,
    gasUsed: "21,000",
  },
  {
    id: "3",
    type: "ticket_transfer",
    hash: "0x3456...7890", 
    event: "DeFi Summit: Future of Finance",
    actor: "0x853a...4b2f",
    amount: "0.12 ETH",
    timestamp: "2024-01-15T09:45:00Z",
    block: 18949985,
    gasUsed: "32,100",
  },
  {
    id: "4",
    type: "event_created",
    hash: "0x4567...8901",
    event: "NFT Art & Culture Festival",
    actor: "0x964c...5d3e",
    amount: "0.02 ETH",
    timestamp: "2024-01-14T16:20:00Z",
    block: 18948750,
    gasUsed: "125,000",
  },
];

export const TransparencyLog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("all");

  const filteredTransactions = MOCK_TRANSACTIONS.filter(tx => {
    const matchesSearch = tx.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tx.hash.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tx.actor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || tx.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString() + " " + 
           new Date(timestamp).toLocaleTimeString();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <Badge className="mb-4 glass-card border-accent/30 text-accent">
          <Shield className="h-3 w-3 mr-1" />
          Blockchain Verified
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Transparency Log</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Every action on our platform is recorded on the blockchain. 
          View real-time transaction history for complete transparency.
        </p>
      </div>

      {/* Filters */}
      <Card className="glass-card p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by event, transaction hash, or address..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 glass-card border-accent/30"
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full md:w-48 glass-card border-accent/30">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent className="glass-card border-accent/30">
              <SelectItem value="all">All Transactions</SelectItem>
              {Object.entries(TRANSACTION_TYPES).map(([key, type]) => (
                <SelectItem key={key} value={key}>
                  {type.icon} {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-primary mb-1">1,247</div>
          <div className="text-sm text-muted-foreground">Total Transactions</div>
        </Card>
        <Card className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-accent mb-1">24.5 ETH</div>
          <div className="text-sm text-muted-foreground">Volume Today</div>
        </Card>
        <Card className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-success-green mb-1">856</div>
          <div className="text-sm text-muted-foreground">Tickets Minted</div>
        </Card>
        <Card className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-neon-purple mb-1">2.1 ETH</div>
          <div className="text-sm text-muted-foreground">Royalties Paid</div>
        </Card>
      </div>

      {/* Transaction List */}
      <Card className="glass-card overflow-hidden">
        <div className="p-6 border-b border-accent/20">
          <h2 className="text-xl font-semibold">Recent Transactions</h2>
        </div>
        
        <div className="divide-y divide-accent/10">
          {filteredTransactions.map((tx) => {
            const txType = TRANSACTION_TYPES[tx.type as keyof typeof TRANSACTION_TYPES];
            
            return (
              <div key={tx.id} className="p-6 hover:bg-accent/5 transition-smooth">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{txType.icon}</div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">{txType.label}</h3>
                        <Badge variant="outline" className="text-xs">
                          Block #{tx.block.toLocaleString()}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-muted-foreground">{tx.event}</p>
                      
                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{tx.actor}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{formatTimestamp(tx.timestamp)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span>⛽</span>
                          <span>{tx.gasUsed} gas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right space-y-2">
                    <div className={`font-semibold ${txType.color}`}>
                      {tx.amount}
                    </div>
                    
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-xs text-accent hover:text-accent"
                      onClick={() => window.open(`https://etherscan.io/tx/${tx.hash}`, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View on Etherscan
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {filteredTransactions.length === 0 && (
          <div className="p-12 text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold mb-2">No transactions found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </Card>

      {/* Load More */}
      {filteredTransactions.length > 0 && (
        <div className="text-center">
          <Button variant="outline" className="glass-card border-accent/30">
            Load More Transactions
          </Button>
        </div>
      )}
    </div>
  );
};