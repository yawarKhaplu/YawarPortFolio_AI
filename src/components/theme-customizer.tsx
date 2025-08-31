"use client";

import { useState } from 'react';
import { Paintbrush } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from './ui/skeleton';
import { hexToHsl } from '@/lib/utils';

export function ThemeCustomizer() {
  const [baseColor, setBaseColor] = useState('#38BDF8');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSuggestion = async () => {
    toast({
        title: 'Feature Disabled',
        description: 'AI theme suggestions are not available in static export mode.',
        variant: 'destructive',
      });
  };

  const applyColor = (color: string) => {
    document.documentElement.style.setProperty('--primary', hexToHsl(color));
  };


  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon">
          <Paintbrush className="h-5 w-5" />
          <span className="sr-only">Customize Theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Customize</h4>
            <p className="text-sm text-muted-foreground">
              Pick a base color to get AI-powered palette suggestions.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <Input
                type="color"
                value={baseColor}
                onChange={(e) => setBaseColor(e.target.value)}
                className="w-12 h-10 p-1"
              />
              <Input
                type="text"
                value={baseColor}
                onChange={(e) => setBaseColor(e.target.value)}
              />
            </div>
            <Button onClick={handleSuggestion} disabled={true}>
              {isLoading ? 'Generating...' : 'Suggest Palette'}
            </Button>
          </div>
          {isLoading && (
            <div className="grid grid-cols-5 gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-10 w-10 rounded-full" />
                ))}
            </div>
          )}
          {suggestions.length > 0 && (
            <div className="grid gap-2">
              <p className="text-sm font-medium">Suggestions</p>
              <div className="flex gap-2">
                {suggestions.map((color, index) => (
                  <Button
                    key={index}
                    aria-label={`Apply color ${color}`}
                    onClick={() => applyColor(color)}
                    className="h-10 w-10 rounded-full p-0 border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
               <p className="text-xs text-muted-foreground">
                Click a color to apply it as the primary accent.
               </p>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
