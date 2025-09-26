import { useState } from "react";
import { Menu, X, Wallet, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-card border-b border-accent/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-bold gradient-neon bg-clip-text text-transparent">
              EventChain
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-smooth">
              Events
            </a>
            <a href="#create" className="text-foreground hover:text-primary transition-smooth">
              Create Event
            </a>
            <a href="#marketplace" className="text-foreground hover:text-primary transition-smooth">
              Marketplace
            </a>
            <a href="/transparency" className="text-foreground hover:text-primary transition-smooth">
              Transparency
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center relative">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search events..." 
              className="pl-10 w-64 glass-card border-accent/30"
            />
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
            <Button className="gradient-primary glow-primary">
              <Wallet className="h-4 w-4 mr-2" />
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 glass-card rounded-lg border border-accent/20">
            <div className="flex flex-col space-y-4 px-4">
              <div className="lg:hidden">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search events..." 
                    className="pl-10 glass-card border-accent/30"
                  />
                </div>
              </div>
              
              <nav className="flex flex-col space-y-2">
                <a href="#events" className="py-2 text-foreground hover:text-primary transition-smooth">
                  Events
                </a>
                <a href="#create" className="py-2 text-foreground hover:text-primary transition-smooth">
                  Create Event
                </a>
                <a href="#marketplace" className="py-2 text-foreground hover:text-primary transition-smooth">
                  Marketplace
                </a>
                <a href="#transparency" className="py-2 text-foreground hover:text-primary transition-smooth">
                  Transparency
                </a>
              </nav>

              <div className="flex flex-col space-y-2 pt-4 border-t border-accent/20">
                <Button variant="ghost" size="sm" className="justify-start text-muted-foreground hover:text-foreground">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </Button>
                <Button className="gradient-primary glow-primary">
                  <Wallet className="h-4 w-4 mr-2" />
                  Connect Wallet
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};