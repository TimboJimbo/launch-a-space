import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cookie, Settings, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    advertising: false,
    functional: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
      
      // Initialize Google Analytics based on consent
      if (savedPreferences.analytics) {
        // @ts-ignore
        gtag('consent', 'update', {
          analytics_storage: 'granted'
        });
      }
      
      // Initialize AdSense based on consent
      if (savedPreferences.advertising) {
        // @ts-ignore
        gtag('consent', 'update', {
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted'
        });
      }
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      advertising: true,
      functional: true
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
    
    // Grant all consents
    // @ts-ignore
    gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted'
    });
  };

  const acceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    
    // Update consent based on selections
    // @ts-ignore
    gtag('consent', 'update', {
      analytics_storage: preferences.analytics ? 'granted' : 'denied',
      ad_storage: preferences.advertising ? 'granted' : 'denied',
      ad_user_data: preferences.advertising ? 'granted' : 'denied',
      ad_personalization: preferences.advertising ? 'granted' : 'denied'
    });
  };

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      advertising: false,
      functional: false
    };
    setPreferences(onlyNecessary);
    localStorage.setItem('cookie-consent', JSON.stringify(onlyNecessary));
    setShowBanner(false);
    
    // Deny all non-essential consents
    // @ts-ignore
    gtag('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Cookie className="w-5 h-5" />
              <CardTitle className="text-lg">Cookie Preferences</CardTitle>
              <Badge variant="secondary">GDPR Compliant</Badge>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowBanner(false)}
              className="h-6 w-6 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <CardDescription>
            We use cookies to enhance your experience, provide personalized content, and analyze our traffic. 
            You can customize your preferences below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Customize
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Cookie Preferences</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="font-medium">Necessary Cookies</Label>
                      <p className="text-sm text-muted-foreground">
                        Essential for website functionality. Cannot be disabled.
                      </p>
                    </div>
                    <Switch checked={true} disabled />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="font-medium">Analytics Cookies</Label>
                      <p className="text-sm text-muted-foreground">
                        Help us understand how visitors use our site (Google Analytics).
                      </p>
                    </div>
                    <Switch 
                      checked={preferences.analytics}
                      onCheckedChange={(checked) => 
                        setPreferences(prev => ({ ...prev, analytics: checked }))
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="font-medium">Advertising Cookies</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable personalized ads and measure ad performance (Google AdSense).
                      </p>
                    </div>
                    <Switch 
                      checked={preferences.advertising}
                      onCheckedChange={(checked) => 
                        setPreferences(prev => ({ ...prev, advertising: checked }))
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label className="font-medium">Functional Cookies</Label>
                      <p className="text-sm text-muted-foreground">
                        Remember your preferences and settings.
                      </p>
                    </div>
                    <Switch 
                      checked={preferences.functional}
                      onCheckedChange={(checked) => 
                        setPreferences(prev => ({ ...prev, functional: checked }))
                      }
                    />
                  </div>
                </div>
                
                <div className="flex gap-3 justify-end">
                  <Button variant="outline" onClick={rejectAll}>
                    Reject All
                  </Button>
                  <Button onClick={acceptSelected}>
                    Save Preferences
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            
            <Button variant="outline" onClick={rejectAll} size="sm">
              Reject All
            </Button>
            <Button onClick={acceptAll} size="sm">
              Accept All
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};