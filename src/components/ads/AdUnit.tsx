import { useEffect, useRef } from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  responsive?: boolean;
  className?: string;
}

export const AdUnit = ({ slot, format = 'auto', responsive = true, className = '' }: AdUnitProps) => {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    try {
      // @ts-ignore
      if (window.adsbygoogle && adRef.current) {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className={`ad-container ${className}`}>
      <div className="text-xs text-muted-foreground mb-1 text-center">Advertisement</div>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8757905862194096"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  );
};

// Predefined ad components for common placements
export const HeaderAd = () => (
  <AdUnit 
    slot="1234567890" // Replace with actual slot ID
    format="horizontal"
    className="my-4"
  />
);

export const SidebarAd = () => (
  <AdUnit 
    slot="1234567891" // Replace with actual slot ID
    format="vertical"
    className="sticky top-4"
  />
);

export const InContentAd = () => (
  <AdUnit 
    slot="1234567892" // Replace with actual slot ID
    format="rectangle"
    className="my-6 mx-auto max-w-md"
  />
);

export const FooterAd = () => (
  <AdUnit 
    slot="1234567893" // Replace with actual slot ID
    format="horizontal"
    className="my-4"
  />
);