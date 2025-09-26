import { Calendar, MapPin, Users, Zap, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface EventCardProps {
  event: {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    price: string;
    attendees: number;
    image: string;
    verified: boolean;
    badges: string[];
    organizer: string;
    ticketsLeft: number;
    totalTickets: number;
  };
}

export const EventCard = ({ event }: EventCardProps) => {
  const soldPercentage = ((event.totalTickets - event.ticketsLeft) / event.totalTickets) * 100;
  
  return (
    <Card className="glass-card overflow-hidden transition-smooth hover:glow-neon hover:-translate-y-2 group">
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <div className="text-4xl">🎪</div>
        </div>
        
        {/* Overlay Badges */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {event.verified && (
            <Badge className="bg-success-green/20 text-success-green border-success-green/30">
              <Shield className="h-3 w-3 mr-1" />
              Verified
            </Badge>
          )}
          {event.badges.map((badge, index) => (
            <Badge key={index} variant="secondary" className="glass-card border-accent/30">
              {badge}
            </Badge>
          ))}
        </div>

        {/* Price Tag */}
        <div className="absolute top-4 right-4">
          <Badge className="gradient-primary text-primary-foreground font-semibold">
            {event.price}
          </Badge>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Event Title & Description */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-smooth">
            {event.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {event.description}
          </p>
        </div>

        {/* Event Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2 text-accent" />
            {new Date(event.date).toLocaleDateString()} at {event.time}
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2 text-accent" />
            {event.location}
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-2 text-accent" />
            {event.attendees} expected attendees
          </div>
        </div>

        {/* Ticket Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">Tickets sold</span>
            <span className="text-sm font-semibold text-primary">
              {event.totalTickets - event.ticketsLeft}/{event.totalTickets}
            </span>
          </div>
          <Progress 
            value={soldPercentage} 
            className="h-2 bg-muted"
          />
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-muted-foreground">
              {event.ticketsLeft} left
            </span>
            <span className="text-xs text-muted-foreground">
              {Math.round(soldPercentage)}% sold
            </span>
          </div>
        </div>

        {/* Organizer */}
        <div className="mb-6 pb-4 border-b border-accent/20">
          <div className="text-xs text-muted-foreground mb-1">Organized by</div>
          <div className="font-medium text-sm">{event.organizer}</div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button className="flex-1 gradient-primary glow-primary transition-bounce">
            <Zap className="h-4 w-4 mr-2" />
            Get NFT Ticket
          </Button>
          <Button variant="outline" size="sm" className="glass-card border-accent/30">
            <TrendingUp className="h-4 w-4" />
          </Button>
        </div>

        {/* Early Bird Indicator */}
        {soldPercentage < 25 && (
          <div className="mt-3 text-center">
            <Badge variant="outline" className="text-warning-orange border-warning-orange/30">
              🔥 Early Bird - Extra Rewards Available
            </Badge>
          </div>
        )}
      </div>
    </Card>
  );
};